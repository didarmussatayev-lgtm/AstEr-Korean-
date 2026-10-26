import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Lang, Text } from './types';

const dict = {
  ru: {
    home: 'Главная', hangul: 'Хангыль', review: 'Повторение', account: 'Профиль',
    hello: 'Привет! 안녕!', tagline: 'Корейский с нуля — по 10 минут в день.',
    streak: 'Серия', days: 'дн.', xp: 'Опыт', dueToday: 'К повторению сегодня', cardsWord: 'карточек',
    startReview: 'Повторить', nothingDue: 'На сегодня всё повторено 🎉',
    path: 'Твой путь', start: 'Начать', again: 'Ещё раз', done: 'Пройдено',
    letters: 'букв', learned: 'выучено',
    vowels: 'Гласные', consonants: 'Согласные',
    sound: 'Звук', memory: 'Как запомнить', example: 'Пример', listen: 'Послушать',
    quiz: 'Проверить себя', next: 'Дальше', check: 'Проверить', continue: 'Продолжить',
    correct: 'Верно!', wrong: 'Почти. Правильно:', skip: 'Пропустить',
    theory: 'Теория', words: 'Слова', practice: 'Практика', dialogue: 'Диалог', story: 'Рассказ',
    analysis: 'Разбор', tapWord: 'Нажми на часть слова, чтобы увидеть разбор.',
    showRoman: 'Транскрипция', showTr: 'Перевод',
    lessonDone: 'Урок пройден!', lessonDoneText: 'Слова добавлены в повторение. Возвращайся завтра — серия растёт.',
    toHome: 'На главную', yourAnswer: 'Твой ответ', typeKo: 'Напиши по-корейски',
    flip: 'Показать ответ', gAgain: 'Забыл', gGood: 'Помню', gEasy: 'Легко',
    reviewDone: 'Повторение завершено', noCards: 'Карточек пока нет. Пройди урок или хангыль.',
    signIn: 'Войти', signUp: 'Регистрация', signOut: 'Выйти', email: 'Эл. почта или логин', password: 'Пароль',
    localMode: 'Локальный режим: прогресс хранится в этом браузере.',
    cloudOn: 'Прогресс сохраняется в облаке и синхронизируется между устройствами.',
    cloudOff: 'Облако не подключено (нужны ключи Supabase, см. README).',
    checkMail: 'Проверь почту, чтобы подтвердить аккаунт.', loggedAs: 'Вы вошли как',
    noVoice: 'В этом браузере нет корейского голоса — звук может не воспроизводиться.',
    back: 'Назад', step: 'Шаг', of: 'из', level: 'Уровень', memorized: 'Запомнил!',
    questions: 'вопросов', true: 'Верно', false: 'Неверно', dictation: 'Послушай и напиши по-корейски',
    exam: 'Экзамен', examLevel: 'Экзамен уровня', examIntro: 'Вопросы разных форм: аудирование, выбор, пропуски, сопоставление, сборка, чтение и письмо. Подсказок и повторов нет, результат — в конце.',
    passMark: 'Проходной балл', yourScore: 'Твой результат', passed: 'Экзамен сдан! 🎉', failed: 'Пока не сдан',
    failedText: 'Повтори уроки и попробуй ещё раз — это можно делать сколько угодно.', retry: 'Пересдать', startExam: 'Начать экзамен',
    levelUnlocked: 'Открыт следующий уровень!', locked: 'Закрыто', lessonsLeft: 'Осталось уроков до экзамена', examLocked: 'Пройди все уроки уровня, чтобы открыть экзамен',
    levelLocked: 'Сдай экзамен предыдущего уровня, чтобы открыть этот', soon: 'Скоро', bestScore: 'Лучший результат', mistakesReview: 'Разбор ошибок',
    allCorrect: 'Ошибок нет — отлично!', yourLevelOpen: 'Теперь открыт уровень', openNext: 'К карте',
  },
  en: {
    home: 'Home', hangul: 'Hangul', review: 'Review', account: 'Account',
    hello: 'Hi! 안녕!', tagline: 'Korean from zero — 10 minutes a day.',
    streak: 'Streak', days: 'd', xp: 'XP', dueToday: 'Due for review today', cardsWord: 'cards',
    startReview: 'Review', nothingDue: 'All caught up for today 🎉',
    path: 'Your path', start: 'Start', again: 'Again', done: 'Done',
    letters: 'letters', learned: 'learned',
    vowels: 'Vowels', consonants: 'Consonants',
    sound: 'Sound', memory: 'Memory trick', example: 'Example', listen: 'Listen',
    quiz: 'Test yourself', next: 'Next', check: 'Check', continue: 'Continue',
    correct: 'Correct!', wrong: 'Almost. Correct answer:', skip: 'Skip',
    theory: 'Theory', words: 'Words', practice: 'Practice', dialogue: 'Dialogue', story: 'Story',
    analysis: 'Breakdown', tapWord: 'Tap a part of a word to see its breakdown.',
    showRoman: 'Romanization', showTr: 'Translation',
    lessonDone: 'Lesson complete!', lessonDoneText: 'Words were added to your review deck. Come back tomorrow to grow your streak.',
    toHome: 'Home', yourAnswer: 'Your answer', typeKo: 'Type in Korean',
    flip: 'Show answer', gAgain: 'Forgot', gGood: 'Got it', gEasy: 'Easy',
    reviewDone: 'Review complete', noCards: 'No cards yet. Take a lesson or learn Hangul.',
    signIn: 'Sign in', signUp: 'Sign up', signOut: 'Sign out', email: 'E-mail or login', password: 'Password',
    localMode: 'Local mode: progress is stored in this browser.',
    cloudOn: 'Progress is saved to the cloud and synced across devices.',
    cloudOff: 'Cloud is not connected (Supabase keys needed, see README).',
    checkMail: 'Check your email to confirm your account.', loggedAs: 'Signed in as',
    noVoice: 'No Korean voice in this browser — audio may not play.',
    back: 'Back', step: 'Step', of: 'of', level: 'Level', memorized: 'Got it!',
    questions: 'questions', true: 'True', false: 'False', dictation: 'Listen and write in Korean',
    exam: 'Exam', examLevel: 'Level exam', examIntro: 'Mixed question types: listening, multiple choice, fill-in, matching, sentence building, reading and writing. No hints or retries; results come at the end.',
    passMark: 'Pass mark', yourScore: 'Your score', passed: 'Exam passed! 🎉', failed: 'Not passed yet',
    failedText: 'Review the lessons and try again — you can retake it as many times as you like.', retry: 'Retake', startExam: 'Start exam',
    levelUnlocked: 'Next level unlocked!', locked: 'Locked', lessonsLeft: 'Lessons left before the exam', examLocked: 'Finish all lessons of this level to unlock the exam',
    levelLocked: 'Pass the exam of the previous level to unlock this one', soon: 'Coming soon', bestScore: 'Best score', mistakesReview: 'Review of mistakes',
    allCorrect: 'No mistakes — great!', yourLevelOpen: 'Now open: level', openNext: 'To the map',
  },
} as const;

export type Key = keyof (typeof dict)['ru'];

interface I18n {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: Key) => string;
  tx: (x: Text) => string;
}

const Ctx = createContext<I18n | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const s = localStorage.getItem('aster-korean:lang');
      if (s === 'ru' || s === 'en') return s;
    } catch {
      /* ignore */
    }
    return navigator.language.startsWith('ru') ? 'ru' : 'en';
  });
  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem('aster-korean:lang', l);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = l;
  };
  const t = (k: Key) => dict[lang][k];
  const tx = (x: Text) => (typeof x === 'string' ? x : x[lang]);
  return <Ctx.Provider value={{ lang, setLang, t, tx }}>{children}</Ctx.Provider>;
}

export const useI18n = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error('I18nProvider missing');
  return c;
};
