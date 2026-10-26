import { useEffect, useMemo, useRef, useState } from 'react';
import type { PointerEvent as RPointerEvent } from 'react';
import { decompose } from '../../lib/hangulCompose';
import { drawGlyph, scoreCell, splitByCell } from '../../lib/drawScore';
import type { Pt } from '../../lib/drawScore';
import { useI18n } from '../../lib/i18n';
import { Cube } from './Cube';

interface Props {
  text: string;
  mode: 'trace' | 'write';
  /** cubes behind the canvas: letters in them, or empty cells */
  hint: 'letters' | 'empty';
  size: number;
  onPass: () => void;
}

/** Finger / mouse drawing area with a forgiving shape check. */
export function DrawPad({ text, mode, hint, size, onPass }: Props) {
  const { t } = useI18n();
  const chars = useMemo(() => [...text], [text]);
  const W = size * chars.length;
  const wrap = useRef<HTMLDivElement>(null);
  const ghost = useRef<HTMLCanvasElement>(null);
  const ink = useRef<HTMLCanvasElement>(null);
  const strokes = useRef<Pt[][]>([]);
  const drawing = useRef(false);
  const [msg, setMsg] = useState<null | { ok: boolean; text: string }>(null);
  const [tries, setTries] = useState(0);
  const [passed, setPassed] = useState(false);
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

  const setup = (c: HTMLCanvasElement | null) => {
    if (!c) return;
    c.width = W * dpr;
    c.height = size * dpr;
    c.getContext('2d')!.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const paintGhost = (reference: boolean) => {
    const c = ghost.current;
    if (!c) return;
    const ctx = c.getContext('2d')!;
    ctx.clearRect(0, 0, W, size);
    if (mode === 'trace' || reference) {
      ctx.fillStyle = reference ? 'rgba(214, 69, 69, 0.28)' : 'rgba(124, 77, 255, 0.22)';
      chars.forEach((ch, i) => drawGlyph(ctx, ch, i * size, 0, size));
    }
  };

  const repaintInk = () => {
    const c = ink.current;
    if (!c) return;
    const ctx = c.getContext('2d')!;
    ctx.clearRect(0, 0, W, size);
    ctx.strokeStyle = '#4527c7';
    ctx.fillStyle = '#4527c7';
    ctx.lineWidth = Math.max(5, size * 0.075);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (const s of strokes.current) {
      if (s.length === 1) {
        ctx.beginPath();
        ctx.arc(s[0].x, s[0].y, ctx.lineWidth / 2, 0, Math.PI * 2);
        ctx.fill();
        continue;
      }
      ctx.beginPath();
      ctx.moveTo(s[0].x, s[0].y);
      for (const p of s.slice(1)) ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }
  };

  useEffect(() => {
    setup(ghost.current);
    setup(ink.current);
    strokes.current = [];
    setMsg(null);
    setTries(0);
    setPassed(false);
    paintGhost(false);
    repaintInk();
    // keep the whole writing area clear of the fixed bottom bar
    wrap.current?.scrollIntoView({ block: 'center' });
    // re-run when the target changes
  }, [text, mode, size]); // eslint-disable-line react-hooks/exhaustive-deps

  const pos = (e: RPointerEvent): Pt => {
    const r = ink.current!.getBoundingClientRect();
    return { x: ((e.clientX - r.left) / r.width) * W, y: ((e.clientY - r.top) / r.height) * size };
  };
  const down = (e: RPointerEvent) => {
    if (passed) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    drawing.current = true;
    strokes.current.push([pos(e)]);
    repaintInk();
  };
  const move = (e: RPointerEvent) => {
    if (!drawing.current) return;
    strokes.current[strokes.current.length - 1].push(pos(e));
    repaintInk();
  };
  const up = () => {
    drawing.current = false;
  };

  const clear = () => {
    strokes.current = [];
    setMsg(null);
    paintGhost(false);
    repaintInk();
  };

  const check = () => {
    const per = splitByCell(strokes.current, size, chars.length);
    const results = chars.map((ch, i) => scoreCell(ch, per[i], mode));
    const ok = results.every((r) => r.pass);
    setTries((n) => n + 1);
    if (ok) {
      setPassed(true);
      setMsg({ ok: true, text: t('drawGood') });
      paintGhost(mode === 'write');
    } else {
      setMsg({ ok: false, text: mode === 'trace' ? t('traceRetry') : t('writeRetry') });
      if (mode === 'write') {
        paintGhost(true); // show the model over the drawing so they can compare
      }
    }
  };

  const guides = chars.map((ch) => decompose(ch));
  return (
    <div className="pad-wrap" ref={wrap}>
      <div className="pad" style={{ width: W, height: size }}>
        <div className="pad-cubes">
          {guides.map((p, i) => (p ? <Cube key={i} parts={p} hint={hint} size={size} guide /> : <div key={i} style={{ width: size }} />))}
        </div>
        <canvas ref={ghost} className="pad-canvas" style={{ width: W, height: size }} />
        <canvas
          ref={ink}
          className="pad-canvas ink"
          style={{ width: W, height: size }}
          onPointerDown={down}
          onPointerMove={move}
          onPointerUp={up}
          onPointerCancel={up}
          aria-label={t('drawArea')}
        />
      </div>
      {msg && (
        <p className={`pad-msg ${msg.ok ? 'ok' : 'bad'}`} role="status">
          {msg.text}
        </p>
      )}
      <div className="row center-row">
        {!passed && <button type="button" className="btn" onClick={clear}>{t('clear')}</button>}
        {!passed && <button type="button" className="btn primary" onClick={check}>{t('check')}</button>}
        {!passed && tries >= 1 && (
          <button type="button" className="btn" onClick={() => { setPassed(true); onPass(); }}>
            {t('acceptAnyway')}
          </button>
        )}
        {passed && (
          <button type="button" className="btn primary" onClick={onPass} autoFocus>
            {t('next')}
          </button>
        )}
      </div>
    </div>
  );
}
