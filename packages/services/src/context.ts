import { ServiceSchema } from "moleculer";
import { getContextForPinyin } from "@learn-chinese-platform/core";

const Context: ServiceSchema = {
  name: "context",
  version: 1,
  actions: {
    getContextForPinyin: {
      params: {
        pinyin: "string"
      },
      handler: ctx => getContextForPinyin(ctx.params.pinyin)
    }
  }
};

export { Context };
