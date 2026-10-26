import { useState } from 'react';
import type { FormEvent } from 'react';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../lib/progress';
import { cloudEnabled, supabase } from '../lib/supabase';
import { Card } from '../components/ui';

export default function Account() {
  const { t } = useI18n();
  const { session, syncing } = useProgress();
  const [mode, setMode] = useState<'in' | 'up'>('in');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!supabase) return;
    setBusy(true);
    setMsg('');
    const res = mode === 'in'
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password });
    setBusy(false);
    if (res.error) setMsg(res.error.message);
    else if (mode === 'up' && !res.data.session) setMsg(t('checkMail'));
  };

  return (
    <div className="stack">
      <h1>{t('account')}</h1>
      {!cloudEnabled && (
        <Card>
          <p>{t('localMode')}</p>
          <p className="muted">{t('cloudOff')}</p>
        </Card>
      )}
      {cloudEnabled && session && (
        <Card>
          <p>{t('loggedAs')} <b>{session.user.email}</b></p>
          <p className="muted">{syncing ? '…' : t('cloudOn')}</p>
          <button type="button" className="btn" onClick={() => supabase!.auth.signOut()}>{t('signOut')}</button>
        </Card>
      )}
      {cloudEnabled && !session && (
        <Card>
          <p className="muted">{t('localMode')}</p>
          <div className="tabs">
            <button type="button" className={mode === 'in' ? 'active' : ''} onClick={() => setMode('in')}>{t('signIn')}</button>
            <button type="button" className={mode === 'up' ? 'active' : ''} onClick={() => setMode('up')}>{t('signUp')}</button>
          </div>
          <form onSubmit={submit} className="form">
            <label>{t('email')}<input className="input" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
            <label>{t('password')}<input className="input" type="password" required minLength={6} autoComplete={mode === 'in' ? 'current-password' : 'new-password'} value={password} onChange={(e) => setPassword(e.target.value)} /></label>
            <button className="btn primary" disabled={busy}>{mode === 'in' ? t('signIn') : t('signUp')}</button>
            {msg && <p className="notice" role="alert">{msg}</p>}
          </form>
        </Card>
      )}
    </div>
  );
}
