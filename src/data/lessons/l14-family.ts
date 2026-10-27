import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l14-family',
  level: 1,
  emoji: '👨‍👩‍👧',
  title: l('Семья: 우리 가족', 'Family: 우리 가족'),
  goal: l('Рассказать о своей семье и спросить о семье собеседника.', 'Talk about your family and ask about someone else’s.'),
  theory: [
    {
      title: l('«Мой» по-корейски: 제, 내, 우리', '"My" in Korean: 제, 내, 우리'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Принадлежность выражает частица **의**, но её почти всегда опускают. Вместо 저의 говорят **제** («мой», вежливо), вместо 나의 — **내** (разговорно).',
            'Possession uses **의**, but it is nearly always dropped. Instead of 저의 people say **제** ("my", polite) and instead of 나의 — **내** (casual).',
          ),
        },
        {
          type: 'p',
          text: l(
            'Про семью, дом и школу корейцы чаще говорят **우리** («наш»): 우리 어머니, 우리 집, 우리 학교. Это не значит, что мама общая: так звучит естественнее.',
            'For family, home and school Koreans prefer **우리** ("our"): 우리 어머니, 우리 집, 우리 학교. It does not mean the mother is shared — it just sounds natural.',
          ),
        },
      ],
    },
    {
      title: l('Члены семьи', 'Family members'),
      blocks: [
        {
          type: 'table',
          head: [l('Слово', 'Word'), l('Значение', 'Meaning')],
          rows: [
            ['아버지 / 아빠', l('отец / папа', 'father / dad')],
            ['어머니 / 엄마', l('мать / мама', 'mother / mom')],
            ['할아버지 / 할머니', l('дедушка / бабушка', 'grandfather / grandmother')],
            ['형 / 누나', l('старший брат / старшая сестра (говорит юноша)', 'older brother / older sister (said by a man)')],
            ['오빠 / 언니', l('старший брат / старшая сестра (говорит девушка)', 'older brother / older sister (said by a woman)')],
            ['동생', l('младший брат или сестра', 'younger sibling')],
            ['남동생 / 여동생', l('младший брат / младшая сестра', 'younger brother / younger sister')],
            ['아들 / 딸', l('сын / дочь', 'son / daughter')],
          ],
        },
        {
          type: 'tip',
          text: l(
            'Слова для старших братьев и сестёр зависят от **пола говорящего**. Юноша зовёт брата 형, а девушка — 오빠.',
            'Words for older siblings depend on the **speaker’s gender**. A young man says 형 for his brother, a young woman says 오빠.',
          ),
        },
      ],
    },
    {
      title: l('Сколько вас в семье?', 'How many people are in your family?'),
      blocks: [
        {
          type: 'examples',
          items: [
            { ko: '가족이 몇 명이에요?', tr: l('Сколько человек в вашей семье?', 'How many people are in your family?') },
            { ko: '우리 가족은 네 명이에요.', tr: l('Нас в семье четверо.', 'There are four of us.') },
            { ko: '동생이 있어요.', tr: l('У меня есть младший брат или сестра.', 'I have a younger sibling.') },
          ],
        },
      ],
    },
  ],
  vocab: [
    { ko: '가족', roman: 'gajok', tr: l('семья', 'family') },
    { ko: '아버지', roman: 'abeoji', tr: l('отец', 'father') },
    { ko: '어머니', roman: 'eomeoni', tr: l('мать', 'mother') },
    { ko: '아빠', roman: 'appa', tr: l('папа', 'dad') },
    { ko: '엄마', roman: 'eomma', tr: l('мама', 'mom') },
    { ko: '할아버지', roman: 'harabeoji', tr: l('дедушка', 'grandfather') },
    { ko: '할머니', roman: 'halmeoni', tr: l('бабушка', 'grandmother') },
    { ko: '형', roman: 'hyeong', tr: l('старший брат (для юноши)', 'older brother (man speaking)') },
    { ko: '오빠', roman: 'oppa', tr: l('старший брат (для девушки)', 'older brother (woman speaking)') },
    { ko: '누나', roman: 'nuna', tr: l('старшая сестра (для юноши)', 'older sister (man speaking)') },
    { ko: '언니', roman: 'eonni', tr: l('старшая сестра (для девушки)', 'older sister (woman speaking)') },
    { ko: '동생', roman: 'dongsaeng', tr: l('младший брат/сестра', 'younger sibling') },
    { ko: '남동생', roman: 'namdongsaeng', tr: l('младший брат', 'younger brother') },
    { ko: '여동생', roman: 'yeodongsaeng', tr: l('младшая сестра', 'younger sister') },
    { ko: '아들', roman: 'adeul', tr: l('сын', 'son') },
    { ko: '딸', roman: 'ttal', tr: l('дочь', 'daughter') },
    { ko: '우리', roman: 'uri', tr: l('наш, мы', 'our, we') },
    { ko: '제', roman: 'je', tr: l('мой (вежливо)', 'my (polite)') },
  ],
  exercises: [
    { type: 'match', prompt: l('Соедини слово и перевод', 'Match the word and its meaning'), pairs: [{ ko: '아버지', tr: l('отец', 'father') }, { ko: '어머니', tr: l('мать', 'mother') }, { ko: '할머니', tr: l('бабушка', 'grandmother') }, { ko: '딸', tr: l('дочь', 'daughter') }] },
    { type: 'choice', prompt: l('Девушка говорит о своём старшем брате:', 'A young woman talks about her older brother:'), options: ['형', '오빠', '누나'], answer: 1 },
    { type: 'choice', prompt: l('Юноша говорит о своей старшей сестре:', 'A young man talks about his older sister:'), options: ['언니', '오빠', '누나'], answer: 2 },
    { type: 'cloze', sentence: '우리 가족은 네 ___이에요.', tr: l('Нас в семье четверо.', 'There are four of us.'), options: ['명', '개', '살'], answer: 0 },
    { type: 'tf', statement: l('제 — это сокращение от 저의.', '제 is a contraction of 저의.'), answer: true },
    { type: 'build', prompt: l('Собери: «У меня есть младшая сестра»', 'Build: "I have a younger sister"'), tokens: ['있어요', '여동생이', '저는'], answer: ['저는', '여동생이', '있어요'] },
    { type: 'write', prompt: l('Научись писать слово «семья»', 'Learn to write the word "family"'), word: '가족', tr: l('семья', 'family') },
    { type: 'listen', say: '아버지', options: [l('отец', 'father'), l('мать', 'mother'), l('сын', 'son')], answer: 0 },
    { type: 'write', prompt: l('Научись писать слово «бабушка»', 'Learn to write the word "grandmother"'), word: '할머니', tr: l('бабушка', 'grandmother') },
  ],
  dialogue: {
    title: l('О семье', 'About family'),
    lines: [
      { who: 'A', ko: '가족이 몇 명이에요?', tr: l('Сколько вас в семье?', 'How many people are in your family?') },
      { who: 'B', ko: '네 명이에요. 아버지, 어머니, 동생, 저예요.', tr: l('Четверо: отец, мать, младший брат/сестра и я.', 'Four: father, mother, younger sibling and me.') },
      { who: 'A', ko: '동생이 몇 살이에요?', tr: l('Сколько лет вашему младшему?', 'How old is your younger sibling?') },
      { who: 'B', ko: '열다섯 살이에요.', tr: l('Пятнадцать.', "He or she is fifteen.") },
    ],
  },
  story: {
    title: l('Моя семья', 'My family'),
    sentences: [
      { ko: '우리 가족은 네 명이에요.', tr: l('Нас в семье четверо.', 'There are four of us.'), parts: [{ ko: '우리', gloss: l('наш', 'our') }, { ko: '가족', gloss: l('семья', 'family') }, { ko: '은', gloss: l('частица темы', 'topic particle') }, { ko: '네', gloss: l('4 (перед счётным)', '4 (before counter)') }, { ko: '명', gloss: l('человек', 'people') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
      { ko: '아버지는 선생님이에요.', tr: l('Отец — учитель.', 'My father is a teacher.'), parts: [{ ko: '아버지', gloss: l('отец', 'father') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '선생님', gloss: l('учитель', 'teacher') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
      { ko: '어머니도 선생님이에요.', tr: l('Мать тоже учитель.', 'My mother is a teacher too.'), parts: [{ ko: '어머니', gloss: l('мать', 'mother') }, { ko: '도', gloss: l('тоже', 'also') }, { ko: '선생님', gloss: l('учитель', 'teacher') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
      { ko: '저는 학생이에요.', tr: l('Я студент.', 'I am a student.'), parts: [{ ko: '저', gloss: l('я', 'I') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '학생', gloss: l('студент', 'student') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
      { ko: '동생도 학생이에요.', tr: l('Младший тоже учится.', 'My younger sibling is a student too.'), parts: [{ ko: '동생', gloss: l('младший брат/сестра', 'younger sibling') }, { ko: '도', gloss: l('тоже', 'also') }, { ko: '학생', gloss: l('студент', 'student') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
    ],
  },
};
