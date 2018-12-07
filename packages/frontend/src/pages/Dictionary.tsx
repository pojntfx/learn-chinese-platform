import * as React from "react";
import { Paper } from "@libresat/frontend-components";
import { Shell, IShellProps } from "@libresat/frontend-components";
import { dictionary } from "../data/dictionary";
import { navbar } from "../data/navbar";
import { footer } from "../data/footer";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { Link } from "../temp/Link";

const Dictionary = (props: any) => (
  <Shell
    head={dictionary.head}
    navbar={navbar as IShellProps["navbar"]}
    footer={footer as IShellProps["footer"]}
    noScript={noscript}
    shortcuts={shortcuts}
    background={dictionary.background}
    linkComponent={Link}
    {...props}
  >
    <Paper>
      <h1>Dictionary</h1>
    </Paper>
  </Shell>
);

export { Dictionary };
