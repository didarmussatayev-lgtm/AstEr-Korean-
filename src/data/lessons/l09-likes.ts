import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l9-likes',
  level: 1,
  emoji: '🥘',
  title: l('Еда и вкусы: 도, 하고, 안, 좋아해요', 'Food and tastes: 도, 하고, 안, 좋아해요'),
  goal: l('Сказать «тоже», «и», «не» и рассказать, что ты любишь.', 'Say "also", "and", "not", and tell what you like.'),
  theory: [
    {
      title: l('도 — «тоже»', '도 means "also"'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Частица **도** заменяет 은/는, 이/가 и 을/를: ставится после слова и значит «тоже, также». Выбирать между гласной и согласной не нужно.',
            'The particle **도** replaces 은/는, 이/가 and 을/를: it follows the word and means "also". No vowel/consonant choice needed.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '저도 학생이에요.', tr: l('Я тоже студент.', "I'm a student too.") },
            { ko: '커피도 마셔요.', tr: l('И кофе тоже пью.', 'I drink coffee too.') },
          ],
        },
      ],
    },
    {
      title: l('하고 / (이)랑 — «и», «с»', '하고 / (이)랑 mean "and", "with"'),
      blocks: [
        {
          type: 'p',
          text: l(
            '**하고** соединяет существительные: 커피하고 빵 — «кофе и хлеб». Ещё значит «вместе с»: 친구하고 가요 — «иду с другом». В разговорной речи часто говорят **랑** (после гласной) или **이랑** (после согласной).',
            '**하고** joins nouns: 커피하고 빵 "coffee and bread". It also means "together with": 친구하고 가요 "I go with a friend". In casual speech **랑** (after a vowel) or **이랑** (after a consonant) is common.',
          ),
        },
      ],
    },
    {
      title: l('Отрицание: 안', 'Negation: 안'),
      blocks: [
        {
          type: 'p',
          text: l(
            '**안** ставится **перед глаголом** и значит «не»: 안 먹어요 — «не ем». С глаголами на -하다 частица стоит перед 하다: 공부 안 해요 — «не учусь».',
            '**안** goes **before the verb** and means "not": 안 먹어요 "I do not eat". With -하다 verbs it stands before 하다: 공부 안 해요 "I do not study".',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '커피를 안 마셔요.', tr: l('Я не пью кофе.', "I don't drink coffee.") },
            { ko: '김치를 좋아해요.', tr: l('Я люблю кимчи.', 'I like kimchi.') },
            { ko: '라면은 안 좋아해요.', tr: l('Рамён не люблю.', "I don't like ramyeon.") },
          ],
        },
        { type: 'tip', text: l('좋아해요 («люблю, нравится») употребляется с 을/를: 김치를 좋아해요.', '좋아해요 ("to like") takes 을/를: 김치를 좋아해요.') },
      ],
    },
  ],
  vocab: [
    { ko: '도', roman: 'do', tr: l('тоже', 'also') },
    { ko: '하고', roman: 'hago', tr: l('и; вместе с', 'and; with') },
    { ko: '안', roman: 'an', tr: l('не (перед глаголом)', 'not (before a verb)') },
    { ko: '좋아해요', roman: 'johahaeyo', tr: l('люблю, нравится', 'like') },
    { ko: '김치', roman: 'gimchi', tr: l('кимчи', 'kimchi') },
    { ko: '비빔밥', roman: 'bibimbap', tr: l('пибимпап', 'bibimbap') },
    { ko: '라면', roman: 'ramyeon', tr: l('рамён (лапша)', 'ramyeon (instant noodles)') },
    { ko: '빵', roman: 'ppang', tr: l('хлеб, выпечка', 'bread') },
    { ko: '우유', roman: 'uyu', tr: l('молоко', 'milk') },
    { ko: '과일', roman: 'gwail', tr: l('фрукты', 'fruit') },
    { ko: '고기', roman: 'gogi', tr: l('мясо', 'meat') },
  ],
  exercises: [
    { type: 'match', prompt: l('Соедини еду и перевод', 'Match the food and its meaning'), pairs: [{ ko: '김치', tr: l('кимчи', 'kimchi') }, { ko: '빵', tr: l('хлеб', 'bread') }, { ko: '우유', tr: l('молоко', 'milk') }, { ko: '고기', tr: l('мясо', 'meat') }] },
    { type: 'cloze', sentence: '저___ 학생이에요.', tr: l('Я тоже студент.', "I'm a student too."), options: ['는', '도', '을'], answer: 1 },
    { type: 'cloze', sentence: '과일___ 빵을 먹어요.', tr: l('Ем фрукты и хлеб.', 'I eat fruit and bread.'), options: ['하고', '에서', '도'], answer: 0 },
    { type: 'choice', prompt: l('«Я не пью кофе»:', '"I do not drink coffee":'), options: ['커피를 안 마셔요', '커피를 마셔요 안', '안 커피를 마셔요'], answer: 0, why: l('안 стоит прямо перед глаголом.', '안 stands right before the verb.') },
    { type: 'tf', statement: l('공부 안 해요 значит «Я не учусь».', '공부 안 해요 means "I am not studying".'), answer: true },
    { type: 'build', prompt: l('Собери: «Я не люблю кимчи»', 'Build: "I do not like kimchi"'), tokens: ['좋아해요', '안', '김치를', '저는'], answer: ['저는', '김치를', '안', '좋아해요'] },
    { type: 'type', prompt: l('Напиши: «Я тоже студент»', 'Write: "I am a student too"'), answers: ['저도 학생이에요'] },
    { type: 'listen', say: '좋아해요', options: [l('любит', 'likes'), l('пьёт', 'drinks'), l('идёт', 'goes')], answer: 0 },
  ],
  dialogue: {
    title: l('Что ты любишь?', 'What do you like?'),
    lines: [
      { who: 'A', ko: '김치를 좋아해요?', tr: l('Ты любишь кимчи?', 'Do you like kimchi?') },
      { who: 'B', ko: '네, 좋아해요.', tr: l('Да, люблю.', 'Yes, I do.') },
      { who: 'A', ko: '라면도 좋아해요?', tr: l('И рамён любишь?', 'Do you like ramyeon too?') },
      { who: 'B', ko: '아니요, 라면은 안 좋아해요.', tr: l('Нет, рамён не люблю.', "No, I don't like ramyeon.") },
    ],
  },
  story: {
    title: l('Мои вкусы', 'My tastes'),
    sentences: [
      { ko: '저는 김치를 좋아해요.', tr: l('Я люблю кимчи.', 'I like kimchi.'), parts: [{ ko: '저', gloss: l('я', 'I') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '김치', gloss: l('кимчи', 'kimchi') }, { ko: '를', gloss: l('частица объекта', 'object particle') }, { ko: '좋아해요', gloss: l('люблю', 'like') }] },
      { ko: '비빔밥도 좋아해요.', tr: l('Пибимпап тоже люблю.', 'I like bibimbap too.'), parts: [{ ko: '비빔밥', gloss: l('пибимпап', 'bibimbap') }, { ko: '도', gloss: l('тоже (вместо 을/를)', 'also (replaces 을/를)') }, { ko: '좋아해요', gloss: l('люблю', 'like') }] },
      { ko: '라면은 안 좋아해요.', tr: l('Рамён не люблю.', "I don't like ramyeon."), parts: [{ ko: '라면', gloss: l('рамён', 'ramyeon') }, { ko: '은', gloss: l('частица темы (после согласной)', 'topic particle (after consonant)') }, { ko: '안', gloss: l('не', 'not') }, { ko: '좋아해요', gloss: l('люблю', 'like') }] },
      { ko: '빵하고 과일을 먹어요.', tr: l('Ем хлеб и фрукты.', 'I eat bread and fruit.'), parts: [{ ko: '빵', gloss: l('хлеб', 'bread') }, { ko: '하고', gloss: l('и', 'and') }, { ko: '과일', gloss: l('фрукты', 'fruit') }, { ko: '을', gloss: l('частица объекта (после согласной)', 'object particle (after consonant)') }, { ko: '먹어요', gloss: l('ем', 'eat') }] },
    ],
  },
};
