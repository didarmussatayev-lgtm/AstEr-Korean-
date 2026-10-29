import type { Exercise } from '../lib/types';

/**
 * Teaching order of a lesson. Numbers are indices into the lesson's vocab / theory / exercises.
 *  w   – learn these words (cards + a quick quiz on exactly them), d = exercises to practise right after
 *  mix – mixed review of all words learned so far
 *  r   – show one rule (theory section, optionally only some of its blocks), then drill it with d (+ x for extra ones)
 *  d   – a drill on its own
 */
export type PlanItem =
  | { w: number[]; d?: number[] }
  | { mix: true; d?: number[] }
  | { r: number; blocks?: number[]; d?: number[]; x?: Exercise[] }
  | { d?: number[]; x?: Exercise[] };

export const plans: Record<string, PlanItem[]> = {
  'l3-numbers-sino': [
    { r: 0 },
    { w: [0, 1, 2] }, { w: [3, 4] }, { mix: true, d: [0] },
    { w: [5, 6, 7], d: [17] }, { w: [8, 9] }, { mix: true, d: [1] },
    { r: 1 },
    { r: 2, d: [2, 3, 4, 5] },
    { r: 3, d: [6, 7, 8, 9] },
    { r: 4, d: [10, 11, 12] },
    { mix: true },
    { w: [10, 11, 12] },
    { r: 5, d: [13, 14, 15, 16, 18] },
    { w: [13, 14, 15] },
    { r: 6, d: [19, 20, 21, 22] },
    { mix: true },
  ],
  'l4-numbers-native': [
    { r: 0 },
    { w: [0, 1, 2] }, { w: [3, 4] }, { mix: true, d: [9] },
    { w: [5, 6, 7], d: [0, 1] }, { w: [8, 9] }, { mix: true, d: [10, 7] },
    { r: 1 }, { w: [10, 11, 12], d: [11, 12] },
    { r: 2, d: [2, 3, 4, 13, 6] }, { mix: true, d: [8] },
    { w: [13, 14] }, { r: 3, d: [14, 15, 5] }, { w: [15] }, { mix: true },
  ],
  'l1-greetings': [
    { w: [0, 3, 6], d: [3] }, { w: [7, 4, 5], d: [4] }, { mix: true, d: [0, 1] },
    { r: 0 }, { w: [1, 2] }, { r: 1, d: [2] }, { w: [8] }, { mix: true, d: [5, 6] },
  ],
  'l2-introduce': [
    { w: [0, 1, 2], d: [6] }, { w: [3, 4, 5] }, { mix: true },
    { r: 0, d: [0, 1] }, { w: [6, 7, 8] }, { r: 1, d: [2, 3] }, { mix: true, d: [4, 5] },
  ],
  'l5-this-that': [
    { w: [0, 1, 2] }, { r: 0, d: [0] }, { w: [3, 4, 5], d: [7] }, { w: [6, 7], d: [4] }, { mix: true },
    { r: 1, d: [1, 2, 3] }, { w: [8] }, { mix: true, d: [5, 6] },
  ],
  'l6-verbs': [
    { w: [0, 1, 2] }, { w: [3, 4, 5] }, { mix: true }, { r: 0, d: [0, 1, 2] },
    { w: [6, 7, 8] }, { w: [9, 10], d: [7, 8] }, { r: 1, d: [3, 4] }, { mix: true, d: [5, 6] },
  ],
  'l7-places': [
    { w: [0, 1, 2], d: [7] }, { w: [3, 4, 5], d: [8] }, { mix: true },
    { w: [8, 9] }, { r: 0, d: [4] }, { w: [6, 7], d: [5] }, { r: 1, d: [0, 1, 2, 3] }, { mix: true, d: [6] },
  ],
  'l8-days': [
    { w: [0, 1, 2] }, { w: [3, 4] }, { mix: true }, { w: [5, 6] }, { mix: true, d: [0, 1] },
    { r: 0, d: [6] }, { w: [7, 8, 9], d: [4] }, { mix: true }, { w: [10, 11, 12] },
    { r: 1, d: [2, 7] }, { mix: true, d: [3, 5] },
  ],
  'l9-likes': [
    { w: [4, 5, 6] }, { w: [7, 8, 9] }, { w: [10, 3] }, { mix: true, d: [0, 6, 7] },
    { w: [0] }, { r: 0, d: [1] }, { w: [1] }, { r: 1, d: [2] }, { w: [2] }, { r: 2, d: [3, 4] }, { mix: true, d: [5] },
  ],
  'l10-past': [
    { w: [7, 8], d: [7, 8] }, { w: [0, 1, 2] }, { w: [3, 4, 5] }, { w: [6] }, { mix: true, d: [0, 5] },
    { r: 0, d: [1, 2, 3] }, { r: 1, d: [4] }, { mix: true, d: [6] },
  ],
  'l11-plans': [
    { w: [7], d: [6] }, { w: [0, 1, 2] }, { r: 0, d: [0, 4] }, { w: [3, 4] }, { w: [5, 6] },
    { r: 1, d: [1, 2, 3] }, { mix: true, d: [5, 7] },
  ],
  'l12-introduce-more': [
    { w: [0, 1, 2], d: [7] }, { w: [3] }, { mix: true }, { r: 0, d: [0, 3] },
    { w: [4], d: [6] }, { w: [5, 6] }, { r: 1, d: [1, 2, 4] }, { w: [7] }, { r: 2, d: [5] }, { mix: true },
  ],
  'l13-adjectives': [
    { w: [0, 1, 2] }, { w: [3, 4, 5] }, { mix: true, d: [0] }, { w: [6, 7, 8] }, { w: [9, 10] }, { mix: true },
    { r: 0, d: [1, 2, 3, 4] }, { w: [11, 12, 13], d: [8] }, { r: 1 }, { w: [14, 15] },
    { r: 2, d: [5, 6] }, { mix: true, d: [7, 9] },
  ],
  'l14-family': [
    { w: [0, 1, 2], d: [6] }, { w: [3, 4] }, { w: [5, 6], d: [8] }, { mix: true, d: [7] },
    { w: [7, 8] }, { w: [9, 10] }, { r: 1, blocks: [1] }, { w: [11, 12, 13] }, { w: [14, 15] },
    { mix: true, d: [0, 1, 2] }, { w: [16, 17] }, { r: 0, d: [4] }, { r: 2, d: [3, 5] }, { mix: true },
  ],
  'l15-order': [
    { w: [11, 12, 13, 14], d: [0] }, { w: [0, 2, 3], d: [6] }, { w: [4, 5, 6] }, { r: 0, d: [1, 2] },
    { w: [1, 7], d: [7, 8] }, { w: [8, 9, 10] }, { r: 1 }, { mix: true }, { w: [15, 16] },
    { r: 2, d: [3, 4] }, { mix: true, d: [5] },
  ],
  'l16-daily': [
    { w: [0, 1, 2], d: [6] }, { w: [3, 4, 5] }, { mix: true, d: [0, 7] }, { w: [6, 7] },
    { r: 0, d: [2, 4] }, { w: [8, 9] }, { r: 1, d: [1, 3] }, { w: [10, 11, 12] }, { r: 2, d: [5] },
    { w: [13, 14] }, { mix: true, d: [8] },
  ],
  'l17-transport': [
    { w: [0, 1, 2], d: [6] }, { w: [3, 4, 5] }, { mix: true, d: [0, 7] }, { w: [6, 7] }, { w: [8, 9, 10] },
    { r: 0, d: [1, 2] }, { w: [11, 12, 13] }, { r: 1, d: [3] }, { w: [14, 15, 16] }, { r: 2, d: [4] },
    { mix: true, d: [5, 8] },
  ],
  'l18-weather': [
    { w: [1, 2] }, { w: [3, 4], d: [9] }, { mix: true, d: [0] }, { w: [0, 10, 11], d: [7] }, { w: [12, 13, 14] },
    { r: 0, d: [3, 5] }, { w: [15], d: [4] }, { mix: true }, { w: [5, 6, 9] }, { r: 1, d: [1, 2, 8] },
    { w: [7, 8] }, { r: 2 }, { mix: true, d: [6] },
  ],
  'l19-health': [
    { w: [0, 1, 2], d: [7] }, { w: [3, 4, 5] }, { mix: true, d: [0] }, { w: [6, 16] },
    { r: 0, d: [1, 3, 4] }, { w: [10, 11, 12] }, { w: [13, 14] }, { mix: true }, { r: 1, d: [2, 5] },
    { w: [7, 8, 9], d: [8, 9] }, { w: [15] }, { r: 2, d: [6] }, { mix: true },
  ],
  'l20-requests': [
    { w: [0, 1, 2] }, { w: [3, 4, 5] }, { mix: true, d: [0] }, { r: 0, d: [1, 3] }, { w: [6, 7] }, { w: [8, 9] },
    { r: 1, d: [2, 4] }, { w: [10, 11, 12], d: [8] }, { w: [13, 14, 15], d: [9] }, { r: 2, d: [5, 7] },
    { mix: true, d: [6] },
  ],
  'l21-abilities': [
    { w: [0, 1], d: [7] }, { w: [2, 3, 4], d: [9] }, { mix: true, d: [0, 8] }, { w: [5, 6] },
    { r: 0, d: [1, 2, 3] }, { w: [7] }, { r: 1, d: [4, 5] }, { w: [8, 9, 10] }, { r: 2, d: [6] }, { w: [11] },
    { mix: true },
  ],
  'l22-hobbies': [
    { w: [0, 1, 2], d: [8, 7] }, { w: [3, 4, 5] }, { mix: true, d: [0] }, { w: [6, 7, 8], d: [6] }, { w: [9] },
    { r: 0, d: [5] }, { w: [10, 11, 12] }, { w: [13, 14] }, { r: 1, d: [2, 3, 4] }, { mix: true },
    { w: [15, 16] }, { r: 2, d: [1] }, { mix: true },
  ],
  'l23-connectors': [
    { w: [3, 4, 5], d: [6, 7] }, { w: [6, 7], d: [8] }, { mix: true, d: [0] }, { w: [0] }, { r: 0 },
    { w: [8, 9, 10] }, { w: [1] }, { r: 1, d: [1] }, { w: [2] }, { r: 2, d: [2, 3, 4] }, { mix: true, d: [5] },
  ],
  'l24-phrases': [
    { w: [0, 1, 2] }, { w: [3, 4, 5] }, { mix: true, d: [0, 8] }, { w: [6, 7] }, { r: 0, d: [1, 2] },
    { w: [8] }, { w: [9, 10], d: [7, 9] }, { r: 1, d: [3, 4, 5] }, { r: 2 }, { mix: true, d: [6] },
  ],
};
