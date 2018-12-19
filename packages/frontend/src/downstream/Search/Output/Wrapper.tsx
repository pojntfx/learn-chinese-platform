import { IWrapper as ICharacter } from "./Character/Wrapper";
import { IWrapper as IDefinitions } from "./Definitions/Wrapper";
import { IWrapper as IPinyin } from "./Pinyin/Wrapper";

interface IWrapper {
  character: ICharacter;
  definitions: IDefinitions;
  pinyin: IPinyin;
}

export { IWrapper };
