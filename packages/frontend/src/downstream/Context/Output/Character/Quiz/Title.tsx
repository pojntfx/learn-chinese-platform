import * as React from "react";
import styled from "styled-components";

interface ITitle {
  title: string;
}

const TitleView = styled("b")`
  text-align: center;
`;

const Title = ({ title, ...otherProps }: ITitle) => (
  <TitleView {...otherProps}>{title}</TitleView>
);

export { ITitle, Title };
