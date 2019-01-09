import * as React from "react";
import { Component } from "react";
import styled from "styled-components";
import { Trigger } from "./Trigger";
import { Display } from "./Display";
import { Options } from "./Options";
import { Controls } from "./Controls";
import { Statistics } from "./Statistics";
import { Message } from "./Message";
import { SectionView } from "../Animation/Wrapper";

interface IWrapper {
  stroke: any;
}

const WrapperView = styled("div")``;

class Wrapper extends Component<IWrapper> {
  state = {
    running: false,
    finishedOnce: false,
    width: 220,
    height: 220,
    remaining: 0,
    mistakesInQuiz: 0,
    mistakesInStroke: 0,
    messages: [
      {
        text: "You made a mistake"
      },
      {
        text: "You did it!",
        positive: true
      }
    ]
  };

  startOrRestart = () => {
    this.setState({
      running: !this.state.running
    });
    this.finishQuiz();
  };

  finishQuiz = () =>
    this.setState({
      finishedOnce: true
    });

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

  render() {
    const { stroke } = this.props;

    return (
      <WrapperView {...this.props}>
        <SectionView>
          <Options onZoomIn={this.zoomIn} onZoomOut={this.zoomOut} />
        </SectionView>
        <SectionView theme={{ hanzi: true }}>
          <Display
            stroke={stroke}
            width={this.state.width}
            height={this.state.height}
            speed={1}
            quiz
          />
        </SectionView>
        <SectionView>
          <Controls
            onStartQuiz={this.startOrRestart}
            running={this.state.finishedOnce}
          />
        </SectionView>
        {this.state.messages.map((message, index) => (
          <Message
            text={message.text}
            positive={message.positive}
            key={index}
          />
        ))}
        <SectionView>
          <Statistics
            remaining={this.state.remaining}
            mistakesInQuiz={this.state.mistakesInQuiz}
            mistakesInStroke={this.state.mistakesInStroke}
          />
        </SectionView>
      </WrapperView>
    );
  }
}

export { IWrapper, Wrapper };
