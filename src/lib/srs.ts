import type { Card } from './types';

export type Grade = 'again' | 'good' | 'easy';

export const today = (d = new Date()) => {
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
};

export const addDays = (day: string, n: number) => {
  const [y, m, d] = day.split('-').map(Number);
  return today(new Date(y, m - 1, d + n));
};

export const newCard = (c: Pick<Card, 'id' | 'ko' | 'roman' | 'tr'>): Card => ({
  ...c,
  ease: 2.3,
  interval: 0,
  due: today(),
  reps: 0,
});

// SM-2 lite: again resets, good grows by ease, easy grows faster.
export function review(card: Card, grade: Grade, now = today()): Card {
  if (grade === 'again') {
    return { ...card, reps: 0, interval: 0, ease: Math.max(1.3, card.ease - 0.2), due: now };
  }
  const reps = card.reps + 1;
  let interval: number;
  if (reps === 1) interval = grade === 'easy' ? 3 : 1;
  else if (reps === 2) interval = grade === 'easy' ? 6 : 3;
  else interval = Math.round(card.interval * card.ease * (grade === 'easy' ? 1.3 : 1));
  const ease = grade === 'easy' ? card.ease + 0.1 : card.ease;
  return { ...card, reps, interval, ease, due: addDays(now, interval) };
}

export const isDue = (c: Card, now = today()) => c.due <= now;
