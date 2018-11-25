import React from "react";
import { withPrefix, StaticQuery, graphql } from "gatsby";
import { Broadcast } from "@libresat/frontend-components";
import { Link } from "../Link";

const BroadcastView = ({
  data: {
    mdx: {
      parent: { relativePath },
      headings,
      frontmatter: { excerpt }
    },
    broadcastYaml: { postsLink, readMore, icon }
  },
  ...otherProps
}) => (
  <Broadcast
    title={headings.filter(({ depth }) => depth === 1)[0].value}
    text={excerpt}
    icon={icon}
    readMoreLink={withPrefix(`${postsLink}/${relativePath.split(".")[0]}`)}
    readMoreText={readMore}
    linkComponent={(to, children) => <Link to={to}>{children}</Link>}
    {...otherProps}
  />
);

export const BroadcastSection = props => (
  <StaticQuery
    query={graphql`
      query BroadcastQuery {
        mdx {
          frontmatter {
            excerpt
          }
          parent {
            ... on File {
              relativePath
            }
          }
          headings {
            value
            depth
          }
        }
        broadcastYaml {
          icon
          postsLink
          readMore
        }
      }
    `}
    render={data => <BroadcastView data={data} {...props} />}
  />
);
