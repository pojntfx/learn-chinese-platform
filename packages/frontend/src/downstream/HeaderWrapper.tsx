import styled from "styled-components";

const HeaderWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;
  & > .header {
    margin: 0;
    margin-right: 1em;
    & > .content > .sub {
      white-space: nowrap;
    }
  }
`;

export { HeaderWrapper };
