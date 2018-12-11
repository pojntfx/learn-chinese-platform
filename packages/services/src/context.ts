import { ServiceSchema } from "moleculer";
import { getContextForPinyin } from "@learn-chinese-platform/core";
import { getContextForHanzi } from "@learn-chinese-platform/core/dist/context";

const Context: ServiceSchema = {
  name: "context",
  version: 1,
  actions: {
    getContextForPinyin: {
      params: {
        pinyin: "string",
        precise: {
          type: "boolean",
          convert: true,
          optional: true
        }
      },
      handler: ctx => getContextForPinyin(ctx.params.pinyin, ctx.params.precise)
    },
    getContextForHanzi: {
      params: {
        hanzi: "string",
        precise: {
          type: "boolean",
          convert: true,
          optional: true
        }
      },
      handler: async ctx => {
        await console.log(ctx.params);
        return await getContextForHanzi(ctx.params.hanzi, ctx.params.precise);
      }
    }
  }
};

export { Context };
