import { useEffect, useState } from 'react';
import { api } from '../api';
import type { AuditRow } from '../api';
import { when } from '../util';

const names: Record<string, string> = {
  'user.create': 'Создана учётная запись', 'user.password': 'Задан новый пароль', 'user.access': 'Изменён доступ к уровням',
  'user.exam-reset': 'Сброшен экзамен', 'user.progress-reset': 'Сброшен прогресс', 'user.role': 'Изменена роль', 'user.delete': 'Удалена учётная запись',
};

export default function Audit() {
  const [rows, setRows] = useState<AuditRow[]>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    api<AuditRow[]>('GET', '/admin/audit?limit=100').then(setRows).catch((e: Error) => setError(e.message));
  }, []);
  return (
    <div className="stack">
      <h1>Журнал действий</h1>
      {error && <p className="notice bad">{error}</p>}
      <div className="table-wrap card">
        <table>
          <thead><tr><th>Когда</th><th>Кто</th><th>Действие</th><th>Ученик</th><th>Детали</th></tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td className="muted">{when(r.at)}</td>
                <td>{r.admin_email}</td>
                <td>{names[r.action] ?? r.action}</td>
                <td>{r.target_email}</td>
                <td className="muted"><code>{r.details ? JSON.stringify(r.details) : ''}</code></td>
              </tr>
            ))}
            {rows.length === 0 && <tr><td colSpan={5} className="center muted">Пока пусто</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
}
