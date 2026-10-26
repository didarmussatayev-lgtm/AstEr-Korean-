import { Link } from 'react-router-dom';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../lib/progress';
import { addDays, today } from '../lib/srs';
import { lessons } from '../data/lessons';
import { allLetters } from '../data/hangul';
import { Card, ProgressBar } from '../components/ui';

export default function Home() {
  const { t, tx } = useI18n();
  const { p, dueCount } = useProgress();
  const alive = p.lastDay === today() || p.lastDay === addDays(today(), -1);
  const streak = alive ? p.streak : 0;
  const learned = p.letters.length;

  return (
    <div className="stack">
      <div className="hero">
        <h1>{t('hello')}</h1>
        <p>{t('tagline')}</p>
      </div>

      <div className="stats">
        <div className="stat"><b>🔥 {streak}</b><span>{t('streak')}, {t('days')}</span></div>
        <div className="stat"><b>⭐ {p.xp}</b><span>{t('xp')}</span></div>
        <div className="stat"><b>🃏 {dueCount}</b><span>{t('dueToday')}</span></div>
      </div>

      <Card className="review-cta">
        {dueCount > 0 ? (
          <>
            <div>
              <h2>{t('dueToday')}: {dueCount} {t('cardsWord')}</h2>
            </div>
            <Link className="btn primary" to="/review">{t('startReview')}</Link>
          </>
        ) : (
          <h2>{t('nothingDue')}</h2>
        )}
      </Card>

      <h2 className="section">{t('path')}</h2>
      <ul className="path">
        <li>
          <Link to="/hangul" className="node">
            <span className="emoji">한</span>
            <span className="node-body">
              <b>{t('hangul')}</b>
              <span className="muted">{learned}/{allLetters.length} {t('letters')} · {t('learned')}</span>
              <ProgressBar value={learned} max={allLetters.length} />
            </span>
            <span className="go">{learned >= allLetters.length ? '✓' : '›'}</span>
          </Link>
        </li>
        {lessons.map((l) => {
          const done = p.lessons.includes(l.id);
          return (
            <li key={l.id}>
              <Link to={`/lesson/${l.id}`} className={`node ${done ? 'done' : ''}`}>
                <span className="emoji">{l.emoji}</span>
                <span className="node-body">
                  <b>{tx(l.title)}</b>
                  <span className="muted">{tx(l.goal)}</span>
                </span>
                <span className="go">{done ? '✓' : '›'}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
