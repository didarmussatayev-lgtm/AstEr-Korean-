import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l18-weather',
  level: 1,
  emoji: '⛅',
  title: l('Погода и времена года', 'Weather and seasons'),
  goal: l('Описать погоду и сезон; понять неправильные глаголы на ㅂ.', 'Describe the weather and seasons; learn ㅂ-irregular verbs.'),
  theory: [
    {
      title: l('Времена года и погода', 'Seasons and weather'),
      blocks: [
        { type: 'table', head: [l('Сезон', 'Season'), l('Корейский', 'Korean')], rows: [[l('весна', 'spring'), '봄'], [l('лето', 'summer'), '여름'], [l('осень', 'autumn'), '가을'], [l('зима', 'winter'), '겨울']] },
        {
          type: 'examples',
          items: [
            { ko: '오늘 날씨가 어때요?', tr: l('Какая сегодня погода?', "What's the weather like today?") },
            { ko: '비가 와요.', tr: l('Идёт дождь.', "It's raining.") },
            { ko: '눈이 와요.', tr: l('Идёт снег.', "It's snowing.") },
            { ko: '바람이 불어요.', tr: l('Дует ветер.', "It's windy.") },
            { ko: '날씨가 맑아요.', tr: l('Погода ясная.', 'The weather is clear.') },
          ],
        },
        { type: 'tip', text: l('**눈** — и «снег», и «глаз». По смыслу ясно: 눈이 와요 — «идёт снег».', '**눈** means both "snow" and "eye". Context decides: 눈이 와요 is "it is snowing".') },
      ],
    },
    {
      title: l('Неправильные основы на ㅂ', 'ㅂ-irregular stems'),
      blocks: [
        {
          type: 'p',
          text: l(
            'У большинства основ на **ㅂ** буква ㅂ выпадает, а к основе добавляется **워요**: 덥다 → **더워요**, 춥다 → **추워요**. Эти слова придётся выучить.',
            'In most stems ending in **ㅂ**, the ㅂ drops and **워요** is added to the stem: 덥다 → **더워요**, 춥다 → **추워요**. These words just have to be learned.',
          ),
        },
        {
          type: 'table',
          head: [l('Словарная форма', 'Dictionary form'), l('Вежливая форма', 'Polite form'), l('Значение', 'Meaning')],
          rows: [
            ['덥다', '더워요', l('жарко', 'hot (weather)')],
            ['춥다', '추워요', l('холодно', 'cold (weather)')],
            ['맵다', '매워요', l('острый', 'spicy')],
            ['쉽다', '쉬워요', l('лёгкий', 'easy')],
            ['어렵다', '어려워요', l('трудный', 'difficult')],
            ['가깝다', '가까워요', l('близко', 'near')],
          ],
        },
        { type: 'tip', text: l('Исключения (правильные): 좁다 → 좁아요 («тесный»), 입다 → 입어요 («надевать»). Но 덥, 춥, 맵 всегда меняются.', 'Regular exceptions: 좁다 → 좁아요 ("narrow"), 입다 → 입어요 ("to wear"). 덥, 춥 and 맵 always change.') },
      ],
    },
    {
      title: l('Приятные слова о погоде', 'Pleasant weather words'),
      blocks: [
        {
          type: 'examples',
          items: [
            { ko: '날씨가 따뜻해요.', tr: l('Тепло.', "It's warm.") },
            { ko: '바람이 불어서 시원해요.', tr: l('Дует ветер, поэтому прохладно.', "It's windy, so it feels cool.") },
            { ko: '오늘은 흐려요.', tr: l('Сегодня пасмурно.', "It's cloudy today.") },
          ],
        },
      ],
    },
  ],
  vocab: [
    { ko: '날씨', roman: 'nalssi', tr: l('погода', 'weather') },
    { ko: '봄', roman: 'bom', tr: l('весна', 'spring') },
    { ko: '여름', roman: 'yeoreum', tr: l('лето', 'summer') },
    { ko: '가을', roman: 'gaeul', tr: l('осень', 'autumn') },
    { ko: '겨울', roman: 'gyeoul', tr: l('зима', 'winter') },
    { ko: '더워요', roman: 'deowoyo', tr: l('жарко (덥다)', 'hot (덥다)') },
    { ko: '추워요', roman: 'chuwoyo', tr: l('холодно (춥다)', 'cold (춥다)') },
    { ko: '따뜻해요', roman: 'ttatteuthaeyo', tr: l('тепло', 'warm') },
    { ko: '시원해요', roman: 'siwonhaeyo', tr: l('прохладно', 'cool') },
    { ko: '매워요', roman: 'maewoyo', tr: l('острый (맵다)', 'spicy (맵다)') },
    { ko: '비', roman: 'bi', tr: l('дождь', 'rain') },
    { ko: '눈', roman: 'nun', tr: l('снег; глаз', 'snow; eye') },
    { ko: '바람', roman: 'baram', tr: l('ветер', 'wind') },
    { ko: '맑아요', roman: 'malgayo', tr: l('ясно', 'clear') },
    { ko: '흐려요', roman: 'heuryeoyo', tr: l('пасмурно', 'cloudy') },
    { ko: '어때요?', roman: 'eottaeyo', tr: l('как? какой?', 'how is it?') },
  ],
  exercises: [
    { type: 'match', prompt: l('Соедини времена года', 'Match the seasons'), pairs: [{ ko: '봄', tr: l('весна', 'spring') }, { ko: '여름', tr: l('лето', 'summer') }, { ko: '가을', tr: l('осень', 'autumn') }, { ko: '겨울', tr: l('зима', 'winter') }] },
    { type: 'choice', prompt: l('덥다 в вежливой форме:', 'Polite form of 덥다:'), options: ['덥어요', '더워요', '더우요'], answer: 1 },
    { type: 'choice', prompt: l('춥다 в вежливой форме:', 'Polite form of 춥다:'), options: ['춥어요', '추워요', '춥아요'], answer: 1 },
    { type: 'cloze', sentence: '비___ 와요.', tr: l('Идёт дождь.', "It's raining."), options: ['가', '를', '에서'], answer: 0 },
    { type: 'cloze', sentence: '오늘 날씨가 ___?', tr: l('Какая сегодня погода?', "What's the weather today?"), options: ['어때요', '뭐예요', '누구예요'], answer: 0 },
    { type: 'tf', statement: l('눈이 와요 значит «Идёт снег».', '눈이 와요 means "it is snowing".'), answer: true },
    { type: 'build', prompt: l('Собери: «Сегодня очень тепло»', 'Build: "It is very warm today"'), tokens: ['따뜻해요', '오늘은', '아주', '날씨가'], answer: ['오늘은', '날씨가', '아주', '따뜻해요'] },
    { type: 'write', prompt: l('Научись писать слово «погода»', 'Learn to write the word "weather"'), word: '날씨', tr: l('погода', 'weather') },
    { type: 'listen', say: '매워요', options: [l('острый', 'spicy'), l('сладкий', 'sweet'), l('холодный', 'cold')], answer: 0 },
    { type: 'write', prompt: l('Научись писать слово «зима»', 'Learn to write the word "winter"'), word: '겨울', tr: l('зима', 'winter') },
  ],
  dialogue: {
    title: l('Какая погода?', "What's the weather like?"),
    lines: [
      { who: 'A', ko: '오늘 날씨가 어때요?', tr: l('Какая сегодня погода?', "What's the weather today?") },
      { who: 'B', ko: '비가 와요.', tr: l('Идёт дождь.', "It's raining.") },
      { who: 'A', ko: '추워요?', tr: l('Холодно?', 'Is it cold?') },
      { who: 'B', ko: '아니요, 안 추워요. 따뜻해요.', tr: l('Нет, не холодно. Тепло.', "No, it isn't cold. It's warm.") },
    ],
  },
  story: {
    title: l('Четыре сезона', 'Four seasons'),
    sentences: [
      { ko: '봄은 따뜻해요.', tr: l('Весной тепло.', 'Spring is warm.'), parts: [{ ko: '봄', gloss: l('весна', 'spring') }, { ko: '은', gloss: l('частица темы', 'topic particle') }, { ko: '따뜻해요', gloss: l('тепло', 'warm') }] },
      { ko: '여름은 아주 더워요.', tr: l('Летом очень жарко.', 'Summer is very hot.'), parts: [{ ko: '여름', gloss: l('лето', 'summer') }, { ko: '은', gloss: l('частица темы', 'topic particle') }, { ko: '아주', gloss: l('очень', 'very') }, { ko: '더워요', gloss: l('жарко (덥다)', 'hot (덥다)') }] },
      { ko: '가을은 시원해요.', tr: l('Осенью прохладно.', 'Autumn is cool.'), parts: [{ ko: '가을', gloss: l('осень', 'autumn') }, { ko: '은', gloss: l('частица темы', 'topic particle') }, { ko: '시원해요', gloss: l('прохладно', 'cool') }] },
      { ko: '겨울은 추워요.', tr: l('Зимой холодно.', 'Winter is cold.'), parts: [{ ko: '겨울', gloss: l('зима', 'winter') }, { ko: '은', gloss: l('частица темы', 'topic particle') }, { ko: '추워요', gloss: l('холодно (춥다)', 'cold (춥다)') }] },
      { ko: '눈이 와요.', tr: l('Идёт снег.', "It's snowing."), parts: [{ ko: '눈', gloss: l('снег', 'snow') }, { ko: '이', gloss: l('частица подлежащего', 'subject particle') }, { ko: '와요', gloss: l('идёт (오다)', 'comes (오다)') }] },
    ],
  },
};
