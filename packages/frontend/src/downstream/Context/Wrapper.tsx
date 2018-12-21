import * as React from "react";
import {
  IWrapper as ICharacter,
  Wrapper as Character
} from "./Output/Character/Wrapper";
import {
  IWrapper as IPinyin,
  Wrapper as Pinyin
} from "./Output/Pinyin/Wrapper";
import {
  IWrapper as IDefinitions,
  Wrapper as Definitions
} from "./Output/Definitions/Wrapper";
import styled from "styled-components";
import { Paper } from "@libresat/frontend-components";

interface IWrapper {
  character: ICharacter;
  pinyin: IPinyin;
  definitions: {
    definitions: IDefinitions["definitions"];
  };
  endpoint: string;
}

const WrapperView = styled(Paper)``;

const Wrapper = ({
  character,
  pinyin,
  definitions,
  endpoint,
  ...otherProps
}: IWrapper) => (
  <WrapperView {...otherProps}>
    <Character {...character} />
    <Pinyin {...pinyin} />
    <Definitions endpoint={endpoint} {...definitions} />
  </WrapperView>
);

export { IWrapper, Wrapper };
