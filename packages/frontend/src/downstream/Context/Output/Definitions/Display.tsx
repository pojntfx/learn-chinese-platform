import * as React from "react";
import styled from "styled-components";

interface IDisplay {
  title: string;
}

const DisplayView = styled("b")`
  text-align: center;
`;

const Display = ({ title, ...otherProps }: IDisplay) => (
  <DisplayView {...otherProps}>{title}</DisplayView>
);

export { IDisplay, Display };
