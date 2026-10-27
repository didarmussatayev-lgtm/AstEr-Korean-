import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l13-adjectives',
  level: 1,
  emoji: '🎒',
  title: l('Описание: большой, красивый, вкусный', 'Describing things: big, pretty, tasty'),
  goal: l('Описать предмет и сказать, что он тебе нравится.', 'Describe a thing and say that you like it.'),
  theory: [
    {
      title: l('Прилагательные в корейском — это глаголы', 'Adjectives in Korean behave like verbs'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Слова вроде «большой», «вкусный» **спрягаются** как глаголы и сами заканчивают предложение. **Связка 이에요 не нужна**: 사과가 커요 — «яблоко большое» (а не «яблоко есть большое»).',
            'Words like "big" or "tasty" **conjugate** like verbs and end the sentence themselves. **No 이에요 is needed**: 사과가 커요 "the apple is big".',
          ),
        },
        {
          type: 'table',
          head: [l('Словарная форма', 'Dictionary form'), l('Вежливая форма', 'Polite form'), l('Значение', 'Meaning')],
          rows: [
            ['좋다', '좋아요', l('хороший; нравится', 'good')],
            ['작다', '작아요', l('маленький', 'small')],
            ['싸다', '싸요', l('дешёвый', 'cheap')],
            ['비싸다', '비싸요', l('дорогой', 'expensive')],
            ['맛있다', '맛있어요', l('вкусный', 'tasty')],
            ['재미있다', '재미있어요', l('интересный, весёлый', 'fun, interesting')],
          ],
        },
        {
          type: 'p',
          text: l(
            'Основа на **ㅡ** теряет ㅡ: **크다 → 커요**, **예쁘다 → 예뻐요**, **바쁘다 → 바빠요**. Если перед ㅡ стоит ㅏ или ㅗ, добавляется 아요 (바빠요), иначе 어요 (예뻐요, 커요).',
            'A stem ending in **ㅡ** drops it: **크다 → 커요**, **예쁘다 → 예뻐요**, **바쁘다 → 바빠요**. After ㅏ/ㅗ add 아요 (바빠요), otherwise 어요 (예뻐요, 커요).',
          ),
        },
      ],
    },
    {
      title: l('Усилители: 아주, 너무, 정말, 조금', 'Intensifiers: 아주, 너무, 정말, 조금'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Слово ставится **перед** прилагательным: 아주 맛있어요 «очень вкусно». **너무** значит «очень» или «слишком» (по смыслу), **정말** — «действительно».',
            'Put it **before** the adjective: 아주 맛있어요 "very tasty". **너무** means "very" or "too", **정말** is "really".',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '이 가방은 아주 예뻐요.', tr: l('Эта сумка очень красивая.', 'This bag is very pretty.') },
            { ko: '너무 비싸요.', tr: l('Слишком дорого.', "It's too expensive.") },
          ],
        },
      ],
    },
    {
      title: l('Прилагательное перед существительным', 'Adjective before a noun'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Чтобы поставить прилагательное перед существительным, к основе добавь **-ㄴ** (после гласной) или **-은** (после согласной). Для **있다/없다** (맛있다, 재미있다) — **-는**.',
            'To put an adjective before a noun add **-ㄴ** (after a vowel) or **-은** (after a consonant) to the stem. For **있다/없다** words (맛있다, 재미있다) use **-는**.',
          ),
        },
        {
          type: 'table',
          head: [l('Основа', 'Stem'), l('Форма', 'Form'), l('Пример', 'Example')],
          rows: [
            ['크', '큰', l('큰 가방 — большая сумка', '큰 가방 — a big bag')],
            ['예쁘', '예쁜', l('예쁜 옷 — красивая одежда', '예쁜 옷 — pretty clothes')],
            ['작', '작은', l('작은 집 — маленький дом', '작은 집 — a small house')],
            ['좋', '좋은', l('좋은 책 — хорошая книга', '좋은 책 — a good book')],
            ['맛있', '맛있는', l('맛있는 음식 — вкусная еда', '맛있는 음식 — tasty food')],
          ],
        },
      ],
    },
  ],
  vocab: [
    { ko: '크다 · 커요', roman: 'keuda · keoyo', tr: l('большой', 'big') },
    { ko: '작다 · 작아요', roman: 'jakda · jagayo', tr: l('маленький', 'small') },
    { ko: '좋다 · 좋아요', roman: 'jota · johayo', tr: l('хороший', 'good') },
    { ko: '많다 · 많아요', roman: 'manta · manayo', tr: l('много', 'many, much') },
    { ko: '싸다 · 싸요', roman: 'ssada · ssayo', tr: l('дешёвый', 'cheap') },
    { ko: '비싸다 · 비싸요', roman: 'bissada · bissayo', tr: l('дорогой', 'expensive') },
    { ko: '맛있다 · 맛있어요', roman: 'masitda · masisseoyo', tr: l('вкусный', 'tasty') },
    { ko: '맛없다 · 맛없어요', roman: 'maseopda · maseopseoyo', tr: l('невкусный', 'not tasty') },
    { ko: '예쁘다 · 예뻐요', roman: 'yeppeuda · yeppeoyo', tr: l('красивый', 'pretty') },
    { ko: '바쁘다 · 바빠요', roman: 'bappeuda · bappayo', tr: l('занятой', 'busy') },
    { ko: '재미있다 · 재미있어요', roman: 'jaemiitda · jaemiisseoyo', tr: l('интересный', 'fun, interesting') },
    { ko: '아주', roman: 'aju', tr: l('очень', 'very') },
    { ko: '너무', roman: 'neomu', tr: l('очень; слишком', 'very; too') },
    { ko: '정말', roman: 'jeongmal', tr: l('действительно', 'really') },
    { ko: '옷', roman: 'ot', tr: l('одежда', 'clothes') },
    { ko: '음식', roman: 'eumsik', tr: l('еда, блюдо', 'food') },
  ],
  exercises: [
    { type: 'match', prompt: l('Соедини слово и перевод', 'Match the word and its meaning'), pairs: [{ ko: '커요', tr: l('большой', 'big') }, { ko: '작아요', tr: l('маленький', 'small') }, { ko: '싸요', tr: l('дешёвый', 'cheap') }, { ko: '비싸요', tr: l('дорогой', 'expensive') }] },
    { type: 'choice', prompt: l('예쁘다 в вежливой форме:', 'Polite form of 예쁘다:'), options: ['예쁘어요', '예뻐요', '예쁘아요'], answer: 1, why: l('ㅡ выпадает, перед ним не ㅏ/ㅗ → 어요.', 'ㅡ drops, and there is no ㅏ/ㅗ before it → 어요.') },
    { type: 'choice', prompt: l('크다 в вежливой форме:', 'Polite form of 크다:'), options: ['크어요', '커요', '크아요'], answer: 1 },
    { type: 'cloze', sentence: '이 가방이 ___.', tr: l('Эта сумка красивая.', 'This bag is pretty.'), options: ['예뻐요', '예쁘이에요', '예뻐이에요'], answer: 0, why: l('После прилагательного связка не нужна.', 'No copula after an adjective.') },
    { type: 'tf', statement: l('사과가 비싸요 значит «Яблоки дорогие».', '사과가 비싸요 means "Apples are expensive".'), answer: true },
    { type: 'choice', prompt: l('«Большая сумка»:', '"A big bag":'), options: ['큰 가방', '크은 가방', '크는 가방'], answer: 0 },
    { type: 'choice', prompt: l('«Вкусная еда»:', '"Tasty food":'), options: ['맛있은 음식', '맛있는 음식', '맛있ㄴ 음식'], answer: 1, why: l('Для 있다/없다 используем -는.', 'Words with 있다/없다 take -는.') },
    { type: 'build', prompt: l('Собери: «Я люблю большие сумки»', 'Build: "I like big bags"'), tokens: ['가방을', '큰', '좋아해요', '저는'], answer: ['저는', '큰', '가방을', '좋아해요'] },
    { type: 'write', prompt: l('Научись писать слово «очень»', 'Learn to write the word "very"'), word: '아주', tr: l('очень', 'very') },
    { type: 'listen', say: '비싸요', options: [l('дорогой', 'expensive'), l('дешёвый', 'cheap'), l('красивый', 'pretty')], answer: 0 },
  ],
  dialogue: {
    title: l('В магазине сумок', 'In a bag shop'),
    lines: [
      { who: 'A', ko: '이거 예뻐요?', tr: l('Эта красивая?', 'Is this one pretty?') },
      { who: 'B', ko: '네, 아주 예뻐요.', tr: l('Да, очень красивая.', 'Yes, very pretty.') },
      { who: 'A', ko: '비싸요?', tr: l('Дорого?', 'Is it expensive?') },
      { who: 'B', ko: '아니요, 싸요.', tr: l('Нет, дёшево.', "No, it's cheap.") },
    ],
  },
  story: {
    title: l('Моя сумка', 'My bag'),
    sentences: [
      { ko: '이 가방은 아주 예뻐요.', tr: l('Эта сумка очень красивая.', 'This bag is very pretty.'), parts: [{ ko: '이', gloss: l('этот', 'this') }, { ko: '가방', gloss: l('сумка', 'bag') }, { ko: '은', gloss: l('частица темы', 'topic particle') }, { ko: '아주', gloss: l('очень', 'very') }, { ko: '예뻐요', gloss: l('красивая (예쁘다)', 'pretty (예쁘다)') }] },
      { ko: '가방이 싸요.', tr: l('Сумка дешёвая.', 'The bag is cheap.'), parts: [{ ko: '가방', gloss: l('сумка', 'bag') }, { ko: '이', gloss: l('частица подлежащего', 'subject particle') }, { ko: '싸요', gloss: l('дешёвая', 'cheap') }] },
      { ko: '저는 작은 가방을 좋아해요.', tr: l('Я люблю маленькие сумки.', 'I like small bags.'), parts: [{ ko: '저', gloss: l('я', 'I') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '작은', gloss: l('маленький (작다 + 은)', 'small (작다 + 은)') }, { ko: '가방', gloss: l('сумка', 'bag') }, { ko: '을', gloss: l('частица объекта', 'object particle') }, { ko: '좋아해요', gloss: l('люблю', 'like') }] },
      { ko: '맛있는 음식도 좋아해요.', tr: l('И вкусную еду люблю.', 'I also like tasty food.'), parts: [{ ko: '맛있는', gloss: l('вкусный (맛있다 + 는)', 'tasty (맛있다 + 는)') }, { ko: '음식', gloss: l('еда', 'food') }, { ko: '도', gloss: l('тоже', 'also') }, { ko: '좋아해요', gloss: l('люблю', 'like') }] },
    ],
  },
};
