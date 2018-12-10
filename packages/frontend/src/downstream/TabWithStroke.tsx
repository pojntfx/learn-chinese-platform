import * as React from "react";
import { Component } from "react";
import styled from "styled-components";
import { Tab } from "semantic-ui-react";
import { Button } from "@libresat/frontend-components";
import { TabWrapper } from "./TabWrapper";
import { IVector } from "./Context";

interface ITabWithStroke {
  hanzi: string;
  stroke: IVector;
}

class TabWithStroke extends Component<ITabWithStroke> {
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
          <Button
            icon="paint brush"
            active={this.state.strokeIsOpen}
            onClick={this.toggleStroke}
          />
        </TabWrapper>
        {this.state.strokeIsOpen && "Not yet implemented."}
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
