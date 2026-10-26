import type { Exam } from '../lib/types';
import { l } from './helpers';

const passage = '저는 안나예요. 카자흐스탄에서 왔어요. 스무 살이에요. 학생이에요. 어제 도서관에서 한국어를 공부했어요. 내일은 친구를 만날 거예요.';

const passage2 = '저는 민수예요. 열아홉 살이에요. 우리 가족은 네 명이에요. 아버지는 선생님이에요. 저는 아침 일곱 시에 일어나요. 보통 버스로 학교에 가요. 오늘은 비가 와서 지하철을 타요. 주말에 친구하고 축구를 해요.';

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
      // lessons 13–14: adjectives, family
      { type: 'match', prompt: l('Соедини слово и перевод', 'Match the word and its meaning'), pairs: [{ ko: '커요', tr: l('большой', 'big') }, { ko: '싸요', tr: l('дешёвый', 'cheap') }, { ko: '비싸요', tr: l('дорогой', 'expensive') }, { ko: '작아요', tr: l('маленький', 'small') }] },
      { type: 'choice', prompt: l('예쁘다 в вежливой форме:', 'Polite form of 예쁘다:'), options: ['예쁘어요', '예뻐요', '예쁘아요'], answer: 1 },
      { type: 'choice', prompt: l('«Вкусная еда»:', '"Tasty food":'), options: ['맛있은 음식', '맛있는 음식', '맛있ㄴ 음식'], answer: 1 },
      { type: 'choice', prompt: l('Девушка о старшем брате:', 'A young woman about her older brother:'), options: ['형', '오빠', '누나'], answer: 1 },
      { type: 'cloze', sentence: '우리 가족은 네 ___이에요.', tr: l('Нас в семье четверо.', 'There are four of us.'), options: ['명', '개', '살'], answer: 0 },
      // lessons 15–17: ordering, daily routine, transport
      { type: 'cloze', sentence: '커피 한 ___ 주세요.', tr: l('Одну чашку кофе, пожалуйста.', 'One cup of coffee, please.'), options: ['잔', '명', '살'], answer: 0 },
      { type: 'build', prompt: l('Собери: «Два кимбапа, пожалуйста»', 'Build: "Two gimbap, please"'), tokens: ['주세요', '두', '김밥', '개'], answer: ['김밥', '두', '개', '주세요'] },
      { type: 'cloze', sentence: '일곱 시___ 일어나요.', options: ['에', '에서', '을'], answer: 0 },
      { type: 'choice', prompt: l('Как сказать 10:30?', 'How do you say 10:30?'), options: ['십 시 삼십 분', '열 시 삼십 분', '열 시 서른 분'], answer: 1 },
      { type: 'cloze', sentence: '지하철___ 가요.', options: ['로', '으로', '를'], answer: 0 },
      { type: 'type', prompt: l('Напиши: «Это занимает 30 минут»', 'Write: "It takes 30 minutes"'), answers: ['삼십 분 걸려요', '삼십분 걸려요'] },
      // second reading
      { type: 'choice', passage: passage2, prompt: l('Сколько лет Минсу?', 'How old is Minsu?'), options: [l('19', '19'), l('9', '9'), l('21', '21')], answer: 0 },
      { type: 'choice', passage: passage2, prompt: l('Сколько человек в его семье?', 'How many people are in his family?'), options: [l('3', '3'), l('4', '4'), l('5', '5')], answer: 1 },
      { type: 'choice', passage: passage2, prompt: l('Как он едет в школу сегодня и почему?', 'How does he go to school today and why?'), options: [l('на метро, потому что идёт дождь', 'by subway because it rains'), l('на автобусе, потому что опаздывает', 'by bus because he is late'), l('пешком, потому что тепло', 'on foot because it is warm')], answer: 0 },
      { type: 'choice', passage: passage2, prompt: l('Что он делает на выходных?', 'What does he do at the weekend?'), options: [l('играет с другом в футбол', 'plays football with a friend'), l('ходит по магазинам', 'goes shopping'), l('слушает музыку', 'listens to music')], answer: 0 },
      // lessons 18–19: weather, health
      { type: 'choice', prompt: l('춥다 в вежливой форме:', 'Polite form of 춥다:'), options: ['춥어요', '추워요', '춥아요'], answer: 1 },
      { type: 'cloze', sentence: '머리___ 아파요.', tr: l('У меня болит голова.', 'I have a headache.'), options: ['가', '를', '에서'], answer: 0 },
      { type: 'match', prompt: l('Соедини времена года', 'Match the seasons'), pairs: [{ ko: '봄', tr: l('весна', 'spring') }, { ko: '여름', tr: l('лето', 'summer') }, { ko: '가을', tr: l('осень', 'autumn') }, { ko: '겨울', tr: l('зима', 'winter') }] },
      // lessons 20–22: requests, abilities, hobbies
      { type: 'choice', prompt: l('앉다 + вежливая просьба:', '앉다 + polite request:'), options: ['앉세요', '앉으세요', '앉아세요'], answer: 1 },
      { type: 'type', prompt: l('Напиши: «Говорите, пожалуйста, медленнее»', 'Write: "Please speak slowly"'), answers: ['천천히 말해 주세요', '천천히 말해주세요'] },
      { type: 'cloze', sentence: '한국어를 할 ___ 있어요.', options: ['수', '거', '게'], answer: 0 },
      { type: 'tf', statement: l('못 значит «не хочу».', '못 means "do not want to".'), answer: false },
      { type: 'choice', prompt: l('듣다 в вежливой форме:', 'Polite form of 듣다:'), options: ['듣어요', '들어요', '들으요'], answer: 1 },
      // lessons 23–24: connectors, phrases
      { type: 'cloze', sentence: '비가 와___ 집에 있어요.', tr: l('Идёт дождь, поэтому я дома.', "It's raining, so I stay home."), options: ['서', '지만', '고'], answer: 0 },
      { type: 'type', prompt: l('Напиши: «Идёт дождь, поэтому я дома»', 'Write: "It is raining, so I am at home"'), answers: ['비가 와서 집에 있어요'] },
      { type: 'choice', prompt: l('Другу день рождения. Что сказать?', "It is a friend's birthday. What do you say?"), options: ['생일 축하해요', '오랜만이에요', '어서 오세요'], answer: 0 },
      { type: 'tf', statement: l('К слову 선생님 можно добавить 씨.', 'You can add 씨 to 선생님.'), answer: false },
    ],
  },
];

export const examOfLevel = (level: number) => exams.find((e) => e.level === level);
