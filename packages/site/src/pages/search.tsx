import * as React from "react";
import { Shell, IShellProps, Header } from "@libresat/frontend-components";
import { navbar } from "../data/navbar";
import { search } from "../data/search";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { footer } from "../data/footer";
import { Link } from "../tmp/Link";
import { SearchSection } from "../tmp/SearchSection";

const Search = () => (
  <Shell
    head={search.head}
    navbar={navbar as IShellProps["navbar"]}
    footer={footer as IShellProps["footer"]}
    noScript={noscript}
    shortcuts={shortcuts}
    background={search.background}
    linkComponent={Link as any}
  >
    <Header
      as="h1"
      content={search.head.title}
      subheader={search.head.description}
    />
    <SearchSection />
  </Shell>
);

export default Search;
