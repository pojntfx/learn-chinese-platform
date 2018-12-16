import * as React from "react";
import {
  Grid,
  Tab as TabTemplate,
  Placeholder,
  Button,
  Segment
} from "semantic-ui-react";
import { ContextTab, EmphasisTab } from "./Context";
import styled from "styled-components";
import { TabWrapper } from "./TabWrapper";

const ContextPlaceholderTemplate = (props: any) => (
  <Grid columns={2} stackable {...props}>
    <Grid.Row stretched>
      <Grid.Column>
        <ContextTab
          panes={[
            {
              menuItem: "Simplified",
              key: "simplified",
              render: () => (
                <TabTemplate.Pane>
                  <Placeholder>
                    <TabWrapper>
                      <Placeholder.Line />
                      <Button icon="paint brush" disabled />
                    </TabWrapper>
                  </Placeholder>
                </TabTemplate.Pane>
              )
            },
            {
              menuItem: "Traditional",
              key: "traditional",
              render: () => (
                <TabTemplate.Pane>
                  <Placeholder>
                    <TabWrapper>
                      <Placeholder.Line />
                      <Button icon="paint brush" disabled />
                    </TabWrapper>
                  </Placeholder>
                </TabTemplate.Pane>
              )
            }
          ]}
        />
        <ContextTab
          menu={{ tabular: true, attached: "bottom" }}
          panes={[
            {
              menuItem: "Male",
              key: "male",
              render: () => (
                <TabTemplate.Pane attached="top">
                  <Placeholder>
                    <TabWrapper>
                      <Placeholder.Line />
                      <Button icon="sound" disabled />
                    </TabWrapper>
                  </Placeholder>
                </TabTemplate.Pane>
              )
            },
            {
              menuItem: "Female",
              key: "female",
              render: () => (
                <TabTemplate.Pane attached="top">
                  <Placeholder>
                    <TabWrapper>
                      <Placeholder.Line />
                      <Button icon="sound" disabled />{" "}
                    </TabWrapper>
                  </Placeholder>
                </TabTemplate.Pane>
              )
            }
          ]}
        />
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <Placeholder>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Image />
            <Placeholder.Line />
          </Placeholder>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

const ContextPlaceholder = styled(ContextPlaceholderTemplate)`
  width: 100% !important;
  @media (min-width: 770px) {
    min-width: 690px !important;
  }
  @media (max-width: 769px) {
    min-width: 262px !important;
  }
  & .placeholder {
    max-width: 100% !important;
  }
`;

export { ContextPlaceholder };
