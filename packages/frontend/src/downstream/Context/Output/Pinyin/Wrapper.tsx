import { Audio } from "./Audio";
import * as React from "react";
import styled from "styled-components";
import { Display } from "./Display";

interface IWrapper {
  text: string;
  audioSrc: string;
}

const WrapperView = styled("div")`
  margin-top: 1em;
`;

const Wrapper = ({ text, audioSrc, ...otherProps }: IWrapper) => (
  <WrapperView {...otherProps}>
    <Display text={text} />
    <Audio src={audioSrc} />
  </WrapperView>
);

export { IWrapper, Wrapper };
