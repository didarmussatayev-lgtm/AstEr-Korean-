import type { BookUnit } from '../book';
import { build, choice, cloze, dict, dl, hskPic, l, listen, match, st, tf, type, v, wr } from './h';

const p = hskPic(2, 2);

export const unit: BookUnit = {
  n: 2,
  lesson: {
    emoji: '⏰',
    title: l('Я каждый день встаю в шесть (我每天六点起床)', 'I get up at six every day (我每天六点起床)'),
    goal: l(
      'Рассказывать о распорядке дня и здоровье: «каждый» 每…都, вопрос «насколько» 多 + прил., «нужно» 要.',
      'Talk about your daily routine and health: "every" 每…都, "how (tall, old…)" 多 + adj., "need to" 要.',
    ),
    theory: [
      {
        title: l('Распорядок дня и здоровье', 'Daily routine and health'),
        blocks: [
          { type: 'img', src: p('ra'), caption: l('妈妈每天早上七点前起床。 — Мама каждый день встаёт до семи.', 'Mum gets up before seven every morning.') },
          {
            type: 'examples',
            items: [
              { ko: '我每天下午和同学一起去跑步。', tr: l('Каждый день после обеда я бегаю с одноклассником.', 'Every afternoon I go running with a classmate.') },
              { ko: '爸爸每天工作很忙，星期六也不休息。', tr: l('Папа каждый день очень занят на работе и даже в субботу не отдыхает.', "Dad is busy at work every day and doesn't rest even on Saturday.") },
              { ko: '这是一个星期的药，每天早上吃。', tr: l('Это лекарство на неделю, принимать каждое утро.', "This is a week's medicine; take it every morning.") },
            ],
          },
          { type: 'img', src: p('rf'), caption: l('麦克先生最不喜欢住院。 — Майк больше всего не любит лежать в больнице.', "Mr. Mike hates staying in hospital most of all.") },
          {
            type: 'tip',
            text: l('生病 — «заболеть», 住院 — «лечь в больницу», 出院 — «выписаться». Лекарство «едят»: 吃药.', '生病 means "to fall ill", 住院 "to be in hospital", 出院 "to leave hospital". Medicine is "eaten": 吃药.'),
          },
        ],
      },
      {
        title: l('«Каждый»: 每 … 都', '"Every": 每 … 都'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**每 + (счётное слово) + сущ.** — «каждый». Обычно дальше идёт **都** перед глаголом: 每个星期六都工作. Со словами времени счётное слово не нужно: 每天, 每年.',
              '**每 + (measure word) + noun** means "every". It is usually followed by **都** before the verb: 每个星期六都工作. Time words need no measure word: 每天, 每年.',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '我们每个星期六都工作。', tr: l('Мы работаем каждую субботу.', 'We work every Saturday.') },
              { ko: '我每天六点起床。', tr: l('Я встаю каждый день в шесть.', 'I get up at six every day.') },
              { ko: '每个人都很忙。', tr: l('Все (каждый) очень заняты.', 'Everyone is busy.') },
            ],
          },
        ],
      },
      {
        title: l('«Насколько?»: 多 + прилагательное', '"How …?": 多 + adjective'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**多 + прил.** в вопросе — «насколько»: 多高 «какого роста», 多大 «сколько лет», 多长 «какой длины».',
              '**多 + adj.** in a question means "how …": 多高 "how tall", 多大 "how old", 多长 "how long".',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '你儿子多高？— 一米五几。', tr: l('Какого роста твой сын? — Метр пятьдесят с чем-то.', 'How tall is your son? — One metre fifty-something.') },
              { ko: '他儿子今年八岁了，很高，已经一米四了。', tr: l('Его сыну восемь, он высокий — уже метр сорок.', "His son is eight this year — very tall, already 1.4 m.") },
              { ko: '你的小猫多大了？', tr: l('Сколько лет твоему котёнку?', 'How old is your kitten?') },
            ],
          },
          {
            type: 'tip',
            text: l('米 mǐ — «метр»: 一米四 = 1,4 м. 几 после числа — «с чем-то»: 一米五几 «метр пятьдесят с чем-то».', '米 mǐ is "metre": 一米四 = 1.4 m. 几 after a number means "and something": 一米五几 "1.5-something m".'),
          },
        ],
      },
      {
        title: l('«Нужно»: 要', '"Need to": 要'),
        blocks: [
          {
            type: 'p',
            text: l(
              'Кроме «хочу» (урок 1), **要** значит «нужно, надо»: 医生说我要住两天院 — «врач сказал, мне нужно полежать два дня». «Не нужно» — **不用**, «нельзя» — **不要**.',
              'Besides "want to" (lesson 1), **要** means "need to, must": 医生说我要住两天院 — "the doctor says I need to stay in hospital for two days". "No need" is **不用**, "don\'t" is **不要**.',
            ),
          },
          { type: 'img', src: p('re'), caption: l('这个药每天中午吃，晚饭后不要吃。 — Это лекарство принимать днём, после ужина не принимать.', 'Take this medicine at noon every day; not after dinner.') },
        ],
      },
      {
        title: l('Читаем: диалоги из тетради', 'Reading: dialogues from the workbook'),
        blocks: [
          {
            type: 'examples',
            items: [
              { ko: '医生说他不能出院。— 什么？已经三天了，为什么？', tr: l('Врач сказал, ему нельзя выписываться. — Что? Уже три дня, почему?', "The doctor says he can't leave hospital. — What? It's been three days already, why?") },
              { ko: '你每天什么时候睡觉？— 九点多吧，很早。我早上起床也很早。', tr: l('Когда ты ложишься спать? — В девять с чем-то, рано. И встаю рано.', 'When do you go to bed? — After nine, quite early. I also get up early.') },
              { ko: '星期六也不休息，你工作很忙吧？— 没关系，星期天我有不少时间休息。', tr: l('Даже в субботу не отдыхаешь — много работы? — Ничего, в воскресенье отдохну.', "You don't rest even on Saturday — very busy? — It's fine, I have plenty of time to rest on Sunday.") },
            ],
          },
          { type: 'img', src: p('rb'), caption: l('跑步 — бегать', '跑步 — to run') },
        ],
      },
    ],
    vocab: [
      v('起床', 'qǐchuáng', 'вставать (с кровати)', 'to get up', p('ra')),
      v('每', 'měi', 'каждый', 'every'),
      v('早上', 'zǎoshang', 'утро', 'morning'),
      v('跑步', 'pǎobù', 'бегать', 'to run, jog', p('rb')),
      v('休息', 'xiūxi', 'отдыхать', 'to rest'),
      v('忙', 'máng', 'занятой', 'busy', p('rc')),
      v('时间', 'shíjiān', 'время', 'time', p('l5')),
      v('生病', 'shēngbìng', 'заболеть', 'to fall ill', p('le')),
      v('医生', 'yīshēng', 'врач', 'doctor', p('rf')),
      v('医院', 'yīyuàn', 'больница', 'hospital'),
      v('住院', 'zhùyuàn', 'лежать в больнице', 'to be in hospital'),
      v('出院', 'chūyuàn', 'выписаться из больницы', 'to leave hospital'),
      v('药', 'yào', 'лекарство', 'medicine', p('re')),
      v('身体', 'shēntǐ', 'тело, здоровье', 'body, health', p('lf')),
      v('高', 'gāo', 'высокий', 'tall, high'),
      v('米', 'mǐ', 'метр', 'metre'),
      v('知道', 'zhīdào', 'знать', 'to know'),
      v('出去', 'chūqu', 'выходить (наружу)', 'to go out'),
      v('儿子', 'érzi', 'сын', 'son'),
      v('睡觉', 'shuìjiào', 'спать, ложиться спать', 'to sleep'),
      v('同学', 'tóngxué', 'одноклассник', 'classmate'),
    ],
    exercises: [
      /* 0 */ match(l('Соедини слово и перевод', 'Match the words'), [
        ['起床', l('вставать', 'get up')],
        ['跑步', l('бегать', 'run')],
        ['休息', l('отдыхать', 'rest')],
        ['睡觉', l('спать', 'sleep')],
      ]),
      /* 1 */ match(l('Соедини слово и перевод', 'Match the words'), [
        ['医生', l('врач', 'doctor')],
        ['医院', l('больница', 'hospital')],
        ['药', l('лекарство', 'medicine')],
        ['生病', l('заболеть', 'fall ill')],
        ['出院', l('выписаться', 'leave hospital')],
      ]),
      /* 2 */ listen('我每天六点起床', [l('Я встаю каждый день в шесть.', 'I get up at six every day.'), l('Я ложусь спать в шесть.', 'I go to bed at six.'), l('Я бегаю каждый день.', 'I run every day.')], 0),
      /* 3 */ cloze('我们（ ）个星期六都工作。', l('Мы работаем каждую субботу.', 'We work every Saturday.'), ['每', '多', '也'], 0),
      /* 4 */ cloze('对不起，我很（ ），没时间去看电影。', l('Извини, я очень занят, нет времени на кино.', "Sorry, I'm busy, no time for a film."), ['忙', '高', '冷'], 0),
      /* 5 */ cloze('他不在家，下午四点（ ）买东西了。', l('Его нет дома, в четыре он вышел за покупками.', "He isn't home — he went out shopping at four."), ['出去', '起床', '休息'], 0),
      /* 6 */ cloze('我的小猫不想吃东西，我觉得它（ ）了。', l('Мой котёнок не хочет есть, кажется, он заболел.', "My kitten won't eat — I think it's ill."), ['生病', '出院', '跑步'], 0),
      /* 7 */ cloze('我也不（ ）北京的天气，你问问小李，他是北京人。', l('Я тоже не знаю погоду в Пекине, спроси Сяо Ли, он пекинец.', "I don't know Beijing's weather either — ask Xiao Li, he's from Beijing."), ['知道', '觉得', '喜欢'], 0),
      /* 8 */ choice(l('«Какого роста твой сын?»', '"How tall is your son?"'), ['你儿子多高？', '你儿子高多？', '你儿子多少高？'], 0),
      /* 9 */ choice(l('Что значит 一米四?', 'What does 一米四 mean?'), [l('1,4 метра', '1.4 metres'), l('14 метров', '14 metres'), l('4 метра', '4 metres')], 0),
      /* 10 */ choice(l('«Не нужно» (нет необходимости):', '"No need":'), ['不用', '不要', '不能'], 0),
      /* 11 */ tf(l('医生说我要住两天院。→ 我今天不能出院。', 'The doctor says I need two days in hospital. → I cannot leave today.'), true),
      /* 12 */ tf(l('我的小猫生病了，你知道去哪个医院好吗？→ 我的小猫现在好多了。', "My kitten is ill, do you know a good clinic? → My kitten is much better now."), false),
      /* 13 */ tf(l('你星期天也去学校吗？太忙了！→ 他星期天不休息。', "You go to school even on Sunday? Too busy! → He doesn't rest on Sunday."), true),
      /* 14 */ tf(l('这个药每天中午吃，晚饭后不要吃。→ 每天晚饭后吃药。', 'Take it at noon, not after dinner. → Take the medicine after dinner every day.'), false),
      /* 15 */ tf(l('我儿子不太高，他今年十四岁，一米五几。→ 他儿子今年十多岁。', 'My son is not tall, he is 14, about 1.5 m. → His son is over ten.'), true),
      /* 16 */ match(l('Соедини реплику и ответ', 'Match the line and the reply'), [
        ['他儿子今年八岁了。', '很高，已经一米四了。'],
        ['星期六也不休息，你工作很忙吧？', '没关系，星期天我有不少时间休息。'],
        ['医生说他不能出院。', '什么？已经三天了，为什么？'],
        ['你每天什么时候睡觉？', '九点多吧，很早。'],
      ]),
      /* 17 */ build(l('Собери: «Я каждый день бегаю»', 'Build: "I run every day"'), ['我', '每天', '都', '跑步']),
      /* 18 */ build(l('Собери: «Врач сказал, мне нужно лечь в больницу»', 'Build: "The doctor said I need to be in hospital"'), ['医生', '说', '我', '要', '住院']),
      /* 19 */ type(l('Напиши иероглифами или пиньинем: «вставать»', 'Write in characters or pinyin: "to get up"'), ['起床', 'qǐchuáng']),
      /* 20 */ listen('他病了', [l('Он заболел.', 'He is ill.'), l('Он выписался.', 'He left hospital.'), l('Он отдыхает.', 'He is resting.')], 0),
      /* 21 */ dict('我每天早上跑步', '我每天早上跑步', '我每天早上跑步。', 'wǒ měi tiān zǎoshang pǎobù'),
      /* 22 */ choice(l('К какой картинке: 这是一个星期的药，每天早上吃。', 'Which picture: 这是一个星期的药，每天早上吃。'), [l('Таблетки в руке', 'Pills in a hand'), l('Бегущие люди', 'People running'), l('Девочка и будильник', 'A girl and an alarm clock')], 0),
      /* 23 */ wr('起床', 'вставать', 'to get up'),
      /* 24 */ wr('每天', 'каждый день', 'every day'),
      /* 25 */ wr('生', 'рождаться (生病)', 'to be born (生病)'),
      /* 26 */ wr('医院', 'больница', 'hospital'),
      /* 27 */ wr('休息', 'отдыхать', 'to rest'),
      /* 28 */ wr('药', 'лекарство', 'medicine'),
    ],
    dialogue: {
      title: l('Во сколько ты встаёшь?', 'What time do you get up?'),
      lines: [
        dl('A', '你每天几点起床？', 'Во сколько ты встаёшь каждый день?', 'What time do you get up every day?'),
        dl('B', '我每天六点起床，早上去跑步。', 'В шесть. Утром бегаю.', 'At six. I go running in the morning.'),
        dl('A', '太早了！你什么时候睡觉？', 'Так рано! А когда ложишься?', "So early! When do you go to bed?"),
        dl('B', '九点多吧。身体好很重要。', 'В девять с чем-то. Здоровье — это важно.', 'After nine. Good health is important.'),
        dl('A', '我也想跑步，可是我每天都很忙。', 'Я тоже хочу бегать, но каждый день занят.', "I want to run too, but I'm busy every day."),
      ],
    },
    story: {
      title: l('Майк в больнице', 'Mike in hospital'),
      sentences: [
        st('麦克生病了，住院了。', 'Майк заболел и лёг в больницу.', 'Mike fell ill and went into hospital.', [['麦克', 'Майк', 'Mike'], ['生病了', 'заболел', 'fell ill'], ['住院了', 'лёг в больницу', 'went into hospital']]),
        st('他最不喜欢住院。', 'Больше всего он не любит лежать в больнице.', 'He hates being in hospital most of all.', [['最不喜欢', 'больше всего не любит', 'dislikes most'], ['住院', 'лежать в больнице', 'stay in hospital']]),
        st('医生说他要住两天院。', 'Врач сказал, ему нужно полежать два дня.', 'The doctor said he must stay for two days.', [['医生说', 'врач сказал', 'the doctor said'], ['要', 'нужно', 'need to'], ['住两天院', 'полежать два дня', 'stay two days']]),
        st('这个药每天中午吃，晚饭后不要吃。', 'Лекарство пить каждый день в обед, после ужина не пить.', 'He takes the medicine at noon every day, not after dinner.', [['这个药', 'это лекарство', 'this medicine'], ['每天中午', 'каждый день в обед', 'every day at noon'], ['不要吃', 'не принимать', "don't take"]]),
        st('现在他身体好多了，明天能出院。', 'Сейчас ему намного лучше, завтра выпишут.', 'Now he feels much better and can leave tomorrow.', [['身体', 'здоровье', 'health'], ['好多了', 'намного лучше', 'much better'], ['明天能出院', 'завтра выпишут', 'can leave tomorrow']]),
      ],
    },
  },
  exam: [
    listen('起床', [l('вставать', 'get up'), l('спать', 'sleep'), l('отдыхать', 'rest')], 0),
    listen('我很忙，没有时间', [l('Я занят, нет времени.', "I'm busy, I have no time."), l('Я свободен.', "I'm free."), l('Я устал.', "I'm tired.")], 0),
    listen('医生说我要住院', [l('Врач сказал, мне нужно в больницу.', 'The doctor says I must go into hospital.'), l('Врач сказал, меня выписывают.', "The doctor says I'm leaving hospital."), l('Я хочу стать врачом.', 'I want to be a doctor.')], 0),
    listen('你儿子多高？', [l('Какого роста твой сын?', 'How tall is your son?'), l('Сколько лет твоему сыну?', 'How old is your son?'), l('Где твой сын?', 'Where is your son?')], 0),
    dict('我每天六点起床', '我每天六点起床', '我每天六点起床。', 'wǒ měi tiān liù diǎn qǐchuáng'),
    dict('星期六也不休息', '星期六也不休息', '星期六也不休息。', 'xīngqīliù yě bù xiūxi'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['身体', l('здоровье', 'health')],
      ['知道', l('знать', 'know')],
      ['儿子', l('сын', 'son')],
      ['同学', l('одноклассник', 'classmate')],
      ['早上', l('утро', 'morning')],
    ]),
    cloze('我（ ）天都跑步。', l('Я бегаю каждый день.', 'I run every day.'), ['每', '多', '最'], 0),
    cloze('你（ ）去哪个医院好吗？', l('Ты знаешь, в какую больницу лучше?', 'Do you know which hospital is good?'), ['知道', '觉得', '休息'], 0),
    cloze('他今天不能（ ），还要住两天。', l('Сегодня его не выпишут, ещё два дня.', "He can't leave today; two more days."), ['出院', '住院', '生病'], 0),
    cloze('你的小猫（ ）大了？', l('Сколько лет твоему котёнку?', 'How old is your kitten?'), ['多', '每', '几个'], 0),
    choice(l('Где правильно?', 'Which is correct?'), ['我每天都七点起床。', '我每天七点都起床都。', '我都每天七点起床。'], 0),
    choice(l('Повторение (урок 1): «Больше всего люблю футбол»', 'Review (lesson 1): "I like football most"'), ['我最喜欢踢足球。', '我喜欢最踢足球。', '我最喜欢打足球。'], 0),
    choice(l('Ответ на «你每天什么时候睡觉？»', 'Reply to "你每天什么时候睡觉？"'), ['九点多吧，很早。', '一米四了。', '已经三天了。'], 0),
    build(l('Собери: «Папа очень занят каждый день»', 'Build: "Dad is very busy every day"'), ['爸爸', '每天', '工作', '很忙']),
    build(l('Собери: «Лекарство принимать каждое утро»', 'Build: "Take the medicine every morning"'), ['药', '每天', '早上', '吃']),
    type(l('Напиши иероглифами или пиньинем: «врач»', 'Write in characters or pinyin: "doctor"'), ['医生', 'yīshēng']),
    tf(l('这个药每天中午吃。→ 晚饭后吃药。', 'Take this medicine at noon. → Take it after dinner.'), false),
    tf(l('他儿子十四岁。→ 他儿子十多岁。', 'His son is 14. → His son is over ten.'), true),
    wr('医生', 'врач', 'doctor'),
    wr('起床', 'вставать', 'to get up'),
  ],
};
