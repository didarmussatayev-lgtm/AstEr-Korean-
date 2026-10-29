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
      title: l('Свои числа корейцев', 'The native Korean numbers'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Это **вторая система** — чистокорейские числа. Они нужны для счёта **предметов и людей, возраста и часов**. Их немного: считают до 99. Начнём с самых первых — по три цифры за раз.',
            'This is the **second system** — native Korean numbers. They count **things and people, age and hours**. They are used up to 99. We start with the first ones, three at a time.',
          ),
        },
      ],
    },
    {
      title: l('Счётные слова', 'Counters'),
      blocks: [
        {
          type: 'p',
          text: l(
            'В корейском число почти всегда ставят **со счётным словом** (как «штуки», «человек», «лет» в русском): **предмет + число + счётное слово**. Для предметов — **개**, для людей — **명**, для возраста — **살**.',
            'In Korean a number usually comes **with a counter** (like "pieces", "people", "years old"): **thing + number + counter**. Use **개** for things, **명** for people, **살** for age.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '사과 다섯 개', tr: l('пять яблок', 'five apples') },
            { ko: '학생 열 명', tr: l('десять студентов', 'ten students') },
            { ko: '여섯 살', tr: l('шесть лет', 'six years old') },
          ],
        },
      ],
    },
    {
      title: l('Числа 1–4 и 20 сокращаются', 'The numbers 1–4 and 20 get shorter'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Перед счётным словом числа **1, 2, 3, 4 и 20** сокращаются. Остальные (5, 6, 7…) остаются как есть. Само «двадцать» — 스물, но перед счётным словом это **스무**.',
            'Before a counter the numbers **1, 2, 3, 4 and 20** get shorter. The others (5, 6, 7…) stay the same. "Twenty" itself is 스물, but before a counter it becomes **스무**.',
          ),
        },
        { type: 'table', head: ['1', '2', '3', '4', '20'], rows: [['한', '두', '세', '네', '스무'], ['han', 'du', 'se', 'ne', 'seumu']] },
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
            '**Часы** — чистокорейские числа + 시. **Минуты** — китайско-корейские (из прошлого урока) + 분. Две системы в одной фразе!',
            '**Hours** use native numbers + 시. **Minutes** use Sino-Korean numbers (last lesson) + 분. Two systems in one phrase!',
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
    /* 0 */ { type: 'listen', say: '일곱', options: [l('6', '6'), l('7', '7'), l('9', '9')], answer: 1 },
    /* 1 */ { type: 'listen', say: '여덟', options: [l('8', '8'), l('10', '10'), l('5', '5')], answer: 0 },
    /* 2 */ { type: 'choice', prompt: l('사과 ___ 개 (3 яблока)', 'Apples: ___ 개 (3)'), options: ['삼', '세', '셋'], answer: 1, why: l('Перед счётным словом 셋 превращается в 세.', 'Before a counter 셋 becomes 세.') },
    /* 3 */ { type: 'choice', prompt: l('학생 ___ 명 (2 студента)', 'Students: ___ 명 (2)'), options: ['이', '두', '둘'], answer: 1, why: l('Перед счётным словом 둘 превращается в 두.', 'Before a counter 둘 becomes 두.') },
    /* 4 */ { type: 'choice', prompt: l('Как сказать «20 лет»?', 'How do you say "20 years old"?'), options: ['이십 살', '스무 살', '열열 살'], answer: 1, why: l('Возраст — своими числами; 20 перед 살 — 스무.', 'Age uses native numbers; 20 before 살 is 스무.') },
    /* 5 */ { type: 'choice', prompt: l('Какие числа нужны для минут?', 'Which numbers are used for minutes?'), options: [l('Китайско-корейские (십 분)', 'Sino-Korean (십 분)'), l('Чистокорейские (열 분)', 'Native (열 분)')], answer: 0 },
    /* 6 */ { type: 'build', prompt: l('Собери: «три человека»', 'Build: "three people"'), tokens: ['명', '세'], answer: ['세', '명'] },
    /* 7 */ { type: 'write', prompt: l('Научись писать число 5', 'Learn to write the number 5'), word: '다섯', tr: l('пять (чистокорейское)', 'five (native number)') },
    /* 8 */ { type: 'write', prompt: l('Научись писать слово «яблоко»', 'Learn to write the word "apple"'), word: '사과', tr: l('яблоко', 'apple') },
    /* 9 */ { type: 'match', prompt: l('Соедини слово и цифру', 'Match the word and the digit'), pairs: [{ ko: '하나', tr: '1' }, { ko: '둘', tr: '2' }, { ko: '셋', tr: '3' }, { ko: '넷', tr: '4' }] },
    /* 10 */ { type: 'match', prompt: l('Соедини слово и цифру', 'Match the word and the digit'), pairs: [{ ko: '다섯', tr: '5' }, { ko: '여섯', tr: '6' }, { ko: '일곱', tr: '7' }, { ko: '여덟', tr: '8' }] },
    /* 11 */ { type: 'choice', prompt: l('Какое счётное слово для людей?', 'Which counter is for people?'), options: ['개', '명', '살'], answer: 1 },
    /* 12 */ { type: 'choice', prompt: l('Какое счётное слово для возраста?', 'Which counter is for age?'), options: ['개', '명', '살'], answer: 2 },
    /* 13 */ { type: 'choice', prompt: l('학생 ___ 명 (5 студентов)', 'Students: ___ 명 (5)'), options: ['다섯', '오', '다'], answer: 0, why: l('5 не сокращается: 다섯 명.', '5 does not change: 다섯 명.') },
    /* 14 */ { type: 'choice', prompt: l('Как сказать «три часа»?', 'How do you say "three o\'clock"?'), options: ['삼 시', '세 시', '셋 시'], answer: 1, why: l('Часы — свои числа, и 셋 → 세 перед 시.', 'Hours use native numbers, and 셋 → 세 before 시.') },
    /* 15 */ { type: 'build', prompt: l('Собери: «5 часов»', 'Build: "5 o\'clock"'), tokens: ['시', '다섯'], answer: ['다섯', '시'] },
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
