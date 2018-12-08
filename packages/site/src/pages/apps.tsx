import * as React from "react";
import {
  Shell,
  IShellProps,
  AppMenu,
  IAppMenuProps
} from "@libresat/frontend-components";
import { navbar } from "../data/navbar";
import { apps } from "../data/apps";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { footer } from "../data/footer";
import { Link } from "../tmp/Link";

export default () => (
  <Shell
    head={apps.head}
    navbar={navbar as IShellProps["navbar"]}
    footer={footer as IShellProps["footer"]}
    noScript={noscript}
    shortcuts={shortcuts}
    background={apps.background}
    linkComponent={Link as any}
  >
    <AppMenu
      apps={apps.appMenu.apps as IAppMenuProps["apps"]}
      search={{
        onSearch: () => console.log("Searching for app ..."),
        ...apps.appMenu.search
      }}
      linkComponent={(to, children) => <Link to={to}>{children}</Link>}
    />
  </Shell>
);
