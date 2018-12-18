import styled from "styled-components";

const VerticalScrollContainer = styled("div")`
  max-height: ${props => props.theme.maxHeight};
  overflow-y: auto;
`;

export { VerticalScrollContainer };
