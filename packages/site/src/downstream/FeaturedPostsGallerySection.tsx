import * as React from "react";
import { PostsGalleryView } from "./PostsGallerySection";
import { StaticQuery, graphql } from "gatsby";

const FeaturedPostsGallerySection = (props: any) => (
  <StaticQuery
    query={graphql`
      query GalleryQueryFeatured {
        allMdx(filter: { frontmatter: { featured: { eq: true } } }) {
          ...extendedPosts
        }
      }
    `}
    render={data => <PostsGalleryView data={data} {...props} />}
  />
);

export { FeaturedPostsGallerySection };
