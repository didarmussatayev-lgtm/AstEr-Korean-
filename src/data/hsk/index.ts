import type { Exam, Lesson, L } from '../../lib/types';
import type { BookUnit } from '../book';
import { BOOK_PASS } from '../book';
import { hskLevel } from '../series';
import { unit as h2_01 } from './h2-01';
import { unit as h2_02 } from './h2-02';
import { unit as h2_03 } from './h2-03';
import { unit as h2_04 } from './h2-04';
import { unit as h2_05 } from './h2-05';
import { unit as h2_06 } from './h2-06';
import { unit as h2_07 } from './h2-07';
import { unit as h2_08 } from './h2-08';
import { unit as h2_09 } from './h2-09';
import { unit as h2_10 } from './h2-10';
import { unit as h2_11 } from './h2-11';

/**
 * Chinese course: HSK lessons. HSK 2 follows the workbook «HSK标准教程 2 练习册» (15 lessons).
 * Lesson n of HSK k has level hskLevel(k, n); the next lesson opens after the exam of the previous one (BOOK_PASS).
 * Files: h2-NN.ts in this folder export `unit` (a BookUnit with n = lesson number) and are listed in `hsk2`.
 * Pictures from the workbook live in public/hsk/2/NN/ and are referenced as 'hsk/2/NN/file.webp'.
 */
const hsk2: BookUnit[] = [h2_01, h2_02, h2_03, h2_04, h2_05, h2_06, h2_07, h2_08, h2_09, h2_10, h2_11];

interface HskBook {
  hsk: number;
  units: BookUnit[];
}

const books: HskBook[] = [{ hsk: 2, units: hsk2 }];

const lessonId = (hsk: number, n: number) => `h${hsk}-${String(n).padStart(2, '0')}`;

export const hskLessons: Lesson[] = books.flatMap((b) =>
  b.units.map((u) => ({ ...u.lesson, id: lessonId(b.hsk, u.n), level: hskLevel(b.hsk, u.n) })),
);

const examTitle = (n: number): L => ({ ru: `Экзамен урока ${n}`, en: `Lesson ${n} exam` });

export const hskExams: Exam[] = books.flatMap((b) =>
  b.units.map((u) => ({
    id: `exam-l${hskLevel(b.hsk, u.n)}`,
    level: hskLevel(b.hsk, u.n),
    title: examTitle(u.n),
    exercises: u.exam,
    pass: BOOK_PASS,
  })),
);

export interface HskSection {
  hsk: number;
  title: L;
  blurb: L;
  levels: { level: number; emoji: string; title: L; blurb: L }[];
}

/** what the Chinese course home shows: one section per HSK level (an empty section is announced as "soon") */
export const hskSections: HskSection[] = [
  {
    hsk: 1,
    title: { ru: 'HSK 1', en: 'HSK 1' },
    blurb: { ru: 'Первые 150 слов: приветствия, числа, время, семья.', en: 'The first 150 words: greetings, numbers, time, family.' },
    levels: [],
  },
  ...books.map((b) => ({
    hsk: b.hsk,
    title: { ru: `HSK ${b.hsk}`, en: `HSK ${b.hsk}` },
    blurb: {
      ru: 'По рабочей тетради «HSK标准教程 2»: 15 уроков, после каждого — экзамен на 90%.',
      en: 'Following the «HSK Standard Course 2» workbook: 15 lessons, each with a 90% exam.',
    },
    levels: b.units.map((u) => ({
      level: hskLevel(b.hsk, u.n),
      emoji: u.lesson.emoji,
      title: { ru: `Урок ${u.n} · ${u.lesson.title.ru}`, en: `Lesson ${u.n} · ${u.lesson.title.en}` },
      blurb: u.lesson.goal,
    })),
  })),
];

export const hskLevels = hskSections.flatMap((s) => s.levels);
