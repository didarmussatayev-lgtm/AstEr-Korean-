import type { BookUnit } from '../book';
import { build, choice, cloze, dict, dl, hskPic, l, listen, match, st, tf, type, v, wr } from './h';

const p = hskPic(2, 4);

export const unit: BookUnit = {
  n: 4,
  lesson: {
    emoji: '🤝',
    title: l('Эту работу мне посоветовал он (这个工作是他帮我介绍的)', 'He recommended me for this job (这个工作是他帮我介绍的)'),
    goal: l(
      'Рассказывать, кто, когда и как что-то сделал: конструкция 是…的, «уже» 已经…了, «помочь сделать» 帮.',
      'Say who, when and how something was done: the 是…的 construction, "already" 已经…了, "help someone do" 帮.',
    ),
    theory: [
      {
        title: l('Знакомства, подарки, поздравления', 'Introductions, presents, greetings'),
        blocks: [
          { type: 'img', src: p('re'), caption: l('汤姆先生介绍我们认识的。 — Нас познакомил господин Том.', 'Mr. Tom introduced us.') },
          {
            type: 'examples',
            items: [
              { ko: '山姆，我给你介绍一下，这是我的大学同学谢飞。', tr: l('Сэм, позволь познакомить: это мой однокурсник Се Фэй.', "Sam, let me introduce you: this is my university classmate Xie Fei.") },
              { ko: '生日快乐！', tr: l('С днём рождения!', 'Happy birthday!') },
              { ko: '昨天是我的生日，这是我丈夫送给我的。', tr: l('Вчера был мой день рождения, это мне подарил муж.', 'Yesterday was my birthday; my husband gave me this.') },
            ],
          },
          { type: 'img', src: p('ra'), caption: l('礼物 — подарок', 'a present') },
          {
            type: 'tip',
            text: l('给 + человек + 介绍 — «познакомить кого-то»: 我给你介绍一下. 送给 — «подарить кому-то».', '给 + person + 介绍 means "introduce to someone": 我给你介绍一下. 送给 means "give (as a present) to".'),
          },
        ],
      },
      {
        title: l('Акцент на деталях прошлого: 是 … 的', 'Stressing details of the past: 是 … 的'),
        blocks: [
          {
            type: 'p',
            text: l(
              'Если событие уже произошло, а мы уточняем **когда, где, как или кто** его сделал, используется **是 + деталь + глагол + 的**. 是 в утверждении часто опускают.',
              'When an action has already happened and we stress **when, where, how or who**, we use **是 + detail + verb + 的**. 是 is often dropped in statements.',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '这个工作是他帮我介绍的。', tr: l('Эту работу мне нашёл (посоветовал) он.', 'He is the one who recommended me for this job.') },
              { ko: '这本书是你什么时候写的？— 2011年吧。', tr: l('Когда ты написал эту книгу? — В 2011-м.', 'When did you write this book? — In 2011.') },
              { ko: '我是大学的时候开始学的。', tr: l('Я начал учить в университете.', 'I started learning at university.') },
              { ko: '晚饭是李小姐帮我做的。', tr: l('Ужин мне помогла приготовить госпожа Ли.', 'Miss Li helped me make dinner.') },
            ],
          },
          { type: 'img', src: p('rf'), caption: l('晚饭是李小姐帮我做的。', 'Miss Li helped me make dinner.') },
        ],
      },
      {
        title: l('«Уже»: 已经 … 了 и «помочь»: 帮', '"Already": 已经 … 了 and "help": 帮'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**已经 + глагол/прил. + 了** — «уже»: 儿子已经回来了. **帮 + человек + глагол** — «помочь кому-то сделать»: 你帮我打个电话吧.',
              '**已经 + verb/adj. + 了** means "already": 儿子已经回来了. **帮 + person + verb** means "help someone do": 你帮我打个电话吧.',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '儿子已经回来了，他在看电视呢。', tr: l('Сын уже вернулся, смотрит телевизор.', 'My son is already back, he is watching TV.') },
              { ko: '医生说你已经好了，明天开始不吃这个药了。', tr: l('Врач сказал, ты уже здоров, с завтра это лекарство не пить.', "The doctor says you're well now — stop this medicine from tomorrow.") },
              { ko: '我身体不好，你帮我给王老师打个电话吧。', tr: l('Мне нехорошо, позвони за меня учителю Вану.', "I'm unwell — please call Teacher Wang for me.") },
            ],
          },
          { type: 'img', src: p('rc'), caption: l('他在看电视呢。 — Он смотрит телевизор.', 'He is watching TV.') },
        ],
      },
      {
        title: l('Читаем: вопросы и ответы', 'Reading: questions and answers'),
        blocks: [
          {
            type: 'examples',
            items: [
              { ko: '你的汉字非常漂亮。— 谢谢！我是大学的时候开始学的。', tr: l('У тебя очень красивые иероглифы. — Спасибо! Я начал учить в университете.', 'Your characters are beautiful. — Thanks! I started learning at university.') },
              { ko: '今天是我的生日，你们多吃点儿。— 我们也很高兴，生日快乐！', tr: l('Сегодня мой день рождения, ешьте больше. — Мы тоже рады, с днём рождения!', "It's my birthday today, eat up! — We're happy too — happy birthday!") },
              { ko: '这几天我不想吃饭。— 是不是病了？你问一下医生吧。', tr: l('Последние дни не хочу есть. — Ты не заболел? Спроси врача.', "I haven't wanted to eat these days. — Are you ill? Ask a doctor.") },
            ],
          },
        ],
      },
    ],
    vocab: [
      v('介绍', 'jièshào', 'знакомить, представлять; рекомендовать', 'to introduce, to recommend', p('re')),
      v('帮', 'bāng', 'помогать', 'to help'),
      v('已经', 'yǐjing', 'уже', 'already'),
      v('生日', 'shēngrì', 'день рождения', 'birthday', p('ra')),
      v('快乐', 'kuàilè', 'радостный, счастливый', 'happy'),
      v('高兴', 'gāoxìng', 'рад, весёлый', 'glad, happy', p('lf')),
      v('送给', 'sòng gěi', 'подарить кому-то', 'to give (as a gift) to'),
      v('写', 'xiě', 'писать', 'to write'),
      v('汉字', 'Hànzì', 'китайские иероглифы', 'Chinese characters'),
      v('开始', 'kāishǐ', 'начинать', 'to start'),
      v('大学', 'dàxué', 'университет', 'university', p('la')),
      v('电视', 'diànshì', 'телевизор', 'television', p('rc')),
      v('回家', 'huí jiā', 'вернуться домой', 'to go home'),
      v('晚上', 'wǎnshang', 'вечер', 'evening'),
      v('打电话', 'dǎ diànhuà', 'звонить по телефону', 'to make a phone call'),
      v('接', 'jiē', 'принимать (звонок); встречать', 'to answer (a call); to meet'),
      v('非常', 'fēicháng', 'очень, чрезвычайно', 'very, extremely'),
      v('晚饭', 'wǎnfàn', 'ужин', 'dinner', p('rf')),
      v('工作', 'gōngzuò', 'работа', 'job, work', p('l5')),
      v('时候', 'shíhou', 'время, когда', 'time, when'),
    ],
    exercises: [
      /* 0 */ match(l('Соедини слово и перевод', 'Match the words'), [
        ['介绍', l('знакомить', 'introduce')],
        ['帮', l('помогать', 'help')],
        ['开始', l('начинать', 'start')],
        ['写', l('писать', 'write')],
        ['接', l('принимать (звонок)', 'answer (a call)')],
      ]),
      /* 1 */ listen('生日快乐', [l('С днём рождения!', 'Happy birthday!'), l('Рад знакомству!', 'Nice to meet you!'), l('До свидания!', 'Goodbye!')], 0),
      /* 2 */ cloze('我身体不好，不能去学校，你（ ）我给王老师打个电话吧。', l('Мне нехорошо, позвони учителю Вану вместо меня.', "I'm unwell — call Teacher Wang for me."), ['帮', '介绍', '已经'], 0),
      /* 3 */ cloze('明天是丽丽的生日，你想送（ ）她什么？', l('Завтра день рождения Лили, что ты ей подаришь?', "Tomorrow is Lili's birthday — what will you give her?"), ['给', '帮', '已经'], 0),
      /* 4 */ cloze('这个电影（ ）好，我们都看了，你也看看吧。', l('Этот фильм очень хороший, мы все видели, посмотри и ты.', "This film is great — we've all seen it, you should too."), ['非常', '已经', '介绍'], 0),
      /* 5 */ cloze('医生说你（ ）好了，明天开始不吃这个药了。', l('Врач сказал, ты уже здоров.', "The doctor says you're already well."), ['已经', '非常', '帮'], 0),
      /* 6 */ cloze('你认识李先生吗？能不能给我（ ）一下？', l('Ты знаешь господина Ли? Можешь меня с ним познакомить?', 'Do you know Mr. Li? Could you introduce me?'), ['介绍', '帮', '送'], 0),
      /* 7 */ choice(l('«Когда ты это написал?» (с 是…的):', '"When did you write it?" (with 是…的):'), ['这是你什么时候写的？', '这是你什么时候写了？', '你什么时候是写？'], 0),
      /* 8 */ choice(l('«Я начал учить в университете»:', '"I started learning at university":'), ['我是大学的时候开始学的。', '我大学开始学了的。', '我是开始学大学的。'], 0),
      /* 9 */ choice(l('«Сын уже вернулся»:', '"My son is already back":'), ['儿子已经回来了。', '儿子回来已经。', '已经儿子回来。'], 0),
      /* 10 */ tf(l('妈妈做好饭了，晚上我们回家吃饭吧。→ 他们晚上不出去吃饭。', "Mum has cooked; let's eat at home tonight. → They won't eat out tonight."), true),
      /* 11 */ tf(l('下午我睡觉的时候有一个电话，我没接。→ 我不知道电话是谁打的。', "Someone called while I was asleep; I didn't answer. → I don't know who called."), true),
      /* 12 */ tf(l('明天是你的生日，明天晚上我不工作。→ 我明天晚上没有时间。', "Tomorrow is your birthday; I'm not working tomorrow night. → I have no time tomorrow night."), false),
      /* 13 */ tf(l('你问一下爸爸什么时候去踢足球。→ 爸爸要踢足球。', 'Ask Dad when he is going to play football. → Dad is going to play football.'), true),
      /* 14 */ tf(l('山姆，我给你介绍一下，这是我的大学同学谢飞。→ 我和谢飞是大学的时候认识的。', 'Sam, meet my university classmate Xie Fei. → I met Xie Fei at university.'), true),
      /* 15 */ match(l('Соедини реплику и ответ', 'Match the line and the reply'), [
        ['这本书是你什么时候写的？', '2011年吧，已经两年了。'],
        ['你的汉字非常漂亮。', '谢谢！我是大学的时候开始学的。'],
        ['今天是我的生日，你们多吃点儿。', '我们也很高兴，生日快乐！'],
        ['这几天我不想吃饭。', '是不是病了？你问一下医生吧。'],
      ]),
      /* 16 */ build(l('Собери: «Эту работу посоветовал мне он»', 'Build: "He recommended me for this job"'), ['这个工作', '是', '他', '帮我', '介绍的']),
      /* 17 */ build(l('Собери: «Позволь тебя познакомить»', 'Build: "Let me introduce you"'), ['我', '给你', '介绍', '一下']),
      /* 18 */ type(l('Напиши иероглифами или пиньинем: «уже»', 'Write in characters or pinyin: "already"'), ['已经', 'yǐjing']),
      /* 19 */ listen('这是我丈夫送给我的', [l('Это мне подарил муж.', 'My husband gave me this.'), l('Это я подарила мужу.', 'I gave this to my husband.'), l('Это мой муж.', 'This is my husband.')], 0),
      /* 20 */ dict('生日快乐', '生日快乐', '生日快乐！', 'shēngrì kuàilè'),
      /* 21 */ choice(l('К какой картинке: 汤姆先生介绍我们认识的。', 'Which picture: 汤姆先生介绍我们认识的。'), [l('Люди пожимают руки', 'People shaking hands'), l('Мужчина смотрит телевизор', 'A man watching TV'), l('Подарок с лентой', 'A gift with a ribbon')], 0),
      /* 22 */ wr('两', 'два', 'two'),
      /* 23 */ wr('乐', 'радость', 'joy'),
      /* 24 */ wr('长', 'длинный', 'long'),
      /* 25 */ wr('介绍', 'знакомить', 'to introduce'),
      /* 26 */ wr('生日', 'день рождения', 'birthday'),
      /* 27 */ wr('汉字', 'иероглифы', 'Chinese characters'),
    ],
    dialogue: {
      title: l('Новая работа', 'A new job'),
      lines: [
        dl('A', '听说你有新工作了？', 'Слышал, у тебя новая работа?', 'I hear you have a new job?'),
        dl('B', '是的，已经工作一个月了。', 'Да, работаю уже месяц.', "Yes, I've already been working for a month."),
        dl('A', '这个工作是谁帮你介绍的？', 'Кто тебе посоветовал эту работу?', 'Who recommended you for this job?'),
        dl('B', '是我的大学同学谢飞帮我介绍的。', 'Мой однокурсник Се Фэй.', 'My university classmate Xie Fei.'),
        dl('A', '太好了！你们是什么时候认识的？', 'Отлично! А когда вы познакомились?', 'Great! When did you meet?'),
        dl('B', '我们是大学的时候认识的。', 'Мы познакомились в университете.', 'We met at university.'),
      ],
    },
    story: {
      title: l('День рождения', 'A birthday'),
      sentences: [
        st('昨天是我的生日。', 'Вчера был мой день рождения.', 'Yesterday was my birthday.', [['昨天', 'вчера', 'yesterday'], ['生日', 'день рождения', 'birthday']]),
        st('这块手表是我丈夫送给我的。', 'Эти часы мне подарил муж.', 'My husband gave me this watch.', [['这块手表', 'эти часы', 'this watch'], ['丈夫', 'муж', 'husband'], ['送给我的', 'подарил мне', 'gave me']]),
        st('晚饭是李小姐帮我做的。', 'Ужин помогла приготовить госпожа Ли.', 'Miss Li helped me make dinner.', [['晚饭', 'ужин', 'dinner'], ['帮我做的', 'помогла приготовить', 'helped me make']]),
        st('朋友们都说：“生日快乐！”', 'Все друзья сказали: «С днём рождения!»', 'All my friends said, "Happy birthday!"', [['朋友们', 'друзья', 'friends'], ['都说', 'все сказали', 'all said'], ['生日快乐', 'с днём рождения', 'happy birthday']]),
        st('我非常高兴。', 'Я была очень рада.', 'I was very happy.', [['非常', 'очень', 'very'], ['高兴', 'рада', 'happy']]),
      ],
    },
  },
  exam: [
    listen('介绍', [l('знакомить', 'introduce'), l('помогать', 'help'), l('начинать', 'start')], 0),
    listen('他已经回家了', [l('Он уже вернулся домой.', 'He has already gone home.'), l('Он ещё не вернулся.', "He hasn't come back yet."), l('Он хочет домой.', 'He wants to go home.')], 0),
    listen('你帮我打个电话吧', [l('Позвони за меня, пожалуйста.', 'Please make a call for me.'), l('Не звони мне.', "Don't call me."), l('Кто звонил?', 'Who called?')], 0),
    listen('我们是大学的时候认识的', [l('Мы познакомились в университете.', 'We met at university.'), l('Мы учимся в университете.', 'We study at university.'), l('Мы не знакомы.', "We don't know each other.")], 0),
    dict('这个工作是他帮我介绍的', '这个工作是他帮我介绍的', '这个工作是他帮我介绍的。', 'zhège gōngzuò shì tā bāng wǒ jièshào de'),
    dict('我很高兴', '我很高兴', '我很高兴。', 'wǒ hěn gāoxìng'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['生日', l('день рождения', 'birthday')],
      ['汉字', l('иероглифы', 'characters')],
      ['大学', l('университет', 'university')],
      ['电视', l('телевизор', 'TV')],
      ['晚饭', l('ужин', 'dinner')],
    ]),
    cloze('这本书是你什么时候写（ ）？', l('Когда ты написал эту книгу?', 'When did you write this book?'), ['的', '了', '吗'], 0),
    cloze('他（ ）走了，十分钟后能到。', l('Он уже вышел, будет через 10 минут.', "He's left already; he'll be here in ten minutes."), ['已经', '非常', '帮'], 0),
    cloze('我给你（ ）一下，这是我的同学。', l('Позволь познакомить: это мой однокурсник.', 'Let me introduce my classmate.'), ['介绍', '已经', '开始'], 0),
    cloze('你（ ）我看看这个汉字吧。', l('Помоги мне посмотреть этот иероглиф.', 'Help me look at this character.'), ['帮', '送', '接'], 0),
    choice(l('Где правильно (о прошлом, акцент на «как»)?', 'Which is correct (past, stressing "how")?'), ['我是坐飞机来的。', '我是坐飞机来了。', '我坐飞机是来的。'], 0),
    choice(l('Повторение (урок 3): «Белая — моя»', 'Review (lesson 3): "The white one is mine"'), ['白色的是我的。', '白色是我。', '我是白色的。'], 0),
    choice(l('Ответ на «你的汉字非常漂亮»:', 'Reply to "你的汉字非常漂亮":'), ['谢谢！我是大学的时候开始学的。', '生日快乐！', '2011年吧。'], 0),
    build(l('Собери: «Ужин помогла приготовить госпожа Ли»', 'Build: "Miss Li helped me make dinner"'), ['晚饭', '是', '李小姐', '帮我', '做的']),
    build(l('Собери: «Врач сказал, ты уже здоров»', 'Build: "The doctor says you\'re already well"'), ['医生', '说', '你', '已经', '好了']),
    type(l('Напиши иероглифами или пиньинем: «знакомить»', 'Write in characters or pinyin: "to introduce"'), ['介绍', 'jièshào']),
    tf(l('下午有一个电话，我没接。→ 我接了电话。', 'There was a call; I didn\'t answer. → I answered the call.'), false),
    tf(l('明天晚上我不工作。→ 我明天晚上有时间。', "I'm not working tomorrow night. → I'm free tomorrow night."), true),
    wr('介绍', 'знакомить', 'to introduce'),
    wr('汉字', 'иероглифы', 'Chinese characters'),
  ],
};
