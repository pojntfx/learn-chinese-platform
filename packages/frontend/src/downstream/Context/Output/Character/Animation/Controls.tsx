import * as React from "react";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

interface IControls {
  onSlower: any;
  onReplay: any;
  onFaster: any;
}

const ControlsView = styled("div")``;

const Controls = ({
  onSlower,
  onReplay,
  onFaster,
  ...otherProps
}: IControls) => (
  <ControlsView {...otherProps}>
    <Button.Group fluid>
      <Button content="Slower" icon="minus" onClick={onSlower} />
      <Button
        content="Replay animation"
        icon="refresh"
        onClick={onReplay}
        primary
      />
      <Button content="Faster" icon="plus" onClick={onFaster} />
    </Button.Group>
  </ControlsView>
);

export { IControls, Controls };
