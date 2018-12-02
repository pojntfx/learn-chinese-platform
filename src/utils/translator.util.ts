import * as mdbg from "mdbg";
import * as translate from "baidu-translate-api";

/**
 * Get all simplified hanzi for pinyin
 * @param pinyin Pinyin to find simplified hanzi for
 */
const getSimplifiedHanziForPinyin = async (pinyin: string): Promise<string[]> =>
  mdbg.getByPinyin(pinyin).then(hanzi => hanzi.map(hanzi => hanzi.simplified));

/**
 * Get all traditional hanzi for pinyin
 * @param pinyin Pinyin to find traditional hanzi for
 */
const getTraditionalHanziForPinyin = async (
  pinyin: string
): Promise<string[]> =>
  mdbg.getByPinyin(pinyin).then(hanzi => hanzi.map(hanzi => hanzi.traditional));

/**
 * Get all pinyin for hanzi
 * @param hanzi Hanzi to find pinyin for
 */
const getPinyinForHanzi = async (hanzi: string): Promise<string[]> =>
  mdbg
    .getByHanzi(hanzi)
    .then(pinyin =>
      Object.keys(pinyin.definitions).map(
        pinyinOption => pinyin.definitions[pinyinOption].pinyin
      )
    );

/**
 * Get all english for hanzi
 * @param hanzi Hanzi to find english for
 */
const getEnglishForHanzi = async (hanzi: string): Promise<string[]> =>
  mdbg
    .getByHanzi(hanzi)
    .then(pinyin =>
      Object.keys(pinyin.definitions).map(
        pinyinOption => pinyin.definitions[pinyinOption].translations
      )
    );

/**
 * Get all english for pinyin
 * @param pinyin Pinyin to find english for
 */
const getEnglishForPinyin = async (pinyin: string): Promise<string[][]> =>
  mdbg
    .getByPinyin(pinyin)
    .then(hanzis =>
      hanzis.map(hanzi =>
        Object.keys(hanzi.definitions).map(
          pinyinOption => hanzi.definitions[pinyinOption].translations
        )
      )
    );

/**
 * Get hanzi for english
 * @param english English to find hanzi for
 */
const getHanziForEnglish = async (english: string): Promise<string> =>
  translate(english, { from: "en", to: "zh" }).then(
    res => res.trans_result.dst
  );

/**
 * Get all pinyin for hanzi
 * @param english English to find pinyin for
 */
const getPinyinForEnglish = async (english: string): Promise<string[]> =>
  getHanziForEnglish(english).then(hanzi => getPinyinForHanzi(hanzi));

export {
  getSimplifiedHanziForPinyin,
  getTraditionalHanziForPinyin,
  getPinyinForHanzi,
  getEnglishForHanzi,
  getEnglishForPinyin,
  getHanziForEnglish,
  getPinyinForEnglish
};
