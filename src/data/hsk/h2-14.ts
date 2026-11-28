import type { BookUnit } from '../book';
import { build, choice, cloze, dict, dl, hskPic, l, listen, match, st, tf, type, v, wr } from './h';

const p = hskPic(2, 14);

export const unit: BookUnit = {
  n: 14,
  lesson: {
    emoji: '🎬',
    title: l('Ты смотрел этот фильм? (你看过这个电影吗)', 'Have you seen that movie? (你看过这个电影吗)'),
    goal: l(
      'Говорить об опыте: суффикс 过 («бывало, приходилось»), «хотя… но» 虽然…但是, «и ещё» 而且 и «сколько раз» 次.',
      'Talk about experience: the suffix 过 ("have ever"), "although… but" 虽然…但是, "moreover" 而且 and counting times with 次.',
    ),
    theory: [
      {
        title: l('Опыт: глагол + 过', 'Experience: verb + 过'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**Глагол + 过** — такое **когда-либо было** в жизни: 去过 «бывал», 看过 «видел», 学过 «учил». Отрицание — **没 + глагол + 过**: 没看过. Вопрос: 你看过这个电影吗？ / 看过没有？',
              '**Verb + 过** says something **has happened at least once**: 去过 "have been", 看过 "have seen", 学过 "have studied". Negative: **没 + verb + 过**: 没看过. Question: 你看过这个电影吗？ / 看过没有？',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '长城很漂亮，我已经去过三次了。', tr: l('Великая стена очень красивая, я уже был там три раза.', 'The Great Wall is beautiful — I have been three times already.') },
              { ko: '你学过汉语吗？— 没学过，听说很难，但是很有意思。', tr: l('Ты учил китайский? — Нет, говорят, трудный, но интересный.', "Have you studied Chinese? — No, I hear it's hard but interesting.") },
              { ko: '我们已经学过这个汉字了。', tr: l('Мы этот иероглиф уже учили.', "We've already studied this character.") },
            ],
          },
          { type: 'img', src: p('rc'), caption: l('长城 — Великая Китайская стена', 'The Great Wall') },
          {
            type: 'tip',
            text: l('Не путай: 了 — действие завершено (у него есть результат), 过 — такой опыт был когда-то. 我去了北京 «съездил в Пекин (и это случилось)», 我去过北京 «бывал в Пекине».', 'Don\'t mix up: 了 marks a completed action, 过 marks past experience. 我去了北京 "I went to Beijing", 我去过北京 "I have been to Beijing".'),
          },
        ],
      },
      {
        title: l('Сколько раз: 次 и 一次', 'How many times: 次'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**Глагол + 过 + число + 次** — «сколько раз». 第一次 «в первый раз». Дополнение-место ставится перед 次, а если дополнение — местоимение, то оно идёт перед 次, а не после.',
              '**Verb + 过 + number + 次** gives "how many times". 第一次 means "for the first time". A place object comes before 次; a pronoun object also precedes 次.',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '我已经得过两次病了。', tr: l('Я болел уже два раза.', "I've been ill twice already.") },
              { ko: '妈妈告诉过我很多次，看电脑和手机时间长了对眼睛不好。', tr: l('Мама много раз говорила мне, что долго сидеть в компьютере и телефоне вредно для глаз.', 'Mum told me many times that too much computer and phone time is bad for the eyes.') },
              { ko: '我去过北京好几次了，但是还想再去玩儿玩儿。', tr: l('Я был в Пекине несколько раз, но хочу поехать ещё.', "I've been to Beijing several times but want to go again.") },
            ],
          },
          { type: 'img', src: p('re'), caption: l('我已经得过两次病了。', "I've been ill twice already.") },
        ],
      },
      {
        title: l('«Хотя… но»: 虽然…但是 и «к тому же»: 而且', '"Although… but": 虽然…但是 and "moreover": 而且'),
        blocks: [
          {
            type: 'p',
            text: l(
              '**虽然 + A, 但是 + B** — «хотя A, но B». Обе части можно связывать, но 但是 не опускают. **A, 而且 B** — «A, и к тому же B».',
              '**虽然 + A, 但是 + B** means "although A, B". Keep 但是 in the second clause. **A, 而且 B** means "A, and moreover B".',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '虽然工作很忙，但是我每个星期都要运动。', tr: l('Хотя работы много, я каждую неделю занимаюсь спортом.', 'Although I am busy with work, I exercise every week.') },
              { ko: '虽然是晴天，但是很冷。', tr: l('Хотя солнечно, но холодно.', "Although it's sunny, it's cold.") },
              { ko: '东西还可以，而且很便宜。', tr: l('Вещи неплохие, к тому же дешёвые.', "The things are OK, and what's more, cheap.") },
              { ko: '他做的菜比我做的好吃，但是因为工作忙，他很少做。', tr: l('Он готовит вкуснее меня, но редко — работа.', "He cooks better than I do, but because he is busy he rarely cooks.") },
            ],
          },
          { type: 'img', src: p('rf'), caption: l('虽然是晴天，但是很冷。', "It's sunny but cold.") },
        ],
      },
      {
        title: l('Читаем: впечатления', 'Reading: impressions'),
        blocks: [
          {
            type: 'examples',
            items: [
              { ko: '你在那个商店买过东西没有？— 没有，喜欢就买吧。', tr: l('Ты покупал в том магазине? — Нет, нравится — бери.', "Have you bought anything in that shop? — No; buy it if you like.") },
              { ko: '我很喜欢这件衣服，但是觉得有点儿贵。— 东西还可以，而且很便宜。', tr: l('Мне нравится эта вещь, но кажется дорогой. — Качество нормальное и недорого.', 'I like it but it feels a bit pricey. — Quality is fine and it is cheap.') },
              { ko: '小李说这个电影很有意思，但是我没看过。', tr: l('Сяо Ли говорит, фильм очень интересный, но я не смотрел.', 'Xiao Li says this film is very interesting, but I haven’t seen it.') },
            ],
          },
          { type: 'img', src: p('rb'), caption: l('你学过汉语吗？', 'Have you studied Chinese?') },
        ],
      },
    ],
    vocab: [
      v('过', 'guò', 'суффикс опыта', 'experience particle'),
      v('次', 'cì', 'раз', 'time (occasion)'),
      v('虽然', 'suīrán', 'хотя', 'although'),
      v('但是', 'dànshì', 'но', 'but'),
      v('而且', 'érqiě', 'к тому же', 'moreover'),
      v('有意思', 'yǒu yìsi', 'интересный', 'interesting'),
      v('长城', 'Chángchéng', 'Великая стена', 'the Great Wall', p('rc')),
      v('晴', 'qíng', 'ясный', 'clear (sky)'),
      v('阴', 'yīn', 'пасмурный', 'overcast'),
      v('得病', 'débìng', 'заболеть', 'to fall ill', p('re')),
      v('听说', 'tīngshuō', 'слышал, говорят', 'I hear'),
      v('玩儿', 'wánr', 'развлекаться', 'to have fun'),
      v('商店', 'shāngdiàn', 'магазин', 'shop'),
      v('少', 'shǎo', 'редко, мало', 'rarely, few'),
      v('好几次', 'hǎo jǐ cì', 'несколько раз', 'several times'),
      v('汉字', 'Hànzì', 'иероглифы', 'Chinese characters', p('rb')),
      v('菜', 'cài', 'блюдо', 'dish'),
      v('电影', 'diànyǐng', 'фильм', 'film'),
      v('飞机', 'fēijī', 'самолёт', 'airplane'),
    ],
    exercises: [
      /* 0 */ match(l('Соедини слово и перевод', 'Match the words'), [
        ['虽然', l('хотя', 'although')],
        ['但是', l('но', 'but')],
        ['而且', l('к тому же', 'moreover')],
        ['有意思', l('интересный', 'interesting')],
        ['听说', l('говорят', 'I hear')],
      ]),
      /* 1 */ listen('我去过长城', [l('Я бывал на Великой стене.', 'I have been to the Great Wall.'), l('Я хочу на Великую стену.', 'I want to go to the Great Wall.'), l('Я не был на Великой стене.', "I haven't been to the Great Wall.")], 0),
      /* 2 */ cloze('老师的话是什么（ ），我没听懂。', l('Что значили слова учителя, я не понял.', "I didn't understand what the teacher's words meant."), ['意思', '次', '但是'], 0),
      /* 3 */ cloze('我（ ）这本书非常好看，但是我还没看过。', l('Слышал, эта книга очень хороша, но сам не читал.', "I hear this book is very good, but I haven't read it."), ['听说', '虽然', '而且'], 0),
      /* 4 */ cloze('那个电影太（ ）了，我已经看过两次了。', l('Этот фильм так интересен, я уже смотрел его дважды.', "That film is so interesting, I've seen it twice already."), ['有意思', '但是', '次'], 0),
      /* 5 */ cloze('虽然工作很忙，（ ）我每个星期都要运动。', l('Хотя работы много, я каждую неделю занимаюсь спортом.', "Although I'm busy with work, I exercise every week."), ['但是', '而且', '所以'], 0),
      /* 6 */ cloze('我去过北京好几（ ）了，但是还想再去玩儿玩儿。', l('Я был в Пекине несколько раз, но хочу снова.', "I've been to Beijing several times but want to go again."), ['次', '得', '着'], 0),
      /* 7 */ choice(l('«Я не видел этот фильм»:', '"I haven\'t seen this film":'), ['我没看过这个电影。', '我不看过这个电影。', '我看没过这个电影。'], 0),
      /* 8 */ choice(l('Чем отличается 去过 от 去了?', 'What is the difference between 去过 and 去了?'), [l('去过 — бывал (опыт), 去了 — уехал (событие)', '去过 — have been (experience), 去了 — went (event)'), l('Ничем', 'None'), l('去了 — опыт, 去过 — будущее', '去了 is experience, 去过 is future')], 0),
      /* 9 */ choice(l('«Хотя холодно, но красиво»:', '"Although it\'s cold, it\'s pretty":'), ['虽然很冷，但是很漂亮。', '虽然很冷，所以很漂亮。', '因为很冷，但是很漂亮。'], 0),
      /* 10 */ tf(l('昨天和朋友们在外面玩儿了一个晚上，很累，但是非常高兴。→ 昨天玩儿得不好。', 'We played out all evening yesterday, tired but very happy. → We had a bad time.'), false),
      /* 11 */ tf(l('他做的菜比我做的好吃，但是因为工作忙，他很少做。→ 他不会做菜。', 'His cooking is better than mine, but he rarely cooks because he is busy. → He can\'t cook.'), false),
      /* 12 */ tf(l('我和朋友们去过这家商店，还在这儿买过两次东西。→ 商店他去过两次。', 'My friends and I have been to this shop and bought things here twice. → He has been to the shop twice.'), false, l('Два раза — только покупки; сколько раз он был в магазине, не сказано.', 'Twice refers only to purchases; the number of visits is not stated.')),
      /* 13 */ tf(l('从学校到机场，坐出租车要一个小时，我们十点的飞机，八点走可以吗？→ 他们要坐八点的飞机。', "It's an hour by taxi to the airport, our flight is at ten — is leaving at eight OK? → They take an eight o'clock flight."), false),
      /* 14 */ tf(l('小李说这个电影很有意思，但是我没看过。→ 我没看过这个电影。', 'Xiao Li says this film is interesting but I haven’t seen it. → I haven’t seen this film.'), true),
      /* 15 */ match(l('Соедини реплику и ответ', 'Match the line and the reply'), [
        ['你学过汉语吗？', '没学过，听说很难，但是很有意思。'],
        ['你在那个商店买过东西没有？', '没有，喜欢就买吧。'],
        ['我很喜欢这件衣服，但是觉得有点儿贵。', '东西还可以，而且很便宜。'],
        ['今天天气真冷，第一次到了零下十度。', '你出去的时候多穿些衣服。'],
      ]),
      /* 16 */ build(l('Собери: «Я уже был там три раза»', 'Build: "I\'ve been there three times already"'), ['我', '已经', '去过', '三次', '了']),
      /* 17 */ build(l('Собери: «Хотя занят, но занимаюсь спортом»', 'Build: "Although busy, I exercise"'), ['虽然', '很忙', '但是', '我', '要运动']),
      /* 18 */ type(l('Напиши иероглифами или пиньинем: «хотя»', 'Write in characters or pinyin: "although"'), ['虽然', 'suīrán']),
      /* 19 */ listen('你学过汉语吗？', [l('Ты учил китайский?', 'Have you studied Chinese?'), l('Ты хочешь учить китайский?', 'Do you want to study Chinese?'), l('Ты говоришь по-китайски?', 'Do you speak Chinese?')], 0),
      /* 20 */ dict('我没看过这个电影', '我没看过这个电影', '我没看过这个电影。', 'wǒ méi kànguo zhège diànyǐng'),
      /* 21 */ choice(l('К какой картинке: 长城很漂亮，我已经去过三次了。', 'Which picture: 长城很漂亮，我已经去过三次了。'), [l('Великая стена', 'The Great Wall'), l('Девушка с зонтом', 'A girl with an umbrella'), l('Пловец', 'A swimmer')], 0),
      /* 22 */ wr('过', 'суффикс опыта', 'experience particle'),
      /* 23 */ wr('次', 'раз', 'time (occasion)'),
      /* 24 */ wr('但是', 'но', 'but'),
      /* 25 */ wr('长城', 'Великая стена', 'the Great Wall'),
      /* 26 */ wr('汉字', 'иероглифы', 'Chinese characters'),
    ],
    dialogue: {
      title: l('Ты был на Великой стене?', 'Have you been to the Great Wall?'),
      lines: [
        dl('A', '你去过长城吗？', 'Ты бывал на Великой стене?', 'Have you ever been to the Great Wall?'),
        dl('B', '去过，我已经去过三次了。', 'Бывал, уже три раза.', "Yes, I've been three times."),
        dl('A', '虽然很累，但是很有意思，是吗？', 'Хотя утомительно, но интересно, да?', "It's tiring but interesting, isn't it?"),
        dl('B', '对，而且风景很漂亮。我还想再去。', 'Да, и к тому же пейзажи красивые. Хочу поехать ещё.', 'Yes — and the scenery is beautiful. I want to go again.'),
        dl('A', '好，下次我跟你一起去。', 'Хорошо, в следующий раз поеду с тобой.', "OK, next time I'll come with you."),
      ],
    },
    story: {
      title: l('Мои поездки', 'My trips'),
      sentences: [
        st('我去过北京好几次了。', 'Я бывал в Пекине несколько раз.', "I've been to Beijing several times.", [['去过', 'бывал', 'have been'], ['好几次', 'несколько раз', 'several times']]),
        st('虽然去过很多次，但是我还想再去。', 'Хотя был много раз, хочу поехать ещё.', "Although I've been many times, I want to go again.", [['虽然', 'хотя', 'although'], ['但是', 'но', 'but'], ['再去', 'поехать снова', 'go again']]),
        st('长城很漂亮，而且很有意思。', 'Великая стена красивая и к тому же интересная.', 'The Great Wall is pretty and also interesting.', [['长城', 'Великая стена', 'Great Wall'], ['而且', 'и к тому же', 'and moreover']]),
        st('我的朋友没去过长城，听说他很想去。', 'Мой друг не был на Великой стене, говорят, очень хочет.', "My friend hasn't been to the Great Wall; I hear he really wants to.", [['没去过', 'не бывал', "hasn't been"], ['听说', 'говорят', 'I hear']]),
        st('下次我跟他一起去。', 'В следующий раз поеду с ним.', "Next time I'll go with him.", [['下次', 'в следующий раз', 'next time'], ['跟他一起', 'вместе с ним', 'together with him']]),
      ],
    },
  },
  exam: [
    listen('有意思', [l('интересный', 'interesting'), l('скучный', 'boring'), l('красивый', 'pretty')], 0),
    listen('我没去过北京', [l('Я не был в Пекине.', "I haven't been to Beijing."), l('Я был в Пекине.', 'I have been to Beijing.'), l('Я поеду в Пекин.', "I'm going to Beijing.")], 0),
    listen('虽然很贵，但是很好', [l('Хотя дорого, но хорошо.', "It's expensive but good."), l('Дёшево и хорошо.', "It's cheap and good."), l('Дорого и плохо.', "It's expensive and bad.")], 0),
    listen('我看过三次', [l('Я смотрел три раза.', "I've seen it three times."), l('Я посмотрю три раза.', "I'll watch three times."), l('Я не смотрел.', "I haven't seen it.")], 0),
    dict('你学过汉语吗', '你学过汉语吗', '你学过汉语吗？', 'nǐ xuéguo Hànyǔ ma'),
    dict('东西很好，而且很便宜', '东西很好，而且很便宜', '东西很好而且很便宜', 'dōngxi hěn hǎo érqiě hěn piányi'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['长城', l('Великая стена', 'Great Wall')],
      ['商店', l('магазин', 'shop')],
      ['汉字', l('иероглифы', 'characters')],
      ['得病', l('заболеть', 'fall ill')],
      ['菜', l('блюдо', 'dish')],
    ]),
    cloze('我吃（ ）北京烤鸭。', l('Я пробовал пекинскую утку.', "I've tried Peking duck."), ['过', '了', '着'], 0),
    cloze('我去（ ）中国两次。', l('Я бывал в Китае два раза.', "I've been to China twice."), ['过', '着', '得'], 0),
    cloze('（ ）下雨，但是我们去了。', l('Хотя шёл дождь, мы пошли.', 'Although it rained, we went.'), ['虽然', '因为', '而且'], 0),
    cloze('东西很好，（ ）很便宜。', l('Вещь хорошая и к тому же дешёвая.', 'The item is good and cheap too.'), ['而且', '虽然', '所以'], 0),
    choice(l('Повторение (урок 13): «Дверь открыта»', 'Review (lesson 13): "The door is open"'), ['门开着呢。', '门着开呢。', '开门着呢。'], 0),
    choice(l('Ответ на «你学过汉语吗？»', 'Reply to "你学过汉语吗？"'), ['没学过，听说很难，但是很有意思。', '他开着车出去了。', '不是两年，是一年半。'], 0),
    build(l('Собери: «Я не видел этот фильм»', 'Build: "I haven\'t seen this film"'), ['我', '没', '看过', '这个电影']),
    build(l('Собери: «Хотя дорого, но красиво»', 'Build: "Although expensive, it is pretty"'), ['虽然', '很贵', '但是', '很漂亮']),
    type(l('Напиши иероглифами или пиньинем: «но»', 'Write in characters or pinyin: "but"'), ['但是', 'dànshì']),
    tf(l('我去过长城三次。→ 我去过长城。', "I've been to the Great Wall three times. → I have been to the Great Wall."), true),
    tf(l('他没看过这个电影。→ 他看过这个电影。', "He hasn't seen this film. → He has seen it."), false),
    wr('但是', 'но', 'but'),
    wr('长城', 'Великая стена', 'the Great Wall'),
  ],
};
