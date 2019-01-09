import * as React from "react";
import styled from "styled-components";

interface ITitle {
  title: string;
  theme?: any;
}

const TitleView = styled("div")`
  font-size: 5em;
  line-height: 1.5em;
  font-weight: bold;
  ${props => props.theme.disabled && `color: #cacbcd;`}
`;

const Title = ({ title, ...otherProps }: ITitle) => (
  <TitleView {...otherProps}>{title}</TitleView>
);

export { ITitle, Title };
