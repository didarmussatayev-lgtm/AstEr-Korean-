import { createClient } from '@supabase/supabase-js';
import type { Session } from '@supabase/supabase-js';
import type { AuthUser, Backend } from './types';
import type { Progress } from '../types';

const toUser = (s: Session | null): AuthUser | null =>
  s ? { id: s.user.id, email: s.user.email ?? '' } : null;

export function createSupabaseBackend(url: string, key: string): Backend {
  const sb = createClient(url, key);
  return {
    name: 'supabase',
    async getUser() {
      return toUser((await sb.auth.getSession()).data.session);
    },
    onAuthChange(cb) {
      const { data } = sb.auth.onAuthStateChange((_e, s) => cb(toUser(s)));
      return () => data.subscription.unsubscribe();
    },
    async signIn(email, password) {
      const { error } = await sb.auth.signInWithPassword({ email, password });
      return { error: error?.message };
    },
    async signUp(email, password) {
      const { data, error } = await sb.auth.signUp({ email, password });
      return { error: error?.message, needsConfirm: !error && !data.session };
    },
    async signOut() {
      await sb.auth.signOut();
    },
    async loadProgress() {
      const uid = (await sb.auth.getSession()).data.session?.user.id;
      if (!uid) return null;
      const { data } = await sb.from('progress').select('data').eq('user_id', uid).maybeSingle();
      return (data?.data as Progress | undefined) ?? null;
    },
    async saveProgress(p) {
      const uid = (await sb.auth.getSession()).data.session?.user.id;
      if (!uid) return;
      await sb.from('progress').upsert({ user_id: uid, data: p, updated_at: new Date().toISOString() });
    },
  };
}
