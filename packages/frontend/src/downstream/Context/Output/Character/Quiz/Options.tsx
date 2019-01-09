import * as React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

interface IOptions {
  onZoomOut: any;
  onZoomIn: any;
}

const OptionsView = styled("div")``;

const Options = ({ onZoomOut, onZoomIn, ...otherProps }: IOptions) => (
  <OptionsView {...otherProps}>
    <Button.Group fluid>
      <Button content="Zoom in" icon="zoom in" onClick={onZoomIn} />
      <Button content="Zoom out" icon="zoom out" onClick={onZoomOut} />
    </Button.Group>
  </OptionsView>
);

export { IOptions, Options };
