import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l16-daily',
  level: 1,
  emoji: '⏰',
  title: l('Распорядок дня: время, 에, 부터/까지', 'Daily routine: time, 에, 부터/까지'),
  goal: l('Назвать время суток, часы и рассказать, как проходит день.', 'Name times of day and clock times and describe your day.'),
  theory: [
    {
      title: l('Время суток и часы', 'Parts of the day and the clock'),
      blocks: [
        {
          type: 'table',
          head: [l('Слово', 'Word'), l('Значение', 'Meaning')],
          rows: [
            ['아침', l('утро; завтрак', 'morning; breakfast')],
            ['점심', l('полдень; обед', 'noon; lunch')],
            ['저녁', l('вечер; ужин', 'evening; dinner')],
            ['밤', l('ночь', 'night')],
            ['오전 / 오후', l('до полудня (AM) / после полудня (PM)', 'AM / PM')],
          ],
        },
        {
          type: 'examples',
          items: [
            { ko: '지금 몇 시예요?', tr: l('Который сейчас час?', 'What time is it now?') },
            { ko: '지금 오후 세 시 십 분이에요.', tr: l('Сейчас 3:10 дня.', "It's 3:10 PM.") },
          ],
        },
        { type: 'tip', text: l('Напоминание: часы — чистокорейские числа (세 시), минуты — китайско-корейские (십 분). 열한 시 — 11 часов.', 'Reminder: hours use native numbers (세 시), minutes use Sino-Korean (십 분). 열한 시 is 11 o’clock.') },
      ],
    },
    {
      title: l('Когда? — время + 에', 'When? — time + 에'),
      blocks: [
        {
          type: 'p',
          text: l(
            'После конкретного времени и частей суток ставится **에**: 일곱 시에 «в семь часов», 저녁에 «вечером». А вот 오늘, 내일, 어제, 지금 — **без 에**.',
            'Use **에** after specific times and parts of the day: 일곱 시에 "at seven", 저녁에 "in the evening". But 오늘, 내일, 어제, 지금 take **no 에**.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '일곱 시에 일어나요.', tr: l('Встаю в семь часов.', 'I get up at seven.') },
            { ko: '저녁에 집에 와요.', tr: l('Вечером прихожу домой.', 'I come home in the evening.') },
            { ko: '밤 열한 시에 자요.', tr: l('Ложусь в одиннадцать вечера.', 'I go to bed at eleven at night.') },
          ],
        },
      ],
    },
    {
      title: l('С … до …: 부터 / 까지', 'From … to …: 부터 / 까지'),
      blocks: [
        {
          type: 'p',
          text: l(
            '**부터** — «начиная с», **까지** — «до». Ставятся сразу после времени. Вместе: **아홉 시부터 세 시까지**.',
            '**부터** means "from", **까지** means "until". They attach directly to the time: **아홉 시부터 세 시까지**.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '아홉 시부터 세 시까지 수업이 있어요.', tr: l('С девяти до трёх у меня занятия.', 'I have classes from nine to three.') },
            { ko: '학교는 몇 시부터예요?', tr: l('С которого часа школа?', 'From what time is school?') },
          ],
        },
      ],
    },
  ],
  vocab: [
    { ko: '아침', roman: 'achim', tr: l('утро; завтрак', 'morning; breakfast') },
    { ko: '점심', roman: 'jeomsim', tr: l('полдень; обед', 'noon; lunch') },
    { ko: '저녁', roman: 'jeonyeok', tr: l('вечер; ужин', 'evening; dinner') },
    { ko: '밤', roman: 'bam', tr: l('ночь', 'night') },
    { ko: '오전', roman: 'ojeon', tr: l('до полудня (AM)', 'AM') },
    { ko: '오후', roman: 'ohu', tr: l('после полудня (PM)', 'PM') },
    { ko: '몇 시', roman: 'myeot si', tr: l('который час', 'what time') },
    { ko: '시간', roman: 'sigan', tr: l('время; час', 'time; hour') },
    { ko: '일어나요', roman: 'ireonayo', tr: l('встаю (일어나다)', 'get up (일어나다)') },
    { ko: '와요', roman: 'wayo', tr: l('приходит, приезжает (오다)', 'come (오다)') },
    { ko: '부터', roman: 'buteo', tr: l('начиная с', 'from') },
    { ko: '까지', roman: 'kkaji', tr: l('до', 'until, to') },
    { ko: '수업', roman: 'sueop', tr: l('занятие, урок', 'class, lesson') },
    { ko: '일찍', roman: 'iljjik', tr: l('рано', 'early') },
    { ko: '늦게', roman: 'neutge', tr: l('поздно', 'late') },
  ],
  exercises: [
    { type: 'match', prompt: l('Соедини время суток', 'Match the parts of the day'), pairs: [{ ko: '아침', tr: l('утро', 'morning') }, { ko: '점심', tr: l('полдень', 'noon') }, { ko: '저녁', tr: l('вечер', 'evening') }, { ko: '밤', tr: l('ночь', 'night') }] },
    { type: 'cloze', sentence: '일곱 시___ 일어나요.', tr: l('Встаю в семь часов.', 'I get up at seven.'), options: ['에', '에서', '을'], answer: 0 },
    { type: 'choice', prompt: l('Как сказать 10:30?', 'How do you say 10:30?'), options: ['십 시 삼십 분', '열 시 삼십 분', '열 시 서른 분'], answer: 1, why: l('Часы — чистокорейские (열), минуты — китайско-корейские (삼십).', 'Hours are native (열), minutes are Sino-Korean (삼십).') },
    { type: 'tf', statement: l('오늘에 학교에 가요 — правильно.', '오늘에 학교에 가요 is correct.'), answer: false, why: l('С 오늘 частица 에 не нужна.', '오늘 takes no 에.') },
    { type: 'choice', prompt: l('오후 значит…', '오후 means…'), options: [l('до полудня', 'AM'), l('после полудня', 'PM'), l('ночью', 'at night')], answer: 1 },
    { type: 'build', prompt: l('Собери: «С девяти до трёх у меня занятия»', 'Build: "I have classes from nine to three"'), tokens: ['수업이', '세', '시까지', '아홉', '시부터', '있어요'], answer: ['아홉', '시부터', '세', '시까지', '수업이', '있어요'] },
    { type: 'type', prompt: l('Напиши: «Я встаю в 7 часов»', 'Write: "I get up at seven"'), answers: ['일곱 시에 일어나요', '저는 일곱 시에 일어나요'] },
    { type: 'listen', say: '저녁', options: [l('вечер', 'evening'), l('утро', 'morning'), l('ночь', 'night')], answer: 0 },
    { type: 'dictation', say: '일어나요', answers: ['일어나요'] },
  ],
  dialogue: {
    title: l('Твой день', 'Your day'),
    lines: [
      { who: 'A', ko: '몇 시에 일어나요?', tr: l('Во сколько встаёшь?', 'What time do you get up?') },
      { who: 'B', ko: '일곱 시에 일어나요.', tr: l('В семь.', 'At seven.') },
      { who: 'A', ko: '학교는 몇 시부터예요?', tr: l('С которого часа школа?', 'From what time is school?') },
      { who: 'B', ko: '아홉 시부터예요.', tr: l('С девяти.', 'From nine.') },
    ],
  },
  story: {
    title: l('Мой день', 'My day'),
    sentences: [
      { ko: '저는 아침 일곱 시에 일어나요.', tr: l('Я встаю в семь утра.', 'I get up at seven in the morning.'), parts: [{ ko: '저', gloss: l('я', 'I') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '아침', gloss: l('утро', 'morning') }, { ko: '일곱', gloss: l('7', '7') }, { ko: '시', gloss: l('час', "o'clock") }, { ko: '에', gloss: l('частица времени', 'time particle') }, { ko: '일어나요', gloss: l('встаю', 'get up') }] },
      { ko: '아침을 먹어요.', tr: l('Завтракаю.', 'I eat breakfast.'), parts: [{ ko: '아침', gloss: l('завтрак', 'breakfast') }, { ko: '을', gloss: l('частица объекта', 'object particle') }, { ko: '먹어요', gloss: l('ем', 'eat') }] },
      { ko: '아홉 시부터 세 시까지 수업이 있어요.', tr: l('С девяти до трёх у меня занятия.', 'I have classes from nine to three.'), parts: [{ ko: '아홉', gloss: l('9', '9') }, { ko: '시', gloss: l('час', "o'clock") }, { ko: '부터', gloss: l('с', 'from') }, { ko: '세', gloss: l('3', '3') }, { ko: '시', gloss: l('час', "o'clock") }, { ko: '까지', gloss: l('до', 'until') }, { ko: '수업', gloss: l('занятия', 'class') }, { ko: '이', gloss: l('частица подлежащего', 'subject particle') }, { ko: '있어요', gloss: l('есть', 'there is') }] },
      { ko: '저녁에 집에서 한국어를 공부해요.', tr: l('Вечером дома учу корейский.', 'In the evening I study Korean at home.'), parts: [{ ko: '저녁', gloss: l('вечер', 'evening') }, { ko: '에', gloss: l('частица времени', 'time particle') }, { ko: '집', gloss: l('дом', 'home') }, { ko: '에서', gloss: l('частица места действия', 'place-of-action particle') }, { ko: '한국어', gloss: l('корейский', 'Korean') }, { ko: '를', gloss: l('частица объекта', 'object particle') }, { ko: '공부해요', gloss: l('учу', 'study') }] },
      { ko: '밤 열한 시에 자요.', tr: l('Ложусь спать в одиннадцать вечера.', 'I go to bed at eleven at night.'), parts: [{ ko: '밤', gloss: l('ночь', 'night') }, { ko: '열한', gloss: l('11 (열 + 한)', '11 (열 + 한)') }, { ko: '시', gloss: l('час', "o'clock") }, { ko: '에', gloss: l('частица времени', 'time particle') }, { ko: '자요', gloss: l('сплю, ложусь', 'sleep') }] },
    ],
  },
};
