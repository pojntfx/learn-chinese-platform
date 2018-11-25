import { CoverflowView } from "./CoverflowSection";
import { StaticQuery, graphql } from "gatsby";
import React from "react";

export const NonFeaturedSection = props => (
  <StaticQuery
    query={graphql`
      fragment posts on MdxConnection {
        edges {
          node {
            parent {
              ... on File {
                name
              }
            }
            frontmatter {
              author
              imgSrc
            }
            headings {
              value
              depth
            }
            excerpt
          }
        }
      }

      query CoverflowQueryNonFeatured {
        allMdx(filter: { frontmatter: { featured: { eq: false } } }) {
          ...posts
        }
      }
    `}
    render={data => <CoverflowView data={data} {...props} />}
  />
);
