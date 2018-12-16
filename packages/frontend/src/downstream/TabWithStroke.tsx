import * as React from "react";
import { Component } from "react";
import styled from "styled-components";
import { Tab, Message } from "semantic-ui-react";
import { Button } from "@libresat/frontend-components";
import { TabWrapper } from "./TabWrapper";
import { IVector } from "./Context";
import { HanziStroke } from "./HanziStroke";

interface ITabWithStrokeProps {
  hanzi: string;
  stroke: IVector;
  traditional?: boolean;
  defaultStrokeSpeed: number;
}

class TabWithStroke extends Component<ITabWithStrokeProps> {
  state = {
    strokeIsOpen: false
  };

  toggleStroke = () =>
    this.setState({
      strokeIsOpen: !this.state.strokeIsOpen
    });

  render() {
    return (
      <Tab.Pane attached="bottom">
        <TabWrapper>
          <DisplayText>{this.props.hanzi}</DisplayText>
          {!this.props.traditional ? (
            <Button
              icon="paint brush"
              active={this.state.strokeIsOpen}
              onClick={this.toggleStroke}
            />
          ) : (
            <Button icon="paint brush" disabled />
          )}
        </TabWrapper>
        {this.props.traditional && (
          <Message
            error
            header="Oh no!"
            content="Strokes for traditional hanzi are not yet available."
            icon="warning"
          />
        )}
        {!this.props.traditional && this.state.strokeIsOpen && (
          <HanziStroke {...this.props} />
        )}
      </Tab.Pane>
    );
  }
}

const DisplayText = styled("div")`
  font-size: 3em;
  margin: 0.5em;
  margin-left: inherit;
`;

export { TabWithStroke };
