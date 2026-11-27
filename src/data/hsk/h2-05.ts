import type { BookUnit } from '../book';
import { build, choice, cloze, dict, dl, hskPic, l, listen, match, st, tf, type, v, wr } from './h';

const p = hskPic(2, 5);

export const unit: BookUnit = {
  n: 5,
  lesson: {
    emoji: '👕',
    title: l('Возьми вот эту (就买这件吧)', 'Take this one (就买这件吧)'),
    goal: l(
      'Покупать, советовать и оценивать: «тогда, раз так» 就, «немного (не очень)» 有点儿, «вполне» 还 и «полезно для» 对…好.',
      'Shop, advise and judge: "then, just" 就, "a bit (too)" 有点儿, "fairly" 还 and "good for" 对…好.',
    ),
    theory: [
      {
        title: l('Покупки, еда и экзамены', 'Shopping, food and exams'),
        blocks: [
          { type: 'img', src: p('le'), caption: l('这件衣服怎么样？ — Как тебе эта одежда?', 'How about this piece of clothing?') },
          {
            type: 'examples',
            items: [
              { ko: '三百块钱还可以，你喜欢就买吧。', tr: l('Триста юаней — нормально, нравится — бери.', "Three hundred yuan is OK — if you like it, buy it.") },
              { ko: '今天是爸爸的生日，我们就去外面吃饭吧。', tr: l('Сегодня у папы день рождения, давайте пойдём поесть в ресторан.', "It's Dad's birthday today — let's eat out.") },
              { ko: '他这几天要准备考试。', tr: l('В эти дни ему надо готовиться к экзамену.', 'He has to prepare for an exam these days.') },
            ],
          },
          { type: 'img', src: p('re'), caption: l('去外面吃饭 — поесть вне дома', 'eat out') },
          {
            type: 'tip',
            text: l('件 jiàn — счётное слово для одежды и дел: 一件衣服, 这件事. 杯 bēi — «стакан, чашка»: 三杯咖啡.', '件 jiàn is the measure word for clothes and matters: 一件衣服, 这件事. 杯 bēi means "cup, glass": 三杯咖啡.'),
          },
        ],
      },
      {
        title: l('«Тогда, раз так, сразу»: 就', '"Then, in that case, right away": 就'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**就** ставится перед глаголом: «тогда», «как раз», «сразу же». 你喜欢就买吧 — «раз нравится — покупай». 就买这件吧 — «возьми вот эту».',
              '**就** goes before the verb: "then", "just", "right away". 你喜欢就买吧 — "if you like it, then buy it". 就买这件吧 — "just take this one".',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '就买这件吧。', tr: l('Возьми вот эту.', 'Take this one.') },
              { ko: '我有两本，你喜欢就拿一本吧。', tr: l('У меня две, нравится — бери одну.', 'I have two — if you like it, take one.') },
            ],
          },
        ],
      },
      {
        title: l('«Немного»: 有点儿 + прилагательное; «вполне»: 还', '"A bit": 有点儿 + adjective; "fairly": 还'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**有点儿 + прил.** — «немного, слегка», обычно о **неприятном**: 有点儿累 «устал немного», 有点儿高 «высоковат». **还 + 可以 / 不错** — «вполне неплохо».',
              '**有点儿 + adj.** means "a bit, slightly", usually about something **unpleasant**: 有点儿累 "a bit tired", 有点儿高 "a bit too high". **还 + 可以 / 不错** means "fairly good, not bad".',
            ),
          },
          { type: 'img', src: p('rb'), caption: l('我有点儿累，休息一下。 — Я немного устал, отдохну.', "I'm a bit tired, I'll rest.") },
          {
            type: 'examples',
            items: [
              { ko: '我今天早上六点起床的，现在有点儿累。', tr: l('Я сегодня встал в шесть, теперь немного устал.', "I got up at six today, so I'm a bit tired now.") },
              { ko: '昨天的考试你觉得怎么样？— 我觉得还不错。', tr: l('Как тебе вчерашний экзамен? — По-моему, вполне неплохо.', "How was yesterday's exam? — Not bad, I think.") },
              { ko: '今天的菜还可以，都是我丈夫做的。', tr: l('Сегодняшние блюда вполне ничего, всё приготовил муж.', "Today's dishes are not bad — my husband made them all.") },
            ],
          },
        ],
      },
      {
        title: l('«Полезно для»: 对 … 好', '"Good for": 对 … 好'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**A 对 B 好 / 不好** — «A полезно / вредно для B»: 运动对身体很好, 喝多了对身体不好.',
              '**A 对 B 好 / 不好** means "A is good / bad for B": 运动对身体很好, 喝多了对身体不好.',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '我知道运动对身体很好。', tr: l('Я знаю, что спорт полезен для здоровья.', 'I know sport is good for your health.') },
              { ko: '你少喝一点儿吧，喝多了对身体不好。', tr: l('Пей поменьше, много пить вредно.', 'Drink less — too much is bad for you.') },
            ],
          },
          { type: 'img', src: p('rc'), caption: l('我不喝了，我已经喝了三杯了。 — Я больше не буду, уже выпил три чашки.', "No more for me — I've already had three cups.") },
        ],
      },
    ],
    vocab: [
      v('就', 'jiù', 'тогда, как раз, сразу', 'then, just, right away'),
      v('件', 'jiàn', 'счётное для одежды, дел', 'measure word for clothes, matters', p('le')),
      v('外面', 'wàimiàn', 'снаружи, вне дома', 'outside', p('re')),
      v('准备', 'zhǔnbèi', 'готовить(ся)', 'to prepare', p('lb')),
      v('考试', 'kǎoshì', 'экзамен', 'exam', p('ra')),
      v('有点儿', 'yǒudiǎnr', 'немного, слегка', 'a bit'),
      v('累', 'lèi', 'усталый', 'tired', p('rb')),
      v('还', 'hái', 'ещё; вполне', 'still; fairly'),
      v('可以', 'kěyǐ', 'можно; неплохо', 'may; OK'),
      v('不错', 'búcuò', 'неплохой, хороший', 'not bad, good'),
      v('对', 'duì', 'для, по отношению к; верно', 'for, towards; right'),
      v('以后', 'yǐhòu', 'после, потом', 'after, later'),
      v('鱼', 'yú', 'рыба', 'fish', p('rf')),
      v('咖啡', 'kāfēi', 'кофе', 'coffee'),
      v('杯', 'bēi', 'стакан, чашка (счётное)', 'cup, glass (measure)'),
      v('少', 'shǎo', 'мало, меньше', 'few, less'),
      v('身体', 'shēntǐ', 'здоровье, тело', 'health, body'),
      v('水果', 'shuǐguǒ', 'фрукты', 'fruit'),
      v('菜', 'cài', 'блюдо, еда', 'dish'),
      v('饭馆', 'fànguǎn', 'ресторан, столовая', 'restaurant'),
    ],
    exercises: [
      /* 0 */ match(l('Соедини слово и перевод', 'Match the words'), [
        ['外面', l('снаружи', 'outside')],
        ['准备', l('готовить(ся)', 'prepare')],
        ['考试', l('экзамен', 'exam')],
        ['以后', l('после', 'after')],
        ['累', l('усталый', 'tired')],
      ]),
      /* 1 */ listen('我有点儿累', [l('Я немного устал.', "I'm a bit tired."), l('Я совсем не устал.', "I'm not tired at all."), l('Я очень занят.', "I'm very busy.")], 0),
      /* 2 */ cloze('王丽，你去买一点儿水果（ ）。', l('Ван Ли, сходи купи немного фруктов.', 'Wang Li, go and buy some fruit.'), ['吧', '就', '对'], 0),
      /* 3 */ cloze('我下午四点考试，考试（ ）给你打电话。', l('В четыре у меня экзамен, после экзамена позвоню.', "My exam is at four; I'll call you after it."), ['以后', '就', '还'], 0),
      /* 4 */ cloze('我有两本，你喜欢（ ）拿一本吧。', l('У меня две, нравится — бери одну.', 'I have two — take one if you like it.'), ['就', '对', '还'], 0),
      /* 5 */ cloze('太忙了，没时间运动，我知道运动（ ）身体很好。', l('Нет времени на спорт, а я знаю, что он полезен.', "Too busy for sport, though I know it's good for health."), ['对', '就', '以后'], 0),
      /* 6 */ cloze('今天的菜（ ）可以，都是我丈夫做的。', l('Сегодняшние блюда вполне ничего, всё приготовил муж.', "Today's dishes are not bad — all made by my husband."), ['还', '就', '对'], 0),
      /* 7 */ choice(l('«Немного холодно» (с недовольством):', '"A bit cold" (complaining):'), ['有点儿冷', '一点儿冷', '冷有点儿'], 0),
      /* 8 */ choice(l('Счётное слово для одежды:', 'Measure word for clothes:'), ['件', '杯', '本'], 0),
      /* 9 */ choice(l('«Три чашки кофе»:', '"Three cups of coffee":'), ['三杯咖啡', '三个杯咖啡', '咖啡三杯子'], 0),
      /* 10 */ choice(l('«Спорт полезен для здоровья»:', '"Sport is good for health":'), ['运动对身体很好。', '运动身体对很好。', '对运动身体很好。'], 0),
      /* 11 */ tf(l('三百块钱还可以，你喜欢就买吧。→ 她不喜欢这件衣服。', "Three hundred is fine, buy it if you like it. → She doesn't like these clothes."), false),
      /* 12 */ tf(l('我们一起准备晚饭，你做鱼，我做米饭。→ 他们不去外面吃饭。', "Let's make dinner together. → They won't eat out."), true),
      /* 13 */ tf(l('我中午有点儿累，喝了两杯咖啡。→ 他累的时候喝咖啡。', 'I was a bit tired at noon and drank two coffees. → He drinks coffee when tired.'), true),
      /* 14 */ tf(l('你少喝一点儿吧，喝多了对身体不好。→ 喝多了对身体很好。', 'Drink less, too much is bad for you. → Drinking a lot is good for you.'), false),
      /* 15 */ match(l('Соедини реплику и ответ', 'Match the line and the reply'), [
        ['我今天早上六点起床的，现在有点儿累。', '你休息一下吧。'],
        ['昨天的考试你觉得怎么样？', '我觉得还不错。'],
        ['你准备去北京旅游的东西了吗？', '我们下个星期去，明天再准备吧。'],
      ]),
      /* 16 */ build(l('Собери: «Возьми вот эту»', 'Build: "Just take this one"'), ['就', '买', '这件', '吧']),
      /* 17 */ build(l('Собери: «Давай поедим вне дома»', 'Build: "Let\'s eat out"'), ['我们', '就', '去', '外面', '吃饭吧']),
      /* 18 */ type(l('Напиши иероглифами или пиньинем: «экзамен»', 'Write in characters or pinyin: "exam"'), ['考试', 'kǎoshì']),
      /* 19 */ listen('妈妈做了你最爱吃的鱼', [l('Мама приготовила твою любимую рыбу.', 'Mum made your favourite fish.'), l('Мама купила рыбу.', 'Mum bought fish.'), l('Ты не любишь рыбу.', "You don't like fish.")], 0),
      /* 20 */ dict('就买这件吧', '就买这件吧', '就买这件吧。', 'jiù mǎi zhè jiàn ba'),
      /* 21 */ choice(l('К какой картинке: 我不喝了，我已经喝了三杯了。', 'Which picture: 我不喝了，我已经喝了三杯了。'), [l('Девушка жестом отказывается', 'A woman refusing with her hand'), l('Мужчина вытирает пот', 'A man wiping his brow'), l('Большой стол в ресторане', 'A big restaurant table')], 0),
      /* 22 */ wr('件', 'счётное для одежды', 'measure word for clothes'),
      /* 23 */ wr('考试', 'экзамен', 'exam'),
      /* 24 */ wr('准备', 'готовить', 'to prepare'),
      /* 25 */ wr('饭馆', 'ресторан', 'restaurant'),
      /* 26 */ wr('鱼', 'рыба', 'fish'),
    ],
    dialogue: {
      title: l('В магазине одежды', 'At a clothes shop'),
      lines: [
        dl('A', '这件衣服怎么样？', 'Как тебе эта вещь?', 'What do you think of this one?'),
        dl('B', '颜色不错，可是有点儿贵。多少钱？', 'Цвет хороший, но дороговато. Сколько?', 'Nice colour, but a bit expensive. How much?'),
        dl('A', '三百块。', 'Триста юаней.', 'Three hundred yuan.'),
        dl('B', '三百块钱还可以，你喜欢就买吧。', 'Триста — нормально. Нравится — бери.', 'Three hundred is OK. If you like it, buy it.'),
        dl('A', '好，就买这件吧！', 'Хорошо, беру эту!', "OK, I'll take this one!"),
      ],
    },
    story: {
      title: l('День рождения папы', "Dad's birthday"),
      sentences: [
        st('今天是爸爸的生日。', 'Сегодня у папы день рождения.', "Today is Dad's birthday.", [['今天', 'сегодня', 'today'], ['爸爸的生日', 'папин день рождения', "Dad's birthday"]]),
        st('我们准备去外面吃饭。', 'Мы собираемся поесть в ресторане.', "We're going to eat out.", [['准备', 'собираться', 'plan to'], ['外面', 'вне дома', 'outside'], ['吃饭', 'есть', 'eat']]),
        st('可是妈妈有点儿累，不想出去。', 'Но мама немного устала и не хочет выходить.', "But Mum is a bit tired and doesn't want to go out.", [['有点儿累', 'немного устала', 'a bit tired'], ['不想出去', 'не хочет выходить', "doesn't want to go out"]]),
        st('我们就在家一起准备晚饭。', 'Тогда мы вместе готовим ужин дома.', 'So we make dinner together at home.', [['就', 'тогда', 'then'], ['在家', 'дома', 'at home'], ['准备晚饭', 'готовить ужин', 'make dinner']]),
        st('我做了爸爸最爱吃的鱼，他说还不错！', 'Я приготовил папину любимую рыбу, он сказал — неплохо!', 'I made Dad\'s favourite fish — he said it was not bad!', [['最爱吃的鱼', 'самая любимая рыба', 'favourite fish'], ['还不错', 'вполне неплохо', 'not bad']]),
      ],
    },
  },
  exam: [
    listen('考试', [l('экзамен', 'exam'), l('кофе', 'coffee'), l('после', 'after')], 0),
    listen('你喜欢就买吧', [l('Нравится — покупай.', 'Buy it if you like it.'), l('Не покупай.', "Don't buy it."), l('Мне не нравится.', "I don't like it.")], 0),
    listen('运动对身体很好', [l('Спорт полезен для здоровья.', 'Sport is good for health.'), l('Спорт вреден.', 'Sport is bad for you.'), l('Я не занимаюсь спортом.', "I don't do sport.")], 0),
    listen('我觉得还不错', [l('По-моему, вполне неплохо.', 'I think it is not bad.'), l('По-моему, плохо.', 'I think it is bad.'), l('Не знаю.', "I don't know.")], 0),
    dict('我有点儿累', '我有点儿累', '我有点儿累。', 'wǒ yǒudiǎnr lèi'),
    dict('考试以后给你打电话', '考试以后给你打电话', '考试以后给你打电话。', 'kǎoshì yǐhòu gěi nǐ dǎ diànhuà'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['鱼', l('рыба', 'fish')],
      ['咖啡', l('кофе', 'coffee')],
      ['水果', l('фрукты', 'fruit')],
      ['饭馆', l('ресторан', 'restaurant')],
      ['少', l('мало', 'few, less')],
    ]),
    cloze('这件衣服（ ）贵。', l('Эта вещь дороговата.', 'These clothes are a bit expensive.'), ['有点儿', '一点儿', '还'], 0),
    cloze('喝多了（ ）身体不好。', l('Много пить вредно для здоровья.', 'Drinking too much is bad for your health.'), ['对', '就', '还'], 0),
    cloze('你累了（ ）休息吧。', l('Устал — тогда отдохни.', "If you're tired, then rest."), ['就', '对', '以后'], 0),
    cloze('下课（ ），我们去饭馆吧。', l('После урока пойдём в ресторан.', "After class let's go to a restaurant."), ['以后', '有点儿', '对'], 0),
    choice(l('«Две чашки чая»:', '"Two cups of tea":'), ['两杯茶', '二杯茶', '两个杯茶'], 0),
    choice(l('Повторение (урок 4): «Мы познакомились в университете»', 'Review (lesson 4): "We met at university"'), ['我们是大学的时候认识的。', '我们大学的时候认识是。', '我们是认识大学的。'], 0),
    choice(l('Ответ на «昨天的考试你觉得怎么样？»', 'Reply to "昨天的考试你觉得怎么样？"'), ['我觉得还不错。', '你休息一下吧。', '三百块。'], 0),
    build(l('Собери: «Эта вещь немного дорогая»', 'Build: "This piece is a bit expensive"'), ['这件', '衣服', '有点儿', '贵']),
    build(l('Собери: «Пей меньше, это вредно»', 'Build: "Drink less, it\'s bad for you"'), ['你', '少喝一点儿吧', '对身体', '不好']),
    type(l('Напиши иероглифами или пиньинем: «готовить(ся)»', 'Write in characters or pinyin: "to prepare"'), ['准备', 'zhǔnbèi']),
    tf(l('我们一起准备晚饭。→ 他们去外面吃饭。', "Let's make dinner together. → They eat out."), false),
    tf(l('我已经喝了三杯了。→ 他喝了三杯。', "I've already had three cups. → He had three cups."), true),
    wr('考试', 'экзамен', 'exam'),
    wr('准备', 'готовить', 'to prepare'),
  ],
};
