import * as React from "react";
import { Paper } from "@libresat/frontend-components";
import { Shell, IShellProps } from "@libresat/frontend-components";
import { notifications } from "../data/notifications";
import { navbar } from "../data/navbar";
import { footer } from "../data/footer";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { Link } from "../tmp/Link";

const Notifications = (props: any) => (
  <Shell
    head={notifications.head}
    navbar={navbar as IShellProps["navbar"]}
    footer={footer as IShellProps["footer"]}
    noScript={noscript}
    shortcuts={shortcuts}
    background={notifications.background}
    linkComponent={Link}
    {...props}
  >
    <Paper>
      <h1>Notifications</h1>
    </Paper>
  </Shell>
);

export { Notifications };
