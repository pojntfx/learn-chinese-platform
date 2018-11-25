import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Header } from "@libresat/frontend-components";

const BlogHeaderView = ({
  data: {
    allBlogHeadersYaml: { edges }
  },
  ...otherProps
}) => <Header as="h1" {...edges[0].node} {...otherProps} />;

export const BlogHeader = props => (
  <StaticQuery
    query={graphql`
      {
        allBlogHeadersYaml(filter: { scope: { eq: "blog" } }) {
          edges {
            node {
              content
              subheader
            }
          }
        }
      }
    `}
    render={data => <BlogHeaderView data={data} {...props} />}
  />
);
