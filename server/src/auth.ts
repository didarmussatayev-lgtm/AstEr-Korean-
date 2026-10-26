import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { config, PASSWORD_MAX, PASSWORD_MIN } from './config.js';
import { q } from './db.js';

export interface AuthUser {
  id: string;
  email: string;
  role: 'student' | 'admin';
}

declare module 'fastify' {
  interface FastifyRequest {
    user?: AuthUser;
  }
}

export const hashPassword = (pw: string) => bcrypt.hash(pw, 10);
export const checkPassword = (pw: string, hash: string) => bcrypt.compare(pw, hash);

export const normEmail = (e: unknown) => (typeof e === 'string' ? e.trim().toLowerCase() : '');
export const validEmail = (e: string) => e.length <= 200 && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e);

export function passwordProblem(pw: unknown): string | null {
  if (typeof pw !== 'string') return 'Password is required';
  if (pw.length < PASSWORD_MIN) return `Password must be at least ${PASSWORD_MIN} characters`;
  if (pw.length > PASSWORD_MAX) return 'Password is too long';
  return null;
}

export const signToken = (id: string, tokenVersion: number) =>
  jwt.sign({ sub: id, tv: tokenVersion }, config.jwtSecret, { expiresIn: '30d' });

/** Resolves the bearer token to a user; the token dies when the admin sets a new password (token_version). */
export async function authenticate(req: FastifyRequest, reply: FastifyReply) {
  const h = req.headers.authorization;
  const token = h?.startsWith('Bearer ') ? h.slice(7) : null;
  if (!token) return reply.code(401).send({ error: 'Not signed in' });
  let payload: { sub?: string; tv?: number };
  try {
    payload = jwt.verify(token, config.jwtSecret) as { sub?: string; tv?: number };
  } catch {
    return reply.code(401).send({ error: 'Session expired, sign in again' });
  }
  const { rows } = await q<{ id: string; email: string; role: 'student' | 'admin'; token_version: number }>(
    'select id, email, role, token_version from users where id = $1',
    [payload.sub],
  );
  const u = rows[0];
  if (!u || u.token_version !== payload.tv) return reply.code(401).send({ error: 'Session expired, sign in again' });
  req.user = { id: u.id, email: u.email, role: u.role };
  // last_seen is a cheap activity indicator for the admin table; update at most every 5 minutes
  void q("update users set last_seen_at = now() where id = $1 and (last_seen_at is null or last_seen_at < now() - interval '5 minutes')", [u.id]);
}

export async function requireAdmin(req: FastifyRequest, reply: FastifyReply) {
  await authenticate(req, reply);
  if (reply.sent) return;
  if (req.user?.role !== 'admin') return reply.code(403).send({ error: 'Admins only' });
}

/** Minimal in-memory throttle for login attempts: 8 failures per 10 minutes per ip+email. */
const fails = new Map<string, { n: number; until: number }>();
const WINDOW = 10 * 60_000;
export function throttled(key: string): boolean {
  const f = fails.get(key);
  if (!f) return false;
  if (Date.now() > f.until) {
    fails.delete(key);
    return false;
  }
  return f.n >= 8;
}
export function noteFailure(key: string) {
  const f = fails.get(key);
  if (!f || Date.now() > f.until) fails.set(key, { n: 1, until: Date.now() + WINDOW });
  else f.n += 1;
}
export const clearFailures = (key: string) => void fails.delete(key);
