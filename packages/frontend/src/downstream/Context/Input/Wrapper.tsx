import * as React from "react";
import { IInput, Input } from "./Input";
import { IOptions, Options } from "./Options";
import { Segment } from "semantic-ui-react";
import styled from "styled-components";

interface IWrapper {
  input: IInput;
  options: IOptions;
}

const WrapperView = styled(Segment)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: -1em !important;
  margin-right: -1em !important;
`;

const Wrapper = ({ input, options, ...otherProps }: IWrapper) => (
  <WrapperView {...otherProps}>
    <Input {...input} />
    <Options {...options} />
  </WrapperView>
);

export { IWrapper, Wrapper };
