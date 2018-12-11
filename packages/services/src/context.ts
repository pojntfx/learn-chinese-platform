import { ServiceSchema, Errors } from "moleculer";
import { getContextForPinyin } from "@learn-chinese-platform/core";
import {
  getContextForHanzi,
  getContextForEnglish,
  getContext
} from "@learn-chinese-platform/core/dist/context";

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
      handler: async ctx =>
        getContextForPinyin(ctx.params.pinyin, ctx.params.precise)
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
      handler: async ctx =>
        getContextForHanzi(ctx.params.hanzi, ctx.params.precise)
    },
    getContextForEnglish: {
      params: {
        english: "string",
        precise: {
          type: "boolean",
          convert: true,
          optional: true
        }
      },
      handler: async ctx =>
        await getContextForEnglish(ctx.params.english, ctx.params.precise)
    },
    getContext: {
      params: {
        query: "string",
        precise: {
          type: "boolean",
          convert: true,
          optional: true
        }
      },
      handler: async ctx =>
        getContext(ctx.params.query, ctx.params.precise).then(async res => {
          if (res.length === 0) {
            throw new Errors.MoleculerError(
              "No Context Found",
              404,
              "NO_CONTEXT_FOUND"
            );
          } else {
            return res;
          }
        })
    }
  }
};

export { Context };
