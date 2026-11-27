import type { PlanItem } from '../plan';

/**
 * Teaching order of the book units (see the PlanItem legend in ../plan.ts).
 * Every unit is cut in two parts: words + first rule(s) / remaining rules, reading and listening.
 */
export const bookPlans: Record<string, PlanItem[]> = {
  b01: [
    { r: 0 }, { w: [11, 12, 13], d: [3, 4] }, { w: [0, 1, 2], d: [23] }, { w: [3, 4, 5], d: [1] }, { mix: true, d: [0] },
    { w: [6, 7, 8], d: [14, 24, 27] }, { w: [9, 10, 14], d: [25, 26] }, { mix: true, d: [2] },
    { r: 1, d: [5, 6, 7, 8] }, { w: [15, 16, 20], d: [18] }, { r: 2, d: [9, 10, 11, 12] }, { w: [17, 18, 19], d: [28, 13] },
    { mix: true, d: [15, 16, 17] }, { r: 3, d: [19, 20, 21, 22] },
  ],
};

/** where part 2 starts in each plan */
export const bookPartAt: Record<string, number> = {
  b01: 8,
};
