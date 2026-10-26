import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import type { Card, ExamResult, LessonResume, Progress } from './types';
import { newCard, today, addDays, isDue } from './srs';
import { backend } from './backend';
import type { AuthUser } from './backend';

const KEY = 'aster-korean:progress:v1';

const empty = (): Progress => ({
  xp: 0,
  streak: 0,
  lastDay: '',
  lessons: [],
  letters: [],
  cards: {},
  exams: {},
  resume: {},
  granted: [],
  updatedAt: 0,
});

function loadLocal(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...empty(), ...JSON.parse(raw) } : empty();
  } catch {
    return empty();
  }
}

interface Ctx {
  p: Progress;
  user: AuthUser | null;
  dueCount: number;
  gain: (xp: number) => void;
  addCards: (cards: Parameters<typeof newCard>[0][]) => void;
  setCard: (c: Card) => void;
  completeLesson: (id: string) => void;
  learnLetters: (chars: string[]) => void;
  recordExam: (id: string, score: number, passed: boolean) => void;
  saveResume: (id: string, r: LessonResume | null) => void;
  syncing: boolean;
}

const Ctx = createContext<Ctx | null>(null);
export const useProgress = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error('ProgressProvider missing');
  return c;
};

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [p, setP] = useState<Progress>(loadLocal);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [syncing, setSyncing] = useState(false);
  const pRef = useRef(p);
  pRef.current = p;

  const update = useCallback((fn: (p: Progress) => Progress) => {
    setP((prev) => ({ ...fn(prev), updatedAt: Date.now() }));
  }, []);

  // persist locally on every change
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(p));
    } catch {
      /* storage may be blocked; the app still works for the session */
    }
  }, [p]);

  // auth state
  useEffect(() => {
    if (!backend) return;
    backend.getUser().then(setUser);
    return backend.onAuthChange(setUser);
  }, []);

  // on login: pull remote, newer copy wins
  const userId = user?.id;
  useEffect(() => {
    if (!backend || !userId) return;
    let cancelled = false;
    setSyncing(true);
    backend.loadProgress().then((remote) => {
      if (cancelled) return;
      if (remote) {
        // the newer copy wins, but `granted` (levels opened by an admin) always comes from the server
        setP((prev) =>
          remote.updatedAt > prev.updatedAt ? { ...empty(), ...remote, granted: remote.granted ?? [] } : { ...prev, granted: remote.granted ?? [] },
        );
      }
      setSyncing(false);
    });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  // signing out drops admin-granted levels held in this browser
  const hadUser = useRef(false);
  useEffect(() => {
    if (userId) hadUser.current = true;
    else if (hadUser.current) {
      hadUser.current = false;
      setP((prev) => (prev.granted.length ? { ...prev, granted: [] } : prev));
    }
  }, [userId]);

  // leaving the tab or switching apps: send the latest progress right away instead of waiting for the debounce
  useEffect(() => {
    if (!backend || !userId) return;
    const flush = () => {
      if (document.visibilityState === 'hidden' && pRef.current.updatedAt > 0) void backend!.saveProgress(pRef.current);
    };
    document.addEventListener('visibilitychange', flush);
    return () => document.removeEventListener('visibilitychange', flush);
  }, [userId]);

  // debounced push
  useEffect(() => {
    if (!backend || !userId || p.updatedAt === 0) return;
    const t = setTimeout(() => void backend!.saveProgress(p), 1500);
    return () => clearTimeout(t);
  }, [p, userId]);

  const touchStreak = (prev: Progress): Progress => {
    const t = today();
    if (prev.lastDay === t) return prev;
    const streak = prev.lastDay === addDays(t, -1) ? prev.streak + 1 : 1;
    return { ...prev, streak, lastDay: t };
  };

  const gain = useCallback((xp: number) => update((s) => ({ ...touchStreak(s), xp: s.xp + xp })), [update]);

  const addCards: Ctx['addCards'] = useCallback(
    (cards) =>
      update((s) => {
        const next = { ...s.cards };
        for (const c of cards) if (!next[c.id]) next[c.id] = newCard(c);
        return { ...s, cards: next };
      }),
    [update],
  );

  const setCard = useCallback(
    (c: Card) => update((s) => ({ ...touchStreak(s), cards: { ...s.cards, [c.id]: c } })),
    [update],
  );

  const completeLesson = useCallback(
    (id: string) => update((s) => {
        const resume = { ...(s.resume ?? {}) };
        delete resume[id];
        return s.lessons.includes(id) ? { ...s, resume } : { ...s, lessons: [...s.lessons, id], resume };
      }),
    [update],
  );

  const learnLetters = useCallback(
    (chars: string[]) => update((s) => ({ ...s, letters: Array.from(new Set([...s.letters, ...chars])) })),
    [update],
  );

  const recordExam = useCallback(
    (id: string, score: number, passed: boolean) =>
      update((s) => {
        const prev: ExamResult | undefined = s.exams[id];
        const next: ExamResult = {
          best: Math.max(prev?.best ?? 0, score),
          passed: passed || (prev?.passed ?? false),
          at: today(),
        };
        return { ...touchStreak(s), exams: { ...s.exams, [id]: next } };
      }),
    [update],
  );

  const saveResume = useCallback(
    (id: string, r: LessonResume | null) =>
      update((s) => {
        const cur = s.resume?.[id];
        if (!r && !cur) return s;
        if (r && cur && cur.step === r.step && cur.theory === r.theory && cur.ex === r.ex) return s;
        const next = { ...(s.resume ?? {}) };
        if (r) next[id] = r;
        else delete next[id];
        return { ...s, resume: next };
      }),
    [update],
  );

  const dueCount = useMemo(() => Object.values(p.cards).filter((c) => isDue(c)).length, [p.cards]);

  const value: Ctx = { p, user, dueCount, gain, addCards, setCard, completeLesson, learnLetters, recordExam, saveResume, syncing };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
