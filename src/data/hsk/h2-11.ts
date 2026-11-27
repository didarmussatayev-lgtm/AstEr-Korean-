import type { BookUnit } from '../book';
import { build, choice, cloze, dict, dl, hskPic, l, listen, match, st, tf, type, v, wr } from './h';

const p = hskPic(2, 11);

export const unit: BookUnit = {
  n: 11,
  lesson: {
    emoji: '⚖️',
    title: l('Он старше меня на три года (他比我大三岁)', 'He is three years older than me (他比我大三岁)'),
    goal: l(
      'Сравнивать: «чем» 比, «не такой… как» 没有…那么, «может быть» 可能 и «или» в вопросе 还是.',
      'Compare things: "than" 比, "not as … as" 没有…那么, "maybe" 可能 and "or" in questions 还是.',
    ),
    theory: [
      {
        title: l('Сравнение: A 比 B + прилагательное', 'Comparison: A 比 B + adjective'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**A 比 B + прил.** — «A …ее, чем B». Разницу ставят **после** прилагательного: 大三岁 «старше на три года», 便宜50块 «дешевле на 50 юаней», 热一点儿 «немного жарче», 好多了 «намного лучше». **很** и **非常** в таком предложении не ставят.',
              '**A 比 B + adj.** means "A is more … than B". The difference goes **after** the adjective: 大三岁 "three years older", 便宜50块 "50 yuan cheaper", 热一点儿 "a bit hotter", 好多了 "much better". Don\'t use **很** or **非常** here.',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '他比我大三岁。', tr: l('Он старше меня на три года.', 'He is three years older than me.') },
              { ko: '左边那个女孩子比右边的那个大两岁。', tr: l('Девушка слева старше той, что справа, на два года.', 'The girl on the left is two years older than the one on the right.') },
              { ko: '这件衣服300块，比那件便宜50块。', tr: l('Эта вещь стоит 300 юаней — на 50 дешевле той.', 'This one is 300 yuan — 50 cheaper than that one.') },
              { ko: '今天比昨天热一点儿。', tr: l('Сегодня чуть жарче, чем вчера.', "Today is a bit hotter than yesterday.") },
            ],
          },
          { type: 'img', src: p('rb'), caption: l('左边那个女孩子比右边的那个大两岁。', 'The girl on the left is two years older than the one on the right.') },
        ],
      },
      {
        title: l('«Не такой, как»: A 没有 B (那么) + прил.', '"Not as … as": A 没有 B (那么) + adj.'),
        blocks: [
          {
            type: 'p',
            text: l(
              'Отрицательное сравнение — **A 没有 B (那么) + прил.**: «A не такой …, как B». Равенство — **A 跟 B 一样 + прил.** «одинаково».',
              'The negative comparison is **A 没有 B (那么) + adj.**: "A is not as … as B". Equality is **A 跟 B 一样 + adj.** "equally".',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '我的汉语没有哥哥和姐姐那么好。', tr: l('Мой китайский не так хорош, как у брата и сестры.', "My Chinese isn't as good as my brother's and sister's.") },
              { ko: '我觉得公共汽车没有自行车快，因为路上车很多。', tr: l('По-моему, автобус медленнее велосипеда — на дорогах много машин.', 'I think the bus is slower than a bike because the roads are busy.') },
              { ko: '女的和男的一样大。', tr: l('Женщина и мужчина одного возраста.', 'The woman and the man are the same age.') },
            ],
          },
        ],
      },
      {
        title: l('«Может быть» 可能 и «или» 还是', '"Maybe" 可能 and "or" 还是'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**可能** — «возможно, наверное»: 可能要下雨了. **A 还是 B?** — «A или B?» в вопросе: 你哥哥大还是你姐姐大？',
              '**可能** means "maybe, probably": 可能要下雨了. **A 还是 B?** means "A or B?" in a question: 你哥哥大还是你姐姐大？',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '正在打电话的那个人可能是新来的王老师。', tr: l('Тот, кто говорит по телефону, наверное, новый учитель Ван.', 'The person on the phone is probably the new Teacher Wang.') },
              { ko: '天气不太好，我觉得可能要下雨了。', tr: l('Погода так себе, кажется, будет дождь.', "The weather isn't great; I think it may rain.") },
              { ko: '你哥哥大还是你姐姐大？— 我哥哥比我姐姐大三岁。', tr: l('Кто старше — брат или сестра? — Брат старше сестры на три года.', 'Who is older, your brother or your sister? — My brother is three years older than my sister.') },
            ],
          },
          { type: 'img', src: p('ra'), caption: l('正在打电话的那个人可能是新来的王老师。', 'The person on the phone is probably the new Teacher Wang.') },
        ],
      },
      {
        title: l('Читаем: короткие диалоги', 'Reading: short dialogues'),
        blocks: [
          {
            type: 'examples',
            items: [
              { ko: '今天的鸡蛋比昨天的便宜一些，您来点儿吧。— 家里还有呢。', tr: l('Сегодня яйца дешевле вчерашних, возьмёте? — Дома ещё есть.', "Eggs are a bit cheaper than yesterday — want some? — We still have some at home.") },
              { ko: '这是你的自行车吗？真漂亮。— 这是我爸爸送给我的，昨天是我的生日。', tr: l('Это твой велосипед? Красивый! — Папа подарил, вчера был мой день рождения.', "Is this your bike? It's beautiful. — Dad gave it to me; yesterday was my birthday.") },
              { ko: '这几天怎么没看见王老师？— 她可能去旅游了。', tr: l('Почему в эти дни не видно учителя Ван? — Наверное, уехала путешествовать.', "Why haven't we seen Teacher Wang these days? — She's probably travelling.") },
            ],
          },
          { type: 'img', src: p('rf'), caption: l('吃水果对身体好，你也来一个吧。', 'Fruit is good for you — have one too.') },
        ],
      },
    ],
    vocab: [
      v('比', 'bǐ', 'чем, по сравнению с', 'than, compared with'),
      v('可能', 'kěnéng', 'возможно, наверное', 'maybe, probably'),
      v('便宜', 'piányi', 'дешёвый', 'cheap', p('rc')),
      v('一样', 'yíyàng', 'одинаковый', 'the same'),
      v('还是', 'háishi', 'или (в вопросе)', 'or (in questions)'),
      v('那么', 'nàme', 'так, настолько', 'so, that'),
      v('女孩子', 'nǚ háizi', 'девочка, девушка', 'girl'),
      v('男朋友', 'nánpéngyou', 'парень (друг)', 'boyfriend'),
      v('西瓜', 'xīguā', 'арбуз', 'watermelon'),
      v('苹果', 'píngguǒ', 'яблоко', 'apple', p('lb')),
      v('水果', 'shuǐguǒ', 'фрукты', 'fruit', p('rf')),
      v('唱歌', 'chànggē', 'петь', 'to sing', p('lc')),
      v('说话', 'shuōhuà', 'говорить, разговаривать', 'to speak, talk'),
      v('回答', 'huídá', 'отвечать', 'to answer'),
      v('咖啡', 'kāfēi', 'кофе', 'coffee', p('re')),
      v('岁', 'suì', 'год (возраста)', 'year (of age)'),
      v('一点儿', 'yìdiǎnr', 'немного', 'a little'),
      v('路上', 'lùshang', 'на дороге', 'on the road'),
      v('打电话', 'dǎ diànhuà', 'звонить', 'to call', p('ra')),
    ],
    exercises: [
      /* 0 */ match(l('Соедини слово и перевод', 'Match the words'), [
        ['便宜', l('дешёвый', 'cheap')],
        ['一样', l('одинаковый', 'the same')],
        ['可能', l('возможно', 'maybe')],
        ['回答', l('отвечать', 'answer')],
        ['西瓜', l('арбуз', 'watermelon')],
      ]),
      /* 1 */ listen('他比我大三岁', [l('Он старше меня на три года.', 'He is three years older than me.'), l('Ему три года.', 'He is three.'), l('Я старше его на три года.', "I'm three years older than him.")], 0),
      /* 2 */ cloze('昨天25度，今天（ ）昨天热一点儿。', l('Вчера было 25 градусов, сегодня чуть жарче.', 'It was 25° yesterday; today is a bit hotter.'), ['比', '跟', '还是'], 0),
      /* 3 */ cloze('每个周末，我都喜欢和朋友们一起去（ ）。', l('Каждые выходные я люблю ходить петь с друзьями.', 'Every weekend I like going to sing with friends.'), ['唱歌', '回答', '可能'], 0),
      /* 4 */ cloze('你认识（ ）的那两个人吗？', l('Ты знаешь тех двоих рядом?', 'Do you know those two people beside us?'), ['旁边', '可能', '比'], 0),
      /* 5 */ cloze('天气不太好，我觉得（ ）要下雨了。', l('Погода так себе, кажется, будет дождь.', 'The weather is poor; I think it may rain.'), ['可能', '比', '还是'], 0),
      /* 6 */ cloze('苹果很（ ），我想多买点儿。', l('Яблоки дешёвые, хочу купить побольше.', 'Apples are cheap; I want to buy more.'), ['便宜', '贵', '一样'], 0),
      /* 7 */ choice(l('«Он выше меня на 5 см»:', '"He is 5 cm taller than me":'), ['他比我高五厘米。', '他比我很高五厘米。', '他高比我五厘米。'], 0),
      /* 8 */ choice(l('Где ошибка?', 'Which is wrong?'), ['今天比昨天很冷。', '今天比昨天冷。', '今天比昨天冷一点儿。'], 0, l('С 比 нельзя 很.', '很 is not used with 比.')),
      /* 9 */ choice(l('«Мой китайский не такой хороший, как у тебя»:', '"My Chinese is not as good as yours":'), ['我的汉语没有你的那么好。', '我的汉语不比你的好。', '我的汉语比你的没有好。'], 0),
      /* 10 */ choice(l('«Чай или кофе?»', '"Tea or coffee?"'), ['喝茶还是喝咖啡？', '喝茶或者喝咖啡吗？', '喝茶还喝咖啡吧？'], 0),
      /* 11 */ tf(l('左边看报纸的这个人是我姐姐，右边写字的那个人是我哥哥。→ 他们家可能有三个孩子。', "The one reading the paper is my sister, the one writing is my brother. → There are probably three children in the family."), true),
      /* 12 */ tf(l('女儿让我告诉你，今天晚上和朋友们去唱歌，不回来吃晚饭了。→ 女儿今天在家吃晚饭。', "Our daughter says she's going singing tonight and won't be home for dinner. → She eats at home tonight."), false),
      /* 13 */ tf(l('这是儿子送给我的手表，因为明天是我的生日。→ 她送给儿子一块手表。', 'My son gave me this watch for my birthday. → She gave her son a watch.'), false),
      /* 14 */ tf(l('你问的这个问题很好，我要想一想，明天再告诉你。→ 他现在没有回答这个问题。', "Good question — let me think and tell you tomorrow. → He hasn't answered yet."), true),
      /* 15 */ tf(l('哥哥的汉语比我好，姐姐的汉语也比我好。→ 我的汉语没有哥哥和姐姐那么好。', "My brother's and sister's Chinese are better than mine. → My Chinese is not as good as theirs."), true),
      /* 16 */ match(l('Соедини реплику и ответ', 'Match the line and the reply'), [
        ['你哥哥大还是你姐姐大？', '我哥哥比我姐姐大三岁。'],
        ['这是你的自行车吗？真漂亮。', '这是我爸爸送给我的。'],
        ['你每天坐公共汽车去学校吗？', '我觉得公共汽车没有自行车快。'],
        ['这几天怎么没看见王老师？', '她可能去旅游了。'],
      ]),
      /* 17 */ build(l('Собери: «Он старше меня на три года»', 'Build: "He is three years older than me"'), ['他', '比', '我', '大', '三岁']),
      /* 18 */ build(l('Собери: «Эта дешевле той на 50 юаней»', 'Build: "This one is 50 yuan cheaper than that one"'), ['这件', '比', '那件', '便宜', '五十块']),
      /* 19 */ type(l('Напиши иероглифами или пиньинем: «дешёвый»', 'Write in characters or pinyin: "cheap"'), ['便宜', 'piányi']),
      /* 20 */ listen('可能要下雨了', [l('Наверное, будет дождь.', 'It might rain.'), l('Дождь кончился.', 'The rain stopped.'), l('Сегодня жарко.', "It's hot today.")], 0),
      /* 21 */ dict('今天比昨天热一点儿', '今天比昨天热一点儿', '今天比昨天热一点儿。', 'jīntiān bǐ zuótiān rè yìdiǎnr'),
      /* 22 */ choice(l('К какой картинке: 这件衣服300块，比那件便宜50块。', 'Which picture: 这件衣服300块，比那件便宜50块。'), [l('Девушка выбирает одежду', 'A girl choosing clothes'), l('Девочка ест яблоко', 'A girl eating an apple'), l('Друзья в кафе', 'Friends at a café')], 0),
      /* 23 */ wr('比', 'чем', 'than'),
      /* 24 */ wr('可能', 'возможно', 'maybe'),
      /* 25 */ wr('便宜', 'дешёвый', 'cheap'),
      /* 26 */ wr('一样', 'одинаковый', 'the same'),
      /* 27 */ wr('水果', 'фрукты', 'fruit'),
    ],
    dialogue: {
      title: l('Брат и сестра', 'Brother and sister'),
      lines: [
        dl('A', '左边看报纸的这个人是谁？', 'Кто это слева читает газету?', 'Who is the person on the left reading the paper?'),
        dl('B', '是我姐姐。右边写字的是我哥哥。', 'Моя сестра. А справа пишет — брат.', 'My sister. The one writing on the right is my brother.'),
        dl('A', '你哥哥大还是你姐姐大？', 'Кто старше — брат или сестра?', 'Who is older, your brother or your sister?'),
        dl('B', '我哥哥比我姐姐大三岁。', 'Брат старше сестры на три года.', 'My brother is three years older than my sister.'),
        dl('A', '他们的汉语都很好吧？', 'Они оба хорошо знают китайский?', 'They both speak good Chinese, right?'),
        dl('B', '对，我的汉语没有他们那么好。', 'Да, мой китайский не такой хороший, как у них.', "Yes, my Chinese isn't as good as theirs."),
      ],
    },
    story: {
      title: l('На рынке', 'At the market'),
      sentences: [
        st('今天比昨天热一点儿。', 'Сегодня чуть жарче, чем вчера.', 'Today is a bit hotter than yesterday.', [['比昨天', 'чем вчера', 'than yesterday'], ['热一点儿', 'немного жарче', 'a bit hotter']]),
        st('我去买水果。', 'Я иду за фруктами.', 'I go to buy fruit.', [['买', 'купить', 'buy'], ['水果', 'фрукты', 'fruit']]),
        st('今天的苹果比昨天的便宜一些。', 'Сегодня яблоки немного дешевле вчерашних.', "Today's apples are a bit cheaper than yesterday's.", [['苹果', 'яблоки', 'apples'], ['比昨天的', 'чем вчерашние', "than yesterday's"], ['便宜一些', 'немного дешевле', 'a bit cheaper']]),
        st('西瓜没有苹果那么便宜。', 'Арбуз не такой дешёвый, как яблоки.', "Watermelon isn't as cheap as apples.", [['西瓜', 'арбуз', 'watermelon'], ['没有…那么', 'не такой…, как', 'not as … as'], ['便宜', 'дешёвый', 'cheap']]),
        st('我买了很多苹果，吃水果对身体好。', 'Я купил много яблок — фрукты полезны.', 'I bought lots of apples — fruit is good for you.', [['很多', 'много', 'many'], ['对身体好', 'полезно для здоровья', 'good for health']]),
      ],
    },
  },
  exam: [
    listen('便宜', [l('дешёвый', 'cheap'), l('дорогой', 'expensive'), l('одинаковый', 'the same')], 0),
    listen('我没有他那么高', [l('Я не такой высокий, как он.', "I'm not as tall as him."), l('Я выше его.', "I'm taller than him."), l('Мы одного роста.', "We're the same height.")], 0),
    listen('你要茶还是咖啡？', [l('Тебе чай или кофе?', 'Tea or coffee?'), l('Тебе чай и кофе?', 'Tea and coffee?'), l('Ты не пьёшь кофе?', "Don't you drink coffee?")], 0),
    listen('她可能去旅游了', [l('Она, наверное, уехала путешествовать.', "She's probably gone travelling."), l('Она точно дома.', "She's definitely at home."), l('Она не любит путешествовать.', "She doesn't like travelling.")], 0),
    dict('他比我大三岁', '他比我大三岁', '他比我大三岁。', 'tā bǐ wǒ dà sān suì'),
    dict('苹果很便宜', '苹果很便宜', '苹果很便宜。', 'píngguǒ hěn piányi'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['苹果', l('яблоко', 'apple')],
      ['水果', l('фрукты', 'fruit')],
      ['唱歌', l('петь', 'sing')],
      ['说话', l('разговаривать', 'talk')],
      ['男朋友', l('парень', 'boyfriend')],
    ]),
    cloze('我（ ）我姐姐小两岁。', l('Я младше сестры на два года.', "I'm two years younger than my sister."), ['比', '跟', '没有'], 0),
    cloze('他（ ）我一样高。', l('Он такого же роста, как я.', "He's as tall as me."), ['跟', '比', '还是'], 0),
    cloze('你去（ ）我去？', l('Ты пойдёшь или я?', 'Will you go or shall I?'), ['还是', '比', '一样'], 0),
    cloze('明天（ ）会下雨。', l('Завтра, возможно, пойдёт дождь.', 'It may rain tomorrow.'), ['可能', '比', '那么'], 0),
    choice(l('«Сегодня намного холоднее, чем вчера»:', '"Today is much colder than yesterday":'), ['今天比昨天冷多了。', '今天比昨天很冷。', '今天很冷比昨天。'], 0),
    choice(l('Повторение (урок 10): «Хватит смотреть телевизор»', 'Review (lesson 10): "Stop watching TV"'), ['别看电视了。', '不看电视别了。', '看电视别了。'], 0),
    build(l('Собери: «Автобус медленнее велосипеда»', 'Build: "The bus isn\'t as fast as a bike"'), ['公共汽车', '没有', '自行车', '快']),
    build(l('Собери: «Кто старше — брат или сестра?»', 'Build: "Who is older — brother or sister?"'), ['你哥哥大', '还是', '你姐姐大']),
    type(l('Напиши иероглифами или пиньинем: «возможно»', 'Write in characters or pinyin: "maybe"'), ['可能', 'kěnéng']),
    tf(l('哥哥比姐姐大三岁。→ 姐姐比哥哥小。', 'The brother is three years older than the sister. → The sister is younger.'), true),
    tf(l('这件300块，比那件便宜50块。→ 那件250块。', 'This is 300, 50 cheaper than that one. → That one is 250.'), false),
    wr('比', 'чем', 'than'),
    wr('便宜', 'дешёвый', 'cheap'),
  ],
};
