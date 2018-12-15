import * as React from "react";
import { AppMenu, IAppMenuProps } from "@libresat/frontend-components";
import { Shell, IShellProps } from "@libresat/frontend-components";
import { apps } from "../data/apps";
import { navbar } from "../data/navbar";
import { footer } from "../data/footer";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { Link } from "../downstream/Link";
import { Subscribe } from "unstated";
import { AppsContainer } from "../containers/Apps";
import { NoAppFoundMessage } from "../downstream/NoAppFoundMessage";

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
  </Shell>
);

export { Apps };
