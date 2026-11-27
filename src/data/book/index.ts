import type { Exam, Lesson, L } from '../../lib/types';
import { unit as u01 } from './u01';
import { unit as u02 } from './u02';
import { unit as u03 } from './u03';
import { unit as u04 } from './u04';
import { unit as u05 } from './u05';
import { unit as u06 } from './u06';
import { unit as u07 } from './u07';
import { unit as u08 } from './u08';
import { unit as u09 } from './u09';
import { unit as u10 } from './u10';

/**
 * "Korean by book": every unit of the textbook is a lesson with its own level number BOOK_BASE + n.
 * Unit 1 is open; unit n+1 opens only when the exam of unit n is passed with at least BOOK_PASS.
 *
 * To add a unit: create u01.ts (see README.md here) exporting `unit` and `exam`, and list it in `raw`.
 * Pictures and audio cut from the book go to public/book/uNN/ and are referenced as 'book/uNN/file.ext'.
 */
export const BOOK_BASE = 100;
export const BOOK_PASS = 0.9;

export interface BookUnit {
  /** unit number in the book */
  n: number;
  lesson: Omit<Lesson, 'level' | 'id'>;
  /** questions of the end-of-unit exam */
  exam: Exam['exercises'];
}

const raw: BookUnit[] = [u01, u02, u03, u04, u05, u06, u07, u08, u09, u10];

export const bookLevel = (n: number) => BOOK_BASE + n;
export const isBookLevel = (level: number) => level > BOOK_BASE;

export const bookLessons: Lesson[] = raw.map((u) => ({ ...u.lesson, id: `b${String(u.n).padStart(2, '0')}`, level: bookLevel(u.n) }));

const examTitle = (n: number): L => ({ ru: `Экзамен юнита ${n}`, en: `Unit ${n} exam` });

export const bookExams: Exam[] = raw.map((u) => ({
  id: `exam-l${bookLevel(u.n)}`,
  level: bookLevel(u.n),
  title: examTitle(u.n),
  exercises: u.exam,
  pass: BOOK_PASS,
}));

export const bookLevels = raw.map((u) => ({
  level: bookLevel(u.n),
  emoji: u.lesson.emoji,
  title: { ru: `Юнит ${u.n} · ${u.lesson.title.ru}`, en: `Unit ${u.n} · ${u.lesson.title.en}` },
  blurb: u.lesson.goal,
}));
