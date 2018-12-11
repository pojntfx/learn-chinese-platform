import styled from "styled-components";

const SearchInputWrapper = styled("div")`
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
`;

export { SearchInputWrapper };
