import React from "react";
import { Base } from "./Base";
import { Header } from "@libresat/frontend-components";
import { Head } from "../components/Head";
import { Paper } from "@libresat/frontend-components";

// This will be used as an alternative to the MDX import-export paradigm in the future
export default ({ title, header, subheader, children }) => (
  <Base>
    <Head title={title} />
    <Header as="h1" content={header} subheader={subheader} />
    <Paper>{children}</Paper>
  </Base>
);
