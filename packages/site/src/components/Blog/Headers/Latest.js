import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Header } from "semantic-ui-react";

const LatestHeaderView = ({
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

export const LatestHeader = props => (
  <StaticQuery
    query={graphql`
      {
        allBlogHeadersYaml(filter: { scope: { eq: "latestPosts" } }) {
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
    render={data => <LatestHeaderView data={data} {...props} />}
  />
);
