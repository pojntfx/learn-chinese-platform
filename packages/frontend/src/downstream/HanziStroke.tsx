import * as React from "react";
import { Component } from "react";
import HanziWriter from "hanzi-writer";
import uniqueId from "react-html-id";
import { Button, Message } from "semantic-ui-react";
import { IVector } from "./Context";
import { HanziWrapper } from "./HanziWrapper";
import {
  Paper,
  Statistics,
  IStatisticsProps
} from "@libresat/frontend-components";
import { VerticalScrollContainer } from "./VerticalScrollContainer";

interface IHanziStrokeProps {
  hanzi: string;
  stroke: IVector;
  defaultStrokeSpeed: number;
  quiz?: boolean;
}

interface IHanziStrokeState {
  width: number;
  height: number;
  speed: number;
  quizIsRunning: boolean;
  quizMessages: string[];
  totalMistakesInThisStroke: number;
  totalMistakesInQuiz: number;
  strokesRemaining: number;
  quizIsSuccessfullyDone: boolean;
}

class HanziStroke extends Component<IHanziStrokeProps> {
  writer: any;
  lastUniqueId: any;

  state: IHanziStrokeState = {
    width: 220,
    height: 220,
    speed: 1,
    quizIsRunning: false,
    quizMessages: [],
    totalMistakesInThisStroke: 0,
    totalMistakesInQuiz: 0,
    strokesRemaining: 0,
    quizIsSuccessfullyDone: false
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
      !this.props.quiz && this.animate();
      this.setState({
        speed: this.props.defaultStrokeSpeed
      });
      this.setState({
        strokesRemaining: this.props.stroke.strokes.length
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

  toggleQuiz = () => {
    this.setState({
      quizMessages: [],
      quizIsSuccessfullyDone: false,
      quizIsRunning: true,
      strokesRemaining: this.props.stroke.strokes.length,
      totalMistakesInQuiz: 0,
      totalMistakesInThisStroke: 0
    });
    this.writer.quiz({
      onMistake: (strokeData: any) => {
        this.state.quizMessages.push(
          `Oh no! you made a mistake on stroke ${strokeData.strokeNum}`
        );
        this.setState({
          totalMistakesInThisStroke: strokeData.mistakesOnStroke
        });
        this.setState({
          totalMistakesInQuiz: strokeData.totalMistakes
        });
        this.setState({
          strokesRemaining: strokeData.strokesRemaining
        });
      },
      onCorrectStroke: (strokeData: any) => {
        this.setState({
          strokesRemaining: strokeData.strokesRemaining
        });
        this.setState({
          totalMistakesInThisStroke: 0
        });
      },
      onComplete: () => {
        this.setState({
          quizIsSuccessfullyDone: true
        });
      }
    });
  };

  render() {
    return (
      <>
        {!(this.props.hanzi.length > 1) ? (
          this.props.quiz ? (
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
                    content={
                      this.state.quizIsRunning ? "Restart quiz" : "Start quiz"
                    }
                    icon={this.state.quizIsRunning ? "redo" : "play"}
                    onClick={this.toggleQuiz}
                    primary={
                      !this.state.quizIsRunning ||
                      this.state.quizIsSuccessfullyDone
                    }
                    color={this.state.quizIsRunning ? "orange" : undefined}
                  />
                </Button.Group>
              </HanziWrapper>
              {this.state.quizIsSuccessfullyDone ? (
                <Paper color="green">
                  Congratulations! You finished the quiz.
                </Paper>
              ) : (
                <VerticalScrollContainer theme={{ maxHeight: "200px" }}>
                  {this.state.quizMessages.map((message, index) => (
                    <Paper color="red" key={index}>
                      {message}
                    </Paper>
                  ))}
                </VerticalScrollContainer>
              )}
              <Statistics
                statistics={
                  [
                    {
                      icon: "list",
                      title: "Remaining strokes",
                      value: String(this.state.strokesRemaining)
                    },
                    {
                      icon: "warning",
                      title: "Total mistakes in this quiz",
                      value: String(this.state.totalMistakesInQuiz)
                    },
                    {
                      icon: "warning sign",
                      title: "Total mistakes in this stroke",
                      value: String(this.state.totalMistakesInThisStroke)
                    }
                  ] as IStatisticsProps["statistics"]
                }
              />
            </>
          ) : (
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
          )
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
