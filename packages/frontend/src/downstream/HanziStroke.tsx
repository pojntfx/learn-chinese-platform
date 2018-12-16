import * as React from "react";
import { Component } from "react";
import HanziWriter from "hanzi-writer";
import uniqueId from "react-html-id";
import { Button, Message } from "semantic-ui-react";
import { IVector } from "./Context";
import { HorizontalScrollWrapper } from "@libresat/frontend-components/dist/components";
import { HanziWrapper } from "./HanziWrapper";

interface IHanziStrokeProps {
  hanzi: string;
  stroke: IVector;
  defaultStrokeSpeed: number;
}

class HanziStroke extends Component<IHanziStrokeProps> {
  writer: any;
  lastUniqueId: any;

  state = {
    width: 220,
    height: 220,
    speed: 1
  };

  constructor(props: IHanziStrokeProps) {
    super(props);
    uniqueId.enableUniqueIds(this);
  }

  animate = () => this.writer.loopCharacterAnimation();

  componentDidMount() {
    if (!(this.props.hanzi.length > 1)) {
      this.createHanzi(
        this.state.width,
        this.state.width,
        this.props.defaultStrokeSpeed
      );
      this.animate();
      this.setState({
        speed: this.props.defaultStrokeSpeed
      });
    }
  }

  zoomIn = () => {
    const writer = window.document.getElementById(this.lastUniqueId());
    if (writer) {
      writer.innerHTML = "";
    }
    this.createHanzi(
      this.state.width + 20,
      this.state.height + 20,
      this.state.speed
    );
    this.setState({
      width: this.state.width + 20,
      height: this.state.height + 20
    });
    this.animate();
  };

  zoomOut = () => {
    const writer = window.document.getElementById(this.lastUniqueId());
    if (writer) {
      writer.innerHTML = "";
    }
    this.createHanzi(
      this.state.width - 20,
      this.state.height - 20,
      this.state.speed
    );
    this.setState({
      width: this.state.width - 20,
      height: this.state.height - 20
    });
    this.animate();
  };

  createHanzi = (width: number, height: number, speed: number) =>
    !(this.props.hanzi.length > 1) &&
    (this.writer = HanziWriter.create(this.lastUniqueId(), this.props.hanzi, {
      width,
      height,
      padding: 5,
      strokeAnimationSpeed: speed,
      delayBetweenStrokes: (1000 * 1) / speed,
      delayBetweenLoops: 3000,
      charDataLoader: () => this.props.stroke
    }));

  increaseSpeed = () => {
    const writer = window.document.getElementById(this.lastUniqueId());
    if (writer) {
      writer.innerHTML = "";
    }
    this.createHanzi(this.state.width, this.state.height, this.state.speed + 1);
    this.setState({
      speed: this.state.speed + 1
    });
    this.animate();
  };

  decreaseSpeed = () => {
    const writer = window.document.getElementById(this.lastUniqueId());
    if (writer) {
      writer.innerHTML = "";
    }
    this.createHanzi(
      this.state.width,
      this.state.height,
      this.state.speed - this.state.speed / 5
    );
    this.setState({
      speed: this.state.speed - this.state.speed / 5
    });
    this.animate();
  };

  render() {
    return (
      <>
        {!(this.props.hanzi.length > 1) ? (
          <>
            <HanziWrapper>
              <Button.Group fluid>
                <Button
                  content="Zoom out"
                  icon="zoom out"
                  onClick={this.zoomOut}
                />

                <Button
                  content="Zoom in"
                  icon="zoom in"
                  onClick={this.zoomIn}
                />
              </Button.Group>
            </HanziWrapper>
            <HanziWrapper>
              <div id={this.lastUniqueId()} />
            </HanziWrapper>
            <HanziWrapper>
              <Button.Group fluid>
                <Button
                  content="Slower"
                  icon="minus"
                  onClick={this.decreaseSpeed}
                />
                <Button
                  content="Replay animation"
                  icon="refresh"
                  onClick={this.animate}
                  primary
                />
                <Button
                  content="Faster"
                  icon="add"
                  onClick={this.increaseSpeed}
                />
              </Button.Group>
            </HanziWrapper>
          </>
        ) : (
          <Message
            error
            icon="warning"
            header="Oh no!"
            content="Multiple Hanzi are not yet supported. Try searching them individually!"
          />
        )}
      </>
    );
  }
}

export { HanziStroke };
