import * as React from "react";
import {
  Shell,
  IShellProps,
  Header as BlogHeader,
  Paper
} from "@libresat/frontend-components";
import { navbar } from "../data/navbar";
import { blog } from "../data/blog";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { footer } from "../data/footer";
import { Link } from "../tmp/Link";
import { PostsGallerySection } from "../tmp/PostsGallerySection";
import { Header } from "semantic-ui-react";
import { PostsCoverflowSection } from "../tmp/PostsCoverflowSection";

const Blog = () => (
  <Shell
    head={blog.head}
    navbar={navbar as IShellProps["navbar"]}
    footer={footer as IShellProps["footer"]}
    noScript={noscript}
    shortcuts={shortcuts}
    background={blog.background}
    linkComponent={Link as any}
  >
    <BlogHeader
      as="h1"
      content={blog.head.title}
      subheader={blog.head.description}
    />
    <Paper>
      <Header
        as="h2"
        content={blog.headers.featured.title}
        subheader={blog.headers.featured.text}
        icon={blog.headers.featured.icon}
      />
    </Paper>
    <PostsCoverflowSection featured />
    <Paper>
      <Header
        as="h2"
        content={blog.headers.latest.title}
        subheader={blog.headers.latest.text}
        icon={blog.headers.latest.icon}
      />
    </Paper>
    <PostsGallerySection />
  </Shell>
);

export default Blog;
