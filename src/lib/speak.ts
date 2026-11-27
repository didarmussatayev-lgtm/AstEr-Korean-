let cached: SpeechSynthesisVoice | null | undefined;

function koVoice(): SpeechSynthesisVoice | null {
  if (cached) return cached;
  const voices = window.speechSynthesis?.getVoices() ?? [];
  cached = voices.find((v) => v.lang.toLowerCase().startsWith('ko')) ?? null;
  return cached;
}

export const canSpeak = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

export function speak(text: string, rate = 0.85) {
  if (!canSpeak()) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ko-KR';
  u.rate = rate;
  const v = koVoice();
  if (v) u.voice = v;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

if (canSpeak()) {
  window.speechSynthesis.onvoiceschanged = () => {
    cached = undefined;
  };
}

/** URL of a file in public/ (works with the relative base of the build). */
export const media = (src: string) => (/^(https?:)?\/\//.test(src) || src.startsWith('/') ? src : `./${src}`);

let current: HTMLAudioElement | null = null;

/** Plays a recording when there is one, otherwise reads the text aloud. */
export function play(text: string, src?: string) {
  current?.pause();
  if (!src) return speak(text);
  if (canSpeak()) window.speechSynthesis.cancel();
  current = new Audio(media(src));
  current.play().catch(() => speak(text));
}
