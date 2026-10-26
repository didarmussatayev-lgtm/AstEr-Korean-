import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l3-numbers-sino',
  level: 1,
  emoji: '💴',
  title: l('Числа 1: цены, даты, телефоны', 'Numbers 1: prices, dates, phones'),
  goal: l('Считать до 99 и дальше китайско-корейскими числами и спросить цену.', 'Count with Sino-Korean numbers and ask a price.'),
  theory: [
    {
      title: l('В корейском две системы чисел', 'Korean has two number systems'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Сегодня — **китайско-корейские** числа (일, 이, 삼…). Они нужны для **денег, дат, номеров телефонов, минут, этажей**. Чистокорейские числа (하나, 둘…) будут в следующем уроке: они нужны для счёта предметов, людей, возраста и часов.',
            'Today: **Sino-Korean** numbers (일, 이, 삼…). Use them for **money, dates, phone numbers, minutes, floors**. Native numbers (하나, 둘…) come in the next lesson: they count things, people, age and hours.',
          ),
        },
        {
          type: 'table',
          head: ['1', '2', '3', '4', '5'],
          rows: [['일', '이', '삼', '사', '오'], ['il', 'i', 'sam', 'sa', 'o']],
        },
        {
          type: 'table',
          head: ['6', '7', '8', '9', '10'],
          rows: [['육', '칠', '팔', '구', '십'], ['yuk', 'chil', 'pal', 'gu', 'sip']],
        },
        { type: 'tip', text: l('0 — 영 (в счёте) или 공 (в телефонных номерах).', '0 is 영 (counting) or 공 (in phone numbers).') },
      ],
    },
    {
      title: l('Как строятся большие числа', 'Building bigger numbers'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Всё как в математике: **десятки = цифра + 십**, дальше прибавляются единицы. Единицу перед 십, 백, 천 не говорят.',
            'It works like arithmetic: **tens = digit + 십**, then add the units. You do not say "one" before 십, 백, 천.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '십이', tr: l('12 (10 + 2)', '12 (10 + 2)') },
            { ko: '이십오', tr: l('25 (2×10 + 5)', '25 (2×10 + 5)') },
            { ko: '구십구', tr: l('99', '99') },
            { ko: '백', tr: l('100 (не 일백)', '100 (not 일백)') },
            { ko: '삼천', tr: l('3 000', '3,000') },
            { ko: '오만 원', tr: l('50 000 вон', '50,000 won') },
          ],
        },
        {
          type: 'table',
          head: [l('Число', 'Number'), '100', '1 000', '10 000'],
          rows: [[l('Слово', 'Word'), '백 (baek)', '천 (cheon)', '만 (man)']],
        },
        { type: 'tip', text: l('Для корейцев счёт идёт «десятками тысяч»: 만 = 10 000. Поэтому 100 000 — это 십만, а миллион — 백만.', 'Koreans count in units of ten thousand: 만 = 10,000. So 100,000 is 십만 and one million is 백만.') },
      ],
    },
    {
      title: l('Цена: 얼마예요?', 'Prices: 얼마예요?'),
      blocks: [
        {
          type: 'p',
          text: l('Число + **원** (вона). Вопрос «сколько стоит?» — **얼마예요?**', 'Number + **원** (won). "How much is it?" is **얼마예요?**'),
        },
        {
          type: 'examples',
          items: [
            { ko: '이거 얼마예요?', tr: l('Сколько это стоит?', 'How much is this?') },
            { ko: '삼천 원이에요.', tr: l('3 000 вон.', "It's 3,000 won.") },
          ],
        },
        { type: 'tip', text: l('원 заканчивается на согласную, поэтому дальше идёт 이에요: 삼천 원이에요.', '원 ends in a consonant, so it is followed by 이에요: 삼천 원이에요.') },
      ],
    },
  ],
  vocab: [
    { ko: '일', roman: 'il', tr: l('один (1)', 'one (1)') },
    { ko: '이', roman: 'i', tr: l('два (2)', 'two (2)') },
    { ko: '삼', roman: 'sam', tr: l('три (3)', 'three (3)') },
    { ko: '사', roman: 'sa', tr: l('четыре (4)', 'four (4)') },
    { ko: '오', roman: 'o', tr: l('пять (5)', 'five (5)') },
    { ko: '육', roman: 'yuk', tr: l('шесть (6)', 'six (6)') },
    { ko: '칠', roman: 'chil', tr: l('семь (7)', 'seven (7)') },
    { ko: '팔', roman: 'pal', tr: l('восемь (8)', 'eight (8)') },
    { ko: '구', roman: 'gu', tr: l('девять (9)', 'nine (9)') },
    { ko: '십', roman: 'sip', tr: l('десять (10)', 'ten (10)') },
    { ko: '백', roman: 'baek', tr: l('сто (100)', 'hundred (100)') },
    { ko: '천', roman: 'cheon', tr: l('тысяча (1 000)', 'thousand (1,000)') },
    { ko: '만', roman: 'man', tr: l('десять тысяч (10 000)', 'ten thousand (10,000)') },
    { ko: '원', roman: 'won', tr: l('вона (деньги)', 'won (currency)') },
    { ko: '이거', roman: 'igeo', tr: l('это (вещь рядом)', 'this (thing)') },
    { ko: '얼마예요?', roman: 'eolmayeyo', tr: l('сколько стоит?', 'how much is it?') },
  ],
  exercises: [
    { type: 'listen', say: '삼', options: [l('2', '2'), l('3', '3'), l('4', '4')], answer: 1 },
    { type: 'listen', say: '팔', options: [l('6', '6'), l('7', '7'), l('8', '8')], answer: 2 },
    { type: 'choice', prompt: l('Сколько будет 25?', 'How do you say 25?'), options: ['이십오', '오십이', '이오십'], answer: 0, why: l('Десятки: 2 + 십 = 이십, потом единицы: 오.', 'Tens: 2 + 십 = 이십, then units: 오.') },
    { type: 'choice', prompt: l('Какие числа нужны для цен?', 'Which numbers are used for prices?'), options: [l('Китайско-корейские (일, 이, 삼)', 'Sino-Korean (일, 이, 삼)'), l('Чистокорейские (하나, 둘)', 'Native (하나, 둘)')], answer: 0 },
    { type: 'choice', prompt: l('삼백 — это…', '삼백 is…'), options: ['30', '300', '3 000'], answer: 1 },
    { type: 'type', prompt: l('Напиши по-корейски цифру 7', 'Write the number 7 in Korean'), answers: ['칠'] },
    { type: 'build', prompt: l('Собери: «5 000 вон»', 'Build: "5,000 won"'), tokens: ['원', '오천'], answer: ['오천', '원'] },
    { type: 'build', prompt: l('Собери: «Сколько это стоит?»', 'Build: "How much is this?"'), tokens: ['얼마예요?', '이거'], answer: ['이거', '얼마예요?'] },
    { type: 'type', prompt: l('Напиши: «10 000 вон» (по-корейски, словами)', 'Write "10,000 won" in Korean words'), answers: ['만 원', '만원'] },
  ],
  dialogue: {
    title: l('В магазине', 'At the shop'),
    lines: [
      { who: 'A', ko: '이거 얼마예요?', tr: l('Сколько это стоит?', 'How much is this?') },
      { who: 'B', ko: '삼천 원이에요.', tr: l('3 000 вон.', "It's 3,000 won.") },
      { who: 'A', ko: '그거는 얼마예요?', tr: l('А то?', 'And that one?') },
      { who: 'B', ko: '오천 원이에요.', tr: l('5 000 вон.', "It's 5,000 won.") },
      { who: 'A', ko: '감사합니다.', tr: l('Спасибо.', 'Thank you.') },
    ],
  },
  story: {
    title: l('На рынке', 'At the market'),
    sentences: [
      { ko: '사과는 이천 원이에요.', tr: l('Яблоко стоит 2 000 вон.', 'The apple is 2,000 won.'), parts: [{ ko: '사과', gloss: l('яблоко', 'apple') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '이천', gloss: l('2 000', '2,000') }, { ko: '원', gloss: l('вона', 'won') }, { ko: '이에요', gloss: l('быть (после согласной)', 'to be (after consonant)') }] },
      { ko: '바나나는 삼천 원이에요.', tr: l('Банан стоит 3 000 вон.', 'The banana is 3,000 won.'), parts: [{ ko: '바나나', gloss: l('банан', 'banana') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '삼천', gloss: l('3 000', '3,000') }, { ko: '원', gloss: l('вона', 'won') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
      { ko: '모두 오천 원이에요.', tr: l('Всего 5 000 вон.', 'Five thousand won in total.'), parts: [{ ko: '모두', gloss: l('всего, всё вместе', 'in total') }, { ko: '오천', gloss: l('5 000', '5,000') }, { ko: '원', gloss: l('вона', 'won') }, { ko: '이에요', gloss: l('быть', 'to be') }] },
    ],
  },
};
