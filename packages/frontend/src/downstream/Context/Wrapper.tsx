import * as React from "react";
import { Component } from "react";
import { IWrapper as ICharacter } from "./Output/Character/Wrapper";
import { IWrapper as IPinyin } from "./Output/Pinyin/Wrapper";
import {
  IWrapper as IDefinitions,
  Wrapper as Definitions
} from "./Output/Definitions/Wrapper";
import styled from "styled-components";
import { Paper } from "@libresat/frontend-components";
import { Grid, StrictGridColumnProps, Segment } from "semantic-ui-react";
import { Title as CharacterDisplay } from "./Output/Character/Title";
import { Wrapper as CharacterAnimation } from "./Output/Character/Animation/Wrapper";
import { Trigger as CharacterAnimationTrigger } from "./Output/Character/Animation/Trigger";
import { Wrapper as CharacterQuiz } from "./Output/Character/Quiz/Wrapper";
import { Trigger as CharacterQuizTrigger } from "./Output/Character/Quiz/Trigger";
import { Display as PinyinDisplay } from "./Output/Pinyin/Display";
import { Audio as PinyinAudio } from "./Output/Pinyin/Audio";
import { Trigger as PinyinAudioTrigger } from "./Output/Pinyin/Trigger";

interface IWrapper {
  character: ICharacter;
  pinyin: IPinyin;
  definitions: {
    definitions: IDefinitions["definitions"];
  };
  endpoint: string;
}

const WrapperView = styled(Paper)``;

const TriggerView = styled("div")`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 0.5em;
  }
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const CharacterDisplayView = styled("div")`
  display: flex;
  overflow-x: auto;
  & span {
    white-space: nowrap;
  }
`;

const ContextPart = styled(Grid.Row)`
  ${props =>
    props.theme.first
      ? "padding-bottom: 0!important; padding-top: 0.1em!important"
      : "padding-top: 0!important;"}
`;

const ActionView = styled(Grid.Row)`
  padding-top: 0 !important;
`;

const DefinitionView = styled(Grid.Column)`
  @media (max-width: 766px) {
    & > * {
      margin-top: -1em !important;
    }
  }
`;

class Wrapper extends Component<IWrapper> {
  state = {
    animationIsOpen: false,
    quizIsOpen: false,
    pinyinIsOpen: false
  };

  toggleAnimation = () =>
    this.setState({
      animationIsOpen: !this.state.animationIsOpen
    });

  toggleQuiz = () =>
    this.setState({
      quizIsOpen: !this.state.quizIsOpen
    });

  togglePinyin = () =>
    this.setState({
      pinyinIsOpen: !this.state.pinyinIsOpen
    });

  render() {
    const { character, pinyin, definitions, endpoint } = this.props;

    return (
      <WrapperView {...this.props}>
        <Grid columns="equal" stackable>
          <Grid.Column
            width={
              Math.floor(character.text.length * 2.3) <= 8
                ? 8
                : (Math.floor(
                    character.text.length * 2.3
                  ) as StrictGridColumnProps["width"])
            }
          >
            <Grid columns="equal">
              <ContextPart theme={{ first: true }}>
                <Grid.Column width={3}>
                  <TriggerView>
                    <CharacterAnimationTrigger
                      onTrigger={this.toggleAnimation}
                      active={this.state.animationIsOpen}
                    />
                    <CharacterQuizTrigger
                      onTrigger={this.toggleQuiz}
                      active={this.state.quizIsOpen}
                    />
                  </TriggerView>
                </Grid.Column>
                <Grid.Column>
                  <CharacterDisplayView>
                    <CharacterDisplay title={character.text} />
                  </CharacterDisplayView>
                </Grid.Column>
              </ContextPart>
              {(this.state.animationIsOpen || this.state.quizIsOpen) && (
                <ActionView>
                  <Grid.Column>
                    {this.state.animationIsOpen && (
                      <Segment>
                        <CharacterAnimation stroke={character.stroke} />
                      </Segment>
                    )}
                    {this.state.quizIsOpen && (
                      <Segment>
                        <CharacterQuiz stroke={character.stroke} />
                      </Segment>
                    )}
                  </Grid.Column>
                </ActionView>
              )}
              <ContextPart>
                <Grid.Column width={3}>
                  <TriggerView>
                    <PinyinAudioTrigger
                      onTrigger={this.togglePinyin}
                      active={this.state.pinyinIsOpen}
                    />
                  </TriggerView>
                </Grid.Column>
                <Grid.Column verticalAlign="middle">
                  <PinyinDisplay text={pinyin.text} />
                </Grid.Column>
              </ContextPart>
              {this.state.pinyinIsOpen && (
                <ActionView>
                  <Grid.Column>
                    <PinyinAudio src={pinyin.audioSrc} />
                  </Grid.Column>
                </ActionView>
              )}
            </Grid>
          </Grid.Column>
          <DefinitionView>
            <Definitions endpoint={endpoint} {...definitions} />
          </DefinitionView>
        </Grid>
      </WrapperView>
    );
  }
}

export {
  IWrapper,
  Wrapper,
  CharacterDisplayView,
  CharacterDisplay,
  PinyinDisplay,
  TriggerView,
  DefinitionView
};
