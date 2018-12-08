import * as React from "react";
import { Shell, IShellProps, Hero } from "@libresat/frontend-components";
import { navbar } from "../data/navbar";
import { home } from "../data/home";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { footer } from "../data/footer";
import { Link } from "../tmp/Link";
import { BroadcastSection } from "../tmp/BroadcastSection";
import {
  IHeroPrimaryActionProps,
  IHeroVideoActionProps
} from "@libresat/frontend-components/dist/types/hero.type";

const Home = () => (
  <Shell
    head={home.head}
    navbar={navbar as IShellProps["navbar"]}
    footer={footer as IShellProps["footer"]}
    noScript={noscript}
    shortcuts={shortcuts}
    background={home.background}
    linkComponent={Link as any}
  >
    <Hero
      title={home.hero.title}
      subtitle={home.hero.text}
      primaryAction={
        {
          header: home.hero.primaryAction.title,
          ...home.hero.primaryAction
        } as IHeroPrimaryActionProps
      }
      secondaryAction={
        {
          header: home.hero.secondaryAction.title,
          ...home.hero.secondaryAction
        } as IHeroVideoActionProps
      }
      linkComponent={Link as any}
    />
    <BroadcastSection {...home.broadcast} />
  </Shell>
);

export default Home;
