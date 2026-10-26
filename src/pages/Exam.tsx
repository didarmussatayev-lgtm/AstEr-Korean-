import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../lib/progress';
import { exams } from '../data/exams';
import { levels } from '../data/levels';
import { EXAM_PASS, isExamUnlocked } from '../lib/access';
import { Card } from '../components/ui';
import { describe, ExerciseRunner } from '../components/ExerciseRunner';
import type { Stats } from '../components/ExerciseRunner';

export default function Exam() {
  const { id } = useParams();
  const exam = exams.find((e) => e.id === id);
  const { t, tx } = useI18n();
  const { p, gain, recordExam } = useProgress();
  const [phase, setPhase] = useState<'intro' | 'run' | 'result'>('intro');
  const [attempt, setAttempt] = useState(0);
  const [stats, setStats] = useState<Stats | null>(null);

  if (!exam || !isExamUnlocked(exam.level, p)) return <Navigate to="/" replace />;

  const total = exam.exercises.length;
  const needed = Math.ceil(total * EXAM_PASS);
  const nextLevel = levels.find((l) => l.level === exam.level + 1);

  const finish = (s: Stats) => {
    const correct = s.outcomes.filter((o) => o.ok).length;
    const score = correct / total;
    const passed = correct >= needed;
    const firstPass = passed && !p.exams[exam.id]?.passed;
    recordExam(exam.id, score, passed);
    gain(passed ? (firstPass ? 100 : 20) : 5);
    setStats(s);
    setPhase('result');
    window.scrollTo({ top: 0 });
  };

  if (phase === 'intro')
    return (
      <div className="stack">
        <h1>{tx(exam.title)}</h1>
        <Card>
          <p>{t('examIntro')}</p>
          <ul>
            <li>{total} {t('questions')}</li>
            <li>{t('passMark')}: {Math.round(EXAM_PASS * 100)}% ({needed}/{total})</li>
            {p.exams[exam.id] && <li>{t('bestScore')}: {Math.round(p.exams[exam.id].best * 100)}%</li>}
          </ul>
          <button type="button" className="btn primary" onClick={() => setPhase('run')}>{t('startExam')}</button>
        </Card>
      </div>
    );

  if (phase === 'run')
    return (
      <div className="stack">
        <h1>{tx(exam.title)}</h1>
        <ExerciseRunner key={attempt} exam exercises={exam.exercises} onFinish={finish} />
      </div>
    );

  const s = stats!;
  const correct = s.outcomes.filter((o) => o.ok).length;
  const passed = correct >= needed;
  const wrong = s.outcomes.filter((o) => !o.ok);
  return (
    <div className="stack">
      <Card className="center">
        <div className="confetti">{passed ? '🏆' : '📚'}</div>
        <h2>{passed ? t('passed') : t('failed')}</h2>
        <div className="score-ring">{correct}/{total} · {Math.round((correct / total) * 100)}%</div>
        <p className="muted">{t('passMark')}: {Math.round(EXAM_PASS * 100)}%</p>
        {passed && nextLevel && <p><b>{t('levelUnlocked')}</b> {t('yourLevelOpen')} {nextLevel.level}</p>}
        {!passed && <p>{t('failedText')}</p>}
        <div className="row" style={{ justifyContent: 'center' }}>
          {!passed && <button type="button" className="btn primary" onClick={() => { setAttempt(attempt + 1); setStats(null); setPhase('intro'); }}>{t('retry')}</button>}
          <Link className={`btn ${passed ? 'primary' : ''}`} to="/">{t('openNext')}</Link>
        </div>
      </Card>
      <Card>
        <h2>{t('mistakesReview')}</h2>
        {wrong.length === 0 ? (
          <p>{t('allCorrect')}</p>
        ) : (
          <ul className="review-list">
            {wrong.map((o, i) => (
              <li key={i}>
                <div className="ko">{describe(o.ex, tx)}</div>
                {o.correct && <b className="ko">→ {o.correct}</b>}
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
