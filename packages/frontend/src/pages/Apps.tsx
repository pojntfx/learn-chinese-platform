import * as React from "react";
import { AppMenu, IAppMenuProps } from "@libresat/frontend-components";
import { Shell, IShellProps } from "@libresat/frontend-components";
import { apps } from "../data/apps";
import { navbar } from "../data/navbar";
import { footer } from "../data/footer";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { Link } from "../temp/Link";

const Apps = (props: any) => (
  <Shell
    head={apps.head}
    navbar={navbar as IShellProps["navbar"]}
    footer={footer as IShellProps["footer"]}
    noScript={noscript}
    shortcuts={shortcuts}
    background={apps.background}
    linkComponent={Link}
    {...props}
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

export { Apps };
