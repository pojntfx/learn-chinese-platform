import * as React from "react";
import { Shell, IShellProps } from "@libresat/frontend-components";
import { navbar } from "../data/navbar";
import { clients } from "../data/clients";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { footer } from "../data/footer";
import { Link } from "../tmp/Link";

const Clients = () => (
  <Shell
    head={clients.head}
    navbar={navbar as IShellProps["navbar"]}
    footer={footer as IShellProps["footer"]}
    noScript={noscript}
    shortcuts={shortcuts}
    background={clients.background}
    linkComponent={Link as any}
    segment
  >
    <h1>Clients</h1>
  </Shell>
);

export default Clients;
