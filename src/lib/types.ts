export type Lang = 'ru' | 'en';
export type L = Record<Lang, string>;
export type Text = string | L;

export type Block =
  | { type: 'p'; text: L }
  | { type: 'tip'; text: L }
  | { type: 'table'; head: Text[]; rows: Text[][] }
  | { type: 'examples'; items: { ko: string; tr: L }[] };

export interface Vocab {
  ko: string;
  roman: string;
  tr: L;
}

export type Exercise =
  | { type: 'choice'; prompt: L; options: Text[]; answer: number; why?: L; passage?: string }
  | { type: 'cloze'; sentence: string; tr?: L; options: Text[]; answer: number; why?: L }
  | { type: 'tf'; statement: Text; answer: boolean; why?: L }
  | { type: 'listen'; say: string; options: L[]; answer: number }
  | { type: 'match'; prompt: L; pairs: { ko: string; tr: Text }[] }
  | { type: 'build'; prompt: L; tokens: string[]; answer: string[] }
  | { type: 'type'; prompt: L; answers: string[]; hint?: L }
  | { type: 'dictation'; say: string; answers: string[] };

export interface Exam {
  id: string;
  level: number;
  title: L;
  exercises: Exercise[];
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

export interface Progress {
  xp: number;
  streak: number;
  lastDay: string;
  lessons: string[];
  letters: string[];
  cards: Record<string, Card>;
  exams: Record<string, ExamResult>;
  /** levels opened by an admin regardless of exams */
  granted: number[];
  updatedAt: number;
}
