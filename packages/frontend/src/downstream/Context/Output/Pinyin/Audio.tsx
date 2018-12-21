import * as React from "react";
import styled from "styled-components";

interface IAudio {
  src: string;
}

const AudioView = styled("audio")`
  width: 100%;
  border-radius: 0.28571429rem;
`;

const Audio = ({ src, ...otherProps }: IAudio) => (
  <AudioView src={src} controls autoPlay {...otherProps} />
);

export { IAudio, Audio };
