import type { Exercise, L, Text, Vocab } from './types';
import { mnemonicKey, MNEMONICS } from '../data/mnemonics';
import { shuffle } from '../components/ui';

/** What to read aloud for a vocabulary entry: "먹다 · 먹어요" -> "먹어요", "-고" -> "고". */
export function speakable(ko: string): string {
  const last = ko.split('·').pop()!.trim();
  return last.split('/')[0].replace(/^-/, '').replace(/[?]/g, '').trim();
}

const l = (ru: string, en: string): L => ({ ru, en });

type Pool = Vocab[];

function pickDistractors<T>(correct: Vocab, pool: Pool, key: (v: Vocab) => T, n = 2): Vocab[] {
  const seen = new Set<T>([key(correct)]);
  const out: Vocab[] = [];
  for (const v of shuffle(pool)) {
    const k = key(v);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(v);
    if (out.length === n) break;
  }
  return out;
}

const trKey = (v: Vocab) => v.tr.ru;
const koKey = (v: Vocab) => v.ko;

/** Question builders: each takes the word to ask about, the lesson id (for the picture hint) and a pool of look-alikes. */
function qMeaning(v: Vocab, lessonId: string, pool: Pool): Exercise | null {
  const ds = pickDistractors(v, pool, trKey);
  if (ds.length < 2) return null;
  const opts = shuffle([v, ...ds]);
  return {
    type: 'choice',
    prompt: l(`Что значит «${v.ko}»?`, `What does "${v.ko}" mean?`),
    options: opts.map((o) => o.tr),
    answer: opts.indexOf(v),
    ref: mnemonicKey(lessonId, v.ko) ?? undefined,
  };
}

function qReverse(v: Vocab, lessonId: string, pool: Pool): Exercise | null {
  const ds = pickDistractors(v, pool, koKey);
  if (ds.length < 2) return null;
  const opts = shuffle([v, ...ds]);
  return {
    type: 'choice',
    prompt: l(`Как будет по-корейски: «${v.tr.ru}»?`, `How do you say "${v.tr.en}" in Korean?`),
    options: opts.map((o) => o.ko),
    answer: opts.indexOf(v),
    ref: mnemonicKey(lessonId, v.ko) ?? undefined,
  };
}

function qListen(v: Vocab, lessonId: string, pool: Pool): Exercise | null {
  const ds = pickDistractors(v, pool, trKey);
  if (ds.length < 2) return null;
  const opts = shuffle([v, ...ds]);
  return { type: 'listen', say: speakable(v.ko), options: opts.map((o) => o.tr), answer: opts.indexOf(v), ref: mnemonicKey(lessonId, v.ko) ?? undefined };
}

/** Picture question: which word does this silly picture stand for? Strengthens the memory hook. */
function qPicture(v: Vocab, lessonId: string, pool: Pool): Exercise | null {
  const k = mnemonicKey(lessonId, v.ko);
  if (!k) return null;
  const ds = pickDistractors(v, pool, koKey);
  if (ds.length < 2) return null;
  const opts = shuffle([v, ...ds]);
  return {
    type: 'choice',
    prompt: l(`${MNEMONICS[k].e} Какое слово подходит к картинке?`, `${MNEMONICS[k].e} Which word fits the picture?`),
    options: opts.map((o) => o.ko),
    answer: opts.indexOf(v),
    ref: k,
  };
}

const builders = [qMeaning, qReverse, qListen, qPicture];

function ask(kind: (v: Vocab, id: string, pool: Pool) => Exercise | null, v: Vocab, lessonId: string, pool: Pool): Exercise | null {
  return kind(v, lessonId, pool) ?? qMeaning(v, lessonId, pool);
}

/**
 * A short check on 1–4 freshly learned words: one question per word (picture, meaning, reverse in turn),
 * one listening question and, from three words up, a match. About five questions for three words.
 */
export function chunkQuiz(items: Vocab[], lessonId: string, pool: Pool): Exercise[] {
  const kinds = [qPicture, qMeaning, qReverse];
  const out: Exercise[] = [];
  items.forEach((v, i) => {
    const ex = ask(kinds[i % kinds.length], v, lessonId, pool);
    if (ex) out.push(ex);
  });
  const listen = ask(qListen, items[Math.floor(Math.random() * items.length)], lessonId, pool);
  if (listen) out.push(listen);
  const q = shuffle(out);
  if (items.length >= 3) {
    q.push({
      type: 'match',
      prompt: l('Соедини слово и перевод', 'Match the word and its meaning'),
      pairs: items.map((v) => ({ ko: v.ko, tr: v.tr })),
    });
  }
  return q;
}

/** Mixed review of everything learned so far: one question per word, random type, newest words first. */
export function mixQuiz(known: Vocab[], lessonId: string, pool: Pool, count = 6): Exercise[] {
  const pick = shuffle(known).slice(0, Math.min(count, known.length));
  const out: Exercise[] = [];
  for (const v of pick) {
    const kind = builders[Math.floor(Math.random() * builders.length)];
    const ex = ask(kind, v, lessonId, pool);
    if (ex) out.push(ex);
  }
  return out;
}

export type { Text };
