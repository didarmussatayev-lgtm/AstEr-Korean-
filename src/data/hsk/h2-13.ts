import type { BookUnit } from '../book';
import { build, choice, cloze, dict, dl, hskPic, l, listen, match, st, tf, type, v, wr } from './h';

const p = hskPic(2, 13);

export const unit: BookUnit = {
  n: 13,
  lesson: {
    emoji: '🚪',
    title: l('Дверь открыта (门开着呢)', 'The door is open (门开着呢)'),
    goal: l(
      'Описывать состояние и сопутствующее действие: суффикс 着 (门开着, 坐着上课, 走着去), направление 往 и «прямо» 一直.',
      'Describe states and accompanying actions: the suffix 着 (门开着, 坐着上课, 走着去), direction 往 and "straight on" 一直.',
    ),
    theory: [
      {
        title: l('Состояние: глагол + 着', 'A lasting state: verb + 着'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**Глагол + 着** — действие оставило **длящееся состояние**: 门开着 «дверь открыта», 手里拿着 «держит в руке», 坐着很多学生 «сидит много студентов». Отрицание — **没 + глагол + 着**: 门没开着.',
              '**Verb + 着** shows a **lasting state**: 门开着 "the door is open", 手里拿着 "holding in the hand", 坐着很多学生 "many students are sitting". Negative: **没 + verb + 着**: 门没开着.',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '都十点了，咖啡店还开着门呢。', tr: l('Уже десять, а кофейня ещё открыта.', "It's already ten and the café is still open.") },
              { ko: '你手里拿着的是什么东西，我能看看吗？', tr: l('Что это у тебя в руке, можно посмотреть?', "What are you holding? Can I see?") },
              { ko: '我看见在教室里坐着很多学生。', tr: l('Я видел, в классе сидит много студентов.', 'I saw lots of students sitting in the classroom.') },
            ],
          },
          { type: 'img', src: p('rf'), caption: l('咖啡店还开着门呢。 — Кофейня ещё открыта.', 'The café is still open.') },
        ],
      },
      {
        title: l('Делать что-то, при этом…: V1 着 + V2', 'Doing one thing while…: V1 着 + V2'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**Глагол1 + 着 + глагол2** — второе действие выполняется **в состоянии / способом** первого: 坐着上课 «вести урок сидя», 走着去 «идти пешком», 笑着说 «сказать с улыбкой», 开着车听音乐 «слушать музыку за рулём».',
              '**Verb1 + 着 + verb2** — the second action is done **in the manner of** the first: 坐着上课 "teach sitting down", 走着去 "go on foot", 笑着说 "say with a smile", 开着车听音乐 "listen to music while driving".',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '老师每天都坐着给学生们上课。', tr: l('Учитель каждый день ведёт уроки сидя.', 'The teacher gives classes sitting down every day.') },
              { ko: '学校离我家很近，我每天走着去上课。', tr: l('Школа близко, я каждый день хожу пешком.', 'The school is near my home; I walk to class every day.') },
              { ko: '妈妈笑着说：“今天给你们做了很多好吃的东西。”', tr: l('Мама с улыбкой сказала: «Сегодня наготовила вам много вкусного».', 'Mum said with a smile, "I made lots of tasty food for you today."') },
              { ko: '妈妈告诉我说，不要开着车听音乐。', tr: l('Мама говорит: не слушай музыку за рулём.', "Mum told me not to listen to music while driving.") },
            ],
          },
          { type: 'img', src: p('ra'), caption: l('妈妈笑着说…', 'Mum said with a smile…') },
        ],
      },
      {
        title: l('Направление: 往 и 一直', 'Direction: 往 and 一直'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**往 + сторона + глагол** — «в сторону»: 往前走 «идти вперёд», 往右 «направо». **一直** — «прямо, всё время»: 一直走.',
              '**往 + direction + verb** means "towards": 往前走 "go forward", 往右 "to the right". **一直** means "straight, all the way": 一直走.',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '从这儿往前走，过一个路口，就是北京医院。', tr: l('Отсюда идите вперёд, после перекрёстка — Пекинская больница.', 'Go ahead from here; after one crossing you\'ll find Beijing Hospital.') },
              { ko: '从这个路口一直走，就能看到你们学校了。', tr: l('От этого перекрёстка идите прямо — увидите вашу школу.', 'Go straight from this crossing and you\'ll see your school.') },
            ],
          },
          { type: 'img', src: p('l5'), caption: l('往右 — направо', '往右 — to the right') },
        ],
      },
      {
        title: l('Читаем: диалоги', 'Reading: dialogues'),
        blocks: [
          {
            type: 'examples',
            items: [
              { ko: '张先生呢？我今天怎么没看见他？— 他开着车出去了，下午可能回来。', tr: l('Где господин Чжан? Почему сегодня его не видно? — Уехал на машине, вернётся, наверное, после обеда.', "Where's Mr. Zhang? — He drove out; he may be back this afternoon.") },
              { ko: '你不是学过两年汉语吗？— 不是两年，是一年半。', tr: l('Ты же два года учил китайский? — Не два, а полтора.', "Didn't you study Chinese for two years? — Not two, a year and a half.") },
              { ko: '李哥，你手里拿着的是电影票吗？我也想跟你一起去看电影。', tr: l('Ли-гэ, у тебя в руке билеты в кино? Я тоже хочу с тобой.', "Brother Li, are those cinema tickets in your hand? I'd like to come too.") },
            ],
          },
          { type: 'img', src: p('l1'), caption: l('他开着车出去了。 — Он уехал на машине.', 'He drove out.') },
        ],
      },
    ],
    vocab: [
      v('着', 'zhe', 'суффикс состояния', 'aspect particle (state)'),
      v('开', 'kāi', 'открывать; водить (машину)', 'to open; to drive'),
      v('门', 'mén', 'дверь', 'door'),
      v('拿', 'ná', 'держать, брать', 'to hold, to take'),
      v('笑', 'xiào', 'смеяться, улыбаться', 'to laugh, smile', p('ra')),
      v('往', 'wǎng', 'в сторону, к', 'towards'),
      v('一直', 'yìzhí', 'прямо; всё время', 'straight; all along'),
      v('路口', 'lùkǒu', 'перекрёсток', 'crossing'),
      v('门口', 'ménkǒu', 'вход, у двери', 'entrance, doorway'),
      v('妹妹', 'mèimei', 'младшая сестра', 'younger sister'),
      v('音乐', 'yīnyuè', 'музыка', 'music'),
      v('票', 'piào', 'билет', 'ticket'),
      v('位', 'wèi', 'счётное (вежл.) для людей', 'polite measure word for people'),
      v('半', 'bàn', 'половина', 'half'),
      v('咖啡店', 'kāfēidiàn', 'кофейня', 'café', p('rf')),
      v('上课', 'shàngkè', 'вести урок; быть на уроке', 'to have/give a class', p('rc')),
      v('走', 'zǒu', 'идти', 'to walk', p('rb')),
      v('出租车', 'chūzūchē', 'такси', 'taxi', p('re')),
      v('钢笔', 'gāngbǐ', 'перьевая ручка', 'fountain pen'),
    ],
    exercises: [
      /* 0 */ match(l('Соедини слово и перевод', 'Match the words'), [
        ['拿', l('держать', 'hold')],
        ['笑', l('улыбаться', 'smile')],
        ['往', l('в сторону', 'towards')],
        ['路口', l('перекрёсток', 'crossing')],
        ['音乐', l('музыка', 'music')],
      ]),
      /* 1 */ listen('门开着呢', [l('Дверь открыта.', 'The door is open.'), l('Дверь закрыта.', 'The door is closed.'), l('Открой дверь.', 'Open the door.')], 0),
      /* 2 */ cloze('妹妹是一个非常爱（ ）的女孩儿。', l('Младшая сестра очень любит смеяться.', 'My younger sister is a girl who loves to laugh.'), ['笑', '拿', '往'], 0),
      /* 3 */ cloze('你手里（ ）着的是什么东西？', l('Что ты держишь в руке?', 'What are you holding in your hand?'), ['拿', '笑', '开'], 0),
      /* 4 */ cloze('从这儿（ ）前走，过一个路口，就是北京医院。', l('Отсюда вперёд, после перекрёстка — больница.', 'Go ahead from here; after a crossing is the hospital.'), ['往', '一直', '拿'], 0),
      /* 5 */ cloze('你们班有没有一个（ ）着大眼睛、爱穿红衣服的学生？', l('Есть ли у вас в классе ученица с большими глазами, которая любит красное?', 'Is there a student in your class with big eyes who loves red clothes?'), ['长', '拿', '往'], 0),
      /* 6 */ cloze('从这个路口（ ）走，就能看到你们学校了。', l('От перекрёстка идите прямо — увидите школу.', 'Go straight from this crossing and you\'ll see your school.'), ['一直', '往', '笑'], 0),
      /* 7 */ choice(l('«Дверь не открыта»:', '"The door isn\'t open":'), ['门没开着。', '门不开着。', '门开着没。'], 0),
      /* 8 */ choice(l('«Ходить на занятия пешком»:', '"Walk to class":'), ['走着去上课', '去上课走着', '走去着上课'], 0),
      /* 9 */ choice(l('«Сказать с улыбкой»:', '"Say with a smile":'), ['笑着说', '说着笑了', '笑说着'], 0),
      /* 10 */ tf(l('大卫不是找到新工作了吗？怎么还天天在家玩儿电脑？→ 大卫每天工作。', 'Didn\'t David find a new job? Why is he on the computer at home every day? → David works every day.'), false),
      /* 11 */ tf(l('我的朋友正在找房子，他希望住得离公司近一些。→ 他现在住的地方离公司比较远。', 'My friend is looking for a flat closer to work. → He now lives rather far from work.'), true),
      /* 12 */ tf(l('妈妈告诉我说，不要开着车听音乐。→ 开着车听音乐不好。', "Mum says don't listen to music while driving. → Listening to music while driving is bad."), true),
      /* 13 */ tf(l('坐火车比坐飞机便宜多了，所以我明天准备坐火车去北京。→ 我正在坐火车去北京。', "The train is much cheaper, so tomorrow I'll take it to Beijing. → I'm on the train to Beijing now."), false),
      /* 14 */ tf(l('李哥，你手里拿着的是电影票吗？→ 李哥可能有电影票。', 'Brother Li, are you holding cinema tickets? → Brother Li may have cinema tickets.'), true),
      /* 15 */ match(l('Соедини реплику и ответ', 'Match the line and the reply'), [
        ['我看见在教室里坐着很多学生。', '他们前面还有一位老师，正在给学生们上课呢。'],
        ['你手里拿着什么？', '这是给我妹妹的礼物，明天是她的生日。'],
        ['张先生呢？我今天怎么没看见他？', '他开着车出去了，下午可能回来。'],
        ['你不是学过两年汉语吗？', '不是两年，是一年半。'],
      ]),
      /* 16 */ build(l('Собери: «Кофейня ещё открыта»', 'Build: "The café is still open"'), ['咖啡店', '还', '开着', '门', '呢']),
      /* 17 */ build(l('Собери: «Идите прямо отсюда»', 'Build: "Go straight from here"'), ['从这儿', '一直', '往前', '走']),
      /* 18 */ type(l('Напиши иероглифами или пиньинем: «перекрёсток»', 'Write in characters or pinyin: "crossing"'), ['路口', 'lùkǒu']),
      /* 19 */ listen('我每天走着去上课', [l('Я каждый день хожу на уроки пешком.', 'I walk to class every day.'), l('Я езжу на уроки на машине.', 'I drive to class.'), l('Я не хожу на уроки.', "I don't go to class.")], 0),
      /* 20 */ dict('老师坐着上课', '老师坐着上课', '老师坐着上课。', 'lǎoshī zuòzhe shàngkè'),
      /* 21 */ choice(l('К какой картинке: 买了这么多东西，我们还是坐出租车回家吧。', 'Which picture: 买了这么多东西，我们还是坐出租车回家吧。'), [l('Такси', 'A taxi'), l('Кофейня «Open»', 'A café with an "Open" sign'), l('Учитель с детьми', 'A teacher with children')], 0),
      /* 22 */ wr('着', 'суффикс состояния', 'aspect particle'),
      /* 23 */ wr('门', 'дверь', 'door'),
      /* 24 */ wr('往', 'в сторону', 'towards'),
      /* 25 */ wr('笑', 'улыбаться', 'to smile'),
      /* 26 */ wr('音乐', 'музыка', 'music'),
    ],
    dialogue: {
      title: l('Где кофейня?', 'Where is the café?'),
      lines: [
        dl('A', '都十点了，咖啡店还开着吗？', 'Уже десять — кофейня ещё открыта?', "It's ten already — is the café still open?"),
        dl('B', '开着呢。从这儿往前走，过一个路口就到了。', 'Открыта. Идите отсюда вперёд, через один перекрёсток.', "It's open. Go ahead from here, it's right after one crossing."),
        dl('A', '远吗？要坐出租车吗？', 'Далеко? Нужно такси?', 'Is it far? Do I need a taxi?'),
        dl('B', '不远，走着去五分钟就到了。', 'Нет, пешком пять минут.', "Not far — five minutes on foot."),
      ],
    },
    story: {
      title: l('Утро в школе', 'Morning at school'),
      sentences: [
        st('学校离我家很近，我每天走着去上课。', 'Школа близко, я каждый день хожу пешком.', 'School is near my home; I walk to class every day.', [['离我家很近', 'близко от дома', 'near my home'], ['走着去', 'идти пешком', 'go on foot'], ['上课', 'на урок', 'to class']]),
        st('教室的门开着，里面坐着很多学生。', 'Дверь класса открыта, внутри сидит много учеников.', 'The classroom door is open; many students are sitting inside.', [['门开着', 'дверь открыта', 'the door is open'], ['坐着很多学生', 'сидит много учеников', 'many students sit']]),
        st('老师坐着给我们上课。', 'Учитель ведёт урок сидя.', 'The teacher teaches us sitting down.', [['坐着', 'сидя', 'sitting'], ['给我们上课', 'ведёт нам урок', 'gives us a class']]),
        st('我的同学手里拿着两张电影票。', 'Мой одноклассник держит в руке два билета в кино.', 'My classmate is holding two cinema tickets.', [['手里', 'в руке', 'in hand'], ['拿着', 'держит', 'is holding'], ['电影票', 'билеты в кино', 'cinema tickets']]),
        st('他笑着说：“下课以后，一起去看电影吧！”', 'Он с улыбкой говорит: «После урока пойдём в кино!»', 'He says with a smile, "Let\'s see a film after class!"', [['笑着说', 'говорит с улыбкой', 'says with a smile'], ['下课以后', 'после урока', 'after class']]),
      ],
    },
  },
  exam: [
    listen('路口', [l('перекрёсток', 'crossing'), l('вход', 'entrance'), l('дверь', 'door')], 0),
    listen('他手里拿着一本书', [l('Он держит в руке книгу.', "He's holding a book."), l('Он читает книгу.', "He's reading a book."), l('У него нет книги.', "He doesn't have a book.")], 0),
    listen('往前走', [l('Идите вперёд.', 'Go forward.'), l('Идите назад.', 'Go back.'), l('Поверните налево.', 'Turn left.')], 0),
    listen('妈妈笑着说', [l('Мама сказала с улыбкой.', 'Mum said with a smile.'), l('Мама сказала сердито.', 'Mum said angrily.'), l('Мама ничего не сказала.', 'Mum said nothing.')], 0),
    dict('门开着呢', '门开着呢', '门开着呢。', 'mén kāizhe ne'),
    dict('一直往前走', '一直往前走', '一直往前走。', 'yìzhí wǎng qián zǒu'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['妹妹', l('младшая сестра', 'younger sister')],
      ['票', l('билет', 'ticket')],
      ['半', l('половина', 'half')],
      ['门口', l('вход', 'entrance')],
      ['钢笔', l('перьевая ручка', 'fountain pen')],
    ]),
    cloze('窗户开（ ）呢。', l('Окно открыто.', 'The window is open.'), ['着', '了', '过'], 0),
    cloze('他喜欢听（ ）音乐做作业。', l('Он любит делать уроки под музыку.', 'He likes doing homework while listening to music.'), ['着', '过', '得'], 0),
    cloze('从这儿（ ）右走就是银行。', l('Отсюда направо — банк.', 'Turn right from here and you\'ll find the bank.'), ['往', '离', '跟'], 0),
    cloze('你在学校门口等（ ）我。', l('Жди меня у входа в школу.', 'Wait for me at the school entrance.'), ['着', '得', '过'], 0),
    choice(l('Повторение (урок 12): «Ты слишком легко одет»', 'Review (lesson 12): "You wear too little"'), ['你穿得太少了。', '你穿太少得了。', '你太少穿得了。'], 0),
    choice(l('Ответ на «张先生呢？»', 'Reply to "张先生呢？"'), ['他开着车出去了，下午可能回来。', '不是两年，是一年半。', '这是给我妹妹的礼物。'], 0),
    build(l('Собери: «Мама с улыбкой сказала»', 'Build: "Mum said with a smile"'), ['妈妈', '笑着', '说']),
    build(l('Собери: «Не слушай музыку за рулём»', 'Build: "Don\'t listen to music while driving"'), ['不要', '开着车', '听', '音乐']),
    type(l('Напиши иероглифами или пиньинем: «музыка»', 'Write in characters or pinyin: "music"'), ['音乐', 'yīnyuè']),
    tf(l('都十点了，咖啡店还开着门呢。→ 咖啡店关门了。', "It's ten and the café is still open. → The café is closed."), false),
    tf(l('我每天走着去上课。→ 我每天走路去上课。', 'I walk to class every day. → I go to class on foot.'), true),
    wr('着', 'суффикс состояния', 'aspect particle'),
    wr('往', 'в сторону', 'towards'),
  ],
};
