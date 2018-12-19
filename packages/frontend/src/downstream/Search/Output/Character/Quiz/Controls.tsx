import * as React from "react";
import styled from "styled-components";

interface IControls {
  onStartQuiz: any;
  running?: boolean;
}

const ControlsView = styled("div")``;

const Controls = ({ onStartQuiz, running, ...otherProps }: IControls) => (
  <ControlsView {...otherProps}>
    <button onClick={onStartQuiz}>
      {running ? "Restart quiz" : "Start quiz"}
    </button>
  </ControlsView>
);

export { IControls, Controls };
