import type { L } from '../lib/types';
import { l } from './helpers';
import { bookLessons } from './book';

export type CourseId = 'korean' | 'korean-book' | 'english' | 'french' | 'chinese';

export interface Course {
  id: CourseId;
  flag: string;
  /** name in the language being learned */
  native: string;
  title: L;
  blurb: L;
  /** false = course is announced, content is not published yet */
  ready: boolean;
  /** what the course will contain (shown while it is not ready) */
  plan?: L[];
}

export const courses: Course[] = [
  {
    id: 'korean', flag: '🇰🇷', native: '한국어', ready: true,
    title: l('Корейский · AstEr', 'Korean · AstEr'),
    blurb: l('Курс с нуля: хангыль, уроки маленькими шагами, повторение и экзамены уровней.', 'From zero: Hangul, lessons in small steps, spaced review and level exams.'),
  },
  {
    id: 'korean-book', flag: '📘', native: '한국어', ready: bookLessons.length > 0,
    title: l('Korean by book', 'Korean by book'),
    blurb: l('Корейский по учебнику: все юниты книги с картинками и аудио.', 'Korean following the textbook: every unit with its pictures and audio.'),
    plan: [
      l('Все юниты книги: тексты, лексика и грамматика', 'Every unit of the book: texts, vocabulary and grammar'),
      l('Аудио к упражнениям — слушать произношение', 'Audio for the exercises to hear pronunciation'),
      l('Картинки из книги для закрепления слов', 'Pictures from the book to fix new words'),
      l('Задания с аудио и экзамен после каждого юнита', 'Listening tasks and an exam after every unit'),
      l('Практика письма: обводка и написание слов', 'Writing practice: tracing and writing words'),
      l('Карточки повторения из слов юнита', 'Review cards built from each unit’s words'),
    ],
  },
  {
    id: 'english', flag: '🇬🇧', native: 'English', ready: false,
    title: l('Английский', 'English'),
    blurb: l('Английский с нуля: слова, грамматика, диалоги и аудирование.', 'English from zero: words, grammar, dialogues and listening.'),
  },
  {
    id: 'french', flag: '🇫🇷', native: 'Français', ready: false,
    title: l('Французский', 'French'),
    blurb: l('Французский с нуля: произношение, слова, грамматика и диалоги.', 'French from zero: pronunciation, words, grammar and dialogues.'),
  },
  {
    id: 'chinese', flag: '🇨🇳', native: '中文', ready: false,
    title: l('Китайский', 'Chinese'),
    blurb: l('Китайский с нуля: тоны, пиньинь, иероглифы и базовая речь.', 'Chinese from zero: tones, pinyin, characters and basic speech.'),
  },
];

export const courseById = (id: string) => courses.find((c) => c.id === id);
