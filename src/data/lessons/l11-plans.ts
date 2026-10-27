import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l11-plans',
  level: 1,
  emoji: '✈️',
  title: l('Желания и планы: -고 싶어요, -ㄹ/을 거예요', 'Wishes and plans: -고 싶어요, -ㄹ/을 거예요'),
  goal: l('Сказать, что ты хочешь, и рассказать о планах на завтра.', 'Say what you want and tell your plans for tomorrow.'),
  theory: [
    {
      title: l('Хочу: -고 싶어요', 'Wanting: -고 싶어요'),
      blocks: [
        {
          type: 'p',
          text: l(
            'К основе глагола добавляем **-고 싶어요** — «хочу…». Здесь **нет разницы** между гласной и согласной на конце основы.',
            'Add **-고 싶어요** to the verb stem for "I want to…". **No difference** between vowel and consonant stems.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '먹고 싶어요.', tr: l('Хочу есть.', 'I want to eat.') },
            { ko: '한국에 가고 싶어요.', tr: l('Хочу поехать в Корею.', 'I want to go to Korea.') },
            { ko: '커피를 마시고 싶어요.', tr: l('Хочу выпить кофе.', 'I want to drink coffee.') },
          ],
        },
        { type: 'tip', text: l('Для «ты хочешь…?» используй ту же форму с вопросительной интонацией: 뭐 먹고 싶어요? — «Что хочешь поесть?»', 'The same form works for "do you want…?" with rising intonation: 뭐 먹고 싶어요? "What do you want to eat?"') },
      ],
    },
    {
      title: l('Будущее: -ㄹ/을 거예요', 'Future: -ㄹ/을 거예요'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Будущее время и намерение: основа + **-ㄹ 거예요** (если основа оканчивается на гласную) или **-을 거예요** (если на согласную). Буква ㄹ присоединяется к последнему слогу.',
            'Future and intention: stem + **-ㄹ 거예요** (vowel stem) or **-을 거예요** (consonant stem). The ㄹ attaches to the last syllable.',
          ),
        },
        {
          type: 'table',
          head: [l('Основа', 'Stem'), l('Будущее', 'Future'), l('Значение', 'Meaning')],
          rows: [
            ['가', '갈 거예요', l('пойду', 'will go')],
            ['마시', '마실 거예요', l('выпью', 'will drink')],
            ['공부하', '공부할 거예요', l('буду учиться', 'will study')],
            ['먹', '먹을 거예요', l('съем', 'will eat')],
            ['읽', '읽을 거예요', l('прочитаю', 'will read')],
          ],
        },
        {
          type: 'examples',
          items: [
            { ko: '내일 학교에 갈 거예요.', tr: l('Завтра пойду в школу.', "I'll go to school tomorrow.") },
            { ko: '주말에 친구를 만날 거예요.', tr: l('На выходных встречусь с другом.', "I'll meet a friend at the weekend.") },
          ],
        },
      ],
    },
  ],
  vocab: [
    { ko: '먹고 싶어요', roman: 'meokgo sipeoyo', tr: l('хочу есть', 'I want to eat') },
    { ko: '가고 싶어요', roman: 'gago sipeoyo', tr: l('хочу пойти', 'I want to go') },
    { ko: '마시고 싶어요', roman: 'masigo sipeoyo', tr: l('хочу пить', 'I want to drink') },
    { ko: '갈 거예요', roman: 'gal geoyeyo', tr: l('пойду', 'will go') },
    { ko: '먹을 거예요', roman: 'meogeul geoyeyo', tr: l('съем', 'will eat') },
    { ko: '공부할 거예요', roman: 'gongbuhal geoyeyo', tr: l('буду учиться', 'will study') },
    { ko: '만날 거예요', roman: 'mannal geoyeyo', tr: l('встречусь', 'will meet') },
    { ko: '지금', roman: 'jigeum', tr: l('сейчас', 'now') },
  ],
  exercises: [
    { type: 'cloze', sentence: '한국에 가___ 싶어요.', tr: l('Хочу поехать в Корею.', 'I want to go to Korea.'), options: ['고', '을', '서'], answer: 0 },
    { type: 'choice', prompt: l('«Завтра пойду в школу»:', '"Tomorrow I will go to school":'), options: ['내일 학교에 갈 거예요', '내일 학교에 갔어요', '내일 학교에 가을 거예요'], answer: 0 },
    { type: 'choice', prompt: l('먹다 в будущем:', 'Future of 먹다:'), options: ['먹ㄹ 거예요', '먹을 거예요', '먹는 거예요'], answer: 1, why: l('Основа 먹 оканчивается на согласную → 을 거예요.', 'The stem 먹 ends in a consonant → 을 거예요.') },
    { type: 'choice', prompt: l('마시다 в будущем:', 'Future of 마시다:'), options: ['마실 거예요', '마시을 거예요', '마셨을 거예요'], answer: 0 },
    { type: 'tf', statement: l('먹고 싶어요 значит «Хочу есть».', '먹고 싶어요 means "I want to eat".'), answer: true },
    { type: 'build', prompt: l('Собери: «Завтра я буду учиться»', 'Build: "I will study tomorrow"'), tokens: ['공부할', '저는', '거예요', '내일'], answer: ['저는', '내일', '공부할', '거예요'] },
    { type: 'write', prompt: l('Научись писать слово «сейчас»', 'Learn to write the word "now"'), word: '지금', tr: l('сейчас', 'now') },
    { type: 'write', prompt: l('Научись писать слово «завтра»', 'Learn to write the word "tomorrow"'), word: '내일', tr: l('завтра', 'tomorrow') },
  ],
  dialogue: {
    title: l('Планы', 'Plans'),
    lines: [
      { who: 'A', ko: '내일 뭐 할 거예요?', tr: l('Что будешь делать завтра?', 'What will you do tomorrow?') },
      { who: 'B', ko: '학교에 갈 거예요.', tr: l('Пойду в школу.', "I'll go to school.") },
      { who: 'A', ko: '주말에 뭐 하고 싶어요?', tr: l('А на выходных что хочешь?', 'What do you want to do at the weekend?') },
      { who: 'B', ko: '영화를 보고 싶어요.', tr: l('Хочу посмотреть фильм.', 'I want to watch a movie.') },
    ],
  },
  story: {
    title: l('Мои планы', 'My plans'),
    sentences: [
      { ko: '내일 저는 학교에 갈 거예요.', tr: l('Завтра я пойду в школу.', "Tomorrow I'll go to school."), parts: [{ ko: '내일', gloss: l('завтра', 'tomorrow') }, { ko: '저', gloss: l('я', 'I') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '학교', gloss: l('школа', 'school') }, { ko: '에', gloss: l('частица направления', 'destination particle') }, { ko: '갈 거예요', gloss: l('пойду (가 + ㄹ 거예요)', 'will go (가 + ㄹ 거예요)') }] },
      { ko: '학교에서 한국어를 공부할 거예요.', tr: l('В школе буду учить корейский.', "I'll study Korean at school."), parts: [{ ko: '학교', gloss: l('школа', 'school') }, { ko: '에서', gloss: l('частица места действия', 'place-of-action particle') }, { ko: '한국어', gloss: l('корейский', 'Korean') }, { ko: '를', gloss: l('частица объекта', 'object particle') }, { ko: '공부할 거예요', gloss: l('буду учиться', 'will study') }] },
      { ko: '주말에 친구를 만날 거예요.', tr: l('На выходных встречусь с другом.', "I'll meet a friend at the weekend."), parts: [{ ko: '주말', gloss: l('выходные', 'weekend') }, { ko: '에', gloss: l('частица времени', 'time particle') }, { ko: '친구', gloss: l('друг', 'friend') }, { ko: '를', gloss: l('частица объекта', 'object particle') }, { ko: '만날 거예요', gloss: l('встречусь', 'will meet') }] },
      { ko: '한국에 가고 싶어요.', tr: l('Хочу поехать в Корею.', 'I want to go to Korea.'), parts: [{ ko: '한국', gloss: l('Корея', 'Korea') }, { ko: '에', gloss: l('частица направления', 'destination particle') }, { ko: '가고 싶어요', gloss: l('хочу пойти', 'want to go') }] },
    ],
  },
};
