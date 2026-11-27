import type { BookUnit } from './index';
import { build, choice, cloze, dict, dl, l, listen, match, picOf, st, tf, type, v, wr } from './h';

const p = picOf(17);

export const unit: BookUnit = {
  n: 17,
  lesson: {
    emoji: '🏠',
    title: l('Что принести на новоселье? (집들이에 뭘 사 가야 돼요?)', 'What should I bring to the housewarming party? (집들이에 뭘 사 가야 돼요?)'),
    goal: l(
      'Приглашать в гости и предлагать помощь: «надо» -어야 되다 / 하다 и «и ещё…» -고요.',
      'Invite people and offer help: "must, have to" -어야 되다 / 하다 and "and also…" -고요.',
    ),
    theory: [
      {
        title: l('Новоселье по-корейски', 'A Korean housewarming'),
        blocks: [
          { type: 'img', src: p('housewarming'), caption: l('이사를 해서 집들이를 할 거예요. — Переехал, буду праздновать новоселье.', "I moved to a new house, so I'll throw a party.") },
          {
            type: 'p',
            text: l(
              'После переезда (**이사하다**) корейцы зовут друзей на **집들이** — новоселье. Гости обычно приносят **휴지** (туалетную бумагу — «чтобы всё шло гладко») или **세제** (моющее средство — «чтобы богатство пенилось»).',
              'After moving (**이사하다**) Koreans invite friends to a **집들이** — a housewarming. Guests usually bring **휴지** (toilet paper — "so things go smoothly") or **세제** (detergent — "so wealth foams up").',
            ),
          },
          { type: 'img', src: p('canhelp'), caption: l('저 좀 도와줄 수 있어요? — Можете мне помочь?', 'Can you help me?') },
          { type: 'img', src: p('letmehelp'), caption: l('제가 도와 드릴게요. — Давайте я помогу.', 'Let me help you.') },
          {
            type: 'tip',
            text: l('-아/어 주다 — «сделать для кого-то»: 도와주다 «помочь», 사 주다 «купить кому-то». Вежливее — -아/어 드리다: 도와 드릴게요.', '-아/어 주다 means "do for someone": 도와주다 "to help", 사 주다 "to buy for someone". More polite: -아/어 드리다: 도와 드릴게요.'),
          },
        ],
      },
      {
        title: l('«Надо, должен»: -어야 되다 / -어야 하다', '"Must, have to": -어야 되다 / -어야 하다'),
        blocks: [
          { type: 'img', src: p('g-eoyadoeda'), caption: l('— 음식을 만들어야 돼요. 그럼 좀 일찍 오세요.', '— I have to cook. So please come a bit early.') },
          {
            type: 'p',
            text: l(
              'Обязанность или необходимость. Строится как -아요/-어요: ㅏ, ㅗ → **-아야 되다**, другие → **-어야 되다**, 하다 → **해야 되다**. 되다 и 하다 здесь взаимозаменяемы.',
              'Obligation or necessity. Built like -아요/-어요: ㅏ, ㅗ → **-아야 되다**, others → **-어야 되다**, 하다 → **해야 되다**. 되다 and 하다 are interchangeable here.',
            ),
          },
          {
            type: 'table',
            head: [l('Гласная', 'Vowel'), l('Слово', 'Word'), '-어야 돼요'],
            rows: [
              ['ㅏ, ㅗ', '일어나다, 가다', '일어나야 돼요, 가야 돼요'],
              [l('другие', 'others'), '먹다, 기다리다', '먹어야 돼요, 기다려야 돼요'],
              ['하다', '하다, 공부하다', '해야 돼요, 공부해야 돼요'],
            ],
          },
          {
            type: 'examples',
            items: [
              { ko: '미안해요. 동생 생일이라서 고향에 가야 돼요.', tr: l('Извини. У брата день рождения, мне надо ехать домой.', "Sorry. It's my brother's birthday, so I have to go home.") },
              { ko: '그럼 한국어를 잘해야 해요.', tr: l('Тогда надо хорошо знать корейский.', 'Then you have to be good at Korean.') },
              { ko: '내일 시험이 있어서 공부해야 돼요.', tr: l('Завтра экзамен, поэтому надо учиться.', 'I have an exam tomorrow, so I have to study.') },
            ],
          },
          {
            type: 'tip',
            text: l('Вопрос «Что нужно…?»: 뭘 사 가야 돼요? — «Что нужно купить с собой?»', 'Asking "What should I…?": 뭘 사 가야 돼요? — "What should I bring?"'),
          },
        ],
      },
      {
        title: l('«И ещё»: -고요', '"And also": -고요'),
        blocks: [
          { type: 'img', src: p('g-goyo'), caption: l('— 집들이에서 보통 뭘 해요? — 집을 구경해요. 같이 식사도 하고요.', '— What do people usually do at a housewarming? — They look around the house. And they eat together too.') },
          {
            type: 'p',
            text: l(
              '-고요 в конце фразы **добавляет ещё одну мысль** к сказанному (своему или собеседника): «…, и ещё…». Одна форма для всех: 먹고요, 가고요, 맛있고요.',
              '-고요 at the end of a sentence **adds one more point** to what was said: "…, and also…". One form for all: 먹고요, 가고요, 맛있고요.',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '한국 음식은 정말 맛있어요. 건강에도 좋고요.', tr: l('Корейская еда очень вкусная. И для здоровья полезная.', "Korean food is really delicious. And it's healthy too.") },
              { ko: '경치가 예뻐요. 음식도 맛있고요.', tr: l('Пейзажи красивые. И еда вкусная.', 'The scenery is pretty. And the food is tasty too.') },
              { ko: '보통 세제를 사 가요. 휴지도 괜찮고요.', tr: l('Обычно приносят моющее средство. Туалетная бумага тоже подойдёт.', 'People usually bring detergent. Toilet paper is fine too.') },
            ],
          },
        ],
      },
      {
        title: l('Слушаем и читаем: подарок на новоселье и письмо Сяоюй', "Listening and reading: a housewarming gift and Xiaoyu's email"),
        blocks: [
          { type: 'img', src: p('listen'), caption: l('내일 샤오위 씨 집들이가 몇 시예요?', "What time is Xiaoyu's housewarming tomorrow?") },
          { type: 'img', src: p('places4'), caption: l('Куда они пойдут? (Ответ: ③ домой к Сяоюй)', "Where will they go? (Answer: ③ Xiaoyu's home)") },
          { type: 'img', src: p('order4'), caption: l('Что Лиза сделает? (Ответ: ① купит бумагу → ④ пойдёт на новоселье)', 'What will Lisa do? (Answer: ① buy tissue → ④ go to the party)') },
          { type: 'img', src: p('read'), caption: l('Письмо Сяоюй для Чжиён', "Xiaoyu's email to Jiyeon") },
          {
            type: 'p',
            text: l(
              '오랜만이에요 — «давно не виделись», 물어보다 — «спросить», 메일 — «e-mail», 메시지 — «сообщение», 걱정 — «беспокойство», 부탁하다 — «просить (об услуге)», 처음 — «впервые».',
              '오랜만이에요 means "long time no see", 물어보다 "to ask", 메일 "e-mail", 메시지 "message", 걱정 "worry", 부탁하다 "to ask a favour", 처음 "the first time".',
            ),
          },
        ],
      },
    ],
    vocab: [
      v('집들이', 'jipdeuri', 'новоселье', 'housewarming party', p('housewarming')),
      v('초대장', 'chodaejang', 'приглашение', 'invitation', p('invitation')),
      v('휴지', 'hyuji', 'туалетная бумага, салфетки', 'tissue, toilet paper', p('tissue')),
      v('세제', 'seje', 'моющее средство', 'detergent', p('detergent')),
      v('이사하다', 'isahada', 'переезжать', 'to move (house)', p('move')),
      v('도와주다', 'dowajuda', 'помогать', 'to help', p('help')),
      v('초대하다', 'chodaehada', 'приглашать', 'to invite', p('invite')),
      v('준비하다', 'junbihada', 'готовить, готовиться', 'to prepare', p('prepare')),
      v('일어나다', 'ireonada', 'вставать', 'to get up'),
      v('빨래', 'ppallae', 'стирка', 'laundry'),
      v('쓰레기통', 'sseuregitong', 'мусорное ведро', 'trash can'),
      v('건강', 'geongang', 'здоровье', 'health'),
      v('경치', 'gyeongchi', 'пейзаж', 'scenery'),
      v('사 가다', 'sa gada', 'купить и принести', 'to buy and bring'),
      v('선물하다', 'seonmulhada', 'дарить', 'to give a present'),
      v('오랜만', 'oraenman', 'давно (не виделись)', 'a long time (since)'),
      v('물어보다', 'mureoboda', 'спрашивать', 'to ask'),
      v('메일', 'meil', 'электронное письмо', 'e-mail'),
      v('메시지', 'mesiji', 'сообщение', 'message'),
      v('걱정', 'geokjeong', 'беспокойство', 'worry'),
      v('부탁하다', 'butakada', 'просить (об услуге)', 'to ask a favour'),
    ],
    exercises: [
      /* 0 */ match(l('Соедини слово и перевод', 'Match the words'), [
        ['집들이', l('новоселье', 'housewarming')],
        ['초대장', l('приглашение', 'invitation')],
        ['휴지', l('бумага, салфетки', 'tissue')],
        ['세제', l('моющее средство', 'detergent')],
      ]),
      /* 1 */ cloze('여기에 ___을/를 버리지 마세요. 쓰레기통에 버리세요.', l('Не бросайте здесь салфетки. Бросайте в мусорку.', "Don't throw tissues here. Throw them in the trash can."), ['휴지', '초대장', '세제'], 0),
      /* 2 */ cloze('리사 씨가 생일 ___을/를 만들고 있어요.', l('Лиза делает приглашения на день рождения.', 'Lisa is making birthday invitations.'), ['초대장', '휴지', '집들이'], 0),
      /* 3 */ cloze('___이/가 없어서 빨래를 못하고 있어요.', l('Нет моющего средства, поэтому не могу постирать.', "I have no detergent, so I can't do the laundry."), ['세제', '휴지', '초대장'], 0),
      /* 4 */ listen('이사했어요', [l('Я переехал.', 'I moved.'), l('Я пригласил.', 'I invited.'), l('Я приготовил.', 'I prepared.')], 0),
      /* 5 */ choice(l('Предложить помощь вежливо:', 'Offer help politely:'), ['제가 도와 드릴게요.', '저 좀 도와줄 수 있어요?', '도와주지 마세요.'], 0),
      /* 6 */ choice(l('Попросить о помощи:', 'Ask for help:'), ['저 좀 도와줄 수 있어요?', '제가 도와 드릴게요.', '도와줘야 돼요.'], 0),
      /* 7 */ cloze('나: 미안해요. 동생 생일이라서 고향에 ___. (가다)', l('Извини. У брата день рождения, надо ехать домой.', "Sorry. It's my brother's birthday, so I have to go home."), ['가야 돼요', '가고요', '가세요'], 0),
      /* 8 */ cloze('나: 그럼 한국어를 잘 ___. (하다)', l('Тогда надо хорошо знать корейский.', 'Then you have to be good at Korean.'), ['해야 해요', '하고요', '하어야 해요'], 0),
      /* 9 */ choice(l('내일 시험이 있어서 …', 'I have an exam tomorrow, so …'), ['공부해야 돼요', '공부하야 돼요', '공부하어야 돼요'], 0),
      /* 10 */ choice(l('기다리다 → -어야 해요', '기다리다 → -어야 해요'), ['기다려야 해요', '기다리야 해요', '기다리어야 하요'], 0),
      /* 11 */ choice(l('듣다 → -어야 해요', '듣다 → -어야 해요'), ['들어야 해요', '듣어야 해요', '드러야 돼요'], 0),
      /* 12 */ cloze('나: 네, 한국 음식은 정말 맛있어요. 건강에도 ___. (좋다)', l('Да, корейская еда вкусная. И для здоровья полезна.', "Yes, Korean food is really tasty. And it's good for your health."), ['좋고요', '좋아야 돼요', '좋아서'], 0),
      /* 13 */ cloze('나: 경치가 예뻐요. 음식도 ___. (맛있다)', l('Пейзажи красивые. И еда вкусная.', 'The scenery is pretty. And the food is tasty too.'), ['맛있고요', '맛있어야 돼요'], 0),
      /* 14 */ cloze('나: 좋아요. 같이 식사해요. 식사한 후에 영화도 ___.', l('Давай. Поедим вместе. А потом ещё и фильм посмотрим.', "Sure. Let's eat together. And let's watch a movie afterwards too."), ['보고요', '봐야 돼요'], 0),
      /* 15 */ cloze('나: 미안해요. 숙제가 많아요. 내일 시험도 ___.', l('Извини. Много домашки. И завтра ещё экзамен.', "Sorry. I have a lot of homework. And I have an exam tomorrow too."), ['있고요', '있어야 돼요'], 0),
      /* 16 */ build(l('Собери: «Что нужно принести на новоселье?»', 'Build: "What should I bring to the housewarming?"'), ['집들이에', '뭘', '사', '가야', '돼요?']),
      /* 17 */ build(l('Собери: «Завтра надо рано вставать»', 'Build: "I have to get up early tomorrow"'), ['내일', '일찍', '일어나야', '해요']),
      /* 18 */ type(l('Напиши «Надо ждать.» (기다리다)', 'Write "I have to wait." (기다리다)'), ['기다려야 돼요', '기다려야 해요', '기다려야 돼요.', '기다려야 해요.']),
      /* 19 */ listen('집들이에 뭘 사 가야 돼요?', [l('Что принести на новоселье?', 'What should I bring to the housewarming?'), l('Где новоселье?', 'Where is the housewarming?'), l('Когда новоселье?', 'When is the housewarming?')], 0),
      /* 20 */ tf('오늘 샤오위 씨가 집들이를 해요.', false, l('Новоселье завтра: 내일 샤오위 씨 집들이.', 'The party is tomorrow: 내일 샤오위 씨 집들이.')),
      /* 21 */ tf('지훈 씨가 선물을 살 거예요.', false, l('Лиза: 제가 사 갈까요?', 'Lisa: 제가 사 갈까요?')),
      /* 22 */ tf('두 사람은 휴지를 살 거예요.', true),
      /* 23 */ dict('제가 도와 드릴게요', '제가 도와 드릴게요', '제가 도와 드릴게요.'),
      /* 24 */ tf('샤오위 씨는 다음 주에 집들이를 할 거예요.', true),
      /* 25 */ tf('샤오위 씨는 한국에서 집들이를 많이 했어요.', false, l('한국에서 집들이가 처음이라서 걱정이 많아요.', '한국에서 집들이가 처음이라서 걱정이 많아요.')),
      /* 26 */ choice(l('Как Чжиён может ответить Сяоюй?', 'How can Jiyeon reply to Xiaoyu?'), [l('Письмом или сообщением', 'By e-mail or message'), l('Только при встрече', 'Only in person'), l('Только по телефону', 'Only by phone')], 0),
      /* 27 */ wr('집들이', 'новоселье', 'housewarming'),
      /* 28 */ wr('휴지', 'туалетная бумага', 'tissue'),
      /* 29 */ wr('이사', 'переезд', 'moving'),
      /* 30 */ wr('초대', 'приглашение', 'invitation'),
    ],
    dialogue: {
      title: l('Что подарить на новоселье?', 'What to bring to the housewarming?'),
      lines: [
        dl('A', '내일 샤오위 씨 집들이가 몇 시예요?', 'Во сколько завтра новоселье у Сяоюй?', "What time is Xiaoyu's housewarming tomorrow?"),
        dl('B', '저녁 6시예요. 그런데 집들이에 뭘 사 가야 돼요?', 'В 6 вечера. А что нужно принести на новоселье?', 'At 6 p.m. By the way, what should we bring?'),
        dl('A', '보통 세제를 사 가요. 휴지도 괜찮고요.', 'Обычно приносят моющее средство. Туалетная бумага тоже подойдёт.', 'People usually bring detergent. Toilet paper is fine too.'),
        dl('B', '그럼 휴지를 선물합시다. 제가 사 갈까요?', 'Тогда подарим бумагу. Я куплю?', "Then let's give toilet paper. Shall I buy it?"),
        dl('A', '좋아요. 그럼 샤오위 씨 집에서 봐요.', 'Хорошо. Тогда увидимся у Сяоюй.', "Great. Then see you at Xiaoyu's place."),
      ],
    },
    story: {
      title: l('Письмо о новоселье', 'An email about a housewarming'),
      sentences: [
        st('지연 씨, 오랜만이에요. 잘 지냈어요? 저는 잘 지내고 있어요.', 'Чжиён, давно не виделись. Как ты? У меня всё хорошо.', "Jiyeon, it's been a long time. How have you been? I'm doing well.", [['오랜만이에요', 'давно не виделись', 'long time no see'], ['잘 지냈어요', 'как поживала?', 'how have you been?'], ['잘 지내고 있어요', 'хорошо живу', "I'm doing well"]]),
        st('뭐 좀 물어보고 싶어서 메일 보내요.', 'Пишу, потому что хочу кое-что спросить.', "I'm sending this e-mail because I want to ask you something.", [['물어보고 싶어서', 'хочу спросить, поэтому', 'want to ask, so'], ['메일 보내요', 'отправляю письмо', 'send an e-mail']]),
        st('제가 이사를 해서 다음 주에 집들이를 하려고 해요.', 'Я переехала и на следующей неделе собираюсь устроить новоселье.', "I moved, so I'm planning to have a housewarming next week.", [['이사를 해서', 'переехала, поэтому', 'moved, so'], ['다음 주에', 'на следующей неделе', 'next week'], ['하려고 해요', 'собираюсь', 'plan to']]),
        st('집들이에서 뭘 해야 해요? 어떤 음식을 준비해야 돼요?', 'Что нужно делать на новоселье? Какую еду нужно приготовить?', 'What should I do at a housewarming? What food should I prepare?', [['뭘 해야 해요', 'что нужно делать?', 'what should I do?'], ['어떤 음식', 'какую еду', 'what kind of food'], ['준비해야 돼요', 'нужно приготовить', 'should prepare']]),
        st('한국에서 집들이가 처음이라서 걱정이 많아요.', 'Новоселье в Корее у меня впервые, поэтому очень волнуюсь.', "It's my first housewarming in Korea, so I'm very worried.", [['처음이라서', 'впервые, поэтому', "it's the first time, so"], ['걱정이 많아요', 'очень волнуюсь', 'worry a lot']]),
        st('메일 주세요. 메시지도 되고요. 그럼 부탁해요.', 'Напиши мне. Можно и сообщением. Заранее спасибо.', 'Please e-mail me. A message is fine too. Thanks in advance.', [['메일 주세요', 'напиши письмо', 'please e-mail'], ['메시지도 되고요', 'и сообщение подойдёт', 'a message works too'], ['부탁해요', 'прошу', 'please (I ask you)']]),
      ],
    },
  },
  exam: [
    listen('집들이', [l('новоселье', 'housewarming'), l('приглашение', 'invitation'), l('переезд', 'moving')], 0),
    listen('휴지를 선물합시다', [l('Давайте подарим бумагу.', "Let's give toilet paper."), l('Давайте купим моющее средство.', "Let's buy detergent."), l('Давайте пригласим друзей.', "Let's invite friends.")], 0),
    listen('내일 일찍 일어나야 돼요', [l('Завтра надо рано вставать.', 'I have to get up early tomorrow.'), l('Завтра встану поздно.', "I'll get up late tomorrow."), l('Вчера встал рано.', 'I got up early yesterday.')], 0),
    listen('음식도 맛있고요', [l('И еда тоже вкусная.', 'And the food is tasty too.'), l('Еда невкусная.', 'The food is not tasty.'), l('Надо приготовить еду.', 'I have to make food.')], 0),
    dict('세제를 사 가요', '세제를 사 가요', '세제를 사 가요.'),
    dict('친구를 초대했어요', '친구를 초대했어요', '친구를 초대했어요.'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['이사하다', l('переезжать', 'to move')],
      ['초대하다', l('приглашать', 'to invite')],
      ['준비하다', l('готовить', 'to prepare')],
      ['걱정', l('беспокойство', 'worry')],
      ['경치', l('пейзаж', 'scenery')],
    ]),
    choice(l('먹다 → -어야 돼요', '먹다 → -어야 돼요'), ['먹어야 돼요', '먹아야 돼요', '먹야 돼요'], 0),
    choice(l('일어나다 → -아야 돼요', '일어나다 → -아야 돼요'), ['일어나야 돼요', '일어나아야 돼요', '일어너야 돼요'], 0),
    cloze('영화 시간이 다 됐어요. 빨리 ___.', l('Фильм вот-вот начнётся. Надо спешить.', "It's almost movie time. We have to hurry."), ['가야 해요', '가고요', '가 해요'], 0),
    cloze('그 식당은 인기가 많아서 점심시간에 오래 ___.', l('Ресторан популярный, в обед надо долго ждать.', 'That restaurant is popular, so you have to wait long at lunch.'), ['기다려야 해요', '기다리고요'], 0),
    cloze('이 옷은 예뻐요. 가격도 ___.', l('Эта одежда красивая. И цена хорошая.', 'These clothes are pretty. And the price is good too.'), ['싸고요', '싸야 돼요', '싸서'], 0),
    choice(l('Что обычно дарят на новоселье в Корее?', 'What do Koreans usually give at a housewarming?'), [l('Моющее средство или туалетную бумагу', 'Detergent or toilet paper'), l('Часы', 'A clock'), l('Цветы и торт', 'Flowers and cake')], 0),
    choice(l('Повторение (юнит 16): «От дома до школы 10 минут»', 'Review (unit 16): "It takes 10 minutes from home to school"'), ['집에서 학교까지 10분 걸려요.', '집까지 학교에서 10분 걸려요.', '집부터 학교에 10분 걸려요.'], 0),
    build(l('Собери: «Можете мне помочь?»', 'Build: "Can you help me?"'), ['저', '좀', '도와줄', '수', '있어요?']),
    build(l('Собери: «Надо приготовить еду»', 'Build: "I have to prepare food"'), ['음식을', '준비해야', '돼요']),
    type(l('Напиши «Надо учиться.» (공부하다)', 'Write "I have to study." (공부하다)'), ['공부해야 돼요', '공부해야 해요', '공부해야 돼요.', '공부해야 해요.']),
    tf('샤오위 씨 집들이는 저녁 6시예요.', true),
    tf('샤오위 씨는 집들이 준비를 다 했어요.', false),
    wr('집들이', 'новоселье', 'housewarming'),
    wr('선물', 'подарок', 'present'),
  ],
};
