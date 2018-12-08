import * as React from "react";
import { Shell, IShellProps } from "@libresat/frontend-components";
import { navbar } from "../data/navbar";
import { blog } from "../data/blog";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { footer } from "../data/footer";
import { Link } from "../tmp/Link";

const Blog = () => (
  <Shell
    head={blog.head}
    navbar={navbar as IShellProps["navbar"]}
    footer={footer as IShellProps["footer"]}
    noScript={noscript}
    shortcuts={shortcuts}
    background={blog.background}
    linkComponent={Link as any}
    segment
  >
    <h1>Blog</h1>
  </Shell>
);

export default Blog;
