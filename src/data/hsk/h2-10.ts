import type { BookUnit } from '../book';
import { build, choice, cloze, dict, dl, hskPic, l, listen, match, st, tf, type, v, wr } from './h';

const p = hskPic(2, 10);

export const unit: BookUnit = {
  n: 10,
  lesson: {
    emoji: '📱',
    title: l('Не ищи, телефон на столе (别找了，手机在桌子上呢)', "Stop looking — your phone's on the desk (别找了，手机在桌子上呢)"),
    goal: l(
      'Запрещать и успокаивать, описывать, что происходит сейчас: «не надо, хватит» 别…了, «как раз сейчас» 正在…呢, «помогать» 帮助.',
      'Tell people not to do things, reassure them, say what is happening now: "don\'t, stop" 别…了, "right now" 正在…呢, "help" 帮助.',
    ),
    theory: [
      {
        title: l('«Не надо, хватит»: 别 … (了)', '"Don\'t, stop": 别 … (了)'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**别 + глагол** — «не делай» (= 不要). **别 + глагол + 了** — «хватит, перестань» (действие уже идёт).',
              '**别 + verb** means "don\'t" (= 不要). **别 + verb + 了** means "stop doing it" (the action is already going on).',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '别找了，你的手机在桌子上呢，电脑旁边。', tr: l('Не ищи, телефон на столе, рядом с компьютером.', "Stop looking — your phone is on the desk, next to the computer.") },
              { ko: '别玩儿电脑了，看电脑时间长了对眼睛不好。', tr: l('Хватит играть в компьютер, долго смотреть в экран вредно для глаз.', 'Stop playing on the computer — too long is bad for your eyes.') },
              { ko: '别工作了，睡觉吧，明天早点儿起床。', tr: l('Хватит работать, ложись, завтра встанешь пораньше.', 'Stop working, go to bed and get up early tomorrow.') },
              { ko: '妈妈睡觉了，我们别看电视了。', tr: l('Мама спит, давай не будем смотреть телевизор.', "Mum is asleep — let's not watch TV.") },
            ],
          },
          { type: 'img', src: p('ra'), caption: l('别玩儿电脑了！ — Хватит сидеть за компьютером!', 'Stop playing on the computer!') },
        ],
      },
      {
        title: l('«Как раз сейчас»: 正在 … 呢', '"Right now": 正在 … 呢'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**正在 / 在 + глагол + (呢)** — действие идёт прямо сейчас. 呢 в конце можно оставить и без 正在: 他看电视呢.',
              '**正在 / 在 + verb + (呢)** shows an action in progress. 呢 alone at the end also works: 他看电视呢.',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '妈妈正在给我们洗衣服呢。', tr: l('Мама как раз стирает нам одежду.', 'Mum is washing our clothes right now.') },
              { ko: '哥哥正在玩儿电脑呢，没时间帮助我。', tr: l('Брат сидит за компьютером, некогда мне помочь.', "My brother is on the computer and has no time to help me.") },
              { ko: '你弟弟正在学习汉语吗？— 对，因为公司想让他明年去中国工作。', tr: l('Твой брат сейчас учит китайский? — Да, компания хочет отправить его в Китай.', 'Is your brother learning Chinese? — Yes, his company wants to send him to China next year.') },
            ],
          },
          { type: 'img', src: p('re'), caption: l('妈妈正在给我们洗衣服呢。', 'Mum is washing our clothes.') },
        ],
      },
      {
        title: l('Помощь и забота: 帮助, 放心', 'Help and care: 帮助, 放心'),
        blocks: [
          {
            type: 'examples',
            items: [
              { ko: '大卫是一个喜欢帮助别人的好孩子。', tr: l('Дэвид — хороший мальчик, любит помогать другим.', 'David is a good kid who likes helping others.') },
              { ko: '这本书是我写的，希望能对你有帮助。', tr: l('Эту книгу написал я, надеюсь, она тебе поможет.', 'I wrote this book — I hope it helps you.') },
              { ko: '你明天的课都准备好了吗？— 没问题，您放心吧。', tr: l('Ты подготовился к завтрашним урокам? — Без проблем, не волнуйтесь.', "Are you ready for tomorrow's classes? — No problem, don't worry.") },
              { ko: '有什么问题，你可以打我的手机。', tr: l('Если будут вопросы — звони мне на мобильный.', 'If you have any questions, call my mobile.') },
            ],
          },
          { type: 'img', src: p('rf'), caption: l('打我的手机 — позвони мне на мобильный', 'call my mobile') },
          {
            type: 'tip',
            text: l('机 «машина, аппарат»: 手机 «мобильник», 洗衣机 «стиральная машина», 照相机 «фотоаппарат», 电视机 «телевизор».', '机 means "machine": 手机 "mobile phone", 洗衣机 "washing machine", 照相机 "camera", 电视机 "TV set".'),
          },
        ],
      },
    ],
    vocab: [
      v('别', 'bié', 'не (делай)', "don't"),
      v('找', 'zhǎo', 'искать', 'to look for'),
      v('手机', 'shǒujī', 'мобильный телефон', 'mobile phone', p('rf')),
      v('桌子', 'zhuōzi', 'стол', 'table, desk', p('l4')),
      v('电脑', 'diànnǎo', 'компьютер', 'computer', p('ra')),
      v('正在', 'zhèngzài', 'как раз (сейчас)', 'in the middle of'),
      v('帮助', 'bāngzhù', 'помогать, помощь', 'to help, help'),
      v('别人', 'biérén', 'другие люди', 'other people'),
      v('孩子', 'háizi', 'ребёнок', 'child'),
      v('弟弟', 'dìdi', 'младший брат', 'younger brother', p('lc')),
      v('东西', 'dōngxi', 'вещь, вещи', 'thing, stuff'),
      v('玩儿', 'wánr', 'играть, развлекаться', 'to play'),
      v('放心', 'fàngxīn', 'быть спокойным, не волноваться', 'to be at ease'),
      v('早点儿', 'zǎo diǎnr', 'пораньше', 'a bit earlier'),
      v('报纸', 'bàozhǐ', 'газета', 'newspaper', p('rc')),
      v('洗衣服', 'xǐ yīfu', 'стирать одежду', 'to do laundry', p('re')),
      v('眼睛', 'yǎnjing', 'глаза', 'eyes'),
      v('电影院', 'diànyǐngyuàn', 'кинотеатр', 'cinema', p('l1')),
      v('没问题', 'méi wèntí', 'без проблем', 'no problem'),
    ],
    exercises: [
      /* 0 */ match(l('Соедини слово и перевод', 'Match the words'), [
        ['手机', l('мобильный', 'mobile phone')],
        ['桌子', l('стол', 'desk')],
        ['电脑', l('компьютер', 'computer')],
        ['报纸', l('газета', 'newspaper')],
        ['孩子', l('ребёнок', 'child')],
      ]),
      /* 1 */ listen('别找了', [l('Не ищи (хватит искать).', 'Stop looking.'), l('Найди!', 'Find it!'), l('Я нашёл.', 'I found it.')], 0),
      /* 2 */ cloze('明天的（ ）我都准备好了，可以睡觉了。', l('Вещи на завтра я подготовил, можно спать.', "I've got everything ready for tomorrow; I can go to bed."), ['东西', '帮助', '正在'], 0),
      /* 3 */ cloze('大卫是一个喜欢（ ）别人的好孩子。', l('Дэвид — хороший мальчик, любит помогать другим.', 'David is a good kid who likes to help others.'), ['帮助', '东西', '别'], 0),
      /* 4 */ cloze('我每天早上吃一个（ ），喝一杯牛奶。', l('Каждое утро я съедаю яйцо и выпиваю стакан молока.', 'Every morning I eat an egg and drink a glass of milk.'), ['鸡蛋', '东西', '桌子'], 0),
      /* 5 */ cloze('妈妈睡觉了，我们（ ）看电视了。', l('Мама спит, давай не будем смотреть телевизор.', "Mum is asleep; let's stop watching TV."), ['别', '正在', '帮助'], 0),
      /* 6 */ cloze('哥哥（ ）玩儿电脑呢，没时间帮助我。', l('Брат сидит за компьютером, некогда мне помочь.', "My brother is on the computer and can't help me."), ['正在', '别', '东西'], 0),
      /* 7 */ choice(l('«Хватит работать!»', '"Stop working!"'), ['别工作了！', '不工作了吗！', '工作别了！'], 0),
      /* 8 */ choice(l('«Он сейчас смотрит телевизор»:', '"He is watching TV now":'), ['他正在看电视呢。', '他看电视正在。', '他在正看电视了。'], 0),
      /* 9 */ choice(l('Что значит 放心吧?', 'What does 放心吧 mean?'), [l('Не волнуйся', "Don't worry"), l('Отпусти', 'Let go'), l('Будь внимателен', 'Be careful')], 0),
      /* 10 */ tf(l('医生说这个药要饭前吃，吃药后两个小时别喝茶。→ 医生说多喝茶对身体好。', 'The doctor says take it before meals and no tea for two hours after. → The doctor says drinking a lot of tea is good.'), false),
      /* 11 */ tf(l('别找了，你的手机在桌子上呢，电脑旁边。→ 手机在电脑旁边。', 'Stop looking, your phone is on the desk next to the computer. → The phone is next to the computer.'), true),
      /* 12 */ tf(l('那件白色的衣服我帮你洗了，在外面呢。→ 衣服在外面。', "I washed your white shirt; it's outside. → The clothes are outside."), true),
      /* 13 */ tf(l('机场离这儿很远，坐公共汽车要一个多小时。→ 机场离这儿非常远。', 'The airport is far — over an hour by bus. → The airport is very far from here.'), true),
      /* 14 */ match(l('Соедини реплику и ответ', 'Match the line and the reply'), [
        ['你喜欢哪个？我可以送给你。', '一个红的，一个白的，都很漂亮。'],
        ['我们明天去跑步吧。', '好啊，医生说多运动对我的身体好。'],
        ['别看电视了，明天还要考试呢。', '好吧，我这就去睡觉。'],
        ['你明天的课都准备好了吗？', '没问题，您放心吧。'],
      ]),
      /* 15 */ build(l('Собери: «Не ищи, телефон на столе»', 'Build: "Stop looking, the phone\'s on the desk"'), ['别找了', '手机', '在', '桌子上', '呢']),
      /* 16 */ build(l('Собери: «Мама как раз стирает»', 'Build: "Mum is doing the laundry right now"'), ['妈妈', '正在', '洗衣服', '呢']),
      /* 17 */ type(l('Напиши иероглифами или пиньинем: «компьютер»', 'Write in characters or pinyin: "computer"'), ['电脑', 'diànnǎo']),
      /* 18 */ listen('有什么问题，你可以打我的手机', [l('Если вопросы — звони мне на мобильный.', 'If you have questions, call my mobile.'), l('У меня нет мобильного.', "I don't have a mobile."), l('Где мой телефон?', 'Where is my phone?')], 0),
      /* 19 */ dict('别玩儿电脑了', '别玩儿电脑了', '别玩儿电脑了。', '别玩电脑了', 'bié wánr diànnǎo le'),
      /* 20 */ choice(l('К какой картинке: 我每天早上都看报纸。', 'Which picture: 我每天早上都看报纸。'), [l('Мужчина с газетой', 'A man with a newspaper'), l('Корзина с бельём', 'A laundry basket'), l('Телефон в руке', 'A phone in a hand')], 0),
      /* 21 */ wr('别', 'не (делай)', "don't"),
      /* 22 */ wr('手机', 'мобильный', 'mobile phone'),
      /* 23 */ wr('电脑', 'компьютер', 'computer'),
      /* 24 */ wr('帮助', 'помогать', 'to help'),
      /* 25 */ wr('东西', 'вещь', 'thing'),
    ],
    dialogue: {
      title: l('Где мой телефон?', 'Where is my phone?'),
      lines: [
        dl('A', '我的手机呢？你看见了吗？', 'А где мой телефон? Ты не видел?', 'Where is my phone? Have you seen it?'),
        dl('B', '别找了，你的手机在桌子上呢，电脑旁边。', 'Не ищи, он на столе, рядом с компьютером.', "Stop looking — it's on the desk, next to the computer."),
        dl('A', '太好了！谢谢。哥哥呢？', 'Отлично, спасибо! А где брат?', 'Great, thanks! Where is my brother?'),
        dl('B', '他正在玩儿电脑呢。', 'Сидит за компьютером.', "He's playing on the computer."),
        dl('A', '别玩儿了！明天还要考试呢。', 'Хватит играть! Завтра ещё экзамен.', "Stop playing! There's an exam tomorrow."),
      ],
    },
    story: {
      title: l('Вечер дома', 'An evening at home'),
      sentences: [
        st('妈妈正在给我们洗衣服呢。', 'Мама стирает нам одежду.', 'Mum is washing our clothes.', [['正在…呢', 'как раз сейчас', 'right now'], ['给我们', 'для нас', 'for us'], ['洗衣服', 'стирать', 'do laundry']]),
        st('爸爸在看报纸。', 'Папа читает газету.', 'Dad is reading the newspaper.', [['在看', 'читает (сейчас)', 'is reading'], ['报纸', 'газета', 'newspaper']]),
        st('哥哥在玩儿电脑，妈妈说：“别玩儿了，对眼睛不好。”', 'Брат за компьютером, мама говорит: «Хватит, это вредно для глаз».', 'My brother is on the computer; Mum says, "Stop, it\'s bad for your eyes."', [['玩儿电脑', 'сидеть за компьютером', 'play on the computer'], ['别玩儿了', 'хватит играть', 'stop playing'], ['对眼睛不好', 'вредно для глаз', 'bad for the eyes']]),
        st('我帮助妈妈准备明天的东西。', 'Я помогаю маме собрать вещи на завтра.', "I help Mum get tomorrow's things ready.", [['帮助', 'помогать', 'help'], ['准备', 'готовить', 'prepare'], ['明天的东西', 'вещи на завтра', "tomorrow's things"]]),
      ],
    },
  },
  exam: [
    listen('电脑', [l('компьютер', 'computer'), l('телефон', 'phone'), l('газета', 'newspaper')], 0),
    listen('别看电视了', [l('Хватит смотреть телевизор.', 'Stop watching TV.'), l('Давай смотреть телевизор.', "Let's watch TV."), l('Телевизор сломался.', 'The TV is broken.')], 0),
    listen('他正在洗衣服呢', [l('Он как раз стирает.', "He's doing laundry right now."), l('Он постирал вчера.', 'He did laundry yesterday.'), l('Он не любит стирать.', "He doesn't like laundry.")], 0),
    listen('您放心吧', [l('Не волнуйтесь.', "Don't worry."), l('Будьте осторожны.', 'Be careful.'), l('Подождите.', 'Please wait.')], 0),
    dict('你的手机在桌子上', '你的手机在桌子上', '你的手机在桌子上。', 'nǐ de shǒujī zài zhuōzi shang'),
    dict('我们别看电视了', '我们别看电视了', '我们别看电视了。', 'wǒmen bié kàn diànshì le'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['帮助', l('помогать', 'help')],
      ['别人', l('другие люди', 'others')],
      ['东西', l('вещь', 'thing')],
      ['弟弟', l('младший брат', 'younger brother')],
      ['放心', l('не волноваться', 'be at ease')],
    ]),
    cloze('（ ）说话了，老师来了！', l('Хватит болтать, учитель идёт!', 'Stop talking, the teacher is coming!'), ['别', '正在', '再'], 0),
    cloze('我（ ）吃饭呢，一会儿给你打电话。', l('Я как раз ем, перезвоню позже.', "I'm eating right now; I'll call you later."), ['正在', '别', '已经'], 0),
    cloze('谢谢你的（ ）！', l('Спасибо за помощь!', 'Thanks for your help!'), ['帮助', '东西', '放心'], 0),
    cloze('你的书在桌子上（ ）。', l('Твоя книга на столе.', 'Your book is on the desk.'), ['呢', '吗', '吧'], 0),
    choice(l('Повторение (урок 9): «Я не доделал»', 'Review (lesson 9): "I didn\'t finish"'), ['我没做完。', '我不做完。', '我做没完。'], 0),
    choice(l('Ответ на «你明天的课都准备好了吗？»', 'Reply to "你明天的课都准备好了吗？"'), ['没问题，您放心吧。', '好吧，我这就去睡觉。', '一个红的，一个白的。'], 0),
    build(l('Собери: «Хватит играть в компьютер»', 'Build: "Stop playing on the computer"'), ['别', '玩儿', '电脑', '了']),
    build(l('Собери: «Брат сейчас учит китайский»', 'Build: "My brother is learning Chinese now"'), ['弟弟', '正在', '学习', '汉语', '呢']),
    type(l('Напиши иероглифами или пиньинем: «мобильный телефон»', 'Write in characters or pinyin: "mobile phone"'), ['手机', 'shǒujī']),
    tf(l('哥哥正在玩儿电脑呢，没时间帮助我。→ 哥哥帮助我了。', 'My brother is on the computer and has no time to help. → My brother helped me.'), false),
    tf(l('那件白色的衣服我帮你洗了。→ 衣服已经洗了。', 'I washed your white shirt. → The shirt has been washed.'), true),
    wr('手机', 'мобильный', 'mobile phone'),
    wr('电脑', 'компьютер', 'computer'),
  ],
};
