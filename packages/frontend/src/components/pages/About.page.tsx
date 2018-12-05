import * as React from "react";
import {
  navbarData,
  footerData,
  aboutData,
  shortcutsData,
  noscriptData,
  appsData
} from "../../data";
import Readme from "../../../README.md";
import { IPage } from "../../types";
import { NavLink } from "react-router-dom";
import {
  Shell,
  IShellProps,
  AppMenu,
  IAppMenuProps,
  Paper
} from "@libresat/frontend-components";

const AboutPage = (props: IPage) => (
  <Shell
    head={aboutData.head}
    navbar={navbarData as IShellProps["navbar"]}
    footer={footerData as IShellProps["footer"]}
    noScript={noscriptData}
    shortcuts={shortcutsData}
    background={aboutData.background}
    linkComponent={(NavLink as unknown) as JSX.Element}
    {...props}
  >
    <Paper>
      <Readme />
    </Paper>
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

export { AboutPage };
