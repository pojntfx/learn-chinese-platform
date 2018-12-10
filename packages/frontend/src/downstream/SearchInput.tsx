import styled from "styled-components";
import { Input } from "semantic-ui-react";

const SearchInput = styled(Input)`
  ${props =>
    props.theme.pristine
      ? `
    margin-bottom: 1em;`
      : `
  margin-top: 3em;
  margin-bottom: 3em;
  `}
`;

export { SearchInput };
