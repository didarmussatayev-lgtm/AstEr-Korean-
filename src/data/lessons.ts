import type { Lesson } from '../lib/types';
import { lesson as l3 } from './lessons/l03-numbers-sino';
import { lesson as l4 } from './lessons/l04-numbers-native';
import { lesson as l5 } from './lessons/l05-this-that';
import { lesson as l6 } from './lessons/l06-verbs';
import { lesson as l7 } from './lessons/l07-places';
import { lesson as l8 } from './lessons/l08-days';
import { lesson as l9 } from './lessons/l09-likes';
import { lesson as l10 } from './lessons/l10-past';
import { lesson as l11 } from './lessons/l11-plans';
import { lesson as l12 } from './lessons/l12-introduce-more';

const base: Lesson[] = [
  {
    id: 'l1-greetings',
    level: 1,
    emoji: '👋',
    title: { ru: 'Приветствия и вежливость', en: 'Greetings and politeness' },
    goal: {
      ru: 'Поздороваться, попрощаться, поблагодарить и извиниться.',
      en: 'Say hello and goodbye, thank someone and apologize.',
    },
    theory: [
      {
        title: { ru: 'Вежливый стиль 요 / 습니다', en: 'Polite style: 요 / 습니다' },
        blocks: [
          {
            type: 'p',
            text: {
              ru: 'В корейском форма слова зависит от того, с кем ты говоришь. Для начала нужны два вежливых стиля: **формальный** (-ㅂ니다 / -습니다) и **мягкий вежливый** (-요). Оба безопасны с незнакомыми людьми.',
              en: 'In Korean the form of a word depends on who you speak to. Start with two polite styles: **formal** (-ㅂ니다 / -습니다) and **soft polite** (-요). Both are safe with strangers.',
            },
          },
          {
            type: 'examples',
            items: [
              { ko: '안녕하세요.', tr: { ru: 'Здравствуйте. (универсально, в любое время суток)', en: 'Hello. (universal, any time of day)' } },
              { ko: '감사합니다.', tr: { ru: 'Спасибо. (формально)', en: 'Thank you. (formal)' } },
              { ko: '괜찮아요.', tr: { ru: 'Всё в порядке. / Ничего страшного. (мягко)', en: "It's okay. / No problem. (soft)" } },
            ],
          },
        ],
      },
      {
        title: { ru: 'Два «до свидания»', en: 'Two ways to say goodbye' },
        blocks: [
          {
            type: 'p',
            text: {
              ru: 'Корейцы выбирают прощание по тому, **кто уходит**. Дословно это пожелание «иди благополучно» или «оставайся благополучно».',
              en: 'Koreans pick the goodbye by **who is leaving**. Literally it means "go safely" or "stay safely".',
            },
          },
          {
            type: 'table',
            head: ['', '한국어', { ru: 'Кто говорит', en: 'Who says it' }],
            rows: [
              [{ ru: 'Ты остаёшься', en: 'You stay' }, '안녕히 가세요', { ru: 'Говорит остающийся тому, кто уходит', en: 'Said to the one who leaves' }],
              [{ ru: 'Ты уходишь', en: 'You leave' }, '안녕히 계세요', { ru: 'Говорит уходящий тому, кто остаётся', en: 'Said to the one who stays' }],
            ],
          },
          {
            type: 'tip',
            text: {
              ru: 'Если оба уходят, говорят 안녕히 가세요 друг другу.',
              en: 'If both people leave, each says 안녕히 가세요 to the other.',
            },
          },
        ],
      },
    ],
    vocab: [
      { ko: '안녕하세요', roman: 'annyeonghaseyo', tr: { ru: 'здравствуйте', en: 'hello' } },
      { ko: '안녕히 가세요', roman: 'annyeonghi gaseyo', tr: { ru: 'до свидания (тому, кто уходит)', en: 'goodbye (to one leaving)' } },
      { ko: '안녕히 계세요', roman: 'annyeonghi gyeseyo', tr: { ru: 'до свидания (тому, кто остаётся)', en: 'goodbye (to one staying)' } },
      { ko: '감사합니다', roman: 'gamsahamnida', tr: { ru: 'спасибо', en: 'thank you' } },
      { ko: '죄송합니다', roman: 'joesonghamnida', tr: { ru: 'извините', en: "I'm sorry" } },
      { ko: '괜찮아요', roman: 'gwaenchanayo', tr: { ru: 'всё в порядке', en: "it's okay" } },
      { ko: '네', roman: 'ne', tr: { ru: 'да', en: 'yes' } },
      { ko: '아니요', roman: 'aniyo', tr: { ru: 'нет', en: 'no' } },
      { ko: '만나서 반갑습니다', roman: 'mannaseo bangapseumnida', tr: { ru: 'рад(а) знакомству', en: 'nice to meet you' } },
    ],
    exercises: [
      { type: 'listen', say: '감사합니다', options: [{ ru: 'здравствуйте', en: 'hello' }, { ru: 'спасибо', en: 'thank you' }, { ru: 'извините', en: "I'm sorry" }], answer: 1 },
      { type: 'choice', prompt: { ru: 'Как сказать «нет»?', en: 'How do you say "no"?' }, options: ['네', '아니요', '감사합니다'], answer: 1 },
      {
        type: 'choice',
        prompt: { ru: 'Ты уходишь, а собеседник остаётся. Что сказать?', en: 'You are leaving, the other person stays. What do you say?' },
        options: ['안녕히 가세요', '안녕히 계세요', '안녕하세요'],
        answer: 1,
        why: { ru: '계세요 — от «оставаться»; уходящий желает остающемуся «оставайся благополучно».', en: '계세요 comes from "to stay": the leaver wishes the stayer to stay safely.' },
      },
      { type: 'type', prompt: { ru: 'Напиши по-корейски: «Здравствуйте»', en: 'Write in Korean: "Hello"' }, answers: ['안녕하세요'], hint: { ru: 'Начинается с 안녕…', en: 'Starts with 안녕…' } },
      { type: 'build', prompt: { ru: 'Собери: «Нет, всё в порядке»', en: 'Build: "No, it\'s okay"' }, tokens: ['괜찮아요', '아니요'], answer: ['아니요', '괜찮아요'] },
      { type: 'listen', say: '죄송합니다', options: [{ ru: 'извините', en: "I'm sorry" }, { ru: 'да', en: 'yes' }, { ru: 'до свидания', en: 'goodbye' }], answer: 0 },
    ],
    dialogue: {
      title: { ru: 'В магазине', en: 'In a shop' },
      lines: [
        { who: 'A', ko: '안녕하세요!', tr: { ru: 'Здравствуйте!', en: 'Hello!' } },
        { who: 'B', ko: '네, 안녕하세요!', tr: { ru: 'Да, здравствуйте!', en: 'Yes, hello!' } },
        { who: 'A', ko: '죄송합니다.', tr: { ru: 'Извините.', en: "I'm sorry." } },
        { who: 'B', ko: '아니요. 괜찮아요.', tr: { ru: 'Нет, всё в порядке.', en: "No, it's okay." } },
        { who: 'A', ko: '감사합니다.', tr: { ru: 'Спасибо.', en: 'Thank you.' } },
        { who: 'B', ko: '안녕히 가세요.', tr: { ru: 'До свидания.', en: 'Goodbye.' } },
      ],
    },
    story: {
      title: { ru: 'Первая встреча', en: 'First meeting' },
      sentences: [
        { ko: '안녕하세요.', tr: { ru: 'Здравствуйте.', en: 'Hello.' }, parts: [{ ko: '안녕', gloss: { ru: 'мир, благополучие', en: 'peace, well-being' } }, { ko: '하', gloss: { ru: 'делать (основа глагола 하다)', en: 'to do (stem of 하다)' } }, { ko: '세요', gloss: { ru: 'вежливое окончание', en: 'polite ending' } }] },
        { ko: '만나서 반갑습니다.', tr: { ru: 'Рад(а) познакомиться.', en: 'Nice to meet you.' }, parts: [{ ko: '만나서', gloss: { ru: 'встретившись', en: 'having met' } }, { ko: '반갑', gloss: { ru: 'быть рад', en: 'to be glad' } }, { ko: '습니다', gloss: { ru: 'формальное окончание', en: 'formal ending' } }] },
        { ko: '감사합니다.', tr: { ru: 'Спасибо.', en: 'Thank you.' }, parts: [{ ko: '감사', gloss: { ru: 'благодарность', en: 'gratitude' } }, { ko: '합니다', gloss: { ru: 'делать (формально)', en: 'do (formal)' } }] },
      ],
    },
  },
  {
    id: 'l2-introduce',
    level: 1,
    emoji: '🙋',
    title: { ru: 'Я — студент: 은/는 и 이에요/예요', en: 'I am a student: 은/는 and 이에요/예요' },
    goal: {
      ru: 'Представиться и сказать, кто ты и откуда.',
      en: 'Introduce yourself and say who you are and where you are from.',
    },
    theory: [
      {
        title: { ru: 'Частица темы 은/는', en: 'Topic particle 은/는' },
        blocks: [
          {
            type: 'p',
            text: {
              ru: 'В корейском порядок слов — **подлежащее, дополнение, сказуемое** (глагол в конце). После слова ставится частица. Частица темы 은/는 говорит: «что касается…».',
              en: 'Korean word order is **subject, object, verb** (the verb comes last). Particles are attached to words. The topic particle 은/는 means "as for…".',
            },
          },
          {
            type: 'table',
            head: [{ ru: 'Слово заканчивается на', en: 'Word ends in' }, { ru: 'Частица', en: 'Particle' }, { ru: 'Пример', en: 'Example' }],
            rows: [
              [{ ru: 'гласную', en: 'a vowel' }, '는', '저 → 저는'],
              [{ ru: 'согласную', en: 'a consonant' }, '은', '선생님 → 선생님은'],
            ],
          },
        ],
      },
      {
        title: { ru: 'Быть: 이에요 / 예요', en: 'To be: 이에요 / 예요' },
        blocks: [
          {
            type: 'p',
            text: {
              ru: 'Глагол-связка «быть» в вежливом стиле присоединяется к существительному. Выбор зависит от последнего звука.',
              en: 'The copula "to be" attaches to a noun in polite style. The choice depends on the last sound.',
            },
          },
          {
            type: 'table',
            head: [{ ru: 'Слово заканчивается на', en: 'Word ends in' }, { ru: 'Форма', en: 'Form' }, { ru: 'Пример', en: 'Example' }],
            rows: [
              [{ ru: 'гласную', en: 'a vowel' }, '예요', '안나예요'],
              [{ ru: 'согласную', en: 'a consonant' }, '이에요', '학생이에요'],
            ],
          },
          {
            type: 'examples',
            items: [
              { ko: '저는 안나예요.', tr: { ru: 'Я Анна.', en: 'I am Anna.' } },
              { ko: '저는 학생이에요.', tr: { ru: 'Я студент(ка).', en: 'I am a student.' } },
              { ko: '선생님은 한국 사람이에요.', tr: { ru: 'Учитель — кореец.', en: 'The teacher is Korean.' } },
            ],
          },
          {
            type: 'tip',
            text: {
              ru: 'Ошибка русскоговорящих: не нужно переводить «я» каждый раз. В живой речи 저는 часто опускают, если и так понятно, о ком речь.',
              en: 'Common mistake: you do not have to say "I" every time. Korean often drops 저는 when it is clear who is meant.',
            },
          },
        ],
      },
    ],
    vocab: [
      { ko: '저', roman: 'jeo', tr: { ru: 'я (вежливо)', en: 'I (polite)' } },
      { ko: '이름', roman: 'ireum', tr: { ru: 'имя', en: 'name' } },
      { ko: '학생', roman: 'haksaeng', tr: { ru: 'студент, ученик', en: 'student' } },
      { ko: '선생님', roman: 'seonsaengnim', tr: { ru: 'учитель', en: 'teacher' } },
      { ko: '사람', roman: 'saram', tr: { ru: 'человек', en: 'person' } },
      { ko: '한국', roman: 'hanguk', tr: { ru: 'Корея', en: 'Korea' } },
      { ko: '카자흐스탄', roman: 'kajaheuseutan', tr: { ru: 'Казахстан', en: 'Kazakhstan' } },
      { ko: '러시아', roman: 'reosia', tr: { ru: 'Россия', en: 'Russia' } },
      { ko: '뭐예요?', roman: 'mwoyeyo', tr: { ru: 'что это? / что?', en: 'what is it?' } },
    ],
    exercises: [
      { type: 'choice', prompt: { ru: 'Выбери частицу: 저___ 학생이에요.', en: 'Pick the particle: 저___ 학생이에요.' }, options: ['은', '는'], answer: 1, why: { ru: '저 заканчивается на гласную ㅓ → 는.', en: '저 ends in the vowel ㅓ → 는.' } },
      { type: 'choice', prompt: { ru: 'Выбери частицу: 선생님___ 한국 사람이에요.', en: 'Pick the particle: 선생님___ 한국 사람이에요.' }, options: ['은', '는'], answer: 0, why: { ru: '선생님 заканчивается на согласную ㅁ → 은.', en: '선생님 ends in the consonant ㅁ → 은.' } },
      { type: 'choice', prompt: { ru: 'Выбери форму: 저는 학생___.', en: 'Pick the form: 저는 학생___.' }, options: ['예요', '이에요'], answer: 1, why: { ru: '학생 заканчивается на ㅇ (согласная) → 이에요.', en: '학생 ends in ㅇ (a consonant) → 이에요.' } },
      { type: 'choice', prompt: { ru: 'Выбери форму: 저는 안나___.', en: 'Pick the form: 저는 안나___.' }, options: ['예요', '이에요'], answer: 0, why: { ru: '안나 заканчивается на гласную → 예요.', en: '안나 ends in a vowel → 예요.' } },
      { type: 'listen', say: '한국', options: [{ ru: 'Россия', en: 'Russia' }, { ru: 'Корея', en: 'Korea' }, { ru: 'Казахстан', en: 'Kazakhstan' }], answer: 1 },
      { type: 'build', prompt: { ru: 'Собери: «Я из Казахстана» (дословно: «Я казахстанец»)', en: 'Build: "I am Kazakhstani"' }, tokens: ['사람이에요', '저는', '카자흐스탄'], answer: ['저는', '카자흐스탄', '사람이에요'] },
      { type: 'type', prompt: { ru: 'Напиши по-корейски: «Я студент»', en: 'Write in Korean: "I am a student"' }, answers: ['저는 학생이에요', '저는 학생이에요.'], hint: { ru: '저 + частица + 학생 + связка', en: '저 + particle + 학생 + copula' } },
    ],
    dialogue: {
      title: { ru: 'Знакомство', en: 'Getting to know each other' },
      lines: [
        { who: 'A', ko: '안녕하세요. 저는 민수예요.', tr: { ru: 'Здравствуйте. Я Минсу.', en: "Hello. I'm Minsu." } },
        { who: 'B', ko: '안녕하세요. 저는 안나예요.', tr: { ru: 'Здравствуйте. Я Анна.', en: "Hello. I'm Anna." } },
        { who: 'A', ko: '안나는 학생이에요?', tr: { ru: 'Анна, ты студентка?', en: 'Anna, are you a student?' } },
        { who: 'B', ko: '네, 저는 학생이에요.', tr: { ru: 'Да, я студентка.', en: "Yes, I'm a student." } },
        { who: 'A', ko: '만나서 반갑습니다.', tr: { ru: 'Рад познакомиться.', en: 'Nice to meet you.' } },
        { who: 'B', ko: '만나서 반갑습니다.', tr: { ru: 'Рада познакомиться.', en: 'Nice to meet you too.' } },
      ],
    },
    story: {
      title: { ru: 'Меня зовут Анна', en: 'My name is Anna' },
      sentences: [
        { ko: '안녕하세요.', tr: { ru: 'Здравствуйте.', en: 'Hello.' }, parts: [{ ko: '안녕하세요', gloss: { ru: 'здравствуйте', en: 'hello' } }] },
        { ko: '저는 안나예요.', tr: { ru: 'Я Анна.', en: 'I am Anna.' }, parts: [{ ko: '저', gloss: { ru: 'я', en: 'I' } }, { ko: '는', gloss: { ru: 'частица темы (после гласной)', en: 'topic particle (after vowel)' } }, { ko: '안나', gloss: { ru: 'Анна', en: 'Anna' } }, { ko: '예요', gloss: { ru: 'быть (после гласной)', en: 'to be (after vowel)' } }] },
        { ko: '저는 학생이에요.', tr: { ru: 'Я студентка.', en: 'I am a student.' }, parts: [{ ko: '저', gloss: { ru: 'я', en: 'I' } }, { ko: '는', gloss: { ru: 'частица темы', en: 'topic particle' } }, { ko: '학생', gloss: { ru: 'студент(ка)', en: 'student' } }, { ko: '이에요', gloss: { ru: 'быть (после согласной)', en: 'to be (after consonant)' } }] },
        { ko: '카자흐스탄 사람이에요.', tr: { ru: 'Я из Казахстана.', en: 'I am from Kazakhstan.' }, parts: [{ ko: '카자흐스탄', gloss: { ru: 'Казахстан', en: 'Kazakhstan' } }, { ko: '사람', gloss: { ru: 'человек', en: 'person' } }, { ko: '이에요', gloss: { ru: 'быть', en: 'to be' } }] },
        { ko: '만나서 반갑습니다.', tr: { ru: 'Рада познакомиться.', en: 'Nice to meet you.' }, parts: [{ ko: '만나서', gloss: { ru: 'встретившись', en: 'having met' } }, { ko: '반갑습니다', gloss: { ru: 'рад(а) (формально)', en: 'glad (formal)' } }] },
      ],
    },
  },
];

export const lessons: Lesson[] = [...base, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12];
