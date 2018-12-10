import * as React from "react";
import { IContextProps } from "./Context";
import { Tab } from "semantic-ui-react";

interface ITabWithDefinitionsAndMedia {
  definitions: IContextProps["definitions"];
}

const TabWithDefinitionsAndMedia = (props: ITabWithDefinitionsAndMedia) => (
  <Tab.Pane attached="bottom">
    <ul>
      {props.definitions.map((definition, index) => (
        <li key={index}>{definition.text.join(", ")}</li>
      ))}
    </ul>
  </Tab.Pane>
);

export { TabWithDefinitionsAndMedia };
