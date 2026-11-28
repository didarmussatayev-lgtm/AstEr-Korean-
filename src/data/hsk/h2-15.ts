import type { BookUnit } from '../book';
import { build, choice, cloze, dict, dl, hskPic, l, listen, match, st, tf, type, v, wr } from './h';

const p = hskPic(2, 15);

export const unit: BookUnit = {
  n: 15,
  lesson: {
    emoji: '🎆',
    title: l('Скоро Новый год (新年就要到了)', 'The New Year is coming (新年就要到了)'),
    goal: l(
      'Говорить о близком будущем и сравнивать: «вот-вот» 快要…了 / 就要…了, «ещё более» 更, «вместе все» 大家, и подводить итоги года.',
      'Talk about the near future and compare: "about to" 快要…了 / 就要…了, "even more" 更, "everyone" 大家, and sum up the year.',
    ),
    theory: [
      {
        title: l('«Скоро, вот-вот»: 快要 / 就要 … 了', '"About to": 快要 / 就要 … 了'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**快要 / 就要 + глагол + 了** — событие случится совсем скоро. **就要** допускает точное время: 十分钟以后就要开始了 «через десять минут начнётся».',
              '**快要 / 就要 + verb + 了** says something will happen very soon. **就要** can come with an exact time: 十分钟以后就要开始了 "it starts in ten minutes".',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '新年快要到了，你想和大家一起去旅游吗？', tr: l('Скоро Новый год, хочешь вместе со всеми поехать путешествовать?', 'The New Year is coming — want to travel with everyone?') },
              { ko: '我的生日快要到了。', tr: l('Скоро мой день рождения.', 'My birthday is coming up.') },
              { ko: '电影什么时候开始？— 十分钟以后就要开始了。', tr: l('Когда начинается фильм? — Через десять минут.', 'When does the film start? — In ten minutes.') },
              { ko: '我来北京已经三个多月了，下个月我就要回国了。', tr: l('Я в Пекине уже больше трёх месяцев, в следующем месяце возвращаюсь на родину.', "I've been in Beijing for over three months; next month I go home.") },
            ],
          },
          { type: 'img', src: p('l3'), caption: l('我就要回国了。 — Я скоро улетаю домой.', "I'm about to fly home.") },
        ],
      },
      {
        title: l('«Ещё более»: 更', '"Even more": 更'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**更 + прилагательное / глагол** — «ещё более, больше». Часто в сравнении: 你姐姐比你妹妹更漂亮 «твоя сестра ещё красивее младшей».',
              '**更 + adj. / verb** means "even more". Often in comparisons: 你姐姐比你妹妹更漂亮 "your older sister is even prettier than your younger one".',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '我觉得你姐姐比你妹妹更漂亮。', tr: l('Мне кажется, твоя старшая сестра красивее младшей.', 'I think your older sister is even prettier than your younger one.') },
              { ko: '我看过那个电影，还不错，但是我更喜欢这个电影，太有意思了。', tr: l('Я видел тот фильм, неплохой, но этот нравится ещё больше — очень интересный.', 'I saw that film, not bad, but I like this one even more — so interesting.') },
            ],
          },
          { type: 'img', src: p('rf'), caption: l('姐姐比妹妹更漂亮。', 'The older sister is even prettier than the younger.') },
        ],
      },
      {
        title: l('«Все» 大家, «уже» 都 … 了 и подведение итогов', '"Everyone" 大家, "already" 都…了 and a year-end summary'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**大家** — «все, всем» (о людях): 谢谢大家. **都 + время/число + 了** — «уже»: 都十点了 «уже десять». Так подводят итог: 谢谢大家这一年对我的帮助 — «спасибо всем за помощь в этом году».',
              '**大家** means "everyone" (people): 谢谢大家. **都 + time/number + 了** means "already": 都十点了 "it is already ten". A year-end thank-you: 谢谢大家这一年对我的帮助 — "thank you all for your help this year".',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '小王怎么还没来？都快十点了。', tr: l('Почему Сяо Ван ещё не пришёл? Скоро уже десять.', "Why isn't Xiao Wang here yet? It's almost ten.") },
              { ko: '你都玩儿了一个多小时的手机了，快点儿工作吧。', tr: l('Ты уже больше часа сидишь в телефоне, давай скорее за работу.', "You've been on your phone for over an hour — get back to work.") },
              { ko: '谢谢大家这一年对我的帮助。', tr: l('Спасибо всем за помощь в этом году.', 'Thank you all for your help this year.') },
              { ko: '希望这次你能在这儿多住几天。', tr: l('Надеюсь, в этот раз ты проживёшь здесь побольше.', 'I hope you can stay here a few more days this time.') },
            ],
          },
          { type: 'img', src: p('ra'), caption: l('谢谢大家！ — Всем спасибо!', 'Thank you all!') },
        ],
      },
      {
        title: l('Читаем: в магазине и в первый день на работе', 'Reading: at the shop and on the first day at work'),
        blocks: [
          {
            type: 'examples',
            items: [
              { ko: '这件衣服的颜色我不喜欢。— 没关系，我们再去别的商店看看吧。', tr: l('Мне не нравится цвет этой вещи. — Ничего, сходим посмотреть в другой магазин.', "I don't like the colour of this one. — No problem, let's look at other shops.") },
              { ko: '我弟弟在一家电脑公司找了个工作，今天是他第一天上班，他早上六点就起床了。', tr: l('Брат нашёл работу в компьютерной фирме, сегодня его первый рабочий день, он встал в шесть.', 'My younger brother found a job at a computer company; today is his first day and he got up at six.') },
              { ko: '这是我第二次来北京。— 希望这次你能在这儿多住几天。', tr: l('Это мой второй приезд в Пекин. — Надеюсь, в этот раз ты проживёшь подольше.', "This is my second time in Beijing. — I hope you stay a few more days this time.") },
            ],
          },
          { type: 'img', src: p('rb'), caption: l('今天是他第一天上班。', 'Today is his first day at work.') },
        ],
      },
    ],
    vocab: [
      v('快要', 'kuàiyào', 'вот-вот', 'about to'),
      v('就要', 'jiùyào', 'скоро (будет)', 'soon (will)'),
      v('更', 'gèng', 'ещё более', 'even more'),
      v('大家', 'dàjiā', 'все, всем', 'everyone'),
      v('新年', 'xīnnián', 'Новый год', 'New Year', p('l4')),
      v('回国', 'huíguó', 'вернуться на родину', 'to return to one\'s country', p('l3')),
      v('第一天', 'dì yī tiān', 'первый день', 'first day', p('rb')),
      v('第二次', 'dì èr cì', 'второй раз', 'the second time'),
      v('住', 'zhù', 'жить, останавливаться', 'to live, to stay'),
      v('电影票', 'diànyǐngpiào', 'билет в кино', 'cinema ticket', p('le')),
      v('火车票', 'huǒchēpiào', 'билет на поезд', 'train ticket'),
      v('飞机票', 'fēijīpiào', 'билет на самолёт', 'plane ticket'),
      v('别的', 'bié de', 'другой', 'another, other'),
      v('开始', 'kāishǐ', 'начинаться, начинать', 'to begin'),
      v('一元', 'yì yuán', 'один юань', 'one yuan'),
      v('旅行', 'lǚxíng', 'путешествие', 'trip, travel', p('l2')),
      v('关门', 'guānmén', 'закрываться', 'to close (a shop)'),
      v('帮助', 'bāngzhù', 'помощь', 'help'),
    ],
    exercises: [
      /* 0 */ match(l('Соедини слово и перевод', 'Match the words'), [
        ['新年', l('Новый год', 'New Year')],
        ['大家', l('все', 'everyone')],
        ['回国', l('вернуться на родину', 'return home')],
        ['住', l('жить', 'stay')],
        ['旅行', l('путешествие', 'trip')],
      ]),
      /* 1 */ listen('新年快要到了', [l('Скоро Новый год.', 'The New Year is coming.'), l('Новый год прошёл.', 'The New Year is over.'), l('Я не люблю Новый год.', "I don't like New Year.")], 0),
      /* 2 */ cloze('天（ ）了，可能要下雨了，我们快点儿回家吧。', l('Небо пасмурное, наверное, будет дождь, давай скорее домой.', "It's overcast and may rain — let's hurry home."), ['阴', '晴', '更'], 0),
      /* 3 */ cloze('我不爱吃苹果，但是我（ ）喜欢吃西瓜。', l('Я не люблю яблоки, но арбузы люблю ещё больше.', "I don't like apples, but I like watermelon even more."), ['更', '快要', '大家'], 0),
      /* 4 */ cloze('虽然北京很远，（ ）我还是想去北京旅行。', l('Хотя Пекин далеко, всё равно хочу поехать.', "Although Beijing is far, I still want to travel there."), ['但是', '大家', '更'], 0),
      /* 5 */ cloze('谢谢（ ）这一年对我的帮助。', l('Спасибо всем за помощь в этом году.', 'Thanks everyone for your help this year.'), ['大家', '更', '就要'], 0),
      /* 6 */ cloze('我的生日（ ）到了，你想怎么过？', l('Скоро мой день рождения, как отметим?', "My birthday is coming — how shall we celebrate?"), ['快要', '更', '大家'], 0),
      /* 7 */ choice(l('«Через десять минут начнётся»:', '"It starts in ten minutes":'), ['十分钟以后就要开始了。', '十分钟以后更开始了。', '就十分钟要以后开始。'], 0),
      /* 8 */ choice(l('«Я люблю это даже больше»:', '"I like this one even more":'), ['我更喜欢这个。', '我喜欢更这个。', '更我喜欢这个。'], 0),
      /* 9 */ choice(l('«Уже десять часов»:', '"It is already ten o\'clock":'), ['都十点了。', '十点都了。', '都了十点。'], 0),
      /* 10 */ tf(l('我看过那个电影，还不错，但是我更喜欢这个电影。→ 那个电影更好。', "I saw that film, not bad, but I like this one more. → That film is better."), false),
      /* 11 */ tf(l('我弟弟今天是第一天上班，早上六点就起床了。→ 弟弟今天开始上班。', 'My brother started work today and got up at six. → He starts work today.'), true),
      /* 12 */ tf(l('我每天早上都出去跑步。昨天天气不太好，是阴天，等我跑回家时，天晴了。→ 昨天下雨了。', 'I run every morning. Yesterday was overcast, but by the time I got home it cleared. → It rained yesterday.'), false),
      /* 13 */ tf(l('火车站前面有个“一元店”，一块钱可以买一件东西。→ 一元店的东西很贵。', 'In front of the station there is a "one-yuan shop". → Its goods are expensive.'), false),
      /* 14 */ tf(l('我来北京已经三个多月了，下个月我就要回国了。→ 他可能在北京住四个月。', "I've been in Beijing for over three months; next month I go home. → He probably stays four months."), true),
      /* 15 */ match(l('Соедини реплику и ответ', 'Match the line and the reply'), [
        ['电影什么时候开始？', '十分钟以后就要开始了。'],
        ['我的生日快要到了。', '你的生日是几月几号？我们一起吃饭吧。'],
        ['这件衣服的颜色我不喜欢。', '没关系，我们再去别的商店看看吧。'],
        ['这是我第二次来北京。', '希望这次你能在这儿多住几天。'],
      ]),
      /* 16 */ build(l('Собери: «Скоро Новый год»', 'Build: "The New Year is coming"'), ['新年', '快要', '到', '了']),
      /* 17 */ build(l('Собери: «Спасибо всем»', 'Build: "Thank you all"'), ['谢谢', '大家']),
      /* 18 */ type(l('Напиши иероглифами или пиньинем: «все (о людях)»', 'Write in characters or pinyin: "everyone"'), ['大家', 'dàjiā']),
      /* 19 */ listen('我下个月就要回国了', [l('В следующем месяце я возвращаюсь домой.', "I'm going home next month."), l('Я вернулся домой вчера.', 'I went home yesterday.'), l('Я не хочу домой.', "I don't want to go home.")], 0),
      /* 20 */ dict('新年快要到了', '新年快要到了', '新年快要到了。', 'xīnnián kuàiyào dào le'),
      /* 21 */ choice(l('К какой картинке: 我觉得你姐姐比你妹妹更漂亮。', 'Which picture: 我觉得你姐姐比你妹妹更漂亮。'), [l('Две девушки', 'Two girls'), l('Салон самолёта', 'A plane cabin'), l('Больная собака', 'A sick dog')], 0),
      /* 22 */ wr('新年', 'Новый год', 'New Year'),
      /* 23 */ wr('大家', 'все', 'everyone'),
      /* 24 */ wr('更', 'ещё более', 'even more'),
      /* 25 */ wr('回国', 'вернуться на родину', 'return home'),
      /* 26 */ wr('旅行', 'путешествие', 'trip'),
    ],
    dialogue: {
      title: l('Планы на Новый год', 'New Year plans'),
      lines: [
        dl('A', '新年快要到了，你想和大家一起去旅游吗？', 'Скоро Новый год, хочешь поехать путешествовать со всеми?', 'The New Year is coming — want to travel with everyone?'),
        dl('B', '我想新年的时候休息休息，你们自己去玩儿吧。', 'Хочу в Новый год отдохнуть, поезжайте сами.', 'I want to rest at New Year — you go and have fun.'),
        dl('A', '好吧。你的生日是几月几号？', 'Ладно. Когда у тебя день рождения?', "OK. When's your birthday?"),
        dl('B', '我的生日快要到了，我们一起吃饭吧。', 'Скоро, давай поужинаем вместе.', "It's coming up — let's have dinner together."),
        dl('A', '好，谢谢你！希望新年快乐！', 'Хорошо, спасибо! С наступающим!', 'Great, thank you! Happy New Year!'),
      ],
    },
    story: {
      title: l('Итоги года', 'The year in review'),
      sentences: [
        st('新年快要到了。', 'Скоро Новый год.', 'The New Year is coming.', [['新年', 'Новый год', 'New Year'], ['快要…了', 'вот-вот', 'about to']]),
        st('我来北京已经三个多月了，下个月我就要回国了。', 'Я в Пекине уже больше трёх месяцев, в следующем месяце возвращаюсь на родину.', "I've been in Beijing for over three months and next month I go home.", [['已经', 'уже', 'already'], ['三个多月', 'больше трёх месяцев', 'over three months'], ['就要回国', 'скоро возвращаюсь', 'about to go home']]),
        st('这一年我学了很多汉字，也去过长城。', 'За этот год я выучил много иероглифов и побывал на Великой стене.', 'This year I learned many characters and visited the Great Wall.', [['学了很多汉字', 'выучил много иероглифов', 'learned many characters'], ['去过长城', 'бывал на Великой стене', 'been to the Great Wall']]),
        st('谢谢大家这一年对我的帮助。', 'Спасибо всем за помощь в этом году.', 'Thank you all for your help this year.', [['谢谢大家', 'спасибо всем', 'thank you all'], ['帮助', 'помощь', 'help']]),
        st('新年快乐！', 'С Новым годом!', 'Happy New Year!', [['新年快乐', 'С Новым годом', 'Happy New Year']]),
      ],
    },
  },
  exam: [
    listen('新年', [l('Новый год', 'New Year'), l('день рождения', 'birthday'), l('праздник', 'holiday')], 0),
    listen('电影快要开始了', [l('Фильм вот-вот начнётся.', 'The film is about to start.'), l('Фильм закончился.', 'The film is over.'), l('Фильма нет.', "There's no film.")], 0),
    listen('我更喜欢这个', [l('Мне этот нравится больше.', 'I like this one more.'), l('Мне этот не нравится.', "I don't like this one."), l('Мне нравятся оба.', 'I like both.')], 0),
    listen('谢谢大家', [l('Всем спасибо.', 'Thanks everyone.'), l('Спасибо тебе.', 'Thank you.'), l('Пожалуйста.', "You're welcome.")], 0),
    dict('谢谢大家的帮助', '谢谢大家的帮助', '谢谢大家的帮助。', 'xièxie dàjiā de bāngzhù'),
    dict('下个月我就要回国了', '下个月我就要回国了', '下个月我就要回国了。', 'xià gè yuè wǒ jiùyào huíguó le'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['开始', l('начинаться', 'begin')],
      ['别的', l('другой', 'other')],
      ['关门', l('закрываться', 'close')],
      ['电影票', l('билет в кино', 'cinema ticket')],
      ['第一天', l('первый день', 'first day')],
    ]),
    cloze('我（ ）要去北京了。', l('Скоро я поеду в Пекин.', "I'm about to go to Beijing."), ['就', '更', '大家'], 0),
    cloze('这个比那个（ ）便宜。', l('Этот ещё дешевле того.', 'This one is even cheaper than that.'), ['更', '快要', '大家'], 0),
    cloze('（ ）十一点了，快睡觉吧。', l('Уже одиннадцать, ложись спать.', "It's already eleven — go to bed."), ['都', '更', '快要'], 0),
    cloze('谢谢（ ）的帮助。', l('Спасибо всем за помощь.', "Thanks, everyone, for your help."), ['大家', '更', '就要'], 0),
    choice(l('Повторение (урок 14): «Я не видел этот фильм»', 'Review (lesson 14): "I haven\'t seen this film"'), ['我没看过这个电影。', '我不看过这个电影。', '我没看这个电影过。'], 0),
    choice(l('Ответ на «电影什么时候开始？»', 'Reply to "电影什么时候开始？"'), ['十分钟以后就要开始了。', '没学过，听说很难。', '这是我第二次来北京。'], 0),
    build(l('Собери: «Скоро мой день рождения»', 'Build: "My birthday is coming soon"'), ['我的', '生日', '快要', '到了']),
    build(l('Собери: «Мне нравится этот ещё больше»', 'Build: "I like this one even more"'), ['我', '更', '喜欢', '这个']),
    type(l('Напиши иероглифами или пиньинем: «Новый год»', 'Write in characters or pinyin: "New Year"'), ['新年', 'xīnnián']),
    tf(l('我的生日快要到了。→ 生日已经过了。', 'My birthday is coming. → The birthday has passed.'), false),
    tf(l('下个月我就要回国了。→ 他还没回国。', 'Next month I go home. → He hasn\'t gone home yet.'), true),
    wr('新年', 'Новый год', 'New Year'),
    wr('大家', 'все', 'everyone'),
  ],
};
