import { useEffect, useState } from 'react';
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom';
import { api, getToken, setToken } from './api';
import type { AdminUser } from './api';
import Login from './pages/Login';
import Users from './pages/Users';
import UserPage from './pages/UserPage';
import Audit from './pages/Audit';

export default function App() {
  const [me, setMe] = useState<AdminUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const out = () => { setToken(null); setMe(null); };
    window.addEventListener('aster-admin:unauthorized', out);
    if (!getToken()) setReady(true);
    else
      api<AdminUser>('GET', '/me')
        .then((u) => setMe(u.role === 'admin' ? u : null))
        .catch(() => undefined)
        .finally(() => setReady(true));
    return () => window.removeEventListener('aster-admin:unauthorized', out);
  }, []);

  if (!ready) return <p className="center muted">Загрузка…</p>;
  if (!me) return <Login onLogin={setMe} />;

  return (
    <HashRouter>
      <header className="top">
        <b className="brand">🌸 AstEr · Админка</b>
        <nav>
          <NavLink to="/" end>Ученики</NavLink>
          <NavLink to="/audit">Журнал</NavLink>
        </nav>
        <span className="grow" />
        <span className="muted who">{me.email}</span>
        <button type="button" className="btn small" onClick={() => { setToken(null); setMe(null); }}>Выйти</button>
      </header>
      <main className="page">
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/users/:id" element={<UserPage meId={me.id} />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="*" element={<Users />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
