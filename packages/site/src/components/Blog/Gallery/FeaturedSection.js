import { GallerySectionView } from "./GallerySection";
import { StaticQuery, graphql } from "gatsby";
import React from "react";

export const FeaturedSection = props => (
  <StaticQuery
    query={graphql`
      query GalleryQueryFeatured {
        allMdx(filter: { frontmatter: { featured: { eq: true } } }) {
          ...extendedPosts
        }
      }
    `}
    render={data => <GallerySectionView data={data} {...props} />}
  />
);
