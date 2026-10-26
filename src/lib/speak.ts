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
