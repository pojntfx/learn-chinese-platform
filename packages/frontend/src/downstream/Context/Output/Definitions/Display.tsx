import * as React from "react";
import styled from "styled-components";
import { Paper } from "@libresat/frontend-components";
import { Header } from "./Header";
import { List as Images } from "./ImageList";

interface IDisplay {
  title?: boolean;
  definition: string;
  endpoint: string;
}

const DisplayViewWithoutTitle = styled("div")``;

const DisplayViewWithTitle = styled(Paper)``;

const Display = ({ title, definition, endpoint, ...otherProps }: IDisplay) =>
  title ? (
    <DisplayViewWithTitle {...otherProps}>
      <Header withTitle definition={definition} />
      <Images definition={definition} endpoint={endpoint} />
    </DisplayViewWithTitle>
  ) : (
    <DisplayViewWithoutTitle {...otherProps}>
      <Header definition={definition} />
      <Images definition={definition} endpoint={endpoint} />
    </DisplayViewWithoutTitle>
  );

export { IDisplay, Display };
