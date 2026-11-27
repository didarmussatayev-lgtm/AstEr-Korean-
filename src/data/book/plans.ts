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
  b02: [
    { w: [0, 1, 2], d: [25, 26] }, { w: [3, 4, 15], d: [27, 28] }, { mix: true, d: [0] }, { r: 0, d: [1, 2, 3] },
    { w: [5, 6] }, { w: [7, 8, 21] }, { mix: true }, { w: [9, 10, 11] }, { w: [12, 13, 14], d: [29, 30] }, { mix: true, d: [4, 5] },
    { r: 1, d: [6, 7, 8, 9, 10] }, { w: [16, 17, 18] }, { r: 2, d: [11, 12, 13, 14, 15, 17] }, { w: [19, 20], d: [16] },
    { mix: true }, { r: 3, d: [18, 19, 20, 21, 22, 23, 24] },
  ],
  b03: [
    { w: [0, 1, 2], d: [27, 28] }, { w: [3, 13, 14] }, { mix: true, d: [0] }, { w: [4, 5, 6] }, { w: [7, 8, 15], d: [29, 30] }, { mix: true, d: [1] },
    { w: [9, 10, 11] }, { w: [12, 19, 20], d: [2, 3] }, { mix: true }, { r: 0 }, { r: 1, d: [4, 5, 6, 7, 8, 19] },
    { w: [16, 17, 18] }, { r: 2, d: [9, 10, 11, 12, 13, 17] }, { w: [21, 24] }, { r: 3, d: [14, 15, 16, 18] }, { mix: true },
    { w: [22, 23, 25] }, { w: [26, 27], d: [31] }, { r: 4, d: [20, 21, 22, 23, 24, 25, 26] },
  ],
};

/** where part 2 starts in each plan */
export const bookPartAt: Record<string, number> = {
  b01: 8,
  b02: 10,
  b03: 11,
};
