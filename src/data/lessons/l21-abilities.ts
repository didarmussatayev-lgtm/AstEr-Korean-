import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l21-abilities',
  level: 1,
  emoji: '💪',
  title: l('Умею / не умею: -ㄹ/을 수 있어요, 못', 'Can / cannot: -ㄹ/을 수 있어요, 못'),
  goal: l('Сказать, что ты умеешь и чего не умеешь.', 'Say what you can and cannot do.'),
  theory: [
    {
      title: l('-(으)ㄹ 수 있어요 / 없어요', '-(으)ㄹ 수 있어요 / 없어요'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Конструкция «могу / умею»: основа + **-ㄹ 수 있어요** (после гласной) или **-을 수 있어요** (после согласной). Отрицание — **없어요**. Правило ㄹ/을 то же, что в будущем времени.',
            'The "can / be able to" pattern: stem + **-ㄹ 수 있어요** (vowel) or **-을 수 있어요** (consonant). The negative is **없어요**. The ㄹ/을 rule is the same as in the future tense.',
          ),
        },
        {
          type: 'table',
          head: [l('Основа', 'Stem'), l('Форма', 'Form'), l('Значение', 'Meaning')],
          rows: [
            ['가', '갈 수 있어요', l('могу пойти', 'can go')],
            ['하', '할 수 있어요', l('могу, умею делать', 'can do')],
            ['먹', '먹을 수 있어요', l('могу есть', 'can eat')],
            ['읽', '읽을 수 있어요', l('могу читать', 'can read')],
          ],
        },
        {
          type: 'examples',
          items: [
            { ko: '한국어를 할 수 있어요.', tr: l('Я умею говорить по-корейски.', 'I can speak Korean.') },
            { ko: '매운 음식을 먹을 수 없어요.', tr: l('Я не могу есть острое.', "I can't eat spicy food.") },
          ],
        },
      ],
    },
    {
      title: l('못 + глагол', '못 + verb'),
      blocks: [
        {
          type: 'p',
          text: l(
            '**못** ставится перед глаголом и значит «не могу, не получается». Сравни: **안** — «не хочу / не делаю», **못** — «не могу». С глаголами на -하다: **수영을 못 해요**.',
            '**못** goes before the verb and means "cannot". Compare: **안** is "do not / will not", **못** is "cannot". With -하다 verbs: **수영을 못 해요**.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '수영을 못 해요.', tr: l('Я не умею плавать.', "I can't swim.") },
            { ko: '오늘은 못 가요.', tr: l('Сегодня не смогу пойти.', "I can't go today.") },
            { ko: '커피를 안 마셔요.', tr: l('Я не пью кофе (не хочу).', "I don't drink coffee (by choice).") },
          ],
        },
      ],
    },
    {
      title: l('Хорошо ли получается: 잘, 잘 못', 'How well: 잘, 잘 못'),
      blocks: [
        {
          type: 'p',
          text: l(
            '**잘** — «хорошо»: 요리를 잘해요 «хорошо готовлю». **잘 못해요** — «не очень хорошо умею». **조금** — «немного».',
            '**잘** is "well": 요리를 잘해요 "I cook well". **잘 못해요** is "I am not very good at it". **조금** is "a little".',
          ),
        },
      ],
    },
  ],
  vocab: [
    { ko: '수영', roman: 'suyeong', tr: l('плавание', 'swimming') },
    { ko: '운전', roman: 'unjeon', tr: l('вождение', 'driving') },
    { ko: '요리', roman: 'yori', tr: l('готовка', 'cooking') },
    { ko: '노래', roman: 'norae', tr: l('песня, пение', 'song, singing') },
    { ko: '피아노', roman: 'piano', tr: l('пианино', 'piano') },
    { ko: '할 수 있어요', roman: 'hal su isseoyo', tr: l('могу, умею', 'can') },
    { ko: '할 수 없어요', roman: 'hal su eopseoyo', tr: l('не могу', 'cannot') },
    { ko: '못', roman: 'mot', tr: l('не могу (перед глаголом)', 'cannot (before a verb)') },
    { ko: '잘', roman: 'jal', tr: l('хорошо', 'well') },
    { ko: '잘해요', roman: 'jalhaeyo', tr: l('хорошо умею', 'is good at') },
    { ko: '조금', roman: 'jogeum', tr: l('немного', 'a little') },
    { ko: '매운', roman: 'maeun', tr: l('острый (перед сущ.)', 'spicy (before a noun)') },
  ],
  exercises: [
    { type: 'match', prompt: l('Соедини слово и перевод', 'Match the word and its meaning'), pairs: [{ ko: '수영', tr: l('плавание', 'swimming') }, { ko: '운전', tr: l('вождение', 'driving') }, { ko: '요리', tr: l('готовка', 'cooking') }, { ko: '노래', tr: l('пение', 'singing') }] },
    { type: 'cloze', sentence: '한국어를 할 ___ 있어요.', tr: l('Я умею говорить по-корейски.', 'I can speak Korean.'), options: ['수', '거', '게'], answer: 0 },
    { type: 'choice', prompt: l('먹다 + «могу»:', '먹다 + "can":'), options: ['먹ㄹ 수 있어요', '먹을 수 있어요', '먹는 수 있어요'], answer: 1 },
    { type: 'choice', prompt: l('가다 + «могу»:', '가다 + "can":'), options: ['갈 수 있어요', '가을 수 있어요', '가는 수 있어요'], answer: 0 },
    { type: 'choice', prompt: l('«Я не умею плавать»:', '"I cannot swim":'), options: ['수영을 안 해요', '수영을 못 해요', '수영이 아니에요'], answer: 1, why: l('못 — «не могу», 안 — «не хочу / не делаю».', '못 is "cannot", 안 is "do not".') },
    { type: 'tf', statement: l('못 значит «не хочу».', '못 means "do not want to".'), answer: false },
    { type: 'build', prompt: l('Собери: «Я хорошо готовлю»', 'Build: "I cook well"'), tokens: ['잘해요', '요리를', '저는'], answer: ['저는', '요리를', '잘해요'] },
    { type: 'write', prompt: l('Научись писать слово «плавание»', 'Learn to write the word "swimming"'), word: '수영', tr: l('плавание', 'swimming') },
    { type: 'listen', say: '운전', options: [l('вождение', 'driving'), l('плавание', 'swimming'), l('пение', 'singing')], answer: 0 },
    { type: 'write', prompt: l('Научись писать слово «готовка»', 'Learn to write the word "cooking"'), word: '요리', tr: l('готовка', 'cooking') },
  ],
  dialogue: {
    title: l('Что ты умеешь?', 'What can you do?'),
    lines: [
      { who: 'A', ko: '수영을 할 수 있어요?', tr: l('Ты умеешь плавать?', 'Can you swim?') },
      { who: 'B', ko: '아니요, 수영은 못 해요.', tr: l('Нет, плавать не умею.', "No, I can't swim.") },
      { who: 'A', ko: '한국어는 할 수 있어요?', tr: l('А по-корейски умеешь?', 'And can you speak Korean?') },
      { who: 'B', ko: '네, 조금 할 수 있어요.', tr: l('Да, немного.', 'Yes, a little.') },
    ],
  },
  story: {
    title: l('Мои умения', 'What I can do'),
    sentences: [
      { ko: '저는 수영을 못 해요.', tr: l('Я не умею плавать.', "I can't swim."), parts: [{ ko: '저', gloss: l('я', 'I') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '수영', gloss: l('плавание', 'swimming') }, { ko: '을', gloss: l('частица объекта', 'object particle') }, { ko: '못', gloss: l('не могу', 'cannot') }, { ko: '해요', gloss: l('делаю', 'do') }] },
      { ko: '요리를 잘해요.', tr: l('Хорошо готовлю.', 'I cook well.'), parts: [{ ko: '요리', gloss: l('готовка', 'cooking') }, { ko: '를', gloss: l('частица объекта', 'object particle') }, { ko: '잘해요', gloss: l('хорошо умею', 'am good at') }] },
      { ko: '노래도 할 수 있어요.', tr: l('И петь тоже могу.', 'I can sing too.'), parts: [{ ko: '노래', gloss: l('пение', 'singing') }, { ko: '도', gloss: l('тоже', 'also') }, { ko: '할 수 있어요', gloss: l('могу (하 + ㄹ 수 있어요)', 'can (하 + ㄹ 수 있어요)') }] },
      { ko: '운전은 못 해요.', tr: l('А водить не умею.', "I can't drive."), parts: [{ ko: '운전', gloss: l('вождение', 'driving') }, { ko: '은', gloss: l('частица темы (после согласной)', 'topic particle (after consonant)') }, { ko: '못', gloss: l('не могу', 'cannot') }, { ko: '해요', gloss: l('делаю', 'do') }] },
    ],
  },
};
