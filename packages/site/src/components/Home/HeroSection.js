import React from "react";
import { withPrefix, StaticQuery, graphql } from "gatsby";
import { Hero } from "@libresat/frontend-components";
import { Link } from "../Link";

const HeroView = ({
  data: {
    heroYaml: { primaryAction, secondaryAction, ...heroYaml }
  },
  ...otherProps
}) => (
  <Hero
    primaryAction={{
      title: primaryAction.label,
      link: withPrefix(primaryAction.link),
      ...primaryAction
    }}
    secondaryAction={{
      title: secondaryAction.label,
      video: secondaryAction.videoSrc,
      ...secondaryAction
    }}
    linkComponent={Link}
    {...heroYaml}
    {...otherProps}
  />
);

export const HeroSection = props => (
  <StaticQuery
    query={graphql`
      query HeroQuery {
        heroYaml {
          title
          subtitle
          primaryAction {
            label
            icon
            link
            disabled
          }
          secondaryAction {
            label
            icon
            header
            videoSrc
            disabled
          }
        }
      }
    `}
    render={data => <HeroView data={data} {...props} />}
  />
);
