import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l24-phrases',
  level: 1,
  emoji: '🎁',
  title: l('Живые фразы и этикет', 'Everyday phrases and etiquette'),
  goal: l('Использовать готовые фразы и понимать, когда говорить вежливо.', 'Use set phrases and know when to be formal.'),
  theory: [
    {
      title: l('Фразы на каждый день', 'Everyday phrases'),
      blocks: [
        {
          type: 'table',
          head: [l('Фраза', 'Phrase'), l('Значение', 'Meaning')],
          rows: [
            ['어서 오세요', l('добро пожаловать (говорят в магазине, кафе)', 'welcome (said in shops and cafés)')],
            ['잘 지내요?', l('как дела? / живёте хорошо?', 'how are you?')],
            ['네, 잘 지내요', l('да, хорошо', "I'm fine")],
            ['오랜만이에요', l('давно не виделись', 'long time no see')],
            ['또 만나요', l('увидимся ещё', 'see you again')],
            ['고마워요', l('спасибо (мягко, между знакомыми)', 'thanks (softer)')],
            ['미안해요', l('извини (мягко, между знакомыми)', "I'm sorry (softer)")],
            ['축하해요', l('поздравляю', 'congratulations')],
            ['생일 축하해요', l('с днём рождения', 'happy birthday')],
          ],
        },
      ],
    },
    {
      title: l('Вежливость: 존댓말 и 반말', 'Politeness levels: 존댓말 and 반말'),
      blocks: [
        {
          type: 'p',
          text: l(
            '**존댓말** — вежливая речь (-요, -습니다, -(으)세요). Её используют с незнакомыми, старшими, учителями, клиентами. **반말** — разговорная речь с близкими ровесниками и младшими. Новичкам лучше всегда говорить на **-요**.',
            '**존댓말** is polite speech (-요, -습니다, -(으)세요), used with strangers, elders, teachers, customers. **반말** is casual speech with close friends of the same age and younger people. Beginners should stay with **-요**.',
          ),
        },
        {
          type: 'p',
          text: l(
            'К имени ровесника или коллеги прибавляют **씨**: 안나 씨. К учителю — только **선생님**: «선생님 씨» сказать нельзя. Корейцы часто спрашивают возраст, чтобы выбрать правильную форму обращения: это не бестактность.',
            'Add **씨** to the name of a peer or colleague: 안나 씨. For a teacher use **선생님** only: "선생님 씨" is wrong. Koreans often ask your age to choose the right way to address you: it is not rude.',
          ),
        },
      ],
    },
    {
      title: l('Чек-лист уровня A1', 'A1 checklist'),
      blocks: [
        {
          type: 'p',
          text: l('Теперь ты можешь выполнить все эти задачи. Если какая-то вызывает сомнения — вернись к уроку.', 'You can now do all of these tasks. If one feels shaky, go back to its lesson.'),
        },
        {
          type: 'examples',
          items: [
            { ko: '저는 안나예요. 카자흐스탄에서 왔어요.', tr: l('Представиться и сказать, откуда ты (урок 2, 12).', 'Introduce yourself and say where you are from (lessons 2, 12).') },
            { ko: '이거 얼마예요?', tr: l('Спросить цену (урок 3).', 'Ask a price (lesson 3).') },
            { ko: '커피 한 잔 주세요.', tr: l('Заказать еду и напитки (урок 15).', 'Order food and drinks (lesson 15).') },
            { ko: '지금 세 시예요.', tr: l('Назвать время и день (уроки 4, 8, 16).', 'Tell the time and day (lessons 4, 8, 16).') },
            { ko: '버스로 학교에 가요.', tr: l('Рассказать, как добираешься (урок 17).', 'Say how you travel (lesson 17).') },
            { ko: '머리가 아파요.', tr: l('Сказать, что болит (урок 19).', 'Say what hurts (lesson 19).') },
          ],
        },
      ],
    },
  ],
  vocab: [
    { ko: '어서 오세요', roman: 'eoseo oseyo', tr: l('добро пожаловать', 'welcome') },
    { ko: '잘 지내요?', roman: 'jal jinaeyo', tr: l('как дела?', 'how are you?') },
    { ko: '오랜만이에요', roman: 'oraenmanieyo', tr: l('давно не виделись', 'long time no see') },
    { ko: '또 만나요', roman: 'tto mannayo', tr: l('увидимся ещё', 'see you again') },
    { ko: '고마워요', roman: 'gomawoyo', tr: l('спасибо (мягко)', 'thanks (soft)') },
    { ko: '미안해요', roman: 'mianhaeyo', tr: l('извини (мягко)', 'sorry (soft)') },
    { ko: '축하해요', roman: 'chukahaeyo', tr: l('поздравляю', 'congratulations') },
    { ko: '생일 축하해요', roman: 'saengil chukahaeyo', tr: l('с днём рождения', 'happy birthday') },
    { ko: '씨', roman: 'ssi', tr: l('суффикс вежливости после имени', 'polite title after a name') },
    { ko: '존댓말', roman: 'jondaetmal', tr: l('вежливая речь', 'polite speech') },
    { ko: '반말', roman: 'banmal', tr: l('разговорная речь', 'casual speech') },
  ],
  exercises: [
    { type: 'match', prompt: l('Соедини фразу и перевод', 'Match the phrase and its meaning'), pairs: [{ ko: '어서 오세요', tr: l('добро пожаловать', 'welcome') }, { ko: '오랜만이에요', tr: l('давно не виделись', 'long time no see') }, { ko: '축하해요', tr: l('поздравляю', 'congratulations') }, { ko: '고마워요', tr: l('спасибо', 'thanks') }] },
    { type: 'choice', prompt: l('Друг отмечает день рождения. Что сказать?', "It's your friend's birthday. What do you say?"), options: ['생일 축하해요', '오랜만이에요', '어서 오세요'], answer: 0 },
    { type: 'choice', prompt: l('Вы встретили знакомого после долгой разлуки:', 'You meet an acquaintance after a long time:'), options: ['오랜만이에요', '미안해요', '축하해요'], answer: 0 },
    { type: 'cloze', sentence: '안나 ___, 안녕하세요!', tr: l('Анна, здравствуйте!', 'Hello, Anna!'), options: ['씨', '는', '이에요'], answer: 0 },
    { type: 'tf', statement: l('К слову 선생님 можно добавить 씨: 선생님 씨.', 'You can add 씨 to 선생님: 선생님 씨.'), answer: false, why: l('선생님 уже уважительное слово, 씨 не нужен.', '선생님 is already respectful, so no 씨.') },
    { type: 'choice', prompt: l('Какая речь безопаснее всего для новичка?', 'Which speech style is safest for a beginner?'), options: [l('반말', '반말'), l('존댓말 (-요)', '존댓말 (-요)')], answer: 1 },
    { type: 'build', prompt: l('Собери: «Давно не виделись. Как дела?»', 'Build: "Long time no see. How are you?"'), tokens: ['잘 지내요?', '오랜만이에요.'], answer: ['오랜만이에요.', '잘 지내요?'] },
    { type: 'write', prompt: l('Научись писать слово «вежливая речь»', 'Learn to write the word "polite speech"'), word: '존댓말', tr: l('вежливая речь', 'polite speech') },
    { type: 'listen', say: '미안해요', options: [l('извини', "I'm sorry"), l('спасибо', 'thanks'), l('до встречи', 'see you')], answer: 0 },
    { type: 'write', prompt: l('Научись писать слово «разговорная речь»', 'Learn to write the word "casual speech"'), word: '반말', tr: l('разговорная речь', 'casual speech') },
  ],
  dialogue: {
    title: l('Встреча знакомых', 'Meeting an acquaintance'),
    lines: [
      { who: 'A', ko: '안녕하세요, 안나 씨! 오랜만이에요.', tr: l('Здравствуйте, Анна! Давно не виделись.', 'Hello, Anna! Long time no see.') },
      { who: 'B', ko: '안녕하세요! 잘 지내요?', tr: l('Здравствуйте! Как дела?', 'Hello! How are you?') },
      { who: 'A', ko: '네, 잘 지내요. 안나 씨도 잘 지내요?', tr: l('Хорошо. А у вас?', "I'm fine. And you?") },
      { who: 'B', ko: '네, 잘 지내요. 또 만나요!', tr: l('Хорошо. До встречи!', "I'm fine. See you again!") },
      { who: 'A', ko: '네, 안녕히 가세요.', tr: l('Да, до свидания.', 'Yes, goodbye.') },
    ],
  },
  story: {
    title: l('Мой день рождения', 'My birthday'),
    sentences: [
      { ko: '오늘은 제 생일이에요.', tr: l('Сегодня мой день рождения.', "Today is my birthday."), parts: [{ ko: '오늘', gloss: l('сегодня', 'today') }, { ko: '은', gloss: l('частица темы', 'topic particle') }, { ko: '제', gloss: l('мой', 'my') }, { ko: '생일', gloss: l('день рождения', 'birthday') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
      { ko: '친구가 많이 와요.', tr: l('Придёт много друзей.', 'Many friends are coming.'), parts: [{ ko: '친구', gloss: l('друг', 'friend') }, { ko: '가', gloss: l('частица подлежащего', 'subject particle') }, { ko: '많이', gloss: l('много', 'many') }, { ko: '와요', gloss: l('приходит', 'come') }] },
      { ko: '저는 불고기를 요리해요.', tr: l('Я готовлю пулькоги.', 'I cook bulgogi.'), parts: [{ ko: '저', gloss: l('я', 'I') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '불고기', gloss: l('пулькоги', 'bulgogi') }, { ko: '를', gloss: l('частица объекта', 'object particle') }, { ko: '요리해요', gloss: l('готовлю', 'cook') }] },
      { ko: '우리는 노래를 해요.', tr: l('Мы поём.', 'We sing.'), parts: [{ ko: '우리', gloss: l('мы', 'we') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '노래', gloss: l('песня', 'song') }, { ko: '를', gloss: l('частица объекта', 'object particle') }, { ko: '해요', gloss: l('делаем', 'do') }] },
      { ko: '정말 행복해요.', tr: l('Я так счастлив(а).', 'I am really happy.'), parts: [{ ko: '정말', gloss: l('действительно', 'really') }, { ko: '행복해요', gloss: l('счастлив(а)', 'happy') }] },
    ],
  },
};
