import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l7-places',
  level: 1,
  emoji: '🏫',
  title: l('Места: 에, 에서, 있어요/없어요', 'Places: 에, 에서, 있어요/없어요'),
  goal: l('Сказать, где ты находишься, куда идёшь и где что-то делаешь.', 'Say where you are, where you go, and where you do things.'),
  theory: [
    {
      title: l('있어요 и 없어요: «есть» и «нет»', '있어요 and 없어요: "there is" and "there is not"'),
      blocks: [
        {
          type: 'p',
          text: l(
            '**있어요** — «есть, находится, имеется», **없어요** — «нет». С людьми и предметами одинаково. Подлежащее помечается **이/가**.',
            '**있어요** means "there is, is located, have"; **없어요** means "there is not". Used for people and things alike. The subject takes **이/가**.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '친구가 있어요.', tr: l('У меня есть друг.', 'I have a friend.') },
            { ko: '책이 없어요.', tr: l('Книги нет.', 'There is no book.') },
          ],
        },
      ],
    },
    {
      title: l('에 — «в/на/куда», 에서 — «где делают»', '에 means "to/at", 에서 means "where an action happens"'),
      blocks: [
        {
          type: 'table',
          head: [l('Частица', 'Particle'), l('Когда', 'When'), l('Пример', 'Example')],
          rows: [
            ['에', l('куда идёшь (가요, 와요) и где что-то находится (있어요/없어요)', 'destination (가요, 와요) and location of existence (있어요/없어요)'), '학교에 가요. 집에 있어요.'],
            ['에서', l('где происходит действие (учу, ем, пью)', 'where an action takes place (study, eat, drink)'), '도서관에서 공부해요.'],
          ],
        },
        {
          type: 'tip',
          text: l(
            'Простое правило: если дальше **가요/있어요** — ставь **에**. Если дальше любое другое действие — **에서**.',
            'Simple rule: followed by **가요/있어요** → **에**. Followed by any other action → **에서**.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '저는 학교에 가요.', tr: l('Я иду в школу.', "I'm going to school.") },
            { ko: '카페에서 커피를 마셔요.', tr: l('Я пью кофе в кафе.', 'I drink coffee in the café.') },
            { ko: '어디에 있어요?', tr: l('Где ты?', 'Where are you?') },
          ],
        },
      ],
    },
  ],
  vocab: [
    { ko: '집', roman: 'jip', tr: l('дом', 'home') },
    { ko: '학교', roman: 'hakgyo', tr: l('школа', 'school') },
    { ko: '도서관', roman: 'doseogwan', tr: l('библиотека', 'library') },
    { ko: '카페', roman: 'kape', tr: l('кафе', 'café') },
    { ko: '시장', roman: 'sijang', tr: l('рынок', 'market') },
    { ko: '친구', roman: 'chingu', tr: l('друг', 'friend') },
    { ko: '어디', roman: 'eodi', tr: l('где; куда', 'where') },
    { ko: '여기', roman: 'yeogi', tr: l('здесь', 'here') },
    { ko: '있어요', roman: 'isseoyo', tr: l('есть; находится', 'there is; to be located') },
    { ko: '없어요', roman: 'eopseoyo', tr: l('нет; не находится', 'there is not') },
  ],
  exercises: [
    { type: 'choice', prompt: l('Выбери: 학교___ 가요.', 'Pick: 학교___ 가요.'), options: ['에', '에서'], answer: 0, why: l('가요 — движение «куда», значит 에.', '가요 expresses movement to a place, so 에.') },
    { type: 'choice', prompt: l('Выбери: 도서관___ 공부해요.', 'Pick: 도서관___ 공부해요.'), options: ['에', '에서'], answer: 1, why: l('공부해요 — действие в месте → 에서.', '공부해요 is an action performed in a place → 에서.') },
    { type: 'choice', prompt: l('Выбери: 집___ 있어요.', 'Pick: 집___ 있어요.'), options: ['에', '에서'], answer: 0 },
    { type: 'choice', prompt: l('Выбери: 카페___ 커피를 마셔요.', 'Pick: 카페___ 커피를 마셔요.'), options: ['에', '에서'], answer: 1 },
    { type: 'choice', prompt: l('Противоположное к 있어요:', 'The opposite of 있어요:'), options: ['아니에요', '없어요', '가요'], answer: 1 },
    { type: 'listen', say: '어디', options: [l('где', 'where'), l('что', 'what'), l('кто', 'who')], answer: 0 },
    { type: 'build', prompt: l('Собери: «Я иду в школу»', 'Build: "I go to school"'), tokens: ['가요', '학교에', '저는'], answer: ['저는', '학교에', '가요'] },
    { type: 'write', prompt: l('Научись писать слово «библиотека»', 'Learn to write the word "library"'), word: '도서관', tr: l('библиотека', 'library') },
    { type: 'write', prompt: l('Научись писать слово «друг»', 'Learn to write the word "friend"'), word: '친구', tr: l('друг', 'friend') },
  ],
  dialogue: {
    title: l('Куда идёшь?', 'Where are you going?'),
    lines: [
      { who: 'A', ko: '어디에 가요?', tr: l('Куда идёшь?', 'Where are you going?') },
      { who: 'B', ko: '학교에 가요.', tr: l('В школу.', "To school.") },
      { who: 'A', ko: '학교에서 뭐 해요?', tr: l('Что делаешь в школе?', 'What do you do at school?') },
      { who: 'B', ko: '도서관에서 공부해요.', tr: l('Занимаюсь в библиотеке.', 'I study in the library.') },
      { who: 'A', ko: '친구가 있어요?', tr: l('Там есть друзья?', 'Do you have friends there?') },
      { who: 'B', ko: '네, 친구가 있어요.', tr: l('Да, есть.', 'Yes, I do.') },
    ],
  },
  story: {
    title: l('Мой маршрут', 'My route'),
    sentences: [
      { ko: '저는 학교에 가요.', tr: l('Я иду в школу.', "I'm going to school."), parts: [{ ko: '저', gloss: l('я', 'I') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '학교', gloss: l('школа', 'school') }, { ko: '에', gloss: l('частица направления', 'destination particle') }, { ko: '가요', gloss: l('иду (가다)', 'go (가다)') }] },
      { ko: '도서관에서 한국어를 공부해요.', tr: l('В библиотеке я учу корейский.', 'I study Korean in the library.'), parts: [{ ko: '도서관', gloss: l('библиотека', 'library') }, { ko: '에서', gloss: l('частица места действия', 'place-of-action particle') }, { ko: '한국어', gloss: l('корейский', 'Korean') }, { ko: '를', gloss: l('частица объекта', 'object particle') }, { ko: '공부해요', gloss: l('учу', 'study') }] },
      { ko: '카페에서 커피를 마셔요.', tr: l('В кафе я пью кофе.', 'I drink coffee in the café.'), parts: [{ ko: '카페', gloss: l('кафе', 'café') }, { ko: '에서', gloss: l('частица места действия', 'place-of-action particle') }, { ko: '커피', gloss: l('кофе', 'coffee') }, { ko: '를', gloss: l('частица объекта', 'object particle') }, { ko: '마셔요', gloss: l('пью', 'drink') }] },
      { ko: '집에 있어요.', tr: l('Я дома.', "I'm at home."), parts: [{ ko: '집', gloss: l('дом', 'home') }, { ko: '에', gloss: l('частица места нахождения', 'location particle') }, { ko: '있어요', gloss: l('нахожусь', 'to be located') }] },
    ],
  },
};
