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
            'В корейском **две системы счёта**. Сегодня — **китайско-корейская** (일, 이, 삼…): ею считают **деньги, даты, номера телефонов, минуты, этажи**. Чистокорейская (하나, 둘…) будет в следующем уроке: ею считают предметы, людей, возраст и часы. Начнём с цифр от 1 до 10 — по три за раз.',
            'Korean has **two counting systems**. Today: **Sino-Korean** (일, 이, 삼…) for **money, dates, phone numbers, minutes, floors**. Native numbers (하나, 둘…) come in the next lesson: they count things, people, age and hours. We start with 1–10, three at a time.',
          ),
        },
      ],
    },
    {
      title: l('Ноль', 'Zero'),
      blocks: [
        { type: 'tip', text: l('0 — **영** (в счёте) или **공** (в номерах телефонов): «공일공» — 010.', '0 is **영** (counting) or **공** (in phone numbers): "공일공" is 010.') },
      ],
    },
    {
      title: l('11–19: десять + цифра', '11–19: ten + digit'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Десять — **십**. Чтобы получить 11–19, **говорим «десять и цифра»**: 11 = 십 + 일 = **십일**. Всё как в математике: 10 + 1.',
            'Ten is **십**. For 11–19 you say "ten and a digit": 11 = 십 + 일 = **십일**. Just like the arithmetic: 10 + 1.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '십일', tr: l('11 (10 + 1)', '11 (10 + 1)') },
            { ko: '십이', tr: l('12 (10 + 2)', '12 (10 + 2)') },
            { ko: '십오', tr: l('15 (10 + 5)', '15 (10 + 5)') },
            { ko: '십구', tr: l('19 (10 + 9)', '19 (10 + 9)') },
          ],
        },
      ],
    },
    {
      title: l('20–90: цифра + десять', '20–90: digit + ten'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Для круглых десятков **сначала цифра, потом 십**: 20 = 이 + 십 = **이십** («два десятка»). Перед 십 «один» не говорят: 10 — это просто 십, а не 일십.',
            'For round tens put the **digit first, then 십**: 20 = 이 + 십 = **이십** ("two tens"). You never say "one" before 십: 10 is simply 십, not 일십.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '이십', tr: l('20 (2 × 10)', '20 (2 × 10)') },
            { ko: '삼십', tr: l('30', '30') },
            { ko: '오십', tr: l('50', '50') },
            { ko: '구십', tr: l('90', '90') },
          ],
        },
      ],
    },
    {
      title: l('21–99: десятки + единицы', '21–99: tens + units'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Склей десятки и единицы: 25 = 이십 + 오 = **이십오**. Читай по частям: сначала десятки, потом единицы.',
            'Glue tens and units together: 25 = 이십 + 오 = **이십오**. Read it in parts: tens first, then units.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '이십오', tr: l('25 (20 + 5)', '25 (20 + 5)') },
            { ko: '삼십칠', tr: l('37 (30 + 7)', '37 (30 + 7)') },
            { ko: '구십구', tr: l('99 (90 + 9)', '99 (90 + 9)') },
          ],
        },
      ],
    },
    {
      title: l('Сотни, тысячи, десятки тысяч', 'Hundreds, thousands, ten-thousands'),
      blocks: [
        {
          type: 'p',
          text: l(
            'У трёх больших разрядов свои слова, и работают они так же — «цифра + слово»: 300 = 삼백, 2 000 = 이천. «Один» опять не говорят: 100 = 백.',
            'The three big places have their own words and work the same way, "digit + word": 300 = 삼백, 2,000 = 이천. Again no "one": 100 = 백.',
          ),
        },
        { type: 'table', head: [l('Число', 'Number'), '100', '1 000', '10 000'], rows: [[l('Слово', 'Word'), '백 (baek)', '천 (cheon)', '만 (man)']] },
        {
          type: 'examples',
          items: [
            { ko: '삼백', tr: l('300', '300') },
            { ko: '이천', tr: l('2 000', '2,000') },
            { ko: '오만', tr: l('50 000', '50,000') },
          ],
        },
        { type: 'tip', text: l('Корейцы считают «десятками тысяч»: 만 = 10 000. Поэтому 100 000 — это 십만 («десять по десять тысяч»), а миллион — 백만.', 'Koreans count in units of ten thousand: 만 = 10,000. So 100,000 is 십만 and one million is 백만.') },
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
    /* 0 */ { type: 'listen', say: '삼', options: [l('2', '2'), l('3', '3'), l('4', '4')], answer: 1 },
    /* 1 */ { type: 'listen', say: '팔', options: [l('6', '6'), l('7', '7'), l('8', '8')], answer: 2 },
    /* 2 */ { type: 'listen', say: '십삼', options: [l('13', '13'), l('31', '31'), l('30', '30')], answer: 0 },
    /* 3 */ { type: 'choice', prompt: l('Как читается 12?', 'How do you read 12?'), options: ['십이', '이십', '십일'], answer: 0, why: l('12 = 10 + 2 → 십 + 이.', '12 = 10 + 2 → 십 + 이.') },
    /* 4 */ { type: 'choice', prompt: l('Как читается 15?', 'How do you read 15?'), options: ['십오', '오십', '십육'], answer: 0 },
    /* 5 */ { type: 'build', prompt: l('Собери число 17 (10 + 7)', 'Build the number 17 (10 + 7)'), tokens: ['칠', '십'], answer: ['십', '칠'] },
    /* 6 */ { type: 'choice', prompt: l('Как сказать 30?', 'How do you say 30?'), options: ['삼십', '십삼', '삼백'], answer: 0, why: l('Круглые десятки: цифра + 십. 십삼 — это 13.', 'Round tens: digit + 십. 십삼 is 13.') },
    /* 7 */ { type: 'choice', prompt: l('Как сказать 50?', 'How do you say 50?'), options: ['오십', '십오', '오백'], answer: 0 },
    /* 8 */ { type: 'listen', say: '사십', options: [l('14', '14'), l('40', '40'), l('4', '4')], answer: 1 },
    /* 9 */ { type: 'match', prompt: l('Соедини число и слово', 'Match the number and the word'), pairs: [{ ko: '이십', tr: '20' }, { ko: '삼십', tr: '30' }, { ko: '사십', tr: '40' }, { ko: '육십', tr: '60' }] },
    /* 10 */ { type: 'choice', prompt: l('Сколько будет 25?', 'How do you say 25?'), options: ['이십오', '오십이', '이오십'], answer: 0, why: l('Десятки: 2 + 십 = 이십, потом единицы: 오.', 'Tens: 2 + 십 = 이십, then units: 오.') },
    /* 11 */ { type: 'build', prompt: l('Собери число 37', 'Build the number 37'), tokens: ['칠', '삼십'], answer: ['삼십', '칠'] },
    /* 12 */ { type: 'choice', prompt: l('Как читается 99?', 'How do you read 99?'), options: ['구십구', '구구십', '십구구'], answer: 0 },
    /* 13 */ { type: 'match', prompt: l('Соедини слово и число', 'Match the word and the number'), pairs: [{ ko: '백', tr: '100' }, { ko: '천', tr: '1 000' }, { ko: '만', tr: '10 000' }] },
    /* 14 */ { type: 'choice', prompt: l('삼백 — это…', '삼백 is…'), options: ['30', '300', '3 000'], answer: 1 },
    /* 15 */ { type: 'choice', prompt: l('이천 — это…', '이천 is…'), options: ['200', '2 000', '20 000'], answer: 1 },
    /* 16 */ { type: 'choice', prompt: l('오만 — это…', '오만 is…'), options: ['5 000', '50 000', '500'], answer: 1, why: l('만 = 10 000, значит 5 × 10 000.', '만 = 10,000, so 5 × 10,000.') },
    /* 17 */ { type: 'write', prompt: l('Научись писать число 7', 'Learn to write the number 7'), word: '칠', tr: l('семь', 'seven') },
    /* 18 */ { type: 'write', prompt: l('И число 3000', 'And the number 3,000'), word: '삼천', tr: l('три тысячи', 'three thousand') },
    /* 19 */ { type: 'build', prompt: l('Собери: «5 000 вон»', 'Build: "5,000 won"'), tokens: ['원', '오천'], answer: ['오천', '원'] },
    /* 20 */ { type: 'build', prompt: l('Собери: «Сколько это стоит?»', 'Build: "How much is this?"'), tokens: ['얼마예요?', '이거'], answer: ['이거', '얼마예요?'] },
    /* 21 */ { type: 'choice', prompt: l('Какие числа нужны для цен?', 'Which numbers are used for prices?'), options: [l('Китайско-корейские (일, 이, 삼)', 'Sino-Korean (일, 이, 삼)'), l('Чистокорейские (하나, 둘)', 'Native (하나, 둘)')], answer: 0 },
    /* 22 */ { type: 'write', prompt: l('Научись писать «10 000 вон»', 'Learn to write "10,000 won"'), word: '만원', tr: l('10 000 вон', '10,000 won') },
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
