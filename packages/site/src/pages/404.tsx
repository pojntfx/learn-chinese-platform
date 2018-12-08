import * as React from "react";
import {
  PageNotFound,
  Shell,
  IShellProps,
  Head
} from "@libresat/frontend-components";
import { withPrefix } from "gatsby";
import { Link } from "../downstream/Link";
import pageNotFoundImage from "../assets/404-rabbit.png";
import { home } from "../data/home";
import { navbar } from "../data/navbar";
import { footer } from "../data/footer";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";

const PageNotFoundPage = () => (
  <Shell
    head={home.head}
    navbar={navbar as IShellProps["navbar"]}
    footer={footer as IShellProps["footer"]}
    noScript={noscript}
    shortcuts={shortcuts}
    background={home.background}
    linkComponent={Link as any}
  >
    <PageNotFound
      image={pageNotFoundImage}
      homeLink={withPrefix("/")}
      linkComponent={Link as any}
      headComponent={title => <Head title={title} />}
    />
  </Shell>
);

export default PageNotFoundPage;
