import type { BookUnit } from '../book';
import { build, choice, cloze, dict, dl, hskPic, l, listen, match, st, tf, type, v, wr } from './h';

const p = hskPic(2, 8);

export const unit: BookUnit = {
  n: 8,
  lesson: {
    emoji: '🤔',
    title: l('Дай подумать, потом скажу (让我想想再告诉你)', "Let me think about it and I'll tell you later (让我想想再告诉你)"),
    goal: l(
      'Просить и передавать просьбы, откладывать на потом: «пусть, велеть» 让, «потом, тогда» 再, «подождать, пока» 等…再.',
      'Ask and pass on requests, put things off: "let, ask (someone to)" 让, "then, later" 再, "wait until … then" 等…再.',
    ),
    theory: [
      {
        title: l('«Пусть, попросить»: 让', '"Let, ask someone to": 让'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**A 让 B + глагол** — «A просит/велит/позволяет B сделать»: 王老师让我给你打电话 — «учитель Ван попросил меня позвонить тебе». 让我想想 — «дай(те) мне подумать».',
              '**A 让 B + verb** means "A asks / tells / lets B do": 王老师让我给你打电话 — "Teacher Wang asked me to call you". 让我想想 — "let me think".',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '王老师让我告诉你，明天他有事，不能来上课了。', tr: l('Учитель Ван попросил передать: завтра он занят и не придёт на урок.', "Teacher Wang asked me to tell you he's busy tomorrow and can't teach.") },
              { ko: '张老师在上课呢，他让你等一会儿。', tr: l('Учитель Чжан на уроке, просил тебя немного подождать.', 'Teacher Zhang is teaching — he asks you to wait a moment.') },
            ],
          },
          { type: 'img', src: p('rf'), caption: l('王老师让我给张朋打个电话。 — Учитель Ван попросил меня позвонить Чжан Пэну.', 'Teacher Wang asked me to call Zhang Peng.') },
        ],
      },
      {
        title: l('Сначала… потом: удвоение глагола + 再', 'First… then: reduplicated verb + 再'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**再** — «потом, ещё раз», о будущем: 明天再去 «пойдём завтра». **Удвоенный глагол + 再 + глагол** — «сначала немного…, потом…»: 让我想想再告诉你.',
              '**再** means "then, again" about the future: 明天再去 "let\'s go tomorrow". **Reduplicated verb + 再 + verb** means "first … a bit, then …": 让我想想再告诉你.',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '你想看什么电影？— 让我想想再告诉你。', tr: l('Какой фильм хочешь посмотреть? — Дай подумать, потом скажу.', "What film do you want to see? — Let me think and I'll tell you.") },
              { ko: '今天下午我没时间，明天再去看电影吧。', tr: l('Сегодня днём нет времени, сходим в кино завтра.', "I'm busy this afternoon — let's go to the cinema tomorrow.") },
              { ko: '大卫今天不在家，你明天再给他打电话吧。', tr: l('Дэвида сегодня нет дома, позвони ему завтра.', "David isn't home today — call him again tomorrow.") },
            ],
          },
          {
            type: 'tip',
            text: l('Не путай: 再 — «ещё раз» в будущем, 又 — «снова» в прошлом.', 'Don\'t mix up: 再 is "again" in the future, 又 is "again" in the past.'),
          },
        ],
      },
      {
        title: l('«Подождать, пока…»: 等 … 再', '"Wait until… then": 等 … 再'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**等 + событие + (的时候) + 再 + действие** — «когда …, тогда …».',
              '**等 + event + (的时候) + 再 + action** means "when … then …, wait until …".',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '等天气好的时候再去给你买自行车吧。', tr: l('Когда будет хорошая погода, тогда и купим тебе велосипед.', "Let's buy you a bike when the weather is good.") },
              { ko: '我很累，以后再去看吧。', tr: l('Я устал, сходим как-нибудь потом.', "I'm tired — let's go some other time.") },
            ],
          },
          { type: 'img', src: p('ra'), caption: l('外面天气很好，我们一起去运动运动吧。', "The weather is nice — let's go and exercise together.") },
        ],
      },
      {
        title: l('Читаем: в магазине и в гостинице', 'Reading: at a shop and a hotel'),
        blocks: [
          {
            type: 'examples',
            items: [
              { ko: '这些都是今天新来的衣服。— 这件白的有点儿长，那件黑的有点儿贵，我再看看吧。', tr: l('Это всё новые поступления. — Белая длинновата, чёрная дороговата, я ещё посмотрю.', "These all arrived today. — The white one's a bit long, the black one's a bit pricey; I'll keep looking.") },
              { ko: '服务员，我想要点儿热水。— 好的，请问您住哪个房间？', tr: l('Официант, можно горячей воды? — Конечно, в каком вы номере?', 'Waiter, I\'d like some hot water. — Sure, which room are you in?') },
              { ko: '请问，你找服务员有什么事情？', tr: l('Скажите, какое у вас дело к официанту?', 'Excuse me, what do you need the attendant for?') },
            ],
          },
          { type: 'img', src: p('l1'), caption: l('白的和黑的 — белая и чёрная', 'the white one and the black one') },
        ],
      },
    ],
    vocab: [
      v('让', 'ràng', 'позволять, просить, велеть', 'to let, to ask'),
      v('告诉', 'gàosu', 'сообщать, говорить', 'to tell'),
      v('再', 'zài', 'потом, ещё раз', 'then, again'),
      v('等', 'děng', 'ждать', 'to wait'),
      v('一会儿', 'yíhuìr', 'немного (времени)', 'a moment'),
      v('事情', 'shìqing', 'дело', 'matter, thing'),
      v('找', 'zhǎo', 'искать; обращаться к', 'to look for'),
      v('服务员', 'fúwùyuán', 'официант, обслуживающий', 'waiter, attendant'),
      v('请问', 'qǐngwèn', 'скажите, пожалуйста', 'excuse me, may I ask'),
      v('手机', 'shǒujī', 'мобильный телефон', 'mobile phone', p('la')),
      v('电影', 'diànyǐng', 'фильм, кино', 'film'),
      v('唱歌', 'chànggē', 'петь', 'to sing'),
      v('长', 'cháng', 'длинный', 'long'),
      v('热水', 'rèshuǐ', 'горячая вода', 'hot water'),
      v('以后', 'yǐhòu', 'потом, впоследствии', 'later'),
      v('商店', 'shāngdiàn', 'магазин', 'shop', p('rb')),
      v('衣服', 'yīfu', 'одежда', 'clothes', p('l2')),
      v('累', 'lèi', 'усталый', 'tired', p('re')),
      v('病', 'bìng', 'болезнь; болеть', 'illness; ill', p('rc')),
    ],
    exercises: [
      /* 0 */ match(l('Соедини слово и перевод', 'Match the words'), [
        ['让', l('просить, позволять', 'let, ask')],
        ['告诉', l('сообщать', 'tell')],
        ['等', l('ждать', 'wait')],
        ['找', l('искать', 'look for')],
        ['事情', l('дело', 'matter')],
      ]),
      /* 1 */ listen('让我想想', [l('Дай подумать.', 'Let me think.'), l('Скажи мне.', 'Tell me.'), l('Подожди меня.', 'Wait for me.')], 0),
      /* 2 */ cloze('我这个星期很忙，下个星期再（ ）时间一起去看电影吧。', l('На этой неделе занят, на следующей найдём время сходить в кино.', "I'm busy this week; let's find time next week for a film."), ['找', '让', '等'], 0),
      /* 3 */ cloze('张老师在上课呢，他让你（ ）一会儿。', l('Учитель Чжан на уроке, просит подождать.', 'Teacher Zhang is teaching; he asks you to wait a bit.'), ['等', '找', '让'], 0),
      /* 4 */ cloze('王老师（ ）我告诉你，明天他有事，不能来上课了。', l('Учитель Ван попросил меня передать, что завтра он не придёт.', "Teacher Wang asked me to tell you he can't come tomorrow."), ['让', '等', '再'], 0),
      /* 5 */ cloze('大卫今天不在家，你明天（ ）给他打电话吧。', l('Дэвида нет дома, позвони ему завтра.', "David isn't home; call him tomorrow."), ['再', '让', '等'], 0),
      /* 6 */ cloze('请问，你找服务员有什么（ ）？', l('Какое у вас дело к официанту?', 'What do you need the attendant for?'), ['事情', '时间', '东西'], 0),
      /* 7 */ choice(l('«Дай подумать, потом скажу»:', '"Let me think and I\'ll tell you":'), ['让我想想再告诉你。', '我让想想告诉你再。', '再想想让我告诉你。'], 0),
      /* 8 */ choice(l('«Сходим завтра» (откладываем):', '"Let\'s go tomorrow" (putting off):'), ['明天再去吧。', '明天又去吧。', '再明天去了。'], 0, l('О будущем — 再, о прошлом — 又.', 'Future — 再, past — 又.')),
      /* 9 */ tf(l('王老师让我给大卫打个电话。→ 王老师给大卫打电话。', 'Teacher Wang asked me to call David. → Teacher Wang calls David.'), false, l('Звонить будет «я», а не учитель.', '"I" make the call, not the teacher.')),
      /* 10 */ tf(l('今天下午我没时间，明天再去看电影吧。→ 我今天不去看电影。', "I'm busy this afternoon; let's go tomorrow. → I'm not going to the cinema today."), true),
      /* 11 */ tf(l('这件白的有点儿长，那件黑的有点儿贵。→ 两件衣服我都不太喜欢。', 'The white one is a bit long, the black one a bit pricey. → I don\'t really like either.'), true),
      /* 12 */ tf(l('今天天气不太好，等天气好的时候再去买自行车吧。→ 外面正在下雨。', "The weather isn't great; let's buy the bike when it's nice. → It's raining now."), false, l('О дожде в тексте ничего нет — только «погода не очень».', 'The text says nothing about rain — only "not great weather".')),
      /* 13 */ tf(l('这是我们家的猫，是我姐姐送给我的。→ 猫不是我家的。', 'This is our cat; my sister gave it to me. → The cat is not ours.'), false),
      /* 14 */ match(l('Соедини реплику и ответ', 'Match the line and the reply'), [
        ['你想看什么电影？', '让我想想再告诉你。'],
        ['这些都是今天新来的衣服。', '这件白的有点儿长，我再看看吧。'],
        ['好的，请问您住哪个房间？', '服务员，我想要点儿热水。'],
        ['晚上去看电影，好吗？', '我很累，以后再去看吧。'],
      ]),
      /* 15 */ build(l('Собери: «Учитель попросил меня тебе позвонить»', 'Build: "The teacher asked me to call you"'), ['老师', '让', '我', '给你', '打电话']),
      /* 16 */ build(l('Собери: «Позвони ему завтра»', 'Build: "Call him tomorrow"'), ['你', '明天', '再', '给他', '打电话吧']),
      /* 17 */ type(l('Напиши иероглифами или пиньинем: «сообщать, говорить»', 'Write in characters or pinyin: "to tell"'), ['告诉', 'gàosu']),
      /* 18 */ listen('他让你等一会儿', [l('Он просит тебя немного подождать.', 'He asks you to wait a moment.'), l('Он тебя ищет.', "He's looking for you."), l('Он придёт через час.', "He'll come in an hour.")], 0),
      /* 19 */ dict('明天再去看电影吧', '明天再去看电影吧', '明天再去看电影吧。', 'míngtiān zài qù kàn diànyǐng ba'),
      /* 20 */ choice(l('К какой картинке: 妈妈生病了，我们去医院看看她吧。', 'Which picture: 妈妈生病了，我们去医院看看她吧。'), [l('Медсестра у кровати больной', 'A nurse at a patient\'s bed'), l('Магазин', 'A shop'), l('Люди на зарядке', 'People exercising')], 0),
      /* 21 */ wr('让', 'просить, позволять', 'to let'),
      /* 22 */ wr('告诉', 'сообщать', 'to tell'),
      /* 23 */ wr('再', 'потом, снова', 'again'),
      /* 24 */ wr('服务员', 'официант', 'waiter'),
      /* 25 */ wr('电影', 'кино', 'film'),
    ],
    dialogue: {
      title: l('Пойдём в кино?', 'Shall we see a film?'),
      lines: [
        dl('A', '晚上我们去看电影，好吗？', 'Вечером сходим в кино?', "Shall we see a film tonight?"),
        dl('B', '今天我有点儿累，明天再去吧。', 'Сегодня я устал, давай завтра.', "I'm a bit tired today — let's go tomorrow."),
        dl('A', '好。你想看什么电影？', 'Ладно. Какой фильм хочешь?', 'OK. Which film do you want to see?'),
        dl('B', '让我想想再告诉你。', 'Дай подумать, потом скажу.', "Let me think and I'll tell you."),
        dl('A', '好的，我等你的电话。', 'Хорошо, жду звонка.', "OK, I'll wait for your call."),
      ],
    },
    story: {
      title: l('Записка от учителя', "A message from the teacher"),
      sentences: [
        st('王老师让我告诉你一件事情。', 'Учитель Ван попросил передать тебе одно дело.', 'Teacher Wang asked me to tell you something.', [['让我告诉你', 'попросил меня передать', 'asked me to tell you'], ['一件事情', 'одно дело', 'one thing']]),
        st('明天他有事，不能来上课了。', 'Завтра он занят и не сможет провести урок.', "Tomorrow he's busy and can't teach.", [['有事', 'есть дела', 'is busy'], ['不能来上课', 'не может прийти на урок', "can't come to class"]]),
        st('他让你等他的电话。', 'Он просит тебя дождаться его звонка.', 'He asks you to wait for his call.', [['让你', 'просит тебя', 'asks you'], ['等他的电话', 'ждать его звонка', 'wait for his call']]),
        st('你要是有问题，等他回来再问吧。', 'Если есть вопросы, спроси, когда он вернётся.', 'If you have questions, ask him when he is back.', [['等他回来', 'когда он вернётся', 'when he returns'], ['再问', 'тогда спросить', 'then ask']]),
      ],
    },
  },
  exam: [
    listen('告诉', [l('сообщать', 'tell'), l('ждать', 'wait'), l('искать', 'look for')], 0),
    listen('你明天再来吧', [l('Приходи завтра.', 'Come again tomorrow.'), l('Ты приходил вчера.', 'You came yesterday.'), l('Не приходи.', "Don't come.")], 0),
    listen('妈妈让我买水果', [l('Мама попросила меня купить фрукты.', 'Mum asked me to buy fruit.'), l('Мама купила фрукты.', 'Mum bought fruit.'), l('Я не люблю фрукты.', "I don't like fruit.")], 0),
    listen('请问，你找谁？', [l('Скажите, кого вы ищете?', 'Excuse me, who are you looking for?'), l('Скажите, который час?', 'Excuse me, what time is it?'), l('Кто вы?', 'Who are you?')], 0),
    dict('让我想想再告诉你', '让我想想再告诉你', '让我想想再告诉你。', 'ràng wǒ xiǎngxiang zài gàosu nǐ'),
    dict('请你等一会儿', '请你等一会儿', '请你等一会儿。', 'qǐng nǐ děng yíhuìr'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['服务员', l('официант', 'waiter')],
      ['手机', l('телефон', 'mobile phone')],
      ['唱歌', l('петь', 'sing')],
      ['热水', l('горячая вода', 'hot water')],
      ['长', l('длинный', 'long')],
    ]),
    cloze('医生（ ）我多休息。', l('Врач велел мне больше отдыхать.', 'The doctor told me to rest more.'), ['让', '再', '等'], 0),
    cloze('我现在很忙，以后（ ）说吧。', l('Сейчас занят, поговорим потом.', "I'm busy now; let's talk later."), ['再', '让', '找'], 0),
    cloze('你（ ）我一会儿，我马上来。', l('Подожди меня минутку, сейчас приду.', "Wait for me a moment, I'm coming."), ['等', '让', '告诉'], 0),
    cloze('我在（ ）我的手机。', l('Я ищу свой телефон.', "I'm looking for my phone."), ['找', '等', '让'], 0),
    choice(l('Повторение (урок 7): «Мой дом далеко от работы»', 'Review (lesson 7): "My home is far from work"'), ['我家离公司很远。', '我家从公司很远。', '我家到公司离很远。'], 0),
    choice(l('Ответ на «你找大卫有什么事情吗？»', 'Reply to "你找大卫有什么事情吗？"'), ['他妈妈病了，我想去医院看看她。', '让我想想再告诉你。', '这件白的有点儿长。'], 0),
    build(l('Собери: «Учитель велел мне подождать»', 'Build: "The teacher told me to wait"'), ['老师', '让我', '等', '一会儿']),
    build(l('Собери: «Когда будет хорошая погода, тогда поедем»', 'Build: "When the weather is good, then we\'ll go"'), ['等', '天气好的时候', '再去吧']),
    type(l('Напиши иероглифами или пиньинем: «ждать»', 'Write in characters or pinyin: "to wait"'), ['等', 'děng']),
    tf(l('王老师让我告诉你，明天他不能来。→ 王老师明天不来上课。', "Teacher Wang asked me to tell you he can't come tomorrow. → Teacher Wang won't teach tomorrow."), true),
    tf(l('明天再去看电影吧。→ 他们今天去看电影。', "Let's go tomorrow. → They go to the cinema today."), false),
    wr('让', 'просить, позволять', 'to let'),
    wr('告诉', 'сообщать', 'to tell'),
  ],
};
