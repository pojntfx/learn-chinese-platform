import { getVoiceForHanzi, getVoiceForPinyin } from "../utils/voice.util";
import { ServiceSchema } from "moleculer";

const Voice: ServiceSchema = {
  name: "voice",
  version: 1,
  actions: {
    getVoiceForHanzi(ctx) {
      return getVoiceForHanzi(ctx.params.hanzi);
    },
    getVoiceForPinyin: {
      cache: true,
      params: {
        pinyin: "string"
      },
      handler(ctx) {
        return getVoiceForPinyin(ctx.params.pinyin);
      }
    }
  }
};

export { Voice };
