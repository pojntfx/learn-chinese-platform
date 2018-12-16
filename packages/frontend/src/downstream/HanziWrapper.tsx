import { HorizontalScrollWrapper } from "@libresat/frontend-components/dist/components";
import styled from "styled-components";

const HanziWrapper = styled(HorizontalScrollWrapper)`
  & > div {
    margin: 0 auto !important;
  }
  &::after {
    padding: 0 !important;
  }
`;

export { HanziWrapper };
