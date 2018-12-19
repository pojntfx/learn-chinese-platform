import * as React from "react";
import styled from "styled-components";

interface IImage {
  src: string;
}

const ImageView = styled("img")`
  width: 100%;
`;

const Image = ({ src, ...otherProps }: IImage) => (
  <a href={src} {...otherProps}>
    <ImageView src={src} />
  </a>
);

export { IImage, Image };
