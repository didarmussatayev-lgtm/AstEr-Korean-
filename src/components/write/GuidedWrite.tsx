import { useMemo, useState } from 'react';
import { isSyllable } from '../../lib/hangulCompose';
import { useI18n } from '../../lib/i18n';
import { ProgressBar, SpeakButton } from '../ui';
import { AssembleStage } from './AssembleStage';
import { DrawPad } from './DrawPad';

type Stage =
  | { kind: 'assemble'; i: number }
  | { kind: 'trace'; i: number }
  | { kind: 'write'; from: number; to: number; hint: 'letters' | 'empty' };

/**
 * Gradual writing: for every syllable assemble it from letters in a cube, trace it, write it with letters in the
 * cubes; then write 2 syllables, 3 syllables … and finally the whole word with empty cubes.
 */
export function buildStages(n: number, assemble = true): Stage[] {
  const st: Stage[] = [];
  for (let i = 0; i < n; i++) {
    if (assemble) st.push({ kind: 'assemble', i });
    st.push({ kind: 'trace', i }, { kind: 'write', from: i, to: i + 1, hint: assemble ? 'letters' : 'empty' });
  }
  for (let k = 2; k <= n; k++) st.push({ kind: 'write', from: 0, to: k, hint: k < n ? 'letters' : 'empty' });
  if (n === 1 && assemble) st.push({ kind: 'write', from: 0, to: 1, hint: 'empty' });
  return st;
}

export function GuidedWrite({ word, tr, prompt, onDone }: { word: string; tr?: string; prompt?: string; onDone: (s: { skipped: number }) => void }) {
  const { t } = useI18n();
  // Hangul syllables are assembled from letters first; Chinese characters are traced and written straight away
  const hangul = useMemo(() => [...word].filter(isSyllable), [word]);
  const syllables = useMemo(() => (hangul.length ? hangul : [...word].filter((ch) => /[\u4e00-\u9fff]/.test(ch))), [word, hangul]);
  const stages = useMemo(() => buildStages(syllables.length, hangul.length > 0), [syllables.length, hangul.length]);
  const [idx, setIdx] = useState(0);
  const [skipped, setSkipped] = useState(0);
  const st = stages[idx];
  const size = typeof window !== 'undefined' ? Math.max(84, Math.min(150, Math.floor((Math.min(window.innerWidth, 600) - 56) / Math.max(1, st.kind === 'write' ? st.to - st.from : 1)))) : 140;

  const next = () => (idx + 1 >= stages.length ? onDone({ skipped }) : setIdx(idx + 1));
  const skip = () => {
    setSkipped(skipped + 1);
    next();
  };

  const zh = hangul.length === 0;
  const title = zh
    ? st.kind === 'trace' ? t('stageTraceZh')
      : st.kind === 'write' && st.to - st.from === 1 ? t('stageWriteZh')
      : t('stageWriteWhole')
    : st.kind === 'assemble' ? t('stageAssemble')
    : st.kind === 'trace' ? t('stageTrace')
    : st.to - st.from === 1 ? (st.hint === 'letters' ? t('stageWriteOne') : t('stageWriteNoHint'))
    : st.to === syllables.length ? t('stageWriteWhole')
    : t('stageWriteSome');

  return (
    <div className="guided">
      <ProgressBar value={idx} max={stages.length} />
      {prompt && <p className="muted write-prompt">{prompt}</p>}
      <div className="guided-head">
        <div>
          <h2 className="prompt">{title}</h2>
          <p className="muted">
            <span className="ko big">{word}</span> {tr ? `— ${tr}` : ''}
          </p>
        </div>
        <SpeakButton text={word} big />
      </div>

      {st.kind === 'assemble' && <AssembleStage key={idx} syllable={syllables[st.i]} onDone={next} onMistake={() => undefined} />}
      {st.kind === 'trace' && <DrawPad key={idx} text={syllables[st.i]} mode="trace" hint="letters" size={Math.max(size, 120)} onPass={next} />}
      {st.kind === 'write' && (
        <DrawPad key={idx} text={syllables.slice(st.from, st.to).join('')} mode="write" hint={st.hint} size={size} onPass={next} />
      )}
      <button type="button" className="link-btn" onClick={skip}>{t('skipStep')}</button>
    </div>
  );
}
