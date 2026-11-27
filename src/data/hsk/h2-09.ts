import type { BookUnit } from '../book';
import { build, choice, cloze, dict, dl, hskPic, l, listen, match, st, tf, type, v, wr } from './h';

const p = hskPic(2, 9);

export const unit: BookUnit = {
  n: 9,
  lesson: {
    emoji: '📝',
    title: l('Заданий было много, я не успел (题太多，我没做完)', "There were too many questions; I didn't finish (题太多，我没做完)"),
    goal: l(
      'Говорить о результате действия: результативные дополнения (做完, 听懂, 找到, 做对, 看见), порядковые 第…, «надеяться» 希望.',
      'Talk about the result of an action: resultative complements (做完, 听懂, 找到, 做对, 看见), ordinals with 第…, "hope" 希望.',
    ),
    theory: [
      {
        title: l('Результат действия: глагол + 完 / 懂 / 到 / 对 / 错 / 见', 'Result of an action: verb + 完 / 懂 / 到 / 对 / 错 / 见'),
        blocks: [
          {
            type: 'p',
            text: l(
              'После глагола можно добавить **результат**: 做 «делать» → **做完** «доделать», 听 «слушать» → **听懂** «понять на слух», 找 «искать» → **找到** «найти», 看 → **看见** «увидеть», 做对 / 做错 «сделать верно / неверно».',
              'A **result** can follow the verb: 做 "do" → **做完** "finish", 听 "listen" → **听懂** "understand (by ear)", 找 "look for" → **找到** "find", 看 → **看见** "see", 做对 / 做错 "do correctly / wrongly".',
            ),
          },
          {
            type: 'table',
            head: [l('Глагол + результат', 'Verb + result'), l('Значение', 'Meaning'), l('Отрицание', 'Negative')],
            rows: [
              ['做完', l('доделать', 'finish doing'), '没做完'],
              ['吃完', l('доесть', 'finish eating'), '没吃完'],
              ['听懂', l('понять на слух', 'understand'), '没听懂'],
              ['找到', l('найти', 'find'), '没找到'],
              ['看见', l('увидеть', 'see'), '没看见'],
              ['做对', l('сделать правильно', 'get right'), '没做对'],
            ],
          },
          {
            type: 'tip',
            text: l('Отрицание результата — всегда **没**, а не 不: 我没做完. Вопрос: 做完了没有？ / 做完了吗？', 'The negative of a result is always **没**, not 不: 我没做完. Question: 做完了没有？ / 做完了吗？'),
          },
          { type: 'img', src: p('rf'), caption: l('考试不难，我都做对了。 — Экзамен нетрудный, я всё сделал правильно.', "The exam wasn't hard; I got everything right.") },
        ],
      },
      {
        title: l('Примеры с результатом', 'Examples with results'),
        blocks: [
          {
            type: 'examples',
            items: [
              { ko: '题太多，我没做完。', tr: l('Заданий было много, я не успел доделать.', "There were too many questions; I didn't finish.") },
              { ko: '今天的课你都听懂了没有？', tr: l('Ты всё понял на сегодняшнем уроке?', 'Did you understand everything in class today?') },
              { ko: '我希望能找到一个好的工作。', tr: l('Надеюсь найти хорошую работу.', 'I hope I can find a good job.') },
              { ko: '吃完晚饭后，她还要慢跑一个小时。', tr: l('После ужина она ещё бегает час трусцой.', 'After dinner she jogs for another hour.') },
            ],
          },
          { type: 'img', src: p('ra'), caption: l('慢跑 — бег трусцой', '慢跑 — jogging') },
        ],
      },
      {
        title: l('Порядковые: 第 + число; «надеяться» 希望', 'Ordinals: 第 + number; "hope" 希望'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**第 + число** — порядковое: 第一 «первый», 第二 «второй», 第一次 «первый раз». **希望 + предложение** — «надеяться, что…».',
              '**第 + number** makes an ordinal: 第一 "first", 第二 "second", 第一次 "the first time". **希望 + clause** means "hope that…".',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '这是他的第一个工作，从下个星期开始上班。', tr: l('Это его первая работа, он выходит со следующей недели.', "This is his first job; he starts next week.") },
              { ko: '第一次来北京吧？北京漂亮吗？— 非常好，我想明年再来一次。', tr: l('Впервые в Пекине? Красиво? — Очень, хочу приехать ещё раз в следующем году.', 'First time in Beijing? Is it beautiful? — Very, I want to come again next year.') },
              { ko: '我女儿已经六岁了，我希望她能跟您学唱歌。', tr: l('Моей дочери уже шесть, надеюсь, она сможет учиться у вас пению.', 'My daughter is six; I hope she can learn singing from you.') },
            ],
          },
          { type: 'img', src: p('re'), caption: l('非常欢迎你来我们公司上班。 — Добро пожаловать в нашу компанию.', 'Welcome to our company.') },
        ],
      },
      {
        title: l('Читаем: экзамен, стирка, покупки', 'Reading: an exam, laundry, shopping'),
        blocks: [
          {
            type: 'examples',
            items: [
              { ko: '昨天的考试怎么样？题都做完了吗？— 还可以，都做完了。', tr: l('Как вчерашний экзамен? Всё успел? — Нормально, всё сделал.', "How was yesterday's exam? Did you finish? — Not bad, I finished everything.") },
              { ko: '这些衣服你一个人能洗完吗？— 没关系，今天洗一些，明天再洗一些。', tr: l('Ты один всё это перестираешь? — Ничего, часть сегодня, часть завтра.', 'Can you wash all these clothes alone? — Fine, some today, some tomorrow.') },
              { ko: '鸡蛋吃完了，我再去商店买一些吧。— 等等我，我也想去。', tr: l('Яйца кончились, схожу ещё куплю. — Подожди, я тоже пойду.', "We're out of eggs; I'll buy some more. — Wait for me, I'll come too.") },
            ],
          },
          { type: 'img', src: p('le'), caption: l('洗衣服 — стирать одежду', '洗衣服 — do laundry') },
        ],
      },
    ],
    vocab: [
      v('题', 'tí', 'задание, вопрос (в тесте)', 'question, problem', p('lc')),
      v('完', 'wán', 'закончить (результат)', 'to finish (result)'),
      v('懂', 'dǒng', 'понимать', 'to understand'),
      v('对', 'duì', 'правильный', 'correct', p('rf')),
      v('错', 'cuò', 'ошибочный', 'wrong'),
      v('难', 'nán', 'трудный', 'difficult'),
      v('问题', 'wèntí', 'вопрос, проблема', 'question, problem'),
      v('希望', 'xīwàng', 'надеяться', 'to hope'),
      v('找到', 'zhǎodào', 'найти', 'to find'),
      v('看见', 'kànjiàn', 'увидеть', 'to see'),
      v('欢迎', 'huānyíng', 'приветствовать, добро пожаловать', 'to welcome', p('re')),
      v('上班', 'shàngbān', 'ходить на работу', 'to go to work'),
      v('过', 'guò', 'проводить, праздновать', 'to spend, to celebrate', p('rb')),
      v('第一', 'dì yī', 'первый', 'first'),
      v('次', 'cì', 'раз', 'time (occurrence)'),
      v('洗', 'xǐ', 'мыть, стирать', 'to wash', p('le')),
      v('一些', 'yìxiē', 'немного, несколько', 'some'),
      v('房子', 'fángzi', 'дом, жильё', 'house'),
      v('慢跑', 'mànpǎo', 'бег трусцой', 'jogging', p('ra')),
      v('跳舞', 'tiàowǔ', 'танцевать', 'to dance', p('l1')),
    ],
    exercises: [
      /* 0 */ match(l('Соедини слово и перевод', 'Match the words'), [
        ['懂', l('понимать', 'understand')],
        ['难', l('трудный', 'difficult')],
        ['错', l('ошибочный', 'wrong')],
        ['希望', l('надеяться', 'hope')],
        ['洗', l('мыть, стирать', 'wash')],
      ]),
      /* 1 */ listen('我没做完', [l('Я не доделал.', "I didn't finish."), l('Я всё сделал.', 'I did everything.'), l('Я не понял.', "I didn't understand.")], 0),
      /* 2 */ cloze('我每天（ ）八点到十二点都在公司工作。', l('Каждый день с восьми до двенадцати я работаю в офисе.', 'Every day I work at the office from eight to twelve.'), ['从', '离', '第'], 0),
      /* 3 */ cloze('我家离学校不远，所以每天走路去（ ）。', l('Дом недалеко от школы, поэтому хожу пешком.', 'My home is near school, so I walk there.'), ['学校', '问题', '希望'], 0),
      /* 4 */ cloze('今天的课你都听（ ）了没有？', l('Ты всё понял на уроке?', 'Did you understand the lesson?'), ['懂', '完', '见'], 0),
      /* 5 */ cloze('你有什么（ ）都可以问老师。', l('Любые вопросы можно задать учителю.', 'You can ask the teacher any questions.'), ['问题', '希望', '事情'], 0),
      /* 6 */ cloze('我（ ）能找到一个好的工作。', l('Надеюсь найти хорошую работу.', 'I hope to find a good job.'), ['希望', '问题', '欢迎'], 0),
      /* 7 */ choice(l('«Я не нашёл телефон»:', '"I didn\'t find my phone":'), ['我没找到手机。', '我不找到手机。', '我找没到手机。'], 0),
      /* 8 */ choice(l('«Ты видел моего брата?»', '"Did you see my brother?"'), ['你看见我哥哥了吗？', '你看我哥哥见了吗？', '你见看我哥哥了吗？'], 0),
      /* 9 */ choice(l('«Первый раз»:', '"The first time":'), ['第一次', '一第次', '次第一'], 0),
      /* 10 */ tf(l('我女儿已经六岁了，我希望她能跟您学唱歌。→ 他女儿唱歌非常好。', 'My daughter is six; I hope she can learn singing from you. → His daughter sings very well.'), false),
      /* 11 */ tf(l('这是他的第一个工作，从下个星期开始上班。→ 他还没有上班。', 'This is his first job; he starts next week. → He hasn\'t started work yet.'), true),
      /* 12 */ tf(l('昨天的考试不太难，题很多，我有两个题没有做完。→ 这次考试题很多，很难。', "Yesterday's exam wasn't hard but had many questions. → The exam had many questions and was hard."), false),
      /* 13 */ tf(l('今天是9月20号，再有三天就是爸爸的生日了。→ 9月23号是我的生日。', "Today is 20 September; Dad's birthday is in three days. → 23 September is my birthday."), false),
      /* 14 */ tf(l('我的朋友正在找房子，希望离公司近一些，这样他每天七点起床就可以了。→ 朋友现在每天七点起床。', 'My friend wants a flat closer to work so he could get up at seven. → He gets up at seven now.'), false),
      /* 15 */ match(l('Соедини реплику и ответ', 'Match the line and the reply'), [
        ['昨天的考试怎么样？题都做完了吗？', '还可以，都做完了。'],
        ['这些衣服你一个人能洗完吗？', '没关系，今天洗一些，明天再洗一些。'],
        ['你看见我哥哥了吗？', '就在前面，你还没看见吗？'],
        ['第一次来北京吧？北京漂亮吗？', '非常好，我想明年再来一次。'],
      ]),
      /* 16 */ build(l('Собери: «Заданий много, я не успел»', 'Build: "Too many questions, I didn\'t finish"'), ['题', '太多', '我', '没', '做完']),
      /* 17 */ build(l('Собери: «Надеюсь найти хорошую работу»', 'Build: "I hope to find a good job"'), ['我', '希望', '能', '找到', '好工作']),
      /* 18 */ type(l('Напиши иероглифами или пиньинем: «понимать»', 'Write in characters or pinyin: "to understand"'), ['懂', 'dǒng']),
      /* 19 */ listen('今天的课你听懂了吗？', [l('Ты понял сегодняшний урок?', "Did you understand today's lesson?"), l('Ты был на уроке?', 'Were you in class?'), l('Урок закончился?', 'Is the class over?')], 0),
      /* 20 */ dict('考试不难，我都做对了', '考试不难，我都做对了', '考试不难我都做对了', 'kǎoshì bù nán wǒ dōu zuò duì le'),
      /* 21 */ choice(l('К какой картинке: 从我家到学校要坐一个多小时的公共汽车。', 'Which picture: 从我家到学校要坐一个多小时的公共汽车。'), [l('Автобусы на улице', 'Buses on a street'), l('Галочка «верно»', 'A tick mark'), l('Праздник с друзьями', 'A party with friends')], 0),
      /* 22 */ wr('完', 'закончить', 'to finish'),
      /* 23 */ wr('懂', 'понимать', 'to understand'),
      /* 24 */ wr('问题', 'вопрос', 'question'),
      /* 25 */ wr('希望', 'надеяться', 'to hope'),
      /* 26 */ wr('第一', 'первый', 'first'),
    ],
    dialogue: {
      title: l('После экзамена', 'After the exam'),
      lines: [
        dl('A', '昨天的考试怎么样？题都做完了吗？', 'Как вчерашний экзамен? Всё успел?', "How was yesterday's exam? Did you finish all the questions?"),
        dl('B', '题太多，我没做完。', 'Заданий было много, не успел.', "There were too many questions; I didn't finish."),
        dl('A', '难吗？', 'Трудно было?', 'Was it hard?'),
        dl('B', '不太难，做完的题我都做对了。', 'Не очень. Всё, что успел, сделал правильно.', "Not very. I got all the ones I finished right."),
        dl('A', '那很好！希望下次你都能做完。', 'Отлично! Надеюсь, в следующий раз успеешь всё.', 'Great! I hope you finish everything next time.'),
      ],
    },
    story: {
      title: l('Первая работа', 'A first job'),
      sentences: [
        st('我哥哥找到工作了。', 'Мой брат нашёл работу.', 'My older brother has found a job.', [['哥哥', 'старший брат', 'older brother'], ['找到', 'нашёл', 'found'], ['工作', 'работа', 'job']]),
        st('这是他的第一个工作。', 'Это его первая работа.', 'It is his first job.', [['第一个', 'первая', 'first'], ['工作', 'работа', 'job']]),
        st('他从下个星期开始上班。', 'Он выходит на работу со следующей недели.', 'He starts work next week.', [['从下个星期', 'со следующей недели', 'from next week'], ['开始上班', 'начать работать', 'start work']]),
        st('公司的人都说：“非常欢迎你！”', 'В компании все говорят: «Добро пожаловать!»', 'Everyone at the company says, "Welcome!"', [['公司的人', 'люди в компании', 'people at the company'], ['非常欢迎你', 'добро пожаловать', 'you are very welcome']]),
        st('我希望他能喜欢这个工作。', 'Надеюсь, работа ему понравится.', 'I hope he will like this job.', [['希望', 'надеюсь', 'hope'], ['能喜欢', 'сможет полюбить', 'will like']]),
      ],
    },
  },
  exam: [
    listen('问题', [l('вопрос', 'question'), l('надеяться', 'hope'), l('первый', 'first')], 0),
    listen('我找到手机了', [l('Я нашёл телефон.', 'I found my phone.'), l('Я ищу телефон.', "I'm looking for my phone."), l('Я не нашёл телефон.', "I didn't find my phone.")], 0),
    listen('这是我第一次来北京', [l('Я впервые в Пекине.', "It's my first time in Beijing."), l('Я часто бываю в Пекине.', 'I often come to Beijing.'), l('Я живу в Пекине.', 'I live in Beijing.')], 0),
    listen('你吃完了吗？', [l('Ты доел?', 'Have you finished eating?'), l('Ты голоден?', 'Are you hungry?'), l('Что ты ешь?', 'What are you eating?')], 0),
    dict('题太多，我没做完', '题太多，我没做完', '题太多我没做完', 'tí tài duō wǒ méi zuò wán'),
    dict('我希望能找到工作', '我希望能找到工作', '我希望能找到工作。', 'wǒ xīwàng néng zhǎodào gōngzuò'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['欢迎', l('добро пожаловать', 'welcome')],
      ['上班', l('ходить на работу', 'go to work')],
      ['房子', l('дом', 'house')],
      ['一些', l('несколько', 'some')],
      ['跳舞', l('танцевать', 'dance')],
    ]),
    cloze('这个题我做（ ）了，你看看对不对。', l('Я сделал это задание, посмотри, правильно ли.', "I've done this question — check if it's right."), ['完', '见', '懂'], 0),
    cloze('老师说的话，我没听（ ）。', l('Я не понял, что сказал учитель.', "I didn't understand what the teacher said."), ['懂', '完', '到'], 0),
    cloze('你看（ ）我的手机了吗？', l('Ты не видел мой телефон?', 'Have you seen my phone?'), ['见', '懂', '完'], 0),
    cloze('这是我（ ）一次来中国。', l('Это мой первый приезд в Китай.', "This is my first time in China."), ['第', '次', '一些'], 0),
    choice(l('Отрицание «доделал» правильно:', 'Correct negative of "finished doing":'), ['没做完', '不做完', '做不完了没'], 0),
    choice(l('Повторение (урок 8): «Дай подумать»', 'Review (lesson 8): "Let me think"'), ['让我想想。', '我让想想。', '想想让我。'], 0),
    choice(l('Ответ на «这些衣服你一个人能洗完吗？»', 'Reply to "这些衣服你一个人能洗完吗？"'), ['没关系，今天洗一些，明天再洗一些。', '还可以，都做完了。', '就在前面。'], 0),
    build(l('Собери: «Ты всё понял на уроке?»', 'Build: "Did you understand the class?"'), ['今天的课', '你', '听懂了', '没有']),
    build(l('Собери: «Яйца кончились»', 'Build: "We\'ve eaten all the eggs"'), ['鸡蛋', '吃完', '了']),
    type(l('Напиши иероглифами или пиньинем: «надеяться»', 'Write in characters or pinyin: "to hope"'), ['希望', 'xīwàng']),
    tf(l('我有两个题没有做完。→ 他都做完了。', "I didn't finish two questions. → He finished everything."), false),
    tf(l('这是他的第一个工作。→ 他以前没有工作过。', 'This is his first job. → He has never worked before.'), true),
    wr('问题', 'вопрос', 'question'),
    wr('希望', 'надеяться', 'to hope'),
  ],
};
