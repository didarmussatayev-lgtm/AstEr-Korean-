import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l23-connectors',
  level: 1,
  emoji: '🔗',
  title: l('Связки: -고, -지만, -아서/어서', 'Linking sentences: -고, -지만, -아서/어서'),
  goal: l('Соединять мысли: «и», «но», «потому что».', 'Join ideas: "and", "but", "because".'),
  theory: [
    {
      title: l('-고: «и», «а потом»', '-고: "and", "and then"'),
      blocks: [
        {
          type: 'p',
          text: l(
            'К основе добавляется **-고**. Для глаголов — последовательность («сделал это, потом то»), для прилагательных — перечисление признаков. Время ставится только в конце.',
            'Add **-고** to the stem. With verbs it shows a sequence ("did this, then that"); with adjectives it lists qualities. Tense goes only on the last verb.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '책을 읽고 자요.', tr: l('Читаю книгу и потом сплю.', 'I read a book and then sleep.') },
            { ko: '이 가방은 크고 예뻐요.', tr: l('Эта сумка большая и красивая.', 'This bag is big and pretty.') },
          ],
        },
      ],
    },
    {
      title: l('-지만: «но»', '-지만: "but"'),
      blocks: [
        {
          type: 'p',
          text: l(
            '**-지만** тоже присоединяется к основе: 작지만 예뻐요 «маленькое, но красивое». В начале предложения: **하지만** и **그런데** («но», «а»), **그리고** («и»).',
            '**-지만** also attaches to the stem: 작지만 예뻐요 "small but pretty". At the start of a sentence: **하지만** and **그런데** ("but"), **그리고** ("and").',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '한국어는 어렵지만 재미있어요.', tr: l('Корейский трудный, но интересный.', 'Korean is difficult but fun.') },
            { ko: '비싸지만 맛있어요.', tr: l('Дорого, но вкусно.', "It's expensive but tasty.") },
          ],
        },
      ],
    },
    {
      title: l('-아서/어서: «потому что», «поэтому»', '-아서/어서: "because", "so"'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Возьми вежливую форму, убери **요** и добавь **서**: 와요 → **와서**, 피곤해요 → **피곤해서**, 배고파요 → **배고파서**. Причина стоит **перед** следствием.',
            'Take the polite form, remove **요** and add **서**: 와요 → **와서**, 피곤해요 → **피곤해서**, 배고파요 → **배고파서**. The reason comes **before** the result.',
          ),
        },
        {
          type: 'table',
          head: [l('Вежливая форма', 'Polite form'), l('Со связкой', 'With -서'), l('Пример', 'Example')],
          rows: [
            ['와요', '와서', l('비가 와서 집에 있어요.', 'Because it rains, I stay home.')],
            ['피곤해요', '피곤해서', l('피곤해서 일찍 자요.', 'I am tired, so I sleep early.')],
            ['배고파요', '배고파서', l('배고파서 밥을 먹어요.', 'I am hungry, so I eat.')],
          ],
        },
        { type: 'tip', text: l('В части с **-아서/어서** нельзя ставить прошедшее время и просьбы: время и окончание добавляются только в конце предложения. Отдельно: **그래서** — «поэтому» в начале предложения.', 'The **-아서/어서** clause cannot take a past marker or a request ending: tense and endings go only at the end. As a separate word: **그래서** "so/therefore" at the start of a sentence.') },
      ],
    },
  ],
  vocab: [
    { ko: '-고', roman: '-go', tr: l('и; а потом', 'and; and then') },
    { ko: '-지만', roman: '-jiman', tr: l('но', 'but') },
    { ko: '-아서/어서', roman: '-aseo/eoseo', tr: l('потому что; поэтому', 'because; so') },
    { ko: '그리고', roman: 'geurigo', tr: l('и (в начале предложения)', 'and (sentence start)') },
    { ko: '그래서', roman: 'geuraeseo', tr: l('поэтому', 'so, therefore') },
    { ko: '그런데', roman: 'geureonde', tr: l('а; но; кстати', 'but; by the way') },
    { ko: '하지만', roman: 'hajiman', tr: l('но, однако', 'but, however') },
    { ko: '왜요?', roman: 'waeyo', tr: l('почему?', 'why?') },
    { ko: '어렵다 · 어려워요', roman: 'eoryeopda · eoryeowoyo', tr: l('трудный', 'difficult') },
    { ko: '쉽다 · 쉬워요', roman: 'swipda · swiwoyo', tr: l('лёгкий', 'easy') },
    { ko: '편하다 · 편해요', roman: 'pyeonhada · pyeonhaeyo', tr: l('удобный', 'comfortable') },
  ],
  exercises: [
    { type: 'match', prompt: l('Соедини связки', 'Match the connectors'), pairs: [{ ko: '그리고', tr: l('и', 'and') }, { ko: '그래서', tr: l('поэтому', 'so') }, { ko: '하지만', tr: l('но', 'but') }, { ko: '왜요?', tr: l('почему?', 'why?') }] },
    { type: 'cloze', sentence: '작___ 예뻐요.', tr: l('Маленькое, но красивое.', 'Small but pretty.'), options: ['지만', '서', '고 싶어'], answer: 0 },
    { type: 'cloze', sentence: '비가 와___ 집에 있어요.', tr: l('Идёт дождь, поэтому я дома.', "It's raining, so I stay home."), options: ['서', '지만', '고'], answer: 0 },
    { type: 'choice', prompt: l('피곤하다 + «поэтому»:', '피곤하다 + "so":'), options: ['피곤해서', '피곤하서', '피곤했서'], answer: 0, why: l('Вежливая форма 피곤해요 → убрать 요 → 피곤해 + 서.', 'Polite form 피곤해요 → drop 요 → 피곤해 + 서.') },
    { type: 'tf', statement: l('Можно сказать 비가 왔어서 집에 있어요.', 'You can say 비가 왔어서 집에 있어요.'), answer: false, why: l('Перед -아서/어서 нельзя ставить прошедшее время.', 'You cannot put a past marker before -아서/어서.') },
    { type: 'build', prompt: l('Собери: «Устал, поэтому рано ложусь»', 'Build: "I am tired, so I go to bed early"'), tokens: ['자요', '일찍', '피곤해서'], answer: ['피곤해서', '일찍', '자요'] },
    { type: 'write', prompt: l('Научись писать слово «поэтому»', 'Learn to write the word "so, therefore"'), word: '그래서', tr: l('поэтому', 'so, therefore') },
    { type: 'listen', say: '그래서', options: [l('поэтому', 'so'), l('но', 'but'), l('и', 'and')], answer: 0 },
    { type: 'write', prompt: l('Научись писать слово «но, однако»', 'Learn to write the word "but, however"'), word: '하지만', tr: l('но, однако', 'but, however') },
  ],
  dialogue: {
    title: l('Почему?', 'Why?'),
    lines: [
      { who: 'A', ko: '왜 집에 있어요?', tr: l('Почему ты дома?', 'Why are you at home?') },
      { who: 'B', ko: '비가 와서 집에 있어요.', tr: l('Идёт дождь, поэтому я дома.', "It's raining, so I'm at home.") },
      { who: 'A', ko: '뭐 해요?', tr: l('Что делаешь?', 'What are you doing?') },
      { who: 'B', ko: '책을 읽고 음악을 들어요.', tr: l('Читаю и слушаю музыку.', 'I read and listen to music.') },
    ],
  },
  story: {
    title: l('Дождливый день', 'A rainy day'),
    sentences: [
      { ko: '오늘은 비가 와요.', tr: l('Сегодня идёт дождь.', "It's raining today."), parts: [{ ko: '오늘', gloss: l('сегодня', 'today') }, { ko: '은', gloss: l('частица темы', 'topic particle') }, { ko: '비', gloss: l('дождь', 'rain') }, { ko: '가', gloss: l('частица подлежащего', 'subject particle') }, { ko: '와요', gloss: l('идёт', 'comes') }] },
      { ko: '그래서 집에 있어요.', tr: l('Поэтому я дома.', 'So I stay home.'), parts: [{ ko: '그래서', gloss: l('поэтому', 'so') }, { ko: '집', gloss: l('дом', 'home') }, { ko: '에', gloss: l('частица места', 'location particle') }, { ko: '있어요', gloss: l('нахожусь', 'am') }] },
      { ko: '책을 읽고 음악을 들어요.', tr: l('Читаю и слушаю музыку.', 'I read and listen to music.'), parts: [{ ko: '책', gloss: l('книга', 'book') }, { ko: '을', gloss: l('частица объекта', 'object particle') }, { ko: '읽고', gloss: l('читаю и… (읽다 + 고)', 'read and… (읽다 + 고)') }, { ko: '음악', gloss: l('музыка', 'music') }, { ko: '을', gloss: l('частица объекта', 'object particle') }, { ko: '들어요', gloss: l('слушаю', 'listen') }] },
      { ko: '집은 작지만 편해요.', tr: l('Дом маленький, но удобный.', 'My home is small but comfortable.'), parts: [{ ko: '집', gloss: l('дом', 'home') }, { ko: '은', gloss: l('частица темы', 'topic particle') }, { ko: '작지만', gloss: l('маленький, но (작다 + 지만)', 'small, but (작다 + 지만)') }, { ko: '편해요', gloss: l('удобный', 'comfortable') }] },
    ],
  },
};
