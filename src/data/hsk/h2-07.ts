import type { BookUnit } from '../book';
import { build, choice, cloze, dict, dl, hskPic, l, listen, match, st, tf, type, v, wr } from './h';

const p = hskPic(2, 7);

export const unit: BookUnit = {
  n: 7,
  lesson: {
    emoji: '🚕',
    title: l('Твой дом далеко от работы? (你家离公司远吗)', 'Do you live far from your company? (你家离公司远吗)'),
    goal: l(
      'Говорить о расстоянии и дороге: «от … (далеко)» 离, «от … до» 从…到, «ещё не» 还没…呢 и «уже скоро» 就.',
      'Talk about distance and travel: "far from" 离, "from … to" 从…到, "not yet" 还没…呢 and "soon, only" 就.',
    ),
    theory: [
      {
        title: l('Далеко или близко: 离', 'Far or near: 离'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**A 离 B + 远 / 近** — «A далеко / близко от B». Вопрос: 你家离公司远吗？ или 远不远？',
              '**A 离 B + 远 / 近** means "A is far from / close to B". Ask: 你家离公司远吗？ or 远不远？',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '我家离学校不太远。', tr: l('Мой дом недалеко от школы.', 'My home is not far from school.') },
              { ko: '你家离学校远不远？— 不远，我每天走路去学校。', tr: l('Далеко от дома до школы? — Нет, хожу пешком.', 'Is your home far from school? — No, I walk there every day.') },
              { ko: '公司离家很远，他每天坐出租车去公司。', tr: l('Работа далеко от дома, он каждый день ездит на такси.', 'His company is far from home; he takes a taxi every day.') },
            ],
          },
          { type: 'img', src: p('re'), caption: l('坐出租车 — ехать на такси', '坐出租车 — take a taxi') },
        ],
      },
      {
        title: l('«От … до»: 从 … 到 и время в пути', '"From … to": 从 … 到 and travel time'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**从 A 到 B** — «от A до B» (место или время). Сколько занимает дорога: **要 + время**. После короткого срока — **就到了** «уже на месте».',
              '**从 A 到 B** means "from A to B" (place or time). How long it takes: **要 + time**. After a short time: **就到了** "(will) be there already".',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '从学校到机场，坐出租车要一个小时。', tr: l('От школы до аэропорта на такси — час.', 'From school to the airport is an hour by taxi.') },
              { ko: '北京到上海坐飞机一个多小时就到了。', tr: l('Из Пекина в Шанхай на самолёте — чуть больше часа.', 'From Beijing to Shanghai by plane takes just over an hour.') },
              { ko: '我家前面有一个小饭馆，走几分钟就到了。', tr: l('Перед домом есть кафе, пару минут пешком.', "There's a little restaurant in front of my home — just a few minutes' walk.") },
            ],
          },
          { type: 'img', src: p('l2'), caption: l('机场 — аэропорт', '机场 — airport') },
        ],
      },
      {
        title: l('«Ещё не» и «сейчас в процессе»: 还没…呢, 在…呢', '"Not yet" and "in progress": 还没…呢, 在…呢'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**还没(有) + глагол + 呢** — «ещё не». **在 + глагол + 呢** — «как раз сейчас делает». 我在去机场的路上呢 — «я сейчас по дороге в аэропорт».',
              '**还没(有) + verb + 呢** means "not yet". **在 + verb + 呢** means "is doing right now". 我在去机场的路上呢 — "I\'m on my way to the airport".',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '大卫回来了吗？— 还没有呢。', tr: l('Дэвид вернулся? — Ещё нет.', 'Is David back? — Not yet.') },
              { ko: '大卫明天有考试，所以还在教室学习呢。', tr: l('У Дэвида завтра экзамен, он ещё занимается в классе.', 'David has an exam tomorrow, so he is still studying in the classroom.') },
              { ko: '我在去机场的路上呢，再有十分钟就到了。', tr: l('Я еду в аэропорт, через 10 минут буду.', "I'm on my way to the airport — I'll be there in ten minutes.") },
            ],
          },
          { type: 'img', src: p('ra'), caption: l('我已经到了，你还有多长时间能到这儿？', "I'm here already — how long until you get here?") },
        ],
      },
      {
        title: l('Читаем: быстро или медленно', 'Reading: fast or slow'),
        blocks: [
          {
            type: 'examples',
            items: [
              { ko: '你为什么不坐公共汽车去公司？— 坐公共汽车太慢了。', tr: l('Почему не ездишь на работу на автобусе? — Слишком медленно.', "Why don't you take the bus to work? — It's too slow.") },
              { ko: '公共汽车太慢了，我们还是坐出租车吧。', tr: l('Автобус слишком медленный, лучше возьмём такси.', "The bus is too slow; we'd better take a taxi.") },
              { ko: '我今天很累，不想做饭了，我们出去吃吧。', tr: l('Я сегодня устала, не хочу готовить, пойдём поедим где-нибудь.', "I'm tired today and don't want to cook — let's eat out.") },
            ],
          },
          { type: 'img', src: p('rc'), caption: l('因为下雨，他不能去跑步，所以很不高兴。', "He can't go running because of the rain, so he's unhappy.") },
        ],
      },
    ],
    vocab: [
      v('离', 'lí', 'от (о расстоянии)', 'from (distance)'),
      v('远', 'yuǎn', 'далёкий', 'far'),
      v('近', 'jìn', 'близкий', 'near'),
      v('公司', 'gōngsī', 'компания, фирма', 'company'),
      v('机场', 'jīchǎng', 'аэропорт', 'airport', p('l2')),
      v('路上', 'lùshang', 'в пути, по дороге', 'on the way'),
      v('从', 'cóng', 'от, из', 'from'),
      v('到', 'dào', 'до; прибывать', 'to; to arrive'),
      v('小时', 'xiǎoshí', 'час (длительность)', 'hour'),
      v('分钟', 'fēnzhōng', 'минута', 'minute'),
      v('走路', 'zǒulù', 'идти пешком', 'to walk'),
      v('慢', 'màn', 'медленный', 'slow'),
      v('快', 'kuài', 'быстрый', 'fast'),
      v('出租车', 'chūzūchē', 'такси', 'taxi', p('re')),
      v('公共汽车', 'gōnggòng qìchē', 'автобус', 'bus'),
      v('火车', 'huǒchē', 'поезд', 'train', p('l4')),
      v('还没', 'hái méi', 'ещё не', 'not yet'),
      v('再', 'zài', 'ещё (раз), снова', 'again, more'),
      v('教室', 'jiàoshì', 'класс, аудитория', 'classroom', p('lc')),
      v('午饭', 'wǔfàn', 'обед', 'lunch', p('rf')),
    ],
    exercises: [
      /* 0 */ match(l('Соедини слово и перевод', 'Match the words'), [
        ['远', l('далёкий', 'far')],
        ['近', l('близкий', 'near')],
        ['慢', l('медленный', 'slow')],
        ['快', l('быстрый', 'fast')],
      ]),
      /* 1 */ match(l('Соедини слово и перевод', 'Match the words'), [
        ['公司', l('компания', 'company')],
        ['机场', l('аэропорт', 'airport')],
        ['小时', l('час', 'hour')],
        ['分钟', l('минута', 'minute')],
        ['教室', l('класс', 'classroom')],
      ]),
      /* 2 */ listen('你家离公司远吗？', [l('Твой дом далеко от работы?', 'Is your home far from work?'), l('Где твоя компания?', 'Where is your company?'), l('Ты едешь на работу?', 'Are you going to work?')], 0),
      /* 3 */ cloze('我家（ ）学校不太远。', l('Мой дом недалеко от школы.', 'My home is not far from school.'), ['离', '从', '到'], 0),
      /* 4 */ cloze('北京到上海坐飞机一个多小时（ ）到了。', l('Из Пекина в Шанхай самолётом — час с небольшим.', 'Beijing to Shanghai is just over an hour by plane.'), ['就', '还', '再'], 0),
      /* 5 */ cloze('爸爸不在家，他在（ ）工作呢。', l('Папы нет дома, он на работе.', "Dad isn't home, he's working at the company."), ['公司', '机场', '路上'], 0),
      /* 6 */ cloze('明天有考试，他还在（ ）学习呢。', l('Завтра экзамен, он ещё занимается в классе.', "There's an exam tomorrow; he's still studying in the classroom."), ['教室', '机场', '公司'], 0),
      /* 7 */ cloze('（ ）学校到机场，坐出租车要一个小时。', l('От школы до аэропорта на такси час.', 'From school to the airport is an hour by taxi.'), ['从', '离', '再'], 0),
      /* 8 */ choice(l('«Ещё нет» (ответ):', '"Not yet" (reply):'), ['还没有呢。', '已经没有了。', '没有还呢。'], 0),
      /* 9 */ choice(l('«Я сейчас по дороге в аэропорт»:', '"I\'m on my way to the airport":'), ['我在去机场的路上呢。', '我去机场路上了。', '我机场在路上去呢。'], 0),
      /* 10 */ tf(l('大卫明天有考试，所以还在教室学习呢。→ 大卫不在家。', 'David has an exam and is still studying in class. → David is not at home.'), true),
      /* 11 */ tf(l('我在去机场的路上呢，再有十分钟就到了。→ 他到机场十分钟了。', "I'm on my way, ten more minutes. → He has been at the airport for ten minutes."), false),
      /* 12 */ tf(l('我家前面不远有一个饭馆，走几分钟就到了。→ 饭馆离我家不远。', "There's a restaurant a few minutes from my home. → The restaurant isn't far."), true),
      /* 13 */ tf(l('公共汽车太慢了，我们还是坐出租车吧。→ 出租车也很慢。', "The bus is too slow; let's take a taxi. → Taxis are slow too."), false),
      /* 14 */ tf(l('从学校到机场，坐出租车要一个小时。→ 去机场要一个小时。', 'From school to the airport is an hour by taxi. → It takes an hour to the airport.'), true),
      /* 15 */ match(l('Соедини вопрос и ответ', 'Match the question and the answer'), [
        ['大卫回来了吗？', '还没有呢。'],
        ['你现在在哪儿呢？', '我在去机场的路上。'],
        ['你为什么不坐公共汽车去公司？', '坐公共汽车太慢了。'],
        ['你家离学校远不远？', '不远，我每天走路去学校。'],
      ]),
      /* 16 */ build(l('Собери: «Твой дом далеко от работы?»', 'Build: "Is your home far from work?"'), ['你家', '离', '公司', '远吗']),
      /* 17 */ build(l('Собери: «От дома до школы десять минут»', 'Build: "Ten minutes from home to school"'), ['从', '家', '到', '学校', '要十分钟']),
      /* 18 */ type(l('Напиши иероглифами или пиньинем: «аэропорт»', 'Write in characters or pinyin: "airport"'), ['机场', 'jīchǎng']),
      /* 19 */ listen('坐公共汽车太慢了', [l('На автобусе слишком медленно.', 'The bus is too slow.'), l('Автобус очень быстрый.', 'The bus is very fast.'), l('Автобуса нет.', "There's no bus.")], 0),
      /* 20 */ dict('我家离学校不远', '我家离学校不远', '我家离学校不远。', 'wǒ jiā lí xuéxiào bù yuǎn'),
      /* 21 */ choice(l('К какой картинке: 公司离家很远，他每天坐出租车去公司。', 'Which picture: 公司离家很远，他每天坐出租车去公司。'), [l('Такси', 'A taxi'), l('Грустный мальчик', 'A sad boy'), l('Бегун', 'A runner')], 0),
      /* 22 */ wr('离', 'от (расстояние)', 'from (distance)'),
      /* 23 */ wr('远', 'далёкий', 'far'),
      /* 24 */ wr('公司', 'компания', 'company'),
      /* 25 */ wr('机场', 'аэропорт', 'airport'),
      /* 26 */ wr('走路', 'идти пешком', 'to walk'),
    ],
    dialogue: {
      title: l('Как ты добираешься до работы?', 'How do you get to work?'),
      lines: [
        dl('A', '你家离公司远吗？', 'Твой дом далеко от работы?', 'Is your home far from your company?'),
        dl('B', '很远。从我家到公司，坐公共汽车要一个多小时。', 'Далеко. От дома до работы на автобусе больше часа.', 'Very far. From my home to the company is over an hour by bus.'),
        dl('A', '为什么不坐出租车？', 'Почему не ездишь на такси?', "Why don't you take a taxi?"),
        dl('B', '出租车太贵了。你呢？', 'Такси слишком дорого. А ты?', 'Taxis are too expensive. And you?'),
        dl('A', '我家离公司很近，走路十分钟就到了。', 'Мой дом близко, десять минут пешком.', "My home is close — just ten minutes' walk."),
      ],
    },
    story: {
      title: l('Дорога в аэропорт', 'On the way to the airport'),
      sentences: [
        st('今天我要去机场接朋友。', 'Сегодня мне надо в аэропорт встретить друга.', 'Today I am going to the airport to meet a friend.', [['去机场', 'ехать в аэропорт', 'go to the airport'], ['接朋友', 'встретить друга', 'meet a friend']]),
        st('从学校到机场，坐出租车要一个小时。', 'От школы до аэропорта на такси — час.', 'It is an hour by taxi from school to the airport.', [['从…到', 'от … до', 'from … to'], ['坐出租车', 'на такси', 'by taxi'], ['要一个小时', 'занимает час', 'takes an hour']]),
        st('公共汽车太慢了，所以我坐出租车。', 'Автобус слишком медленный, поэтому я еду на такси.', 'The bus is too slow, so I take a taxi.', [['太慢了', 'слишком медленно', 'too slow'], ['所以', 'поэтому', 'so']]),
        st('朋友打电话：“你在哪儿呢？”', 'Друг звонит: «Ты где?»', 'My friend calls: "Where are you?"', [['打电话', 'звонит', 'calls'], ['在哪儿呢', 'где ты сейчас', 'where are you']]),
        st('“我在去机场的路上呢，再有十分钟就到了。”', '«Я еду в аэропорт, через десять минут буду».', '"I\'m on my way, I\'ll be there in ten minutes."', [['在…路上呢', 'в пути', 'on the way'], ['再有十分钟', 'ещё десять минут', 'ten more minutes'], ['就到了', 'буду на месте', 'will arrive']]),
      ],
    },
  },
  exam: [
    listen('机场', [l('аэропорт', 'airport'), l('компания', 'company'), l('класс', 'classroom')], 0),
    listen('还没有呢', [l('Ещё нет.', 'Not yet.'), l('Уже да.', 'Already.'), l('Больше нет.', 'No more.')], 0),
    listen('我家离公司很近', [l('Мой дом близко от работы.', 'My home is close to work.'), l('Мой дом далеко от работы.', 'My home is far from work.'), l('У меня нет работы.', "I don't have a job.")], 0),
    listen('走几分钟就到了', [l('Пару минут пешком — и на месте.', "It's just a few minutes' walk."), l('Идти несколько часов.', 'It is hours on foot.'), l('Пешком не дойти.', "You can't walk there.")], 0),
    dict('你家离公司远吗', '你家离公司远吗', '你家离公司远吗？', 'nǐ jiā lí gōngsī yuǎn ma'),
    dict('从学校到机场', '从学校到机场', 'cóng xuéxiào dào jīchǎng'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['路上', l('по дороге', 'on the way')],
      ['走路', l('идти пешком', 'walk')],
      ['出租车', l('такси', 'taxi')],
      ['火车', l('поезд', 'train')],
      ['再', l('ещё, снова', 'again')],
    ]),
    cloze('学校（ ）我家很近。', l('Школа близко от моего дома.', 'The school is close to my home.'), ['离', '从', '跟'], 0),
    cloze('（ ）北京到上海要两个小时。', l('От Пекина до Шанхая два часа.', 'Beijing to Shanghai takes two hours.'), ['从', '离', '就'], 0),
    cloze('他还没回来（ ）。', l('Он ещё не вернулся.', "He hasn't come back yet."), ['呢', '吗', '吧'], 0),
    cloze('再有五分钟（ ）到了。', l('Через пять минут будем на месте.', "We'll be there in five minutes."), ['就', '还', '离'], 0),
    choice(l('Повторение (урок 6): «Почему ты не пришёл?»', 'Review (lesson 6): "How come you didn\'t come?"'), ['你怎么没来？', '你怎么来没？', '怎么你来没有？'], 0),
    choice(l('Ответ на «你为什么不坐公共汽车去公司？»', 'Reply to "你为什么不坐公共汽车去公司？"'), ['坐公共汽车太慢了。', '还没有呢。', '我在去机场的路上。'], 0),
    choice(l('«Далеко ли?» (утвердительно-отрицательный вопрос):', '"Is it far?" (affirmative-negative question):'), ['远不远？', '远没远？', '不远远？'], 0),
    build(l('Собери: «Я по дороге в аэропорт»', 'Build: "I\'m on my way to the airport"'), ['我', '在', '去机场的', '路上呢']),
    build(l('Собери: «Работа далеко от дома»', 'Build: "The company is far from home"'), ['公司', '离', '家', '很远']),
    type(l('Напиши иероглифами или пиньинем: «далёкий»', 'Write in characters or pinyin: "far"'), ['远', 'yuǎn']),
    tf(l('公共汽车太慢了，我们还是坐出租车吧。→ 他们坐出租车。', "The bus is too slow; let's take a taxi. → They take a taxi."), true),
    tf(l('大卫还在教室学习呢。→ 大卫在家。', 'David is still studying in class. → David is at home.'), false),
    wr('离', 'от (расстояние)', 'from (distance)'),
    wr('公司', 'компания', 'company'),
  ],
};
