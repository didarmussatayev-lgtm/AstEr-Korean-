import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l19-health',
  level: 1,
  emoji: '🩺',
  title: l('Тело, здоровье и самочувствие', 'Body, health and feelings'),
  goal: l('Сказать, что болит, и описать, как ты себя чувствуешь.', 'Say what hurts and describe how you feel.'),
  theory: [
    {
      title: l('Части тела и 아파요', 'Body parts and 아파요'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Что болит — подлежащее с **이/가**, затем **아파요** («болит», от 아프다 — основа на ㅡ, как 크다). Спросить: **어디가 아파요?**',
            'The sore part is the subject with **이/가**, followed by **아파요** ("hurts", from 아프다 — a ㅡ-stem like 크다). To ask: **어디가 아파요?**',
          ),
        },
        {
          type: 'table',
          head: [l('Слово', 'Word'), l('Значение', 'Meaning')],
          rows: [
            ['머리', l('голова', 'head')],
            ['배', l('живот', 'stomach')],
            ['목', l('горло, шея', 'throat, neck')],
            ['팔', l('рука (от плеча)', 'arm')],
            ['손', l('кисть, рука', 'hand')],
            ['다리', l('нога', 'leg')],
          ],
        },
        {
          type: 'examples',
          items: [
            { ko: '어디가 아파요?', tr: l('Где болит?', 'Where does it hurt?') },
            { ko: '머리가 아파요.', tr: l('У меня болит голова.', 'I have a headache.') },
            { ko: '배가 아파요.', tr: l('У меня болит живот.', 'I have a stomachache.') },
          ],
        },
      ],
    },
    {
      title: l('Чувства и состояние', 'Feelings and states'),
      blocks: [
        {
          type: 'table',
          head: [l('Словарная форма', 'Dictionary form'), l('Вежливая форма', 'Polite form'), l('Значение', 'Meaning')],
          rows: [
            ['피곤하다', '피곤해요', l('устал(а)', 'tired')],
            ['배고프다', '배고파요', l('голоден', 'hungry')],
            ['졸리다', '졸려요', l('хочется спать', 'sleepy')],
            ['슬프다', '슬퍼요', l('грустно', 'sad')],
            ['행복하다', '행복해요', l('счастлив(а)', 'happy')],
          ],
        },
        { type: 'tip', text: l('Для чувств часто говорят о себе в третьем лице-подобной форме: 저는 피곤해요 — «я устал». Подлежащее «я» можно опускать.', 'Feelings are stated plainly: 저는 피곤해요 "I am tired". You can drop 저는 when the subject is clear.') },
      ],
    },
    {
      title: l('У врача', 'At the doctor'),
      blocks: [
        {
          type: 'examples',
          items: [
            { ko: '감기에 걸렸어요.', tr: l('Я простудился.', 'I caught a cold.') },
            { ko: '병원에 가요.', tr: l('Иду в больницу.', 'I go to the hospital.') },
            { ko: '약을 먹어요.', tr: l('Принимаю лекарство.', 'I take medicine.') },
            { ko: '집에서 쉬어요.', tr: l('Отдыхаю дома.', 'I rest at home.') },
          ],
        },
      ],
    },
  ],
  vocab: [
    { ko: '머리', roman: 'meori', tr: l('голова', 'head') },
    { ko: '배', roman: 'bae', tr: l('живот', 'stomach') },
    { ko: '목', roman: 'mok', tr: l('горло, шея', 'throat, neck') },
    { ko: '팔', roman: 'pal', tr: l('рука', 'arm') },
    { ko: '손', roman: 'son', tr: l('кисть', 'hand') },
    { ko: '다리', roman: 'dari', tr: l('нога', 'leg') },
    { ko: '아파요', roman: 'apayo', tr: l('болит (아프다)', 'hurts (아프다)') },
    { ko: '병원', roman: 'byeongwon', tr: l('больница', 'hospital') },
    { ko: '약', roman: 'yak', tr: l('лекарство', 'medicine') },
    { ko: '감기', roman: 'gamgi', tr: l('простуда', 'a cold') },
    { ko: '피곤해요', roman: 'pigonhaeyo', tr: l('устал(а)', 'tired') },
    { ko: '배고파요', roman: 'baegopayo', tr: l('голоден', 'hungry') },
    { ko: '졸려요', roman: 'jollyeoyo', tr: l('хочется спать', 'sleepy') },
    { ko: '슬퍼요', roman: 'seulpeoyo', tr: l('грустно', 'sad') },
    { ko: '행복해요', roman: 'haengbokhaeyo', tr: l('счастлив(а)', 'happy') },
    { ko: '쉬어요', roman: 'swieoyo', tr: l('отдыхаю (쉬다)', 'rest (쉬다)') },
    { ko: '많이', roman: 'mani', tr: l('много, сильно', 'a lot') },
  ],
  exercises: [
    { type: 'match', prompt: l('Соедини часть тела и перевод', 'Match the body part and its meaning'), pairs: [{ ko: '머리', tr: l('голова', 'head') }, { ko: '배', tr: l('живот', 'stomach') }, { ko: '목', tr: l('горло', 'throat') }, { ko: '다리', tr: l('нога', 'leg') }] },
    { type: 'choice', prompt: l('아프다 в вежливой форме:', 'Polite form of 아프다:'), options: ['아프어요', '아파요', '아풔요'], answer: 1, why: l('ㅡ выпадает, перед ним ㅏ → 아요.', 'ㅡ drops and ㅏ before it gives 아요.') },
    { type: 'choice', prompt: l('배고프다 в вежливой форме:', 'Polite form of 배고프다:'), options: ['배고프어요', '배고파요', '배고퍼요'], answer: 1 },
    { type: 'cloze', sentence: '머리___ 아파요.', tr: l('У меня болит голова.', 'I have a headache.'), options: ['가', '를', '에서'], answer: 0 },
    { type: 'cloze', sentence: '어디가 ___?', tr: l('Где болит?', 'Where does it hurt?'), options: ['아파요', '피곤해요', '맛있어요'], answer: 0 },
    { type: 'tf', statement: l('피곤해요 значит «Я голоден».', '피곤해요 means "I am hungry".'), answer: false },
    { type: 'build', prompt: l('Собери: «Я простудился»', 'Build: "I caught a cold"'), tokens: ['걸렸어요', '감기에'], answer: ['감기에', '걸렸어요'] },
    { type: 'type', prompt: l('Напиши: «У меня болит голова»', 'Write: "I have a headache"'), answers: ['머리가 아파요', '저는 머리가 아파요'] },
    { type: 'listen', say: '약', options: [l('лекарство', 'medicine'), l('больница', 'hospital'), l('простуда', 'a cold')], answer: 0 },
    { type: 'dictation', say: '병원', answers: ['병원'] },
  ],
  dialogue: {
    title: l('Что случилось?', 'What happened?'),
    lines: [
      { who: 'A', ko: '어디가 아파요?', tr: l('Где болит?', 'Where does it hurt?') },
      { who: 'B', ko: '머리가 아파요. 감기에 걸렸어요.', tr: l('Голова болит. Я простудился.', 'My head hurts. I caught a cold.') },
      { who: 'A', ko: '병원에 가요?', tr: l('Пойдёшь в больницу?', 'Will you go to the hospital?') },
      { who: 'B', ko: '네, 병원에 가요. 약도 먹어요.', tr: l('Да, пойду. И лекарство приму.', "Yes, I will. I'll take medicine too.") },
    ],
  },
  story: {
    title: l('Плохой день', 'A bad day'),
    sentences: [
      { ko: '오늘 저는 많이 피곤해요.', tr: l('Сегодня я очень устал.', 'Today I am very tired.'), parts: [{ ko: '오늘', gloss: l('сегодня', 'today') }, { ko: '저', gloss: l('я', 'I') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '많이', gloss: l('сильно', 'a lot') }, { ko: '피곤해요', gloss: l('устал(а)', 'tired') }] },
      { ko: '머리도 아파요.', tr: l('И голова болит.', 'My head hurts too.'), parts: [{ ko: '머리', gloss: l('голова', 'head') }, { ko: '도', gloss: l('тоже', 'also') }, { ko: '아파요', gloss: l('болит', 'hurts') }] },
      { ko: '병원에 가요.', tr: l('Иду в больницу.', 'I go to the hospital.'), parts: [{ ko: '병원', gloss: l('больница', 'hospital') }, { ko: '에', gloss: l('частица направления', 'destination particle') }, { ko: '가요', gloss: l('иду', 'go') }] },
      { ko: '약을 먹어요.', tr: l('Принимаю лекарство.', 'I take medicine.'), parts: [{ ko: '약', gloss: l('лекарство', 'medicine') }, { ko: '을', gloss: l('частица объекта', 'object particle') }, { ko: '먹어요', gloss: l('принимаю, ем', 'take, eat') }] },
      { ko: '집에서 쉬어요.', tr: l('Дома отдыхаю.', 'I rest at home.'), parts: [{ ko: '집', gloss: l('дом', 'home') }, { ko: '에서', gloss: l('частица места действия', 'place-of-action particle') }, { ko: '쉬어요', gloss: l('отдыхаю', 'rest') }] },
    ],
  },
};
