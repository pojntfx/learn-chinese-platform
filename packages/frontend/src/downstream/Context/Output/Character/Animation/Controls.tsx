import * as React from "react";
import styled from "styled-components";

interface IControls {
  onSlower: any;
  onReplay: any;
  onFaster: any;
  running?: boolean;
}

const ControlsView = styled("div")``;

const Controls = ({
  onSlower,
  onReplay,
  onFaster,
  running,
  ...otherProps
}: IControls) => (
  <ControlsView {...otherProps}>
    <button onClick={onSlower}>Slower</button>
    <button onClick={onReplay}>
      {running ? "Replay animation" : "Play animation"}
    </button>
    <button onClick={onFaster}>Faster</button>
  </ControlsView>
);

export { IControls, Controls };
