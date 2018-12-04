import { ServiceSchema } from "moleculer";
import {
  getSimplifiedHanziForPinyin,
  getTraditionalHanziForPinyin,
  getPinyinForHanzi,
  getEnglishForHanzi,
  getEnglishForPinyin,
  getHanziForEnglish,
  getPinyinForEnglish
} from "@learn-chinese-platform/core";

const Translator: ServiceSchema = {
  name: "translator",
  version: 1,
  actions: {
    getSimplifiedHanziForPinyin: {
      params: {
        pinyin: "string"
      },
      handler: ctx => getSimplifiedHanziForPinyin(ctx.params.pinyin)
    },
    getTraditionalHanziForPinyin: {
      params: {
        pinyin: "string"
      },
      handler: ctx => getTraditionalHanziForPinyin(ctx.params.pinyin)
    },
    getPinyinForHanzi: {
      params: {
        hanzi: "string"
      },
      handler: ctx => getPinyinForHanzi(ctx.params.hanzi)
    },
    getEnglishForHanzi: {
      params: {
        hanzi: "string"
      },
      handler: ctx => getEnglishForHanzi(ctx.params.hanzi)
    },
    getEnglishForPinyin: {
      params: {
        pinyin: "string"
      },
      handler: ctx => getEnglishForPinyin(ctx.params.pinyin)
    },
    getHanziForEnglish: {
      params: {
        english: "string"
      },
      handler: ctx => getHanziForEnglish(ctx.params.english)
    },
    getPinyinForEnglish: {
      params: {
        english: "string"
      },
      handler: ctx => getPinyinForEnglish(ctx.params.english)
    }
  }
};

export { Translator };
