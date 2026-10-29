import type { Exercise, L, Lesson, Vocab } from './types';
import { chunkQuiz, mixQuiz } from './quiz';
import { lessons as allLessons } from '../data/lessons';
import type { PlanItem } from '../data/plan';
import type { Unit } from '../data/units';

export type Step =
  | { kind: 'recap'; title: L; exercises: Exercise[] }
  | { kind: 'cards'; title: L; items: Vocab[] }
  | { kind: 'quiz'; title: L; exercises: Exercise[] }
  | { kind: 'rule'; title: L; section: number; blocks?: number[] }
  | { kind: 'drill'; title: L; exercises: Exercise[] }
  | { kind: 'dialogue'; title: L }
  | { kind: 'story'; title: L }
  | { kind: 'final'; title: L; exercises: Exercise[] }
  | { kind: 'done'; title: L };

const t = (ru: string, en: string): L => ({ ru, en });

const globalPool: Vocab[] = allLessons.flatMap((x) => x.vocab);

/** Default plan: words in threes with a mixed review after every second batch, then each rule with its share of exercises. */
export function defaultPlan(lesson: Lesson): PlanItem[] {
  const plan: PlanItem[] = [];
  const n = lesson.vocab.length;
  let chunks = 0;
  for (let i = 0; i < n; i += 3) {
    plan.push({ w: Array.from({ length: Math.min(3, n - i) }, (_, k) => i + k) });
    if (++chunks % 2 === 0) plan.push({ mix: true });
  }
  const per = Math.ceil(lesson.exercises.length / Math.max(1, lesson.theory.length));
  lesson.theory.forEach((_, r) => {
    const d = Array.from({ length: per }, (_, k) => r * per + k).filter((k) => k < lesson.exercises.length);
    plan.push({ r, d });
  });
  return plan;
}

/**
 * Turns a lesson (or one part of it) into small steps: a few new words -> quick check -> a few more -> mixed review;
 * a rule -> drills on exactly that rule; then, in the last part, the dialogue and the story; and a final review.
 * Quiz questions are generated fresh each time so a retry never repeats the same questions.
 */
export function buildSteps(unit: Unit, prev?: Unit): Step[] {
  const lesson = unit.lesson;
  const plan = unit.plan.length ? unit.plan : defaultPlan(lesson);
  const isLast = unit.part === unit.parts;
  const pool = lesson.vocab;
  const wide = pool.length >= 6 ? pool : [...pool, ...globalPool];
  const steps: Step[] = [];
  const priorWords = unit.prior.map((i) => lesson.vocab[i]).filter(Boolean);
  const known: Vocab[] = [...priorWords];
  const used = new Set<number>();
  const seenWords = new Set<number>();

  const take = (idx: number[] = [], extra: Exercise[] = []): Exercise[] => {
    const out: Exercise[] = [];
    for (const i of idx) if (lesson.exercises[i]) {
      used.add(i);
      out.push(lesson.exercises[i]);
    }
    return [...out, ...extra];
  };

  if (priorWords.length) {
    const recap = mixQuiz(priorWords, lesson.id, wide, 4);
    if (recap.length) steps.push({ kind: 'recap', title: t('Вспомним начало урока', 'Recap of the first part'), exercises: recap });
  } else if (prev) {
    const prevWords = prev.vocab.map((i) => prev.lesson.vocab[i]).filter(Boolean);
    const prevPool = prev.lesson.vocab.length >= 6 ? prev.lesson.vocab : [...prev.lesson.vocab, ...globalPool];
    const recap = mixQuiz(prevWords.length ? prevWords : prev.lesson.vocab, prev.lesson.id, prevPool, 4);
    if (recap.length) steps.push({ kind: 'recap', title: t('Вспомним прошлый урок', 'Recap of the last lesson'), exercises: recap });
  }

  const nWordSteps = plan.filter((p) => 'w' in p).length;
  let wordStep = 0;
  for (const item of plan) {
    if ('w' in item) {
      const items = item.w.map((i) => lesson.vocab[i]).filter(Boolean);
      if (!items.length) continue;
      item.w.forEach((i) => seenWords.add(i));
      wordStep++;
      steps.push({ kind: 'cards', title: t(`Новые слова (${wordStep}/${nWordSteps})`, `New words (${wordStep}/${nWordSteps})`), items });
      known.push(...items);
      steps.push({ kind: 'quiz', title: t('Проверим только что выученное', 'Check what you just learned'), exercises: chunkQuiz(items, lesson.id, wide) });
      const d = take(item.d);
      if (d.length) steps.push({ kind: 'drill', title: t('Потренируем', 'Practice'), exercises: d });
    } else if ('mix' in item) {
      const q = mixQuiz(known, lesson.id, wide, Math.min(6, Math.max(4, known.length)));
      if (q.length) steps.push({ kind: 'quiz', title: t('Повторим всё вместе', 'Review everything so far'), exercises: q });
      const d = take(item.d);
      if (d.length) steps.push({ kind: 'drill', title: t('Потренируем', 'Practice'), exercises: d });
    } else if ('r' in item) {
      steps.push({ kind: 'rule', title: t('Правило', 'Rule'), section: item.r, blocks: item.blocks });
      const d = take(item.d, item.x);
      if (d.length) steps.push({ kind: 'drill', title: t('Закрепим правило', 'Practice the rule'), exercises: d });
    } else {
      const d = take(item.d, item.x);
      if (d.length) steps.push({ kind: 'drill', title: t('Потренируем', 'Practice'), exercises: d });
    }
  }

  // words the plan forgot still get taught (only in the part that owns them: the last one when no plan covers them)
  if (isLast && unit.parts === 1) {
    const rest = lesson.vocab.map((_, i) => i).filter((i) => !seenWords.has(i));
    for (let i = 0; i < rest.length; i += 3) {
      const items = rest.slice(i, i + 3).map((k) => lesson.vocab[k]);
      steps.push({ kind: 'cards', title: t('Ещё слова', 'More words'), items });
      steps.push({ kind: 'quiz', title: t('Проверим', 'Check'), exercises: chunkQuiz(items, lesson.id, wide) });
      known.push(...items);
    }
  }

  if (isLast) {
    steps.push({ kind: 'dialogue', title: t('Диалог', 'Dialogue') });
    steps.push({ kind: 'story', title: t('Рассказ', 'Story') });
  }

  const leftover = isLast && unit.parts === 1 ? lesson.exercises.filter((_, i) => !used.has(i)) : [];
  const finalQ = [...mixQuiz(known, lesson.id, wide, 8), ...leftover];
  steps.push({
    kind: 'final',
    title: isLast ? t('Итоговое повторение', 'Final review') : t(`Итог части ${unit.part}`, `Part ${unit.part} review`),
    exercises: finalQ,
  });
  steps.push({ kind: 'done', title: t('Готово', 'Done') });
  return steps;
}
