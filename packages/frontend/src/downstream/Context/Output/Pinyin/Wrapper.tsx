import { Audio } from "./Audio";
import * as React from "react";
import { Component } from "react";
import styled from "styled-components";
import { Trigger } from "./Trigger";
import { Display } from "./Display";

interface IWrapper {
  text: string;
  audioSrc: string;
}

const WrapperView = styled("div")``;

class Wrapper extends Component<IWrapper> {
  state = {
    open: false
  };

  toggleAudio = () =>
    this.setState({
      open: !this.state.open
    });

  render() {
    const { text, audioSrc } = this.props;

    return (
      <WrapperView {...this.props}>
        <Display text={text} />
        <Trigger onTrigger={this.toggleAudio} active={this.state.open} />
        {this.state.open && <Audio src={audioSrc} />}
      </WrapperView>
    );
  }
}

export { IWrapper, Wrapper };
