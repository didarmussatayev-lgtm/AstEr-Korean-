export type Lang = 'ru' | 'en' | 'kk' | 'tr';
/** ru and en are required; kk and tr are optional (Kazakh falls back to Russian, Turkish to English) */
export type L = Record<'ru' | 'en', string> & Partial<Record<'kk' | 'tr', string>>;
export type Text = string | L;

export type Block =
  | { type: 'p'; text: L }
  | { type: 'tip'; text: L }
  | { type: 'table'; head: Text[]; rows: Text[][] }
  | { type: 'examples'; items: { ko: string; tr: L }[] }
  /** a picture (e.g. cut from the textbook); src is relative to public/ */
  | { type: 'img'; src: string; caption?: L }
  /** an audio track (e.g. from the textbook CD) with an optional transcript */
  | { type: 'audio'; src: string; title?: L; transcript?: string };

export interface Vocab {
  ko: string;
  roman: string;
  tr: L;
  /** picture for the word card (relative to public/) */
  img?: string;
  /** recorded pronunciation; text-to-speech is used when absent */
  audio?: string;
}

export type Exercise =
  | { type: 'choice'; prompt: L; options: Text[]; answer: number; why?: L; passage?: string; ref?: string }
  | { type: 'cloze'; sentence: string; tr?: L; options: Text[]; answer: number; why?: L }
  | { type: 'tf'; statement: Text; answer: boolean; why?: L }
  | { type: 'listen'; say: string; options: L[]; answer: number; ref?: string; audio?: string }
  | { type: 'match'; prompt: L; pairs: { ko: string; tr: Text }[] }
  | { type: 'build'; prompt: L; tokens: string[]; answer: string[] }
  | { type: 'type'; prompt: L; answers: string[]; hint?: L }
  | { type: 'dictation'; say: string; answers: string[]; audio?: string }
  /** guided handwriting: assemble -> trace -> write syllables -> write the word */
  | { type: 'write'; prompt: L; word: string; tr?: L };

export interface Exam {
  id: string;
  level: number;
  title: L;
  exercises: Exercise[];
  /** share of correct answers needed to pass (default EXAM_PASS) */
  pass?: number;
}

export interface ExamResult {
  best: number; // 0..1
  passed: boolean;
  at: string;
}

export interface DialogueLine {
  who: 'A' | 'B';
  ko: string;
  tr: L;
}

export interface Part {
  ko: string;
  gloss: L;
}

export interface StorySentence {
  ko: string;
  tr: L;
  parts: Part[];
}

export interface Lesson {
  id: string;
  level: number;
  emoji: string;
  title: L;
  goal: L;
  theory: { title: L; blocks: Block[] }[];
  vocab: Vocab[];
  exercises: Exercise[];
  dialogue: { title: L; lines: DialogueLine[] };
  story: { title: L; sentences: StorySentence[] };
}

export interface Letter {
  ch: string;
  roman: string;
  sound: L;
  mnemonic: L;
  word: { ko: string; roman: string; tr: L };
  kind: 'vowel' | 'consonant';
}

export interface Card {
  id: string;
  ko: string;
  roman?: string;
  tr: L;
  ease: number;
  interval: number; // days
  due: string; // YYYY-MM-DD
  reps: number;
}

export interface LessonResume {
  step: string;
  theory: number;
  ex: number;
}

export interface Progress {
  xp: number;
  streak: number;
  lastDay: string;
  lessons: string[];
  letters: string[];
  cards: Record<string, Card>;
  exams: Record<string, ExamResult>;
  /** where the learner stopped inside an unfinished lesson */
  resume: Record<string, LessonResume>;
  /** levels opened by an admin regardless of exams */
  granted: number[];
  updatedAt: number;
}

/** exercises where the student must type or handwrite Korean/Chinese from scratch — not shown (too hard) */
export const isFromScratch = (e: { type: string }) => e.type === 'type' || e.type === 'dictation' || e.type === 'write';
