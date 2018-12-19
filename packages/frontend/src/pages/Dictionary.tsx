import * as React from "react";
import { List } from "../downstream/Context/List";
import { dictionary } from "../data/dictionary";
import { navbar } from "../data/navbar";
import { footer } from "../data/footer";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { Link } from "../downstream/Link";
import { IShellProps, Shell } from "@libresat/frontend-components";

const Dictionary = (props: any) => (
  <Shell
    head={dictionary.head}
    navbar={navbar as IShellProps["navbar"]}
    footer={footer as IShellProps["footer"]}
    noScript={noscript}
    shortcuts={shortcuts}
    background={dictionary.background}
    linkComponent={Link as any}
    {...props}
  >
    <List endpoint="http://localhost:8080" query="ma" />
  </Shell>
);

export { Dictionary };
