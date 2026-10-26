import type { ReactNode } from 'react';
import { speak } from '../lib/speak';

/** **bold** markup -> <b> */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((p, i) => (i % 2 ? <b key={i}>{p}</b> : <span key={i}>{p}</span>))}
    </>
  );
}

export function SpeakButton({ text, label = 'Listen', big = false }: { text: string; label?: string; big?: boolean }) {
  return (
    <button type="button" className={`speak ${big ? 'big' : ''}`} aria-label={`${label}: ${text}`} onClick={() => speak(text)}>
      🔊
    </button>
  );
}

export function ProgressBar({ value, max }: { value: number; max: number }) {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100);
  return (
    <div className="bar" role="progressbar" aria-valuemin={0} aria-valuemax={max} aria-valuenow={value}>
      <div className="bar-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <section className={`card ${className}`}>{children}</section>;
}

export const shuffle = <T,>(a: T[]): T[] => {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
};

export const norm = (s: string) => s.replace(/[\s.,!?~]/g, '').toLowerCase();
