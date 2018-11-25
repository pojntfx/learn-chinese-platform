import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Search } from "@libresat/frontend-components";
import { withPrefix } from "gatsby-link";
import { Link } from "../Link";

const SearchView = ({
  data: {
    allMdx: { edges },
    allSitePage: { totalCount }
  },
  ...otherProps
}) => (
  <Search
    placeholder={`Search ${totalCount} ${
      totalCount === 1 ? "page" : "pages"
    } ...`}
    source={edges.map(
      ({
        node: {
          rawBody,
          frontmatter: { author, title, imgSrc, date },
          headings,
          excerpt,
          parent: { name }
        }
      }) => {
        return {
          body: rawBody,
          imgSrc: withPrefix(imgSrc),
          /* FIXME: Nested pages don't get a correct link if they are
          not blog posts! */
          link: /[0-9]+-[0-9]+-[0-9]+(.*)/.test(name)
            ? withPrefix(`/blog/${name}`)
            : name === "index"
              ? withPrefix("/")
              : withPrefix(name),
          header:
            headings.filter(({ depth }) => depth === 1).length === 0
              ? title
              : headings.filter(({ depth }) => depth === 1)[0].value,
          meta: `${
            date
              ? new Date(date).toLocaleDateString()
              : new Date(
                  name
                    .split("-")
                    .filter((element, index) => (index < 3 ? element : null)) // Get the date from the post's filename, like with Jekyll
                    .join("-")
                ).toLocaleDateString()
          } by ${author}`,
          description: excerpt
        };
      }
    )}
    linkComponent={Link}
    {...otherProps}
  />
);

export const SearchSection = props => (
  <StaticQuery
    query={graphql`
      query SiteSearch {
        allMdx {
          edges {
            node {
              rawBody
              parent {
                ... on File {
                  name
                }
              }
              headings {
                value
                depth
              }
              frontmatter {
                author
                imgSrc
                title
                date
              }
              excerpt
            }
          }
        }
        allSitePage {
          totalCount
        }
      }
    `}
    render={data => <SearchView data={data} {...props} />}
  />
);
