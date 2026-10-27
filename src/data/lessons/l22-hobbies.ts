import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l22-hobbies',
  level: 1,
  emoji: '🎧',
  title: l('Хобби и частота: 취미, 자주, 가끔', 'Hobbies and frequency: 취미, 자주, 가끔'),
  goal: l('Рассказать о хобби и о том, как часто ты что-то делаешь.', 'Talk about hobbies and how often you do things.'),
  theory: [
    {
      title: l('Хобби', 'Hobbies'),
      blocks: [
        {
          type: 'examples',
          items: [
            { ko: '취미가 뭐예요?', tr: l('Какое у вас хобби?', 'What is your hobby?') },
            { ko: '제 취미는 사진이에요.', tr: l('Моё хобби — фотография.', 'My hobby is photography.') },
            { ko: '저는 음악을 좋아해요.', tr: l('Я люблю музыку.', 'I like music.') },
          ],
        },
        {
          type: 'p',
          text: l(
            'Многие занятия образуются как **существительное + 해요**: 운동해요 «занимаюсь спортом», 산책해요 «гуляю», 쇼핑해요 «хожу по магазинам», 여행해요 «путешествую». С видами спорта и играми: 축구를 해요, 게임을 해요.',
            'Many activities are **noun + 해요**: 운동해요 "I exercise", 산책해요 "I take a walk", 쇼핑해요 "I go shopping", 여행해요 "I travel". With sports and games: 축구를 해요, 게임을 해요.',
          ),
        },
      ],
    },
    {
      title: l('Как часто?', 'How often?'),
      blocks: [
        {
          type: 'table',
          head: [l('Слово', 'Word'), l('Значение', 'Meaning')],
          rows: [
            ['항상', l('всегда', 'always')],
            ['매일', l('каждый день', 'every day')],
            ['자주', l('часто', 'often')],
            ['보통', l('обычно', 'usually')],
            ['가끔', l('иногда', 'sometimes')],
            ['거의 안', l('почти никогда', 'hardly ever')],
          ],
        },
        { type: 'tip', text: l('Наречие частоты стоит **перед глаголом**: 저는 가끔 산책해요. Сочетание «거의 안 + глагол» значит «почти никогда не…».', 'Frequency adverbs come **before the verb**: 저는 가끔 산책해요. "거의 안 + verb" means "hardly ever".') },
      ],
    },
    {
      title: l('Глаголы на ㄷ: 듣다, 걷다', 'ㄷ-irregular verbs: 듣다, 걷다'),
      blocks: [
        {
          type: 'p',
          text: l(
            'У некоторых глаголов основа на **ㄷ** меняет ㄷ на **ㄹ** перед гласным окончанием: 듣다 → **들어요** («слушаю»), 걷다 → **걸어요** («иду пешком»). Именно поэтому 걸어서 «пешком».',
            'Some verb stems ending in **ㄷ** change ㄷ to **ㄹ** before a vowel ending: 듣다 → **들어요** ("listen"), 걷다 → **걸어요** ("walk"). That is why 걸어서 means "on foot".',
          ),
        },
        { type: 'tip', text: l('Не все глаголы на ㄷ меняются: 받다 → 받아요 («получаю»), 닫다 → 닫아요 («закрываю») — правильные.', 'Not all ㄷ-verbs change: 받다 → 받아요 ("receive"), 닫다 → 닫아요 ("close") are regular.') },
      ],
    },
  ],
  vocab: [
    { ko: '취미', roman: 'chwimi', tr: l('хобби', 'hobby') },
    { ko: '운동', roman: 'undong', tr: l('спорт, зарядка', 'exercise, sport') },
    { ko: '축구', roman: 'chukgu', tr: l('футбол', 'football') },
    { ko: '농구', roman: 'nonggu', tr: l('баскетбол', 'basketball') },
    { ko: '음악', roman: 'eumak', tr: l('музыка', 'music') },
    { ko: '게임', roman: 'geim', tr: l('игра', 'game') },
    { ko: '여행', roman: 'yeohaeng', tr: l('путешествие', 'travel') },
    { ko: '사진', roman: 'sajin', tr: l('фотография', 'photo') },
    { ko: '산책', roman: 'sanchaek', tr: l('прогулка', 'walk') },
    { ko: '쇼핑', roman: 'syoping', tr: l('шопинг', 'shopping') },
    { ko: '항상', roman: 'hangsang', tr: l('всегда', 'always') },
    { ko: '매일', roman: 'maeil', tr: l('каждый день', 'every day') },
    { ko: '자주', roman: 'jaju', tr: l('часто', 'often') },
    { ko: '보통', roman: 'botong', tr: l('обычно', 'usually') },
    { ko: '가끔', roman: 'gakkeum', tr: l('иногда', 'sometimes') },
    { ko: '듣다 · 들어요', roman: 'deutda · deureoyo', tr: l('слушать', 'to listen') },
    { ko: '걷다 · 걸어요', roman: 'geotda · georeoyo', tr: l('ходить пешком', 'to walk') },
  ],
  exercises: [
    { type: 'match', prompt: l('Соедини хобби и перевод', 'Match the hobby and its meaning'), pairs: [{ ko: '축구', tr: l('футбол', 'football') }, { ko: '음악', tr: l('музыка', 'music') }, { ko: '사진', tr: l('фотография', 'photo') }, { ko: '여행', tr: l('путешествие', 'travel') }] },
    { type: 'choice', prompt: l('듣다 в вежливой форме:', 'Polite form of 듣다:'), options: ['듣어요', '들어요', '들으요'], answer: 1, why: l('ㄷ → ㄹ перед гласным окончанием.', 'ㄷ → ㄹ before a vowel ending.') },
    { type: 'choice', prompt: l('«Иногда» по-корейски:', '"Sometimes" in Korean:'), options: ['가끔', '자주', '항상'], answer: 0 },
    { type: 'cloze', sentence: '저는 ___ 음악을 들어요.', tr: l('Я каждый день слушаю музыку.', 'I listen to music every day.'), options: ['매일', '가끔', '거의'], answer: 0 },
    { type: 'tf', statement: l('거의 안 해요 значит «делаю почти каждый день».', '거의 안 해요 means "I do it almost every day".'), answer: false },
    { type: 'build', prompt: l('Собери: «Моё хобби — музыка»', 'Build: "My hobby is music"'), tokens: ['음악이에요', '취미는', '제'], answer: ['제', '취미는', '음악이에요'] },
    { type: 'write', prompt: l('Научись писать слово «прогулка»', 'Learn to write the word "walk"'), word: '산책', tr: l('прогулка', 'walk') },
    { type: 'listen', say: '축구', options: [l('футбол', 'football'), l('баскетбол', 'basketball'), l('игра', 'game')], answer: 0 },
    { type: 'write', prompt: l('Научись писать слово «хобби»', 'Learn to write the word "hobby"'), word: '취미', tr: l('хобби', 'hobby') },
  ],
  dialogue: {
    title: l('Твоё хобби', 'Your hobby'),
    lines: [
      { who: 'A', ko: '취미가 뭐예요?', tr: l('Какое у тебя хобби?', 'What is your hobby?') },
      { who: 'B', ko: '음악을 좋아해요. 매일 음악을 들어요.', tr: l('Люблю музыку. Слушаю каждый день.', 'I like music. I listen every day.') },
      { who: 'A', ko: '운동도 해요?', tr: l('Спортом тоже занимаешься?', 'Do you exercise too?') },
      { who: 'B', ko: '네, 주말에 가끔 축구를 해요.', tr: l('Да, по выходным иногда играю в футбол.', 'Yes, I sometimes play football at the weekend.') },
    ],
  },
  story: {
    title: l('Мои увлечения', 'My interests'),
    sentences: [
      { ko: '제 취미는 사진이에요.', tr: l('Моё хобби — фотография.', 'My hobby is photography.'), parts: [{ ko: '제', gloss: l('мой', 'my') }, { ko: '취미', gloss: l('хобби', 'hobby') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '사진', gloss: l('фотография', 'photo') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
      { ko: '주말에 자주 산책해요.', tr: l('По выходным часто гуляю.', 'I often take a walk at the weekend.'), parts: [{ ko: '주말', gloss: l('выходные', 'weekend') }, { ko: '에', gloss: l('частица времени', 'time particle') }, { ko: '자주', gloss: l('часто', 'often') }, { ko: '산책해요', gloss: l('гуляю', 'take a walk') }] },
      { ko: '보통 음악을 들어요.', tr: l('Обычно слушаю музыку.', 'I usually listen to music.'), parts: [{ ko: '보통', gloss: l('обычно', 'usually') }, { ko: '음악', gloss: l('музыка', 'music') }, { ko: '을', gloss: l('частица объекта', 'object particle') }, { ko: '들어요', gloss: l('слушаю (듣다)', 'listen (듣다)') }] },
      { ko: '가끔 친구하고 쇼핑해요.', tr: l('Иногда хожу с другом по магазинам.', 'Sometimes I go shopping with a friend.'), parts: [{ ko: '가끔', gloss: l('иногда', 'sometimes') }, { ko: '친구', gloss: l('друг', 'friend') }, { ko: '하고', gloss: l('вместе с', 'together with') }, { ko: '쇼핑해요', gloss: l('хожу за покупками', 'go shopping') }] },
      { ko: '여행도 좋아해요.', tr: l('И путешествовать люблю.', 'I like travelling too.'), parts: [{ ko: '여행', gloss: l('путешествия', 'travel') }, { ko: '도', gloss: l('тоже', 'also') }, { ko: '좋아해요', gloss: l('люблю', 'like') }] },
    ],
  },
};
