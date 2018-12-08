import * as React from "react";
import { PostsCoverflowView } from "./PostsCoverflowSection";
import { StaticQuery, graphql } from "gatsby";

const FeaturedPostsCoverflowSection = (props: any) => (
  <StaticQuery
    query={graphql`
      query CoverflowQueryFeatured {
        allMdx(filter: { frontmatter: { featured: { eq: true } } }) {
          ...posts
        }
      }
    `}
    render={data => <PostsCoverflowView data={data} {...props} />}
  />
);

export { FeaturedPostsCoverflowSection };
