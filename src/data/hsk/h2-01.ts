import type { BookUnit } from '../book';
import { build, choice, cloze, dict, dl, hskPic, l, listen, match, st, tf, type, v, wr } from './h';

const p = hskPic(2, 1);

export const unit: BookUnit = {
  n: 1,
  lesson: {
    emoji: '🍂',
    title: l('В сентябре лучше всего ехать в Пекин (九月去北京旅游最好)', 'September is the best time to visit Beijing (九月去北京旅游最好)'),
    goal: l(
      'Говорить о путешествиях, спорте и любимом: «хотеть, собираться» 要, «самый» 最 и примерное число 多 / 几.',
      'Talk about travel, sports and favourites: "want to, be going to" 要, "the most" 最 and approximate numbers with 多 / 几.',
    ),
    theory: [
      {
        title: l('Слова урока: путешествия и спорт', 'Lesson words: travel and sports'),
        blocks: [
          {
            type: 'p',
            text: l(
              'Каждое слово записывается иероглифами и **пиньинем** — латиницей с тонами. Тон меняет смысл: mǎi «покупать» и mài «продавать».',
              'Every word is written in characters and in **pinyin** — Latin letters with tones. The tone changes the meaning: mǎi "to buy" vs mài "to sell".',
            ),
          },
          { type: 'img', src: p('rb'), caption: l('我最喜欢旅游。 — Больше всего я люблю путешествовать.', '我最喜欢旅游。 — I like travelling most of all.') },
          {
            type: 'examples',
            items: [
              { ko: '你喜欢什么运动？', tr: l('Какой спорт ты любишь?', 'What sport do you like?') },
              { ko: '我最喜欢踢足球。', tr: l('Больше всего я люблю играть в футбол.', 'My favourite sport is football.') },
              { ko: '星期六我们一起去踢足球吧。', tr: l('В субботу давай вместе пойдём играть в футбол.', "Let's go and play football together on Saturday.") },
            ],
          },
          {
            type: 'tip',
            text: l('«Играть» в китайском зависит от игры: 踢 tī — ногами (足球), 打 dǎ — руками (篮球).', '"To play" depends on the game: 踢 tī with the feet (足球), 打 dǎ with the hands (篮球).'),
          },
        ],
      },
      {
        title: l('Хочу / собираюсь: 要 yào', 'Want to / be going to: 要 yào'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**要 + глагол** — желание или намерение что-то сделать: «хочу, собираюсь». Отрицание — **不想** («не хочу»), а не 不要 (不要 = «не надо!»).',
              '**要 + verb** expresses a wish or plan: "want to, be going to". The negative is **不想** ("don\'t want to"), not 不要 (不要 = "don\'t!").',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '王方要买一个新杯子。', tr: l('Ван Фан хочет купить новую чашку.', 'Wang Fang wants to buy a new cup.') },
              { ko: '我要去商店买椅子。', tr: l('Я собираюсь в магазин купить стул.', "I'm going to the shop to buy a chair.") },
              { ko: '我不想买桌子。', tr: l('Я не хочу покупать стол.', "I don't want to buy a table.") },
            ],
          },
        ],
      },
      {
        title: l('Самый: 最 zuì', 'The most: 最 zuì'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**最 + прилагательное / глагол чувства** — «самый, больше всего». Ставится прямо перед словом.',
              '**最 + adjective / verb of feeling** means "the most". It goes right before the word.',
            ),
          },
          { type: 'img', src: p('re'), caption: l('一月的北京天气最冷。 — В январе в Пекине холоднее всего.', '一月的北京天气最冷。 — January is the coldest month in Beijing.') },
          {
            type: 'examples',
            items: [
              { ko: '九月去北京旅游最好。', tr: l('В Пекин лучше всего ехать в сентябре.', 'September is the best time to visit Beijing.') },
              { ko: '你的小猫最漂亮。', tr: l('Твой котёнок самый красивый.', 'Your kitten is the prettiest.') },
              { ko: '王老师最喜欢吃苹果。', tr: l('Учитель Ван больше всего любит яблоки.', 'Teacher Wang likes apples most of all.') },
            ],
          },
        ],
      },
      {
        title: l('Примерное число: 多 и 几', 'Approximate numbers: 多 and 几'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**число + 多** — «с лишним»: 两岁多 «два с лишним года», 十多岁 «больше десяти лет». **几** — «несколько»: 几个月 «несколько месяцев». **不到** — «меньше, не достигает»: 不到十岁 «меньше десяти лет».',
              '**number + 多** means "more than": 两岁多 "over two years old", 十多岁 "over ten". **几** means "several": 几个月 "a few months". **不到** means "less than": 不到十岁 "under ten".',
            ),
          },
          {
            type: 'table',
            head: [l('Выражение', 'Expression'), l('Значение', 'Meaning')],
            rows: [
              ['三岁多', l('три с лишним года', 'over three years old')],
              ['十多岁', l('больше десяти лет', 'over ten years old')],
              ['几个月', l('несколько месяцев', 'a few months')],
              ['不到十岁', l('меньше десяти лет', 'under ten years old')],
            ],
          },
          { type: 'img', src: p('rf'), caption: l('这个小猫很漂亮。它多大了？— 三岁多。', '— This kitten is very pretty. How old is it? — Over three.') },
          {
            type: 'tip',
            text: l('它 tā — «он, она, оно» для животных и вещей. Вопрос о возрасте: 多大了？', '它 tā is "it" for animals and things. To ask an age: 多大了？'),
          },
        ],
      },
      {
        title: l('Читаем: короткие диалоги из тетради', 'Reading: short dialogues from the workbook'),
        blocks: [
          {
            type: 'examples',
            items: [
              { ko: '他在哪儿呢？你看见他了吗？— 他还在教室里学习。', tr: l('Где он? Ты его видел? — Он ещё занимается в классе.', 'Where is he? Have you seen him? — He is still studying in the classroom.') },
              { ko: '王老师什么时候能到？— 他已经走了，十分钟后能到。', tr: l('Когда приедет учитель Ван? — Он уже вышел, будет через 10 минут.', 'When will Teacher Wang arrive? — He has left, he will be here in ten minutes.') },
              { ko: '你为什么不开车去学校？— 我觉得坐出租车很好。', tr: l('Почему ты не едешь в школу на машине? — По-моему, на такси хорошо.', "Why don't you drive to school? — I think taking a taxi is fine.") },
              { ko: '他们都去踢足球了，你去不去？— 我没时间，明天吧。', tr: l('Они все пошли играть в футбол, ты пойдёшь? — Нет времени, давай завтра.', "They've all gone to play football, are you going? — I have no time, maybe tomorrow.") },
            ],
          },
          { type: 'img', src: p('rc'), caption: l('踢足球 — играть в футбол', '踢足球 — to play football') },
        ],
      },
    ],
    vocab: [
      v('旅游', 'lǚyóu', 'путешествовать, туризм', 'to travel, tourism', p('rb')),
      v('觉得', 'juéde', 'считать, чувствовать', 'to think, to feel'),
      v('最', 'zuì', 'самый, больше всего', 'the most'),
      v('为什么', 'wèi shénme', 'почему', 'why'),
      v('也', 'yě', 'тоже', 'also, too'),
      v('运动', 'yùndòng', 'спорт, заниматься спортом', 'sport, to exercise', p('lf')),
      v('踢足球', 'tī zúqiú', 'играть в футбол', 'to play football', p('rc')),
      v('打篮球', 'dǎ lánqiú', 'играть в баскетбол', 'to play basketball', p('rd')),
      v('一起', 'yìqǐ', 'вместе', 'together'),
      v('要', 'yào', 'хотеть, собираться', 'to want to, to be going to'),
      v('新', 'xīn', 'новый', 'new'),
      v('它', 'tā', 'оно (о животных, вещах)', 'it'),
      v('眼睛', 'yǎnjing', 'глаза', 'eye', p('l3')),
      v('小猫', 'xiǎo māo', 'котёнок', 'kitten', p('rf')),
      v('漂亮', 'piàoliang', 'красивый', 'pretty'),
      v('天气', 'tiānqì', 'погода', 'weather', p('re')),
      v('冷', 'lěng', 'холодный', 'cold'),
      v('热', 'rè', 'жаркий', 'hot'),
      v('杯子', 'bēizi', 'чашка, стакан', 'cup, glass', p('lb')),
      v('椅子', 'yǐzi', 'стул', 'chair', p('l4')),
      v('衣服', 'yīfu', 'одежда', 'clothes', p('l2')),
      v('已经', 'yǐjing', 'уже', 'already'),
      v('工作', 'gōngzuò', 'работать, работа', 'to work, job', p('ra')),
    ],
    exercises: [
      /* 0 */ match(l('Соедини слово и перевод', 'Match the words'), [
        ['旅游', l('путешествовать', 'to travel')],
        ['运动', l('спорт', 'sport')],
        ['眼睛', l('глаза', 'eyes')],
        ['衣服', l('одежда', 'clothes')],
        ['杯子', l('чашка', 'cup')],
      ]),
      /* 1 */ listen('踢足球', [l('играть в футбол', 'play football'), l('играть в баскетбол', 'play basketball'), l('путешествовать', 'travel')], 0),
      /* 2 */ choice(l('Как сказать «играть в баскетбол»?', 'How do you say "play basketball"?'), ['打篮球', '踢篮球', '做篮球'], 0, l('Руками — 打, ногами — 踢.', 'With the hands — 打, with the feet — 踢.')),
      /* 3 */ cloze('王方（ ）买一个新杯子。', l('Ван Фан хочет купить новую чашку.', 'Wang Fang wants to buy a new cup.'), ['要', '最', '也'], 0),
      /* 4 */ cloze('昨天你（ ）没来我家吃饭？', l('Почему ты вчера не пришёл ко мне поесть?', "Why didn't you come to my place to eat yesterday?"), ['为什么', '觉得', '最'], 0),
      /* 5 */ cloze('我（ ）这个衣服太大了，你看看那个吧。', l('По-моему, эта одежда велика, посмотри ту.', "I think these clothes are too big; look at that one."), ['觉得', '要', '也'], 0),
      /* 6 */ cloze('我的小猫两岁多了，杜伟的小猫（ ）两岁多了。', l('Моему котёнку два с лишним года, котёнку Ду Вэя тоже.', "My kitten is over two, and Du Wei's kitten is over two too."), ['也', '最', '要'], 0),
      /* 7 */ cloze('王老师（ ）喜欢吃苹果。', l('Учитель Ван больше всего любит яблоки.', 'Teacher Wang likes apples most of all.'), ['最', '为什么', '觉得'], 0),
      /* 8 */ choice(l('«Больше десяти лет» по-китайски:', '"Over ten years old" in Chinese:'), ['十多岁', '多十岁', '十几个岁'], 0),
      /* 9 */ choice(l('Что значит 不到十岁?', 'What does 不到十岁 mean?'), [l('меньше десяти лет', 'under ten'), l('ровно десять лет', 'exactly ten'), l('больше десяти лет', 'over ten')], 0),
      /* 10 */ choice(l('«Я не хочу покупать стол»:', '"I don\'t want to buy a table":'), ['我不想买桌子。', '我不要买桌子了。', '我要不买桌子。'], 0),
      /* 11 */ tf(l('现在是11点30分，他们已经游了20分钟了。→ 他们11点10分开始游泳。', "It's 11:30, they've been swimming for 20 minutes. → They started at 11:10."), true),
      /* 12 */ tf(l('我会跳舞，但跳得不怎么样。→ 我跳得非常好。', "I can dance, but not well. → I dance very well."), false),
      /* 13 */ tf(l('她喜欢在家看电影，也喜欢睡觉，不喜欢出去。→ 她最喜欢运动。', "She likes watching films at home and sleeping, she doesn't like going out. → She likes sports most."), false),
      /* 14 */ tf(l('我不想买桌子，我要买几个新椅子。→ 我要去商店买桌子。', "I don't want a table, I want to buy a few new chairs. → I'm going to buy a table."), false),
      /* 15 */ tf(l('听说你在学做中国菜呢，我们一起做吧。→ 他们要一起做中国菜。', "I hear you're learning Chinese cooking, let's cook together. → They're going to cook together."), true),
      /* 16 */ tf(l('八月北京很热，九月天气好，你来吧。→ 八月去北京旅游最好。', "Beijing is hot in August, the weather is good in September. → August is the best time to go."), false),
      /* 17 */ match(l('Соедини вопрос и ответ', 'Match the question and the answer'), [
        ['桌子上有一本新书。那是你的书吗？', '不是我的，我没买书。'],
        ['王老师什么时候能到？', '他已经走了，十分钟后能到。'],
        ['他们都去踢足球了，你去不去？', '我没时间，明天吧。'],
        ['这个小猫很漂亮。它多大了？', '三岁多。'],
        ['你为什么不开车去学校？', '我不想开，我觉得坐出租车很好。'],
      ]),
      /* 18 */ build(l('Собери: «Больше всего я люблю путешествовать»', 'Build: "I like travelling most of all"'), ['我', '最', '喜欢', '旅游']),
      /* 19 */ build(l('Собери: «В субботу пойдём вместе играть в футбол»', 'Build: "Let\'s play football together on Saturday"'), ['星期六', '我们', '一起', '去', '踢足球', '吧']),
      /* 20 */ type(l('Напиши иероглифами или пиньинем: «почему»', 'Write in characters or pinyin: "why"'), ['为什么', 'wèi shénme']),
      /* 21 */ listen('一月的北京天气最冷', [l('В январе в Пекине холоднее всего.', 'January is the coldest in Beijing.'), l('В сентябре в Пекине лучше всего.', 'September is the best in Beijing.'), l('В августе в Пекине жарко.', 'Beijing is hot in August.')], 0),
      /* 22 */ dict('我最喜欢旅游', '我最喜欢旅游', '我最喜欢旅游。', 'wǒ zuì xǐhuan lǚyóu'),
      /* 23 */ choice(l('Какая картинка: 爸爸现在不能回来，他在工作呢。', 'Which picture: 爸爸现在不能回来，他在工作呢。'), [l('Офис, люди за работой', 'An office, people working'), l('Котята', 'Kittens'), l('Снег и снеговик', 'Snow and a snowman')], 0),
      /* 24 */ wr('旅游', 'путешествовать', 'to travel'),
      /* 25 */ wr('最', 'самый', 'the most'),
      /* 26 */ wr('为', 'для, ради (为什么)', 'for (as in 为什么)'),
      /* 27 */ wr('眼睛', 'глаза', 'eyes'),
      /* 28 */ wr('运动', 'спорт', 'sport'),
      /* 29 */ wr('新', 'новый', 'new'),
    ],
    dialogue: {
      title: l('Когда ехать в Пекин?', 'When to go to Beijing?'),
      lines: [
        dl('A', '我想去北京旅游，你觉得几月去最好？', 'Хочу съездить в Пекин. Как думаешь, в каком месяце лучше всего?', 'I want to visit Beijing. Which month do you think is best?'),
        dl('B', '八月北京很热，九月天气好，你九月来吧。', 'В августе в Пекине жарко, в сентябре погода хорошая — приезжай в сентябре.', 'Beijing is hot in August and the weather is good in September — come in September.'),
        dl('A', '为什么一月不好？', 'А почему январь плохо?', "Why isn't January good?"),
        dl('B', '一月的北京天气最冷。', 'В январе в Пекине холоднее всего.', 'January is the coldest month in Beijing.'),
        dl('A', '好，我要九月去。我们一起去踢足球吧！', 'Хорошо, поеду в сентябре. И вместе поиграем в футбол!', "OK, I'll come in September. Let's play football together!"),
      ],
    },
    story: {
      title: l('Мои любимые занятия', 'My favourite things'),
      sentences: [
        st('每个星期六，我都去打篮球。', 'Каждую субботу я хожу играть в баскетбол.', 'I play basketball every Saturday.', [['每个星期六', 'каждую субботу', 'every Saturday'], ['都', 'всегда, все', 'all, always'], ['打篮球', 'играть в баскетбол', 'play basketball']]),
        st('我也喜欢踢足球。', 'Ещё я люблю играть в футбол.', 'I also like playing football.', [['也', 'тоже', 'also'], ['喜欢', 'любить', 'like'], ['踢足球', 'играть в футбол', 'play football']]),
        st('但是我最喜欢旅游。', 'Но больше всего я люблю путешествовать.', 'But I like travelling most of all.', [['但是', 'но', 'but'], ['最', 'больше всего', 'most'], ['旅游', 'путешествовать', 'travel']]),
        st('我觉得九月去北京旅游最好。', 'Я считаю, в Пекин лучше всего ехать в сентябре.', 'I think September is the best time to visit Beijing.', [['觉得', 'считать', 'think'], ['九月', 'сентябрь', 'September'], ['最好', 'лучше всего', 'the best']]),
        st('我的小猫三岁多了，它的眼睛很漂亮。', 'Моему котёнку три с лишним года, у него очень красивые глаза.', 'My kitten is over three, and its eyes are very pretty.', [['小猫', 'котёнок', 'kitten'], ['三岁多', 'три с лишним года', 'over three'], ['它的眼睛', 'его глаза', 'its eyes'], ['漂亮', 'красивые', 'pretty']]),
      ],
    },
  },
  exam: [
    listen('旅游', [l('путешествовать', 'travel'), l('спорт', 'sport'), l('работа', 'work')], 0),
    listen('我要买一个新杯子', [l('Я хочу купить новую чашку.', 'I want to buy a new cup.'), l('Я купил новый стул.', 'I bought a new chair.'), l('Мне не нравится эта чашка.', "I don't like this cup.")], 0),
    listen('你为什么不去？', [l('Почему ты не идёшь?', "Why aren't you going?"), l('Куда ты идёшь?', 'Where are you going?'), l('Ты тоже идёшь?', 'Are you going too?')], 0),
    listen('它两岁多了', [l('Ему два с лишним года.', "It's over two years old."), l('Ему меньше двух лет.', "It's under two."), l('Ему двенадцать лет.', "It's twelve.")], 0),
    dict('九月去北京旅游最好', '九月去北京旅游最好', '九月去北京旅游最好。', 'jiǔ yuè qù Běijīng lǚyóu zuì hǎo'),
    dict('我也喜欢运动', '我也喜欢运动', '我也喜欢运动。', 'wǒ yě xǐhuan yùndòng'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['觉得', l('считать', 'to think')],
      ['一起', l('вместе', 'together')],
      ['已经', l('уже', 'already')],
      ['椅子', l('стул', 'chair')],
      ['天气', l('погода', 'weather')],
    ]),
    cloze('我（ ）喜欢踢足球。', l('Больше всего я люблю футбол.', 'I like football most of all.'), ['最', '也', '为什么'], 0),
    cloze('你（ ）不喜欢运动？', l('Почему ты не любишь спорт?', "Why don't you like sports?"), ['为什么', '最', '要'], 0),
    cloze('我（ ）去商店买衣服。', l('Я собираюсь в магазин за одеждой.', "I'm going to the shop to buy clothes."), ['要', '最', '觉得'], 0),
    cloze('我（ ）这个杯子很漂亮。', l('По-моему, эта чашка очень красивая.', 'I think this cup is very pretty.'), ['觉得', '要', '也'], 0),
    choice(l('«Над тремя годами» (три с лишним года):', '"Over three years old":'), ['三岁多', '多三岁', '三多岁'], 0),
    choice(l('Какое «играть» для футбола?', 'Which "play" goes with football?'), ['踢', '打', '做'], 0),
    choice(l('它 используется для…', '它 is used for…'), [l('животных и вещей', 'animals and things'), l('мужчин', 'men'), l('женщин', 'women')], 0),
    build(l('Собери: «Я тоже хочу пойти»', 'Build: "I want to go too"'), ['我', '也', '要', '去']),
    build(l('Собери: «Его кошке больше десяти лет»', 'Build: "His cat is over ten years old"'), ['他的', '猫', '十多岁', '了']),
    type(l('Напиши иероглифами или пиньинем: «самый»', 'Write in characters or pinyin: "the most"'), ['最', 'zuì']),
    tf(l('八月北京很热。→ 八月去北京旅游最好。', 'Beijing is hot in August. → August is the best month to go.'), false),
    tf(l('我不想买桌子，我要买椅子。→ 我要买椅子。', "I don't want a table, I want a chair. → I'm going to buy a chair."), true),
    choice(l('Ответ на «他们都去踢足球了，你去不去？»', 'Reply to "他们都去踢足球了，你去不去？"'), ['我没时间，明天吧。', '三岁多。', '不是我的。'], 0),
    wr('最', 'самый', 'the most'),
    wr('旅游', 'путешествовать', 'to travel'),
  ],
};
