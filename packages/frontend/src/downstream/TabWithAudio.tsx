import * as React from "react";
import { Component } from "react";
import { Tab, Button } from "semantic-ui-react";
import { TabWrapper } from "./TabWrapper";
import styled from "styled-components";

interface ITabWithAudio {
  text: string;
  audioSrc: string;
}

class TabWithAudio extends Component<ITabWithAudio> {
  state = {
    audioIsOpen: false
  };

  toggleAudio = () =>
    this.setState({
      audioIsOpen: !this.state.audioIsOpen
    });

  render() {
    return (
      <Tab.Pane attached="top">
        <TabWrapper>
          <SmallerDisplayText>{this.props.text}</SmallerDisplayText>
          <Button
            icon="sound"
            active={this.state.audioIsOpen}
            onClick={this.toggleAudio}
          />
        </TabWrapper>
        {this.state.audioIsOpen && (
          <Audio autoPlay controls src={this.props.audioSrc} />
        )}
      </Tab.Pane>
    );
  }
}

const SmallerDisplayText = styled("div")`
  font-size: 1.25em;
`;

const Audio = styled("audio")`
  margin-top: 1em;
  width: 100%;
`;

export { TabWithAudio };
