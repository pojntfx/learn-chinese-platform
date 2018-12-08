import * as React from "react";
import { NavLink } from "react-router-dom";

const isExternalLink = (link: string) => /(http|https):\/\/(.*)/.test(link);
const isImageLink = (link: string) => /(.*)(\.jpg|\.png|\.webp)/.test(link);

interface ILinkProps {
  to: string;
  children?: JSX.Element | JSX.Element[];
  exact?: boolean;
}

const Link = ({ to, children, exact, ...otherProps }: ILinkProps) =>
  isExternalLink(to) ? (
    <a {...otherProps} href={to}>
      {children ? children : null}
    </a>
  ) : isImageLink(to) ? (
    <a {...otherProps} href={to}>
      {/* Here we could prefix local images */}
      {children ? children : null}
    </a>
  ) : (
    <NavLink to={to} {...otherProps}>
      {children ? children : null}
    </NavLink>
  );

export { Link };
