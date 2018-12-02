import { getVoiceForHanzi, getVoiceForPinyin } from "../utils/voice.util";
import { ServiceSchema } from "moleculer";

const Voice: ServiceSchema = {
  name: "voice",
  version: 1,
  actions: {
    getVoiceForHanzi: {
      params: {
        hanzi: "string"
      },
      handler: ctx => getVoiceForHanzi(ctx.params.hanzi)
    },
    getVoiceForPinyin: {
      params: {
        pinyin: "string"
      },
      handler: ctx => getVoiceForPinyin(ctx.params.pinyin)
    }
  }
};

export { Voice };
