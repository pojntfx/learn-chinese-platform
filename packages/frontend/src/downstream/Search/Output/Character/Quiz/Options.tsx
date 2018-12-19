import * as React from "react";
import styled from "styled-components";

interface IOptions {
  onZoomOut: any;
  onZoomIn: any;
}

const OptionsView = styled("div")``;

const Options = ({ onZoomOut, onZoomIn, ...otherProps }: IOptions) => (
  <OptionsView {...otherProps}>
    <button onClick={onZoomIn}>Zoom in</button>
    <button onClick={onZoomOut}>Zoom out</button>
  </OptionsView>
);

export { IOptions, Options };
