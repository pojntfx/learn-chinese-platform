import * as mdbg from "mdbg";

const getSimplifiedHanziForPinyin = async pinyin =>
  mdbg.getByPinyin(pinyin).then(hanzi => hanzi.map(hanzi => hanzi.simplified));

const getTraditionalHanziForPinyin = async pinyin =>
  mdbg.getByPinyin(pinyin).then(hanzi => hanzi.map(hanzi => hanzi.traditional));

const getPinyinForHanzi = async hanzi =>
  mdbg
    .getByHanzi(hanzi)
    .then(pinyin =>
      Object.keys(pinyin.definitions).map(
        pinyinOption => pinyin.definitions[pinyinOption].pinyin
      )
    );

const getEnglishForHanzi = async hanzi =>
  mdbg
    .getByHanzi(hanzi)
    .then(pinyin =>
      Object.keys(pinyin.definitions).map(
        pinyinOption => pinyin.definitions[pinyinOption].translations
      )
    );

const getEnglishForPinyin = async pinyin =>
  mdbg
    .getByPinyin(pinyin)
    .then(hanzis =>
      hanzis.map(hanzi =>
        Object.keys(hanzi.definitions).map(
          pinyinOption => hanzi.definitions[pinyinOption].translations
        )
      )
    );

export {
  getSimplifiedHanziForPinyin,
  getTraditionalHanziForPinyin,
  getPinyinForHanzi,
  getEnglishForHanzi,
  getEnglishForPinyin
};
