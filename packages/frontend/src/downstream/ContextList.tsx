import * as React from "react";
import styled from "styled-components";
import {
  HorizontalScrollWrapper,
  Paper
} from "@libresat/frontend-components/dist/components";
import { Context, IContextProps } from "./Context";

const ContextWrapper = styled(HorizontalScrollWrapper)`
  & .ui.grid {
    margin: 0 !important;
  }
  & .ui.segment:not(:last-child) {
    margin-right: 1em;
  }
  & .ui.segment:last-child {
    margin-bottom: 1em !important;
  }
`;

interface IContextListProps {
  contexts: IContextProps[];
}

const ContextList = (props: IContextListProps) => (
  <ContextWrapper>
    {props.contexts.map((context, index) => (
      <Paper key={index}>
        <Context {...context} />
      </Paper>
    ))}
  </ContextWrapper>
);

export { ContextList };
