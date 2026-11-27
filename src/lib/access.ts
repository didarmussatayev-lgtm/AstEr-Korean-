import { unitDone, unitsOfLevel } from '../data/units';
import { BOOK_BASE } from '../data/book';
import type { Exam, Progress } from './types';

export const EXAM_PASS = 0.8;
/** share of correct answers needed to pass this exam */
export const passOf = (e: Exam) => e.pass ?? EXAM_PASS;
export const examIdOf = (level: number) => `exam-l${level}`;

export const lessonsOfLevel = (level: number) => unitsOfLevel(level);

/** Level 1 and the first unit of the book are always open. Level N opens after the exam of level N-1 is passed, or when an admin grants it. */
export function isLevelOpen(level: number, p: Progress): boolean {
  if (level <= 1 || level === BOOK_BASE + 1) return true;
  return p.granted.includes(level) || p.exams[examIdOf(level - 1)]?.passed === true;
}

/** Lessons (or lesson parts) of the level that are not finished yet. */
export function lessonsLeft(level: number, p: Progress): number {
  return unitsOfLevel(level).filter((u) => !unitDone(p.lessons, u)).length;
}

export const isExamUnlocked = (level: number, p: Progress) =>
  isLevelOpen(level, p) && lessonsLeft(level, p) === 0;
