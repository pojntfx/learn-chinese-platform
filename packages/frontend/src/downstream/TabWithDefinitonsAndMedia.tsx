import * as React from "react";
import { IContextProps } from "./Context";
import { Paper, ExpandablePaper, Expand } from "@libresat/frontend-components";
import { DefinitionHeaderWithTitle } from "./DefinitionHeaderWithTitle";
import { MediaForEnglish } from "./MediaForEnglish";

interface ITabWithDefinitionsProps {
  definitions: IContextProps["definitions"];
  maxMediaPerDefinition: number;
  endpoint: string;
}

const TabWithDefinitions = (props: ITabWithDefinitionsProps) => (
  <>
    {props.definitions.length <= 1
      ? props.definitions.map((definition, index) => (
          <Expand
            initiallyClosed
            title={definition.text.join(", ")}
            key={index}
          >
            {definition.text.length <= 1
              ? definition.text.map((subdefinition, index) => (
                  <div key={index}>
                    <DefinitionHeaderWithTitle definition={subdefinition} />
                    <MediaForEnglish
                      definition={subdefinition}
                      maxMediaPerDefinition={props.maxMediaPerDefinition}
                      endpoint={props.endpoint}
                    />
                  </div>
                ))
              : definition.text.map((subdefinition, index) => (
                  <Paper key={index}>
                    <DefinitionHeaderWithTitle
                      withTitle
                      definition={subdefinition}
                    />
                    <MediaForEnglish
                      definition={subdefinition}
                      maxMediaPerDefinition={props.maxMediaPerDefinition}
                      endpoint={props.endpoint}
                    />
                  </Paper>
                ))}
            {}
          </Expand>
        ))
      : props.definitions.map((definition, index) => (
          <ExpandablePaper
            initiallyClosed
            title={definition.text.join(", ")}
            key={index}
          >
            {definition.text.length <= 1
              ? definition.text.map((subdefinition, index) => (
                  <div key={index}>
                    <DefinitionHeaderWithTitle definition={subdefinition} />
                    <MediaForEnglish
                      definition={subdefinition}
                      maxMediaPerDefinition={props.maxMediaPerDefinition}
                      endpoint={props.endpoint}
                    />
                  </div>
                ))
              : definition.text.map((subdefinition, index) => (
                  <Paper key={index}>
                    <DefinitionHeaderWithTitle
                      withTitle
                      definition={subdefinition}
                    />
                    <MediaForEnglish
                      definition={subdefinition}
                      maxMediaPerDefinition={props.maxMediaPerDefinition}
                      endpoint={props.endpoint}
                    />
                  </Paper>
                ))}
            {}
          </ExpandablePaper>
        ))}
  </>
);

export { TabWithDefinitions };
