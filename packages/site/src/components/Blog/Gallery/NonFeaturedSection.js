import { GallerySectionView } from "./GallerySection";
import { StaticQuery, graphql } from "gatsby";
import React from "react";

export const NonFeaturedSection = props => (
  <StaticQuery
    query={graphql`
      fragment extendedPosts on MdxConnection {
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
              lastEdit
            }
            headings {
              value
              depth
            }
            timeToRead
            excerpt
          }
        }
      }

      query GalleryQueryNonFeatured {
        allMdx(filter: { frontmatter: { featured: { eq: false } } }) {
          ...extendedPosts
        }
      }
    `}
    render={data => <GallerySectionView data={data} {...props} />}
  />
);
