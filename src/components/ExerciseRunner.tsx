import { useEffect, useMemo, useState } from 'react';
import type { Exercise } from '../lib/types';
import { useI18n } from '../lib/i18n';
import { norm, ProgressBar, shuffle, SpeakButton } from './ui';
import { speak } from '../lib/speak';

interface Props {
  exercises: Exercise[];
  onFinish: (stats: { total: number; mistakes: number }) => void;
}

/** Runs exercises one by one. Missed ones return to the end of the queue once. */
export function ExerciseRunner({ exercises, onFinish }: Props) {
  const { t, tx } = useI18n();
  const [queue, setQueue] = useState(() => exercises.map((e, i) => ({ e, i, retry: false })));
  const [pos, setPos] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [result, setResult] = useState<null | { ok: boolean; correct: string }>(null);

  const cur = queue[pos];

  useEffect(() => {
    if (cur?.e.type === 'listen') speak(cur.e.say);
  }, [cur]);

  const settle = (ok: boolean, correct: string) => {
    setResult({ ok, correct });
    if (!ok) {
      setMistakes((m) => m + 1);
      if (!cur.retry) setQueue((q) => [...q, { ...cur, retry: true }]);
    }
  };

  const next = () => {
    setResult(null);
    if (pos + 1 >= queue.length) onFinish({ total: exercises.length, mistakes });
    else setPos(pos + 1);
  };

  if (!cur) return null;
  const e = cur.e;

  return (
    <div className="exercise">
      <ProgressBar value={pos} max={queue.length} />
      <div className="ex-body" key={`${pos}`}>
        {e.type === 'choice' && (
          <Choice
            prompt={tx(e.prompt)}
            options={e.options.map(tx)}
            answer={e.answer}
            disabled={!!result}
            onPick={(i) => settle(i === e.answer, tx(e.options[e.answer]))}
            speakOptions
          />
        )}
        {e.type === 'listen' && (
          <>
            <div className="listen-box">
              <SpeakButton text={e.say} big />
              <span className="muted">{t('listen')}</span>
            </div>
            <Choice
              prompt=""
              options={e.options.map(tx)}
              answer={e.answer}
              disabled={!!result}
              onPick={(i) => settle(i === e.answer, tx(e.options[e.answer]))}
            />
          </>
        )}
        {e.type === 'build' && <Build key={pos} ex={e} disabled={!!result} onSubmit={(ok) => settle(ok, e.answer.join(' '))} />}
        {e.type === 'type' && <TypeIn key={pos} ex={e} disabled={!!result} onSubmit={(ok) => settle(ok, e.answers[0].replace(/\.$/, ''))} />}
      </div>

      {result && (
        <div className={`feedback ${result.ok ? 'ok' : 'bad'}`} role="status">
          <b>{result.ok ? t('correct') : `${t('wrong')} ${result.correct}`}</b>
          {e.type === 'choice' && e.why && <p>{tx(e.why)}</p>}
          <button type="button" className="btn primary" onClick={next} autoFocus>
            {t('continue')}
          </button>
        </div>
      )}
    </div>
  );
}

function Choice({
  prompt, options, answer, disabled, onPick, speakOptions,
}: {
  prompt: string; options: string[]; answer: number; disabled: boolean;
  onPick: (i: number) => void; speakOptions?: boolean;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const isKo = (s: string) => /[ㄱ-힝]/.test(s);
  return (
    <>
      {prompt && <h2 className="prompt">{prompt}</h2>}
      <div className="options">
        {options.map((o, i) => {
          const state = picked === null ? '' : i === answer ? 'right' : i === picked ? 'wrong' : '';
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

function TypeIn({ ex, disabled, onSubmit }: { ex: Extract<Exercise, { type: 'type' }>; disabled: boolean; onSubmit: (ok: boolean) => void }) {
  const { t, tx } = useI18n();
  const [v, setV] = useState('');
  const submit = () => onSubmit(ex.answers.some((a) => norm(a) === norm(v)));
  return (
    <>
      <h2 className="prompt">{tx(ex.prompt)}</h2>
      {ex.hint && <p className="muted">💡 {tx(ex.hint)}</p>}
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
