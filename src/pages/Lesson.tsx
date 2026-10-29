import { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { isLevelOpen } from '../lib/access';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../lib/progress';
import { lessons } from '../data/lessons';
import { mnemonicFor } from '../data/mnemonics';
import { buildSteps } from '../lib/steps';
import type { Step } from '../lib/steps';
import type { Block, Lesson as LessonT, StorySentence, Vocab } from '../lib/types';
import { Card, ProgressBar, Rich, SpeakButton } from '../components/ui';
import { ExerciseRunner } from '../components/ExerciseRunner';
import { speak } from '../lib/speak';
import { speakable } from '../lib/quiz';

export default function Lesson() {
  const { id } = useParams();
  const lesson = lessons.find((l) => l.id === id);
  const { t } = useI18n();
  const { p } = useProgress();
  if (!lesson) return <p>404 · <Link to="/">{t('toHome')}</Link></p>;
  if (!isLevelOpen(lesson.level, p)) return <Navigate to="/" replace />;
  return <LessonView key={lesson.id} lesson={lesson} />;
}

/** Resume points look like "s12" (step number); older formats are ignored. */
const parseStep = (s?: string) => (s && /^s\d+$/.test(s) ? parseInt(s.slice(1), 10) : 0);

function LessonView({ lesson }: { lesson: LessonT }) {
  const { t, tx } = useI18n();
  const nav = useNavigate();
  const { addCards, gain, completeLesson, saveResume, p } = useProgress();
  const saved = useMemo(() => p.resume?.[lesson.id], []); // eslint-disable-line react-hooks/exhaustive-deps
  const steps = useMemo<Step[]>(() => buildSteps(lesson, lessons[lessons.findIndex((x) => x.id === lesson.id) - 1]), [lesson]);
  const startAt = (() => {
    const k = parseStep(saved?.step);
    return k > 0 && k < steps.length - 1 ? k : 0;
  })();
  const [i, setI] = useState(startAt);
  /** furthest step reached: everything up to it can be revisited, and it is where the lesson resumes */
  const [reached, setReached] = useState(startAt);
  const [exPos, setExPos] = useState(saved?.ex ?? 0);
  const [menu, setMenu] = useState(false);
  const step = steps[i];
  const resumedHere = saved && startAt === i;

  // remember where the learner stopped, so leaving a lesson never loses progress
  useEffect(() => {
    if (steps[reached].kind === 'done' || reached === 0) return;
    const hasEx = 'exercises' in steps[reached];
    saveResume(lesson.id, { step: `s${reached}`, theory: 0, ex: hasEx && i === reached ? exPos : 0 });
  }, [reached, i, exPos]); // eslint-disable-line react-hooks/exhaustive-deps

  const go = (k: number) => {
    window.scrollTo({ top: 0 });
    setExPos(0);
    setMenu(false);
    const n = Math.max(0, Math.min(k, steps.length - 1));
    setI(n);
    setReached((r) => Math.max(r, n));
  };
  const next = () => go(i + 1);

  const learnWords = (items: Vocab[]) =>
    addCards(items.map((v) => ({ id: `${lesson.id}:${v.ko}`, ko: v.ko, roman: v.roman, tr: v.tr })));

  const finishLesson = () => {
    learnWords(lesson.vocab);
    completeLesson(lesson.id);
    gain(20);
    next();
  };

  const runner = (exercises: Extract<Step, { exercises: unknown }>['exercises'], onDone: () => void) => (
    <ExerciseRunner
      key={i}
      exercises={exercises}
      startAt={resumedHere && i === startAt && reached === startAt ? saved!.ex : 0}
      onPos={setExPos}
      onFinish={() => { gain(1); onDone(); }}
    />
  );

  return (
    <div className="stack">
      <div className="lesson-head">
        <Link to="/" className="back" aria-label={t('back')}>←</Link>
        <div className="grow">
          <h1 className="h-sm">{lesson.emoji} {tx(lesson.title)}</h1>
          <ProgressBar value={i} max={steps.length - 1} />
        </div>
      </div>
      <p className="muted step-label">
        {t('step')} {i + 1} {t('of')} {steps.length} · <b>{tx(step.title)}</b>
      </p>
      {step.kind !== 'done' && (
        <nav className="stepnav" aria-label={t('steps')}>
          <button type="button" className="btn small" disabled={i === 0} onClick={() => go(i - 1)}>← {t('back')}</button>
          <button type="button" className="btn small" onClick={() => setMenu(true)}>☰ {t('steps')}</button>
          <button type="button" className="btn small" disabled={i >= reached} onClick={() => go(i + 1)}>{t('forward')} →</button>
        </nav>
      )}
      {menu && (
        <div className="sheet-back" onClick={() => setMenu(false)}>
          <div className="sheet" role="dialog" aria-label={t('steps')} onClick={(e) => e.stopPropagation()}>
            <div className="row-between">
              <h2>{t('steps')}</h2>
              <button type="button" className="btn small" onClick={() => setMenu(false)}>✕</button>
            </div>
            <ol className="steplist">
              {steps.map((st, k) => (
                <li key={k}>
                  <button
                    type="button"
                    className={`stepitem ${k === i ? 'current' : ''} ${k <= reached ? '' : 'locked'}`}
                    disabled={k > reached}
                    onClick={() => go(k)}
                  >
                    <span className="stepicon">{stepIcon(st.kind)}</span>
                    <span className="steptitle">{tx(st.title)}</span>
                    <span className="stepmark">{k < reached ? '✓' : k === i ? '●' : k > reached ? '🔒' : ''}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}

      {step.kind === 'cards' && (
        <>
          <div className="cards-list">
            {step.items.map((v) => <WordCard key={v.ko} lessonId={lesson.id} v={v} />)}
          </div>
          <button type="button" className="btn primary" onClick={() => { learnWords(step.items); next(); }}>{t('letsCheck')} →</button>
        </>
      )}

      {(step.kind === 'recap' || step.kind === 'quiz' || step.kind === 'drill' || step.kind === 'final') &&
        runner(step.exercises, step.kind === 'final' ? finishLesson : next)}

      {step.kind === 'rule' && (
        <>
          <Card>
            <h2>{tx(lesson.theory[step.section].title)}</h2>
            {lesson.theory[step.section].blocks
              .filter((_, k) => !step.blocks || step.blocks.includes(k))
              .map((b, k) => <BlockView key={k} b={b} />)}
          </Card>
          <button type="button" className="btn primary" onClick={next}>{t('next')}</button>
        </>
      )}

      {step.kind === 'dialogue' && <DialogueView lesson={lesson} onNext={next} />}

      {step.kind === 'story' && <StoryView lesson={lesson} onNext={next} />}

      {step.kind === 'done' && (
        <Card className="center">
          <div className="confetti">🎉</div>
          <h2>{t('lessonDone')}</h2>
          <p><b>{t('wordsLearned')}: {lesson.vocab.length}</b></p>
          <p>{t('lessonDoneText')}</p>
          <div className="row" style={{ justifyContent: 'center' }}>
            <button type="button" className="btn primary" onClick={() => nav('/review')}>{t('startReview')}</button>
            <button type="button" className="btn" onClick={() => nav('/')}>{t('toHome')}</button>
          </div>
        </Card>
      )}
    </div>
  );
}

const stepIcon = (k: Step['kind']) =>
  ({ recap: '🔁', cards: '🃏', quiz: '✅', rule: '📘', drill: '✍️', dialogue: '💬', story: '📖', final: '🏁', done: '🎉' } as const)[k];

/** Longer emoji scenes get smaller so that they always fit the square. */
const picSize = (e: string) => { const n = [...e].length; return n <= 2 ? '2.4rem' : n <= 4 ? '1.7rem' : '1.3rem'; };

/** One new word: the picture, how it sounds, what it means and the memory hook. */
function WordCard({ lessonId, v }: { lessonId: string; v: Vocab }) {
  const { t, tx, lang } = useI18n();
  const m = mnemonicFor(lessonId, v.ko);
  return (
    <article className="wcard">
      <div className="wc-pic" aria-hidden="true" style={{ fontSize: picSize(m?.e ?? '🔤') }}>{m?.e ?? '🔤'}</div>
      <div className="wc-main">
        <div className="wc-top">
          <span className="ko wc-ko">{v.ko}</span>
          <SpeakButton text={speakable(v.ko)} label={t('tapToHear')} />
        </div>
        <div className="muted roman">{v.roman}</div>
        <div className="wc-tr">{tx(v.tr)}</div>
        {m && (
          <p className="mnemo">
            <b>💡 {t('howToRemember')}:</b> {lang === 'en' && m.en ? m.en : m.ru}
          </p>
        )}
      </div>
    </article>
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
