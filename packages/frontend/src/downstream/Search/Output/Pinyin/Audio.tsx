import * as React from "react";
import styled from "styled-components";

interface IAudio {
  src: string;
}

const AudioView = styled("audio")`
  margin-top: 1em;
  width: 100%;
`;

const Audio = ({ src, ...otherProps }: IAudio) => (
  <AudioView src={src} controls autoPlay {...otherProps} />
);

export { IAudio, Audio };
