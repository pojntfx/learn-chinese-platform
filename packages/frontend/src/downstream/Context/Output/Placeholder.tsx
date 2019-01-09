import * as React from "react";
import { Paper } from "@libresat/frontend-components";
import { Grid } from "semantic-ui-react";
import { Placeholder as PlaceholderTemplate } from "semantic-ui-react";
import { Trigger as CharacterAnimationTrigger } from "./Character/Animation/Trigger";
import { Trigger as CharacterQuizTrigger } from "./Character/Quiz/Trigger";
import { Trigger as PinyinAudioTrigger } from "./Pinyin/Trigger";
import {
  TriggerView,
  DefinitionView,
  CharacterDisplayView,
  CharacterDisplay,
  PinyinDisplay
} from "../Wrapper";

const Placeholder = (props: any) => (
  <Paper {...props}>
    <Grid columns="equal" stackable>
      <Grid.Column width={8}>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column width={3}>
              <TriggerView>
                <CharacterAnimationTrigger disabled />
                <CharacterQuizTrigger disabled />
              </TriggerView>
            </Grid.Column>
            <Grid.Column>
              <CharacterDisplayView>
                <CharacterDisplay title="汉字" theme={{ disabled: true }} />
              </CharacterDisplayView>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <TriggerView>
                <PinyinAudioTrigger disabled />
              </TriggerView>
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <PinyinDisplay text="拼音" theme={{ disabled: true }} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Column>
      <DefinitionView>
        <PlaceholderTemplate>
          <PlaceholderTemplate.Paragraph>
            <PlaceholderTemplate.Line />
            <PlaceholderTemplate.Line />
            <PlaceholderTemplate.Line />
            <PlaceholderTemplate.Line />
          </PlaceholderTemplate.Paragraph>
          <PlaceholderTemplate.Paragraph>
            <PlaceholderTemplate.Line />
            <PlaceholderTemplate.Line />
            <PlaceholderTemplate.Line />
            <PlaceholderTemplate.Line />
            <PlaceholderTemplate.Line />
          </PlaceholderTemplate.Paragraph>
        </PlaceholderTemplate>
      </DefinitionView>
    </Grid>
  </Paper>
);

export { Placeholder };
