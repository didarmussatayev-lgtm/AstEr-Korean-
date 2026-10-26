import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l10-past',
  level: 1,
  emoji: '🎬',
  title: l('Прошедшее время: -았/었어요', 'Past tense: -았/었어요'),
  goal: l('Рассказать, что ты делал вчера или на выходных.', 'Tell what you did yesterday or at the weekend.'),
  theory: [
    {
      title: l('Как образуется прошедшее время', 'How the past tense is formed'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Прошедшее время строится так же, как вежливая форма, но вместо **-아요/어요** ставится **-았어요/었어요**. Правило выбора то же: после ㅏ/ㅗ — **았어요**, иначе — **었어요**, а 하다 даёт **했어요**.',
            'The past tense is built like the polite present, but **-았어요/었어요** replaces **-아요/어요**. Same choice rule: after ㅏ/ㅗ use **았어요**, otherwise **었어요**, and 하다 gives **했어요**.',
          ),
        },
        {
          type: 'table',
          head: [l('Сейчас', 'Present'), l('Прошедшее', 'Past'), l('Значение', 'Meaning')],
          rows: [
            ['먹어요', '먹었어요', l('ел', 'ate')],
            ['가요', '갔어요', l('ходил', 'went')],
            ['봐요', '봤어요', l('смотрел', 'watched')],
            ['마셔요', '마셨어요', l('пил', 'drank')],
            ['해요', '했어요', l('делал', 'did')],
            ['만나요', '만났어요', l('встретил', 'met')],
          ],
        },
        { type: 'tip', text: l('Если основа оканчивается на гласную, сливается с ㅆ: 가 + 았어요 → 갔어요, 마시 + 었어요 → 마셨어요.', 'If the stem ends in a vowel it merges with ㅆ: 가 + 았어요 → 갔어요, 마시 + 었어요 → 마셨어요.') },
      ],
    },
    {
      title: l('Слова времени', 'Time words'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Слова **어제, 오늘, 내일** употребляются без частицы. Другие слова времени (주말 — выходные, 월요일) берут **에**: 주말에, 월요일에.',
            'The words **어제, 오늘, 내일** are used without a particle. Other time words (주말 "weekend", 월요일) take **에**: 주말에, 월요일에.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '어제 영화를 봤어요.', tr: l('Вчера я смотрел фильм.', 'I watched a movie yesterday.') },
            { ko: '주말에 친구를 만났어요.', tr: l('На выходных я встретился с другом.', 'I met a friend at the weekend.') },
          ],
        },
      ],
    },
  ],
  vocab: [
    { ko: '갔어요', roman: 'gasseoyo', tr: l('ходил(а), ездил(а)', 'went') },
    { ko: '먹었어요', roman: 'meogeosseoyo', tr: l('ел(а)', 'ate') },
    { ko: '봤어요', roman: 'bwasseoyo', tr: l('смотрел(а)', 'watched, saw') },
    { ko: '마셨어요', roman: 'masyeosseoyo', tr: l('пил(а)', 'drank') },
    { ko: '했어요', roman: 'haesseoyo', tr: l('делал(а)', 'did') },
    { ko: '만났어요', roman: 'mannasseoyo', tr: l('встретил(а)', 'met') },
    { ko: '공부했어요', roman: 'gongbuhaesseoyo', tr: l('учился, занимался', 'studied') },
    { ko: '영화', roman: 'yeonghwa', tr: l('фильм', 'movie') },
    { ko: '주말', roman: 'jumal', tr: l('выходные', 'weekend') },
  ],
  exercises: [
    { type: 'match', prompt: l('Соедини настоящее и прошедшее', 'Match present and past'), pairs: [{ ko: '먹어요', tr: '먹었어요' }, { ko: '가요', tr: '갔어요' }, { ko: '봐요', tr: '봤어요' }, { ko: '마셔요', tr: '마셨어요' }] },
    { type: 'choice', prompt: l('먹다 в прошедшем времени:', 'Past of 먹다:'), options: ['먹았어요', '먹었어요', '먹했어요'], answer: 1 },
    { type: 'choice', prompt: l('하다 в прошедшем времени:', 'Past of 하다:'), options: ['하었어요', '했어요', '하았어요'], answer: 1 },
    { type: 'cloze', sentence: '어제 영화를 ___.', tr: l('Вчера я смотрел фильм.', 'I watched a movie yesterday.'), options: ['봐요', '봤어요', '볼 거예요'], answer: 1 },
    { type: 'tf', statement: '어제에 갔어요.', answer: false, why: l('Слово 어제 употребляется без 에.', 'No 에 after 어제.') },
    { type: 'listen', say: '갔어요', options: [l('ходил', 'went'), l('ел', 'ate'), l('пил', 'drank')], answer: 0 },
    { type: 'build', prompt: l('Собери: «Вчера я встретил друга»', 'Build: "I met a friend yesterday"'), tokens: ['만났어요', '어제', '친구를'], answer: ['어제', '친구를', '만났어요'] },
    { type: 'type', prompt: l('Напиши: «Вчера я учил корейский»', 'Write: "I studied Korean yesterday"'), answers: ['어제 한국어를 공부했어요', '저는 어제 한국어를 공부했어요'] },
    { type: 'dictation', say: '마셨어요', answers: ['마셨어요'] },
  ],
  dialogue: {
    title: l('Что ты делал вчера?', 'What did you do yesterday?'),
    lines: [
      { who: 'A', ko: '어제 뭐 했어요?', tr: l('Что ты вчера делал?', 'What did you do yesterday?') },
      { who: 'B', ko: '영화를 봤어요.', tr: l('Смотрел фильм.', 'I watched a movie.') },
      { who: 'A', ko: '친구하고 봤어요?', tr: l('С другом?', 'With a friend?') },
      { who: 'B', ko: '네, 친구하고 봤어요.', tr: l('Да, с другом.', 'Yes, with a friend.') },
    ],
  },
  story: {
    title: l('Вчера', 'Yesterday'),
    sentences: [
      { ko: '어제 저는 학교에 갔어요.', tr: l('Вчера я ходил в школу.', 'I went to school yesterday.'), parts: [{ ko: '어제', gloss: l('вчера', 'yesterday') }, { ko: '저', gloss: l('я', 'I') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '학교', gloss: l('школа', 'school') }, { ko: '에', gloss: l('частица направления', 'destination particle') }, { ko: '갔어요', gloss: l('ходил (가다)', 'went (가다)') }] },
      { ko: '도서관에서 한국어를 공부했어요.', tr: l('В библиотеке учил корейский.', 'I studied Korean in the library.'), parts: [{ ko: '도서관', gloss: l('библиотека', 'library') }, { ko: '에서', gloss: l('частица места действия', 'place-of-action particle') }, { ko: '한국어', gloss: l('корейский', 'Korean') }, { ko: '를', gloss: l('частица объекта', 'object particle') }, { ko: '공부했어요', gloss: l('учился', 'studied') }] },
      { ko: '카페에서 커피를 마셨어요.', tr: l('В кафе пил кофе.', 'I drank coffee at the café.'), parts: [{ ko: '카페', gloss: l('кафе', 'café') }, { ko: '에서', gloss: l('частица места действия', 'place-of-action particle') }, { ko: '커피', gloss: l('кофе', 'coffee') }, { ko: '를', gloss: l('частица объекта', 'object particle') }, { ko: '마셨어요', gloss: l('пил', 'drank') }] },
      { ko: '친구를 만났어요.', tr: l('Встретил друга.', 'I met a friend.'), parts: [{ ko: '친구', gloss: l('друг', 'friend') }, { ko: '를', gloss: l('частица объекта', 'object particle') }, { ko: '만났어요', gloss: l('встретил', 'met') }] },
    ],
  },
};
