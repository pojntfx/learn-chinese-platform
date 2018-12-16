import * as React from "react";
import styled from "styled-components";
import {
  HorizontalScrollWrapper,
  Paper
} from "@libresat/frontend-components/dist/components";
import { Context, IContextProps } from "./Context";
import { ContextPlaceholder } from "./ContextPlaceholder";
import Fetch from "react-fetch-component";
import { Message, Transition } from "semantic-ui-react";

const ContextWrapper = styled(HorizontalScrollWrapper)`
  & .ui.grid {
    margin: 0 !important;
  }
  & .ui.segment {
    &:not(:last-child) {
      margin-right: 1em;
    }
    &:last-child {
      margin-bottom: 1em !important;
      margin-right: -1em;
    }
    &:first-child {
      margin-left: 0;
    }
  }
`;

interface IContextListProps {
  endpoint: string;
  query: string;
  precise?: boolean;
  maxMediaPerDefinition: number;
  defaultStrokeSpeed: number;
}

const PRECISE = "&precise=true";
const CONTEXT = "/v1/context/getContext?query=";

const ContextList = (props: IContextListProps) =>
  props.query ? (
    <Fetch
      url={
        props.query !== ""
          ? props.precise
            ? `${props.endpoint}${CONTEXT}${props.query}${PRECISE}`
            : `${props.endpoint}${CONTEXT}${props.query}`
          : `${props.endpoint}${CONTEXT}${props.query}`
      }
      cache={true}
    >
      {({ loading, error, data }) => (
        <>
          {/* browse, fade up, horizontal flip, scale, vertical flip, zoom */}
          <Transition.Group animation="fade up">
            {Array.isArray(data) &&
              data.map((context: IContextProps, index: number) => (
                <div key={index}>
                  <Paper>
                    <Context
                      {...context}
                      maxMediaPerDefinition={props.maxMediaPerDefinition}
                      endpoint={props.endpoint}
                      defaultStrokeSpeed={props.defaultStrokeSpeed}
                    />
                  </Paper>
                </div>
              ))}
          </Transition.Group>
          <Transition.Group>
            {loading &&
              [1, 2, 3].map((_, index) => (
                <Paper key={index}>
                  <ContextPlaceholder />
                </Paper>
              ))}
          </Transition.Group>
          <Transition.Group>
            {error && (
              <div>
                <Message
                  error
                  header="Oh no!"
                  content="No Pinyin, Hanzi or English found!"
                  icon="warning"
                />
              </div>
            )}
          </Transition.Group>
        </>
      )}
    </Fetch>
  ) : (
    <Message
      info
      header="This is a unified search box!"
      content="No need to choose between languages, just start typing."
      icon="info"
    />
  );

export { ContextList };
