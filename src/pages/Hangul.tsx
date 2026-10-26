import { useMemo, useState } from 'react';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../lib/progress';
import { allLetters, consonants, vowels } from '../data/hangul';
import type { Exercise, Letter } from '../lib/types';
import { Card, ProgressBar, shuffle, SpeakButton } from '../components/ui';
import { ExerciseRunner } from '../components/ExerciseRunner';
import { canSpeak } from '../lib/speak';

type Tab = 'vowel' | 'consonant';

export default function Hangul() {
  const { t, tx, lang } = useI18n();
  const { p, learnLetters, addCards, gain } = useProgress();
  const [tab, setTab] = useState<Tab>('vowel');
  const [sel, setSel] = useState<Letter>(vowels[0]);
  const [quiz, setQuiz] = useState<Letter[] | null>(null);
  const [score, setScore] = useState<number | null>(null);

  const list = tab === 'vowel' ? vowels : consonants;
  const learned = p.letters.length;

  const exercises = useMemo<Exercise[]>(() => {
    if (!quiz) return [];
    return quiz.map((l) => {
      const wrong = shuffle(allLetters.filter((x) => x.ch !== l.ch)).slice(0, 2);
      const opts = shuffle([l, ...wrong]);
      return {
        type: 'choice',
        prompt: { ru: `Какой звук у буквы ${l.ch}?`, en: `What sound does ${l.ch} make?` },
        options: opts.map((o) => o.roman),
        answer: opts.indexOf(l),
      } as Exercise;
    });
  }, [quiz]);

  const markLearned = (l: Letter) => {
    learnLetters([l.ch]);
    addCards([{ id: `hangul:${l.ch}`, ko: l.ch, roman: l.roman, tr: l.sound }]);
    gain(2);
  };

  if (quiz) {
    return (
      <div className="stack">
        <h1>{t('quiz')}</h1>
        {score === null ? (
          <ExerciseRunner
            exercises={exercises}
            onFinish={(s) => {
              setScore(s.total - Math.min(s.mistakes, s.total));
              if (s.mistakes === 0) {
                quiz.forEach(markLearned);
              }
              gain(10);
            }}
          />
        ) : (
          <Card>
            <h2>{score}/{exercises.length}</h2>
            <button type="button" className="btn primary" onClick={() => { setQuiz(null); setScore(null); }}>{t('back')}</button>
          </Card>
        )}
      </div>
    );
  }

  return (
    <div className="stack">
      <h1>{t('hangul')}</h1>
      <ProgressBar value={learned} max={allLetters.length} />
      <p className="muted">{learned}/{allLetters.length} {t('letters')} · {t('learned')}</p>
      {!canSpeak() && <p className="notice">{t('noVoice')}</p>}

      <div className="tabs" role="tablist">
        {(['vowel', 'consonant'] as Tab[]).map((k) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={tab === k}
            className={tab === k ? 'active' : ''}
            onClick={() => { setTab(k); setSel(k === 'vowel' ? vowels[0] : consonants[0]); }}
          >
            {k === 'vowel' ? t('vowels') : t('consonants')}
          </button>
        ))}
      </div>

      <div className="letter-grid">
        {list.map((l) => (
          <button
            type="button"
            key={l.ch}
            className={`letter ko ${sel.ch === l.ch ? 'sel' : ''} ${p.letters.includes(l.ch) ? 'known' : ''}`}
            onClick={() => setSel(l)}
            aria-label={`${l.ch} ${l.roman}`}
          >
            {l.ch}
          </button>
        ))}
      </div>

      <Card className="letter-detail">
        <div className="big-letter ko">{sel.ch}</div>
        <div className="detail-body">
          <div className="row-between">
            <b className="roman">{sel.roman}</b>
            <SpeakButton text={sel.ch === 'ㅇ' ? '오' : sel.word.ko} big />
          </div>
          <p><span className="muted">{t('sound')}:</span> {sel.sound[lang]}</p>
          <p><span className="muted">{t('memory')}:</span> {sel.mnemonic[lang]}</p>
          <p className="example">
            <span className="muted">{t('example')}:</span> <span className="ko">{sel.word.ko}</span> <i>({sel.word.roman})</i> — {tx(sel.word.tr)}
          </p>
          <button type="button" className="btn" onClick={() => markLearned(sel)} disabled={p.letters.includes(sel.ch)}>
            {p.letters.includes(sel.ch) ? '✓' : t('memorized')}
          </button>
        </div>
      </Card>

      <button
        type="button"
        className="btn primary"
        onClick={() => { setScore(null); setQuiz(shuffle(list).slice(0, 5)); }}
      >
        {t('quiz')}
      </button>
    </div>
  );
}
