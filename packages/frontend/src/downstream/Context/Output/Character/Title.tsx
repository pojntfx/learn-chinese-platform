import * as React from "react";
import styled from "styled-components";

interface ITitle {
  title: string;
}

const TitleView = styled("div")`
  font-size: 5em;
  line-height: 1.5em;
  font-weight: bold;
`;

const Title = ({ title, ...otherProps }: ITitle) => (
  <TitleView {...otherProps}>{title}</TitleView>
);

export { ITitle, Title };
