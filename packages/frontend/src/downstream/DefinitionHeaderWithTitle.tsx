import * as React from "react";
import { Grid } from "semantic-ui-react";
import { Subdefinition } from "./Subdefinition";
import { Link } from "./Link";
import { DefinitionButton } from "./DefinitionButton";

const WIKIPEDIA = "https://en.wikipedia.org/w/index.php?search=";

interface IDefinitionHeaderWithTitleProps {
  definition: string;
  withTitle?: boolean;
}

const DefinitionHeaderWithTitle = ({
  definition,
  withTitle,
  ...otherProps
}: IDefinitionHeaderWithTitleProps) =>
  withTitle ? (
    <Grid stackable columns={2} {...otherProps}>
      <Grid.Column tablet={8} computer={10}>
        <Subdefinition>{definition}</Subdefinition>
      </Grid.Column>
      <Grid.Column textAlign="right" tablet={8} computer={6}>
        <Link to={`${WIKIPEDIA}${definition}`}>
          <DefinitionButton fluid icon="book" content="Definition" />
        </Link>
      </Grid.Column>
    </Grid>
  ) : (
    <Link to={`${WIKIPEDIA}${definition}`}>
      <DefinitionButton fluid icon="book" content="Definition" />
    </Link>
  );

export { DefinitionHeaderWithTitle };
