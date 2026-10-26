export const INITIALS = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
export const VOWELS = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
export const FINALS = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

export interface Parts {
  initial: string;
  vowel: string;
  final: string;
}

export type Cell = 'initial' | 'vowel' | 'final';
export type Shape = 'vertical' | 'horizontal' | 'mixed';

const BASE = 0xac00;

export const isSyllable = (ch: string) => {
  const c = ch.charCodeAt(0) - BASE;
  return ch.length === 1 && c >= 0 && c <= 11171;
};

export function decompose(ch: string): Parts | null {
  if (!isSyllable(ch)) return null;
  const c = ch.charCodeAt(0) - BASE;
  return { initial: INITIALS[Math.floor(c / 588)], vowel: VOWELS[Math.floor((c % 588) / 28)], final: FINALS[c % 28] };
}

export function compose(p: Parts): string {
  const i = INITIALS.indexOf(p.initial);
  const v = VOWELS.indexOf(p.vowel);
  const f = FINALS.indexOf(p.final);
  return String.fromCharCode(BASE + (i * 21 + v) * 28 + f);
}

/** Vertical vowels stand to the right of the consonant, horizontal ones below it, compound ones wrap around. */
export function shapeOf(vowel: string): Shape {
  if ('ㅏㅐㅑㅒㅓㅔㅕㅖㅣ'.includes(vowel)) return 'vertical';
  if ('ㅗㅛㅜㅠㅡ'.includes(vowel)) return 'horizontal';
  return 'mixed';
}

export const cellsOf = (p: Parts): Cell[] => (p.final ? ['initial', 'vowel', 'final'] : ['initial', 'vowel']);
