import { useState } from 'react';
import type { FormEvent } from 'react';
import { api, setToken } from '../api';
import type { AdminUser } from '../api';

export default function Login({ onLogin }: { onLogin: (u: AdminUser) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      const r = await api<{ token: string; user: AdminUser }>('POST', '/auth/login', { email, password });
      if (r.user.role !== 'admin') throw new Error('У этой учётной записи нет прав администратора');
      setToken(r.token);
      onLogin(r.user);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="card login" onSubmit={submit}>
      <h1>🌸 AstEr · Админка</h1>
      <label>Логин или эл. почта<input className="input" type="text" required autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
      <label>Пароль<input className="input" type="password" required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
      <button className="btn primary" disabled={busy}>Войти</button>
      {error && <p className="notice bad" role="alert">{error}</p>}
    </form>
  );
}
