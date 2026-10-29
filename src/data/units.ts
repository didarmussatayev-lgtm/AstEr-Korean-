import { lessons } from './lessons';
import { planParts } from './plan';
import type { PlanItem } from './plan';
import type { L, Lesson } from '../lib/types';

/**
 * What the learner actually opens: a lesson, or one part of a long lesson ("part 1/2").
 * Dialogue and story belong to the last part.
 */
export interface Unit {
  id: string;
  lessonId: string;
  lesson: Lesson;
  part: number;
  parts: number;
  title: L;
  plan: PlanItem[];
  /** indices into lesson.vocab taught in this part */
  vocab: number[];
  /** indices taught in the earlier parts of the same lesson */
  prior: number[];
}

const wordsOf = (plan: PlanItem[]) => plan.flatMap((it) => ('w' in it ? it.w : []));

export const units: Unit[] = lessons.flatMap((lesson) => {
  const parts = planParts[lesson.id] ?? [[]];
  return parts.map((plan, k): Unit => {
    const single = parts.length === 1;
    return {
      id: single ? lesson.id : `${lesson.id}-p${k + 1}`,
      lessonId: lesson.id,
      lesson,
      part: k + 1,
      parts: parts.length,
      title: single
        ? lesson.title
        : { ru: `${lesson.title.ru} · часть ${k + 1}/${parts.length}`, en: `${lesson.title.en} · part ${k + 1}/${parts.length}` },
      plan,
      vocab: wordsOf(plan),
      prior: parts.slice(0, k).flatMap(wordsOf),
    };
  });
});

export const unitById = (id: string) => units.find((u) => u.id === id) ?? units.find((u) => u.lessonId === id);
export const unitsOfLevel = (level: number) => units.filter((u) => u.lesson.level === level);
export const prevUnit = (u: Unit) => units[units.findIndex((x) => x.id === u.id) - 1];

/** A unit counts as done if its own id is stored, or the whole lesson was finished before lessons were split. */
export const unitDone = (done: string[], u: Unit) => done.includes(u.id) || done.includes(u.lessonId);
