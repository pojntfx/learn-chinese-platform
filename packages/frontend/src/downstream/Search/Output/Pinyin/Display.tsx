import * as React from "react";
import styled from "styled-components";

interface IDisplay {
  text: string;
}

const DisplayView = styled("b")`
  font-size: 3em;
  margin: 0.5em;
  margin-left: 0.5em;
  margin-left: inherit;
`;

const Display = ({ text, ...otherProps }: IDisplay) => (
  <DisplayView {...otherProps}>{text}</DisplayView>
);

export { IDisplay, Display };
