import styled from "styled-components";
import { Message } from "semantic-ui-react";

const NoAppFoundMessage = styled(Message)`
  margin-top: -1em !important;
  @media (max-width: 991px) {
    margin-top: 2em !important;
  }
`;

export { NoAppFoundMessage };
