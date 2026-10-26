import type { Letter } from '../lib/types';

const v = (
  ch: string, roman: string, ru: string, en: string, mru: string, men: string,
  ko: string, wr: string, wru: string, wen: string,
): Letter => ({
  ch, roman, kind: 'vowel',
  sound: { ru, en }, mnemonic: { ru: mru, en: men },
  word: { ko, roman: wr, tr: { ru: wru, en: wen } },
});
const c = (
  ch: string, roman: string, ru: string, en: string, mru: string, men: string,
  ko: string, wr: string, wru: string, wen: string,
): Letter => ({
  ch, roman, kind: 'consonant',
  sound: { ru, en }, mnemonic: { ru: mru, en: men },
  word: { ko, roman: wr, tr: { ru: wru, en: wen } },
});

export const vowels: Letter[] = [
  v('ㅏ', 'a', 'а', 'a as in "father"', 'Палочка, «рука» справа от ствола: открываем рот — «а».', 'Short stick on the right of the stem: mouth open — "ah".', '아이', 'ai', 'ребёнок', 'child'),
  v('ㅑ', 'ya', 'я', 'ya', 'Как ㅏ, но с двумя «ветками» — добавляется «й».', 'Like ㅏ with two strokes: adds a "y".', '야구', 'yagu', 'бейсбол', 'baseball'),
  v('ㅓ', 'eo', 'о (открытое: рот шире, чем в обычном «о»)', 'open o, like "u" in "sun" but rounder', 'Палочка слева. Звук ближе к «о» с широко открытым ртом.', 'Stick on the left. A relaxed open "o".', '어머니', 'eomeoni', 'мама', 'mother'),
  v('ㅕ', 'yeo', 'ё (йо открытое)', 'yo (open)', 'Как ㅓ с двумя штрихами: добавляется «й».', 'ㅓ with two strokes: adds a "y".', '여자', 'yeoja', 'женщина', 'woman'),
  v('ㅗ', 'o', 'о', 'o as in "go"', 'Палочка вверх, как росток над землёй: губы округляем — «о».', 'Stick pointing up, like a sprout: round lips — "oh".', '오이', 'oi', 'огурец', 'cucumber'),
  v('ㅛ', 'yo', 'ё', 'yo', 'Как ㅗ, но два ростка: «йо».', 'Two sprouts: "yo".', '요리', 'yori', 'готовка', 'cooking'),
  v('ㅜ', 'u', 'у', 'oo as in "moon"', 'Палочка вниз, как корень: губы трубочкой — «у».', 'Stick pointing down like a root: lips forward — "oo".', '우유', 'uyu', 'молоко', 'milk'),
  v('ㅠ', 'yu', 'ю', 'yu', 'Два корня: «ю».', 'Two roots: "yoo".', '유리', 'yuri', 'стекло', 'glass'),
  v('ㅡ', 'eu', 'ы (губы растянуты, без округления)', 'like "u" in "put" with spread lips', 'Ровная земля. Улыбнись и скажи «ы».', 'Flat ground. Smile and say a flat "uh".', '크다', 'keuda', 'большой', 'big'),
  v('ㅣ', 'i', 'и', 'ee as in "see"', 'Человек стоит прямо: «и».', 'A person standing straight: "ee".', '이', 'i', 'зуб', 'tooth'),
];

export const consonants: Letter[] = [
  c('ㄱ', 'g / k', 'г/к (между «г» и «к»)', 'g / k', 'Угол, как буква «Г».', 'An angle, like the letter Γ.', '가수', 'gasu', 'певец', 'singer'),
  c('ㄴ', 'n', 'н', 'n', 'Похожа на «нос» на профиле: «н».', 'A bent stroke: "n".', '나무', 'namu', 'дерево', 'tree'),
  c('ㄷ', 'd / t', 'д/т', 'd / t', 'Как ㄴ, только с «крышей»: «д».', 'ㄴ with a lid on top: "d".', '다리', 'dari', 'нога / мост', 'leg / bridge'),
  c('ㄹ', 'r / l', 'р/л (лёгкий, как между «р» и «л»)', 'r / l (a flap)', 'Зигзаг дороги: «р» — «л».', 'A zigzag road: "r" / "l".', '라디오', 'radio', 'радио', 'radio'),
  c('ㅁ', 'm', 'м', 'm', 'Квадратный рот, который закрыт: «м».', 'A closed square mouth: "m".', '모자', 'moja', 'шапка', 'hat'),
  c('ㅂ', 'b / p', 'б/п', 'b / p', 'Ведро с ручками: «б».', 'A bucket: "b".', '바다', 'bada', 'море', 'sea'),
  c('ㅅ', 's', 'с', 's', 'Крыша шалаша: «с».', 'A little tent: "s".', '사과', 'sagwa', 'яблоко', 'apple'),
  c('ㅇ', '– / ng', 'в начале слога — молчит; в конце — «нг»', 'silent at the start; "ng" at the end', 'Круглый ноль: ничего не звучит.', 'A zero: silent at the start of a syllable.', '오리', 'ori', 'утка', 'duck'),
  c('ㅈ', 'j', 'дж (мягкое, как «ч» со звоном)', 'j', 'ㅅ с «крышей»: «дж».', 'ㅅ with a roof: "j".', '지도', 'jido', 'карта', 'map'),
  c('ㅊ', 'ch', 'ч (с придыханием)', 'ch (aspirated)', 'ㅈ с «шапочкой»: сильное «ч».', 'ㅈ with a hat: strong "ch".', '차', 'cha', 'чай / машина', 'tea / car'),
  c('ㅋ', 'k', 'к (с придыханием)', 'k (aspirated)', 'ㄱ с лишней чертой: сильное «к».', 'ㄱ with an extra stroke: strong "k".', '코', 'ko', 'нос', 'nose'),
  c('ㅌ', 't', 'т (с придыханием)', 't (aspirated)', 'ㄷ с лишней чертой: сильное «т».', 'ㄷ with an extra stroke: strong "t".', '토마토', 'tomato', 'помидор', 'tomato'),
  c('ㅍ', 'p', 'п (с придыханием)', 'p (aspirated)', 'Похожа на «ворота»: сильное «п».', 'Looks like a gate: strong "p".', '포도', 'podo', 'виноград', 'grapes'),
  c('ㅎ', 'h', 'х (мягкое, как «h»)', 'h', 'Шляпа с кольцом: «h» — hat.', 'A hat on a ring: "h" — hat.', '하늘', 'haneul', 'небо', 'sky'),
];

export const allLetters = [...vowels, ...consonants];
