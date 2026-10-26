import { useMemo, useRef, useState } from 'react';
import type { PointerEvent as RPointerEvent } from 'react';
import type { Cell } from '../../lib/hangulCompose';
import { cellsOf, decompose, INITIALS, VOWELS } from '../../lib/hangulCompose';
import { useI18n } from '../../lib/i18n';
import { speak } from '../../lib/speak';
import { shuffle } from '../ui';
import { Cube } from './Cube';

interface Tile {
  id: number;
  jamo: string;
  kind: Cell;
}

const BASIC_CONSONANTS = INITIALS.filter((c) => !'ㄲㄸㅃㅆㅉ'.includes(c));
const BASIC_VOWELS = VOWELS.slice(0, 8).concat(['ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ', 'ㅣ']);

/** Step 1: put the letters into the cube (drag them, or tap a letter and then tap the cell). */
export function AssembleStage({ syllable, onDone, onMistake }: { syllable: string; onDone: () => void; onMistake: () => void }) {
  const { t } = useI18n();
  const parts = decompose(syllable)!;
  const tiles = useMemo<Tile[]>(() => {
    const need: Tile[] = cellsOf(parts).map((c, i) => ({ id: i, kind: c, jamo: parts[c] }));
    const cons = shuffle(BASIC_CONSONANTS.filter((c) => ![parts.initial, parts.final].includes(c))).slice(0, 1);
    const vows = shuffle(BASIC_VOWELS.filter((v) => v !== parts.vowel)).slice(0, 1);
    const extra: Tile[] = [
      { id: 10, kind: 'initial', jamo: cons[0] },
      { id: 11, kind: 'vowel', jamo: vows[0] },
    ];
    return shuffle([...need, ...extra]);
  }, [syllable]); // eslint-disable-line react-hooks/exhaustive-deps

  const [placed, setPlaced] = useState<Cell[]>([]);
  const [used, setUsed] = useState<number[]>([]);
  const [sel, setSel] = useState<number | null>(null);
  const [wrong, setWrong] = useState<Cell | null>(null);
  const [drag, setDrag] = useState<{ id: number; x: number; y: number } | null>(null);
  const start = useRef<{ x: number; y: number; moved: boolean } | null>(null);
  const done = placed.length === cellsOf(parts).length;

  const attempt = (tile: Tile, cell: Cell) => {
    if (placed.includes(cell)) return;
    if (tile.jamo === parts[cell] && tile.kind === cell) {
      const next = [...placed, cell];
      setPlaced(next);
      setUsed([...used, tile.id]);
      setSel(null);
      if (next.length === cellsOf(parts).length) speak(syllable);
    } else {
      onMistake();
      setWrong(cell);
      setTimeout(() => setWrong(null), 450);
    }
  };

  const onCellTap = (cell: Cell) => {
    const tile = tiles.find((x) => x.id === sel);
    if (tile) attempt(tile, cell);
  };

  const down = (e: RPointerEvent, tile: Tile) => {
    if (used.includes(tile.id) || done) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    start.current = { x: e.clientX, y: e.clientY, moved: false };
    setDrag({ id: tile.id, x: e.clientX, y: e.clientY });
  };
  const move = (e: RPointerEvent) => {
    if (!start.current) return;
    if (Math.hypot(e.clientX - start.current.x, e.clientY - start.current.y) > 8) start.current.moved = true;
    setDrag((d) => (d ? { ...d, x: e.clientX, y: e.clientY } : d));
  };
  const up = (e: RPointerEvent, tile: Tile) => {
    const s = start.current;
    start.current = null;
    setDrag(null);
    if (!s) return;
    if (!s.moved) {
      setSel(sel === tile.id ? null : tile.id); // a tap selects the letter
      return;
    }
    const el = document.elementFromPoint(e.clientX, e.clientY)?.closest('[data-cell]') as HTMLElement | null;
    const cell = el?.dataset.cell as Cell | undefined;
    if (cell) attempt(tile, cell);
  };

  return (
    <div className="stage assemble">
      <p className="muted center">{t('assembleHelp')}</p>
      <div className="cube-row">
        <Cube parts={parts} hint="empty" filled={placed} size={150} onCell={onCellTap} wrong={wrong} />
        {done && <div className="made ko">{syllable}</div>}
      </div>
      <div className="tray" aria-label="letters">
        {tiles.map((tile) => {
          const gone = used.includes(tile.id);
          return (
            <button
              type="button"
              key={tile.id}
              className={`tile ko ${gone ? 'gone' : ''} ${sel === tile.id ? 'sel' : ''} ${drag?.id === tile.id ? 'dragging' : ''}`}
              disabled={gone}
              onPointerDown={(e) => down(e, tile)}
              onPointerMove={move}
              onPointerUp={(e) => up(e, tile)}
              onPointerCancel={() => { start.current = null; setDrag(null); }}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setSel(sel === tile.id ? null : tile.id))}
            >
              {tile.jamo}
            </button>
          );
        })}
      </div>
      {drag && (
        <div className="drag-ghost ko" style={{ left: drag.x, top: drag.y }}>
          {tiles.find((x) => x.id === drag.id)?.jamo}
        </div>
      )}
      {done && (
        <button type="button" className="btn primary" onClick={onDone} autoFocus>
          {t('next')}
        </button>
      )}
    </div>
  );
}
