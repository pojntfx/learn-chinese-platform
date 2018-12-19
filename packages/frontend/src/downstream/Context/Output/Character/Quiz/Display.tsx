import * as React from "react";
import styled from "styled-components";

interface IDisplay {
  stroke: any;
}

const DisplayView = styled("div")``;

const Display = ({ stroke, ...otherProps }: IDisplay) => (
  <DisplayView {...otherProps}>{JSON.stringify(stroke)}</DisplayView>
);

export { IDisplay, Display };
