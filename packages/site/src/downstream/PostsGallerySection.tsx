import * as React from "react";
import { Gallery } from "@libresat/frontend-components";
import { NonFeaturedPostsGallerySection } from "./NonFeaturedPostsGallerySection";
import { FeaturedPostsGallerySection } from "./FeaturedPostsGallerySection";
import { Link } from "./Link";

const PostsGalleryView = ({
  data: {
    allMdx: { edges }
  }
}: any) => (
  <Gallery
    items={edges.map(
      ({
        node: {
          parent,
          frontmatter: { author, imgSrc, lastEdit },
          headings,
          timeToRead,
          excerpt
        }
      }: any) => {
        return {
          image: imgSrc,
          link: `/blog/${parent.name}`,
          header: headings.filter(({ depth }: any) => depth === 1)[0].value,
          meta: `${new Date(
            parent.name
              .split("-")
              .filter((element: any, index: number) =>
                index < 3 ? element : null
              ) // Get the date from the post's filename, like with Jekyll
              .join("-")
          ).toLocaleDateString()} by ${author}. Last edit on ${new Date(
            lastEdit
          ).toLocaleDateString()}. Estimated time to read: ${timeToRead} ${
            timeToRead === 1 ? "minute" : "minutes"
          }.`,
          description: excerpt
        };
      }
    )}
    linkComponent={Link as any}
  />
);

const PostsGallerySection = ({ featured }: any) =>
  featured ? (
    <FeaturedPostsGallerySection />
  ) : (
    <NonFeaturedPostsGallerySection />
  );

export { PostsGalleryView, PostsGallerySection };
