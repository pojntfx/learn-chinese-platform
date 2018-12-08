import * as React from "react";
import { Paper } from "@libresat/frontend-components";
import { Shell, IShellProps } from "@libresat/frontend-components";
import { settings } from "../data/settings";
import { navbar } from "../data/navbar";
import { footer } from "../data/footer";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { Link } from "../tmp/Link";

const Settings = (props: any) => (
  <Shell
    head={settings.head}
    navbar={navbar as IShellProps["navbar"]}
    footer={footer as IShellProps["footer"]}
    noScript={noscript}
    shortcuts={shortcuts}
    background={settings.background}
    linkComponent={Link}
    {...props}
  >
    <Paper>
      <h1>Settings</h1>
    </Paper>
  </Shell>
);

export { Settings };
