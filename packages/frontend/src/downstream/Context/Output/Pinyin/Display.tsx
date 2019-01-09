import * as React from "react";
import styled from "styled-components";

interface IDisplay {
  text: string;
  theme?: any;
}

const DisplayView = styled("div")`
  font-size: 3em;
  font-style: italic;
  font-weight: bold;
  ${props => props.theme.disabled && `color: #cacbcd;`}
`;

const Display = ({ text, ...otherProps }: IDisplay) => (
  <DisplayView {...otherProps}>{text}</DisplayView>
);

export { IDisplay, Display };
