import * as React from "react";
import {
  navbarData,
  footerData,
  appsData,
  shortcutsData,
  noscriptData
} from "../../data";
import { AppMenu, IAppMenuProps } from "@libresat/frontend-components";
import { IPage } from "../../types";
import { NavLink } from "react-router-dom";
import { Shell, IShellProps } from "@libresat/frontend-components";

const AppsPage = (props: IPage) => (
  <Shell
    head={appsData.head}
    navbar={navbarData as IShellProps["navbar"]}
    footer={footerData as IShellProps["footer"]}
    noScript={noscriptData}
    shortcuts={shortcutsData}
    background={appsData.background}
    linkComponent={(NavLink as unknown) as JSX.Element}
    {...props}
  >
    <AppMenu
      apps={appsData.appMenu.apps as IAppMenuProps["apps"]}
      search={{
        onSearch: () => console.log("Searching for app ..."),
        ...appsData.appMenu.search
      }}
      linkComponent={(to, children) => <NavLink to={to}>{children}</NavLink>}
    />
  </Shell>
);

export { AppsPage };
