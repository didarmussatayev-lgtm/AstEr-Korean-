import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l6-verbs',
  level: 1,
  emoji: '☕',
  title: l('Глаголы: -아요/어요 и 을/를', 'Verbs: -아요/어요 and 을/를'),
  goal: l('Сказать, что ты делаешь: ем, пью, читаю, учу.', 'Say what you do: eat, drink, read, study.'),
  theory: [
    {
      title: l('Как образуется вежливая форма', 'How the polite form is built'),
      blocks: [
        {
          type: 'p',
          text: l(
            'В словаре глагол оканчивается на **-다**: 먹다 «есть». Убираем 다 — остаётся **основа**: 먹. К основе добавляем **-아요** или **-어요**.',
            'In the dictionary a verb ends in **-다**: 먹다 "to eat". Remove 다 and you get the **stem**: 먹. Add **-아요** or **-어요**.',
          ),
        },
        {
          type: 'table',
          head: [l('Последняя гласная основы', 'Last vowel of the stem'), l('Окончание', 'Ending'), l('Пример', 'Example')],
          rows: [
            ['ㅏ, ㅗ', '-아요', '살다 → 살아요'],
            [l('любая другая', 'any other'), '-어요', '먹다 → 먹어요, 읽다 → 읽어요'],
            ['-하다', '-해요', '공부하다 → 공부해요'],
          ],
        },
        {
          type: 'p',
          text: l(
            'Если основа оканчивается на гласную, гласные **сливаются**. Эти глаголы лучше выучить сразу:',
            'If the stem ends in a vowel, the vowels **merge**. Learn these ones right away:',
          ),
        },
        {
          type: 'table',
          head: [l('Словарная форма', 'Dictionary form'), l('Вежливая форма', 'Polite form'), l('Значение', 'Meaning')],
          rows: [
            ['가다', '가요', l('идти', 'to go')],
            ['자다', '자요', l('спать', 'to sleep')],
            ['사다', '사요', l('покупать', 'to buy')],
            ['보다', '봐요', l('смотреть', 'to watch / see')],
            ['마시다', '마셔요', l('пить', 'to drink')],
            ['하다', '해요', l('делать', 'to do')],
          ],
        },
        {
          type: 'tip',
          text: l(
            'Вопрос и утверждение звучат одинаково: меняется только интонация (вопрос — вверх). 커피를 마셔요? / 커피를 마셔요.',
            'A question and a statement look the same: only the intonation changes (rising for questions). 커피를 마셔요? / 커피를 마셔요.',
          ),
        },
      ],
    },
    {
      title: l('Частица объекта 을/를', 'Object particle 을/를'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Прямое дополнение (кого/что) помечается частицей: **를** после гласной, **을** после согласной. Глагол всегда в конце предложения.',
            'The direct object is marked with a particle: **를** after a vowel, **을** after a consonant. The verb always comes last.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '커피를 마셔요.', tr: l('Я пью кофе.', 'I drink coffee.') },
            { ko: '밥을 먹어요.', tr: l('Я ем (рис / ем еду).', 'I eat (a meal).') },
            { ko: '한국어를 공부해요.', tr: l('Я учу корейский.', 'I study Korean.') },
          ],
        },
        {
          type: 'tip',
          text: l(
            'Подлежащее «я» (저는) в живой речи часто опускают: 커피를 마셔요 уже означает «(я) пью кофе».',
            'In real speech the subject "I" (저는) is often dropped: 커피를 마셔요 already means "(I) drink coffee".',
          ),
        },
      ],
    },
  ],
  vocab: [
    { ko: '먹다 · 먹어요', roman: 'meokda · meogeoyo', tr: l('есть', 'to eat') },
    { ko: '마시다 · 마셔요', roman: 'masida · masyeoyo', tr: l('пить', 'to drink') },
    { ko: '가다 · 가요', roman: 'gada · gayo', tr: l('идти, ехать', 'to go') },
    { ko: '보다 · 봐요', roman: 'boda · bwayo', tr: l('смотреть, видеть', 'to watch, see') },
    { ko: '읽다 · 읽어요', roman: 'ikda · ilgeoyo', tr: l('читать', 'to read') },
    { ko: '자다 · 자요', roman: 'jada · jayo', tr: l('спать', 'to sleep') },
    { ko: '사다 · 사요', roman: 'sada · sayo', tr: l('покупать', 'to buy') },
    { ko: '하다 · 해요', roman: 'hada · haeyo', tr: l('делать', 'to do') },
    { ko: '공부하다 · 공부해요', roman: 'gongbuhada · gongbuhaeyo', tr: l('учиться, заниматься', 'to study') },
    { ko: '밥', roman: 'bap', tr: l('рис; еда', 'rice; a meal') },
    { ko: '한국어', roman: 'hangugeo', tr: l('корейский язык', 'Korean (language)') },
  ],
  exercises: [
    { type: 'choice', prompt: l('먹다 в вежливой форме:', 'Polite form of 먹다:'), options: ['먹아요', '먹어요', '먹해요'], answer: 1, why: l('Последняя гласная основы 먹 — ㅓ → -어요.', 'The last vowel of the stem 먹 is ㅓ → -어요.') },
    { type: 'choice', prompt: l('공부하다 в вежливой форме:', 'Polite form of 공부하다:'), options: ['공부하어요', '공부해요', '공부하요'], answer: 1 },
    { type: 'choice', prompt: l('보다 в вежливой форме:', 'Polite form of 보다:'), options: ['보아요', '봐요', '보요'], answer: 1, why: l('ㅗ + ㅏ сливаются в ㅘ: 보 + 아요 → 봐요.', 'ㅗ + ㅏ merge into ㅘ: 보 + 아요 → 봐요.') },
    { type: 'choice', prompt: l('Выбери частицу: 커피___ 마셔요.', 'Pick the particle: 커피___ 마셔요.'), options: ['을', '를'], answer: 1 },
    { type: 'choice', prompt: l('Выбери частицу: 밥___ 먹어요.', 'Pick the particle: 밥___ 먹어요.'), options: ['을', '를'], answer: 0, why: l('밥 заканчивается на ㅂ → 을.', '밥 ends in ㅂ → 을.') },
    { type: 'listen', say: '마셔요', options: [l('пьёт', 'drinks'), l('ест', 'eats'), l('спит', 'sleeps')], answer: 0 },
    { type: 'build', prompt: l('Собери: «Я пью кофе»', 'Build: "I drink coffee"'), tokens: ['마셔요', '저는', '커피를'], answer: ['저는', '커피를', '마셔요'] },
    { type: 'type', prompt: l('Напиши: «Я учу корейский»', 'Write: "I study Korean"'), answers: ['저는 한국어를 공부해요', '한국어를 공부해요'] },
    { type: 'type', prompt: l('Напиши: «Я ем» (밥…)', 'Write: "I eat a meal" (밥…)'), answers: ['밥을 먹어요', '저는 밥을 먹어요'] },
  ],
  dialogue: {
    title: l('Что ты делаешь?', 'What are you doing?'),
    lines: [
      { who: 'A', ko: '뭐 해요?', tr: l('Что делаешь?', 'What are you doing?') },
      { who: 'B', ko: '한국어를 공부해요.', tr: l('Учу корейский.', "I'm studying Korean.") },
      { who: 'A', ko: '커피를 마셔요?', tr: l('Пьёшь кофе?', 'Are you drinking coffee?') },
      { who: 'B', ko: '아니요, 물을 마셔요.', tr: l('Нет, пью воду.', "No, I'm drinking water.") },
    ],
  },
  story: {
    title: l('Мой день', 'My day'),
    sentences: [
      { ko: '저는 한국어를 공부해요.', tr: l('Я учу корейский.', 'I study Korean.'), parts: [{ ko: '저', gloss: l('я', 'I') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '한국어', gloss: l('корейский язык', 'Korean language') }, { ko: '를', gloss: l('частица объекта (после гласной)', 'object particle (after vowel)') }, { ko: '공부해요', gloss: l('учусь (공부하다)', 'study (공부하다)') }] },
      { ko: '책을 읽어요.', tr: l('Читаю книгу.', 'I read a book.'), parts: [{ ko: '책', gloss: l('книга', 'book') }, { ko: '을', gloss: l('частица объекта (после согласной)', 'object particle (after consonant)') }, { ko: '읽어요', gloss: l('читаю (읽다)', 'read (읽다)') }] },
      { ko: '커피를 마셔요.', tr: l('Пью кофе.', 'I drink coffee.'), parts: [{ ko: '커피', gloss: l('кофе', 'coffee') }, { ko: '를', gloss: l('частица объекта', 'object particle') }, { ko: '마셔요', gloss: l('пью (마시다)', 'drink (마시다)') }] },
      { ko: '밥을 먹어요.', tr: l('Ем.', 'I eat.'), parts: [{ ko: '밥', gloss: l('рис; еда', 'rice; a meal') }, { ko: '을', gloss: l('частица объекта', 'object particle') }, { ko: '먹어요', gloss: l('ем (먹다)', 'eat (먹다)') }] },
    ],
  },
};
