import type { FastifyInstance } from 'fastify';
import { authenticate, checkPassword, clearFailures, hashPassword, noteFailure, normEmail, passwordProblem, signToken, throttled, validEmail } from '../auth.js';
import { config } from '../config.js';
import { q } from '../db.js';
import { grantedLevels, openLevels } from '../access.js';
import { cleanProgress } from '../progress.js';
import type { ProgressData } from '../progress.js';

interface UserRow {
  id: string;
  email: string;
  role: 'student' | 'admin';
  password_hash: string;
  token_version: number;
}

const publicUser = (u: Pick<UserRow, 'id' | 'email' | 'role'>) => ({ id: u.id, email: u.email, role: u.role });

export async function studentRoutes(app: FastifyInstance) {
  app.post('/auth/register', async (req, reply) => {
    if (!config.allowRegistration) return reply.code(403).send({ error: 'Registration is closed. Ask your teacher for an account.' });
    const body = (req.body ?? {}) as { email?: unknown; password?: unknown };
    const email = normEmail(body.email);
    if (!validEmail(email)) return reply.code(400).send({ error: 'Enter a valid e-mail' });
    const problem = passwordProblem(body.password);
    if (problem) return reply.code(400).send({ error: problem });
    const hash = await hashPassword(body.password as string);
    try {
      const { rows } = await q<UserRow>(
        'insert into users (email, password_hash) values ($1, $2) returning id, email, role, password_hash, token_version',
        [email, hash],
      );
      return reply.code(201).send({ token: signToken(rows[0].id, rows[0].token_version), user: publicUser(rows[0]) });
    } catch (e) {
      if ((e as { code?: string }).code === '23505') return reply.code(409).send({ error: 'This e-mail is already registered' });
      throw e;
    }
  });

  app.post('/auth/login', async (req, reply) => {
    const body = (req.body ?? {}) as { email?: unknown; password?: unknown };
    const email = normEmail(body.email);
    const key = `${req.ip}|${email}`;
    if (throttled(key)) return reply.code(429).send({ error: 'Too many attempts. Try again in a few minutes.' });
    const { rows } = await q<UserRow>('select id, email, role, password_hash, token_version from users where lower(email) = $1', [email]);
    const u = rows[0];
    // always run bcrypt so timing does not reveal whether the account exists
    const ok = await checkPassword(typeof body.password === 'string' ? body.password : '', u?.password_hash ?? '$2a$10$invalidinvalidinvalidinvalidinvalidinvalidinvalidinvalidinva');
    if (!u || !ok) {
      noteFailure(key);
      return reply.code(401).send({ error: 'Wrong e-mail or password' });
    }
    clearFailures(key);
    await q('update users set last_seen_at = now() where id = $1', [u.id]);
    return { token: signToken(u.id, u.token_version), user: publicUser(u) };
  });

  app.get('/me', { preHandler: authenticate }, async (req) => req.user);

  app.get('/progress', { preHandler: authenticate }, async (req) => {
    const id = req.user!.id;
    const { rows } = await q<{ data: ProgressData }>('select data from progress where user_id = $1', [id]);
    const granted = await grantedLevels(id);
    // `granted` always comes from the admin-controlled table, never from the stored JSON
    return rows[0] ? { ...rows[0].data, granted } : null;
  });

  app.put('/progress', { preHandler: authenticate, bodyLimit: 1_000_000 }, async (req, reply) => {
    const data = cleanProgress(req.body);
    if (!data) return reply.code(400).send({ error: 'Invalid progress data' });
    await q(
      `insert into progress (user_id, data, updated_at) values ($1, $2, now())
       on conflict (user_id) do update set data = excluded.data, updated_at = now()`,
      [req.user!.id, data],
    );
    return reply.code(204).send();
  });

  app.get('/access', { preHandler: authenticate }, async (req) => {
    const id = req.user!.id;
    const granted = await grantedLevels(id);
    const { rows } = await q<{ data: ProgressData }>('select data from progress where user_id = $1', [id]);
    return { granted, levels: openLevels(granted, rows[0]?.data ?? null) };
  });
}
