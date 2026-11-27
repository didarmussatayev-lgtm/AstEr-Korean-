import type { BookUnit } from './index';
import { build, choice, cloze, dict, dl, l, listen, match, picOf, st, tf, type, v, wr } from './h';

const p = picOf(4);

export const unit: BookUnit = {
  n: 4,
  lesson: {
    emoji: '🏫',
    title: l('Это школа Чжихуна? (여기가 지훈 씨의 학교입니까?)', "Is this Jihun's school? (여기가 지훈 씨의 학교입니까?)"),
    goal: l(
      'Описывать школу и класс: места, 있다/없다, союз «и» 와/과, 하고 и притяжательная частица 의.',
      'Describe a school and a classroom: places, 있다/없다, "and" with 와/과, 하고 and the possessive particle 의.',
    ),
    theory: [
      {
        title: l('Есть / нет: 있다 и 없다', 'There is / there isn\'t: 있다 and 없다'),
        blocks: [
          { type: 'img', src: p('exist'), caption: l('학생이 있습니다. — Есть ученики.', '학생이 있습니다. — There are students.') },
          {
            type: 'p',
            text: l(
              '**있다** — «есть, имеется», **없다** — «нет, отсутствует». Что есть — с частицей 이/가: **학생이 있습니다**.',
              '**있다** means "there is / to have", **없다** means "there isn\'t / not to have". The thing takes 이/가: **학생이 있습니다**.',
            ),
          },
          { type: 'img', src: p('notexist'), caption: l('학생이 없습니다. — Учеников нет.', '학생이 없습니다. — There are no students.') },
          {
            type: 'examples',
            items: [
              { ko: '질문이 있어요.', tr: l('У меня есть вопрос.', 'I have a question.') },
              { ko: '컴퓨터는 없습니다.', tr: l('Компьютера нет.', "There's no computer.") },
              { ko: '학생이 많습니다. 학교가 넓습니다.', tr: l('Учеников много. Школа большая (просторная).', 'There are many students. The school is spacious.') },
            ],
          },
          {
            type: 'tip',
            text: l('재미있다 «интересно» = 재미 «интерес» + 있다. А 재미없다 — «скучно».', '재미있다 "fun" = 재미 "fun" + 있다. And 재미없다 means "boring".'),
          },
        ],
      },
      {
        title: l('Фразы на уроке', 'Classroom phrases'),
        blocks: [
          { type: 'img', src: p('repeat'), caption: l('여러분, 따라 하세요. — Все, повторяйте за мной.', '여러분, 따라 하세요. — Everyone, repeat after me.') },
          { type: 'img', src: p('question'), caption: l('선생님, 질문이 있어요. — Учитель, у меня вопрос.', 'Teacher, I have a question.') },
          { type: 'img', src: p('dontknow'), caption: l('선생님, 잘 모르겠어요. — Учитель, я не понимаю.', "Teacher, I don't understand.") },
          {
            type: 'tip',
            text: l('여기 — «здесь, это место». 여기가 학교입니까? — «Здесь школа?»', '여기 means "here, this place". 여기가 학교입니까? — "Is this a school?"'),
          },
        ],
      },
      {
        title: l('«И»: 와/과 и 하고', '"And": 와/과 and 하고'),
        blocks: [
          { type: 'img', src: p('g-hago'), caption: l('지훈 씨는 형과 누나가 있습니다. = 형하고 누나가…', '지훈 씨는 형과 누나가 있습니다. = 형하고 누나가… — Jihun has an older brother and an older sister.') },
          {
            type: 'p',
            text: l(
              '와/과 и 하고 соединяют **существительные**: «A и B», а ещё «с кем-то». После согласной — **과**, после гласной — **와**. **하고** — одна форма для всех, звучит разговорнее.',
              '와/과 and 하고 join **nouns**: "A and B", and also mean "with someone". After a consonant use **과**, after a vowel use **와**. **하고** has one form for all and is more colloquial.',
            ),
          },
          {
            type: 'table',
            head: [l('Конец слова', 'Noun ends in'), l('Слово', 'Noun'), '와/과', '하고'],
            rows: [
              [l('согласная', 'consonant'), '선생님', '선생님과', '선생님하고'],
              [l('гласная', 'vowel'), '학교', '학교와', '학교하고'],
            ],
          },
          {
            type: 'examples',
            items: [
              { ko: '도서관과 식당이 있습니다.', tr: l('Есть библиотека и столовая.', 'There are a library and a cafeteria.') },
              { ko: '한국어와 영어를 공부합니다.', tr: l('Учу корейский и английский.', 'I study Korean and English.') },
              { ko: '친구와 같이 공부합니다.', tr: l('Занимаюсь вместе с другом.', 'I study together with a friend.') },
            ],
          },
          {
            type: 'tip',
            text: l('Глаголы так не соединяют: «и» между предложениями — это 그리고.', 'Verbs are not joined this way: "and" between sentences is 그리고.'),
          },
        ],
      },
      {
        title: l('Притяжательная частица 의', 'Possessive particle 의'),
        blocks: [
          { type: 'img', src: p('g-ui'), caption: l('선생님의 개가 귀엽습니다. — Собака учителя милая.', "선생님의 개가 귀엽습니다. — The teacher's dog is cute.") },
          {
            type: 'p',
            text: l(
              '의 — как английское «\'s»: **владелец + 의 + предмет**. 지훈 씨의 학교 — «школа Чжихуна». Форма одна для всех слов.',
              '의 works like English "\'s": **owner + 의 + thing**. 지훈 씨의 학교 — "Jihun\'s school". It has one form for all nouns.',
            ),
          },
          {
            type: 'examples',
            items: [
              { ko: '리사 씨의 책상입니다.', tr: l('Это парта Лизы.', "It's Lisa's desk.") },
              { ko: '누구의 가방입니까?', tr: l('Чья это сумка?', 'Whose bag is it?') },
              { ko: '오빠의 직업은 가수입니다.', tr: l('Старший брат по профессии певец.', "My older brother's job is a singer.") },
            ],
          },
          {
            type: 'tip',
            text: l('저의 → 제 «мой», 나의 → 내. В речи 의 часто пропускают: 우리 학교, 지훈 씨 가방. Произносится чаще как [에].', '저의 shortens to 제 "my". In speech 의 is often dropped: 우리 학교, 지훈 씨 가방. It is usually pronounced [에].'),
          },
        ],
      },
      {
        title: l('Слушаем и читаем: школа и класс', 'Listening and reading: school and classroom'),
        blocks: [
          { type: 'img', src: p('listen'), caption: l('Лиза в школе Чжихуна', "Lisa at Jihun's school") },
          { type: 'img', src: p('read'), caption: l('우리 교실입니다. — Наш класс.', '우리 교실입니다. — Our classroom.') },
          {
            type: 'p',
            text: l(
              '이것 — «это (рядом со мной)», 저것 — «вон то». 하지만 — «но, однако».',
              '이것 means "this one", 저것 means "that one over there". 하지만 means "but, however".',
            ),
          },
        ],
      },
    ],
    vocab: [
      v('공부하다', 'gongbuhada', 'учиться, заниматься', 'to study', p('study')),
      v('만나다', 'mannada', 'встречаться', 'to meet', p('meet')),
      v('학교', 'hakgyo', 'школа', 'school', p('school')),
      v('교실', 'gyosil', 'класс (комната)', 'classroom', p('classroom')),
      v('도서관', 'doseogwan', 'библиотека', 'library', p('library')),
      v('건물', 'geonmul', 'здание', 'building', p('building')),
      v('식당', 'sikdang', 'столовая, ресторан', 'restaurant, cafeteria', p('restaurant')),
      v('있다', 'itda', 'есть, иметься', 'there is, to have', p('exist')),
      v('없다', 'eopda', 'нет, не иметься', "there isn't, not to have", p('notexist')),
      v('많다', 'manta', 'много', 'to be many', p('many')),
      v('넓다', 'neolda', 'просторный, широкий', 'to be wide, spacious', p('wide')),
      v('따라 하세요', 'ttara haseyo', 'повторяйте за мной', 'repeat after me', p('repeat')),
      v('질문', 'jilmun', 'вопрос', 'question', p('question')),
      v('모르다', 'moreuda', 'не знать', "not to know", p('dontknow')),
      v('여기', 'yeogi', 'здесь', 'here'),
      v('같이', 'gachi', 'вместе', 'together'),
      v('누구', 'nugu', 'кто', 'who'),
      v('책상', 'chaeksang', 'письменный стол, парта', 'desk', p('desk')),
      v('의자', 'uija', 'стул', 'chair', p('chair')),
      v('칠판', 'chilpan', 'доска', 'blackboard', p('blackboard')),
      v('시계', 'sigye', 'часы', 'clock, watch', p('clock')),
      v('지도', 'jido', 'карта', 'map', p('map')),
      v('컴퓨터', 'keompyuteo', 'компьютер', 'computer', p('computer')),
      v('이것', 'igeot', 'это', 'this (thing)'),
      v('저것', 'jeogeot', 'вон то', 'that (thing over there)'),
      v('하지만', 'hajiman', 'но, однако', 'but, however'),
    ],
    exercises: [
      /* 0 */ match(l('Соедини место и перевод', 'Match the places'), [
        ['도서관', l('библиотека', 'library')],
        ['학교', l('школа', 'school')],
        ['교실', l('класс', 'classroom')],
        ['식당', l('столовая', 'cafeteria')],
      ]),
      /* 1 */ listen('건물', [l('здание', 'building'), l('класс', 'classroom'), l('школа', 'school')], 0),
      /* 2 */ choice(l('Противоположность 있다:', 'The opposite of 있다:'), ['없다', '많다', '넓다'], 0),
      /* 3 */ choice(l('Выбери: 한국어를 ___. (учу)', 'Pick: 한국어를 ___. (I study)'), ['공부합니다', '만납니다', '넓습니다'], 0),
      /* 4 */ choice(l('Выбери: 나타샤 씨를 ___. (встречаю)', 'Pick: 나타샤 씨를 ___. (I meet)'), ['만납니다', '많습니다', '공부합니다'], 0),
      /* 5 */ choice(l('Учитель просит повторить. Что он говорит?', 'The teacher wants you to repeat. What does she say?'), ['따라 하세요', '질문이 있어요', '잘 모르겠어요'], 0),
      /* 6 */ choice(l('Ты не понял объяснение. Что скажешь?', "You didn't understand. What do you say?"), ['잘 모르겠어요', '따라 하세요', '만나서 반갑습니다'], 0),
      /* 7 */ cloze('도서관___ 식당이 있습니다.', l('Есть библиотека и столовая.', 'There are a library and a cafeteria.'), ['과', '와'], 0, l('도서관 оканчивается на ㄴ → 과.', '도서관 ends in ㄴ → 과.')),
      /* 8 */ cloze('나타샤 씨___ 리사 씨를 만납니다.', l('Встречаю Наташу и Лизу.', 'I meet Natasha and Lisa.'), ['와', '과'], 0),
      /* 9 */ cloze('한국어___ 영어를 공부합니다.', l('Учу корейский и английский.', 'I study Korean and English.'), ['와', '과'], 0),
      /* 10 */ cloze('저는 형___ 누나가 있습니다.', l('У меня есть старший брат и старшая сестра.', 'I have an older brother and an older sister.'), ['하고', '의'], 0),
      /* 11 */ cloze('나타샤 씨___ 오빠는 회사원입니까?', l('Старший брат Наташи — офисный работник?', "Is Natasha's older brother an office worker?"), ['의', '와'], 0),
      /* 12 */ cloze('누구___ 가방입니까?', l('Чья это сумка?', 'Whose bag is it?'), ['의', '하고'], 0),
      /* 13 */ cloze('수미 씨___ 직업이 뭐예요?', l('Кем работает Суми?', "What is Sumi's job?"), ['하고', '의'], 1),
      /* 14 */ build(l('Собери: «Это парта Лизы»', 'Build: "This is Lisa\'s desk"'), ['이것은', '리사', '씨의', '책상입니다']),
      /* 15 */ build(l('Собери: «Учусь вместе с другом»', 'Build: "I study together with a friend"'), ['친구와', '같이', '공부합니다']),
      /* 16 */ type(l('Напиши «мой» (вежливо, коротко от 저의)', 'Write "my" (polite, short for 저의)'), ['제']),
      /* 17 */ listen('도서관입니다', [l('Это библиотека.', "It's a library."), l('Это столовая.', "It's a cafeteria."), l('Это класс.', "It's a classroom.")], 0),
      /* 18 */ choice(l('Диалог: «저 건물은 무엇입니까?» — ответ Чжихуна:', 'Dialogue: "저 건물은 무엇입니까?" — Jihun answers:'), ['도서관입니다.', '식당입니다.', '교실입니다.'], 0),
      /* 19 */ tf('지훈 씨의 학교가 좋습니다.', true),
      /* 20 */ tf('여기는 리사 씨의 학교입니다.', false, l('Это школа Чжихуна: 네, 우리 학교입니다.', "It's Jihun's school: 네, 우리 학교입니다.")),
      /* 21 */ dict('질문이 있어요', '질문이 있어요', '질문이 있어요.'),
      /* 22 */ tf('교실에 컴퓨터가 있습니다.', false, l('В тексте: 하지만 컴퓨터는 없습니다.', 'The text says 하지만 컴퓨터는 없습니다.')),
      /* 23 */ tf('교실에 시계하고 지도가 있습니다.', true),
      /* 24 */ tf('교실이 넓습니다.', true),
      /* 25 */ match(l('Соедини предмет и перевод', 'Match the objects'), [
        ['책상', l('парта', 'desk')],
        ['의자', l('стул', 'chair')],
        ['칠판', l('доска', 'blackboard')],
        ['시계', l('часы', 'clock')],
        ['지도', l('карта', 'map')],
      ]),
      /* 26 */ wr('학교', 'школа', 'school'),
      /* 27 */ wr('교실', 'класс', 'classroom'),
      /* 28 */ wr('도서관', 'библиотека', 'library'),
      /* 29 */ wr('책상', 'парта', 'desk'),
      /* 30 */ wr('공부하다', 'учиться', 'to study'),
      /* 31 */ wr('친구', 'друг', 'friend'),
    ],
    dialogue: {
      title: l('Это ваша школа?', 'Is this your school?'),
      lines: [
        dl('A', '여기가 지훈 씨의 학교입니까?', 'Здесь ваша школа, Чжихун?', 'Is this your school, Jihun?'),
        dl('B', '네, 우리 학교입니다.', 'Да, это наша школа.', 'Yes, this is our school.'),
        dl('A', '학교가 좋습니다. 저 건물은 무엇입니까?', 'Хорошая школа. А что это за здание?', 'The school is nice. What is that building?'),
        dl('B', '도서관입니다. 저는 도서관에서 친구를 만납니다.', 'Это библиотека. Я встречаюсь там с другом.', "It's the library. I meet my friend there."),
        dl('B', '친구와 같이 공부합니다.', 'Мы вместе занимаемся.', 'We study together.'),
      ],
    },
    story: {
      title: l('Наш класс', 'Our classroom'),
      sentences: [
        st('우리 교실입니다. 교실이 넓습니다.', 'Это наш класс. Класс просторный.', 'This is our classroom. It is spacious.', [['우리', 'наш', 'our'], ['교실', 'класс', 'classroom'], ['넓습니다', 'просторный', 'is spacious']]),
        st('책상하고 의자가 많습니다.', 'Много парт и стульев.', 'There are many desks and chairs.', [['책상하고', 'парты и', 'desks and'], ['의자가', 'стулья', 'chairs'], ['많습니다', 'много', 'are many']]),
        st('칠판이 있습니다.', 'Есть доска.', 'There is a blackboard.', [['칠판이', 'доска', 'blackboard'], ['있습니다', 'есть', 'there is']]),
        st('그리고 시계하고 지도도 있습니다.', 'А ещё есть часы и карта.', 'And there are also a clock and a map.', [['그리고', 'и', 'and'], ['시계하고', 'часы и', 'a clock and'], ['지도도', 'и карта тоже', 'a map too'], ['있습니다', 'есть', 'there are']]),
        st('하지만 컴퓨터는 없습니다.', 'Но компьютера нет.', "But there's no computer.", [['하지만', 'но', 'but'], ['컴퓨터는', 'компьютер', 'computer'], ['없습니다', 'нет', "there isn't"]]),
        st('이것은 제 책상입니다. 저것은 리사 씨의 책상입니다.', 'Это моя парта. А вон то — парта Лизы.', "This is my desk. That is Lisa's desk.", [['이것은', 'это', 'this'], ['제', 'мой', 'my'], ['저것은', 'вон то', 'that'], ['리사 씨의', 'Лизы', "Lisa's"]]),
        st('저와 리사 씨는 한국어를 공부합니다.', 'Мы с Лизой учим корейский.', 'Lisa and I study Korean.', [['저와', 'я и', 'I and'], ['리사 씨는', 'Лиза', 'Lisa'], ['한국어를', 'корейский', 'Korean'], ['공부합니다', 'учим', 'study']]),
      ],
    },
  },
  exam: [
    listen('식당', [l('столовая', 'cafeteria'), l('библиотека', 'library'), l('здание', 'building')], 0),
    listen('학생이 많습니다', [l('Учеников много.', 'There are many students.'), l('Учеников нет.', 'There are no students.'), l('Школа большая.', 'The school is big.')], 0),
    listen('누구의 가방입니까?', [l('Чья это сумка?', 'Whose bag is it?'), l('Где сумка?', 'Where is the bag?'), l('Это сумка?', 'Is it a bag?')], 0),
    listen('잘 모르겠어요', [l('Я не понимаю.', "I don't understand."), l('У меня вопрос.', 'I have a question.'), l('Повторяйте.', 'Repeat after me.')], 0),
    dict('교실이 넓습니다', '교실이 넓습니다', '교실이 넓습니다.'),
    dict('시계하고 지도', '시계하고 지도'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['컴퓨터', l('компьютер', 'computer')],
      ['건물', l('здание', 'building')],
      ['질문', l('вопрос', 'question')],
      ['같이', l('вместе', 'together')],
      ['여기', l('здесь', 'here')],
    ]),
    cloze('책상___ 의자가 있습니다.', l('Есть парта и стул.', 'There are a desk and a chair.'), ['과', '와'], 0),
    cloze('의자___ 책상이 있습니다.', l('Есть стул и парта.', 'There are a chair and a desk.'), ['과', '와'], 1),
    cloze('선생님___ 개가 귀엽습니다.', l('Собака учителя милая.', "The teacher's dog is cute."), ['의', '과'], 0),
    cloze('컴퓨터가 ___. (нет)', l('Компьютера нет.', "There's no computer."), ['없습니다', '있습니다', '많습니다'], 0),
    choice(l('Как коротко сказать «저의 책상»?', 'How to shorten "저의 책상"?'), ['제 책상', '저 책상', '내 책상'], 0),
    choice(l('«Учитель, у меня вопрос»:', '"Teacher, I have a question":'), ['선생님, 질문이 있어요.', '선생님, 따라 하세요.', '선생님, 잘 모르겠어요.'], 0),
    build(l('Собери: «Есть часы и карта»', 'Build: "There are a clock and a map"'), ['시계하고', '지도가', '있습니다']),
    build(l('Собери: «Здесь школа Чжихуна?»', 'Build: "Is this Jihun\'s school?"'), ['여기가', '지훈', '씨의', '학교입니까?']),
    type(l('Напиши по-корейски: «библиотека»', 'Write in Korean: "library"'), ['도서관']),
    tf('지훈 씨는 친구와 같이 공부합니다.', true),
    tf('교실에 칠판이 없습니다.', false),
    wr('교실', 'класс', 'classroom'),
    wr('시계', 'часы', 'clock'),
  ],
};
