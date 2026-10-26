import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l17-transport',
  level: 1,
  emoji: '🚇',
  title: l('Транспорт и дорога: (으)로, 에서…까지', 'Transport and directions: (으)로, 에서…까지'),
  goal: l('Сказать, как и сколько ты добираешься, и спросить дорогу.', 'Say how and how long you travel and ask for directions.'),
  theory: [
    {
      title: l('Чем? — частица (으)로', 'By what? — the particle (으)로'),
      blocks: [
        {
          type: 'p',
          text: l(
            '**(으)로** показывает **способ** («на чём») и **направление** («в сторону»). После гласной и после **ㄹ** — **로**, после других согласных — **으로**.',
            '**(으)로** shows the **means** ("by what") and the **direction** ("towards"). After a vowel or **ㄹ** use **로**, after other consonants use **으로**.',
          ),
        },
        {
          type: 'table',
          head: [l('Слово', 'Word'), l('Окончание на', 'Ends in'), l('Форма', 'Form')],
          rows: [
            ['버스', l('гласную', 'a vowel'), '버스로'],
            ['지하철', 'ㄹ', '지하철로'],
            ['택시', l('гласную', 'a vowel'), '택시로'],
            ['기차', l('гласную', 'a vowel'), '기차로'],
            ['오른쪽', l('согласную ㄱ', 'a consonant ㄱ'), '오른쪽으로'],
          ],
        },
        {
          type: 'examples',
          items: [
            { ko: '버스로 학교에 가요.', tr: l('Еду в школу на автобусе.', 'I go to school by bus.') },
            { ko: '걸어서 가요.', tr: l('Иду пешком.', 'I walk there.') },
            { ko: '오른쪽으로 가요.', tr: l('Иду направо.', 'I go to the right.') },
          ],
        },
      ],
    },
    {
      title: l('Сесть, выйти, сколько ехать', 'Getting on, off and how long it takes'),
      blocks: [
        {
          type: 'p',
          text: l(
            '**타요** — «сажусь, еду на» (с 을/를: 버스를 타요). **내려요** — «выхожу» (с 에서: 역에서 내려요). **걸려요** — «занимает» (о времени): 삼십 분 걸려요.',
            '**타요** "I get on / ride" (with 을/를: 버스를 타요). **내려요** "I get off" (with 에서: 역에서 내려요). **걸려요** "it takes" (time): 삼십 분 걸려요.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '집에서 학교까지 얼마나 걸려요?', tr: l('Сколько от дома до школы?', 'How long from home to school?') },
            { ko: '지하철을 타요.', tr: l('Еду на метро.', 'I take the subway.') },
            { ko: '역에서 내려요.', tr: l('Выхожу на станции.', 'I get off at the station.') },
          ],
        },
        { type: 'tip', text: l('Здесь **에서 … 까지** значит «от … до …» (место): 집에서 역까지 — «от дома до станции».', 'Here **에서 … 까지** means "from … to …" (places): 집에서 역까지 "from home to the station".') },
      ],
    },
    {
      title: l('Далеко и близко', 'Far and near'),
      blocks: [
        {
          type: 'p',
          text: l(
            '**멀어요** — «далеко» (멀다). **가까워요** — «близко» (가깝다): у основы на **ㅂ** буква ㅂ выпадает, добавляется **워요**. Подробнее об этом правиле — в уроке о погоде.',
            '**멀어요** "far" (멀다). **가까워요** "near" (가깝다): in a stem ending in **ㅂ** the ㅂ drops and **워요** is added. More on this rule in the weather lesson.',
          ),
        },
      ],
    },
  ],
  vocab: [
    { ko: '버스', roman: 'beoseu', tr: l('автобус', 'bus') },
    { ko: '지하철', roman: 'jihacheol', tr: l('метро', 'subway') },
    { ko: '택시', roman: 'taeksi', tr: l('такси', 'taxi') },
    { ko: '기차', roman: 'gicha', tr: l('поезд', 'train') },
    { ko: '비행기', roman: 'bihaenggi', tr: l('самолёт', 'airplane') },
    { ko: '자전거', roman: 'jajeongeo', tr: l('велосипед', 'bicycle') },
    { ko: '역', roman: 'yeok', tr: l('станция', 'station') },
    { ko: '길', roman: 'gil', tr: l('дорога', 'road, way') },
    { ko: '왼쪽', roman: 'oenjjok', tr: l('лево', 'left') },
    { ko: '오른쪽', roman: 'oreunjjok', tr: l('право', 'right') },
    { ko: '똑바로', roman: 'ttokbaro', tr: l('прямо', 'straight') },
    { ko: '타요', roman: 'tayo', tr: l('сажусь, еду на (타다)', 'ride (타다)') },
    { ko: '내려요', roman: 'naeryeoyo', tr: l('выхожу (내리다)', 'get off (내리다)') },
    { ko: '걸려요', roman: 'geollyeoyo', tr: l('занимает (о времени)', 'it takes (time)') },
    { ko: '멀어요', roman: 'meoreoyo', tr: l('далеко', 'far') },
    { ko: '가까워요', roman: 'gakkawoyo', tr: l('близко', 'near') },
    { ko: '걸어서', roman: 'georeoseo', tr: l('пешком', 'on foot') },
  ],
  exercises: [
    { type: 'match', prompt: l('Соедини транспорт и перевод', 'Match the transport and its meaning'), pairs: [{ ko: '버스', tr: l('автобус', 'bus') }, { ko: '지하철', tr: l('метро', 'subway') }, { ko: '택시', tr: l('такси', 'taxi') }, { ko: '비행기', tr: l('самолёт', 'airplane') }] },
    { type: 'cloze', sentence: '지하철___ 가요.', tr: l('Еду на метро.', 'I go by subway.'), options: ['로', '으로', '를'], answer: 0, why: l('지하철 заканчивается на ㄹ → 로.', '지하철 ends in ㄹ → 로.') },
    { type: 'cloze', sentence: '오른쪽___ 가요.', tr: l('Иду направо.', 'I go to the right.'), options: ['로', '으로', '에서'], answer: 1, why: l('오른쪽 заканчивается на ㄱ → 으로.', '오른쪽 ends in ㄱ → 으로.') },
    { type: 'cloze', sentence: '버스를 ___.', tr: l('Сажусь на автобус.', 'I take the bus.'), options: ['타요', '내려요', '걸려요'], answer: 0 },
    { type: 'tf', statement: l('걸어서 가요 значит «Еду на автобусе».', '걸어서 가요 means "I go by bus".'), answer: false },
    { type: 'build', prompt: l('Собери: «Я езжу в школу на метро»', 'Build: "I go to school by subway"'), tokens: ['가요', '학교에', '지하철로', '저는'], answer: ['저는', '지하철로', '학교에', '가요'] },
    { type: 'type', prompt: l('Напиши: «Это занимает 30 минут»', 'Write: "It takes 30 minutes"'), answers: ['삼십 분 걸려요', '삼십분 걸려요'] },
    { type: 'listen', say: '비행기', options: [l('самолёт', 'airplane'), l('поезд', 'train'), l('велосипед', 'bicycle')], answer: 0 },
    { type: 'dictation', say: '지하철', answers: ['지하철'] },
  ],
  dialogue: {
    title: l('Как добираешься?', 'How do you get there?'),
    lines: [
      { who: 'A', ko: '학교에 어떻게 가요?', tr: l('Как ты добираешься в школу?', 'How do you get to school?') },
      { who: 'B', ko: '버스로 가요.', tr: l('На автобусе.', 'By bus.') },
      { who: 'A', ko: '집에서 학교까지 얼마나 걸려요?', tr: l('Сколько от дома до школы?', 'How long from home to school?') },
      { who: 'B', ko: '삼십 분 걸려요.', tr: l('Полчаса.', 'Thirty minutes.') },
    ],
  },
  story: {
    title: l('Мой путь в школу', 'My way to school'),
    sentences: [
      { ko: '저는 집에서 역까지 걸어서 가요.', tr: l('От дома до станции я иду пешком.', 'I walk from home to the station.'), parts: [{ ko: '저', gloss: l('я', 'I') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '집', gloss: l('дом', 'home') }, { ko: '에서', gloss: l('от', 'from') }, { ko: '역', gloss: l('станция', 'station') }, { ko: '까지', gloss: l('до', 'to') }, { ko: '걸어서', gloss: l('пешком', 'on foot') }, { ko: '가요', gloss: l('иду', 'go') }] },
      { ko: '지하철을 타요.', tr: l('Сажусь на метро.', 'I take the subway.'), parts: [{ ko: '지하철', gloss: l('метро', 'subway') }, { ko: '을', gloss: l('частица объекта', 'object particle') }, { ko: '타요', gloss: l('сажусь', 'ride') }] },
      { ko: '삼십 분 걸려요.', tr: l('Еду полчаса.', 'It takes thirty minutes.'), parts: [{ ko: '삼십', gloss: l('30', '30') }, { ko: '분', gloss: l('минута', 'minute') }, { ko: '걸려요', gloss: l('занимает', 'it takes') }] },
      { ko: '학교 역에서 내려요.', tr: l('Выхожу на станции у школы.', 'I get off at the school station.'), parts: [{ ko: '학교', gloss: l('школа', 'school') }, { ko: '역', gloss: l('станция', 'station') }, { ko: '에서', gloss: l('частица места действия', 'place-of-action particle') }, { ko: '내려요', gloss: l('выхожу', 'get off') }] },
    ],
  },
};
