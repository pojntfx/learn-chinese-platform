import * as React from "react";
import styled from "styled-components";
import { ExpandablePaper, Expand } from "@libresat/frontend-components";
import { Display } from "./Display";

interface IList {
  multiple?: boolean;
  definitions: string[];
  endpoint: string;
}

const ListViewSingle = styled(Expand)``;

const ListViewMultiple = styled(ExpandablePaper)``;

const List = ({ multiple, definitions, endpoint, ...otherProps }: IList) =>
  multiple ? (
    <ListViewMultiple
      initiallyClosed
      title={definitions.join(", ")}
      {...otherProps}
    >
      {definitions.length <= 1
        ? definitions.map((definition, index) => (
            <Display definition={definition} endpoint={endpoint} key={index} />
          ))
        : definitions.map((definition, index) => (
            <Display
              title
              definition={definition}
              endpoint={endpoint}
              key={index}
            />
          ))}
    </ListViewMultiple>
  ) : (
    <ListViewSingle
      initiallyClosed
      title={definitions.join(", ")}
      {...otherProps}
    >
      {definitions.length <= 1
        ? definitions.map((definition, index) => (
            <Display definition={definition} endpoint={endpoint} key={index} />
          ))
        : definitions.map((definition, index) => (
            <Display
              title
              definition={definition}
              endpoint={endpoint}
              key={index}
            />
          ))}
    </ListViewSingle>
  );

export { IList, List };
