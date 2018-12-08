import * as React from "react";
import { Shell, IShellProps } from "@libresat/frontend-components";
import { navbar } from "../data/navbar";
import { docs } from "../data/docs";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { footer } from "../data/footer";
import { Link } from "../tmp/Link";

const Docs = () => (
  <Shell
    head={docs.head}
    navbar={navbar as IShellProps["navbar"]}
    footer={footer as IShellProps["footer"]}
    noScript={noscript}
    shortcuts={shortcuts}
    background={docs.background}
    linkComponent={Link as any}
    segment
  >
    <h1>Docs</h1>
  </Shell>
);

export default Docs;
