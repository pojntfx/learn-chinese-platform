import * as React from "react";
import { Component } from "react";
import { Grid, Tab as TabTemplate, Button } from "semantic-ui-react";
import styled from "styled-components";
import { TabWithStroke } from "./TabWithStroke";
import { TabWithAudio } from "./TabWithAudio";
import { TabWithDefinitionsAndMedia } from "./TabWithDefinitonsAndMedia";

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
}

const Tab = styled(TabTemplate)`
  &:not(:last-child) {
    margin-bottom: 2em;
  }
`;

const EmphasisTab = styled(TabTemplate)`
  & > .segment.attached {
    min-height: calc(100% - 43px);
  }
`;

class Context extends Component<IContextProps> {
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
      <Grid columns={2} stackable>
        <Grid.Row stretched>
          <Grid.Column>
            <Tab
              panes={[
                {
                  menuItem: "Simplified",
                  key: "simplified",
                  render: () => (
                    <TabWithStroke
                      hanzi={this.props.hanzi.simplified.text}
                      stroke={this.props.hanzi.stroke}
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
                    />
                  )
                }
              ]}
            />
            <Tab
              menu={{ tabular: true, attached: "bottom" }}
              panes={[
                {
                  menuItem: "Male",
                  key: "male",
                  render: () => (
                    <TabWithAudio
                      text={this.props.pinyin.text}
                      audioSrc={this.props.pinyin.male.voice}
                    />
                  )
                },
                {
                  menuItem: "Female",
                  key: "female",
                  render: () => (
                    <TabWithAudio
                      text={this.props.pinyin.text}
                      audioSrc={this.props.pinyin.female.voice}
                    />
                  )
                }
              ]}
            />
          </Grid.Column>
          <Grid.Column>
            <EmphasisTab
              panes={[
                {
                  menuItem: "Definitions",
                  key: "definitions",
                  render: () => (
                    <TabWithDefinitionsAndMedia
                      definitions={this.props.definitions}
                    />
                  )
                },
                {
                  menuItem: "Media",
                  key: "media",
                  render: () => (
                    <TabTemplate.Pane>Not yet implemented.</TabTemplate.Pane>
                  )
                }
              ]}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export { Context, IContextProps, IVector };
