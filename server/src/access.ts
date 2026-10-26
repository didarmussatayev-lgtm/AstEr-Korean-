import { config } from './config.js';
import { q } from './db.js';

export const examIdOf = (level: number) => `exam-l${level}`;

export async function grantedLevels(userId: string): Promise<number[]> {
  const { rows } = await q<{ level: number }>('select level from access where user_id = $1 order by level', [userId]);
  return rows.map((r) => r.level);
}

interface ProgressLike {
  exams?: Record<string, { passed?: boolean }>;
}

/** Level 1 is open; level N opens by an admin grant or by passing the exam of level N-1. */
export function openLevels(granted: number[], progress: ProgressLike | null): number[] {
  const out: number[] = [1];
  for (let level = 2; level <= config.maxLevel; level++) {
    if (granted.includes(level) || progress?.exams?.[examIdOf(level - 1)]?.passed === true) out.push(level);
  }
  return out;
}
