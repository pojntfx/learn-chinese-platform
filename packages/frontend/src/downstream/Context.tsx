import * as React from "react";
import { Component } from "react";
import {
  Grid,
  Tab as TabTemplate,
  Button,
  Image,
  Segment
} from "semantic-ui-react";
import styled from "styled-components";
import { TabWithStroke } from "./TabWithStroke";
import { TabWithAudio } from "./TabWithAudio";
import { TabWithDefinitions } from "./TabWithDefinitonsAndMedia";

import { Wrapper as Pinyin } from "./Search/Output/Pinyin/Wrapper";
import { Wrapper as Definition } from "./Search/Output/Definitions/Wrapper";

interface IVector {
  strokes: string[];
  medians: string[] | string[][];
}

interface IContextProps {
  hanzi: {
    simplified: { text: string };
    traditional: { text: string };
    stroke: IVector;
  };
  pinyin: {
    text: string;
    female: { voice: string };
    male: { voice: string };
  };
  definitions: {
    text: string[];
  }[];
  media: {
    img: string[];
  }[];
  className?: string;
  maxMediaPerDefinition: number;
  endpoint: string;
  defaultStrokeSpeed: number;
}

const ContextTab = styled(TabTemplate)`
  &:not(:last-child) {
    margin-bottom: 2em;
  }
`;

const EmphasisTab = styled(TabTemplate)`
  & > .segment.attached {
    min-height: calc(100% - 43px);
  }
`;

class ContextTemplate extends Component<IContextProps> {
  state = {
    femaleAudioIsOpen: false,
    maleAudioIsOpen: false
  };

  toggleFemaleAudio = () =>
    this.setState({
      femaleAudioIsOpen: !this.state.femaleAudioIsOpen
    });

  toggleMaleAudio = () =>
    this.setState({
      maleAudioIsOpen: !this.state.maleAudioIsOpen
    });

  render() {
    return (
      <Grid columns={2} stackable className={this.props.className}>
        <Grid.Row stretched>
          <Grid.Column>
            <ContextTab
              panes={[
                {
                  menuItem: "Simplified",
                  key: "simplified",
                  render: () => (
                    <TabWithStroke
                      hanzi={this.props.hanzi.simplified.text}
                      stroke={this.props.hanzi.stroke}
                      defaultStrokeSpeed={this.props.defaultStrokeSpeed}
                    />
                  )
                },
                {
                  menuItem: "Traditional",
                  key: "traditional",
                  render: () => (
                    <TabWithStroke
                      hanzi={this.props.hanzi.traditional.text}
                      stroke={this.props.hanzi.stroke}
                      traditional
                      defaultStrokeSpeed={this.props.defaultStrokeSpeed}
                    />
                  )
                }
              ]}
            />
            <ContextTab
              menu={{ tabular: true, attached: "bottom" }}
              panes={[
                {
                  menuItem: "Male",
                  key: "male",
                  render: () => (
                    <Pinyin
                      audioSrc={this.props.pinyin.male.voice}
                      text={this.props.pinyin.text}
                    />
                  )
                },
                {
                  menuItem: "Female",
                  key: "female",
                  render: () => (
                    <Pinyin
                      audioSrc={this.props.pinyin.female.voice}
                      text={this.props.pinyin.text}
                    />
                  )
                }
              ]}
            />
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <b>Definition{this.props.definitions.length > 1 && "s"}</b>
              {this.props.definitions.map((definition, index) => (
                <Definition
                  text={definition.text[0]}
                  images={definition.text}
                  key={index}
                />
              ))}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const Context = styled(ContextTemplate)`
  width: 100% !important;
  @media (min-width: 770px) {
    min-width: 690px !important;
  }
  @media (max-width: 769px) {
    min-width: 262px !important;
  }
`;

export { Context, IContextProps, IVector, ContextTab, EmphasisTab };
