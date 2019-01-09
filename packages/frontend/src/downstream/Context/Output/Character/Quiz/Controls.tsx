import * as React from "react";
import styled from "styled-components";
import { Button } from "@libresat/frontend-components";

interface IControls {
  onStartQuiz: any;
  running?: boolean;
}

const ControlsView = styled("div")``;

const Controls = ({ onStartQuiz, running, ...otherProps }: IControls) => (
  <ControlsView {...otherProps}>
    <Button
      content={running ? "Restart quiz" : "Start quiz"}
      icon={running ? "redo" : "play"}
      color={running ? "orange" : "blue"}
      onClick={onStartQuiz}
      fluid
    />
  </ControlsView>
);

export { IControls, Controls };
