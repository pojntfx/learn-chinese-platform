import * as React from "react";
import { Shell, IShellProps } from "@libresat/frontend-components";
import { navbar } from "../data/navbar";
import { services } from "../data/services";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { footer } from "../data/footer";
import { Link } from "../tmp/Link";

export default () => (
  <Shell
    head={services.head}
    navbar={navbar as IShellProps["navbar"]}
    footer={footer as IShellProps["footer"]}
    noScript={noscript}
    shortcuts={shortcuts}
    background={services.background}
    linkComponent={Link as any}
    segment
  >
    <h1>Services</h1>
  </Shell>
);
