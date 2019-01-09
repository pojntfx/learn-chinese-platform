import * as React from "react";
import { Component } from "react";
import styled from "styled-components";
import HanziWriter from "hanzi-writer";
import uniqueId from "react-html-id";

interface IDisplay {
  stroke: any;
  width: number;
  height: number;
  speed: number;
  quiz?: boolean;
}

const DisplayView = styled("div")``;

class Display extends Component<IDisplay> {
  writer: any;
  lastUniqueId: any;

  constructor(props: IDisplay) {
    super(props);
    uniqueId.enableUniqueIds(this);
  }

  componentDidMount = () => this.update();

  componentDidUpdate = () => this.update();

  update = () => {
    this.create(this.props.width, this.props.height, this.props.speed);
    !this.props.quiz && this.animate();
  };

  create = (width: number, height: number, speed: number) => {
    const writer = window.document.getElementById(this.lastUniqueId());
    if (writer) {
      writer.innerHTML = "";
    }
    !(this.props.stroke.length > 1) &&
      (this.writer = HanziWriter.create(
        this.lastUniqueId(),
        this.props.stroke,
        {
          width,
          height,
          padding: 5,
          strokeAnimationSpeed: speed,
          delayBetweenStrokes: (1000 * 1) / speed,
          delayBetweenLoops: 3000,
          charDataLoader: () => this.props.stroke
        }
      ));
  };

  animate = () => this.writer.loopCharacterAnimation();

  render() {
    return (
      <DisplayView {...this.props}>
        <div id={this.lastUniqueId()} />
      </DisplayView>
    );
  }
}

export { IDisplay, Display };
