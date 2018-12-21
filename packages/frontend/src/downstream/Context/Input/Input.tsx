import styled from "styled-components";
import { Input as InputTemplate } from "semantic-ui-react";

interface IInput {
  value: string;
  onChange: any;
}

const Input = styled(InputTemplate)`
  width: 100%;
  margin-right: 1em;
`;

export { IInput, Input };
