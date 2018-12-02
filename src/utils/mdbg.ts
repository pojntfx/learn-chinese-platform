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

export {
  getSimplifiedHanziForPinyin,
  getTraditionalHanziForPinyin,
  getPinyinForHanzi
};
