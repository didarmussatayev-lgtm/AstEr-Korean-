import type { Progress } from '../types';

export interface AuthUser {
  id: string;
  email: string;
  role?: 'student' | 'admin';
}

export interface SignUpResult {
  error?: string;
  needsConfirm?: boolean;
}

/**
 * Everything the app needs from a server. Swap the implementation
 * (Supabase now, own REST API + Postgres later) without touching the UI.
 */
export interface Backend {
  name: string;
  getUser(): Promise<AuthUser | null>;
  onAuthChange(cb: (u: AuthUser | null) => void): () => void;
  signIn(email: string, password: string): Promise<{ error?: string }>;
  signUp(email: string, password: string): Promise<SignUpResult>;
  signOut(): Promise<void>;
  loadProgress(): Promise<Progress | null>;
  saveProgress(p: Progress): Promise<void>;
}
