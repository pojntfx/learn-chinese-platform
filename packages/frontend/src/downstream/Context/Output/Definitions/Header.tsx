import * as React from "react";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";
import { Button } from "@libresat/frontend-components";
import { Link } from "../../../Link";
import { HeaderButton } from "./HeaderButton";

const wikipedia = "https://en.wikipedia.org/w/index.php?search=";

interface IHeader {
  definition: string;
  withTitle?: boolean;
}

const HeaderView = styled(Grid)``;

const Header = ({ definition, withTitle, ...otherProps }: IHeader) =>
  withTitle ? (
    <HeaderView stackable columns={2} {...otherProps}>
      <Grid.Column tablet={8} computer={12}>
        <strong>{definition}</strong>
      </Grid.Column>
      <Grid.Column textAlign="right" tablet={8} computer={4}>
        <Link to={`${wikipedia}${definition}`}>
          <Button icon="book" content="Definition" fluid />
        </Link>
      </Grid.Column>
    </HeaderView>
  ) : (
    <Link to={`${wikipedia}${definition}`}>
      <HeaderButton icon="book" content="Definition" fluid />
    </Link>
  );

export { Header };
