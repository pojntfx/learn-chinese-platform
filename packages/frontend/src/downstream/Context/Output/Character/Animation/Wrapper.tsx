import * as React from "react";
import { Component } from "react";
import styled from "styled-components";
import { Trigger } from "./Trigger";
import { Controls } from "./Controls";
import { Options } from "../Quiz/Options";
import { Display } from "../Quiz/Display";

interface IWrapper {
  stroke: any;
}

const WrapperView = styled("div")``;

class Wrapper extends Component<IWrapper> {
  state = {
    running: false,
    ranOnce: false,
    width: 100,
    height: 100,
    speed: 1
  };

  zoomIn = () =>
    this.setState({
      width: this.state.width + 10,
      height: this.state.height + 10
    });

  zoomOut = () =>
    this.setState({
      width: this.state.width - 10,
      height: this.state.height - 10
    });

  increaseSpeed = () =>
    this.setState({
      speed: this.state.speed + 1
    });

  decreaseSpeed = () =>
    this.setState({
      speed: this.state.speed - 1
    });

  replay = () =>
    this.setState({
      running: !this.state.running,
      ranOnce: true
    });

  render() {
    const { stroke } = this.props;

    return (
      <WrapperView {...this.props}>
        <Options onZoomIn={this.zoomIn} onZoomOut={this.zoomOut} />
        <Display stroke={stroke} />
        <Controls
          onSlower={this.decreaseSpeed}
          onReplay={this.replay}
          onFaster={this.increaseSpeed}
          running={this.state.ranOnce}
        />
      </WrapperView>
    );
  }
}

export { IWrapper, Wrapper };
