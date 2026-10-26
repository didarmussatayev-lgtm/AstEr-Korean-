import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../lib/progress';
import { isDue, review } from '../lib/srs';
import type { Grade } from '../lib/srs';
import { Card, ProgressBar, shuffle, SpeakButton } from '../components/ui';
import { speak } from '../lib/speak';

export default function Review() {
  const { t, tx } = useI18n();
  const { p, setCard, gain } = useProgress();
  const queue = useMemo(() => shuffle(Object.values(p.cards).filter((c) => isDue(c))).slice(0, 20), []); // eslint-disable-line react-hooks/exhaustive-deps
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (queue.length === 0) {
    return (
      <Card className="center">
        <h2>{Object.keys(p.cards).length === 0 ? t('noCards') : t('nothingDue')}</h2>
        <Link className="btn primary" to="/">{t('toHome')}</Link>
      </Card>
    );
  }

  if (i >= queue.length) {
    return (
      <Card className="center">
        <div className="confetti">✅</div>
        <h2>{t('reviewDone')}</h2>
        <Link className="btn primary" to="/">{t('toHome')}</Link>
      </Card>
    );
  }

  const card = queue[i];
  const grade = (g: Grade) => {
    setCard(review(p.cards[card.id] ?? card, g));
    gain(g === 'again' ? 1 : 3);
    setFlipped(false);
    setI(i + 1);
  };
  const flip = () => {
    setFlipped(true);
    speak(card.ko);
  };

  return (
    <div className="stack">
      <h1>{t('review')}</h1>
      <ProgressBar value={i} max={queue.length} />
      <Card className="flash center">
        <div className="ko flash-ko">{card.ko}</div>
        <SpeakButton text={card.ko} big />
        {flipped ? (
          <>
            {card.roman && <div className="muted roman">{card.roman}</div>}
            <div className="flash-tr">{tx(card.tr)}</div>
          </>
        ) : (
          <button type="button" className="btn" onClick={flip}>{t('flip')}</button>
        )}
      </Card>
      {flipped && (
        <div className="grades">
          <button type="button" className="btn bad" onClick={() => grade('again')}>{t('gAgain')}</button>
          <button type="button" className="btn primary" onClick={() => grade('good')}>{t('gGood')}</button>
          <button type="button" className="btn good" onClick={() => grade('easy')}>{t('gEasy')}</button>
        </div>
      )}
    </div>
  );
}
