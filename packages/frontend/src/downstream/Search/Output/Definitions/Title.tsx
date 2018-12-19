import * as React from "react";

interface ITitle {
  title: string;
}

const Title = ({ title, ...otherProps }: ITitle) => (
  <h1 {...otherProps}>{title}</h1>
);

export { ITitle, Title };
