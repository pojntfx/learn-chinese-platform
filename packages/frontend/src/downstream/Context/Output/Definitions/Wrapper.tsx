import * as React from "react";
import styled from "styled-components";
import { List as ListTemplate } from "./List";

interface IDefinition {
  text: string[];
}

interface IWrapper {
  definitions: IDefinition[];
  endpoint: string;
}

const WrapperView = styled("div")`
  & > *:first-child {
    margin-top: 0 !important;
  }
`;

const List = styled(ListTemplate)``;

const Wrapper = ({ definitions, endpoint, ...otherProps }: IWrapper) => (
  <WrapperView {...otherProps}>
    {definitions.length <= 1
      ? definitions.map((definition, index) => (
          <List definitions={definition.text} endpoint={endpoint} key={index} />
        ))
      : definitions.map((definition, index) => (
          <List
            multiple
            definitions={definition.text}
            endpoint={endpoint}
            key={index}
          />
        ))}
  </WrapperView>
);

export { IWrapper, Wrapper };
