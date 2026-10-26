/** Compares what the learner drew with the reference glyph (rough, forgiving shape check). */
export interface Pt {
  x: number;
  y: number;
}

export const KO_FONT = "'Noto Sans KR', 'Malgun Gothic', 'Apple SD Gothic Neo', system-ui, sans-serif";

/** Draws a glyph centred in the square (x0, y0, size). */
export function drawGlyph(ctx: CanvasRenderingContext2D, ch: string, x0: number, y0: number, size: number) {
  ctx.font = `700 ${size * 0.78}px ${KO_FONT}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(ch, x0 + size / 2, y0 + size / 2 + size * 0.04);
}

const R = 96;

function makeCanvas() {
  const c = document.createElement('canvas');
  c.width = R;
  c.height = R;
  return c;
}

function alphaMask(c: HTMLCanvasElement): Uint8Array {
  const data = c.getContext('2d')!.getImageData(0, 0, R, R).data;
  const m = new Uint8Array(R * R);
  for (let i = 0; i < m.length; i++) m[i] = data[i * 4 + 3] > 40 ? 1 : 0;
  return m;
}

/** Zhang-Suen thinning: reduces the glyph to the centre line of its strokes. */
function thin(src: Uint8Array): Uint8Array {
  const m = Uint8Array.from(src);
  const at = (x: number, y: number) => (x < 0 || y < 0 || x >= R || y >= R ? 0 : m[y * R + x]);
  let changed = true;
  while (changed) {
    changed = false;
    for (let pass = 0; pass < 2; pass++) {
      const kill: number[] = [];
      for (let y = 1; y < R - 1; y++)
        for (let x = 1; x < R - 1; x++) {
          if (!m[y * R + x]) continue;
          const p = [at(x, y - 1), at(x + 1, y - 1), at(x + 1, y), at(x + 1, y + 1), at(x, y + 1), at(x - 1, y + 1), at(x - 1, y), at(x - 1, y - 1)];
          const n = p.reduce((a, b) => a + b, 0);
          if (n < 2 || n > 6) continue;
          let tr = 0;
          for (let i = 0; i < 8; i++) if (!p[i] && p[(i + 1) % 8]) tr++;
          if (tr !== 1) continue;
          if (pass === 0 ? p[0] * p[2] * p[4] === 0 && p[2] * p[4] * p[6] === 0 : p[0] * p[2] * p[6] === 0 && p[0] * p[4] * p[6] === 0) kill.push(y * R + x);
        }
      for (const i of kill) m[i] = 0;
      if (kill.length) changed = true;
    }
  }
  return m;
}

export function glyphInfo(ch: string) {
  const g = makeCanvas();
  const gc = g.getContext('2d')!;
  gc.fillStyle = '#000';
  gc.font = `500 ${R * 0.78}px ${KO_FONT}`;
  gc.textAlign = 'center';
  gc.textBaseline = 'middle';
  gc.fillText(ch, R / 2, R / 2 + R * 0.04);
  const solid = alphaMask(g);
  const skeleton = thin(solid);

  let x0 = R, y0 = R, x1 = 0, y1 = 0;
  for (let y = 0; y < R; y++)
    for (let x = 0; x < R; x++)
      if (solid[y * R + x]) {
        x0 = Math.min(x0, x); x1 = Math.max(x1, x);
        y0 = Math.min(y0, y); y1 = Math.max(y1, y);
      }
  return { skeleton, box: { x0: x0 / R, y0: y0 / R, x1: (x1 + 1) / R, y1: (y1 + 1) / R } };
}

function inkMask(strokes: Pt[][], width: number): Uint8Array {
  const c = makeCanvas();
  const ctx = c.getContext('2d')!;
  ctx.strokeStyle = '#000';
  ctx.fillStyle = '#000';
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  for (const s of strokes) {
    if (!s.length) continue;
    if (s.length === 1) {
      ctx.beginPath();
      ctx.arc(s[0].x * R, s[0].y * R, width / 2, 0, Math.PI * 2);
      ctx.fill();
      continue;
    }
    ctx.beginPath();
    ctx.moveTo(s[0].x * R, s[0].y * R);
    for (const p of s.slice(1)) ctx.lineTo(p.x * R, p.y * R);
    ctx.stroke();
  }
  return alphaMask(c);
}

/** Marks every pixel closer than `radius` to a set pixel. */
function grow(mask: Uint8Array, radius: number): Uint8Array {
  const out = new Uint8Array(R * R);
  const r = Math.ceil(radius);
  for (let y = 0; y < R; y++)
    for (let x = 0; x < R; x++) {
      if (!mask[y * R + x]) continue;
      for (let dy = -r; dy <= r; dy++)
        for (let dx = -r; dx <= r; dx++) {
          const xx = x + dx, yy = y + dy;
          if (xx >= 0 && yy >= 0 && xx < R && yy < R && dx * dx + dy * dy <= radius * radius) out[yy * R + xx] = 1;
        }
    }
  return out;
}

export interface CellScore {
  coverage: number;
  precision: number;
  pass: boolean;
}

/** tolerance (fraction of the cell) and pass marks for each mode */
export const RULES = {
  trace: { cover: 0.08, near: 0.09, needC: 0.75, needP: 0.75, minLen: 0.5, maxLen: 2.4 },
  write: { cover: 0.075, near: 0.085, needC: 0.75, needP: 0.75, minLen: 0.45, maxLen: 2.0 },
};

/**
 * strokes are in cell-local coordinates (0..1). The learner's lines are compared with the centre line of the glyph:
 * coverage = how much of the glyph's skeleton is covered by ink, precision = how much of the ink stays near it.
 * In "write" mode the drawing is rescaled to the glyph box, so size and position of the handwriting do not matter.
 */
export function scoreCell(ch: string, strokes: Pt[][], mode: 'trace' | 'write'): CellScore {
  const pts = strokes.flat();
  if (pts.length < 2) return { coverage: 0, precision: 0, pass: false };
  const { skeleton, box } = glyphInfo(ch);
  const rule = RULES[mode];

  let strokesN = strokes;
  if (mode === 'write') {
    const xs = pts.map((p) => p.x), ys = pts.map((p) => p.y);
    const ix0 = Math.min(...xs), ix1 = Math.max(...xs), iy0 = Math.min(...ys), iy1 = Math.max(...ys);
    const map = (v: number, a0: number, a1: number, g0: number, g1: number) =>
      a1 - a0 >= 0.12 ? g0 + ((v - a0) / (a1 - a0)) * (g1 - g0) : (g0 + g1) / 2 + (v - (a0 + a1) / 2);
    strokesN = strokes.map((s) => s.map((p) => ({ x: map(p.x, ix0, ix1, box.x0, box.x1), y: map(p.y, iy0, iy1, box.y0, box.y1) })));
  }

  const thick = inkMask(strokesN, R * rule.cover * 2);
  const thinInk = inkMask(strokesN, R * 0.04);
  const near = grow(skeleton, R * rule.near);
  let sk = 0, skHit = 0, ink = 0, inkHit = 0;
  for (let i = 0; i < skeleton.length; i++) {
    if (skeleton[i]) { sk++; if (thick[i]) skHit++; }
    if (thinInk[i]) { ink++; if (near[i]) inkHit++; }
  }
  const coverage = sk ? skHit / sk : 0;
  const precision = ink ? inkHit / ink : 0;
  // total pen length against the length of the glyph's centre line: scribbles and zigzags draw far too much
  let penLen = 0;
  for (const st of strokesN) for (let i = 1; i < st.length; i++) penLen += Math.hypot(st[i].x - st[i - 1].x, st[i].y - st[i - 1].y) * R;
  const lenRatio = sk ? penLen / sk : 0;
  const lenOk = lenRatio >= rule.minLen && lenRatio <= rule.maxLen;
  return { coverage, precision, pass: lenOk && coverage >= rule.needC && precision >= rule.needP };
}

/** Splits strokes (canvas px) into per-cell, cell-local normalized strokes. */
export function splitByCell(strokes: Pt[][], size: number, cells: number): Pt[][][] {
  const out: Pt[][][] = Array.from({ length: cells }, () => []);
  for (const s of strokes) {
    let cur: Pt[] = [];
    let curCell = -1;
    for (const p of s) {
      const c = Math.min(cells - 1, Math.max(0, Math.floor(p.x / size)));
      if (c !== curCell) {
        if (cur.length) out[curCell].push(cur);
        cur = [];
        curCell = c;
      }
      cur.push({ x: (p.x - c * size) / size, y: p.y / size });
    }
    if (cur.length && curCell >= 0) out[curCell].push(cur);
  }
  return out;
}
