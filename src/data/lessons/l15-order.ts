import type { Lesson } from '../../lib/types';
import { l } from '../helpers';

export const lesson: Lesson = {
  id: 'l15-order',
  level: 1,
  emoji: '🍜',
  title: l('В кафе: 주세요 и заказ еды', 'At a café: 주세요 and ordering food'),
  goal: l('Заказать еду и напитки, попросить счёт и поблагодарить за еду.', 'Order food and drinks, ask for the bill and thank for the meal.'),
  theory: [
    {
      title: l('Главная фраза: 주세요', 'The key phrase: 주세요'),
      blocks: [
        {
          type: 'p',
          text: l(
            '**Существительное + 주세요** — «дайте, пожалуйста». Если нужно количество: **предмет + число + счётное слово + 주세요**. Числа здесь чистокорейские.',
            '**Noun + 주세요** means "please give me". With a quantity: **item + number + counter + 주세요**. Native numbers are used.',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '물 주세요.', tr: l('Воды, пожалуйста.', 'Water, please.') },
            { ko: '커피 한 잔 주세요.', tr: l('Одну чашку кофе, пожалуйста.', 'One cup of coffee, please.') },
            { ko: '김밥 두 개 주세요.', tr: l('Два кимбапа, пожалуйста.', 'Two gimbap, please.') },
          ],
        },
        {
          type: 'table',
          head: [l('Счётное слово', 'Counter'), l('Для чего', 'Used for')],
          rows: [
            ['잔', l('чашки, стаканы (кофе, чай)', 'cups, glasses (coffee, tea)')],
            ['병', l('бутылки', 'bottles')],
            ['그릇', l('миски (суп, лапша, рис)', 'bowls (soup, noodles, rice)')],
            ['개', l('штуки', 'pieces')],
          ],
        },
        { type: 'tip', text: l('좀 («немного») смягчает просьбу: 물 좀 주세요 звучит вежливее.', '좀 ("a little") softens a request: 물 좀 주세요 sounds more polite.') },
      ],
    },
    {
      title: l('В ресторане', 'In a restaurant'),
      blocks: [
        {
          type: 'p',
          text: l(
            'Официанта зовут словом **여기요!** — «Простите! / Сюда!». Это совершенно нормально и не грубо. В конце: **계산해 주세요** — «посчитайте, пожалуйста».',
            'You call a waiter with **여기요!** ("Excuse me!"). It is completely normal and not rude. At the end: **계산해 주세요** "the bill, please".',
          ),
        },
        {
          type: 'examples',
          items: [
            { ko: '여기요! 메뉴 좀 주세요.', tr: l('Простите! Меню, пожалуйста.', 'Excuse me! The menu, please.') },
            { ko: '계산해 주세요.', tr: l('Счёт, пожалуйста.', 'The bill, please.') },
          ],
        },
      ],
    },
    {
      title: l('Слова за столом', 'Words at the table'),
      blocks: [
        {
          type: 'table',
          head: [l('Фраза', 'Phrase'), l('Когда говорят', 'When')],
          rows: [
            ['잘 먹겠습니다', l('перед едой («буду есть с удовольствием»)', 'before eating ("I will eat well")')],
            ['맛있게 드세요', l('хозяин или официант гостю: «приятного аппетита»', 'host or waiter to guest: "enjoy your meal"')],
            ['잘 먹었습니다', l('после еды («хорошо поел»)', 'after eating ("I ate well")')],
          ],
        },
        { type: 'tip', text: l('Говорить 잘 먹겠습니다 и 잘 먹었습니다 принято даже в гостях и с коллегами — это знак уважения к тому, кто угощает.', 'Saying 잘 먹겠습니다 and 잘 먹었습니다 is customary even with colleagues — it respects whoever is paying or cooking.') },
      ],
    },
  ],
  vocab: [
    { ko: '주세요', roman: 'juseyo', tr: l('дайте, пожалуйста', 'please give me') },
    { ko: '여기요', roman: 'yeogiyo', tr: l('простите! (позвать официанта)', 'excuse me! (calling staff)') },
    { ko: '메뉴', roman: 'menyu', tr: l('меню', 'menu') },
    { ko: '좀', roman: 'jom', tr: l('немного; пожалуйста (смягчает)', 'a little; please (softener)') },
    { ko: '잔', roman: 'jan', tr: l('чашка (счётное слово)', 'cup (counter)') },
    { ko: '병', roman: 'byeong', tr: l('бутылка (счётное слово)', 'bottle (counter)') },
    { ko: '그릇', roman: 'geureut', tr: l('миска (счётное слово)', 'bowl (counter)') },
    { ko: '계산', roman: 'gyesan', tr: l('счёт, расчёт', 'bill, payment') },
    { ko: '카드', roman: 'kadeu', tr: l('карта', 'card') },
    { ko: '현금', roman: 'hyeongeum', tr: l('наличные', 'cash') },
    { ko: '식당', roman: 'sikdang', tr: l('ресторан, столовая', 'restaurant') },
    { ko: '불고기', roman: 'bulgogi', tr: l('пулькоги (маринованное мясо)', 'bulgogi') },
    { ko: '냉면', roman: 'naengmyeon', tr: l('холодная лапша', 'cold noodles') },
    { ko: '김밥', roman: 'gimbap', tr: l('кимбап (роллы)', 'gimbap (rolls)') },
    { ko: '주스', roman: 'juseu', tr: l('сок', 'juice') },
    { ko: '잘 먹겠습니다', roman: 'jal meokgetseumnida', tr: l('приятного аппетита (перед едой)', 'thank you for the meal (before)') },
    { ko: '잘 먹었습니다', roman: 'jal meogeotseumnida', tr: l('спасибо за еду (после еды)', 'thank you for the meal (after)') },
  ],
  exercises: [
    { type: 'match', prompt: l('Соедини блюдо и перевод', 'Match the dish and its meaning'), pairs: [{ ko: '불고기', tr: l('пулькоги', 'bulgogi') }, { ko: '냉면', tr: l('холодная лапша', 'cold noodles') }, { ko: '김밥', tr: l('кимбап', 'gimbap') }, { ko: '주스', tr: l('сок', 'juice') }] },
    { type: 'choice', prompt: l('Как попросить воду?', 'How do you ask for water?'), options: ['물 주세요', '물 있어요', '물 아니에요'], answer: 0 },
    { type: 'cloze', sentence: '커피 한 ___ 주세요.', tr: l('Одну чашку кофе, пожалуйста.', 'One cup of coffee, please.'), options: ['잔', '명', '살'], answer: 0 },
    { type: 'choice', prompt: l('Когда говорят 잘 먹겠습니다?', 'When do you say 잘 먹겠습니다?'), options: [l('перед едой', 'before the meal'), l('после еды', 'after the meal'), l('при оплате', 'when paying')], answer: 0 },
    { type: 'tf', statement: l('잘 먹었습니다 говорят перед едой.', '잘 먹었습니다 is said before eating.'), answer: false },
    { type: 'build', prompt: l('Собери: «Два кимбапа, пожалуйста»', 'Build: "Two gimbap, please"'), tokens: ['주세요', '두', '김밥', '개'], answer: ['김밥', '두', '개', '주세요'] },
    { type: 'write', prompt: l('Научись писать слово «меню»', 'Learn to write the word "menu"'), word: '메뉴', tr: l('меню', 'menu') },
    { type: 'listen', say: '계산', options: [l('счёт', 'the bill'), l('меню', 'menu'), l('вода', 'water')], answer: 0 },
    { type: 'write', prompt: l('Научись писать слово «простите! (позвать официанта)»', 'Learn to write the word "excuse me!"'), word: '여기요', tr: l('простите! (позвать официанта)', 'excuse me!') },
  ],
  dialogue: {
    title: l('Заказ в ресторане', 'Ordering at a restaurant'),
    lines: [
      { who: 'A', ko: '여기요! 메뉴 좀 주세요.', tr: l('Простите! Меню, пожалуйста.', 'Excuse me! The menu, please.') },
      { who: 'B', ko: '네, 여기 있어요.', tr: l('Да, вот, пожалуйста.', 'Yes, here you are.') },
      { who: 'A', ko: '냉면 하나하고 김밥 두 개 주세요.', tr: l('Одну холодную лапшу и два кимбапа.', 'One cold noodles and two gimbap, please.') },
      { who: 'B', ko: '네, 알겠습니다.', tr: l('Хорошо, понял.', 'Certainly.') },
      { who: 'A', ko: '물도 좀 주세요.', tr: l('И воды, пожалуйста.', 'Some water too, please.') },
      { who: 'B', ko: '네, 맛있게 드세요.', tr: l('Приятного аппетита.', 'Enjoy your meal.') },
    ],
  },
  story: {
    title: l('Обед', 'Lunch'),
    sentences: [
      { ko: '저는 식당에 가요.', tr: l('Я иду в ресторан.', "I go to a restaurant."), parts: [{ ko: '저', gloss: l('я', 'I') }, { ko: '는', gloss: l('частица темы', 'topic particle') }, { ko: '식당', gloss: l('ресторан', 'restaurant') }, { ko: '에', gloss: l('частица направления', 'destination particle') }, { ko: '가요', gloss: l('иду', 'go') }] },
      { ko: '불고기 하나 주세요.', tr: l('Одну порцию пулькоги, пожалуйста.', 'One bulgogi, please.'), parts: [{ ko: '불고기', gloss: l('пулькоги', 'bulgogi') }, { ko: '하나', gloss: l('один', 'one') }, { ko: '주세요', gloss: l('дайте, пожалуйста', 'please give') }] },
      { ko: '잘 먹겠습니다.', tr: l('Приятного аппетита.', 'Thank you for the meal.'), parts: [{ ko: '잘', gloss: l('хорошо', 'well') }, { ko: '먹겠습니다', gloss: l('буду есть (формально)', 'will eat (formal)') }] },
      { ko: '정말 맛있어요.', tr: l('Очень вкусно.', "It's really tasty."), parts: [{ ko: '정말', gloss: l('действительно', 'really') }, { ko: '맛있어요', gloss: l('вкусно', 'tasty') }] },
      { ko: '잘 먹었습니다.', tr: l('Спасибо, было вкусно.', 'Thank you, that was delicious.'), parts: [{ ko: '잘', gloss: l('хорошо', 'well') }, { ko: '먹었습니다', gloss: l('поел (формально)', 'ate (formal)') }] },
    ],
  },
};
