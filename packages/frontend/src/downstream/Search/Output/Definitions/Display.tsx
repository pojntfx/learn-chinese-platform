import * as React from "react";

interface IDisplay {
  src: string;
}

const Display = ({ src, ...otherProps }: IDisplay) => (
  <img src={src} {...otherProps} />
);

export { IDisplay, Display };
