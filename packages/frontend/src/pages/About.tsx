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
import { Link } from "../downstream/Link";
import { NoAppFoundMessage } from "../downstream/NoAppFoundMessage";
import { Subscribe } from "unstated";
import { AppsContainer } from "../containers/Apps";

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
      <Subscribe to={[AppsContainer]}>
        {(appsContainer: AppsContainer) => (
          <>
            <AppMenu
              apps={
                (appsContainer.state.searchQuery !== ""
                  ? appsContainer.state.filteredApps
                  : appsContainer.state.apps) as IAppMenuProps["apps"]
              }
              search={
                {
                  ...apps.appMenu.search,
                  onSearch: (e: any) => appsContainer.handleSearchQuery(e),
                  value: appsContainer.state.searchQuery
                } as any
              }
              linkComponent={(to, children) => <Link to={to}>{children}</Link>}
            />
            {appsContainer.state.filteredApps.length === 0 &&
              appsContainer.state.searchQuery !== "" && (
                <NoAppFoundMessage
                  error
                  header="Oh no!"
                  content="No such app has been found!"
                />
              )}
          </>
        )}
      </Subscribe>
    </Paper>
  </Shell>
);

export { About };
