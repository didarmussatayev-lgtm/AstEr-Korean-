/** Shape of the progress JSON the site stores (kept loose on purpose: the site owns the format). */
export interface ProgressData {
  xp?: number;
  streak?: number;
  lastDay?: string;
  lessons?: string[];
  letters?: string[];
  cards?: Record<string, { due?: string }>;
  exams?: Record<string, { best?: number; passed?: boolean; at?: string }>;
  granted?: number[];
  updatedAt?: number;
}

const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);

/** Basic sanity check so a broken client cannot store garbage. Returns the cleaned object or null. */
export function cleanProgress(body: unknown): ProgressData | null {
  if (!isObj(body)) return null;
  const p = { ...body } as ProgressData & Record<string, unknown>;
  // authoritative on the server, never taken from the client
  delete p.granted;
  if (p.xp !== undefined && (typeof p.xp !== 'number' || !Number.isFinite(p.xp) || p.xp < 0)) return null;
  if (p.streak !== undefined && (typeof p.streak !== 'number' || p.streak < 0)) return null;
  if (p.lessons !== undefined && !(Array.isArray(p.lessons) && p.lessons.every((x) => typeof x === 'string'))) return null;
  if (p.letters !== undefined && !(Array.isArray(p.letters) && p.letters.every((x) => typeof x === 'string'))) return null;
  if (p.cards !== undefined && !isObj(p.cards)) return null;
  if (p.exams !== undefined && !isObj(p.exams)) return null;
  return p;
}

export function summarize(d: ProgressData | null, today = new Date().toISOString().slice(0, 10)) {
  const cards = Object.values(d?.cards ?? {});
  return {
    xp: d?.xp ?? 0,
    streak: d?.streak ?? 0,
    lastDay: d?.lastDay ?? '',
    lessons: d?.lessons ?? [],
    letters: d?.letters?.length ?? 0,
    cards: cards.length,
    cardsDue: cards.filter((c) => (c.due ?? '') <= today).length,
    exams: d?.exams ?? {},
  };
}
