import type { FastifyInstance, FastifyRequest } from 'fastify';
import { hashPassword, normEmail, passwordProblem, requireAdmin, validEmail } from '../auth.js';
import { config } from '../config.js';
import { pool, q } from '../db.js';
import { grantedLevels, openLevels } from '../access.js';
import { summarize } from '../progress.js';
import type { ProgressData } from '../progress.js';

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

async function audit(req: FastifyRequest, action: string, target: { id: string; email: string } | null, details?: unknown) {
  await q('insert into audit_log (admin_id, admin_email, action, target_id, target_email, details) values ($1,$2,$3,$4,$5,$6)', [
    req.user!.id, req.user!.email, action, target?.id ?? null, target?.email ?? null, details === undefined ? null : JSON.stringify(details),
  ]);
}

async function findUser(id: string) {
  if (!UUID.test(id)) return null;
  const { rows } = await q<{ id: string; email: string; role: 'student' | 'admin'; created_at: string; last_seen_at: string | null }>(
    'select id, email, role, created_at, last_seen_at from users where id = $1', [id]);
  return rows[0] ?? null;
}

export async function adminRoutes(app: FastifyInstance) {
  app.addHook('preHandler', requireAdmin);

  app.get('/admin/meta', async () => ({ maxLevel: config.maxLevel }));

  app.get('/admin/stats', async () => {
    const { rows } = await q<{ users: string; students: string; active7: string; passed: string }>(`
      select
        (select count(*) from users) as users,
        (select count(*) from users where role = 'student') as students,
        (select count(*) from users where last_seen_at > now() - interval '7 days') as active7,
        (select count(*) from progress where data->'exams'->'exam-l1'->>'passed' = 'true') as passed`);
    const r = rows[0];
    return { users: +r.users, students: +r.students, active7: +r.active7, examL1Passed: +r.passed };
  });

  app.get('/admin/users', async (req) => {
    const { q: search = '', page = '1', pageSize = '25' } = req.query as Record<string, string>;
    const size = Math.min(100, Math.max(1, parseInt(pageSize, 10) || 25));
    const offset = (Math.max(1, parseInt(page, 10) || 1) - 1) * size;
    const like = `%${search.trim().toLowerCase().replace(/[%_\\]/g, (c) => `\\${c}`)}%`;
    const total = await q<{ n: string }>('select count(*) n from users where lower(email) like $1', [like]);
    const { rows } = await q<{
      id: string; email: string; role: string; created_at: string; last_seen_at: string | null; data: ProgressData | null; granted: number[];
    }>(
      `select u.id, u.email, u.role, u.created_at, u.last_seen_at, p.data,
              coalesce((select array_agg(level order by level) from access a where a.user_id = u.id), '{}') as granted
         from users u left join progress p on p.user_id = u.id
        where lower(u.email) like $1
        order by u.last_seen_at desc nulls last, u.created_at desc
        limit $2 offset $3`,
      [like, size, offset],
    );
    return {
      total: +total.rows[0].n,
      items: rows.map((r) => {
        const s = summarize(r.data);
        return {
          id: r.id, email: r.email, role: r.role, createdAt: r.created_at, lastSeenAt: r.last_seen_at,
          xp: s.xp, streak: s.streak, lessons: s.lessons.length, levels: openLevels(r.granted, r.data),
        };
      }),
    };
  });

  app.post('/admin/users', async (req, reply) => {
    const body = (req.body ?? {}) as { email?: unknown; password?: unknown; role?: unknown };
    const email = normEmail(body.email);
    if (!validEmail(email)) return reply.code(400).send({ error: 'Enter a valid e-mail' });
    const problem = passwordProblem(body.password);
    if (problem) return reply.code(400).send({ error: problem });
    const role = body.role === 'admin' ? 'admin' : 'student';
    try {
      const { rows } = await q<{ id: string }>('insert into users (email, password_hash, role) values ($1,$2,$3) returning id', [
        email, await hashPassword(body.password as string), role,
      ]);
      await audit(req, 'user.create', { id: rows[0].id, email }, { role });
      return reply.code(201).send({ id: rows[0].id });
    } catch (e) {
      if ((e as { code?: string }).code === '23505') return reply.code(409).send({ error: 'This e-mail is already registered' });
      throw e;
    }
  });

  app.get('/admin/users/:id', async (req, reply) => {
    const u = await findUser((req.params as { id: string }).id);
    if (!u) return reply.code(404).send({ error: 'User not found' });
    const { rows } = await q<{ data: ProgressData; updated_at: string }>('select data, updated_at from progress where user_id = $1', [u.id]);
    const granted = await grantedLevels(u.id);
    const data = rows[0]?.data ?? null;
    return {
      user: { id: u.id, email: u.email, role: u.role, createdAt: u.created_at, lastSeenAt: u.last_seen_at },
      progress: { ...summarize(data), updatedAt: rows[0]?.updated_at ?? null },
      granted,
      levels: openLevels(granted, data),
    };
  });

  app.put('/admin/users/:id/password', async (req, reply) => {
    const u = await findUser((req.params as { id: string }).id);
    if (!u) return reply.code(404).send({ error: 'User not found' });
    const { password } = (req.body ?? {}) as { password?: unknown };
    const problem = passwordProblem(password);
    if (problem) return reply.code(400).send({ error: problem });
    // bumping token_version signs the student out everywhere
    await q('update users set password_hash = $2, token_version = token_version + 1 where id = $1', [u.id, await hashPassword(password as string)]);
    await audit(req, 'user.password', u);
    return reply.code(204).send();
  });

  app.put('/admin/users/:id/access', async (req, reply) => {
    const u = await findUser((req.params as { id: string }).id);
    if (!u) return reply.code(404).send({ error: 'User not found' });
    const { levels } = (req.body ?? {}) as { levels?: unknown };
    if (!Array.isArray(levels) || !levels.every((l) => Number.isInteger(l) && l >= 2 && l <= config.maxLevel))
      return reply.code(400).send({ error: `levels must be integers from 2 to ${config.maxLevel}` });
    const want = [...new Set(levels as number[])].sort();
    const client = await pool.connect();
    try {
      await client.query('begin');
      const before = (await client.query<{ level: number }>('select level from access where user_id = $1 order by level', [u.id])).rows.map((r) => r.level);
      await client.query('delete from access where user_id = $1', [u.id]);
      for (const level of want) await client.query('insert into access (user_id, level, granted_by) values ($1,$2,$3)', [u.id, level, req.user!.id]);
      await client.query('commit');
      await audit(req, 'user.access', u, { before, after: want });
    } catch (e) {
      await client.query('rollback');
      throw e;
    } finally {
      client.release();
    }
    return { granted: want };
  });

  app.delete('/admin/users/:id/exams/:examId', async (req, reply) => {
    const { id, examId } = req.params as { id: string; examId: string };
    const u = await findUser(id);
    if (!u) return reply.code(404).send({ error: 'User not found' });
    // bump updatedAt so the student's browser adopts this change instead of re-uploading its older copy
    const r = await q(
      "update progress set data = jsonb_set(data #- array['exams', $2::text], '{updatedAt}', to_jsonb($3::bigint)), updated_at = now() where user_id = $1",
      [u.id, examId, Date.now()],
    );
    await audit(req, 'user.exam-reset', u, { examId });
    return { reset: r.rowCount ?? 0 };
  });

  app.post('/admin/users/:id/reset-progress', async (req, reply) => {
    const u = await findUser((req.params as { id: string }).id);
    if (!u) return reply.code(404).send({ error: 'User not found' });
    const { confirm } = (req.body ?? {}) as { confirm?: unknown };
    if (confirm !== u.email) return reply.code(400).send({ error: 'Type the student e-mail to confirm' });
    // an empty copy with a fresh updatedAt wins over whatever the student's browser still holds
    const empty = { xp: 0, streak: 0, lastDay: '', lessons: [], letters: [], cards: {}, exams: {}, updatedAt: Date.now() };
    await q(
      `insert into progress (user_id, data, updated_at) values ($1, $2, now())
       on conflict (user_id) do update set data = excluded.data, updated_at = now()`,
      [u.id, empty],
    );
    await audit(req, 'user.progress-reset', u);
    return reply.code(204).send();
  });

  app.put('/admin/users/:id/role', async (req, reply) => {
    const u = await findUser((req.params as { id: string }).id);
    if (!u) return reply.code(404).send({ error: 'User not found' });
    const { role } = (req.body ?? {}) as { role?: unknown };
    if (role !== 'student' && role !== 'admin') return reply.code(400).send({ error: 'role must be student or admin' });
    if (u.id === req.user!.id) return reply.code(400).send({ error: 'You cannot change your own role' });
    await q('update users set role = $2, token_version = token_version + 1 where id = $1', [u.id, role]);
    await audit(req, 'user.role', u, { role });
    return reply.code(204).send();
  });

  app.delete('/admin/users/:id', async (req, reply) => {
    const u = await findUser((req.params as { id: string }).id);
    if (!u) return reply.code(404).send({ error: 'User not found' });
    if (u.id === req.user!.id) return reply.code(400).send({ error: 'You cannot delete yourself' });
    const { confirm } = (req.query ?? {}) as { confirm?: string };
    if (confirm !== u.email) return reply.code(400).send({ error: 'Type the e-mail to confirm' });
    await q('delete from users where id = $1', [u.id]);
    await audit(req, 'user.delete', u);
    return reply.code(204).send();
  });

  app.get('/admin/audit', async (req) => {
    const limit = Math.min(200, Math.max(1, parseInt((req.query as { limit?: string }).limit ?? '50', 10) || 50));
    const { rows } = await q('select id, admin_email, action, target_id, target_email, details, at from audit_log order by at desc, id desc limit $1', [limit]);
    return rows;
  });
}
