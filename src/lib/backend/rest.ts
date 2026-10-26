import type { AuthUser, Backend } from './types';
import type { Progress } from '../types';

const TOKEN_KEY = 'aster-korean:token';

/**
 * Own server (Node + Postgres). The contract is described in docs/API.md.
 * Auth is a bearer token returned by /auth/login and /auth/register.
 */
export function createRestBackend(apiUrl: string): Backend {
  // "/" means same origin (the server serves the site itself)
  const base = apiUrl.replace(/\/$/, '');
  const listeners = new Set<(u: AuthUser | null) => void>();
  const token = () => {
    try {
      return localStorage.getItem(TOKEN_KEY);
    } catch {
      return null;
    }
  };
  const setToken = (t: string | null) => {
    try {
      if (t) localStorage.setItem(TOKEN_KEY, t);
      else localStorage.removeItem(TOKEN_KEY);
    } catch {
      /* ignore */
    }
  };
  const call = async (path: string, init: RequestInit = {}) => {
    const t = token();
    const res = await fetch(`${base}${path}`, {
      ...init,
      headers: { 'Content-Type': 'application/json', ...(t ? { Authorization: `Bearer ${t}` } : {}), ...init.headers },
    });
    const body = res.status === 204 ? null : await res.json().catch(() => null);
    return { ok: res.ok, status: res.status, body };
  };
  const emit = (u: AuthUser | null) => listeners.forEach((l) => l(u));

  const getUser = async (): Promise<AuthUser | null> => {
    if (!token()) return null;
    const r = await call('/me');
    if (!r.ok) {
      if (r.status === 401) setToken(null);
      return null;
    }
    return r.body as AuthUser;
  };

  const authenticate = async (path: string, email: string, password: string) => {
    const r = await call(path, { method: 'POST', body: JSON.stringify({ email, password }) });
    if (!r.ok) return { error: (r.body?.error as string) ?? `HTTP ${r.status}` };
    setToken(r.body.token);
    emit(r.body.user as AuthUser);
    return {};
  };

  return {
    name: 'rest',
    getUser,
    onAuthChange(cb) {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    signIn: (email, password) => authenticate('/auth/login', email, password),
    signUp: (email, password) => authenticate('/auth/register', email, password),
    async signOut() {
      setToken(null);
      emit(null);
    },
    async loadProgress() {
      const r = await call('/progress');
      return r.ok ? (r.body as Progress | null) : null;
    },
    async saveProgress(p) {
      await call('/progress', { method: 'PUT', body: JSON.stringify(p) });
    },
  };
}
