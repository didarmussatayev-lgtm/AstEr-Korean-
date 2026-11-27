const cached: Record<string, SpeechSynthesisVoice | null | undefined> = {};

function voiceFor(lang: 'ko' | 'zh'): SpeechSynthesisVoice | null {
  if (cached[lang]) return cached[lang]!;
  const voices = window.speechSynthesis?.getVoices() ?? [];
  const pick =
    lang === 'zh'
      ? voices.find((v) => /^zh[-_]cn/i.test(v.lang)) ?? voices.find((v) => v.lang.toLowerCase().startsWith('zh'))
      : voices.find((v) => v.lang.toLowerCase().startsWith('ko'));
  cached[lang] = pick ?? null;
  return cached[lang]!;
}

/** Chinese text: has Han characters and no Hangul. */
export const isChinese = (text: string) => /[\u4e00-\u9fff]/.test(text) && !/[\uac00-\ud7a3]/.test(text);

export const canSpeak = () => typeof window !== 'undefined' && 'speechSynthesis' in window;

export function speak(text: string, rate = 0.85) {
  if (!canSpeak()) return;
  const u = new SpeechSynthesisUtterance(text);
  const zh = isChinese(text);
  u.lang = zh ? 'zh-CN' : 'ko-KR';
  u.rate = zh ? Math.min(rate, 0.8) : rate;
  const v = voiceFor(zh ? 'zh' : 'ko');
  if (v) u.voice = v;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}

if (canSpeak()) {
  window.speechSynthesis.onvoiceschanged = () => {
    delete cached.ko;
    delete cached.zh;
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
