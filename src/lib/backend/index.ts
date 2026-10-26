import { createRestBackend } from './rest';
import { createSupabaseBackend } from './supabase';
import type { Backend } from './types';

function pick(): Backend | null {
  if (import.meta.env.VITE_API_URL) return createRestBackend(import.meta.env.VITE_API_URL as string);
  if (import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY)
    return createSupabaseBackend(import.meta.env.VITE_SUPABASE_URL as string, import.meta.env.VITE_SUPABASE_ANON_KEY as string);
  return null;
}

/** null = local mode (progress only in this browser). */
export const backend = pick();
export type { AuthUser, Backend } from './types';
