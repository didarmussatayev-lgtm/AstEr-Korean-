import type { PlanItem } from '../plan';

/** Teaching order of the HSK lessons (see the PlanItem legend in ../plan.ts). */
export const hskPlans: Record<string, PlanItem[]> = {
  'h2-01': [
    { w: [0, 1, 2], d: [24, 25] }, { w: [3, 4, 9], d: [26] }, { mix: true }, { w: [5, 6, 7], d: [1, 2, 28] }, { w: [8, 10, 11], d: [29] }, { mix: true, d: [0] },
    { r: 0 }, { r: 1, d: [3, 10] }, { w: [12, 13, 14], d: [27] },
    { r: 2, d: [4, 7, 18] }, { w: [15, 16, 17], d: [21, 23] }, { w: [18, 19, 20] }, { r: 3, d: [5, 6, 8, 9, 20] }, { w: [21, 22] }, { mix: true, d: [22] },
    { r: 4, d: [11, 12, 13, 14, 15, 16, 17, 19] },
  ],
};

/** where part 2 starts in each plan */
export const hskPartAt: Record<string, number> = {
  'h2-01': 9,
};
