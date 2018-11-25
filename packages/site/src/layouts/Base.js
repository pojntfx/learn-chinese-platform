import React from "react";
import { withPrefix } from "gatsby-link";
import { MDXProvider } from "@mdx-js/tag";
import { Link } from "../components/Link";
import { Paper, ImageWithCaption } from "@libresat/frontend-components";
import { Shell } from "@libresat/frontend-components";
import { StaticQuery, graphql } from "gatsby";

const BaseView = ({ data, children, ...otherProps }) => (
  <MDXProvider
    components={{
      a: ({ href, ...otherProps }) => <Link to={href} {...otherProps} />,
      img: ({ src, ...otherProps }) => (
        <ImageWithCaption as={Link} to={src} src={src} {...otherProps} />
      ),
      blockquote: ({ children, ...otherProps }) => (
        <Paper {...otherProps}>
          <i>{children}</i>
        </Paper>
      )
    }}
  >
    <>
      <Shell
        linkComponent={Link}
        navbar={data.navbarYaml}
        footer={{
          socialLinks: data.siteYaml.socialLinks,
          legal: data.siteYaml.legal
        }}
        noScript={{
          title: data.siteYaml.noscriptHeader,
          body: data.siteYaml.noScriptBody
        }}
        background={withPrefix("/img/bg.jpg")}
        {...otherProps}
      >
        {children}
      </Shell>
    </>
  </MDXProvider>
);

export const Base = props => (
  <StaticQuery
    query={graphql`
      query BaseLayoutQuery {
        navbarYaml {
          brand {
            title
            img
            link
            disabled
            help {
              title
              text
              command
              docsLink
            }
          }
          firstItems {
            title
            link
            icon
            disabled
            help {
              title
              text
            }
          }
          startItems {
            title
            link
            icon
            disabled
            help {
              title
              text
            }
          }
          endItems {
            title
            link
            icon
            disabled
            help {
              title
              text
            }
          }
          lastItems {
            title
            link
            icon
            disabled
            help {
              title
              text
            }
          }
        }
        siteYaml {
          socialLinks {
            title
            img
            link
            help {
              title
              text
              docsLink
            }
          }
          noscriptHeader
          noscriptBody
          legal {
            global {
              product
              timeSpan
              holder
              help {
                title
                text
                docsLink
                command
              }
            }
            licenses {
              product
              type
              icon
              timeSpan
              holder
              spdxLicenseIdentifier
              text
              badge {
                img
                title
              }
              more {
                link
                title
              }
              help {
                title
                text
                command
                docsLink
              }
            }
          }
        }
      }
    `}
    render={data => <BaseView data={data} {...props} />}
  />
);
