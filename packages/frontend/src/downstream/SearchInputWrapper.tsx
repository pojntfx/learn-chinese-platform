import styled from "styled-components";
import { Segment } from "semantic-ui-react";

const SearchInputWrapper = styled(Segment)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props =>
    props.theme.pristine
      ? `
    margin-bottom: 1em;`
      : `
    margin-top: 3em;
    margin-bottom: 3em;
  `}
  margin-left: -1em !important;
  margin-right: -1em !important;
`;

export { SearchInputWrapper };
