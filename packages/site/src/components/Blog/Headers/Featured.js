import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Header } from "semantic-ui-react";

const FeaturedHeaderView = ({
  data: {
    allBlogHeadersYaml: { edges }
  },
  more,
  ...otherProps
}) => (
  <Header
    {...edges[0].node}
    content={more ? `More ${edges[0].node.content}` : edges[0].node.content}
    {...otherProps}
  />
);

export const FeaturedHeader = props => (
  <StaticQuery
    query={graphql`
      {
        allBlogHeadersYaml(filter: { scope: { eq: "featuredPosts" } }) {
          edges {
            node {
              content
              subheader
              icon
            }
          }
        }
      }
    `}
    render={data => <FeaturedHeaderView data={data} {...props} />}
  />
);
