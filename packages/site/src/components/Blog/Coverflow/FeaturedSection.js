import { CoverflowView } from "./CoverflowSection";
import { StaticQuery, graphql } from "gatsby";
import React from "react";

export const FeaturedSection = props => (
  <StaticQuery
    query={graphql`
      query CoverflowQueryFeatured {
        allMdx(filter: { frontmatter: { featured: { eq: true } } }) {
          ...posts
        }
      }
    `}
    render={data => <CoverflowView data={data} {...props} />}
  />
);
