import type { BookUnit } from './index';
import { build, choice, cloze, dict, dl, l, listen, match, picOf, st, tf, type, v, wr } from './h';

const p = picOf(2);

export const unit: BookUnit = {
  n: 2,
  lesson: {
    emoji: '👨‍👩‍👧',
    title: l('Я не офисный работник (회사원이 아니에요)', "I'm not an office worker (회사원이 아니에요)"),
    goal: l(
      'Рассказывать о семье и профессиях: частица подлежащего 이/가 и отрицание 이/가 아니에요.',
      'Talk about your family and jobs: the subject particle 이/가 and the negation 이/가 아니에요.',
    ),
    theory: [
      {
        title: l('Семья: кто есть кто', 'Family: who is who'),
        blocks: [
          {
            type: 'p',
            text: l(
              'Старших братьев и сестёр в корейском называют по-разному **в зависимости от того, кто говорит** — мужчина или женщина.',
              'Older brothers and sisters have different names **depending on who is speaking** — a man or a woman.',
            ),
          },
          {
            type: 'table',
            head: [l('', ''), l('говорит мужчина', 'a man says'), l('говорит женщина', 'a woman says')],
            rows: [
              [l('старшая сестра', 'older sister'), '누나', '언니'],
              [l('старший брат', 'older brother'), '형', '오빠'],
              [l('младший брат / сестра', 'younger brother / sister'), '동생', '동생'],
            ],
          },
          {
            type: 'tip',
            text: l('동생 — и младший брат, и младшая сестра. Корейцы часто так обращаются и к друзьям: 형, 언니, 오빠 — не только родным.', '동생 means both younger brother and younger sister. Koreans also call friends 형, 언니, 오빠 — not only relatives.'),
          },
          { type: 'img', src: p('family'), caption: l('우리 가족이에요. — Это моя семья.', '우리 가족이에요. — This is my family.') },
          {
            type: 'examples',
            items: [
              { ko: '여기는 우리 가족이에요.', tr: l('Это моя семья.', 'This is my family.') },
              { ko: '안녕하세요? 만나서 반갑습니다.', tr: l('Здравствуйте! Рад познакомиться.', 'Hello! Nice to meet you.') },
              { ko: '직업이 뭐예요?', tr: l('Кем вы работаете?', "What's your job?") },
              { ko: '저는 회사원이에요.', tr: l('Я офисный работник.', "I'm an office worker.") },
            ],
          },
        ],
      },
      {
        title: l('Частица подлежащего 이/가', 'Subject particle 이/가'),
        blocks: [
          { type: 'img', src: p('g-i'), caption: l('동생이 학생이에요. — Младший брат — студент.', '동생이 학생이에요. — My younger brother is a student.') },
          {
            type: 'p',
            text: l(
              '이/가 отмечает **подлежащее** — того, кто «есть» или действует. После согласной — **이**, после гласной — **가**.',
              '이/가 marks the **subject** — who "is" or does something. After a consonant use **이**, after a vowel use **가**.',
            ),
          },
          {
            type: 'table',
            head: [l('Конец слова', 'Noun ends in'), l('Слово', 'Noun'), l('+ 이/가', '+ 이/가')],
            rows: [
              [l('согласная (받침 ○)', 'consonant (받침 ○)'), '동생', '동생이'],
              [l('гласная (받침 ×)', 'vowel (받침 ×)'), '누나', '누나가'],
            ],
          },
          {
            type: 'examples',
            items: [
              { ko: '이름이 뭐예요?', tr: l('Как тебя зовут? (букв. «имя — что?»)', "What's your name? (lit. \"the name is what?\")") },
              { ko: '언니가 학생이에요?', tr: l('Твоя старшая сестра — студентка?', 'Is your older sister a student?') },
              { ko: '어머니가 회사원이에요.', tr: l('Мама — офисный работник.', 'My mother is an office worker.') },
            ],
          },
          {
            type: 'tip',
            text: l('В вопросах «кто? что?» и при первом упоминании чаще 이/가, а 은/는 — когда говорим «а что касается…».', 'In "who/what" questions and with new information 이/가 is used; 은/는 means "as for…".'),
          },
        ],
      },
      {
        title: l('Отрицание: 이/가 아니에요', 'Negation: 이/가 아니에요'),
        blocks: [
          { type: 'img', src: p('g-ani'), caption: l('저는 한국 사람이 아니에요. 미국 사람이에요.', "저는 한국 사람이 아니에요. 미국 사람이에요. — I'm not Korean. I'm American.") },
          {
            type: 'p',
            text: l(
              '«Не является» — **существительное + 이/가 아니에요**. Это отрицание к 이에요/예요.',
              '"Is not" is **noun + 이/가 아니에요** — the negative of 이에요/예요.',
            ),
          },
          {
            type: 'table',
            head: [l('Конец слова', 'Noun ends in'), l('Слово', 'Noun'), l('+ 이/가 아니에요', '+ 이/가 아니에요')],
            rows: [
              [l('согласная', 'consonant'), '사람', '사람이 아니에요'],
              [l('гласная', 'vowel'), '누나', '누나가 아니에요'],
            ],
          },
          {
            type: 'examples',
            items: [
              { ko: '미국 사람이 아니에요. 러시아 사람이에요.', tr: l('Не американка. Россиянка.', "She isn't American. She's Russian.") },
              { ko: '회사원이 아니에요. 의사예요.', tr: l('Он не офисный работник. Он врач.', "He isn't an office worker. He's a doctor.") },
              { ko: '배우가 아니에요. 가수예요.', tr: l('Не актёр. Певец.', "Not an actor. A singer.") },
            ],
          },
        ],
      },
      {
        title: l('Слушаем и читаем: моя семья', 'Listening and reading: my family'),
        blocks: [
          { type: 'img', src: p('listen'), caption: l('Чжихун показывает фото семьи', 'Jihun shows a family photo') },
          { type: 'img', src: p('jobs4'), caption: l('Кем работает старшая сестра Чжихуна? (Ответ: ① 회사원)', "What is Jihun's older sister's job? (Answer: ① 회사원)") },
          { type: 'img', src: p('read'), caption: l('제 가족 사진이에요. — Это фото моей семьи.', '제 가족 사진이에요. — This is my family photo.') },
          {
            type: 'tip',
            text: l('그리고 — «и, а также» в начале предложения. 제 — «мой» (вежливо, от 저).', '그리고 means "and" at the start of a sentence. 제 means "my" (polite, from 저).'),
          },
        ],
      },
    ],
    vocab: [
      v('가족', 'gajok', 'семья', 'family', p('family')),
      v('아버지', 'abeoji', 'отец', 'father', p('father')),
      v('어머니', 'eomeoni', 'мать', 'mother', p('mother')),
      v('부모님', 'bumonim', 'родители', 'parents'),
      v('동생', 'dongsaeng', 'младший брат / сестра', 'younger brother / sister', p('sibling')),
      v('언니', 'eonni', 'старшая сестра (для женщины)', "older sister (a woman's)", p('eonni')),
      v('누나', 'nuna', 'старшая сестра (для мужчины)', "older sister (a man's)", p('nuna')),
      v('오빠', 'oppa', 'старший брат (для женщины)', "older brother (a woman's)", p('oppa')),
      v('형', 'hyeong', 'старший брат (для мужчины)', "older brother (a man's)", p('hyeong')),
      v('직업', 'jigeop', 'профессия, работа', 'job, occupation', p('job')),
      v('가수', 'gasu', 'певец, певица', 'singer', p('singer')),
      v('배우', 'baeu', 'актёр, актриса', 'actor', p('actor')),
      v('회사원', 'hoesawon', 'офисный работник', 'office worker', p('officeworker')),
      v('의사', 'uisa', 'врач', 'doctor', p('doctor')),
      v('대학생', 'daehaksaeng', 'студент университета', 'university student', p('univ')),
      v('우리', 'uri', 'мы, наш', 'we, our'),
      v('제', 'je', 'мой (вежливо)', 'my (polite)'),
      v('이', 'i', 'этот', 'this'),
      v('사진', 'sajin', 'фотография', 'picture, photo'),
      v('그리고', 'geurigo', 'и, а также', 'and'),
      v('아니요', 'aniyo', 'нет', 'no'),
      v('만나서 반갑습니다', 'mannaseo bangapseumnida', 'рад познакомиться', 'nice to meet you', p('name')),
    ],
    exercises: [
      /* 0 */ match(l('Соедини родственника и перевод', 'Match the family member'), [
        ['아버지', l('отец', 'father')],
        ['어머니', l('мать', 'mother')],
        ['동생', l('младший брат/сестра', 'younger sibling')],
        ['부모님', l('родители', 'parents')],
      ]),
      /* 1 */ choice(l('Мужчина говорит о старшей сестре. Какое слово?', 'A man talks about his older sister. Which word?'), ['언니', '누나', '오빠', '형'], 1),
      /* 2 */ choice(l('Женщина говорит о старшем брате. Какое слово?', 'A woman talks about her older brother. Which word?'), ['형', '누나', '오빠', '동생'], 2),
      /* 3 */ choice(l('Женщина говорит о старшей сестре. Какое слово?', 'A woman talks about her older sister. Which word?'), ['언니', '누나', '형', '오빠'], 0),
      /* 4 */ match(l('Соедини профессию и перевод', 'Match the job'), [
        ['가수', l('певец', 'singer')],
        ['배우', l('актёр', 'actor')],
        ['회사원', l('офисный работник', 'office worker')],
        ['의사', l('врач', 'doctor')],
      ]),
      /* 5 */ listen('의사예요', [l('Врач', 'A doctor'), l('Певец', 'A singer'), l('Актёр', 'An actor')], 0),
      /* 6 */ cloze('이름___ 뭐예요?', l('Как тебя зовут?', "What's your name?"), ['이', '가'], 0, l('이름 оканчивается на ㅁ → 이.', '이름 ends in ㅁ → 이.')),
      /* 7 */ cloze('라라 씨, 언니___ 학생이에요?', l('Лара, твоя старшая сестра — студентка?', 'Lara, is your older sister a student?'), ['이', '가'], 1, l('언니 — гласная → 가.', '언니 ends in a vowel → 가.')),
      /* 8 */ cloze('동생___ 선생님이에요?', l('Младший брат — учитель?', 'Is your younger brother a teacher?'), ['이', '가'], 0),
      /* 9 */ cloze('어머니___ 회사원이에요?', l('Мама — офисный работник?', 'Is your mother an office worker?'), ['이', '가'], 1),
      /* 10 */ cloze('직업___ 뭐예요?', l('Кем вы работаете?', "What's your job?"), ['이', '가'], 0),
      /* 11 */ cloze('저는 한국 사람___ 아니에요.', l('Я не кореец.', "I'm not Korean."), ['이', '가'], 0),
      /* 12 */ cloze('언니___ 아니에요.', l('Это не старшая сестра.', "She isn't my older sister."), ['이', '가'], 1),
      /* 13 */ cloze('나: 미국 사람이 ___. 러시아 사람이에요.', l('Она не американка. Она россиянка.', "She isn't American. She's Russian."), ['아니에요', '이에요', '예요'], 0),
      /* 14 */ cloze('회사원이 아니에요. 의사___.', l('Не офисный работник. Врач.', "Not an office worker. A doctor."), ['이에요', '예요'], 1),
      /* 15 */ build(l('Собери: «Я не певица. Я актриса.»', 'Build: "I\'m not a singer. I\'m an actress."'), ['저는', '가수가', '아니에요.', '배우예요.']),
      /* 16 */ build(l('Собери: «Это моя семья»', 'Build: "This is my family"'), ['여기는', '우리', '가족이에요']),
      /* 17 */ type(l('Напиши: «Я не офисный работник.» (저는 …)', 'Write: "I\'m not an office worker." (저는 …)'), ['저는 회사원이 아니에요', '저는 회사원이 아니에요.']),
      /* 18 */ listen('누나가 회사원이에요', [l('Старшая сестра — офисный работник.', 'My older sister is an office worker.'), l('Младшая сестра — врач.', 'My younger sister is a doctor.'), l('Мама — певица.', 'My mother is a singer.')], 0),
      /* 19 */ choice(l('Диалог: «이 사람이 동생이에요?» — что ответил Чжихун?', 'Dialogue: "이 사람이 동생이에요?" — what did Jihun answer?'), ['네, 부모님이에요.', '아니요, 동생이 아니에요. 누나예요.', '네, 가수예요.'], 1),
      /* 20 */ dict('우리 가족이에요', '우리 가족이에요', '우리 가족이에요.'),
      /* 21 */ tf('저는 대학생이 아니에요.', false, l('В тексте: 저는 대학생이에요.', 'The text says 저는 대학생이에요.')),
      /* 22 */ tf('아버지는 회사원이에요.', true),
      /* 23 */ tf('우리 가족은 부모님, 동생, 저예요.', false, l('Семья: отец, мать и я — младшего брата нет.', 'The family is father, mother and me — no younger sibling.')),
      /* 24 */ tf('어머니는 가수예요.', false, l('어머니는 배우예요. 가수가 아니에요.', '어머니는 배우예요. 가수가 아니에요.')),
      /* 25 */ wr('가족', 'семья', 'family'),
      /* 26 */ wr('아버지', 'отец', 'father'),
      /* 27 */ wr('어머니', 'мать', 'mother'),
      /* 28 */ wr('동생', 'младший брат/сестра', 'younger sibling'),
      /* 29 */ wr('회사원', 'офисный работник', 'office worker'),
      /* 30 */ wr('의사', 'врач', 'doctor'),
    ],
    dialogue: {
      title: l('Это моя семья', 'This is my family'),
      lines: [
        dl('A', '우리 가족이에요. 제 부모님이에요.', 'Это моя семья. Мои родители.', 'This is my family. My parents.'),
        dl('B', '이 사람이 동생이에요?', 'Это младший брат?', 'Is this your younger brother?'),
        dl('A', '아니요. 그 사람은 동생이 아니에요. 누나예요.', 'Нет. Это не младший брат. Это старшая сестра.', "No. That's not my younger brother. It's my older sister."),
        dl('B', '누나는 회사원이에요?', 'Старшая сестра — офисный работник?', 'Is your older sister an office worker?'),
        dl('A', '네, 회사원이에요.', 'Да, офисный работник.', "Yes, she's an office worker."),
      ],
    },
    story: {
      title: l('Фото моей семьи', 'My family photo'),
      sentences: [
        st('제 가족 사진이에요.', 'Это фото моей семьи.', 'This is my family photo.', [['제', 'мой', 'my'], ['가족', 'семья', 'family'], ['사진', 'фото', 'photo'], ['이에요', 'есть', 'is']]),
        st('우리 가족은 아버지, 어머니, 저예요.', 'Моя семья — это отец, мать и я.', 'My family is my father, my mother and me.', [['우리 가족은', 'наша семья (тема)', 'our family (topic)'], ['아버지', 'отец', 'father'], ['어머니', 'мать', 'mother'], ['저예요', 'я есть', 'is me']]),
        st('이 사람이 제 아버지예요.', 'Этот человек — мой отец.', 'This person is my father.', [['이 사람이', 'этот человек (подлежащее)', 'this person (subject)'], ['제 아버지', 'мой отец', 'my father'], ['예요', 'есть', 'is']]),
        st('아버지는 회사원이에요.', 'Отец — офисный работник.', 'My father is an office worker.', [['아버지는', 'отец (тема)', 'father (topic)'], ['회사원', 'офисный работник', 'office worker'], ['이에요', 'есть', 'is']]),
        st('그리고 이 사람은 어머니예요.', 'А это мама.', 'And this is my mother.', [['그리고', 'и', 'and'], ['이 사람은', 'этот человек', 'this person'], ['어머니예요', 'мама есть', 'is mother']]),
        st('어머니는 배우예요. 가수가 아니에요.', 'Мама — актриса. Не певица.', "My mother is an actress. She isn't a singer.", [['배우', 'актриса', 'actress'], ['가수가', 'певица (подлежащее)', 'singer (subject)'], ['아니에요', 'не является', 'is not']]),
        st('저는 대학생이에요. 회사원이 아니에요.', 'Я студент. Не офисный работник.', "I'm a university student. I'm not an office worker.", [['대학생', 'студент', 'university student'], ['회사원이', 'офисный работник', 'office worker'], ['아니에요', 'не являюсь', 'am not']]),
      ],
    },
  },
  exam: [
    listen('아버지', [l('отец', 'father'), l('мать', 'mother'), l('родители', 'parents')], 0),
    listen('언니가 가수예요', [l('Старшая сестра — певица.', 'My older sister is a singer.'), l('Старший брат — актёр.', 'My older brother is an actor.'), l('Младший брат — студент.', 'My younger brother is a student.')], 0),
    listen('저는 의사가 아니에요', [l('Я не врач.', "I'm not a doctor."), l('Я врач.', "I'm a doctor."), l('Я не певец.', "I'm not a singer.")], 0),
    listen('직업이 뭐예요?', [l('Кем вы работаете?', "What's your job?"), l('Как вас зовут?', "What's your name?"), l('Из какой вы страны?', 'Where are you from?')], 0),
    dict('회사원이에요', '회사원이에요', '회사원이에요.'),
    dict('형이 배우예요', '형이 배우예요', '형이 배우예요.'),
    match(l('Соедини слово и перевод', 'Match the words'), [
      ['가족', l('семья', 'family')],
      ['사진', l('фото', 'photo')],
      ['직업', l('профессия', 'job')],
      ['배우', l('актёр', 'actor')],
      ['대학생', l('студент вуза', 'university student')],
    ]),
    choice(l('Мужчина говорит о старшем брате:', 'A man talks about his older brother:'), ['오빠', '형', '누나', '언니'], 1),
    choice(l('Женщина говорит о старшем брате:', 'A woman talks about her older brother:'), ['오빠', '형', '누나', '동생'], 0),
    cloze('누나___ 회사원이에요.', l('Старшая сестра — офисный работник.', 'My older sister is an office worker.'), ['이', '가'], 1),
    cloze('동생___ 학생이에요.', l('Младший брат — студент.', 'My younger brother is a student.'), ['이', '가'], 0),
    cloze('저는 가수___ 아니에요.', l('Я не певец.', "I'm not a singer."), ['이', '가'], 1),
    cloze('저는 선생님___ 아니에요.', l('Я не учитель.', "I'm not a teacher."), ['이', '가'], 0),
    cloze('직업이 뭐___?', l('Кем вы работаете?', "What's your job?"), ['이에요', '예요'], 1),
    choice(l('Что значит «만나서 반갑습니다»?', 'What does "만나서 반갑습니다" mean?'), [l('Рад познакомиться', 'Nice to meet you'), l('До свидания', 'Goodbye'), l('Спасибо', 'Thank you')], 0),
    build(l('Собери: «Отец не врач»', 'Build: "My father is not a doctor"'), ['아버지는', '의사가', '아니에요']),
    build(l('Собери: «Это фото моей семьи»', 'Build: "This is my family photo"'), ['제', '가족', '사진이에요']),
    type(l('Напиши: «Я не студент.» (저는 …)', 'Write: "I\'m not a student." (저는 …)'), ['저는 학생이 아니에요', '저는 학생이 아니에요.']),
    tf('어머니는 배우예요.', true),
    tf('저는 회사원이에요.', false),
    wr('가족', 'семья', 'family'),
    wr('회사원', 'офисный работник', 'office worker'),
  ],
};
