import { useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import type { Exercise, Text } from '../lib/types';
import { useI18n } from '../lib/i18n';
import { norm, ProgressBar, shuffle, SpeakButton } from './ui';
import { speak } from '../lib/speak';
import { GuidedWrite } from './write/GuidedWrite';
import { MNEMONICS } from '../data/mnemonics';

export interface Outcome {
  ex: Exercise;
  ok: boolean;
  correct: string;
}

export interface Stats {
  total: number;
  mistakes: number;
  outcomes: Outcome[];
}

interface Props {
  exercises: Exercise[];
  /** exam mode: no hints, no retries, answers are only revealed at the end */
  exam?: boolean;
  /** continue from this exercise (used to resume an unfinished lesson) */
  startAt?: number;
  onPos?: (pos: number) => void;
  onFinish: (stats: Stats) => void;
}

const isKo = (s: string) => /[ㄱ-힝]/.test(s);

/** Runs exercises one by one. In practice mode a missed one returns to the end of the queue once. */
export function ExerciseRunner({ exercises, exam = false, startAt = 0, onPos, onFinish }: Props) {
  const { t, tx } = useI18n();
  const [queue, setQueue] = useState(() => exercises.map((e) => ({ e, retry: false })));
  const [pos, setPos] = useState(() => Math.max(0, Math.min(startAt, exercises.length - 1)));
  const [result, setResult] = useState<null | { ok: boolean; correct: string }>(null);
  const mistakes = useRef(0);
  const outcomes = useRef<Outcome[]>([]);

  const cur = queue[pos];

  useEffect(() => {
    if (cur && (cur.e.type === 'listen' || cur.e.type === 'dictation')) speak(cur.e.say);
  }, [cur]);

  useEffect(() => {
    if (!exam && pos < exercises.length) onPos?.(pos);
  }, [pos]); // eslint-disable-line react-hooks/exhaustive-deps

  const advance = () => {
    setResult(null);
    if (pos + 1 >= queue.length) onFinish({ total: exercises.length, mistakes: mistakes.current, outcomes: outcomes.current });
    else setPos(pos + 1);
  };

  const settle = (ok: boolean, correct: string) => {
    if (!cur.retry) outcomes.current.push({ ex: cur.e, ok, correct });
    if (!ok) {
      mistakes.current += 1;
      if (!exam && !cur.retry) setQueue((q) => [...q, { ...cur, retry: true }]);
    }
    if (exam) advance();
    else setResult({ ok, correct });
  };

  if (!cur) return null;
  const e = cur.e;
  const done = !!result;
  const optText = (o: Text) => tx(o);

  return (
    <div className="exercise">
      <ProgressBar value={pos} max={queue.length} />
      {exam && <p className="muted">{pos + 1} / {queue.length}</p>}
      <div className="ex-body" key={pos}>
        {e.type === 'choice' && (
          <Choice
            top={e.passage ? <Passage text={e.passage} /> : undefined}
            prompt={tx(e.prompt)}
            options={e.options.map(optText)}
            answer={e.answer}
            reveal={!exam}
            disabled={done}
            speakOptions={!exam}
            onPick={(i) => settle(i === e.answer, optText(e.options[e.answer]))}
          />
        )}
        {e.type === 'cloze' && (
          <Choice
            prompt={e.sentence}
            promptClass="ko cloze"
            sub={e.tr ? tx(e.tr) : undefined}
            options={e.options.map(optText)}
            answer={e.answer}
            reveal={!exam}
            disabled={done}
            onPick={(i) => settle(i === e.answer, optText(e.options[e.answer]))}
          />
        )}
        {e.type === 'tf' && (
          <Choice
            prompt={optText(e.statement)}
            promptClass={isKo(optText(e.statement)) ? 'ko' : ''}
            options={[t('true'), t('false')]}
            answer={e.answer ? 0 : 1}
            reveal={!exam}
            disabled={done}
            onPick={(i) => settle((i === 0) === e.answer, e.answer ? t('true') : t('false'))}
          />
        )}
        {e.type === 'listen' && (
          <>
            <div className="listen-box">
              <SpeakButton text={e.say} big />
              <span className="muted">{t('listen')}</span>
            </div>
            <Choice
              options={e.options.map(optText)}
              answer={e.answer}
              reveal={!exam}
              disabled={done}
              onPick={(i) => settle(i === e.answer, optText(e.options[e.answer]))}
            />
          </>
        )}
        {e.type === 'match' && <Match ex={e} exam={exam} onSubmit={(ok) => settle(ok, '')} />}
        {e.type === 'build' && <Build ex={e} disabled={done} onSubmit={(ok) => settle(ok, e.answer.join(' '))} />}
        {e.type === 'type' && (
          <TypeIn
            prompt={tx(e.prompt)}
            hint={!exam && e.hint ? tx(e.hint) : undefined}
            answers={e.answers}
            disabled={done}
            onSubmit={(ok) => settle(ok, e.answers[0].replace(/\.$/, ''))}
          />
        )}
        {e.type === 'write' && (
          <GuidedWrite
            word={e.word}
            tr={e.tr ? tx(e.tr) : undefined}
            prompt={tx(e.prompt)}
            onDone={(r) => {
              if (!cur.retry) outcomes.current.push({ ex: cur.e, ok: r.skipped === 0, correct: e.word });
              advance();
            }}
          />
        )}
        {e.type === 'dictation' && (
          <TypeIn
            prompt={t('dictation')}
            top={<div className="listen-box"><SpeakButton text={e.say} big /><span className="muted">{t('listen')}</span></div>}
            answers={e.answers}
            disabled={done}
            onSubmit={(ok) => settle(ok, e.answers[0])}
          />
        )}
      </div>

      {result && (
        <div className={`feedback ${result.ok ? 'ok' : 'bad'}`} role="status">
          <b>{result.ok ? t('correct') : `${t('wrong')} ${result.correct}`.trim()}</b>
          {(e.type === 'choice' || e.type === 'cloze' || e.type === 'tf') && e.why && <p>{tx(e.why)}</p>}
          {!result.ok && (e.type === 'choice' || e.type === 'listen') && e.ref && MNEMONICS[e.ref] && (
            <p className="mnemo">
              <span className="mnemo-pic">{MNEMONICS[e.ref].e}</span> {MNEMONICS[e.ref].ru}
            </p>
          )}
          <button type="button" className="btn primary" onClick={advance} autoFocus>
            {t('continue')}
          </button>
        </div>
      )}
    </div>
  );
}

function Passage({ text }: { text: string }) {
  return (
    <div className="passage">
      <SpeakButton text={text} />
      <p className="ko big">{text}</p>
    </div>
  );
}

function Choice({
  top, prompt, promptClass = '', sub, options, answer, reveal, disabled, onPick, speakOptions,
}: {
  top?: ReactNode; prompt?: string; promptClass?: string; sub?: string; options: string[]; answer: number;
  reveal: boolean; disabled: boolean; onPick: (i: number) => void; speakOptions?: boolean;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  return (
    <>
      {top}
      {prompt && <h2 className={`prompt ${promptClass}`}>{prompt}</h2>}
      {sub && <p className="muted">{sub}</p>}
      <div className="options">
        {options.map((o, i) => {
          let state = '';
          if (picked !== null) {
            if (!reveal) state = i === picked ? 'picked' : '';
            else state = i === answer ? 'right' : i === picked ? 'wrong' : '';
          }
          return (
            <button
              type="button"
              key={i}
              className={`opt ${state} ${isKo(o) ? 'ko' : ''}`}
              disabled={disabled || picked !== null}
              onClick={() => {
                setPicked(i);
                if (speakOptions && isKo(o)) speak(o);
                onPick(i);
              }}
            >
              {o}
            </button>
          );
        })}
      </div>
    </>
  );
}

function Match({ ex, exam, onSubmit }: { ex: Extract<Exercise, { type: 'match' }>; exam: boolean; onSubmit: (ok: boolean) => void }) {
  const { tx } = useI18n();
  const right = useMemo(() => shuffle(ex.pairs.map((p, i) => ({ i, text: tx(p.tr) }))), [ex, tx]);
  const [sel, setSel] = useState<number | null>(null);
  const [done, setDone] = useState<number[]>([]);
  const [bad, setBad] = useState<number | null>(null);
  const wrong = useRef(0);

  const pickRight = (i: number) => {
    if (sel === null || done.includes(i)) return;
    if (sel === i) {
      const next = [...done, i];
      setDone(next);
      setSel(null);
      if (next.length === ex.pairs.length) setTimeout(() => onSubmit(wrong.current <= (exam ? 1 : 0)), 350);
    } else {
      wrong.current += 1;
      setBad(i);
      setSel(null);
      setTimeout(() => setBad(null), 500);
    }
  };

  return (
    <div className="match">
      <h2 className="prompt">{tx(ex.prompt)}</h2>
      <div className="match-cols">
        <div className="options">
          {ex.pairs.map((p, i) => (
            <button
              type="button"
              key={i}
              className={`opt ko ${done.includes(i) ? 'right' : sel === i ? 'picked' : ''}`}
              disabled={done.includes(i)}
              onClick={() => { setSel(i); speak(p.ko); }}
            >
              {p.ko}
            </button>
          ))}
        </div>
        <div className="options">
          {right.map((r) => (
            <button
              type="button"
              key={r.i}
              className={`opt ${done.includes(r.i) ? 'right' : bad === r.i ? 'wrong' : ''}`}
              disabled={done.includes(r.i) || sel === null}
              onClick={() => pickRight(r.i)}
            >
              {r.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Build({ ex, disabled, onSubmit }: { ex: Extract<Exercise, { type: 'build' }>; disabled: boolean; onSubmit: (ok: boolean) => void }) {
  const { t, tx } = useI18n();
  const bank = useMemo(() => shuffle(ex.tokens.map((w, id) => ({ w, id }))), [ex]);
  const [chosen, setChosen] = useState<number[]>([]);
  const words = chosen.map((id) => bank.find((b) => b.id === id)!.w);
  return (
    <>
      <h2 className="prompt">{tx(ex.prompt)}</h2>
      <div className="answer-line ko" aria-live="polite">
        {words.map((w, i) => (
          <button type="button" key={i} className="chip" disabled={disabled} onClick={() => setChosen(chosen.filter((_, k) => k !== i))}>
            {w}
          </button>
        ))}
      </div>
      <div className="options row">
        {bank.map((b) => (
          <button type="button" key={b.id} className="chip ko" disabled={disabled || chosen.includes(b.id)} onClick={() => setChosen([...chosen, b.id])}>
            {b.w}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="btn primary"
        disabled={disabled || chosen.length !== ex.tokens.length}
        onClick={() => onSubmit(words.join(' ') === ex.answer.join(' '))}
      >
        {t('check')}
      </button>
    </>
  );
}

function TypeIn({
  prompt, hint, top, answers, disabled, onSubmit,
}: {
  prompt: string; hint?: string; top?: ReactNode; answers: string[]; disabled: boolean; onSubmit: (ok: boolean) => void;
}) {
  const { t } = useI18n();
  const [v, setV] = useState('');
  const submit = () => onSubmit(answers.some((a) => norm(a) === norm(v)));
  return (
    <>
      <h2 className="prompt">{prompt}</h2>
      {top}
      {hint && <p className="muted">💡 {hint}</p>}
      <input
        className="input ko"
        lang="ko"
        value={v}
        disabled={disabled}
        placeholder={t('typeKo')}
        aria-label={t('yourAnswer')}
        onChange={(e) => setV(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && v.trim() && submit()}
        autoFocus
      />
      <button type="button" className="btn primary" disabled={disabled || !v.trim()} onClick={submit}>
        {t('check')}
      </button>
    </>
  );
}

export function describe(ex: Exercise, tx: (x: Text) => string): string {
  switch (ex.type) {
    case 'choice': return tx(ex.prompt);
    case 'cloze': return ex.sentence;
    case 'tf': return tx(ex.statement);
    case 'listen': return `🔊 ${ex.say}`;
    case 'match': return tx(ex.prompt);
    case 'build': return tx(ex.prompt);
    case 'type': return tx(ex.prompt);
    case 'dictation': return `🔊 ${ex.say}`;
    case 'write': return `✍️ ${ex.word}`;
  }
}
