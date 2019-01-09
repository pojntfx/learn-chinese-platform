import * as React from "react";
import { Component } from "react";
import styled from "styled-components";
import { Trigger } from "./Trigger";
import { Controls } from "./Controls";
import { Options } from "../Quiz/Options";
import { Display } from "../Quiz/Display";
import { HorizontalScrollWrapper } from "@libresat/frontend-components/dist/components";

interface IWrapper {
  stroke: any;
}

const WrapperView = styled("div")``;

const SectionView = styled(HorizontalScrollWrapper)`
  & > div {
    margin: 0 auto !important;
    ${props => !props.theme.hanzi && `width: 100%;`}
  }
  &::after {
    padding: 0 !important;
  }
`;

class Wrapper extends Component<IWrapper> {
  state = {
    running: false,
    ranOnce: false,
    width: 220,
    height: 220,
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
    const { stroke, ...otherProps } = this.props;

    return (
      <WrapperView {...otherProps}>
        <SectionView>
          <Options onZoomIn={this.zoomIn} onZoomOut={this.zoomOut} />
        </SectionView>
        <SectionView theme={{ hanzi: true }}>
          <Display
            stroke={stroke}
            width={this.state.width}
            height={this.state.height}
            speed={this.state.speed}
          />
        </SectionView>
        <SectionView>
          <Controls
            onSlower={this.decreaseSpeed}
            onReplay={this.replay}
            onFaster={this.increaseSpeed}
          />
        </SectionView>
      </WrapperView>
    );
  }
}

export { IWrapper, Wrapper, SectionView };
