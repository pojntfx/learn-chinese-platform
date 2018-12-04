import googleTTS from "google-tts-api";
import { buildUrl, voices, languages } from "oddcast-tts-demo";
import { getSimplifiedHanziForPinyin } from "./translator";

/**
 * Get female voice for a hanzi
 * @param hanzi Hanzi to get female voice for
 */
const getFemaleVoiceForHanzi = async (hanzi: string): Promise<string> =>
  buildUrl(hanzi, {
    ...voices.tingting,
    language: languages.zh
  });

/**
 * Get male voice for hanzi
 * @param hanzi Hanzi to get male voice for
 */
const getMaleVoiceForHanzi = async (hanzi: string): Promise<string> =>
  buildUrl(hanzi, {
    ...voices.liang,
    language: languages.zh
  });

/**
 * Get female voices for pinyin
 * @param pinyin Pinyin to get female voices for
 */
const getFemaleVoicesForPinyin = async (pinyin: string) =>
  getSimplifiedHanziForPinyin(pinyin).then(hanzi =>
    hanzi.map(hanzi => getFemaleVoiceForHanzi(hanzi))
  );

/**
 * Get male voices for pinyin
 * @param pinyin Pinyin to get male voices for
 */
const getMaleVoicesForPinyin = async (pinyin: string) =>
  getSimplifiedHanziForPinyin(pinyin).then(hanzi =>
    hanzi.map(hanzi => getMaleVoiceForHanzi(hanzi))
  );

/**
 * Get voice for a hanzi (alternative using `google-tts-api`)
 * @param hanzi Hanzi to get voice for
 */
const getVoiceForHanziAlt = async (hanzi: string): Promise<string> =>
  googleTTS(hanzi, "zh", 1);

/**
 * Get voice for a hanzi (alternative using `google-tts-api`)
 * @param pinyin Pinyin ot get voice for
 */
const getVoiceForPinyinAlt = async (pinyin: string): Promise<string> =>
  getVoiceForHanziAlt(pinyin);

export {
  getFemaleVoiceForHanzi,
  getMaleVoiceForHanzi,
  getFemaleVoicesForPinyin,
  getMaleVoicesForPinyin,
  getVoiceForHanziAlt,
  getVoiceForPinyinAlt
};
