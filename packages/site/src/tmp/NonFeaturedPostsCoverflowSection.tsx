import * as React from "react";
import { PostsCoverflowView } from "./PostsCoverflowSection";
import { StaticQuery, graphql } from "gatsby";

const NonFeaturedPostsCoverflowSection = (props: any) => (
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
    render={data => <PostsCoverflowView data={data} {...props} />}
  />
);

export { NonFeaturedPostsCoverflowSection };
