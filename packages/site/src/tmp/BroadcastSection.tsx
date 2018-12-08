import * as React from "react";
import { withPrefix, StaticQuery, graphql } from "gatsby";
import { Broadcast } from "@libresat/frontend-components";
import { Link } from "./Link";

const BroadcastView = ({
  data: {
    mdx: {
      parent: { relativePath },
      headings,
      frontmatter: { excerpt }
    }
  },
  title,
  icon,
  link,
  ...otherProps
}: any) => (
  <Broadcast
    title={headings.filter(({ depth }: any) => depth === 1)[0].value}
    text={excerpt}
    icon={icon}
    readMoreLink={withPrefix(`${link}/${relativePath.split(".")[0]}`)}
    readMoreText={title}
    linkComponent={(to, children) => <Link to={to}>{children}</Link>}
    {...otherProps}
  />
);

const BroadcastSection = (props: any) => (
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
      }
    `}
    render={data => <BroadcastView data={data} {...props} />}
  />
);

export { BroadcastView, BroadcastSection };
