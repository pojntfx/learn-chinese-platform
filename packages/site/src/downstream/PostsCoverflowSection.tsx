import * as React from "react";
import { NonFeaturedPostsCoverflowSection } from "./NonFeaturedPostsCoverflowSection";
import { FeaturedPostsCoverflowSection } from "./FeaturedPostsCoverflowSection";
import { Coverflow } from "@libresat/frontend-components";
import { Link } from "./Link";

const PostsCoverflowView = (
  {
    data: {
      allMdx: { edges }
    }
  }: any,
  ...otherProps: any
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
      }: any) => ({
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
        ).toLocaleDateString()} by ${author}`,
        description: excerpt
      })
    )}
    {...otherProps}
  />
);

const PostsCoverflowSection = ({ featured }: any) =>
  featured ? (
    <FeaturedPostsCoverflowSection />
  ) : (
    <NonFeaturedPostsCoverflowSection />
  );

export { PostsCoverflowView, PostsCoverflowSection };
