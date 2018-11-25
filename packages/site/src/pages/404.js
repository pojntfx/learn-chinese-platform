import * as React from "react";
import { PageNotFound } from "@libresat/frontend-components";
import { Base } from "../layouts/Base";
import { withPrefix } from "gatsby";
import { Link } from "../components/Link";
import { Head } from "../components/Head";

export default () => (
  <Base>
    <PageNotFound
      image={withPrefix("/img/404-rabbit.png")}
      homeLink={withPrefix("/")}
      linkComponent={Link}
      headComponent={title => <Head title={title} />}
    />
  </Base>
);
