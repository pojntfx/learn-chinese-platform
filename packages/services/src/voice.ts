import {
  getVoiceForPinyinAlt,
  getVoiceForHanziAlt,
  getFemaleVoiceForHanzi,
  getFemaleVoicesForPinyin,
  getMaleVoicesForPinyin
} from "@learn-chinese-platform/core";
import { ServiceSchema } from "moleculer";

const Voice: ServiceSchema = {
  name: "voice",
  version: 1,
  actions: {
    getFemaleVoiceForHanzi: {
      params: {
        hanzi: "string"
      },
      handler: ctx => getFemaleVoiceForHanzi(ctx.params.hanzi)
    },
    getMaleVoiceForHanzi: {
      params: {
        hanzi: "string"
      },
      handler: ctx => getFemaleVoiceForHanzi(ctx.params.hanzi)
    },
    getFemaleVoicesForPinyin: {
      params: {
        pinyin: "string"
      },
      handler: async ctx =>
        await Promise.all(await getFemaleVoicesForPinyin(ctx.params.pinyin))
    },
    getMaleVoicesForPinyin: {
      params: {
        pinyin: "string"
      },
      handler: async ctx =>
        await Promise.all(await getMaleVoicesForPinyin(ctx.params.pinyin))
    },
    getVoiceForHanziAlt: {
      params: {
        hanzi: "string"
      },
      handler: ctx => getVoiceForHanziAlt(ctx.params.hanzi)
    },
    getVoiceForPinyinAlt: {
      params: {
        pinyin: "string"
      },
      handler: ctx => getVoiceForPinyinAlt(ctx.params.pinyin)
    }
  }
};

export { Voice };
