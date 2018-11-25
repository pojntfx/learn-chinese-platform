import React from "react";
import { NonFeaturedSection } from "./NonFeaturedSection";
import { FeaturedSection } from "./FeaturedSection";
import { Coverflow } from "@libresat/frontend-components";
import { Link } from "../../Link";

export const CoverflowView = (
  {
    data: {
      allMdx: { edges }
    }
  },
  ...otherProps
) => (
  <Coverflow
    linkComponent={Link}
    items={edges.map(
      ({
        node: {
          parent,
          frontmatter: { author, imgSrc },
          headings,
          excerpt
        }
      }) => ({
        image: imgSrc,
        link: `/blog/${parent.name}`,
        header: headings.filter(({ depth }) => depth === 1)[0].value,
        meta: `${new Date(
          parent.name
            .split("-")
            .filter((element, index) => (index < 3 ? element : null)) // Get the date from the post's filename, like with Jekyll
            .join("-")
        ).toLocaleDateString()} by ${author}`,
        description: excerpt
      })
    )}
    {...otherProps}
  />
);

export const CoverflowSection = ({ featured, ...otherProps }) =>
  featured ? <FeaturedSection /> : <NonFeaturedSection />;
