import * as React from "react";
import { Grid, Placeholder } from "semantic-ui-react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import Fetch from "react-fetch-component";
import { Image } from "./Image";

interface IList {
  definition: string;
  endpoint: string;
}

const ListView = styled(Grid)``;

const ImagePlaceholder = styled(Placeholder)`
  width: 100%;
`;

const List = ({ definition, endpoint, ...otherProps }: IList) => (
  <ListView stackable columns={2} {...otherProps}>
    <LazyLoad
      height={280}
      once
      placeholder={
        <>
          <Grid.Column>
            <ImagePlaceholder fluid>
              <Placeholder.Image />
            </ImagePlaceholder>
          </Grid.Column>
          <Grid.Column>
            <ImagePlaceholder fluid>
              <Placeholder.Image />
            </ImagePlaceholder>
          </Grid.Column>
        </>
      }
    >
      <Fetch
        url={`${endpoint}/v1/media/getMediaForEnglish?english=${definition}`}
        cache
      >
        {({ data }) =>
          data &&
          Array.isArray(data) &&
          data.map((data, index) => (
            <Grid.Column>
              <Image src={data} key={index} />
            </Grid.Column>
          ))
        }
      </Fetch>
    </LazyLoad>
  </ListView>
);

export { List };
