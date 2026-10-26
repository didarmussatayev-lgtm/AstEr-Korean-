import { lessons } from '../data/lessons';
import type { Progress } from './types';

export const EXAM_PASS = 0.8;
export const examIdOf = (level: number) => `exam-l${level}`;

export const lessonsOfLevel = (level: number) => lessons.filter((l) => l.level === level);

/** Level 1 is always open. Level N opens after the exam of level N-1 is passed, or when an admin grants it. */
export function isLevelOpen(level: number, p: Progress): boolean {
  if (level <= 1) return true;
  return p.granted.includes(level) || p.exams[examIdOf(level - 1)]?.passed === true;
}

export function lessonsLeft(level: number, p: Progress): number {
  return lessonsOfLevel(level).filter((l) => !p.lessons.includes(l.id)).length;
}

export const isExamUnlocked = (level: number, p: Progress) =>
  isLevelOpen(level, p) && lessonsLeft(level, p) === 0;
