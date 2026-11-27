import { BOOK_BASE } from './book';

/**
 * Level numbers of every course live in one space:
 *  1..99        – the main Korean course (levels with a level exam)
 *  101..999     – "Korean by book": unit n = BOOK_BASE + n
 *  1001..9999   – Chinese HSK: lesson n of HSK k = k * HSK_BASE + n
 * Book units and HSK lessons are gated one by one: the next opens after the exam of the previous one.
 */
export const HSK_BASE = 1000;
export const hskLevel = (hsk: number, n: number) => hsk * HSK_BASE + n;

export type Series = 'core' | 'book' | 'hsk';

export const seriesOf = (level: number): Series => (level > HSK_BASE ? 'hsk' : level > BOOK_BASE ? 'book' : 'core');

/** number of the unit / lesson inside its series (unit 3 of the book, lesson 3 of HSK 2) */
export const unitNo = (level: number) => (level > HSK_BASE ? level % HSK_BASE : level > BOOK_BASE ? level - BOOK_BASE : level);

/** HSK level (1, 2 …) of an HSK lesson level */
export const hskOf = (level: number) => Math.floor(level / HSK_BASE);

/** levels open from the start: level 1, unit 1 of the book, the first published lesson of each HSK level */
export const FIRST_LEVELS = [1, BOOK_BASE + 1, hskLevel(2, 1)];
