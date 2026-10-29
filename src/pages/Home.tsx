import { Link } from 'react-router-dom';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../lib/progress';
import { addDays, today } from '../lib/srs';
import { lessons } from '../data/lessons';
import { levels } from '../data/levels';
import { examOfLevel } from '../data/exams';
import { allLetters } from '../data/hangul';
import { isExamUnlocked, isLevelOpen, lessonsLeft } from '../lib/access';
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
            <h2>{t('dueToday')}: {dueCount} {t('cardsWord')}</h2>
            <Link className="btn primary" to="/review">{t('startReview')}</Link>
          </>
        ) : (
          <h2>{t('nothingDue')}</h2>
        )}
      </Card>

      {levels.map((lv) => {
        const open = isLevelOpen(lv.level, p);
        const items = lessons.filter((l) => l.level === lv.level);
        const exam = examOfLevel(lv.level);
        const examResult = exam ? p.exams[exam.id] : undefined;
        const left = lessonsLeft(lv.level, p);
        const doneCount = items.length - left;
        return (
          <section key={lv.level} className="stack">
            <div className="level-head">
              <span className="emoji-lg">{open ? lv.emoji : '🔒'}</span>
              <div className="grow">
                <h2>{tx(lv.title)}</h2>
                <p className="muted">{tx(lv.blurb)}</p>
                {open && items.length > 0 && <ProgressBar value={doneCount} max={items.length} />}
              </div>
            </div>

            {!open && (
              <Card className="lock-card">
                <p>🔒 {t('levelLocked')}</p>
                {items.length === 0 && <p><b>{t('soon')}</b></p>}
              </Card>
            )}

            {open && (
              <ul className="path">
                {lv.level === 1 && (
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
                )}
                {items.map((l) => {
                  const done = p.lessons.includes(l.id);
                  return (
                    <li key={l.id}>
                      <Link to={`/lesson/${l.id}`} className={`node ${done ? 'done' : ''}`}>
                        <span className="emoji">{l.emoji}</span>
                        <span className="node-body">
                          <b>{tx(l.title)}</b>
                          <span className="muted">{tx(l.goal)}</span>
                          {!done && /^s\d+$/.test(p.resume?.[l.id]?.step ?? '') && (
                            <span className="resume">▶ {t('resumeFrom')} · {t('step')} {parseInt(p.resume[l.id].step.slice(1), 10) + 1}</span>
                          )}
                        </span>
                        <span className="go">{done ? '✓' : '›'}</span>
                      </Link>
                    </li>
                  );
                })}
                {exam && (
                  <li>
                    {isExamUnlocked(lv.level, p) ? (
                      <Link to={`/exam/${exam.id}`} className={`node exam ${examResult?.passed ? 'passed' : ''}`}>
                        <span className="emoji">🎓</span>
                        <span className="node-body">
                          <b>{tx(exam.title)}</b>
                          <span className="muted">
                            {examResult ? `${t('bestScore')}: ${Math.round(examResult.best * 100)}%` : t('examIntro')}
                          </span>
                        </span>
                        <span className="go">{examResult?.passed ? '✓' : '›'}</span>
                      </Link>
                    ) : (
                      <div className="node exam locked" aria-disabled="true">
                        <span className="emoji">🔒</span>
                        <span className="node-body">
                          <b>{tx(exam.title)}</b>
                          <span className="muted">{t('examLocked')} · {t('lessonsLeft')}: {left}</span>
                        </span>
                      </div>
                    )}
                  </li>
                )}
                {items.length === 0 && <li><Card className="lock-card"><b>{t('soon')}</b></Card></li>}
              </ul>
            )}
          </section>
        );
      })}
    </div>
  );
}
