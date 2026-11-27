import type { BookUnit } from './index';
import { build, choice, cloze, dict, dl, l, listen, match, picOf, st, tf, type, v, wr } from './h';

const p = picOf(1);

export const unit: BookUnit = {
  n: 1,
  lesson: {
    emoji: '🇰🇷',
    title: l('Я из Кореи (저는 한국 사람이에요)', "I'm from Korea (저는 한국 사람이에요)"),
    goal: l(
      'Здороваться, называть своё имя, страну и профессию: 이에요/예요 и частица темы 은/는.',
      'Greet people, say your name, country and job: 이에요/예요 and the topic particle 은/는.',
    ),
    theory: [
      {
        title: l('Приветствия: 안녕? 안녕하세요? 안녕하십니까?', 'Greetings: 안녕? 안녕하세요? 안녕하십니까?'),
        blocks: [
          {
            type: 'p',
            text: l(
              'В корейском одно «здравствуйте» звучит по-разному в зависимости от того, **с кем** ты говоришь.',
              'Korean has one "hello" that changes depending on **who** you are talking to.',
            ),
          },
          { type: 'img', src: p('hello1'), caption: l('안녕? — друзьям и младшим', '안녕? — to friends and younger people') },
          { type: 'img', src: p('hello2'), caption: l('안녕하세요? — вежливо, почти всегда', '안녕하세요? — polite, almost always') },
          { type: 'img', src: p('hello3'), caption: l('안녕하십니까? — очень официально', '안녕하십니까? — very formal') },
          {
            type: 'table',
            head: [l('Фраза', 'Phrase'), l('Когда', 'When')],
            rows: [
              ['안녕?', l('с друзьями, с детьми', 'with friends, with children')],
              ['안녕하세요?', l('вежливо: в магазине, с учителем, с незнакомыми', 'polite: in a shop, with a teacher, with strangers')],
              ['안녕하십니까?', l('официально: на работе, в армии, на выступлении', 'formal: at work, in the army, in a speech')],
            ],
          },
          {
            type: 'tip',
            text: l('Не знаешь, что выбрать — говори 안녕하세요?. Это никогда не будет ошибкой.', 'Not sure which one? Say 안녕하세요? — it is never wrong.'),
          },
        ],
      },
      {
        title: l('«Быть»: существительное + 이에요/예요', '"To be": noun + 이에요/예요'),
        blocks: [
          { type: 'img', src: p('g-ida'), caption: l('저는 베트남 사람이에요. — Я вьетнамец.', "저는 베트남 사람이에요. — I'm Vietnamese.") },
          {
            type: 'p',
            text: l(
              '이에요/예요 ставится **после существительного** и значит «есть, является». Слово с последним согласным (받침) → **이에요**, с гласной → **예요**.',
              '이에요/예요 goes **after a noun** and means "is / am / are". A noun ending in a consonant (받침) takes **이에요**, a noun ending in a vowel takes **예요**.',
            ),
          },
          {
            type: 'table',
            head: [l('Конец слова', 'Noun ends in'), l('Слово', 'Noun'), l('+ 이에요/예요', '+ 이에요/예요')],
            rows: [
              [l('согласная (받침 ○)', 'consonant (받침 ○)'), '사람', '사람이에요'],
              [l('гласная (받침 ×)', 'vowel (받침 ×)'), '리사', '리사예요'],
            ],
          },
          {
            type: 'examples',
            items: [
              { ko: '저는 학생이에요.', tr: l('Я студент.', "I'm a student.") },
              { ko: '저는 리사예요.', tr: l('Я Лиза.', "I'm Lisa.") },
              { ko: '이름이 뭐예요?', tr: l('Как тебя зовут?', "What's your name?") },
            ],
          },
          {
            type: 'tip',
            text: l('С вопросительной интонацией та же форма — уже вопрос: 학생이에요? — «Ты студент?»', 'With a rising tone the same form is a question: 학생이에요? — "Are you a student?"'),
          },
        ],
      },
      {
        title: l('Частица темы 은/는', 'Topic particle 은/는'),
        blocks: [
          { type: 'img', src: p('g-eun'), caption: l('쯔엉은 학생이에요. — Чыонг — студент.', '쯔엉은 학생이에요. — Truong is a student.') },
          {
            type: 'p',
            text: l(
              '은/는 отмечает **тему** предложения — то, о ком или о чём говорим. После согласной — **은**, после гласной — **는**.',
              '은/는 marks the **topic** of the sentence — who or what we are talking about. After a consonant use **은**, after a vowel use **는**.',
            ),
          },
          {
            type: 'table',
            head: [l('Конец слова', 'Noun ends in'), l('Слово', 'Noun'), l('+ 은/는', '+ 은/는')],
            rows: [
              [l('согласная', 'consonant'), '선생님', '선생님은'],
              [l('гласная', 'vowel'), '저', '저는'],
            ],
          },
          {
            type: 'examples',
            items: [
              { ko: '선생님은 한국 사람이에요.', tr: l('Учитель — кореец.', 'The teacher is Korean.') },
              { ko: '지훈 씨는 한국 사람이에요?', tr: l('Чжихун — кореец?', 'Is Jihun Korean?') },
              { ko: '네, 저는 한국 사람이에요.', tr: l('Да, я кореец.', "Yes, I'm Korean.") },
            ],
          },
          {
            type: 'tip',
            text: l('씨 — вежливое «господин/госпожа» после имени: 리사 씨, 지훈 씨. О себе 씨 не говорят.', '씨 is a polite "Mr./Ms." after a name: 리사 씨, 지훈 씨. Never use it about yourself.'),
          },
        ],
      },
      {
        title: l('Слушаем и читаем: знакомство', 'Listening and reading: meeting people'),
        blocks: [
          { type: 'img', src: p('listen'), caption: l('Чыонг и Наташа знакомятся', 'Truong and Natasha meet') },
          {
            type: 'examples',
            items: [
              { ko: '안녕하세요? 저는 쯔엉이에요.', tr: l('Здравствуйте! Я Чыонг.', "Hello! I'm Truong.") },
              { ko: '안녕하세요? 저는 나타샤예요.', tr: l('Здравствуйте! Я Наташа.', "Hello! I'm Natasha.") },
              { ko: '나타샤 씨는 어느 나라 사람이에요?', tr: l('Наташа, вы из какой страны?', 'Natasha, which country are you from?') },
              { ko: '저는 러시아 사람이에요.', tr: l('Я из России.', "I'm from Russia.") },
              { ko: '저는 베트남 사람이에요. 학생이에요.', tr: l('Я из Вьетнама. Я студент.', "I'm from Vietnam. I'm a student.") },
            ],
          },
          { type: 'img', src: p('read'), caption: l('Текст: Ли Чжихун и Лиза', 'Text: Lee Jihun and Lisa') },
        ],
      },
    ],
    vocab: [
      v('한국', 'hanguk', 'Корея', 'Korea', p('korea')),
      v('미국', 'miguk', 'США, Америка', 'the United States', p('usa')),
      v('멕시코', 'meksiko', 'Мексика', 'Mexico', p('mexico')),
      v('러시아', 'reosia', 'Россия', 'Russia', p('russia')),
      v('베트남', 'beteunam', 'Вьетнам', 'Vietnam', p('vietnam')),
      v('중국', 'jungguk', 'Китай', 'China', p('china')),
      v('나라', 'nara', 'страна', 'country', p('country')),
      v('어느', 'eoneu', 'который, какой (из)', 'which', p('which')),
      v('사람', 'saram', 'человек', 'person', p('person')),
      v('선생님', 'seonsaengnim', 'учитель', 'teacher', p('teacher')),
      v('학생', 'haksaeng', 'ученик, студент', 'student', p('student')),
      v('안녕?', 'annyeong', 'привет (другу)', 'hi (to a friend)', p('hello1')),
      v('안녕하세요?', 'annyeonghaseyo', 'здравствуйте', 'hello (polite)', p('hello2')),
      v('안녕하십니까?', 'annyeonghasimnikka', 'здравствуйте (официально)', 'hello (formal)', p('hello3')),
      v('저', 'jeo', 'я (вежливо)', 'I (polite)'),
      v('이름', 'ireum', 'имя', 'name'),
      v('뭐', 'mwo', 'что', 'what'),
      v('씨', 'ssi', 'господин/госпожа (после имени)', 'Mr./Ms. (after a name)'),
      v('친구', 'chingu', 'друг', 'friend'),
      v('영어', 'yeongeo', 'английский язык', 'English'),
      v('네', 'ne', 'да', 'yes'),
    ],
    exercises: [
      /* 0 */ match(l('Соедини страну и перевод', 'Match the country and its name'), [
        ['미국', l('США', 'USA')],
        ['한국', l('Корея', 'Korea')],
        ['러시아', l('Россия', 'Russia')],
        ['중국', l('Китай', 'China')],
        ['베트남', l('Вьетнам', 'Vietnam')],
        ['멕시코', l('Мексика', 'Mexico')],
      ]),
      /* 1 */ listen('베트남', [l('Вьетнам', 'Vietnam'), l('Мексика', 'Mexico'), l('Китай', 'China')], 0),
      /* 2 */ listen('러시아 사람이에요', [l('Он из России.', "He's from Russia."), l('Он из Кореи.', "He's from Korea."), l('Он учитель.', "He's a teacher.")], 0),
      /* 3 */ choice(l('Что сказать учителю при встрече?', 'What do you say to a teacher when you meet?'), ['안녕?', '안녕하세요?', '네'], 1),
      /* 4 */ choice(l('Как поздороваться с близким другом?', 'How do you greet a close friend?'), ['안녕?', '안녕하십니까?', '이름이 뭐예요?'], 0),
      /* 5 */ cloze('이름이 뭐 ___?', l('Как тебя зовут?', "What's your name?"), ['이에요', '예요'], 1, l('뭐 оканчивается на гласную → 예요.', '뭐 ends in a vowel → 예요.')),
      /* 6 */ cloze('저는 학생___.', l('Я студент.', "I'm a student."), ['이에요', '예요'], 0, l('학생 оканчивается на ㅇ (받침) → 이에요.', '학생 ends in ㅇ (받침) → 이에요.')),
      /* 7 */ cloze('저는 리사___.', l('Я Лиза.', "I'm Lisa."), ['이에요', '예요'], 1, l('리사 оканчивается на гласную → 예요.', '리사 ends in a vowel → 예요.')),
      /* 8 */ cloze('저는 베트남 사람___.', l('Я вьетнамец.', "I'm Vietnamese."), ['이에요', '예요'], 0),
      /* 9 */ cloze('동생___ 학생이에요?', l('Младший брат — студент?', 'Is your younger brother a student?'), ['은', '는'], 0, l('동생 оканчивается на ㅇ → 은.', '동생 ends in ㅇ → 은.')),
      /* 10 */ cloze('저___ 지훈이에요.', l('Я Чжихун.', "I'm Jihun."), ['은', '는'], 1, l('저 — гласная → 는.', '저 ends in a vowel → 는.')),
      /* 11 */ cloze('지훈 씨___ 어느 나라 사람이에요?', l('Чжихун, вы из какой страны?', 'Jihun, which country are you from?'), ['은', '는'], 1),
      /* 12 */ cloze('선생님___ 한국 사람이에요.', l('Учитель — кореец.', 'The teacher is Korean.'), ['은', '는'], 0),
      /* 13 */ choice(l('Выбери слово: «Здравствуйте, учитель!» — 선생님, ___?', 'Pick the word: "Hello, teacher!" — 선생님, ___?'), ['안녕하세요', '나라', '학생'], 0),
      /* 14 */ choice(l('어느 ___ 사람이에요? — «Из какой ты страны?»', '어느 ___ 사람이에요? — "Which country are you from?"'), ['나라', '선생님', '이름'], 0),
      /* 15 */ build(l('Собери: «Я из России»', 'Build: "I am from Russia"'), ['저는', '러시아', '사람이에요'], ['학생이에요']),
      /* 16 */ build(l('Собери: «Чжихун, вы из какой страны?»', 'Build: "Jihun, which country are you from?"'), ['지훈', '씨는', '어느', '나라', '사람이에요?']),
      /* 17 */ build(l('Собери: «Лиза — учитель английского»', 'Build: "Lisa is an English teacher"'), ['리사', '씨는', '영어', '선생님이에요']),
      /* 18 */ type(l('Напиши по-корейски: «Я студент.»', 'Write in Korean: "I am a student."'), ['저는 학생이에요', '저는 학생이에요.'], l('저는 + 학생 + 이에요', '저는 + 학생 + 이에요')),
      /* 19 */ dict('한국 사람이에요', '한국 사람이에요', '한국 사람이에요.'),
      /* 20 */ tf('이지훈 씨는 선생님이에요.', false, l('В тексте: 저는 학생이에요 — Чжихун студент.', 'The text says 저는 학생이에요 — Jihun is a student.')),
      /* 21 */ tf('리사 씨는 미국 사람이에요.', true),
      /* 22 */ tf('리사 씨는 이지훈 씨 친구예요.', true),
      /* 23 */ wr('한국', 'Корея', 'Korea'),
      /* 24 */ wr('사람', 'человек', 'person'),
      /* 25 */ wr('학생', 'студент', 'student'),
      /* 26 */ wr('선생님', 'учитель', 'teacher'),
      /* 27 */ wr('나라', 'страна', 'country'),
      /* 28 */ wr('친구', 'друг', 'friend'),
    ],
    dialogue: {
      title: l('Из какой вы страны?', 'Which country are you from?'),
      lines: [
        dl('A', '안녕하세요? 저는 쯔엉이에요.', 'Здравствуйте! Я Чыонг.', "Hello! I'm Truong."),
        dl('B', '안녕하세요? 저는 나타샤예요.', 'Здравствуйте! Я Наташа.', "Hello! I'm Natasha."),
        dl('A', '나타샤 씨는 어느 나라 사람이에요?', 'Наташа, вы из какой страны?', 'Natasha, which country are you from?'),
        dl('B', '저는 러시아 사람이에요. 쯔엉 씨는요?', 'Я из России. А вы, Чыонг?', "I'm from Russia. And you, Truong?"),
        dl('A', '저는 베트남 사람이에요. 학생이에요.', 'Я из Вьетнама. Я студент.', "I'm from Vietnam. I'm a student."),
      ],
    },
    story: {
      title: l('Ли Чжихун и Лиза', 'Lee Jihun and Lisa'),
      sentences: [
        st('안녕하세요? 저는 이지훈이에요.', 'Здравствуйте! Я Ли Чжихун.', "Hello! I'm Lee Jihun.", [['안녕하세요', 'здравствуйте', 'hello'], ['저는', 'я (тема)', 'I (topic)'], ['이지훈', 'Ли Чжихун', 'Lee Jihun'], ['이에요', 'есть', 'am']]),
        st('한국 사람이에요.', 'Я кореец.', "I'm Korean.", [['한국', 'Корея', 'Korea'], ['사람', 'человек', 'person'], ['이에요', 'есть', 'am']]),
        st('저는 학생이에요.', 'Я студент.', "I'm a student.", [['저는', 'я', 'I'], ['학생', 'студент', 'student'], ['이에요', 'есть', 'am']]),
        st('리사 씨예요. 친구예요.', 'Это Лиза. Мой друг.', 'This is Lisa. She is my friend.', [['리사 씨', 'Лиза (вежливо)', 'Lisa (polite)'], ['예요', 'есть', 'is'], ['친구', 'друг', 'friend']]),
        st('미국 사람이에요.', 'Она американка.', "She's American.", [['미국', 'США', 'USA'], ['사람이에요', 'человек есть', 'is a person']]),
        st('리사 씨는 영어 선생님이에요.', 'Лиза — учитель английского.', 'Lisa is an English teacher.', [['리사 씨는', 'Лиза (тема)', 'Lisa (topic)'], ['영어', 'английский', 'English'], ['선생님', 'учитель', 'teacher'], ['이에요', 'есть', 'is']]),
      ],
    },
  },
  exam: [
    listen('안녕하세요', [l('Здравствуйте', 'Hello'), l('Да', 'Yes'), l('Друг', 'Friend')], 0),
    listen('중국 사람이에요', [l('Он из Китая.', "He's from China."), l('Он из Вьетнама.', "He's from Vietnam."), l('Он из США.', "He's from the USA.")], 0),
    listen('저는 선생님이에요', [l('Я учитель.', "I'm a teacher."), l('Я студент.', "I'm a student."), l('Я из Кореи.', "I'm from Korea.")], 0),
    listen('어느 나라 사람이에요?', [l('Из какой вы страны?', 'Which country are you from?'), l('Как вас зовут?', "What's your name?"), l('Вы студент?', 'Are you a student?')], 0),
    dict('학생이에요', '학생이에요', '학생이에요.'),
    dict('저는 멕시코 사람이에요', '저는 멕시코 사람이에요', '저는 멕시코 사람이에요.'),
    match(l('Соедини слово и перевод', 'Match the word and its meaning'), [
      ['나라', l('страна', 'country')],
      ['사람', l('человек', 'person')],
      ['친구', l('друг', 'friend')],
      ['이름', l('имя', 'name')],
      ['영어', l('английский', 'English')],
    ]),
    choice(l('Как вежливо спросить имя?', 'How do you politely ask a name?'), ['이름이 뭐예요?', '어느 나라 사람이에요?', '안녕?'], 0),
    cloze('저는 선생님___.', l('Я учитель.', "I'm a teacher."), ['이에요', '예요'], 0),
    cloze('이름이 뭐___?', l('Как вас зовут?', "What's your name?"), ['이에요', '예요'], 1),
    cloze('나타샤___ 러시아 사람이에요.', l('Наташа из России.', 'Natasha is from Russia.'), ['은', '는'], 1),
    cloze('선생님___ 한국 사람이에요.', l('Учитель — кореец.', 'The teacher is Korean.'), ['은', '는'], 0),
    cloze('저는 쯔엉___.', l('Я Чыонг.', "I'm Truong."), ['이에요', '예요'], 0, l('쯔엉 оканчивается на ㅇ → 이에요.', '쯔엉 ends in ㅇ → 이에요.')),
    choice(l('Какое приветствие самое официальное?', 'Which greeting is the most formal?'), ['안녕?', '안녕하세요?', '안녕하십니까?'], 2),
    build(l('Собери: «Я из Вьетнама»', 'Build: "I am from Vietnam"'), ['저는', '베트남', '사람이에요']),
    build(l('Собери: «Лиза — мой друг»', 'Build: "Lisa is my friend"'), ['리사', '씨는', '친구예요']),
    type(l('Напиши по-корейски: «Я из Кореи.»', 'Write in Korean: "I am from Korea."'), ['저는 한국 사람이에요', '저는 한국 사람이에요.', '한국 사람이에요', '한국 사람이에요.']),
    tf('리사 씨는 영어 선생님이에요.', true),
    tf('이지훈 씨는 미국 사람이에요.', false),
    wr('사람', 'человек', 'person'),
    wr('선생님', 'учитель', 'teacher'),
  ],
};
