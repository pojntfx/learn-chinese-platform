import * as React from "react";
import { PostsGalleryView } from "./PostsGallerySection";
import { StaticQuery, graphql } from "gatsby";

const NonFeaturedPostsGallerySection = (props: any) => (
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
    render={data => <PostsGalleryView data={data} {...props} />}
  />
);

export { NonFeaturedPostsGallerySection };
