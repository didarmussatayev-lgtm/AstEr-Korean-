import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l20-requests',
  level: 1,
  emoji: '🙏',
  title: l('Просьбы и указания: -(으)세요, -지 마세요, -아/어 주세요', 'Requests: -(으)세요, -지 마세요, -아/어 주세요'),
  goal: l('Вежливо попросить, предложить и запретить; понимать классные инструкции.', 'Politely ask, offer and forbid; follow classroom instructions.'),
  theory: [
    {
      title: l('-(으)세요: вежливое «сделайте»', '-(으)세요: the polite "please do"'),
      blocks: [
        {
          type: 'p',
          text: l(
            'К основе добавляется **-세요** (после гласной) или **-으세요** (после согласной). Это одновременно просьба, лёгкий приказ и **уважительная форма** для старших.',
            'Add **-세요** (after a vowel) or **-으세요** (after a consonant) to the stem. It works as a request, a gentle command and a **respectful form** for elders.',
          ),
        },
        {
          type: 'table',
          head: [l('Глагол', 'Verb'), l('Форма', 'Form'), l('Значение', 'Meaning')],
          rows: [
            ['가다', '가세요', l('идите', 'please go')],
            ['오다', '오세요', l('приходите', 'please come')],
            ['보다', '보세요', l('смотрите', 'please look')],
            ['앉다', '앉으세요', l('садитесь', 'please sit')],
            ['읽다', '읽으세요', l('читайте', 'please read')],
            ['하다', '하세요', l('делайте', 'please do')],
          ],
        },
        {
          type: 'p',
          text: l(
            'У нескольких слов есть **особые уважительные формы**: 먹다 → **드세요** («кушайте»), 있다 → **계세요** («находитесь»: 안녕히 계세요), 자다 → **주무세요** («спите»: 안녕히 주무세요 — «спокойной ночи»).',
            'Some words have **special honorific forms**: 먹다 → **드세요** ("please eat"), 있다 → **계세요** ("stay": 안녕히 계세요), 자다 → **주무세요** ("sleep": 안녕히 주무세요 "good night").',
          ),
        },
      ],
    },
    {
      title: l('-지 마세요: «не надо»', '-지 마세요: "please don’t"'),
      blocks: [
        {
          type: 'examples',
          items: [
            { ko: '가지 마세요.', tr: l('Не уходите.', "Please don't go.") },
            { ko: '먹지 마세요.', tr: l('Не ешьте.', "Please don't eat.") },
            { ko: '걱정하지 마세요.', tr: l('Не волнуйтесь.', "Don't worry.") },
          ],
        },
      ],
    },
    {
      title: l('-아/어 주세요: «сделайте для меня»', '-아/어 주세요: "please do it for me"'),
      blocks: [
        {
          type: 'p',
          text: l(
            'К вежливой форме без 요 добавь **주세요**: 말해요 → **말해 주세요**. Это самый вежливый способ попросить о помощи.',
            'Take the polite form without 요 and add **주세요**: 말해요 → **말해 주세요**. This is the most polite way to ask for help.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '천천히 말해 주세요.', tr: l('Говорите, пожалуйста, медленнее.', 'Please speak slowly.') },
            { ko: '다시 한번 말해 주세요.', tr: l('Повторите, пожалуйста, ещё раз.', 'Please say it once more.') },
            { ko: '기다려 주세요.', tr: l('Подождите, пожалуйста.', 'Please wait.') },
            { ko: '도와주세요.', tr: l('Помогите, пожалуйста.', 'Please help me.') },
          ],
        },
      ],
    },
  ],
  vocab: [
    { ko: '가세요', roman: 'gaseyo', tr: l('идите', 'please go') },
    { ko: '오세요', roman: 'oseyo', tr: l('приходите', 'please come') },
    { ko: '보세요', roman: 'boseyo', tr: l('смотрите', 'please look') },
    { ko: '앉으세요', roman: 'anjeuseyo', tr: l('садитесь', 'please sit') },
    { ko: '읽으세요', roman: 'ilgeuseyo', tr: l('читайте', 'please read') },
    { ko: '드세요', roman: 'deuseyo', tr: l('кушайте', 'please eat') },
    { ko: '들어오세요', roman: 'deureooseyo', tr: l('входите', 'please come in') },
    { ko: '안녕히 주무세요', roman: 'annyeonghi jumuseyo', tr: l('спокойной ночи', 'good night') },
    { ko: '가지 마세요', roman: 'gaji maseyo', tr: l('не уходите', "please don't go") },
    { ko: '걱정하지 마세요', roman: 'geokjeonghaji maseyo', tr: l('не волнуйтесь', "don't worry") },
    { ko: '말해 주세요', roman: 'malhae juseyo', tr: l('скажите, пожалуйста', 'please say') },
    { ko: '기다려 주세요', roman: 'gidaryeo juseyo', tr: l('подождите, пожалуйста', 'please wait') },
    { ko: '도와주세요', roman: 'dowajuseyo', tr: l('помогите, пожалуйста', 'please help me') },
    { ko: '잠깐만요', roman: 'jamkkanmanyo', tr: l('одну минуточку', 'just a moment') },
    { ko: '천천히', roman: 'cheoncheonhi', tr: l('медленно', 'slowly') },
    { ko: '다시', roman: 'dasi', tr: l('снова', 'again') },
  ],
  exercises: [
    { type: 'match', prompt: l('Соедини просьбу и перевод', 'Match the request and its meaning'), pairs: [{ ko: '가세요', tr: l('идите', 'please go') }, { ko: '오세요', tr: l('приходите', 'please come') }, { ko: '보세요', tr: l('смотрите', 'please look') }, { ko: '앉으세요', tr: l('садитесь', 'please sit') }] },
    { type: 'choice', prompt: l('앉다 + вежливая просьба:', '앉다 + polite request:'), options: ['앉세요', '앉으세요', '앉아세요'], answer: 1, why: l('Основа на согласную → -으세요.', 'Consonant stem → -으세요.') },
    { type: 'choice', prompt: l('«Не уходите»:', '"Please don’t go":'), options: ['가지 마세요', '안 가세요', '못 가세요'], answer: 0 },
    { type: 'choice', prompt: l('Уважительная форма от 먹다:', 'The honorific form of 먹다:'), options: ['먹으세요', '드세요', '먹어요'], answer: 1 },
    { type: 'tf', statement: l('안녕히 주무세요 говорят перед сном.', '안녕히 주무세요 is said at bedtime.'), answer: true },
    { type: 'cloze', sentence: '천천히 말해 ___.', tr: l('Говорите, пожалуйста, медленнее.', 'Please speak slowly.'), options: ['주세요', '마세요', '이에요'], answer: 0 },
    { type: 'build', prompt: l('Собери: «Говорите, пожалуйста, медленнее»', 'Build: "Please speak slowly"'), tokens: ['주세요', '말해', '천천히'], answer: ['천천히', '말해', '주세요'] },
    { type: 'type', prompt: l('Напиши: «Подождите, пожалуйста»', 'Write: "Please wait"'), answers: ['기다려 주세요', '잠깐만 기다려 주세요', '기다려주세요'] },
    { type: 'listen', say: '도와주세요', options: [l('помогите', 'please help'), l('подождите', 'please wait'), l('садитесь', 'please sit')], answer: 0 },
    { type: 'dictation', say: '천천히', answers: ['천천히'] },
  ],
  dialogue: {
    title: l('В классе', 'In the classroom'),
    lines: [
      { who: 'A', ko: '안녕하세요! 여기 앉으세요.', tr: l('Здравствуйте! Садитесь сюда.', 'Hello! Please sit here.') },
      { who: 'B', ko: '감사합니다.', tr: l('Спасибо.', 'Thank you.') },
      { who: 'A', ko: '한국어를 공부해요?', tr: l('Вы изучаете корейский?', 'Do you study Korean?') },
      { who: 'B', ko: '네. 천천히 말해 주세요.', tr: l('Да. Говорите, пожалуйста, медленнее.', 'Yes. Please speak slowly.') },
      { who: 'A', ko: '네, 걱정하지 마세요.', tr: l('Конечно, не волнуйтесь.', "Sure, don't worry.") },
    ],
  },
  story: {
    title: l('Слова учителя', "The teacher's words"),
    sentences: [
      { ko: '여기 앉으세요.', tr: l('Садитесь сюда.', 'Please sit here.'), parts: [{ ko: '여기', gloss: l('здесь', 'here') }, { ko: '앉으세요', gloss: l('садитесь (앉다 + 으세요)', 'please sit (앉다 + 으세요)') }] },
      { ko: '책을 보세요.', tr: l('Смотрите в книгу.', 'Please look at the book.'), parts: [{ ko: '책', gloss: l('книга', 'book') }, { ko: '을', gloss: l('частица объекта', 'object particle') }, { ko: '보세요', gloss: l('смотрите (보다 + 세요)', 'please look (보다 + 세요)') }] },
      { ko: '천천히 읽으세요.', tr: l('Читайте медленно.', 'Please read slowly.'), parts: [{ ko: '천천히', gloss: l('медленно', 'slowly') }, { ko: '읽으세요', gloss: l('читайте (읽다 + 으세요)', 'please read (읽다 + 으세요)') }] },
      { ko: '걱정하지 마세요.', tr: l('Не волнуйтесь.', "Don't worry."), parts: [{ ko: '걱정하지', gloss: l('волноваться (걱정하다 + 지)', 'worry (걱정하다 + 지)') }, { ko: '마세요', gloss: l('не надо', "please don't") }] },
    ],
  },
};
