import type { Exam } from '../lib/types';
import { l } from './helpers';

const passage = '저는 안나예요. 카자흐스탄에서 왔어요. 스무 살이에요. 학생이에요. 어제 도서관에서 한국어를 공부했어요. 내일은 친구를 만날 거예요.';

export const exams: Exam[] = [
  {
    id: 'exam-l1',
    level: 1,
    title: l('Экзамен уровня 1', 'Level 1 exam'),
    exercises: [
      // listening
      { type: 'listen', say: '안녕하세요', options: [l('здравствуйте', 'hello'), l('спасибо', 'thank you'), l('до свидания', 'goodbye')], answer: 0 },
      { type: 'listen', say: '팔', options: [l('6', '6'), l('7', '7'), l('8', '8')], answer: 2 },
      { type: 'listen', say: '여섯', options: [l('4', '4'), l('6', '6'), l('9', '9')], answer: 1 },
      // lessons 1–2
      { type: 'choice', prompt: l('Ты уходишь, а собеседник остаётся. Что сказать?', 'You are leaving and the other person stays. What do you say?'), options: ['안녕히 가세요', '안녕히 계세요', '안녕하세요'], answer: 1 },
      { type: 'cloze', sentence: '저는 안나___.', options: ['예요', '이에요'], answer: 0 },
      { type: 'cloze', sentence: '선생님___ 한국 사람이에요.', options: ['은', '는'], answer: 0 },
      { type: 'tf', statement: l('Правильно: 선생님는 한국 사람이에요.', 'Correct: 선생님는 한국 사람이에요.'), answer: false },
      // numbers
      { type: 'choice', prompt: l('Как сказать 25?', 'How do you say 25?'), options: ['이십오', '오십이', '이오십'], answer: 0 },
      { type: 'type', prompt: l('Напиши словами: «5 000 вон»', 'Write in words: "5,000 won"'), answers: ['오천 원', '오천원'] },
      { type: 'cloze', sentence: '사과 ___ 개 (3 яблока)', options: ['삼', '세', '셋'], answer: 1 },
      { type: 'type', prompt: l('Напиши по-корейски: «7 часов»', 'Write in Korean: "7 o\'clock"'), answers: ['일곱 시', '일곱시'] },
      // lesson 5: things
      { type: 'match', prompt: l('Соедини слова и переводы', 'Match the words and meanings'), pairs: [{ ko: '책', tr: l('книга', 'book') }, { ko: '가방', tr: l('сумка', 'bag') }, { ko: '물', tr: l('вода', 'water') }, { ko: '커피', tr: l('кофе', 'coffee') }] },
      { type: 'cloze', sentence: '책___ 아니에요.', options: ['이', '가'], answer: 0 },
      // lesson 6: verbs
      { type: 'choice', prompt: l('먹다 в вежливой форме:', 'Polite form of 먹다:'), options: ['먹아요', '먹어요', '먹해요'], answer: 1 },
      { type: 'choice', prompt: l('보다 в вежливой форме:', 'Polite form of 보다:'), options: ['보아요', '봐요', '보요'], answer: 1 },
      { type: 'cloze', sentence: '밥___ 먹어요.', options: ['을', '를'], answer: 0 },
      // lesson 7: places
      { type: 'cloze', sentence: '도서관___ 공부해요.', options: ['에', '에서'], answer: 1 },
      { type: 'cloze', sentence: '학교___ 가요.', options: ['에', '에서'], answer: 0 },
      { type: 'build', prompt: l('Собери: «Я иду в школу»', 'Build: "I am going to school"'), tokens: ['가요', '학교에', '저는'], answer: ['저는', '학교에', '가요'] },
      // reading
      { type: 'choice', passage, prompt: l('Откуда Анна?', 'Where is Anna from?'), options: [l('из Кореи', 'from Korea'), l('из Казахстана', 'from Kazakhstan'), l('из России', 'from Russia')], answer: 1 },
      { type: 'choice', passage, prompt: l('Сколько лет Анне?', 'How old is Anna?'), options: [l('12', '12'), l('20', '20'), l('30', '30')], answer: 1 },
      { type: 'choice', passage, prompt: l('Что Анна сделала вчера?', 'What did Anna do yesterday?'), options: [l('занималась в библиотеке', 'studied in the library'), l('ходила в кино', 'went to the cinema'), l('встретила друга', 'met a friend')], answer: 0 },
      { type: 'choice', passage, prompt: l('Что она будет делать завтра?', 'What will she do tomorrow?'), options: [l('встретится с другом', 'meet a friend'), l('поедет в Корею', 'go to Korea'), l('будет спать', 'sleep')], answer: 0 },
      // lessons 8–9
      { type: 'match', prompt: l('Соедини дни недели', 'Match the days'), pairs: [{ ko: '월요일', tr: l('понедельник', 'Monday') }, { ko: '수요일', tr: l('среда', 'Wednesday') }, { ko: '금요일', tr: l('пятница', 'Friday') }, { ko: '일요일', tr: l('воскресенье', 'Sunday') }] },
      { type: 'cloze', sentence: '저___ 커피를 마셔요.', tr: l('Я тоже пью кофе.', 'I drink coffee too.'), options: ['는', '도', '을'], answer: 1 },
      { type: 'tf', statement: l('커피를 안 마셔요 = «Я не пью кофе».', '커피를 안 마셔요 = "I do not drink coffee".'), answer: true },
      // lesson 10: past
      { type: 'choice', prompt: l('하다 в прошедшем времени:', 'Past of 하다:'), options: ['하었어요', '했어요', '하았어요'], answer: 1 },
      { type: 'type', prompt: l('Напиши: «Вчера я смотрел фильм»', 'Write: "I watched a movie yesterday"'), answers: ['어제 영화를 봤어요', '저는 어제 영화를 봤어요'] },
      { type: 'tf', statement: '어제에 갔어요.', answer: false },
      // lesson 11: plans
      { type: 'cloze', sentence: '한국에 가___ 싶어요.', options: ['고', '을', '서'], answer: 0 },
      { type: 'choice', prompt: l('«Завтра пойду в школу»:', '"Tomorrow I will go to school":'), options: ['내일 학교에 갈 거예요', '내일 학교에 갔어요', '내일 학교에 가을 거예요'], answer: 0 },
      { type: 'build', prompt: l('Собери: «Завтра я буду учиться»', 'Build: "I will study tomorrow"'), tokens: ['공부할', '저는', '거예요', '내일'], answer: ['저는', '내일', '공부할', '거예요'] },
      // lesson 12: questions
      { type: 'match', prompt: l('Соедини вопросительные слова', 'Match the question words'), pairs: [{ ko: '뭐', tr: l('что', 'what') }, { ko: '누구', tr: l('кто', 'who') }, { ko: '어디', tr: l('где', 'where') }, { ko: '언제', tr: l('когда', 'when') }] },
      { type: 'type', prompt: l('Напиши: «Откуда вы?»', 'Write: "Where are you from?"'), answers: ['어디에서 왔어요'] },
      { type: 'dictation', say: '만나서 반갑습니다', answers: ['만나서 반갑습니다'] },
    ],
  },
];

export const examOfLevel = (level: number) => exams.find((e) => e.level === level);
