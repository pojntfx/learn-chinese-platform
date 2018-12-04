import { ServiceSchema } from "moleculer";
import { getContextForPinyin } from "../utils/context.util";

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
