import { ServiceSchema } from "moleculer";
import { getVectorForHanzi } from "../utils/character.util";

const Character: ServiceSchema = {
  name: "character",
  version: 1,
  actions: {
    getVectorForHanzi: {
      params: {
        hanzi: "string"
      },
      handler: ctx => getVectorForHanzi(ctx.params.hanzi)
    }
  }
};

export { Character };
