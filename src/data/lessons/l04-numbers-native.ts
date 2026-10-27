import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l4-numbers-native',
  level: 1,
  emoji: '🍎',
  title: l('Числа 2: счёт, возраст, время', 'Numbers 2: counting, age, time'),
  goal: l('Считать предметы и людей, назвать возраст и час.', 'Count things and people, say your age and the hour.'),
  theory: [
    {
      title: l('Чистокорейские числа', 'Native Korean numbers'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Эти числа используются со **счётными словами**: для предметов (개), людей (명), возраста (살), часов (시). Считают обычно до 99.',
            'These numbers go with **counters**: things (개), people (명), age (살), hours (시). They are normally used up to 99.',
          ),
        },
        { type: 'table', head: ['1', '2', '3', '4', '5'], rows: [['하나', '둘', '셋', '넷', '다섯'], ['hana', 'dul', 'set', 'net', 'daseot']] },
        { type: 'table', head: ['6', '7', '8', '9', '10'], rows: [['여섯', '일곱', '여덟', '아홉', '열'], ['yeoseot', 'ilgop', 'yeodeol', 'ahop', 'yeol']] },
      ],
    },
    {
      title: l('Перед счётным словом числа меняются', 'Numbers change before a counter'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Числа **1, 2, 3, 4 и 20** перед счётным словом сокращаются. Остальные остаются как есть.',
            'The numbers **1, 2, 3, 4 and 20** are shortened before a counter. The others stay the same.',
          ),
        },
        { type: 'table', head: ['1', '2', '3', '4', '20'], rows: [['한', '두', '세', '네', '스무'], ['han', 'du', 'se', 'ne', 'seumu']] },
        {
          type: 'p',
          text: l(
            'Порядок: **предмет + число + счётное слово.** Сам предмет можно называть без частицы.',
            'Order: **thing + number + counter.**',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '사과 두 개', tr: l('два яблока', 'two apples') },
            { ko: '학생 세 명', tr: l('три студента', 'three students') },
            { ko: '스무 살', tr: l('20 лет', 'twenty years old') },
          ],
        },
      ],
    },
    {
      title: l('Время: часы и минуты', 'Time: hours and minutes'),
      blocks: [
        {
          type: 'p',
          text: l(
            '**Часы** — чистокорейские числа + 시. **Минуты** — китайско-корейские + 분. Из двух систем получается одна фраза!',
            '**Hours** use native numbers + 시. **Minutes** use Sino-Korean numbers + 분. One phrase, two systems!',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '세 시', tr: l('3 часа', "3 o'clock") },
            { ko: '두 시 삼십 분', tr: l('2:30', '2:30') },
            { ko: '열두 시', tr: l('12 часов', "12 o'clock") },
          ],
        },
        { type: 'tip', text: l('Запомни схему: часы — «своё» (한 시), минуты — «китайское» (십 분).', 'Remember: hours are "native" (한 시), minutes are "Sino" (십 분).') },
      ],
    },
  ],
  vocab: [
    { ko: '하나', roman: 'hana', tr: l('один', 'one') },
    { ko: '둘', roman: 'dul', tr: l('два', 'two') },
    { ko: '셋', roman: 'set', tr: l('три', 'three') },
    { ko: '넷', roman: 'net', tr: l('четыре', 'four') },
    { ko: '다섯', roman: 'daseot', tr: l('пять', 'five') },
    { ko: '여섯', roman: 'yeoseot', tr: l('шесть', 'six') },
    { ko: '일곱', roman: 'ilgop', tr: l('семь', 'seven') },
    { ko: '여덟', roman: 'yeodeol', tr: l('восемь', 'eight') },
    { ko: '아홉', roman: 'ahop', tr: l('девять', 'nine') },
    { ko: '열', roman: 'yeol', tr: l('десять', 'ten') },
    { ko: '개', roman: 'gae', tr: l('счётное слово для предметов', 'counter for things') },
    { ko: '명', roman: 'myeong', tr: l('счётное слово для людей', 'counter for people') },
    { ko: '살', roman: 'sal', tr: l('год (возраст)', 'years old') },
    { ko: '시', roman: 'si', tr: l('час (о времени)', "o'clock") },
    { ko: '분', roman: 'bun', tr: l('минута', 'minute') },
    { ko: '몇 살이에요?', roman: 'myeot salieyo', tr: l('сколько вам лет?', 'how old are you?') },
  ],
  exercises: [
    { type: 'listen', say: '일곱', options: [l('6', '6'), l('7', '7'), l('9', '9')], answer: 1 },
    { type: 'listen', say: '여덟', options: [l('8', '8'), l('10', '10'), l('5', '5')], answer: 0 },
    { type: 'choice', prompt: l('사과 ___ 개 (3 яблока)', 'Apples: ___ 개 (3)'), options: ['삼', '세', '셋'], answer: 1, why: l('Перед счётным словом 셋 превращается в 세.', 'Before a counter 셋 becomes 세.') },
    { type: 'choice', prompt: l('학생 ___ 명 (2 студента)', 'Students: ___ 명 (2)'), options: ['이', '두', '둘'], answer: 1 },
    { type: 'choice', prompt: l('Как сказать «20 лет»?', 'How do you say "20 years old"?'), options: ['이십 살', '스무 살', '열열 살'], answer: 1, why: l('Возраст 20 лет — 스무 살: перед счётным словом 스무.', 'Age uses the native form: 스무 before a counter.') },
    { type: 'choice', prompt: l('Какие числа нужны для минут?', 'Which numbers are used for minutes?'), options: [l('Китайско-корейские (십 분)', 'Sino-Korean (십 분)'), l('Чистокорейские (열 분)', 'Native (열 분)')], answer: 0 },
    { type: 'build', prompt: l('Собери: «три человека»', 'Build: "three people"'), tokens: ['명', '세'], answer: ['세', '명'] },
    { type: 'write', prompt: l('Научись писать слово «пять (чистокорейское)»', 'Learn to write the word "five (native number)"'), word: '다섯', tr: l('пять (чистокорейское)', 'five (native number)') },
    { type: 'write', prompt: l('Научись писать слово «яблоко»', 'Learn to write the word "apple"'), word: '사과', tr: l('яблоко', 'apple') },
  ],
  dialogue: {
    title: l('Знакомство: возраст', 'Getting to know you: age'),
    lines: [
      { who: 'A', ko: '학생이에요?', tr: l('Вы студент?', 'Are you a student?') },
      { who: 'B', ko: '네, 학생이에요.', tr: l('Да, студент.', "Yes, I'm a student.") },
      { who: 'A', ko: '몇 살이에요?', tr: l('Сколько вам лет?', 'How old are you?') },
      { who: 'B', ko: '스무 살이에요.', tr: l('Мне 20.', "I'm twenty.") },
    ],
  },
  story: {
    title: l('Считаем', 'Counting'),
    sentences: [
      { ko: '저는 스무 살이에요.', tr: l('Мне 20 лет.', 'I am twenty years old.'), parts: [{ ko: '저', gloss: l('я', 'I') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '스무', gloss: l('20 (перед счётным)', '20 (before counter)') }, { ko: '살', gloss: l('год жизни', 'years of age') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
      { ko: '학생은 세 명이에요.', tr: l('Студентов трое.', 'There are three students.'), parts: [{ ko: '학생', gloss: l('студент', 'student') }, { ko: '은', gloss: l('частица темы (после согласной)', 'topic particle (after consonant)') }, { ko: '세', gloss: l('3 (перед счётным)', '3 (before counter)') }, { ko: '명', gloss: l('человек', 'people') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
      { ko: '사과는 다섯 개예요.', tr: l('Яблок пять.', 'There are five apples.'), parts: [{ ko: '사과', gloss: l('яблоко', 'apple') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '다섯', gloss: l('5', '5') }, { ko: '개', gloss: l('штук', 'items') }, { ko: '예요', gloss: l('быть (после гласной)', 'to be (after vowel)') }] },
    ],
  },
};
