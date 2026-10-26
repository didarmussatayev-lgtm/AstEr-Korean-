const TOKEN_KEY = 'aster-admin:token';
const base = ((import.meta.env.VITE_API_URL as string | undefined) ?? '').replace(/\/$/, '');

export const getToken = () => {
  try { return localStorage.getItem(TOKEN_KEY); } catch { return null; }
};
export const setToken = (t: string | null) => {
  try { if (t) localStorage.setItem(TOKEN_KEY, t); else localStorage.removeItem(TOKEN_KEY); } catch { /* ignore */ }
};

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export async function api<T = unknown>(method: string, path: string, body?: unknown): Promise<T> {
  const token = getToken();
  let res: Response;
  try {
    res = await fetch(base + path, {
      method,
      headers: { ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}), ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new ApiError(0, 'Сервер недоступен');
  }
  const data = res.status === 204 ? null : await res.json().catch(() => null);
  if (!res.ok) {
    if (res.status === 401) window.dispatchEvent(new Event('aster-admin:unauthorized'));
    throw new ApiError(res.status, (data as { error?: string } | null)?.error ?? `Ошибка ${res.status}`);
  }
  return data as T;
}

export interface AdminUser { id: string; email: string; role: 'student' | 'admin' }
export interface UserRow extends AdminUser {
  createdAt: string; lastSeenAt: string | null; xp: number; streak: number; lessons: number; levels: number[];
}
export interface UserDetail {
  user: AdminUser & { createdAt: string; lastSeenAt: string | null };
  progress: {
    xp: number; streak: number; lastDay: string; lessons: string[]; letters: number; cards: number; cardsDue: number;
    exams: Record<string, { best?: number; passed?: boolean; at?: string }>; updatedAt: string | null;
  };
  granted: number[];
  levels: number[];
}
export interface AuditRow {
  id: number; admin_email: string | null; action: string; target_email: string | null; details: unknown; at: string;
}
