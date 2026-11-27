import type { BookUnit } from './index';
import { build, choice, cloze, dict, dl, l, listen, match, picOf, st, tf, type, v, wr } from './h';

const p = picOf(3);

export const unit: BookUnit = {
  n: 3,
  lesson: {
    emoji: '🎵',
    title: l('Я тоже люблю дорамы (저도 드라마를 좋아합니다)', 'I like dramas, too (저도 드라마를 좋아합니다)'),
    goal: l(
      'Говорить о том, что любишь: официальный стиль -습니다/-ㅂ니다, частица объекта 을/를 и «тоже» 도.',
      'Talk about what you like: the formal style -습니다/-ㅂ니다, the object particle 을/를 and "too" 도.',
    ),
    theory: [
      {
        title: l('Глаголы и прилагательные: словарная форма на -다', 'Verbs and adjectives: the dictionary form in -다'),
        blocks: [
          {
            type: 'p',
            text: l(
              'В словаре все корейские глаголы и прилагательные оканчиваются на **-다**: 가다 «идти», 먹다 «есть», 좋다 «хороший». Чтобы говорить, -다 отбрасывают и добавляют окончание.',
              'In the dictionary every Korean verb and adjective ends in **-다**: 가다 "to go", 먹다 "to eat", 좋다 "to be good". To use one, drop -다 and add an ending.',
            ),
          },
          {
            type: 'tip',
            text: l('Корейские прилагательные ведут себя как глаголы: 크다 — не просто «большой», а «быть большим».', 'Korean adjectives behave like verbs: 크다 is not just "big" but "to be big".'),
          },
          { type: 'img', src: p('like-expr'), caption: l('저는 한국을 좋아합니다. = 저는 한국이 좋습니다.', '저는 한국을 좋아합니다. = 저는 한국이 좋습니다. — I like Korea.') },
          {
            type: 'p',
            text: l(
              '«Я люблю X» можно сказать двумя способами: **X을/를 좋아하다** (глагол «любить») или **X이/가 좋다** (прилагательное «нравится, хороший»).',
              '"I like X" can be said two ways: **X을/를 좋아하다** (the verb "to like") or **X이/가 좋다** (the adjective "to be good / pleasing").',
            ),
          },
          { type: 'img', src: p('what'), caption: l('무슨 노래를 듣습니까? — Какую песню ты слушаешь?', '무슨 노래를 듣습니까? — What song do you listen to?') },
          {
            type: 'examples',
            items: [
              { ko: '무슨 음식을 좋아합니까?', tr: l('Какую еду вы любите?', 'What food do you like?') },
              { ko: '무슨 노래를 듣습니까?', tr: l('Какие песни вы слушаете?', 'What songs do you listen to?') },
            ],
          },
        ],
      },
      {
        title: l('Официальный стиль: -습니다 / -ㅂ니다, вопрос -습니까 / -ㅂ니까', 'Formal style: -습니다 / -ㅂ니다, question -습니까 / -ㅂ니까'),
        blocks: [
          { type: 'img', src: p('g-sumnida'), caption: l('노래가 좋습니까? — 노래가 좋습니다.', '노래가 좋습니까? — 노래가 좋습니다. — Is the song good? — It is.') },
          {
            type: 'p',
            text: l(
              'Это **вежливо-официальный** стиль: новости, презентации, работа. Отбрось -다: если основа кончается на согласную → **-습니다** (вопрос **-습니까?**), на гласную → **-ㅂ니다** (вопрос **-ㅂ니까?**).',
              'This is the **polite formal** style: news, presentations, work. Drop -다: a stem ending in a consonant takes **-습니다** (question **-습니까?**), a stem ending in a vowel takes **-ㅂ니다** (question **-ㅂ니까?**).',
            ),
          },
          {
            type: 'table',
            head: [l('Основа', 'Stem'), l('Слово', 'Word'), l('Утверждение / вопрос', 'Statement / question')],
            rows: [
              [l('согласная (받침 ○)', 'consonant (받침 ○)'), '좋다', '좋습니다 / 좋습니까?'],
              [l('согласная', 'consonant'), '먹다', '먹습니다 / 먹습니까?'],
              [l('гласная (받침 ×)', 'vowel (받침 ×)'), '자다', '잡니다 / 잡니까?'],
              [l('гласная', 'vowel'), '가다', '갑니다 / 갑니까?'],
              [l('гласная', 'vowel'), '좋아하다', '좋아합니다 / 좋아합니까?'],
              [l('гласная', 'vowel'), '예쁘다', '예쁩니다 / 예쁩니까?'],
            ],
          },
          {
            type: 'tip',
            text: l('ㅂ «прилипает» к последнему слогу как 받침: 가 + ㅂ니다 → 갑니다, 하 + ㅂ니다 → 합니다.', 'ㅂ sticks to the last syllable as a 받침: 가 + ㅂ니다 → 갑니다, 하 + ㅂ니다 → 합니다.'),
          },
        ],
      },
      {
        title: l('Частица объекта 을/를', 'Object particle 을/를'),
        blocks: [
          { type: 'img', src: p('g-eul'), caption: l('저는 밥을 먹습니다. — Я ем рис.', '저는 밥을 먹습니다. — I eat rice.') },
          {
            type: 'p',
            text: l(
              '을/를 отмечает **дополнение** — то, что ешь, слушаешь, любишь. Ставится перед глаголом. После согласной — **을**, после гласной — **를**.',
              '을/를 marks the **object** — what you eat, listen to, like. It comes before the verb. After a consonant use **을**, after a vowel use **를**.',
            ),
          },
          {
            type: 'table',
            head: [l('Конец слова', 'Noun ends in'), l('Слово', 'Noun'), l('+ 을/를', '+ 을/를')],
            rows: [
              [l('согласная', 'consonant'), '밥, 가족', '밥을, 가족을'],
              [l('гласная', 'vowel'), '노래, 드라마', '노래를, 드라마를'],
            ],
          },
          {
            type: 'examples',
            items: [
              { ko: '지금 무엇을 합니까?', tr: l('Что ты сейчас делаешь?', 'What are you doing now?') },
              { ko: '한국 노래를 듣습니다.', tr: l('Слушаю корейские песни.', 'I listen to Korean songs.') },
              { ko: '빵을 먹습니다.', tr: l('Ем хлеб.', 'I eat bread.') },
            ],
          },
          {
            type: 'tip',
            text: l('Порядок слов: подлежащее — дополнение — глагол. 저는 + 밥을 + 먹습니다. Глагол всегда в конце!', 'Word order: subject — object — verb. 저는 + 밥을 + 먹습니다. The verb always comes last!'),
          },
        ],
      },
      {
        title: l('«Тоже»: частица 도', '"Too, also": particle 도'),
        blocks: [
          { type: 'img', src: p('g-do'), caption: l('저도 한국 음식을 좋아합니다. — Я тоже люблю корейскую еду.', '저도 한국 음식을 좋아합니다. — I like Korean food, too.') },
          {
            type: 'p',
            text: l(
              '도 значит «тоже, и». Он **заменяет** 은/는, 이/가 и 을/를 — их вместе с 도 не ставят. Форма одна: **существительное + 도**.',
              '도 means "too, also". It **replaces** 은/는, 이/가 and 을/를 — they are not used together with 도. There is one form: **noun + 도**.',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '저는 학생입니다. 쯔엉 씨도 학생입니다.', tr: l('Я студент. Чыонг тоже студент.', "I'm a student. Truong is a student, too.") },
              { ko: '한국 노래를 좋아합니다. 한국 드라마도 좋아합니다.', tr: l('Люблю корейские песни. Корейские дорамы тоже люблю.', 'I like Korean songs. I like Korean dramas, too.') },
              { ko: '빵을 먹습니다. 그리고 과자도 먹습니다.', tr: l('Ем хлеб. И печенье тоже ем.', 'I eat bread. And I eat snacks, too.') },
            ],
          },
          {
            type: 'tip',
            text: l('Не «저는도», не «드라마를도» — просто 저도, 드라마도.', 'Not "저는도" or "드라마를도" — just 저도, 드라마도.'),
          },
        ],
      },
      {
        title: l('Слушаем и читаем: песни и пибимпап', 'Listening and reading: songs and bibimbap'),
        blocks: [
          { type: 'img', src: p('listen'), caption: l('Учитель и Лиза в кафе', 'The teacher and Lisa at a café') },
          { type: 'img', src: p('acts4'), caption: l('Что делает Лиза? (Ответ: ③ слушает песни)', 'What is Lisa doing? (Answer: ③ listening to songs)') },
          { type: 'img', src: p('read'), caption: l('비빔밥 — рис с овощами', 'Bibimbap — rice with vegetables') },
          {
            type: 'tip',
            text: l('제일 — «больше всего, самый»; 자주 — «часто»; 그래서 — «поэтому».', '제일 means "the most"; 자주 means "often"; 그래서 means "so, therefore".'),
          },
        ],
      },
    ],
    vocab: [
      v('노래', 'norae', 'песня', 'song', p('song')),
      v('드라마', 'deurama', 'дорама, сериал', 'drama, TV series', p('drama')),
      v('음식', 'eumsik', 'еда', 'food', p('food')),
      v('전화', 'jeonhwa', 'телефон, звонок', 'phone call', p('phone')),
      v('하다', 'hada', 'делать', 'to do', p('do')),
      v('좋아하다', 'joahada', 'любить, нравиться', 'to like', p('like')),
      v('가다', 'gada', 'идти, ехать', 'to go', p('go')),
      v('먹다', 'meokda', 'есть, кушать', 'to eat', p('eat')),
      v('듣다', 'deutda', 'слушать', 'to listen', p('listen-v')),
      v('크다', 'keuda', 'большой', 'to be big', p('big')),
      v('작다', 'jakda', 'маленький', 'to be small', p('small')),
      v('예쁘다', 'yeppeuda', 'красивый', 'to be pretty', p('pretty')),
      v('좋다', 'jota', 'хороший; нравится', 'to be good', p('good')),
      v('무슨', 'museun', 'какой (что за)', 'what (kind of)', p('what')),
      v('무엇', 'mueot', 'что', 'what'),
      v('지금', 'jigeum', 'сейчас', 'now'),
      v('밥', 'bap', 'рис, еда', 'rice, meal'),
      v('빵', 'ppang', 'хлеб', 'bread'),
      v('과자', 'gwaja', 'печенье, снеки', 'snack, cookie'),
      v('꽃', 'kkot', 'цветок', 'flower'),
      v('재미있다', 'jaemiitda', 'интересный, весёлый', 'to be fun'),
      v('아주', 'aju', 'очень', 'very'),
      v('비빔밥', 'bibimbap', 'пибимпап (рис с овощами)', 'bibimbap', p('read')),
      v('야채', 'yachae', 'овощи', 'vegetable'),
      v('많다', 'manta', 'много', 'to be many, a lot'),
      v('제일', 'jeil', 'больше всего, самый', 'the most'),
      v('자주', 'jaju', 'часто', 'often'),
      v('그래서', 'geuraeseo', 'поэтому', 'so, therefore'),
    ],
    exercises: [
      /* 0 */ match(l('Соедини слово и перевод', 'Match the words'), [
        ['노래', l('песня', 'song')],
        ['드라마', l('дорама', 'drama')],
        ['음식', l('еда', 'food')],
        ['전화', l('звонок', 'phone call')],
      ]),
      /* 1 */ match(l('Соедини глагол и перевод', 'Match the verbs'), [
        ['가다', l('идти', 'to go')],
        ['먹다', l('есть', 'to eat')],
        ['듣다', l('слушать', 'to listen')],
        ['하다', l('делать', 'to do')],
      ]),
      /* 2 */ choice(l('Противоположность 크다:', 'The opposite of 크다:'), ['작다', '좋다', '예쁘다'], 0),
      /* 3 */ listen('예쁩니다', [l('красивый', 'pretty'), l('большой', 'big'), l('маленький', 'small')], 0),
      /* 4 */ choice(l('가다 в стиле -ㅂ니다:', '가다 in the -ㅂ니다 style:'), ['갑니다', '가습니다', '가니다'], 0, l('Основа 가 на гласную → +ㅂ니다 → 갑니다.', 'The stem 가 ends in a vowel → +ㅂ니다 → 갑니다.')),
      /* 5 */ choice(l('듣다 в стиле -습니다:', '듣다 in the -습니다 style:'), ['듣습니다', '듭니다', '듣니다'], 0, l('Основа 듣 на согласную → +습니다.', 'The stem 듣 ends in a consonant → +습니다.')),
      /* 6 */ choice(l('Вопрос от 좋아하다:', 'Question form of 좋아하다:'), ['좋아합니까?', '좋아하습니까?', '좋아합니다'], 0),
      /* 7 */ choice(l('좋다 в стиле -습니다:', '좋다 in the -습니다 style:'), ['좋습니다', '좁니다', '좋니다'], 0),
      /* 8 */ choice(l('예쁘다 в стиле -ㅂ니다:', '예쁘다 in the -ㅂ니다 style:'), ['예쁩니다', '예쁘습니다', '예뻐니다'], 0),
      /* 9 */ cloze('지금 무엇___ 합니까?', l('Что ты сейчас делаешь?', 'What are you doing now?'), ['을', '를'], 0, l('무엇 оканчивается на ㅅ → 을.', '무엇 ends in ㅅ → 을.')),
      /* 10 */ cloze('한국 노래___ 듣습니다.', l('Слушаю корейские песни.', 'I listen to Korean songs.'), ['을', '를'], 1),
      /* 11 */ cloze('빵___ 먹습니다.', l('Ем хлеб.', 'I eat bread.'), ['을', '를'], 0),
      /* 12 */ cloze('수미 씨는 노래___ 좋아합니까?', l('Суми любит песни?', 'Does Sumi like songs?'), ['을', '를'], 1),
      /* 13 */ cloze('리사 씨, 김치___ 먹습니까?', l('Лиза, вы едите кимчи?', 'Lisa, do you eat kimchi?'), ['을', '를'], 1),
      /* 14 */ cloze('저는 학생입니다. 쯔엉 씨___ 학생입니다.', l('Я студент. Чыонг тоже студент.', "I'm a student. Truong is a student, too."), ['도', '를', '은'], 0),
      /* 15 */ cloze('네, 좋아합니다. 드라마___ 좋아합니다.', l('Да, люблю. Дорамы тоже люблю.', 'Yes, I do. I like dramas, too.'), ['을', '도'], 1),
      /* 16 */ cloze('리사 씨는 빵을 먹습니다. 그리고 과자___ 먹습니다.', l('Лиза ест хлеб. И печенье тоже ест.', 'Lisa eats bread. And she eats snacks, too.'), ['도', '를'], 0),
      /* 17 */ build(l('Собери: «Я ем рис»', 'Build: "I eat rice"'), ['저는', '밥을', '먹습니다']),
      /* 18 */ build(l('Собери: «Я тоже люблю корейскую еду»', 'Build: "I like Korean food, too"'), ['저도', '한국', '음식을', '좋아합니다']),
      /* 19 */ type(l('Напиши вопрос от 먹다 (-습니까?)', 'Write the question form of 먹다 (-습니까?)'), ['먹습니까?', '먹습니까']),
      /* 20 */ listen('리사 씨는 한국 노래를 듣습니다', [l('Лиза слушает корейские песни.', 'Lisa listens to Korean songs.'), l('Лиза смотрит корейские дорамы.', 'Lisa watches Korean dramas.'), l('Лиза ест корейскую еду.', 'Lisa eats Korean food.')], 0),
      /* 21 */ choice(l('Учитель: «리사 씨, 한국 노래를 좋아합니까?» Лучший ответ:', 'Teacher: "리사 씨, 한국 노래를 좋아합니까?" The best answer:'), ['네, 저는 한국 노래가 좋습니다.', '아니요, 그 노래가 재미있습니다.', '아니요, 저는 한국 노래를 듣습니다.'], 0),
      /* 22 */ dict('드라마도 좋아합니다', '드라마도 좋아합니다', '드라마도 좋아합니다.'),
      /* 23 */ tf('비빔밥은 색이 예쁩니다.', true),
      /* 24 */ tf('비빔밥은 야채가 없습니다.', false, l('В тексте: 비빔밥은 야채가 많습니다.', 'The text says 비빔밥은 야채가 많습니다.')),
      /* 25 */ tf('저는 비빔밥을 제일 좋아합니다.', true),
      /* 26 */ tf('비빔밥은 한국 음식이 아닙니다.', false),
      /* 27 */ wr('노래', 'песня', 'song'),
      /* 28 */ wr('음식', 'еда', 'food'),
      /* 29 */ wr('먹다', 'есть', 'to eat'),
      /* 30 */ wr('좋아하다', 'любить', 'to like'),
      /* 31 */ wr('비빔밥', 'пибимпап', 'bibimbap'),
    ],
    dialogue: {
      title: l('Что ты сейчас делаешь?', 'What are you doing now?'),
      lines: [
        dl('A', '리사 씨, 지금 뭘 합니까?', 'Лиза, что вы сейчас делаете?', 'Lisa, what are you doing now?'),
        dl('B', '한국 노래를 듣습니다.', 'Слушаю корейские песни.', "I'm listening to Korean songs."),
        dl('A', '한국 노래를 좋아합니까?', 'Вы любите корейские песни?', 'Do you like Korean songs?'),
        dl('B', '네, 한국 노래가 좋습니다. 그리고 한국 드라마도 좋아합니다.', 'Да, корейские песни мне нравятся. И корейские дорамы тоже люблю.', 'Yes, I like Korean songs. And I like Korean dramas, too.'),
        dl('A', '저도 드라마를 좋아합니다. 아주 재미있습니다.', 'Я тоже люблю дорамы. Очень интересно.', 'I like dramas, too. They are a lot of fun.'),
      ],
    },
    story: {
      title: l('Мой любимый пибимпап', 'My favourite bibimbap'),
      sentences: [
        st('여러분은 한국 음식을 좋아합니까?', 'Вы любите корейскую еду?', 'Do you like Korean food?', [['여러분은', 'вы все (тема)', 'you all (topic)'], ['한국 음식을', 'корейскую еду', 'Korean food (object)'], ['좋아합니까', 'любите?', 'do you like?']]),
        st('저는 한국 음식을 아주 좋아합니다.', 'Я очень люблю корейскую еду.', 'I like Korean food very much.', [['저는', 'я', 'I'], ['아주', 'очень', 'very'], ['좋아합니다', 'люблю', 'like']]),
        st('비빔밥을 제일 좋아합니다.', 'Больше всего люблю пибимпап.', 'I like bibimbap the most.', [['비빔밥을', 'пибимпап (объект)', 'bibimbap (object)'], ['제일', 'больше всего', 'the most'], ['좋아합니다', 'люблю', 'like']]),
        st('비빔밥은 야채가 많습니다.', 'В пибимпапе много овощей.', 'Bibimbap has a lot of vegetables.', [['비빔밥은', 'пибимпап (тема)', 'bibimbap (topic)'], ['야채가', 'овощи (подлежащее)', 'vegetables (subject)'], ['많습니다', 'много', 'are many']]),
        st('그리고 색이 예쁩니다.', 'И цвет красивый.', 'And its colours are pretty.', [['그리고', 'и', 'and'], ['색이', 'цвет', 'colour'], ['예쁩니다', 'красивый', 'is pretty']]),
        st('그래서 저는 비빔밥을 자주 먹습니다.', 'Поэтому я часто ем пибимпап.', 'So I often eat bibimbap.', [['그래서', 'поэтому', 'so'], ['자주', 'часто', 'often'], ['먹습니다', 'ем', 'eat']]),
      ],
    },
  },
  exam: [
    listen('노래', [l('песня', 'song'), l('еда', 'food'), l('цветок', 'flower')], 0),
    listen('한국 음식을 좋아합니다', [l('Люблю корейскую еду.', 'I like Korean food.'), l('Слушаю корейские песни.', 'I listen to Korean songs.'), l('Иду в Корею.', 'I go to Korea.')], 0),
    listen('지금 무엇을 합니까?', [l('Что вы сейчас делаете?', 'What are you doing now?'), l('Что вы едите?', 'What are you eating?'), l('Какую песню слушаете?', 'What song are you listening to?')], 0),
    listen('저도 빵을 먹습니다', [l('Я тоже ем хлеб.', 'I eat bread, too.'), l('Я ем рис.', 'I eat rice.'), l('Я тоже слушаю песни.', 'I listen to songs, too.')], 0),
    dict('전화를 합니다', '전화를 합니다', '전화를 합니다.'),
    dict('꽃이 예쁩니다', '꽃이 예쁩니다', '꽃이 예쁩니다.'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['크다', l('большой', 'big')],
      ['작다', l('маленький', 'small')],
      ['예쁘다', l('красивый', 'pretty')],
      ['많다', l('много', 'many')],
      ['재미있다', l('интересный', 'fun')],
    ]),
    choice(l('먹다 → ?', '먹다 → ?'), ['먹습니다', '먹ㅂ니다', '먹니다'], 0),
    choice(l('하다 → ?', '하다 → ?'), ['합니다', '하습니다', '핫니다'], 0),
    choice(l('크다 → вопрос', '크다 → question'), ['큽니까?', '크습니까?', '큽니다'], 0),
    cloze('저는 드라마___ 좋아합니다.', l('Я люблю дорамы.', 'I like dramas.'), ['을', '를'], 1),
    cloze('저는 음식___ 좋아합니다.', l('Я люблю еду.', 'I like food.'), ['을', '를'], 0),
    cloze('지훈 씨는 한국 사람이에요. 수미 씨___ 한국 사람이에요.', l('Чжихун — кореец. Суми тоже кореянка.', 'Jihun is Korean. Sumi is Korean, too.'), ['도', '를', '가'], 0),
    cloze('___ 노래를 듣습니까?', l('Какие песни ты слушаешь?', 'What songs do you listen to?'), ['무슨', '어느', '뭐'], 0),
    choice(l('«Я люблю Корею» другими словами — 저는 한국을 좋아합니다 = …', '"I like Korea" in other words — 저는 한국을 좋아합니다 = …'), ['저는 한국이 좋습니다.', '저는 한국을 좋습니다.', '저는 한국도 갑니다.'], 0),
    build(l('Собери: «Что вы сейчас делаете?»', 'Build: "What are you doing now?"'), ['지금', '무엇을', '합니까?']),
    build(l('Собери: «Я тоже слушаю корейские песни»', 'Build: "I listen to Korean songs, too"'), ['저도', '한국', '노래를', '듣습니다']),
    type(l('Напиши: «Я ем хлеб.» (저는 …)', 'Write: "I eat bread." (저는 …)'), ['저는 빵을 먹습니다', '저는 빵을 먹습니다.']),
    tf('저는 비빔밥을 자주 먹습니다.', true),
    tf('비빔밥은 색이 예쁘지 않습니다.', false),
    wr('음식', 'еда', 'food'),
    wr('노래', 'песня', 'song'),
  ],
};
