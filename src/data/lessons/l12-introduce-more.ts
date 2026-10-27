import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l12-introduce-more',
  level: 1,
  emoji: '🎤',
  title: l('Вопросы и самопрезентация', 'Questions and self-introduction'),
  goal: l('Задавать базовые вопросы и рассказать о себе в 6–7 предложениях.', 'Ask basic questions and introduce yourself in 6–7 sentences.'),
  theory: [
    {
      title: l('Вопросительные слова', 'Question words'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Вопросительное слово ставится **на то место, где будет ответ**. Порядок слов остаётся прежним, а глагол — в конце.',
            'The question word goes **where the answer would go**. Word order does not change and the verb stays last.',
          ),
        },
        {
          type: 'table',
          head: [l('Слово', 'Word'), l('Значение', 'Meaning'), l('Пример', 'Example')],
          rows: [
            ['뭐', l('что', 'what'), '이거 뭐예요?'],
            ['누구', l('кто', 'who'), '누구예요?'],
            ['어디', l('где / куда', 'where'), '어디에 가요?'],
            ['언제', l('когда', 'when'), '언제 갈 거예요?'],
            ['왜', l('почему', 'why'), '왜 한국어를 공부해요?'],
            ['어떻게', l('как', 'how'), '어떻게 가요?'],
          ],
        },
      ],
    },
    {
      title: l('Откуда ты? Как тебя зовут?', 'Where are you from? What is your name?'),
      blocks: [
        {
          type: 'examples',
          items: [
            { ko: '이름이 뭐예요?', tr: l('Как вас зовут? (дословно: «Имя — что?»)', 'What is your name? (lit. "The name is what?")') },
            { ko: '어디에서 왔어요?', tr: l('Откуда вы?', 'Where are you from?') },
            { ko: '카자흐스탄에서 왔어요.', tr: l('Я из Казахстана.', "I'm from Kazakhstan.") },
          ],
        },
        { type: 'tip', text: l('Здесь **에서** значит «из» (откуда): 한국에서 왔어요 — «я приехал из Кореи». 왔어요 — прошедшее время от 오다 «приходить».', 'Here **에서** means "from": 한국에서 왔어요 "I came from Korea". 왔어요 is the past of 오다 "to come".') },
      ],
    },
    {
      title: l('Шаблон рассказа о себе', 'A self-introduction template'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Собери рассказ из знакомых блоков: приветствие → имя → откуда → возраст → занятие → вежливое завершение.',
            'Build your introduction from known blocks: greeting → name → origin → age → occupation → polite closing.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '안녕하세요. 저는 안나예요.', tr: l('Здравствуйте. Я Анна.', "Hello. I'm Anna.") },
            { ko: '카자흐스탄에서 왔어요. 스무 살이에요.', tr: l('Я из Казахстана. Мне 20 лет.', "I'm from Kazakhstan. I'm 20.") },
            { ko: '학생이에요. 한국어를 공부해요.', tr: l('Я студентка. Учу корейский.', "I'm a student. I study Korean.") },
          ],
        },
      ],
    },
  ],
  vocab: [
    { ko: '누구', roman: 'nugu', tr: l('кто', 'who') },
    { ko: '언제', roman: 'eonje', tr: l('когда', 'when') },
    { ko: '왜', roman: 'wae', tr: l('почему', 'why') },
    { ko: '어떻게', roman: 'eotteoke', tr: l('как', 'how') },
    { ko: '이름이 뭐예요?', roman: 'ireumi mwoyeyo', tr: l('как вас зовут?', 'what is your name?') },
    { ko: '어디에서 왔어요?', roman: 'eodieseo wasseoyo', tr: l('откуда вы?', 'where are you from?') },
    { ko: '왔어요', roman: 'wasseoyo', tr: l('пришёл, приехал', 'came') },
    { ko: '자기소개', roman: 'jagisogae', tr: l('рассказ о себе', 'self-introduction') },
  ],
  exercises: [
    { type: 'match', prompt: l('Соедини вопросительные слова', 'Match the question words'), pairs: [{ ko: '뭐', tr: l('что', 'what') }, { ko: '누구', tr: l('кто', 'who') }, { ko: '어디', tr: l('где', 'where') }, { ko: '언제', tr: l('когда', 'when') }] },
    { type: 'cloze', sentence: '이름이 ___?', tr: l('Как вас зовут?', 'What is your name?'), options: ['뭐예요', '누구예요', '어디예요'], answer: 0 },
    { type: 'cloze', sentence: '카자흐스탄___ 왔어요.', tr: l('Я из Казахстана.', "I'm from Kazakhstan."), options: ['에', '에서', '을'], answer: 1 },
    { type: 'tf', statement: l('왜 означает «как».', '왜 means "how".'), answer: false, why: l('왜 — «почему», «как» — 어떻게.', '왜 is "why"; "how" is 어떻게.') },
    { type: 'choice', prompt: l('Как спросить «Откуда вы?»', 'How do you ask "Where are you from?"'), options: ['어디에서 왔어요?', '어디예요?', '언제 왔어요?'], answer: 0 },
    { type: 'build', prompt: l('Собери: «Я из Казахстана»', 'Build: "I am from Kazakhstan"'), tokens: ['왔어요', '카자흐스탄에서'], answer: ['카자흐스탄에서', '왔어요'] },
    { type: 'write', prompt: l('Научись писать слово «имя»', 'Learn to write the word "name"'), word: '이름', tr: l('имя', 'name') },
    { type: 'write', prompt: l('Научись писать слово «кто»', 'Learn to write the word "who"'), word: '누구', tr: l('кто', 'who') },
  ],
  dialogue: {
    title: l('Знакомство', 'Meeting someone'),
    lines: [
      { who: 'A', ko: '안녕하세요. 이름이 뭐예요?', tr: l('Здравствуйте. Как вас зовут?', "Hello. What's your name?") },
      { who: 'B', ko: '저는 안나예요.', tr: l('Я Анна.', "I'm Anna.") },
      { who: 'A', ko: '어디에서 왔어요?', tr: l('Откуда вы?', 'Where are you from?') },
      { who: 'B', ko: '카자흐스탄에서 왔어요.', tr: l('Я из Казахстана.', "I'm from Kazakhstan.") },
      { who: 'A', ko: '학생이에요?', tr: l('Вы студентка?', 'Are you a student?') },
      { who: 'B', ko: '네, 학생이에요. 한국어를 공부해요.', tr: l('Да. Учу корейский.', "Yes. I study Korean.") },
      { who: 'A', ko: '만나서 반갑습니다.', tr: l('Рад знакомству.', 'Nice to meet you.') },
    ],
  },
  story: {
    title: l('Самопрезентация', 'Self-introduction'),
    sentences: [
      { ko: '안녕하세요. 저는 안나예요.', tr: l('Здравствуйте. Я Анна.', "Hello. I'm Anna."), parts: [{ ko: '안녕하세요', gloss: l('здравствуйте', 'hello') }, { ko: '저', gloss: l('я', 'I') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '안나', gloss: l('Анна', 'Anna') }, { ko: '예요', gloss: l('быть', 'to be') }] },
      { ko: '카자흐스탄에서 왔어요.', tr: l('Я из Казахстана.', "I'm from Kazakhstan."), parts: [{ ko: '카자흐스탄', gloss: l('Казахстан', 'Kazakhstan') }, { ko: '에서', gloss: l('откуда', 'from') }, { ko: '왔어요', gloss: l('приехала', 'came') }] },
      { ko: '스무 살이에요.', tr: l('Мне 20 лет.', "I'm twenty."), parts: [{ ko: '스무', gloss: l('20', '20') }, { ko: '살', gloss: l('лет', 'years old') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
      { ko: '학생이에요.', tr: l('Я студентка.', "I'm a student."), parts: [{ ko: '학생', gloss: l('студент(ка)', 'student') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
      { ko: '한국어를 공부해요.', tr: l('Я учу корейский.', 'I study Korean.'), parts: [{ ko: '한국어', gloss: l('корейский', 'Korean') }, { ko: '를', gloss: l('частица объекта', 'object particle') }, { ko: '공부해요', gloss: l('учу', 'study') }] },
      { ko: '만나서 반갑습니다.', tr: l('Рада знакомству.', 'Nice to meet you.'), parts: [{ ko: '만나서', gloss: l('встретившись', 'having met') }, { ko: '반갑습니다', gloss: l('рада', 'glad') }] },
    ],
  },
};
