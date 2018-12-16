import { ServiceSchema } from "moleculer";
import { getMediaForEnglish } from "@learn-chinese-platform/core";

const Media: ServiceSchema = {
  name: "media",
  version: 1,
  actions: {
    getMediaForEnglish: {
      params: {
        english: "string"
      },
      handler: ctx => getMediaForEnglish(ctx.params.english)
    }
  }
};

export { Media };
