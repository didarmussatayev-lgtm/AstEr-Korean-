import type { L } from '../lib/types';
import { l } from './helpers';

export interface LevelInfo {
  level: number;
  emoji: string;
  title: L;
  blurb: L;
}

export const levels: LevelInfo[] = [
  { level: 1, emoji: '🌱', title: l('Уровень 1 · A1', 'Level 1 · A1'), blurb: l('Хангыль и базовая речь: знакомство, числа, время, еда, транспорт, погода, здоровье, просьбы, умения и хобби.', 'Hangul and basic speech: introductions, numbers, time, food, transport, weather, health, requests, abilities and hobbies.') },
  { level: 2, emoji: '🌿', title: l('Уровень 2 · A2', 'Level 2 · A2'), blurb: l('Связки предложений, просьбы, возможность, описание людей и мест.', 'Linking sentences, requests, ability, describing people and places.') },
];
