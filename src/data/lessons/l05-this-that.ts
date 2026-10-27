import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l5-this-that',
  level: 1,
  emoji: '📚',
  title: l('Это, то, вон то: 이거/그거/저거 и 이/가 아니에요', 'This, that, over there: 이거/그거/저거 and 이/가 아니에요'),
  goal: l('Показывать на предметы, спрашивать «что это?» и отвечать «это не…».', 'Point at things, ask "what is this?" and say "it is not…".'),
  theory: [
    {
      title: l('Три «это»', 'Three kinds of "this"'),
      blocks: [
        {
          type: 'p',
          text: l(
            'В корейском указательных слов **три** — по расстоянию до говорящего и слушающего.',
            'Korean has **three** demonstratives, based on distance from the speaker and the listener.',
          ),
        },
        {
          type: 'table',
          head: [l('Слово', 'Word'), l('Значение', 'Meaning'), l('Перед существительным', 'Before a noun')],
          rows: [
            ['이거', l('это (рядом со мной)', 'this (near me)'), '이 책'],
            ['그거', l('то (рядом с тобой)', 'that (near you)'), '그 책'],
            ['저거', l('вон то (далеко от обоих)', 'that over there (far from both)'), '저 책'],
          ],
        },
        {
          type: 'tip',
          text: l(
            'Когда ты спрашиваешь «이거 뭐예요?», собеседник отвечает «그거는…» — для него предмет «у тебя».',
            'If you ask "이거 뭐예요?", the answer starts with "그거는…": for the other person the thing is "near you".',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '이거 뭐예요?', tr: l('Что это?', 'What is this?') },
            { ko: '그거는 책이에요.', tr: l('Это книга.', "That's a book.") },
            { ko: '저거는 가방이에요.', tr: l('Вон то — сумка.', "That one over there is a bag.") },
          ],
        },
      ],
    },
    {
      title: l('Отрицание: 이/가 아니에요', 'Negation: 이/가 아니에요'),
      blocks: [
        {
          type: 'p',
          text: l(
            '«Не является…» — это **существительное + 이/가 아니에요**. Частица **가** после гласной, **이** после согласной.',
            '"Is not…" is **noun + 이/가 아니에요**. **가** after a vowel, **이** after a consonant.',
          ),
        },
        {
          type: 'table',
          head: [l('Слово оканчивается на', 'Word ends in'), l('Частица', 'Particle'), l('Пример', 'Example')],
          rows: [
            [l('гласную', 'a vowel'), '가', '커피가 아니에요'],
            [l('согласную', 'a consonant'), '이', '책이 아니에요'],
          ],
        },
        {
          type: 'examples',
          items: [
            { ko: '이거는 물이 아니에요.', tr: l('Это не вода.', "This isn't water.") },
            { ko: '저는 선생님이 아니에요.', tr: l('Я не учитель.', "I'm not a teacher.") },
          ],
        },
        {
          type: 'tip',
          text: l(
            'Не путай: «быть» — 이에요/예요, «не быть» — 이/가 아니에요. Частицы 이/가 здесь ставятся именно перед 아니에요.',
            'Do not mix them up: "to be" is 이에요/예요, "not to be" is 이/가 아니에요. The particle 이/가 stands right before 아니에요.',
          ),
        },
      ],
    },
  ],
  vocab: [
    { ko: '이거', roman: 'igeo', tr: l('это (рядом со мной)', 'this') },
    { ko: '그거', roman: 'geugeo', tr: l('то (рядом с тобой)', 'that (near you)') },
    { ko: '저거', roman: 'jeogeo', tr: l('вон то', 'that over there') },
    { ko: '뭐', roman: 'mwo', tr: l('что', 'what') },
    { ko: '책', roman: 'chaek', tr: l('книга', 'book') },
    { ko: '가방', roman: 'gabang', tr: l('сумка', 'bag') },
    { ko: '물', roman: 'mul', tr: l('вода', 'water') },
    { ko: '커피', roman: 'keopi', tr: l('кофе', 'coffee') },
    { ko: '아니에요', roman: 'anieyo', tr: l('не является (…이/가 아니에요)', 'is not (…이/가 아니에요)') },
  ],
  exercises: [
    { type: 'choice', prompt: l('Как сказать «это» про предмет рядом с тобой?', 'How do you say "this" about something near you?'), options: ['이거', '그거', '저거'], answer: 0 },
    { type: 'choice', prompt: l('Выбери частицу: 커피___ 아니에요.', 'Pick the particle: 커피___ 아니에요.'), options: ['이', '가'], answer: 1, why: l('커피 заканчивается на гласную → 가.', '커피 ends in a vowel → 가.') },
    { type: 'choice', prompt: l('Выбери частицу: 책___ 아니에요.', 'Pick the particle: 책___ 아니에요.'), options: ['이', '가'], answer: 0, why: l('책 заканчивается на согласную ㄱ → 이.', '책 ends in the consonant ㄱ → 이.') },
    { type: 'choice', prompt: l('Выбери частицу: 가방___ 아니에요.', 'Pick the particle: 가방___ 아니에요.'), options: ['이', '가'], answer: 0, why: l('가방 заканчивается на ㅇ → 이.', '가방 ends in ㅇ → 이.') },
    { type: 'listen', say: '물', options: [l('вода', 'water'), l('книга', 'book'), l('кофе', 'coffee')], answer: 0 },
    { type: 'build', prompt: l('Собери: «Вон то — сумка»', 'Build: "That over there is a bag"'), tokens: ['가방이에요', '저거는'], answer: ['저거는', '가방이에요'] },
    { type: 'build', prompt: l('Собери: «Это не книга»', 'Build: "This is not a book"'), tokens: ['아니에요', '이거는', '책이'], answer: ['이거는', '책이', '아니에요'] },
    { type: 'write', prompt: l('Научись писать слово «книга»', 'Learn to write the word "book"'), word: '책', tr: l('книга', 'book') },
  ],
  dialogue: {
    title: l('Что это?', 'What is this?'),
    lines: [
      { who: 'A', ko: '이거 뭐예요?', tr: l('Что это?', 'What is this?') },
      { who: 'B', ko: '그거는 책이에요.', tr: l('Это книга.', "That's a book.") },
      { who: 'A', ko: '저거는 커피예요?', tr: l('А вон то — кофе?', 'Is that one over there coffee?') },
      { who: 'B', ko: '아니요, 커피가 아니에요. 물이에요.', tr: l('Нет, не кофе. Это вода.', "No, it isn't coffee. It's water.") },
    ],
  },
  story: {
    title: l('Мой стол', 'My desk'),
    sentences: [
      { ko: '이거는 책이에요.', tr: l('Это книга.', 'This is a book.'), parts: [{ ko: '이거', gloss: l('это', 'this') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '책', gloss: l('книга', 'book') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
      { ko: '저거는 가방이에요.', tr: l('Вон то — сумка.', 'That over there is a bag.'), parts: [{ ko: '저거', gloss: l('вон то', 'that over there') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '가방', gloss: l('сумка', 'bag') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
      { ko: '이거는 커피가 아니에요.', tr: l('Это не кофе.', "This isn't coffee."), parts: [{ ko: '이거', gloss: l('это', 'this') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '커피', gloss: l('кофе', 'coffee') }, { ko: '가', gloss: l('частица перед 아니에요', 'particle before 아니에요') }, { ko: '아니에요', gloss: l('не является', 'is not') }] },
      { ko: '물이에요.', tr: l('Это вода.', "It's water."), parts: [{ ko: '물', gloss: l('вода', 'water') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
    ],
  },
};
