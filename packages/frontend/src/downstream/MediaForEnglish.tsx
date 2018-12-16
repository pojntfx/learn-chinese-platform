import * as React from "react";
import Fetch from "react-fetch-component";
import { Grid, Placeholder, Message, Image } from "semantic-ui-react";
import { Link } from "./Link";
import LazyLoad from "react-lazyload";

const MEDIA = "/v1/media/getMediaForEnglish?english=";

interface IMediaForEnglishProps {
  definition: string;
  maxMediaPerDefinition: number;
  endpoint: string;
}

const MediaForEnglish = ({
  definition,
  maxMediaPerDefinition,
  endpoint,
  ...otherProps
}: IMediaForEnglishProps) => (
  <LazyLoad height={500} once>
    <Fetch url={`${endpoint}${MEDIA}${definition}`} {...otherProps}>
      {({ loading, error, data }) => (
        <Grid stackable columns={2}>
          {loading &&
            [1, 2, 3, 4, 5].map((_, index) => (
              <Placeholder key={index}>
                <Placeholder.Image />
              </Placeholder>
            ))}
          {error && (
            <Message
              error
              icon="warning"
              header="Oh no!"
              content="Could not load media."
            />
          )}
          {Array.isArray(data) &&
            data
              .slice(0, maxMediaPerDefinition)
              .map((img: string, index: number) => (
                <Grid.Column key={index}>
                  <Link to={img}>
                    <LazyLoad height={200} once>
                      <Image fluid src={img} />
                    </LazyLoad>
                  </Link>
                </Grid.Column>
              ))}
        </Grid>
      )}
    </Fetch>
  </LazyLoad>
);

export { MediaForEnglish };
