import type { L } from '../lib/types';
import { l } from './helpers';

export interface LevelInfo {
  level: number;
  emoji: string;
  title: L;
  blurb: L;
}

export const levels: LevelInfo[] = [
  { level: 1, emoji: '🌱', title: l('Уровень 1 · Старт', 'Level 1 · Start'), blurb: l('Хангыль, знакомство, числа, простые глаголы, прошедшее и будущее время.', 'Hangul, introductions, numbers, basic verbs, past and future.') },
  { level: 2, emoji: '🌿', title: l('Уровень 2 · Повседневная речь', 'Level 2 · Everyday Korean'), blurb: l('Связки предложений, просьбы, возможность, описание людей и мест.', 'Linking sentences, requests, ability, describing people and places.') },
];
