import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { api } from '../api';
import type { UserDetail } from '../api';
import { generatePassword, when } from '../util';
import { units, unitDone } from '../../../src/data/units';
import { exams } from '../../../src/data/exams';
import { levels } from '../../../src/data/levels';

export default function UserPage({ meId }: { meId: string }) {
  const { id } = useParams();
  const nav = useNavigate();
  const [d, setD] = useState<UserDetail | null>(null);
  const [maxLevel, setMaxLevel] = useState(2);
  const [error, setError] = useState('');
  const [flash, setFlash] = useState('');

  const load = useCallback(() => {
    api<UserDetail>('GET', `/admin/users/${id}`).then((r) => { setD(r); setError(''); }).catch((e: Error) => setError(e.message));
    api<{ maxLevel: number }>('GET', '/admin/meta').then((m) => setMaxLevel(m.maxLevel)).catch(() => undefined);
  }, [id]);
  useEffect(load, [load]);

  const run = async (fn: () => Promise<unknown>, ok: string) => {
    setFlash('');
    setError('');
    try {
      await fn();
      setFlash(ok);
      load();
    } catch (e) {
      setError((e as Error).message);
    }
  };

  if (error && !d) return <p className="notice bad">{error} · <Link to="/">назад</Link></p>;
  if (!d) return <p className="muted">Загрузка…</p>;
  const { user, progress, granted, levels: open } = d;
  const isMe = user.id === meId;

  return (
    <div className="stack">
      <p><Link to="/">← Все ученики</Link></p>
      <h1>{user.email} {user.role === 'admin' && <span className="badge admin">админ</span>}</h1>
      <p className="muted">Регистрация: {when(user.createdAt)} · Последняя активность: {when(user.lastSeenAt)} · Прогресс сохранён: {when(progress.updatedAt)}</p>
      {flash && <p className="notice ok" role="status">{flash}</p>}
      {error && <p className="notice bad" role="alert">{error}</p>}

      <section className="card">
        <h2>Прогресс</h2>
        <div className="stats">
          <div className="stat"><b>{progress.xp}</b><span>XP</span></div>
          <div className="stat"><b>{progress.streak}</b><span>серия дней</span></div>
          <div className="stat"><b>{units.filter((u) => unitDone(progress.lessons, u)).length}/{units.length}</b><span>уроков (частей)</span></div>
          <div className="stat"><b>{progress.letters}/24</b><span>букв хангыля</span></div>
          <div className="stat"><b>{progress.cardsDue}/{progress.cards}</b><span>к повторению / карточек</span></div>
        </div>
        <ul className="checklist">
          {units.map((u) => (
            <li key={u.id} className={unitDone(progress.lessons, u) ? 'done' : ''}>
              {unitDone(progress.lessons, u) ? '✓' : '○'} {u.title.ru}
            </li>
          ))}
        </ul>
        <h3>Экзамены</h3>
        {exams.map((ex) => {
          const r = progress.exams[ex.id];
          return (
            <div key={ex.id} className="row-between">
              <span>{ex.title.ru}: {r ? <>{Math.round((r.best ?? 0) * 100)}% · {r.passed ? '✓ сдан' : 'не сдан'} <span className="muted">({r.at})</span></> : <span className="muted">не сдавался</span>}</span>
              {r && (
                <button type="button" className="btn small" onClick={() => confirm('Сбросить результат экзамена? Следующий уровень закроется, если он не открыт вручную.') && run(() => api('DELETE', `/admin/users/${user.id}/exams/${ex.id}`), 'Результат экзамена сброшен')}>
                  Сбросить результат
                </button>
              )}
            </div>
          );
        })}
      </section>

      <LevelsCard granted={granted} open={open} maxLevel={maxLevel} onSave={(lv) => run(() => api('PUT', `/admin/users/${user.id}/access`, { levels: lv }), 'Доступ к уровням сохранён')} />

      <PasswordCard onSet={(pw) => run(() => api('PUT', `/admin/users/${user.id}/password`, { password: pw }), 'Новый пароль установлен, ученик вышел со всех устройств')} />

      <section className="card danger">
        <h2>Опасная зона</h2>
        <div className="row-between">
          <span>Роль: <b>{user.role === 'admin' ? 'администратор' : 'ученик'}</b></span>
          <button type="button" className="btn small" disabled={isMe} onClick={() => run(() => api('PUT', `/admin/users/${user.id}/role`, { role: user.role === 'admin' ? 'student' : 'admin' }), 'Роль изменена')}>
            {user.role === 'admin' ? 'Сделать учеником' : 'Сделать администратором'}
          </button>
        </div>
        <ConfirmAction label="Сбросить весь прогресс" email={user.email} onConfirm={() => run(() => api('POST', `/admin/users/${user.id}/reset-progress`, { confirm: user.email }), 'Прогресс сброшен')} />
        {!isMe && (
          <ConfirmAction label="Удалить учётную запись" email={user.email} onConfirm={async () => {
            try { await api('DELETE', `/admin/users/${user.id}?confirm=${encodeURIComponent(user.email)}`); nav('/'); } catch (e) { setError((e as Error).message); }
          }} />
        )}
      </section>
    </div>
  );
}

function LevelsCard({ granted, open, maxLevel, onSave }: { granted: number[]; open: number[]; maxLevel: number; onSave: (l: number[]) => void }) {
  const [sel, setSel] = useState<number[]>(granted);
  useEffect(() => setSel(granted), [granted]);
  const list = Array.from({ length: maxLevel - 1 }, (_, i) => i + 2);
  const dirty = JSON.stringify([...sel].sort()) !== JSON.stringify([...granted].sort());
  return (
    <section className="card">
      <h2>Доступ к уровням</h2>
      <p className="muted">Уровень 1 открыт всем. Следующий уровень открывается после сдачи экзамена предыдущего или вручную здесь.</p>
      <ul className="levels">
        {list.map((lv) => {
          const info = levels.find((x) => x.level === lv);
          const byExam = open.includes(lv) && !granted.includes(lv);
          return (
            <li key={lv}>
              <label>
                <input type="checkbox" checked={sel.includes(lv)} onChange={(e) => setSel(e.target.checked ? [...sel, lv] : sel.filter((x) => x !== lv))} />
                {' '}Открыть вручную: {info?.title.ru ?? `Уровень ${lv}`}
              </label>
              <span className="muted"> — сейчас {open.includes(lv) ? (byExam ? 'открыт (сдан экзамен)' : 'открыт') : 'закрыт'}</span>
            </li>
          );
        })}
      </ul>
      <button type="button" className="btn primary" disabled={!dirty} onClick={() => onSave(sel)}>Сохранить</button>
    </section>
  );
}

function PasswordCard({ onSet }: { onSet: (pw: string) => Promise<void> | void }) {
  const [pw, setPw] = useState('');
  const [shown, setShown] = useState<string | null>(null);
  return (
    <section className="card">
      <h2>Новый пароль</h2>
      <p className="muted">Без почты и ссылок: задайте новый пароль и сообщите его ученику. Все его сессии будут завершены.</p>
      <div className="with-btn">
        <input className="input" value={pw} minLength={6} placeholder="Минимум 6 символов" onChange={(e) => setPw(e.target.value)} aria-label="Новый пароль" />
        <button type="button" className="btn" onClick={() => setPw(generatePassword())}>Сгенерировать</button>
        <button type="button" className="btn primary" disabled={pw.length < 6} onClick={async () => { await onSet(pw); setShown(pw); setPw(''); }}>Установить</button>
      </div>
      {shown && (
        <p className="notice ok">Пароль установлен: <code>{shown}</code> <button type="button" className="btn small" onClick={() => navigator.clipboard?.writeText(shown)}>Копировать</button><br />
          <span className="muted">Он показан один раз — на сервере хранится только хэш.</span></p>
      )}
    </section>
  );
}

function ConfirmAction({ label, email, onConfirm }: { label: string; email: string; onConfirm: () => void }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  if (!open) return <div className="row-between"><span>{label}</span><button type="button" className="btn small bad" onClick={() => setOpen(true)}>{label}…</button></div>;
  return (
    <div className="confirm">
      <p>Чтобы подтвердить, введите e-mail: <b>{email}</b></p>
      <div className="with-btn">
        <input className="input" value={text} onChange={(e) => setText(e.target.value)} aria-label="Подтверждение" />
        <button type="button" className="btn bad" disabled={text !== email} onClick={() => { onConfirm(); setOpen(false); setText(''); }}>{label}</button>
        <button type="button" className="btn" onClick={() => { setOpen(false); setText(''); }}>Отмена</button>
      </div>
    </div>
  );
}
