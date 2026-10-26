import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../lib/progress';
import { lessons } from '../data/lessons';
import type { Block, Lesson as LessonT, StorySentence } from '../lib/types';
import { Card, ProgressBar, Rich, SpeakButton } from '../components/ui';
import { ExerciseRunner } from '../components/ExerciseRunner';
import { speak } from '../lib/speak';

type Step = 'theory' | 'words' | 'practice' | 'dialogue' | 'story' | 'done';
const steps: Step[] = ['theory', 'words', 'practice', 'dialogue', 'story', 'done'];

export default function Lesson() {
  const { id } = useParams();
  const lesson = lessons.find((l) => l.id === id);
  const { t } = useI18n();
  if (!lesson) return <p>404 · <Link to="/">{t('toHome')}</Link></p>;
  return <LessonView key={lesson.id} lesson={lesson} />;
}

function LessonView({ lesson }: { lesson: LessonT }) {
  const { t, tx } = useI18n();
  const nav = useNavigate();
  const { addCards, gain, completeLesson } = useProgress();
  const [i, setI] = useState(0);
  const [theoryIdx, setTheoryIdx] = useState(0);
  const step = steps[i];
  const next = () => { window.scrollTo({ top: 0 }); setI((n) => Math.min(n + 1, steps.length - 1)); };

  const finish = () => {
    addCards(lesson.vocab.map((v) => ({ id: `${lesson.id}:${v.ko}`, ko: v.ko, roman: v.roman, tr: v.tr })));
    completeLesson(lesson.id);
    gain(20);
    next();
  };

  return (
    <div className="stack">
      <div className="lesson-head">
        <Link to="/" className="back" aria-label={t('back')}>←</Link>
        <div className="grow">
          <h1 className="h-sm">{lesson.emoji} {tx(lesson.title)}</h1>
          <ProgressBar value={i} max={steps.length - 1} />
        </div>
      </div>
      <p className="muted step-label">{t('step')} {i + 1} {t('of')} {steps.length}: {t(step)}</p>

      {step === 'theory' && (
        <>
          {(() => {
            const sec = lesson.theory[theoryIdx];
            return (
              <Card>
                <h2>{tx(sec.title)}</h2>
                {sec.blocks.map((b, k) => <BlockView key={k} b={b} />)}
              </Card>
            );
          })()}
          <button
            type="button"
            className="btn primary"
            onClick={() => (theoryIdx < lesson.theory.length - 1 ? (setTheoryIdx(theoryIdx + 1), window.scrollTo({ top: 0 })) : next())}
          >
            {t('next')}
          </button>
        </>
      )}

      {step === 'words' && (
        <>
          <ul className="vocab">
            {lesson.vocab.map((v) => (
              <li key={v.ko}>
                <SpeakButton text={v.ko} />
                <span className="ko big">{v.ko}</span>
                <span className="roman muted">{v.roman}</span>
                <span className="tr">{tx(v.tr)}</span>
              </li>
            ))}
          </ul>
          <button type="button" className="btn primary" onClick={next}>{t('next')}</button>
        </>
      )}

      {step === 'practice' && <ExerciseRunner exercises={lesson.exercises} onFinish={() => next()} />}

      {step === 'dialogue' && <DialogueView lesson={lesson} onNext={next} />}

      {step === 'story' && <StoryView lesson={lesson} onNext={finish} />}

      {step === 'done' && (
        <Card className="center">
          <div className="confetti">🎉</div>
          <h2>{t('lessonDone')}</h2>
          <p>{t('lessonDoneText')}</p>
          <div className="row">
            <button type="button" className="btn primary" onClick={() => nav('/review')}>{t('startReview')}</button>
            <button type="button" className="btn" onClick={() => nav('/')}>{t('toHome')}</button>
          </div>
        </Card>
      )}
    </div>
  );
}

function BlockView({ b }: { b: Block }) {
  const { tx } = useI18n();
  if (b.type === 'p') return <p><Rich text={tx(b.text)} /></p>;
  if (b.type === 'tip') return <p className="tip">💡 <Rich text={tx(b.text)} /></p>;
  if (b.type === 'table')
    return (
      <div className="table-wrap">
        <table>
          <thead><tr>{b.head.map((h, i) => <th key={i}>{tx(h)}</th>)}</tr></thead>
          <tbody>
            {b.rows.map((r, i) => (
              <tr key={i}>{r.map((c, k) => <td key={k} className={/[\u3131-\uD79D]/.test(tx(c)) ? 'ko' : ''}>{tx(c)}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  return (
    <ul className="examples">
      {b.items.map((x, i) => (
        <li key={i}>
          <SpeakButton text={x.ko} />
          <span className="ko big">{x.ko}</span>
          <span className="tr">{tx(x.tr)}</span>
        </li>
      ))}
    </ul>
  );
}

function DialogueView({ lesson, onNext }: { lesson: LessonT; onNext: () => void }) {
  const { t, tx } = useI18n();
  const [showTr, setShowTr] = useState(true);
  const [role, setRole] = useState<'A' | 'B' | null>(null);
  const lines = lesson.dialogue.lines;
  const [revealed, setRevealed] = useState(lines.length);

  // in role-play the partner's lines appear on their own, ours wait for a tap
  useEffect(() => {
    if (role === null || revealed >= lines.length || lines[revealed].who === role) return;
    const timer = setTimeout(() => {
      speak(lines[revealed].ko, 0.85);
      setRevealed((r) => r + 1);
    }, 700);
    return () => clearTimeout(timer);
  }, [role, revealed, lines]);

  const start = (r: 'A' | 'B' | null) => {
    setRole(r);
    setRevealed(r === null ? lines.length : 0);
  };
  const waiting = role !== null && revealed < lines.length && lines[revealed].who === role;

  return (
    <>
      <Card>
        <div className="row-between">
          <h2>{tx(lesson.dialogue.title)}</h2>
          <button type="button" className="speak" aria-label="play" onClick={() => speak(lines.map((l) => l.ko).join(' '), 0.8)}>▶</button>
        </div>
        <label className="toggle">
          <input type="checkbox" checked={showTr} onChange={(e) => setShowTr(e.target.checked)} /> {t('showTr')}
        </label>
        <div className="role-pick" role="group" aria-label={t('dialogue')}>
          <button type="button" className={role === null ? 'active' : ''} onClick={() => start(null)}>📖 {t('dialogue')}</button>
          {(['A', 'B'] as const).map((r) => (
            <button type="button" key={r} className={role === r ? 'active' : ''} onClick={() => start(r)}>🎭 {r}</button>
          ))}
        </div>
        <div className="chat">
          {lines.slice(0, revealed).map((l, k) => (
            <div key={k} className={`bubble ${l.who === 'A' ? 'left' : 'right'} ${l.who === role ? 'mine' : ''}`}>
              <div className="bubble-top">
                <SpeakButton text={l.ko} />
                <span className="ko big">{l.ko}</span>
              </div>
              {showTr && <div className="muted">{tx(l.tr)}</div>}
            </div>
          ))}
          {waiting && (
            <div className={`bubble mine ${lines[revealed].who === 'A' ? 'left' : 'right'}`}>
              <div className="muted">{tx(lines[revealed].tr)}</div>
              <button type="button" className="btn small" onClick={() => setRevealed((r) => r + 1)}>👁</button>
            </div>
          )}
        </div>
      </Card>
      <button type="button" className="btn primary" onClick={onNext}>{t('next')}</button>
    </>
  );
}

function StoryView({ lesson, onNext }: { lesson: LessonT; onNext: () => void }) {
  const { t, tx } = useI18n();
  const [showTr, setShowTr] = useState(false);
  const [open, setOpen] = useState<{ s: number; p: number } | null>(null);
  const full = useMemo(() => lesson.story.sentences.map((s) => s.ko).join(' '), [lesson]);
  return (
    <>
      <Card>
        <div className="row-between">
          <h2>{tx(lesson.story.title)}</h2>
          <button type="button" className="speak" aria-label="play" onClick={() => speak(full, 0.8)}>▶</button>
        </div>
        <label className="toggle"><input type="checkbox" checked={showTr} onChange={(e) => setShowTr(e.target.checked)} /> {t('showTr')}</label>
        <p className="muted">{t('tapWord')}</p>
        <div className="story">
          {lesson.story.sentences.map((s, si) => (
            <Sentence key={si} s={s} si={si} open={open} setOpen={setOpen} showTr={showTr} />
          ))}
        </div>
      </Card>
      <button type="button" className="btn primary" onClick={onNext}>{t('next')}</button>
    </>
  );
}

function Sentence({ s, si, open, setOpen, showTr }: {
  s: StorySentence; si: number; open: { s: number; p: number } | null;
  setOpen: (o: { s: number; p: number } | null) => void; showTr: boolean;
}) {
  const { tx } = useI18n();
  const isOpen = open?.s === si;
  return (
    <div className="sentence">
      <div className="sentence-ko ko big">
        {s.parts.map((p, pi) => (
          <button
            type="button"
            key={pi}
            className={`part ${isOpen && open?.p === pi ? 'on' : ''}`}
            onClick={() => setOpen(isOpen && open?.p === pi ? null : { s: si, p: pi })}
          >
            {p.ko}
          </button>
        ))}
        <SpeakButton text={s.ko} />
      </div>
      {isOpen && open && (
        <div className="gloss">
          {s.parts.map((p, pi) => (
            <span key={pi} className={pi === open.p ? 'g on' : 'g'}><b className="ko">{p.ko}</b> — {tx(p.gloss)}</span>
          ))}
        </div>
      )}
      {showTr && <div className="muted">{tx(s.tr)}</div>}
    </div>
  );
}
