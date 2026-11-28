import type { BookUnit } from '../book';
import { build, choice, cloze, dict, dl, hskPic, l, listen, match, st, tf, type, v, wr } from './h';

const p = hskPic(2, 12);

export const unit: BookUnit = {
  n: 12,
  lesson: {
    emoji: '🧥',
    title: l('Ты слишком легко одет (你穿得太少了)', 'You wear too little (你穿得太少了)'),
    goal: l(
      'Оценивать, как что-то делается: дополнение степени 得 (跑得快, 穿得少), с дополнением (游泳游得快) и в сравнении (他比我游得快).',
      'Judge how something is done: the degree complement 得 (跑得快, 穿得少), with an object (游泳游得快) and in comparisons (他比我游得快).',
    ),
    theory: [
      {
        title: l('Как делает: глагол + 得 + оценка', 'How it is done: verb + 得 + comment'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**Глагол + 得 + прилагательное** оценивает, **как** выполняется действие: 跑得快 «бегает быстро», 穿得少 «одет легко», 睡得好 «спит хорошо». Отрицание — **得 + 不 + прил.**: 跳得不好.',
              '**Verb + 得 + adjective** comments on **how** an action is done: 跑得快 "runs fast", 穿得少 "wears little", 睡得好 "sleeps well". Negative: **得 + 不 + adj.**: 跳得不好.',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '你穿得太少了。', tr: l('Ты слишком легко одет.', 'You are wearing too little.') },
              { ko: '慢一点儿，你走得太快了。', tr: l('Помедленнее, ты слишком быстро идёшь.', 'Slow down, you walk too fast.') },
              { ko: '妻子每天睡觉前都要喝一杯牛奶，她说这样可以睡得好一些。', tr: l('Жена каждый вечер пьёт молоко — говорит, так лучше спится.', 'My wife drinks milk before bed — she says she sleeps better that way.') },
            ],
          },
          { type: 'img', src: p('ra'), caption: l('今天下雪了，比昨天冷多了。你多穿点儿衣服吧。', "It snowed today, much colder than yesterday — put on more clothes.") },
        ],
      },
      {
        title: l('С дополнением и в сравнении', 'With an object and in comparisons'),
        blocks: [
          {
            type: 'p',
            text: l(
              'Если у глагола есть дополнение, глагол **повторяют**: **(глагол) + дополнение + глагол + 得 + прил.** — 他游泳游得很快, 你唱歌唱得太好了. Первый глагол можно опустить: 他汉语说得很好. В сравнении: **A 比 B + глагол + 得 + прил.** или **A + глагол + 得 + 比 B + прил.**',
              'If the verb has an object, the verb is **repeated**: **(verb) + object + verb + 得 + adj.** — 他游泳游得很快, 你唱歌唱得太好了. The first verb may be dropped: 他汉语说得很好. In comparisons: **A 比 B + verb + 得 + adj.** or **A + verb + 得 + 比 B + adj.**',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '你唱歌唱得太好了，再来一个吧。', tr: l('Ты так хорошо поёшь, давай ещё одну!', 'You sing so well — one more!') },
              { ko: '他比我游得快，但是没有大卫游得快。', tr: l('Он плавает быстрее меня, но не быстрее Дэвида.', "He swims faster than me, but not as fast as David.") },
              { ko: '今天比昨天起得早，所以我走路去上班。', tr: l('Сегодня встал раньше, чем вчера, поэтому иду на работу пешком.', 'I got up earlier than yesterday, so I walk to work.') },
              { ko: '明天有一个新年晚会，我要穿得漂亮一点儿。', tr: l('Завтра новогодний вечер, хочу одеться покрасивее.', "There's a New Year party tomorrow — I want to dress up a bit.") },
            ],
          },
          { type: 'img', src: p('rb'), caption: l('你唱歌唱得太好了！ — Ты так хорошо поёшь!', 'You sing so well!') },
        ],
      },
      {
        title: l('Читаем: погода и дорога', 'Reading: weather and commuting'),
        blocks: [
          {
            type: 'examples',
            items: [
              { ko: '今年没有去年冷，北京到现在还没下雪。', tr: l('В этом году не так холодно, как в прошлом, в Пекине до сих пор нет снега.', "This year isn't as cold as last year; it hasn't snowed in Beijing yet.") },
              { ko: '我每天要坐一个多小时的公共汽车去上班。— 住得远真的很累。', tr: l('Я каждый день больше часа еду на работу на автобусе. — Жить далеко — правда утомительно.', 'I spend over an hour on the bus to work every day. — Living far away is really tiring.') },
              { ko: '路上车太多，坐公共汽车还没有走路快呢。', tr: l('На дорогах столько машин, что на автобусе медленнее, чем пешком.', 'There are so many cars that the bus is slower than walking.') },
            ],
          },
          { type: 'img', src: p('rc'), caption: l('妻子这几天很忙，所以我洗衣服。', "My wife is busy these days, so I'm doing the laundry.") },
          {
            type: 'tip',
            text: l('公 «общий»: 公园 «парк», 公司 «компания», 公用电话 «таксофон», 公共汽车 «автобус».', '公 means "public": 公园 "park", 公司 "company", 公用电话 "payphone", 公共汽车 "bus".'),
          },
        ],
      },
    ],
    vocab: [
      v('穿', 'chuān', 'надевать, носить', 'to wear', p('ra')),
      v('得', 'de', 'частица оценки действия', 'degree particle'),
      v('少', 'shǎo', 'мало', 'little, few'),
      v('多', 'duō', 'много', 'many, much'),
      v('进', 'jìn', 'входить', 'to enter'),
      v('近', 'jìn', 'близкий', 'near, close'),
      v('妻子', 'qīzi', 'жена', 'wife'),
      v('晚会', 'wǎnhuì', 'вечеринка, вечер', 'evening party'),
      v('下雪', 'xià xuě', 'идёт снег', 'to snow'),
      v('去年', 'qùnián', 'прошлый год', 'last year'),
      v('今年', 'jīnnián', 'этот год', 'this year'),
      v('牛奶', 'niúnǎi', 'молоко', 'milk'),
      v('茶馆', 'cháguǎn', 'чайная', 'teahouse'),
      v('游泳', 'yóuyǒng', 'плавать', 'to swim'),
      v('跑', 'pǎo', 'бегать', 'to run', p('le')),
      v('睡', 'shuì', 'спать', 'to sleep', p('l1')),
      v('起', 'qǐ', 'вставать', 'to get up'),
      v('唱', 'chàng', 'петь', 'to sing', p('rb')),
      v('公园', 'gōngyuán', 'парк', 'park'),
    ],
    exercises: [
      /* 0 */ match(l('Соедини слово и перевод', 'Match the words'), [
        ['穿', l('надевать', 'wear')],
        ['进', l('входить', 'enter')],
        ['妻子', l('жена', 'wife')],
        ['晚会', l('вечеринка', 'party')],
        ['去年', l('прошлый год', 'last year')],
      ]),
      /* 1 */ listen('你穿得太少了', [l('Ты слишком легко одет.', 'You wear too little.'), l('Ты много купил.', 'You bought a lot.'), l('Ты мало ешь.', 'You eat too little.')], 0),
      /* 2 */ cloze('他的家比我的家离公司（ ）一点儿。', l('Его дом немного ближе к работе, чем мой.', 'His home is a bit closer to the company than mine.'), ['近', '进', '穿'], 0),
      /* 3 */ cloze('我（ ）找一个比现在钱多一点儿的工作。', l('Надеюсь найти работу, где платят чуть больше.', 'I hope to find a job that pays a bit more.'), ['希望', '让', '穿'], 0),
      /* 4 */ cloze('外面太冷了，快（ ）房间里来吧。', l('На улице очень холодно, заходи скорее в комнату.', "It's very cold outside — come into the room."), ['进', '近', '让'], 0),
      /* 5 */ cloze('明天有一个新年晚会，我要（ ）得漂亮一点儿。', l('Завтра новогодний вечер, хочу одеться покрасивее.', 'There is a New Year party tomorrow — I want to dress nicely.'), ['穿', '进', '希望'], 0),
      /* 6 */ cloze('大卫生病了，他（ ）我告诉王老师。', l('Дэвид заболел, он попросил меня сказать учителю Вану.', 'David is ill; he asked me to tell Teacher Wang.'), ['让', '穿', '近'], 0),
      /* 7 */ choice(l('«Он быстро бегает»:', '"He runs fast":'), ['他跑得很快。', '他跑很快得。', '他很快跑得。'], 0),
      /* 8 */ choice(l('«Он хорошо говорит по-китайски»:', '"He speaks Chinese well":'), ['他汉语说得很好。', '他说汉语得很好。', '他说得汉语很好。'], 0),
      /* 9 */ choice(l('«Он плавает быстрее меня»:', '"He swims faster than me":'), ['他比我游得快。', '他游比我得快。', '他比我快游得。'], 0),
      /* 10 */ choice(l('«Танцую не очень» (отрицание):', '"I don\'t dance well" (negative):'), ['我跳得不好。', '我不跳得好。', '我跳不得好。'], 0),
      /* 11 */ tf(l('今年没有去年冷，北京到现在还没下雪。→ 北京今年比去年冷。', "This year isn't as cold as last year. → Beijing is colder this year."), false),
      /* 12 */ tf(l('你上个月没怎么运动吧？明天一起去跑步怎么样？→ 他们可能明天一起运动。', 'You barely exercised last month — run together tomorrow? → They may exercise together tomorrow.'), true),
      /* 13 */ tf(l('妻子每天睡觉前都要喝一杯牛奶。→ 妻子每天起床后喝牛奶。', 'My wife drinks milk before bed every day. → She drinks milk after getting up.'), false),
      /* 14 */ tf(l('谢谢您，没有您的帮助，这件事情可能到今天还做不完。→ 事情已经做完了。', "Thanks — without your help this wouldn't be finished even now. → It is finished."), true),
      /* 15 */ tf(l('慢一点儿，你走得太快了，我们去那个茶馆喝杯茶好不好？→ 他想去喝茶。', "Slow down — shall we have tea at that teahouse? → He wants to go for tea."), true),
      /* 16 */ match(l('Соедини реплику и ответ', 'Match the line and the reply'), [
        ['我每天要坐一个多小时的公共汽车去上班。', '住得远真的很累。'],
        ['小王每天都游泳，他游得快吗？', '他比我游得快，但是没有大卫游得快。'],
        ['你每天坐公共汽车去学校吗？', '路上车太多，坐公共汽车还没有走路快呢。'],
        ['我和妻子一起去北京旅游了几天。', '上个星期怎么没看到你？'],
      ]),
      /* 17 */ build(l('Собери: «Ты слишком легко одет»', 'Build: "You\'re wearing too little"'), ['你', '穿得', '太少了']),
      /* 18 */ build(l('Собери: «Ты очень хорошо поёшь»', 'Build: "You sing really well"'), ['你', '唱歌', '唱得', '太好了']),
      /* 19 */ type(l('Напиши иероглифами или пиньинем: «жена»', 'Write in characters or pinyin: "wife"'), ['妻子', 'qīzi']),
      /* 20 */ listen('今天比昨天冷多了', [l('Сегодня намного холоднее, чем вчера.', 'Today is much colder than yesterday.'), l('Сегодня теплее, чем вчера.', 'Today is warmer.'), l('Вчера шёл снег.', 'It snowed yesterday.')], 0),
      /* 21 */ dict('他游得很快', '他游得很快', '他游得很快。', 'tā yóu de hěn kuài'),
      /* 22 */ choice(l('К какой картинке: 别离电脑太近，对眼睛不好。', 'Which picture: 别离电脑太近，对眼睛不好。'), [l('Мальчик близко к ноутбуку', 'A boy close to a laptop'), l('Девушка поёт', 'A girl singing'), l('Мужчина с корзиной белья', 'A man with a laundry basket')], 0),
      /* 23 */ wr('穿', 'надевать', 'to wear'),
      /* 24 */ wr('得', 'частица оценки', 'degree particle'),
      /* 25 */ wr('进', 'входить', 'to enter'),
      /* 26 */ wr('妻子', 'жена', 'wife'),
      /* 27 */ wr('公园', 'парк', 'park'),
    ],
    dialogue: {
      title: l('Оденься теплее', 'Dress warmly'),
      lines: [
        dl('A', '今天下雪了，比昨天冷多了。', 'Сегодня выпал снег, намного холоднее вчерашнего.', "It snowed today — much colder than yesterday."),
        dl('B', '是吗？我穿得不多。', 'Правда? Я оделся легко.', "Really? I'm not wearing much."),
        dl('A', '你穿得太少了，多穿点儿衣服吧。', 'Ты слишком легко одет, надень побольше.', "You're wearing too little — put on more clothes."),
        dl('B', '好。我们走得慢一点儿，去茶馆喝杯茶吧。', 'Ладно. Пойдём помедленнее, выпьем чаю в чайной.', "OK. Let's walk slowly and have tea at the teahouse."),
      ],
    },
    story: {
      title: l('Новогодний вечер', 'A New Year party'),
      sentences: [
        st('明天有一个新年晚会。', 'Завтра новогодний вечер.', "There's a New Year party tomorrow.", [['明天', 'завтра', 'tomorrow'], ['新年晚会', 'новогодний вечер', 'New Year party']]),
        st('我要穿得漂亮一点儿。', 'Хочу одеться покрасивее.', 'I want to dress up a bit.', [['穿得', 'одеться (как)', 'dress (how)'], ['漂亮一点儿', 'покрасивее', 'a bit prettier']]),
        st('我的朋友唱歌唱得非常好。', 'Моя подруга поёт очень хорошо.', 'My friend sings very well.', [['唱歌', 'петь', 'sing'], ['唱得非常好', 'поёт очень хорошо', 'sings very well']]),
        st('她比我唱得好，但是我比她跳得好。', 'Она поёт лучше меня, зато я танцую лучше неё.', "She sings better than me, but I dance better than her.", [['比我唱得好', 'поёт лучше меня', 'sings better than me'], ['比她跳得好', 'танцую лучше неё', 'dance better than her']]),
        st('晚会以后，我们都睡得很晚。', 'После вечера мы все поздно легли спать.', 'After the party we all went to bed late.', [['晚会以后', 'после вечера', 'after the party'], ['睡得很晚', 'легли поздно', 'slept late']]),
      ],
    },
  },
  exam: [
    listen('妻子', [l('жена', 'wife'), l('муж', 'husband'), l('ребёнок', 'child')], 0),
    listen('他跑得很快', [l('Он быстро бегает.', 'He runs fast.'), l('Он медленно ходит.', 'He walks slowly.'), l('Он не бегает.', "He doesn't run.")], 0),
    listen('你唱歌唱得太好了', [l('Ты так хорошо поёшь!', 'You sing so well!'), l('Ты плохо поёшь.', 'You sing badly.'), l('Спой ещё.', 'Sing again.')], 0),
    listen('快进房间里来吧', [l('Заходи скорее в комнату.', 'Come into the room quickly.'), l('Выходи из комнаты.', 'Leave the room.'), l('Комната маленькая.', 'The room is small.')], 0),
    dict('你穿得太少了', '你穿得太少了', '你穿得太少了。', 'nǐ chuān de tài shǎo le'),
    dict('今年没有去年冷', '今年没有去年冷', '今年没有去年冷。', 'jīnnián méiyǒu qùnián lěng'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['下雪', l('идёт снег', 'to snow')],
      ['今年', l('этот год', 'this year')],
      ['茶馆', l('чайная', 'teahouse')],
      ['近', l('близкий', 'near')],
      ['公园', l('парк', 'park')],
    ]),
    cloze('他说汉语说（ ）很好。', l('Он хорошо говорит по-китайски.', 'He speaks Chinese very well.'), ['得', '的', '地'], 0),
    cloze('你走得太快了，慢（ ）。', l('Ты идёшь слишком быстро, помедленнее.', 'You walk too fast — slow down a bit.'), ['一点儿', '有点儿', '得'], 0),
    cloze('她比我跑得（ ）。', l('Она бегает быстрее меня.', 'She runs faster than me.'), ['快', '很快', '非常快'], 0, l('С 比 не ставят 很/非常.', 'No 很/非常 with 比.')),
    cloze('外面太冷了，快（ ）来吧。', l('Холодно, заходи скорее.', "It's cold — come in quickly."), ['进', '近', '穿'], 0),
    choice(l('Повторение (урок 11): «Он старше меня на три года»', 'Review (lesson 11): "He is three years older than me"'), ['他比我大三岁。', '他比我三岁大。', '他大比我三岁。'], 0),
    choice(l('Ответ на «小王游得快吗？»', 'Reply to "小王游得快吗？"'), ['他比我游得快，但是没有大卫游得快。', '住得远真的很累。', '上个星期怎么没看到你？'], 0),
    build(l('Собери: «Она танцует лучше меня»', 'Build: "She dances better than me"'), ['她', '比我', '跳得', '好']),
    build(l('Собери: «Я сегодня встал рано»', 'Build: "I got up early today"'), ['我', '今天', '起得', '很早']),
    type(l('Напиши иероглифами или пиньинем: «надевать, носить»', 'Write in characters or pinyin: "to wear"'), ['穿', 'chuān']),
    tf(l('妻子说喝牛奶可以睡得好一些。→ 喝牛奶对睡觉有帮助。', 'My wife says milk helps her sleep better. → Milk helps sleep.'), true),
    tf(l('他比我游得快。→ 我比他游得快。', 'He swims faster than me. → I swim faster than him.'), false),
    wr('穿', 'надевать', 'to wear'),
    wr('妻子', 'жена', 'wife'),
  ],
};
