import * as googleTTS from "google-tts-api";

/**
 * Get voice for hanzi
 * @param hanzi Hanzi to get voice for
 */
const getVoiceForHanzi = async (hanzi: string): Promise<string> =>
  googleTTS(hanzi, "zh", 1);

/**
 * Get voice for pinyin
 * @param pinyin Pinyin to get voice for
 */
const getVoiceForPinyin = async (pinyin: string): Promise<string> =>
  getVoiceForHanzi(pinyin);

export { getVoiceForHanzi, getVoiceForPinyin };
