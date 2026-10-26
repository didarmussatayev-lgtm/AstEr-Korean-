import { useCallback, useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import type { UserRow } from '../api';
import { ago, generatePassword, useDebounced } from '../util';
import { lessons } from '../../../src/data/lessons';

interface Stats { users: number; students: number; active7: number; examL1Passed: number }
const PAGE = 25;

export default function Users() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [search, setSearch] = useState('');
  const q = useDebounced(search);
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState<UserRow[]>([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState('');
  const [adding, setAdding] = useState(false);

  const load = useCallback(() => {
    api<{ total: number; items: UserRow[] }>('GET', `/admin/users?q=${encodeURIComponent(q)}&page=${page}&pageSize=${PAGE}`)
      .then((r) => { setRows(r.items); setTotal(r.total); setError(''); })
      .catch((e: Error) => setError(e.message));
    api<Stats>('GET', '/admin/stats').then(setStats).catch(() => undefined);
  }, [q, page]);

  useEffect(load, [load]);
  useEffect(() => setPage(1), [q]);

  const pages = Math.max(1, Math.ceil(total / PAGE));
  const lessonTotal = lessons.length;

  return (
    <div className="stack">
      <div className="stats">
        <div className="stat"><b>{stats?.students ?? '…'}</b><span>учеников</span></div>
        <div className="stat"><b>{stats?.active7 ?? '…'}</b><span>активны за 7 дней</span></div>
        <div className="stat"><b>{stats?.examL1Passed ?? '…'}</b><span>сдали экзамен уровня 1</span></div>
      </div>

      <div className="toolbar">
        <input className="input" type="search" placeholder="Поиск по e-mail" value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Поиск" />
        <button type="button" className="btn primary" onClick={() => setAdding((v) => !v)}>{adding ? 'Закрыть' : '+ Новая учётная запись'}</button>
      </div>

      {adding && <AddUser onDone={() => { setAdding(false); load(); }} />}
      {error && <p className="notice bad" role="alert">{error}</p>}

      <div className="table-wrap card">
        <table>
          <thead>
            <tr><th>E-mail</th><th>Роль</th><th>Уровни</th><th>Уроки</th><th>XP</th><th>Серия</th><th>Был(а)</th></tr>
          </thead>
          <tbody>
            {rows.map((u) => (
              <tr key={u.id}>
                <td><Link to={`/users/${u.id}`}>{u.email}</Link></td>
                <td>{u.role === 'admin' ? <span className="badge admin">админ</span> : 'ученик'}</td>
                <td>{u.levels.join(', ')}</td>
                <td>{u.lessons}/{lessonTotal}</td>
                <td>{u.xp}</td>
                <td>{u.streak}</td>
                <td className="muted">{ago(u.lastSeenAt)}</td>
              </tr>
            ))}
            {rows.length === 0 && !error && <tr><td colSpan={7} className="center muted">Никого не найдено</td></tr>}
          </tbody>
        </table>
      </div>

      <div className="pager">
        <button type="button" className="btn small" disabled={page <= 1} onClick={() => setPage(page - 1)}>←</button>
        <span className="muted">{page} / {pages} · всего {total}</span>
        <button type="button" className="btn small" disabled={page >= pages} onClick={() => setPage(page + 1)}>→</button>
      </div>
    </div>
  );
}

function AddUser({ onDone }: { onDone: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(generatePassword());
  const [role, setRole] = useState<'student' | 'admin'>('student');
  const [error, setError] = useState('');
  const [created, setCreated] = useState<{ email: string; password: string } | null>(null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await api('POST', '/admin/users', { email, password, role });
      setCreated({ email, password });
    } catch (err) {
      setError((err as Error).message);
    }
  };

  if (created)
    return (
      <div className="card">
        <p>Учётная запись создана. Передайте данные ученику — пароль больше нигде не будет показан:</p>
        <p><b>{created.email}</b> · <code>{created.password}</code></p>
        <button type="button" className="btn" onClick={onDone}>Готово</button>
      </div>
    );

  return (
    <form className="card form-row" onSubmit={submit}>
      <label>E-mail<input className="input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></label>
      <label>Пароль
        <span className="with-btn">
          <input className="input" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="button" className="btn small" onClick={() => setPassword(generatePassword())}>Сгенерировать</button>
        </span>
      </label>
      <label>Роль
        <select className="input" value={role} onChange={(e) => setRole(e.target.value as 'student' | 'admin')}>
          <option value="student">ученик</option>
          <option value="admin">администратор</option>
        </select>
      </label>
      <button className="btn primary">Создать</button>
      {error && <p className="notice bad" role="alert">{error}</p>}
    </form>
  );
}
