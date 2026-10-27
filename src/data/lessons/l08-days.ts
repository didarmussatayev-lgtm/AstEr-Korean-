import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l8-days',
  level: 1,
  emoji: '📅',
  title: l('Дни недели, месяцы, даты', 'Days of the week, months, dates'),
  goal: l('Назвать день, месяц и дату и спросить «какой сегодня день?».', 'Name the day, month and date and ask "what day is it?".'),
  theory: [
    {
      title: l('Дни недели', 'Days of the week'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Названия дней — это стихии и светила + **요일** («день недели»). Запомни порядок: **луна, огонь, вода, дерево, металл, земля, солнце**.',
            'Day names are the luminaries and elements + **요일** ("day of the week"): **moon, fire, water, wood, metal, earth, sun**.',
          ),
        },
        { type: 'table', head: ['월', '화', '수', '목', '금', '토', '일'], rows: [['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'], [l('пн', 'Mon'), l('вт', 'Tue'), l('ср', 'Wed'), l('чт', 'Thu'), l('пт', 'Fri'), l('сб', 'Sat'), l('вс', 'Sun')]] },
        {
          type: 'examples',
          items: [
            { ko: '오늘은 무슨 요일이에요?', tr: l('Какой сегодня день недели?', 'What day is it today?') },
            { ko: '오늘은 월요일이에요.', tr: l('Сегодня понедельник.', "Today is Monday.") },
          ],
        },
        { type: 'tip', text: l('오늘 — сегодня, 내일 — завтра, 어제 — вчера. С этими словами **에 не нужно**.', '오늘 is today, 내일 is tomorrow, 어제 is yesterday. These words take **no 에**.') },
      ],
    },
    {
      title: l('Месяцы и числа', 'Months and dates'),
      blocks: [
        {
          type: 'p',
          text: l(
            '**Число + 월** — месяц, **число + 일** — день месяца. Используются китайско-корейские числа. Два месяца читаются неправильно: **6 — 유월**, **10 — 시월**.',
            '**Number + 월** is a month, **number + 일** is the day of the month. Sino-Korean numbers are used. Two months are irregular: **June is 유월**, **October is 시월**.',
          ),
        },
        { type: 'table', head: ['1', '2', '3', '6', '10', '12'], rows: [['일월', '이월', '삼월', '유월', '시월', '십이월']] },
        {
          type: 'examples',
          items: [
            { ko: '오늘은 시월 이십육 일이에요.', tr: l('Сегодня 26 октября.', "Today is October 26th.") },
            { ko: '생일은 삼월 오 일이에요.', tr: l('День рождения — 5 марта.', 'My birthday is March 5th.') },
          ],
        },
        { type: 'tip', text: l('Порядок даты — от большего к меньшему: **месяц → число**.', 'Dates go from large to small: **month → day**.') },
      ],
    },
  ],
  vocab: [
    { ko: '월요일', roman: 'woryoil', tr: l('понедельник', 'Monday') },
    { ko: '화요일', roman: 'hwayoil', tr: l('вторник', 'Tuesday') },
    { ko: '수요일', roman: 'suyoil', tr: l('среда', 'Wednesday') },
    { ko: '목요일', roman: 'mogyoil', tr: l('четверг', 'Thursday') },
    { ko: '금요일', roman: 'geumyoil', tr: l('пятница', 'Friday') },
    { ko: '토요일', roman: 'toyoil', tr: l('суббота', 'Saturday') },
    { ko: '일요일', roman: 'iryoil', tr: l('воскресенье', 'Sunday') },
    { ko: '오늘', roman: 'oneul', tr: l('сегодня', 'today') },
    { ko: '내일', roman: 'naeil', tr: l('завтра', 'tomorrow') },
    { ko: '어제', roman: 'eoje', tr: l('вчера', 'yesterday') },
    { ko: '월', roman: 'wol', tr: l('месяц (в датах)', 'month (in dates)') },
    { ko: '무슨 요일이에요?', roman: 'museun yoirieyo', tr: l('какой день недели?', 'what day of the week?') },
    { ko: '생일', roman: 'saengil', tr: l('день рождения', 'birthday') },
  ],
  exercises: [
    { type: 'match', prompt: l('Соедини день и перевод', 'Match the day and its meaning'), pairs: [{ ko: '월요일', tr: l('понедельник', 'Monday') }, { ko: '수요일', tr: l('среда', 'Wednesday') }, { ko: '금요일', tr: l('пятница', 'Friday') }, { ko: '일요일', tr: l('воскресенье', 'Sunday') }] },
    { type: 'listen', say: '토요일', options: [l('суббота', 'Saturday'), l('четверг', 'Thursday'), l('вторник', 'Tuesday')], answer: 0 },
    { type: 'choice', prompt: l('Как сказать «июнь»?', 'How do you say "June"?'), options: ['육월', '유월', '륙월'], answer: 1, why: l('Июнь и октябрь — исключения: 유월 и 시월.', 'June and October are exceptions: 유월 and 시월.') },
    { type: 'cloze', sentence: '오늘은 무슨 ___이에요?', tr: l('Какой сегодня день недели?', 'What day of the week is it today?'), options: ['요일', '월', '살'], answer: 0 },
    { type: 'tf', statement: l('Перед 내일 нужно ставить 에: 내일에 가요.', 'You must put 에 after 내일: 내일에 가요.'), answer: false, why: l('С 오늘/내일/어제 частица 에 не нужна.', 'No 에 after 오늘/내일/어제.') },
    { type: 'build', prompt: l('Собери: «Завтра вторник»', 'Build: "Tomorrow is Tuesday"'), tokens: ['화요일이에요', '내일은'], answer: ['내일은', '화요일이에요'] },
    { type: 'write', prompt: l('Научись писать слово «понедельник»', 'Learn to write the word "Monday"'), word: '월요일', tr: l('понедельник', 'Monday') },
    { type: 'choice', prompt: l('시월 이십육 일 — это…', '시월 이십육 일 is…'), options: [l('26 октября', 'October 26'), l('6 октября', 'October 6'), l('26 июня', 'June 26')], answer: 0 },
  ],
  dialogue: {
    title: l('Какой сегодня день?', 'What day is it?'),
    lines: [
      { who: 'A', ko: '오늘은 무슨 요일이에요?', tr: l('Какой сегодня день?', 'What day is it today?') },
      { who: 'B', ko: '월요일이에요.', tr: l('Понедельник.', "It's Monday.") },
      { who: 'A', ko: '내일은 화요일이에요?', tr: l('Завтра вторник?', 'Is tomorrow Tuesday?') },
      { who: 'B', ko: '네, 내일은 화요일이에요.', tr: l('Да, завтра вторник.', "Yes, tomorrow is Tuesday.") },
    ],
  },
  story: {
    title: l('Календарь', 'Calendar'),
    sentences: [
      { ko: '오늘은 시월 이십육 일이에요.', tr: l('Сегодня 26 октября.', "Today is October 26th."), parts: [{ ko: '오늘', gloss: l('сегодня', 'today') }, { ko: '은', gloss: l('частица темы', 'topic particle') }, { ko: '시월', gloss: l('октябрь', 'October') }, { ko: '이십육', gloss: l('26', '26') }, { ko: '일', gloss: l('число', 'day') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
      { ko: '오늘은 월요일이에요.', tr: l('Сегодня понедельник.', "Today is Monday."), parts: [{ ko: '오늘', gloss: l('сегодня', 'today') }, { ko: '은', gloss: l('частица темы', 'topic particle') }, { ko: '월요일', gloss: l('понедельник', 'Monday') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
      { ko: '내일은 화요일이에요.', tr: l('Завтра вторник.', 'Tomorrow is Tuesday.'), parts: [{ ko: '내일', gloss: l('завтра', 'tomorrow') }, { ko: '은', gloss: l('частица темы', 'topic particle') }, { ko: '화요일', gloss: l('вторник', 'Tuesday') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
      { ko: '생일은 삼월 오 일이에요.', tr: l('День рождения — 5 марта.', 'My birthday is March 5th.'), parts: [{ ko: '생일', gloss: l('день рождения', 'birthday') }, { ko: '은', gloss: l('частица темы (после согласной)', 'topic particle (after consonant)') }, { ko: '삼월', gloss: l('март', 'March') }, { ko: '오', gloss: l('5', '5') }, { ko: '일', gloss: l('число', 'day') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
    ],
  },
};
