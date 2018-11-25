import React from "react";
import LinkTemplate, { withPrefix } from "gatsby-link";

const isExternalLink = link => /(http|https):\/\/(.*)/.test(link);
const isImageLink = link => /(.*)(\.jpg|\.png|\.webp)/.test(link);

export const Link = ({ to, children, exact, ...otherProps }) =>
  isExternalLink(to) ? (
    <a {...otherProps} href={to}>
      {children ? children : null}
    </a>
  ) : isImageLink(to) ? (
    <a {...otherProps} href={withPrefix(to)}>
      {/* Prefix local images */}
      {children ? children : null}
    </a>
  ) : (
    <LinkTemplate to={withPrefix(to)} {...otherProps}>
      {children ? children : null}
    </LinkTemplate>
  );
