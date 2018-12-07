import * as React from "react";
import Readme from "../../README.md";
import {
  Shell,
  IShellProps,
  AppMenu,
  IAppMenuProps,
  Paper
} from "@libresat/frontend-components";
import { navbar } from "../data/navbar";
import { about } from "../data/about";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { footer } from "../data/footer";
import { apps } from "../data/apps";
import { Link } from "../temp/Link";

const About = (props: any) => (
  <Shell
    head={about.head}
    navbar={navbar as IShellProps["navbar"]}
    footer={footer as IShellProps["footer"]}
    noScript={noscript}
    shortcuts={shortcuts}
    background={about.background}
    linkComponent={Link}
    {...props}
  >
    <Paper>
      <Readme />
    </Paper>
    <Paper>
      <h1>More Apps</h1>
      <AppMenu
        apps={apps.appMenu.apps as IAppMenuProps["apps"]}
        search={{
          onSearch: () => console.log("Searching for app ..."),
          ...apps.appMenu.search
        }}
        linkComponent={(to, children) => <Link to={to}>{children}</Link>}
      />
    </Paper>
  </Shell>
);

export { About };