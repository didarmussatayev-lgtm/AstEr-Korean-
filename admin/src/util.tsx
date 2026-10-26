import { useEffect, useState } from 'react';

export function ago(iso: string | null): string {
  if (!iso) return 'никогда';
  const s = (Date.now() - new Date(iso).getTime()) / 1000;
  if (s < 90) return 'только что';
  if (s < 3600) return `${Math.round(s / 60)} мин назад`;
  if (s < 86400) return `${Math.round(s / 3600)} ч назад`;
  if (s < 86400 * 30) return `${Math.round(s / 86400)} дн назад`;
  return new Date(iso).toLocaleDateString('ru-RU');
}

export const when = (iso: string | null) => (iso ? new Date(iso).toLocaleString('ru-RU') : '—');

export function useDebounced<T>(value: T, ms = 300): T {
  const [v, setV] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setV(value), ms);
    return () => clearTimeout(t);
  }, [value, ms]);
  return v;
}

/** Readable temporary password without look-alike characters. */
export function generatePassword(len = 10): string {
  const chars = 'abcdefghjkmnpqrstuvwxyzACDEFGHJKLMNPQRTUVWXYZ2346789';
  const bytes = crypto.getRandomValues(new Uint32Array(len));
  return Array.from(bytes, (b) => chars[b % chars.length]).join('');
}
