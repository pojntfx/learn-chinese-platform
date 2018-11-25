import React from "react";
import { Gallery } from "@libresat/frontend-components";
import { NonFeaturedSection } from "./NonFeaturedSection";
import { FeaturedSection } from "./FeaturedSection";
import { Link } from "../../Link";

export const GallerySectionView = ({
  data: {
    allMdx: { edges }
  }
}) => (
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
      }) => {
        return {
          image: imgSrc,
          link: `/blog/${parent.name}`,
          header: headings.filter(({ depth }) => depth === 1)[0].value,
          meta: `${new Date(
            parent.name
              .split("-")
              .filter((element, index) => (index < 3 ? element : null)) // Get the date from the post's filename, like with Jekyll
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
    linkComponent={Link}
  />
);

export const GallerySection = ({ featured }) =>
  featured ? <FeaturedSection /> : <NonFeaturedSection />;
