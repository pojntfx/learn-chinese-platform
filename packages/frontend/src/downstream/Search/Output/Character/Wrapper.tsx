import * as React from "react";
import styled from "styled-components";

import { Wrapper as Animation } from "./Animation/Wrapper";
import { Wrapper as Quiz } from "./Quiz/Wrapper";

interface IWrapper {
  text: string;
  stroke: any;
}

const WrapperView = styled("div")``;

const Wrapper = ({ text, stroke, ...otherProps }: IWrapper) => (
  <WrapperView {...otherProps}>
    <Animation text={text} stroke={stroke} />
    <Quiz text={text} stroke={stroke} />
  </WrapperView>
);

export { IWrapper, Wrapper };
