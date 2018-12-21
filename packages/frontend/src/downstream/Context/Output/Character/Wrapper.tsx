import * as React from "react";
import styled from "styled-components";

import { Wrapper as Animation } from "./Animation/Wrapper";
import { Wrapper as Quiz } from "./Quiz/Wrapper";
import { Title } from "./Title";

interface IWrapper {
  text: string;
  stroke: any;
}

const WrapperView = styled("div")`
  display: flex;
  align-items: center;
  & > *:nth-child(2) {
    margin-left: 1em;
  }
`;

const Wrapper = ({ text, stroke, ...otherProps }: IWrapper) => (
  <WrapperView {...otherProps}>
    <Title title={text} />
    <Animation stroke={stroke} />
    <Quiz stroke={stroke} />
  </WrapperView>
);

export { IWrapper, Wrapper };
