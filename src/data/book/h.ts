import type { DialogueLine, Exercise, L, StorySentence, Text, Vocab } from '../../lib/types';
import { l } from '../helpers';

/** Short constructors used by the unit files of "Korean by book". */
export { l };

/** path of a picture cut from the book: pic(1, 'korea') -> 'book/u01/korea.webp' */
export const picOf = (n: number) => (name: string) => `book/u${String(n).padStart(2, '0')}/${name}.webp`;

/** a word card: v('한국', 'hanguk', 'Корея', 'Korea', img) */
export const v = (ko: string, roman: string, ru: string, en: string, img?: string): Vocab =>
  img ? { ko, roman, tr: l(ru, en), img } : { ko, roman, tr: l(ru, en) };

/** guided handwriting of a key word */
export const wr = (word: string, ru: string, en: string): Exercise => ({
  type: 'write',
  word,
  prompt: l(`Напиши слово «${ru}»`, `Write the word "${en}"`),
  tr: l(ru, en),
});

export const choice = (prompt: L, options: Text[], answer: number, why?: L, passage?: string): Exercise => ({
  type: 'choice',
  prompt,
  options,
  answer,
  ...(why ? { why } : {}),
  ...(passage ? { passage } : {}),
});

export const cloze = (sentence: string, tr: L, options: Text[], answer: number, why?: L): Exercise => ({
  type: 'cloze',
  sentence,
  tr,
  options,
  answer,
  ...(why ? { why } : {}),
});

export const tf = (statement: Text, answer: boolean, why?: L): Exercise => ({ type: 'tf', statement, answer, ...(why ? { why } : {}) });

/** listening with text-to-speech: the options are translations */
export const listen = (say: string, options: L[], answer: number): Exercise => ({ type: 'listen', say, options, answer });

export const match = (prompt: L, pairs: [string, Text][]): Exercise => ({ type: 'match', prompt, pairs: pairs.map(([ko, tr]) => ({ ko, tr })) });

/** build a sentence from tokens; the answer is the tokens in the right order */
export const build = (prompt: L, answer: string[], extra: string[] = []): Exercise => {
  const tokens = [...answer, ...extra];
  // a fixed, deterministic shuffle so the tokens never come in the right order
  const shuffled = tokens.map((t, i) => [t, (i * 7 + 3) % tokens.length] as const).sort((a, b) => a[1] - b[1]).map(([t]) => t);
  const same = shuffled.every((t, i) => t === answer[i]);
  return { type: 'build', prompt, tokens: same ? [...shuffled].reverse() : shuffled, answer };
};

export const type = (prompt: L, answers: string[], hint?: L): Exercise => ({ type: 'type', prompt, answers, ...(hint ? { hint } : {}) });

export const dict = (say: string, ...answers: string[]): Exercise => ({ type: 'dictation', say, answers: answers.length ? answers : [say] });

/** dialogue line */
export const dl = (who: 'A' | 'B', ko: string, ru: string, en: string): DialogueLine => ({ who, ko, tr: l(ru, en) });

/** story sentence; parts are [korean, ru gloss, en gloss] */
export const st = (ko: string, ru: string, en: string, parts: [string, string, string][]): StorySentence => ({
  ko,
  tr: l(ru, en),
  parts: parts.map(([k, r, e]) => ({ ko: k, gloss: l(r, e) })),
});
