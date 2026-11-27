import type { BookUnit } from '../book';
import { build, choice, cloze, dict, dl, hskPic, l, listen, match, st, tf, type, v, wr } from './h';

const p = hskPic(2, 3);

export const unit: BookUnit = {
  n: 3,
  lesson: {
    emoji: '🎨',
    title: l('Красная слева — моя (左边那个红色的是我的)', 'The red one on the left is mine (左边那个红色的是我的)'),
    goal: l(
      'Описывать вещи по цвету и месту: конструкция с 的 («красный — тот, что красный»), 一下 и удвоение глаголов.',
      'Describe things by colour and position: the 的 phrase ("the red one"), 一下 and reduplicated verbs.',
    ),
    theory: [
      {
        title: l('Цвета и стороны', 'Colours and sides'),
        blocks: [
          {
            type: 'table',
            head: [l('Слово', 'Word'), l('Значение', 'Meaning')],
            rows: [
              ['红色 hóngsè', l('красный', 'red')],
              ['黑色 hēisè', l('чёрный', 'black')],
              ['白色 báisè', l('белый', 'white')],
              ['粉色 fěnsè', l('розовый', 'pink')],
              ['左边 zuǒbian / 右边 yòubian', l('слева / справа', 'left / right')],
              ['旁边 pángbiān', l('рядом', 'beside')],
              ['前边 qiánbian', l('впереди', 'in front')],
            ],
          },
          { type: 'img', src: p('lb'), caption: l('白色的和黑色的 — белая и чёрная', 'the white one and the black one') },
          {
            type: 'tip',
            text: l('颜色 yánsè — «цвет». Вопрос: 什么颜色的？ — «какого цвета?»', '颜色 yánsè means "colour". Ask: 什么颜色的？ — "what colour?"'),
          },
        ],
      },
      {
        title: l('«Тот, что…»: конструкция с 的', '"The … one": the 的 phrase'),
        blocks: [
          {
            type: 'p',
            text: l(
              'Если понятно, о чём речь, существительное после **的** опускают: 红色的(杯子) — «красная (чашка)», 我的 — «моя», 昨天的 — «вчерашняя», 送报纸的 — «тот, кто разносит газеты».',
              'When it is clear what we mean, the noun after **的** is dropped: 红色的(杯子) "the red one", 我的 "mine", 昨天的 "yesterday\'s", 送报纸的 "the one who delivers newspapers".',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '左边那个红色的是我的。', tr: l('Красная слева — моя.', 'The red one on the left is mine.') },
              { ko: '桌子上的报纸是昨天的。', tr: l('Газета на столе — вчерашняя.', "The newspaper on the table is yesterday's.") },
              { ko: '前边的这个车是李老师的。', tr: l('Машина впереди — учителя Ли.', "The car in front is Teacher Li's.") },
              { ko: '这个房间不是我的，是丽丽和文文的。', tr: l('Эта комната не моя, а Лили и Вэньвэнь.', "This room isn't mine; it's Lili and Wenwen's.") },
            ],
          },
          { type: 'img', src: p('re'), caption: l('这几块手表都不是我的。 — Ни одни из этих часов не мои.', 'None of these watches are mine.') },
        ],
      },
      {
        title: l('Смягчение: 一下 и удвоение глагола', 'Softening: 一下 and reduplicated verbs'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**Глагол + 一下** или **удвоенный глагол** (看看, 喝喝) означают «немного, разок» и делают просьбу мягче.',
              '**Verb + 一下** or a **reduplicated verb** (看看, 喝喝) means "a little, for a moment" and makes a request softer.',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '你身体不好，多喝水，休息一下吧。', tr: l('Тебе нехорошо — пей больше воды и отдохни немного.', "You're not well — drink plenty of water and rest a bit.") },
              { ko: '你休息一下吧，看看报纸，喝喝茶。', tr: l('Отдохни немного, полистай газету, попей чаю.', 'Take a break, read the paper, have some tea.') },
              { ko: '我想一下。', tr: l('Дай подумать.', 'Let me think.') },
            ],
          },
          {
            type: 'tip',
            text: l('Двусложные глаголы удваиваются как ABAB: 休息休息 «отдохнуть немного».', 'Two-syllable verbs double as ABAB: 休息休息 "rest a little".'),
          },
        ],
      },
      {
        title: l('Читаем: кому что принадлежит', 'Reading: whose is it?'),
        blocks: [
          {
            type: 'examples',
            items: [
              { ko: '我不认识前边的那两个人，他们是谁？— 左边的是王老师，旁边的是张老师。', tr: l('Я не знаю тех двоих впереди, кто они? — Слева учитель Ван, рядом — учитель Чжан.', "I don't know the two people in front — who are they? — On the left is Teacher Wang, next to him Teacher Zhang.") },
              { ko: '我想给爸爸买一块手表，你觉得这块怎么样？— 我觉得这块很漂亮。', tr: l('Хочу купить папе часы, как тебе эти? — По-моему, очень красивые.', 'I want to buy Dad a watch — what do you think of this one? — I think it is very pretty.') },
              { ko: '我的房间太小，住不下两个人。— 没关系，我去朋友家，他家很大。', tr: l('Моя комната маленькая, вдвоём не поместимся. — Ничего, пойду к другу, у него дом большой.', "My room is too small for two. — It's fine, I'll go to my friend's — his house is big.") },
            ],
          },
          { type: 'img', src: p('rc'), caption: l('他骑着车去送报纸。 — Он развозит газеты на велосипеде.', 'He rides his bike to deliver newspapers.') },
        ],
      },
    ],
    vocab: [
      v('左边', 'zuǒbian', 'слева', 'left side'),
      v('右边', 'yòubian', 'справа', 'right side'),
      v('旁边', 'pángbiān', 'рядом', 'beside'),
      v('红色', 'hóngsè', 'красный', 'red'),
      v('黑色', 'hēisè', 'чёрный', 'black', p('lb')),
      v('白色', 'báisè', 'белый', 'white'),
      v('粉色', 'fěnsè', 'розовый', 'pink'),
      v('颜色', 'yánsè', 'цвет', 'colour'),
      v('手表', 'shǒubiǎo', 'наручные часы', 'watch', p('re')),
      v('报纸', 'bàozhǐ', 'газета', 'newspaper', p('la')),
      v('送', 'sòng', 'доставлять; дарить', 'to deliver; to give', p('rc')),
      v('牛奶', 'niúnǎi', 'молоко', 'milk', p('lf')),
      v('房间', 'fángjiān', 'комната', 'room', p('le')),
      v('丈夫', 'zhàngfu', 'муж', 'husband'),
      v('一下', 'yíxià', 'немного, разок', 'a bit, once'),
      v('真', 'zhēn', 'по-настоящему, очень', 'really'),
      v('千', 'qiān', 'тысяча', 'thousand'),
      v('块', 'kuài', 'юань (разг.); счётное для часов', 'yuan (coll.); measure word'),
      v('认识', 'rènshi', 'знать (человека)', 'to know (a person)'),
      v('车', 'chē', 'машина', 'car', p('rb')),
      v('茶', 'chá', 'чай', 'tea', p('l5')),
    ],
    exercises: [
      /* 0 */ match(l('Соедини цвет и перевод', 'Match the colours'), [
        ['红色', l('красный', 'red')],
        ['黑色', l('чёрный', 'black')],
        ['白色', l('белый', 'white')],
        ['粉色', l('розовый', 'pink')],
      ]),
      /* 1 */ match(l('Соедини слово и перевод', 'Match the words'), [
        ['手表', l('часы', 'watch')],
        ['报纸', l('газета', 'newspaper')],
        ['牛奶', l('молоко', 'milk')],
        ['房间', l('комната', 'room')],
        ['丈夫', l('муж', 'husband')],
      ]),
      /* 2 */ listen('左边的', [l('тот, что слева', 'the one on the left'), l('тот, что справа', 'the one on the right'), l('тот, что рядом', 'the one beside')], 0),
      /* 3 */ cloze('今天天气（ ）好，我们出去走走吧。', l('Сегодня такая хорошая погода, давай погуляем.', "The weather is really nice today, let's go for a walk."), ['真', '送', '千'], 0),
      /* 4 */ cloze('我也不知道吃什么，我想（ ）。', l('Я тоже не знаю, что поесть, дай подумать.', "I don't know what to eat either, let me think."), ['一下', '旁边', '送'], 0),
      /* 5 */ cloze('我丈夫在医院呢，我要去给他（ ）饭。', l('Муж в больнице, мне надо отнести ему еду.', "My husband is in hospital — I'm taking him food."), ['送', '真', '一下'], 0),
      /* 6 */ cloze('这块手表一（ ）多块钱，我有八百块。', l('Эти часы стоят больше тысячи, а у меня восемьсот.', "This watch costs over a thousand; I have eight hundred."), ['千', '下', '真'], 0),
      /* 7 */ cloze('张先生在家呢，他在桌子（ ）看报纸呢。', l('Господин Чжан дома, читает газету у стола.', 'Mr. Zhang is home, reading the paper beside the table.'), ['旁边', '一下', '千'], 0),
      /* 8 */ choice(l('«Красная — моя» (о чашке):', '"The red one is mine" (about a cup):'), ['红色的是我的。', '红色是我。', '我的是红色。'], 0),
      /* 9 */ choice(l('Что значит 送报纸的?', 'What does 送报纸的 mean?'), [l('разносчик газет', 'the newspaper deliverer'), l('вчерашняя газета', "yesterday's paper"), l('газета в подарок', 'a newspaper as a gift')], 0),
      /* 10 */ choice(l('Мягкая просьба «отдохни немного»:', 'Soft "rest a bit":'), ['休息一下吧。', '一下休息吧。', '休息休息一下吧。'], 0),
      /* 11 */ choice(l('Удвоенная форма 看:', 'Reduplicated form of 看:'), ['看看', '看一看看', '看了看了'], 0),
      /* 12 */ tf(l('这个房间是丽丽的，她喜欢粉色的房间。→ 丽丽的房间是粉色的。', "This is Lili's room; she likes pink rooms. → Lili's room is pink."), true),
      /* 13 */ tf(l('桌子上的报纸是昨天的，今天送报纸的没来。→ 桌子上的报纸不是今天的。', "The paper on the table is yesterday's. → The paper on the table is not today's."), true),
      /* 14 */ tf(l('你的药在房间里，这是爸爸的。→ 房间里的药是爸爸的。', "Your medicine is in the room; this is Dad's. → The medicine in the room is Dad's."), false),
      /* 15 */ tf(l('这块手表是昨天买的，我很喜欢。→ 我昨天买了一块手表。', 'I bought this watch yesterday. → I bought a watch yesterday.'), true),
      /* 16 */ match(l('Соедини реплику и ответ', 'Match the line and the reply'), [
        ['今天我要做早饭、午饭，还要做晚饭。', '做三次饭，真累啊！'],
        ['我不认识前边的那两个人，他们是谁？', '左边的是王老师，旁边的是张老师。'],
        ['我的房间太小，住不下两个人。', '没关系，我去朋友家，他家很大。'],
        ['我想给爸爸买一块手表，你觉得这块怎么样？', '我觉得这块很漂亮。'],
      ]),
      /* 17 */ build(l('Собери: «Красная слева — моя»', 'Build: "The red one on the left is mine"'), ['左边', '那个', '红色的', '是', '我的']),
      /* 18 */ build(l('Собери: «Отдохни немного, попей чаю»', 'Build: "Rest a bit, have some tea"'), ['你', '休息一下吧', '喝喝茶']),
      /* 19 */ type(l('Напиши иероглифами или пиньинем: «цвет»', 'Write in characters or pinyin: "colour"'), ['颜色', 'yánsè']),
      /* 20 */ listen('这几块手表都不是我的', [l('Ни одни из этих часов не мои.', 'None of these watches are mine.'), l('Все эти часы мои.', 'All these watches are mine.'), l('Я купил часы вчера.', 'I bought a watch yesterday.')], 0),
      /* 21 */ dict('红色的是我的', '红色的是我的', '红色的是我的。', 'hóngsè de shì wǒ de'),
      /* 22 */ choice(l('К какой картинке: 这个房间不是我的，是丽丽和文文的。', 'Which picture: 这个房间不是我的，是丽丽和文文的。'), [l('Комната с двухъярусной кроватью', 'A room with a bunk bed'), l('Машины на улице', 'Cars on the street'), l('Часы', 'Watches')], 0),
      /* 23 */ wr('手', 'рука', 'hand'),
      /* 24 */ wr('手表', 'часы', 'watch'),
      /* 25 */ wr('丈夫', 'муж', 'husband'),
      /* 26 */ wr('颜色', 'цвет', 'colour'),
      /* 27 */ wr('红色', 'красный', 'red'),
      /* 28 */ wr('房间', 'комната', 'room'),
    ],
    dialogue: {
      title: l('Какая чашка твоя?', 'Which cup is yours?'),
      lines: [
        dl('A', '小王，这里有几个杯子，哪个是你的？', 'Сяо Ван, тут несколько чашек, какая твоя?', 'Xiao Wang, there are a few cups here — which is yours?'),
        dl('B', '左边那个红色的是我的。', 'Красная слева — моя.', 'The red one on the left is mine.'),
        dl('A', '旁边那个白色的呢？', 'А белая рядом?', 'And the white one next to it?'),
        dl('B', '白色的是丽丽的。你休息一下吧，喝喝茶。', 'Белая — Лили. Отдохни немного, попей чаю.', "The white one is Lili's. Take a break and have some tea."),
      ],
    },
    story: {
      title: l('Утро господина Чжана', "Mr. Zhang's morning"),
      sentences: [
        st('张先生在家呢。', 'Господин Чжан дома.', 'Mr. Zhang is at home.', [['张先生', 'господин Чжан', 'Mr. Zhang'], ['在家呢', 'дома', 'at home']]),
        st('他在桌子旁边看报纸。', 'Он читает газету у стола.', 'He is reading the paper beside the table.', [['桌子旁边', 'у стола', 'beside the table'], ['看报纸', 'читать газету', 'read the paper']]),
        st('桌子上的报纸是昨天的。', 'Газета на столе — вчерашняя.', "The newspaper on the table is yesterday's.", [['桌子上的', 'на столе', 'on the table'], ['昨天的', 'вчерашняя', "yesterday's"]]),
        st('今天送报纸的没来。', 'Сегодня разносчик газет не пришёл.', "Today the paper boy didn't come.", [['送报纸的', 'разносчик газет', 'the paper boy'], ['没来', 'не пришёл', "didn't come"]]),
        st('他想给妻子买一块手表，红色的。', 'Он хочет купить жене часы — красные.', 'He wants to buy his wife a watch — a red one.', [['给妻子', 'жене', 'for his wife'], ['一块手表', 'одни часы', 'a watch'], ['红色的', 'красные', 'a red one']]),
      ],
    },
  },
  exam: [
    listen('红色', [l('красный', 'red'), l('чёрный', 'black'), l('белый', 'white')], 0),
    listen('右边的是我的', [l('Тот, что справа, — мой.', 'The one on the right is mine.'), l('Тот, что слева, — мой.', 'The one on the left is mine.'), l('Тот, что рядом, — мой.', 'The one beside is mine.')], 0),
    listen('你休息一下吧', [l('Отдохни немного.', 'Rest a bit.'), l('Ты уже отдохнул?', 'Have you rested?'), l('Не отдыхай.', "Don't rest.")], 0),
    listen('这是昨天的报纸', [l('Это вчерашняя газета.', "This is yesterday's paper."), l('Это сегодняшняя газета.', "This is today's paper."), l('Газету не принесли.', "The paper didn't come.")], 0),
    dict('左边那个红色的是我的', '左边那个红色的是我的', '左边那个红色的是我的。', 'zuǒbian nàge hóngsè de shì wǒ de'),
    dict('我想给爸爸买手表', '我想给爸爸买手表', '我想给爸爸买手表。', 'wǒ xiǎng gěi bàba mǎi shǒubiǎo'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['旁边', l('рядом', 'beside')],
      ['颜色', l('цвет', 'colour')],
      ['认识', l('знать (человека)', 'know (a person)')],
      ['送', l('доставлять', 'deliver')],
      ['千', l('тысяча', 'thousand')],
    ]),
    cloze('这块手表是谁（ ）？', l('Чьи это часы?', 'Whose watch is this?'), ['的', '一下', '真'], 0),
    cloze('你看（ ）这本书吧。', l('Посмотри эту книгу.', 'Have a look at this book.'), ['一下', '的', '真'], 0),
    cloze('前边（ ）这个车是李老师的。', l('Машина впереди — учителя Ли.', "The car in front is Teacher Li's."), ['的', '一下', '送'], 0),
    cloze('今天天气（ ）好！', l('Какая сегодня хорошая погода!', 'The weather is really nice today!'), ['真', '千', '送'], 0),
    choice(l('«Не знаю тех людей» (лично):', '"I don\'t know those people" (personally):'), ['我不认识他们。', '我不知道他们。', '我不觉得他们。'], 0, l('Человека «знают» — 认识, факт — 知道.', 'People: 认识; facts: 知道.')),
    choice(l('Повторение (урок 2): «Я встаю каждый день в шесть»', 'Review (lesson 2): "I get up at six every day"'), ['我每天六点起床。', '我六点每天起床。', '我每天起床六点。'], 0),
    build(l('Собери: «Белая — Лили»', 'Build: "The white one is Lili\'s"'), ['白色的', '是', '丽丽的']),
    build(l('Собери: «Газета на столе — вчерашняя»', 'Build: "The paper on the table is yesterday\'s"'), ['桌子上的', '报纸', '是', '昨天的']),
    type(l('Напиши иероглифами или пиньинем: «часы (наручные)»', 'Write in characters or pinyin: "watch"'), ['手表', 'shǒubiǎo']),
    tf(l('你的药在房间里，这是爸爸的。→ 这是爸爸的药。', "Your medicine is in the room; this is Dad's. → This is Dad's medicine."), true),
    tf(l('我的房间太小，住不下两个人。→ 我的房间很大。', 'My room is too small for two. → My room is big.'), false),
    wr('手表', 'часы', 'watch'),
    wr('颜色', 'цвет', 'colour'),
  ],
};
