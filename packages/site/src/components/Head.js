import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { withPrefix } from "gatsby-link";
import { Head as HeadTemplate } from "@libresat/frontend-components";

const Title = ({
  data: {
    siteYaml: {
      title: siteTitle,
      themeColor: siteThemeColor,
      description: siteDescription,
      keywords: siteKeywords,
      author: siteAuthor,
      favicon: siteFavicon,
      lang: siteLang
    }
  },
  title: pageTitle,
  themeColor: pageThemeColor,
  description: pageDescription,
  keywords: pageKeywords,
  author: pageAuthor,
  favicon: pageFavicon,
  lang: pageLang,
  ...otherProps
}) => (
  <HeadTemplate
    title={pageTitle}
    description={pageDescription ? pageDescription : siteDescription}
    author={pageAuthor ? pageAuthor : siteAuthor}
    keywords={pageKeywords ? pageKeywords : siteKeywords}
    favicon={pageFavicon ? withPrefix(pageFavicon) : withPrefix(siteFavicon)}
    siteTitle={siteTitle}
    themeColor={pageThemeColor ? pageThemeColor : siteThemeColor}
    lang={pageLang ? pageLang : siteLang}
    {...otherProps}
  />
);

export const Head = props => (
  <StaticQuery
    query={graphql`
      query SiteTitle {
        siteYaml {
          title
          themeColor
          description
          keywords
          author
          favicon
          lang
        }
      }
    `}
    render={data => <Title data={data} {...props} />}
  />
);
