import * as React from "react";
import { IContextProps } from "./Context";
import { Tab } from "semantic-ui-react";

interface ITabWithDefinitionsProps {
  definitions: IContextProps["definitions"];
}

const TabWithDefinitions = (props: ITabWithDefinitionsProps) => (
  <Tab.Pane attached="bottom">
    <ul>
      {props.definitions.map((definition, index) => (
        <li key={index}>{definition.text.join(", ")}</li>
      ))}
    </ul>
  </Tab.Pane>
);

export { TabWithDefinitions };
