import type { BookUnit } from '../book';
import { build, choice, cloze, dict, dl, hskPic, l, listen, match, st, tf, type, v, wr } from './h';

const p = hskPic(2, 6);

export const unit: BookUnit = {
  n: 6,
  lesson: {
    emoji: '🍜',
    title: l('Почему ты больше не ешь? (你怎么不吃了)', "Why don't you eat more? (你怎么不吃了)"),
    goal: l(
      'Спрашивать о причине и объяснять: «как же, почему» 怎么, «потому что… поэтому» 因为…所以, «каждый» через повтор (天天, 件件), «вместе с» 跟.',
      'Ask for and give reasons: "how come" 怎么, "because… so" 因为…所以, "every" by repetition (天天, 件件), "together with" 跟.',
    ),
    theory: [
      {
        title: l('Еда, погода, транспорт', 'Food, weather, transport'),
        blocks: [
          {
            type: 'examples',
            items: [
              { ko: '天天都吃羊肉，有鸡蛋面条吗？', tr: l('Каждый день баранина, а есть лапша с яйцом?', 'Mutton every day — is there any egg noodle?') },
              { ko: '我每天运动，现在五十公斤了。', tr: l('Я каждый день занимаюсь спортом, теперь вешу 50 кг.', 'I exercise every day; now I weigh 50 kg.') },
              { ko: '我在门外看见小王的自行车了。', tr: l('Я видел у двери велосипед Сяо Вана.', "I saw Xiao Wang's bike outside the door.") },
            ],
          },
          { type: 'img', src: p('lf'), caption: l('自行车 — велосипед', '自行车 — bicycle') },
          {
            type: 'table',
            head: [l('Транспорт', 'Transport'), l('Значение', 'Meaning')],
            rows: [
              ['公共汽车', l('автобус', 'bus')],
              ['火车', l('поезд', 'train')],
              ['出租车', l('такси', 'taxi')],
              ['自行车', l('велосипед', 'bicycle')],
            ],
          },
          {
            type: 'tip',
            text: l('车 «машина, повозка» — общая часть всех этих слов. 公斤 — «килограмм», 斤 — «цзинь» (полкило) на рынке.', '车 "vehicle" is shared by all these words. 公斤 is "kilogram", 斤 is "jin" (half a kilo) used at markets.'),
          },
        ],
      },
      {
        title: l('«Как же так, почему?»: 怎么', '"How come?": 怎么'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**怎么 + (不/没) + глагол** — удивлённый вопрос о причине: «почему же?». 你怎么不吃了？ — «Ты чего не ешь?»',
              '**怎么 + (不/没) + verb** is a surprised question about the reason: "how come?". 你怎么不吃了？ — "Why have you stopped eating?"',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '小王今天怎么没来学校？— 他今天身体不太好。', tr: l('Почему Сяо Ван сегодня не пришёл в школу? — Ему нездоровится.', "How come Xiao Wang didn't come to school today? — He isn't feeling well.") },
              { ko: '你们昨天怎么没去打篮球？— 昨天下雨了。', tr: l('Почему вы вчера не пошли играть в баскетбол? — Был дождь.', "Why didn't you play basketball yesterday? — It rained.") },
            ],
          },
          { type: 'img', src: p('le'), caption: l('下雨 — идёт дождь', '下雨 — it rains') },
        ],
      },
      {
        title: l('«Потому что… поэтому»: 因为 … 所以', '"Because… so": 因为 … 所以'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**因为 + причина, 所以 + следствие**. Одну из частей можно опустить: 昨天下雨，所以没去.',
              '**因为 + reason, 所以 + result**. Either part can be dropped: 昨天下雨，所以没去.',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '因为昨天下雨，所以我们都没去打篮球。', tr: l('Вчера был дождь, поэтому мы не пошли играть в баскетбол.', "Because it rained yesterday, none of us played basketball.") },
              { ko: '因为工作很忙，所以没有时间运动。', tr: l('Из-за работы нет времени на спорт.', 'Work is busy, so there is no time for sport.') },
              { ko: '听说小王去北京看他姐姐了，所以没来学校。', tr: l('Говорят, Сяо Ван уехал в Пекин к сестре, поэтому не пришёл в школу.', "I hear Xiao Wang went to Beijing to see his sister, so he didn't come to school.") },
            ],
          },
        ],
      },
      {
        title: l('Повтор счётного слова и «вместе с» 跟', 'Repeated measure words and "with" 跟'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**Удвоенное счётное слово = «каждый»**: 天天 «каждый день», 件件 «каждая вещь», 个个 «каждый». Обычно с **都**. **跟 + кто-то + 一起** — «вместе с кем-то».',
              '**A doubled measure word means "every"**: 天天 "every day", 件件 "every piece", 个个 "every one". Usually with **都**. **跟 + someone + 一起** means "together with someone".',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '这家商店的衣服件件都漂亮。', tr: l('В этом магазине каждая вещь красивая.', 'Every piece of clothing in this shop is pretty.') },
              { ko: '我跟同学们一起学习汉语。', tr: l('Я учу китайский вместе с одноклассниками.', 'I study Chinese together with my classmates.') },
              { ko: '他跟他的女朋友一起去旅游了。', tr: l('Он поехал путешествовать со своей девушкой.', 'He went travelling with his girlfriend.') },
            ],
          },
          { type: 'img', src: p('ra'), caption: l('他跟他的女朋友一起去旅游了。', 'He went travelling with his girlfriend.') },
        ],
      },
    ],
    vocab: [
      v('怎么', 'zěnme', 'как; почему же', 'how; how come'),
      v('因为', 'yīnwèi', 'потому что', 'because'),
      v('所以', 'suǒyǐ', 'поэтому', 'so, therefore'),
      v('下雨', 'xià yǔ', 'идёт дождь', 'to rain', p('le')),
      v('羊肉', 'yángròu', 'баранина', 'mutton'),
      v('鸡蛋', 'jīdàn', 'куриное яйцо', 'egg'),
      v('面条', 'miàntiáo', 'лапша', 'noodles'),
      v('米饭', 'mǐfàn', 'варёный рис', 'cooked rice', p('l2')),
      v('公斤', 'gōngjīn', 'килограмм', 'kilogram', p('rc')),
      v('自行车', 'zìxíngchē', 'велосипед', 'bicycle', p('lf')),
      v('门', 'mén', 'дверь', 'door', p('l3')),
      v('外', 'wài', 'снаружи', 'outside'),
      v('跟', 'gēn', 'с, вместе с', 'with'),
      v('姐姐', 'jiějie', 'старшая сестра', 'older sister'),
      v('大夫', 'dàifu', 'врач', 'doctor'),
      v('家', 'jiā', 'дом, семья', 'home, family', p('rb')),
      v('玩儿', 'wánr', 'играть, развлекаться, гостить', 'to play, have fun, visit'),
      v('飞机', 'fēijī', 'самолёт', 'airplane', p('lc')),
      v('游泳', 'yóuyǒng', 'плавать', 'to swim', p('lb')),
      v('女朋友', 'nǚpéngyou', 'девушка (подруга)', 'girlfriend', p('ra')),
    ],
    exercises: [
      /* 0 */ match(l('Соедини еду и перевод', 'Match the food'), [
        ['羊肉', l('баранина', 'mutton')],
        ['鸡蛋', l('яйцо', 'egg')],
        ['面条', l('лапша', 'noodles')],
        ['米饭', l('рис', 'rice')],
      ]),
      /* 1 */ match(l('Соедини транспорт и перевод', 'Match the transport'), [
        ['自行车', l('велосипед', 'bicycle')],
        ['出租车', l('такси', 'taxi')],
        ['火车', l('поезд', 'train')],
        ['飞机', l('самолёт', 'plane')],
      ]),
      /* 2 */ listen('下雨了', [l('Пошёл дождь.', "It's raining."), l('Стало холодно.', "It's cold."), l('Погода хорошая.', 'The weather is nice.')], 0),
      /* 3 */ cloze('因为昨天下雨，所以我们都没去（ ）篮球。', l('Из-за дождя мы не пошли играть в баскетбол.', "Because of the rain we didn't play basketball."), ['打', '踢', '跟'], 0),
      /* 4 */ cloze('这家商店的衣服（ ）都漂亮。', l('В этом магазине каждая вещь красивая.', 'Every item in this shop is pretty.'), ['件件', '天天', '因为'], 0),
      /* 5 */ cloze('我（ ）同学们一起学习汉语。', l('Я учу китайский вместе с одноклассниками.', 'I study Chinese with my classmates.'), ['跟', '因为', '所以'], 0),
      /* 6 */ cloze('（ ）工作很忙，所以没有时间运动。', l('Работы много, поэтому нет времени на спорт.', "Because work is busy, there's no time for sport."), ['因为', '所以', '怎么'], 0),
      /* 7 */ cloze('你知道一（ ）苹果多少钱吗？', l('Знаешь, сколько стоит цзинь яблок?', 'Do you know how much a jin of apples costs?'), ['斤', '件', '杯'], 0),
      /* 8 */ choice(l('«Почему же ты не пришёл?»', '"How come you didn\'t come?"'), ['你怎么没来？', '你怎么来没？', '怎么你没来了吗？'], 0),
      /* 9 */ choice(l('Что значит 天天?', 'What does 天天 mean?'), [l('каждый день', 'every day'), l('два дня', 'two days'), l('небо', 'sky')], 0),
      /* 10 */ tf(l('我在门外看见小王的自行车了。→ 小王来了，我看见他了。', "I saw Xiao Wang's bike outside. → Xiao Wang came, I saw him."), false, l('Видели только велосипед, а не его самого.', 'Only the bike was seen, not him.')),
      /* 11 */ tf(l('天天都吃羊肉，有鸡蛋面条吗？→ 他不想吃羊肉了。', "Mutton every day — any egg noodles? → He doesn't want mutton any more."), true),
      /* 12 */ tf(l('因为昨天下雨，所以我们都没去打篮球。→ 昨天天气很好。', 'It rained yesterday, so we didn\'t play. → The weather was good yesterday.'), false),
      /* 13 */ tf(l('听说小王去北京看他姐姐了，所以没来学校。→ 小王现在在北京呢。', 'Xiao Wang went to Beijing to see his sister. → Xiao Wang is in Beijing now.'), true),
      /* 14 */ tf(l('爸爸在医院工作，他每天都很忙。→ 爸爸一定是大夫。', 'Dad works at a hospital and is busy every day. → Dad must be a doctor.'), false, l('В больнице работают не только врачи — из текста этого не следует.', "Not everyone in a hospital is a doctor — the text doesn't say so.")),
      /* 15 */ match(l('Соедини вопрос и ответ', 'Match the question and the answer'), [
        ['小王今天怎么没来学校？', '他今天身体不太好。'],
        ['你们昨天怎么没去打篮球？', '昨天下雨了。'],
        ['小王什么时候来学校？', '他已经来了，你没看见吗？'],
        ['你还想吃什么？', '天天吃米饭，我想来点儿面条。'],
      ]),
      /* 16 */ build(l('Собери: «Из-за дождя мы не пошли»', 'Build: "It rained, so we didn\'t go"'), ['因为', '下雨', '所以', '我们', '没去']),
      /* 17 */ build(l('Собери: «Ты почему не ешь?»', 'Build: "How come you\'re not eating?"'), ['你', '怎么', '不', '吃了']),
      /* 18 */ type(l('Напиши иероглифами или пиньинем: «велосипед»', 'Write in characters or pinyin: "bicycle"'), ['自行车', 'zìxíngchē']),
      /* 19 */ listen('我每天运动，现在五十公斤了', [l('Я каждый день занимаюсь спортом, теперь вешу 50 кг.', 'I exercise daily and now weigh 50 kg.'), l('Я вешу 65 кг.', 'I weigh 65 kg.'), l('Я не занимаюсь спортом.', "I don't exercise.")], 0),
      /* 20 */ dict('你怎么不吃了', '你怎么不吃了', '你怎么不吃了？', 'nǐ zěnme bù chī le'),
      /* 21 */ choice(l('К какой картинке: 你的新家很漂亮，我想去你家玩儿。', 'Which picture: 你的新家很漂亮，我想去你家玩儿。'), [l('Красивый дом', 'A beautiful house'), l('Девушки с покупками', 'Girls with shopping bags'), l('Йога', 'Yoga')], 0),
      /* 22 */ wr('门', 'дверь', 'door'),
      /* 23 */ wr('因为', 'потому что', 'because'),
      /* 24 */ wr('所以', 'поэтому', 'so'),
      /* 25 */ wr('面条', 'лапша', 'noodles'),
      /* 26 */ wr('鸡蛋', 'яйцо', 'egg'),
    ],
    dialogue: {
      title: l('За обедом', 'At lunch'),
      lines: [
        dl('A', '你怎么不吃了？不好吃吗？', 'Ты чего не ешь? Невкусно?', "Why aren't you eating? Isn't it tasty?"),
        dl('B', '很好吃。可是这个星期天天吃羊肉。', 'Вкусно. Но на этой неделе каждый день баранина.', "It's tasty. But we've had mutton every day this week."),
        dl('A', '那你想吃什么？', 'А что ты хочешь?', 'What do you want then?'),
        dl('B', '我想来点儿鸡蛋面条。', 'Хочу лапши с яйцом.', "I'd like some egg noodles."),
        dl('A', '好，我跟你一起吃面条。', 'Ладно, поем лапши вместе с тобой.', "OK, I'll have noodles with you."),
      ],
    },
    story: {
      title: l('Дождливый день', 'A rainy day'),
      sentences: [
        st('因为昨天下雨，所以我们都没去打篮球。', 'Из-за вчерашнего дождя мы не пошли играть в баскетбол.', "Because it rained yesterday, none of us played basketball.", [['因为', 'потому что', 'because'], ['下雨', 'дождь', 'rain'], ['所以', 'поэтому', 'so'], ['没去', 'не пошли', "didn't go"]]),
        st('小王怎么没来学校？', 'А почему Сяо Ван не пришёл в школу?', "And why didn't Xiao Wang come to school?", [['怎么', 'почему же', 'how come'], ['没来', 'не пришёл', "didn't come"]]),
        st('听说他去北京看他姐姐了。', 'Говорят, уехал в Пекин к старшей сестре.', 'I hear he went to Beijing to see his older sister.', [['听说', 'говорят', 'I hear'], ['看他姐姐', 'навестить сестру', 'visit his sister']]),
        st('我跟同学们一起在教室学习汉语。', 'Я с одноклассниками занимался китайским в классе.', 'I studied Chinese in the classroom with my classmates.', [['跟同学们一起', 'вместе с одноклассниками', 'with classmates'], ['学习汉语', 'учить китайский', 'study Chinese']]),
        st('中午我们吃了鸡蛋面条。', 'В обед мы ели лапшу с яйцом.', 'At noon we had egg noodles.', [['中午', 'в обед', 'at noon'], ['鸡蛋面条', 'лапша с яйцом', 'egg noodles']]),
      ],
    },
  },
  exam: [
    listen('面条', [l('лапша', 'noodles'), l('рис', 'rice'), l('яйцо', 'egg')], 0),
    listen('你们怎么没去？', [l('Почему вы не пошли?', "Why didn't you go?"), l('Куда вы идёте?', 'Where are you going?'), l('Вы пойдёте?', 'Will you go?')], 0),
    listen('因为下雨，所以没去', [l('Из-за дождя не пошли.', "Because of the rain we didn't go."), l('Пошли, несмотря на дождь.', 'We went despite the rain.'), l('Завтра будет дождь.', 'It will rain tomorrow.')], 0),
    listen('我跟同学一起学习', [l('Я учусь вместе с одноклассником.', 'I study with a classmate.'), l('Я учусь один.', 'I study alone.'), l('Я не учусь.', "I don't study.")], 0),
    dict('因为下雨，所以我们没去', '因为下雨，所以我们没去', '因为下雨所以我们没去', 'yīnwèi xià yǔ suǒyǐ wǒmen méi qù'),
    dict('天天吃米饭', '天天吃米饭', '天天吃米饭。', 'tiāntiān chī mǐfàn'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['公斤', l('килограмм', 'kilogram')],
      ['门', l('дверь', 'door')],
      ['姐姐', l('старшая сестра', 'older sister')],
      ['大夫', l('врач', 'doctor')],
      ['游泳', l('плавать', 'swim')],
    ]),
    cloze('你（ ）不高兴？', l('Ты чего невесёлый?', 'How come you are unhappy?'), ['怎么', '因为', '跟'], 0),
    cloze('因为很累，（ ）我没去。', l('Я устал, поэтому не пошёл.', "I was tired, so I didn't go."), ['所以', '因为', '怎么'], 0),
    cloze('他（ ）女朋友一起去旅游了。', l('Он поехал путешествовать с девушкой.', 'He went travelling with his girlfriend.'), ['跟', '所以', '件件'], 0),
    cloze('这些苹果（ ）都很好吃。', l('Все эти яблоки до одного вкусные.', 'Every one of these apples is tasty.'), ['个个', '天天', '件件'], 0),
    choice(l('Повторение (урок 5): «Немного устал»', 'Review (lesson 5): "A bit tired"'), ['有点儿累', '一点儿累', '累有点儿'], 0),
    choice(l('Ответ на «你们昨天怎么没去打篮球？»', 'Reply to "你们昨天怎么没去打篮球？"'), ['昨天下雨了。', '他已经来了。', '我想来点儿面条。'], 0),
    choice(l('Как сказать «я вешу 50 кг»?', 'How do you say "I weigh 50 kg"?'), ['我五十公斤。', '我公斤五十。', '五十我公斤。'], 0),
    build(l('Собери: «Я учу китайский вместе с друзьями»', 'Build: "I study Chinese with friends"'), ['我', '跟朋友们', '一起', '学习汉语']),
    build(l('Собери: «Почему Сяо Ван не пришёл в школу?»', 'Build: "Why didn\'t Xiao Wang come to school?"'), ['小王', '怎么', '没来', '学校']),
    type(l('Напиши иероглифами или пиньинем: «потому что»', 'Write in characters or pinyin: "because"'), ['因为', 'yīnwèi']),
    tf(l('小王去北京看他姐姐了。→ 小王的姐姐在北京。', "Xiao Wang went to Beijing to see his sister. → His sister is in Beijing."), true),
    tf(l('我在门外看见小王的自行车了。→ 我看见小王了。', "I saw Xiao Wang's bike outside. → I saw Xiao Wang."), false),
    wr('因为', 'потому что', 'because'),
    wr('门', 'дверь', 'door'),
  ],
};
