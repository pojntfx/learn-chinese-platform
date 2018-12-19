import * as React from "react";
import styled from "styled-components";

interface IError {
  text: string;
}

const ErrorView = styled("div")``;

const ErrorTitleView = styled("b")``;

const Error = ({ text, ...otherProps }: IError) => (
  <ErrorView {...otherProps}>
    <ErrorTitleView>Error:</ErrorTitleView>
    {text}
  </ErrorView>
);

export { IError, Error };
