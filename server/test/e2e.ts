// End-to-end test against a real Postgres. Needs DATABASE_URL (a throwaway database!).
import assert from 'node:assert/strict';

process.env.QUIET = '1';
process.env.MAX_LEVEL = '3';
process.env.JWT_SECRET = 'test-secret-test-secret';
const dbUrl = process.env.TEST_DATABASE_URL ?? 'postgres://aster:aster@localhost:5432/aster_test';
process.env.DATABASE_URL = dbUrl;

const { migrate, pool, q } = await import('../src/db.js');
const { buildApp } = await import('../src/app.js');
const { hashPassword } = await import('../src/auth.js');

await migrate();
await q('truncate users cascade');
await q('truncate audit_log');

const app = await buildApp();
let passed = 0;
const step = async (name: string, fn: () => Promise<void>) => {
  await fn();
  passed++;
  console.log('  ✓', name);
};

type Res = { status: number; body: any };
async function call(method: string, url: string, opts: { token?: string; body?: unknown } = {}): Promise<Res> {
  const res = await app.inject({
    method: method as 'GET',
    url,
    headers: { ...(opts.token ? { authorization: `Bearer ${opts.token}` } : {}), ...(opts.body ? { 'content-type': 'application/json' } : {}) },
    payload: opts.body ? JSON.stringify(opts.body) : undefined,
    remoteAddress: '10.0.0.1',
  });
  let body: any = null;
  try { body = res.body ? JSON.parse(res.body) : null; } catch { body = res.body; }
  return { status: res.statusCode, body };
}

// the first admin is normally created from ADMIN_EMAIL on start
await q("insert into users (email, password_hash, role) values ('admin@school.kz', $1, 'admin')", [await hashPassword('adminpass1')]);

let admin = '';
let ann = '';
let annId = '';
let bob = '';
let bobId = '';

await step('admin signs in', async () => {
  const r = await call('POST', '/auth/login', { body: { email: 'Admin@School.kz', password: 'adminpass1' } });
  assert.equal(r.status, 200);
  assert.equal(r.body.user.role, 'admin');
  admin = r.body.token;
});

await step('students register; bad input is rejected; duplicates are 409', async () => {
  assert.equal((await call('POST', '/auth/register', { body: { email: 'nope', password: 'secret1' } })).status, 400);
  assert.equal((await call('POST', '/auth/register', { body: { email: 'x@y.kz', password: '123' } })).status, 400);
  const a = await call('POST', '/auth/register', { body: { email: 'ann@school.kz', password: 'secret1' } });
  assert.equal(a.status, 201);
  ann = a.body.token; annId = a.body.user.id;
  const b = await call('POST', '/auth/register', { body: { email: 'bob@school.kz', password: 'secret2' } });
  bob = b.body.token; bobId = b.body.user.id;
  assert.equal((await call('POST', '/auth/register', { body: { email: 'ANN@school.kz', password: 'secret1' } })).status, 409);
});

await step('login: wrong password 401, right one 200, /me works', async () => {
  assert.equal((await call('POST', '/auth/login', { body: { email: 'ann@school.kz', password: 'wrong!!' } })).status, 401);
  const r = await call('POST', '/auth/login', { body: { email: 'ann@school.kz', password: 'secret1' } });
  assert.equal(r.status, 200);
  const me = await call('GET', '/me', { token: r.body.token });
  assert.equal(me.body.email, 'ann@school.kz');
  assert.equal((await call('GET', '/me')).status, 401);
  assert.equal((await call('GET', '/me', { token: 'garbage' })).status, 401);
});

await step('progress round-trip; client cannot forge `granted`', async () => {
  assert.equal((await call('GET', '/progress', { token: ann })).body, null);
  const data = { xp: 120, streak: 3, lastDay: '2026-10-26', lessons: ['l1-greetings'], letters: ['ㅏ'], cards: {}, exams: {}, granted: [2, 3], updatedAt: 5 };
  assert.equal((await call('PUT', '/progress', { token: ann, body: data })).status, 204);
  const r = await call('GET', '/progress', { token: ann });
  assert.equal(r.body.xp, 120);
  assert.deepEqual(r.body.granted, []);
  assert.equal((await call('PUT', '/progress', { token: ann, body: { xp: 'lots' } })).status, 400);
  assert.equal((await call('PUT', '/progress', { token: ann, body: [1] })).status, 400);
});

await step('access: passing the level-1 exam opens level 2; level 3 stays closed', async () => {
  assert.deepEqual((await call('GET', '/access', { token: ann })).body.levels, [1]);
  const data = { xp: 500, lessons: [], exams: { 'exam-l1': { best: 0.9, passed: true, at: '2026-10-26' } }, updatedAt: 6 };
  await call('PUT', '/progress', { token: ann, body: data });
  assert.deepEqual((await call('GET', '/access', { token: ann })).body.levels, [1, 2]);
});

await step('students cannot use the admin API', async () => {
  assert.equal((await call('GET', '/admin/users', { token: ann })).status, 403);
  assert.equal((await call('GET', '/admin/users')).status, 401);
  assert.equal((await call('PUT', `/admin/users/${bobId}/password`, { token: ann, body: { password: 'hacked123' } })).status, 403);
});

await step('admin lists and searches students with progress', async () => {
  const all = await call('GET', '/admin/users', { token: admin });
  assert.equal(all.body.total, 3);
  const s = await call('GET', '/admin/users?q=ann', { token: admin });
  assert.equal(s.body.items.length, 1);
  assert.equal(s.body.items[0].xp, 500);
  assert.deepEqual(s.body.items[0].levels, [1, 2]);
  assert.equal((await call('GET', '/admin/users?q=%25', { token: admin })).body.total, 0); // wildcard is escaped
  const d = await call('GET', `/admin/users/${annId}`, { token: admin });
  assert.equal(d.body.progress.exams['exam-l1'].passed, true);
  assert.equal((await call('GET', '/admin/users/not-a-uuid', { token: admin })).status, 404);
  const st = await call('GET', '/admin/stats', { token: admin });
  assert.equal(st.body.examL1Passed, 1);
});

await step('admin opens and closes levels for one student', async () => {
  assert.equal((await call('PUT', `/admin/users/${bobId}/access`, { token: admin, body: { levels: [1] } })).status, 400);
  assert.equal((await call('PUT', `/admin/users/${bobId}/access`, { token: admin, body: { levels: [4] } })).status, 400);
  assert.deepEqual((await call('PUT', `/admin/users/${bobId}/access`, { token: admin, body: { levels: [3, 2, 3] } })).body.granted, [2, 3]);
  assert.deepEqual((await call('GET', '/access', { token: bob })).body.levels, [1, 2, 3]);
  await call('PUT', '/progress', { token: bob, body: { xp: 1, updatedAt: 1 } });
  assert.deepEqual((await call('GET', '/progress', { token: bob })).body.granted, [2, 3]);
  await call('PUT', `/admin/users/${bobId}/access`, { token: admin, body: { levels: [] } });
  assert.deepEqual((await call('GET', '/access', { token: bob })).body.levels, [1]);
});

await step('admin sets a new password: old password and old sessions stop working', async () => {
  assert.equal((await call('PUT', `/admin/users/${annId}/password`, { token: admin, body: { password: '12' } })).status, 400);
  assert.equal((await call('PUT', `/admin/users/${annId}/password`, { token: admin, body: { password: 'brand-new-1' } })).status, 204);
  assert.equal((await call('GET', '/me', { token: ann })).status, 401);
  assert.equal((await call('POST', '/auth/login', { body: { email: 'ann@school.kz', password: 'secret1' } })).status, 401);
  const r = await call('POST', '/auth/login', { body: { email: 'ann@school.kz', password: 'brand-new-1' } });
  assert.equal(r.status, 200);
  ann = r.body.token;
  assert.equal((await call('GET', '/progress', { token: ann })).body.xp, 500); // progress is kept
});

await step('admin resets one exam result, then the whole progress (needs e-mail confirmation)', async () => {
  assert.equal((await call('DELETE', `/admin/users/${annId}/exams/exam-l1`, { token: admin })).status, 200);
  assert.deepEqual((await call('GET', '/access', { token: ann })).body.levels, [1]);
  assert.ok((await call('GET', '/progress', { token: ann })).body.updatedAt > 1000);
  assert.equal((await call('POST', `/admin/users/${annId}/reset-progress`, { token: admin, body: { confirm: 'wrong' } })).status, 400);
  assert.equal((await call('POST', `/admin/users/${annId}/reset-progress`, { token: admin, body: { confirm: 'ann@school.kz' } })).status, 204);
  const after = (await call('GET', '/progress', { token: ann })).body;
  assert.equal(after.xp, 0);
  assert.ok(after.updatedAt > Date.now() - 60_000, 'reset copy must be newer than the browser copy');
});

await step('admin creates an account, changes a role, cannot demote or delete self', async () => {
  const c = await call('POST', '/admin/users', { token: admin, body: { email: 'new@school.kz', password: 'temp-pass-1' } });
  assert.equal(c.status, 201);
  assert.equal((await call('POST', '/auth/login', { body: { email: 'new@school.kz', password: 'temp-pass-1' } })).status, 200);
  assert.equal((await call('PUT', `/admin/users/${c.body.id}/role`, { token: admin, body: { role: 'admin' } })).status, 204);
  assert.equal((await call('PUT', `/admin/users/${c.body.id}/role`, { token: admin, body: { role: 'boss' } })).status, 400);
  const me = (await call('GET', '/me', { token: admin })).body;
  assert.equal((await call('PUT', `/admin/users/${me.id}/role`, { token: admin, body: { role: 'student' } })).status, 400);
  assert.equal((await call('DELETE', `/admin/users/${me.id}?confirm=${me.email}`, { token: admin })).status, 400);
  assert.equal((await call('DELETE', `/admin/users/${c.body.id}?confirm=nope`, { token: admin })).status, 400);
  assert.equal((await call('DELETE', `/admin/users/${c.body.id}?confirm=new@school.kz`, { token: admin })).status, 204);
});

await step('admin can create an account with a plain login (no @) and it can sign in', async () => {
  assert.equal((await call('POST', '/admin/users', { token: admin, body: { email: 'a b', password: 'temp-pass-1' } })).status, 400);
  assert.equal((await call('POST', '/admin/users', { token: admin, body: { email: 'Teacher1', password: 'temp-pass-1' } })).status, 201);
  const r = await call('POST', '/auth/login', { body: { email: 'teacher1', password: 'temp-pass-1' } });
  assert.equal(r.status, 200);
  assert.equal(r.body.user.email, 'teacher1');
  // students still have to register with a real e-mail
  assert.equal((await call('POST', '/auth/register', { body: { email: 'justaname', password: 'secret1' } })).status, 400);
});

await step('every admin action is in the audit log', async () => {
  const log = (await call('GET', '/admin/audit', { token: admin })).body as { action: string }[];
  const actions = new Set(log.map((l) => l.action));
  for (const a of ['user.create', 'user.access', 'user.password', 'user.exam-reset', 'user.progress-reset', 'user.role', 'user.delete']) assert.ok(actions.has(a), `missing ${a}`);
});

await step('login is throttled after repeated failures', async () => {
  let last = 0;
  for (let i = 0; i < 10; i++) last = (await call('POST', '/auth/login', { body: { email: 'bob@school.kz', password: 'bad-guess' } })).status;
  assert.equal(last, 429);
});

await step('registration can be closed', async () => {
  // config is read once at import; verify the flag is wired through the route instead of toggling env
  const { config } = await import('../src/config.js');
  config.allowRegistration = false;
  assert.equal((await call('POST', '/auth/register', { body: { email: 'late@school.kz', password: 'secret1' } })).status, 403);
  config.allowRegistration = true;
});

await app.close();
await pool.end();
console.log(`\nAll ${passed} server checks passed`);
