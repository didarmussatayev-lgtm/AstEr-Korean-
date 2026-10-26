import type { Cell, Parts } from '../../lib/hangulCompose';
import { cellsOf, shapeOf } from '../../lib/hangulCompose';

interface Props {
  parts: Parts;
  /** letters = the jamo are written in the cells; empty = only the grid; cells listed in `filled` always show their letter */
  hint: 'letters' | 'empty';
  filled?: Cell[];
  size: number;
  /** subtle look for use as a drawing guide */
  guide?: boolean;
  onCell?: (c: Cell) => void;
  wrong?: Cell | null;
}

/**
 * A syllable block. Vertical vowels sit to the right of the consonant, horizontal vowels below it,
 * compound vowels wrap around it and the final consonant (patchim) goes at the bottom.
 */
export function Cube({ parts, hint, filled = [], size, guide = false, onCell, wrong }: Props) {
  const shape = shapeOf(parts.vowel);
  const cells = cellsOf(parts);
  const text: Record<Cell, string> = { initial: parts.initial, vowel: parts.vowel, final: parts.final };
  return (
    <div
      className={`cube ${shape} ${parts.final ? 'has-final' : ''} ${guide ? 'guide' : ''}`}
      style={{ width: size, height: size }}
      role={onCell ? 'group' : undefined}
    >
      {cells.map((c) => {
        const show = hint === 'letters' || filled.includes(c);
        return (
          <div
            key={c}
            data-cell={c}
            className={`cell ${c} ${show ? 'on' : ''} ${wrong === c ? 'shake' : ''} ${onCell ? 'drop' : ''}`}
            onClick={onCell ? () => onCell(c) : undefined}
          >
            <span className="ko">{show ? text[c] : ''}</span>
          </div>
        );
      })}
    </div>
  );
}
