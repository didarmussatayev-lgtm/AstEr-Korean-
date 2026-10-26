import type { L } from '../lib/types';

/** Short constructor for bilingual strings: l('привет', 'hi'). */
export const l = (ru: string, en: string): L => ({ ru, en });
