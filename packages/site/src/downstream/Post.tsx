import * as React from "react";
import { Base } from "./Base";
import { Header as BlogHeader, Paper } from "@libresat/frontend-components";
import { Card, Image, Header } from "semantic-ui-react";
import { withPrefix } from "gatsby-link";
import { Link } from "./Link";
import { blog } from "../data/blog";
import { PostsCoverflowSection } from "./PostsCoverflowSection";
import { Author } from "./Author";

const Post = ({
  children,
  pageContext: {
    author,
    featured,
    date,
    lastEdit,
    imgSrc,
    imgAlt,
    timeToRead,
    title
  }
}: any) => (
  <Base
    head={{
      ...blog.head,
      title: `${title} | ${blog.head.title}`
    }}
    background={blog.background}
  >
    <Link to="/blog">
      <BlogHeader
        as="h1"
        content={blog.head.title}
        subheader={blog.head.description}
      />
    </Link>
    <Card fluid>
      <Card.Content>
        <Author>
          A {featured ? "featured " : null}
          post by {author} on {new Date(date).toLocaleDateString()}. Last edit
          on {new Date(lastEdit).toLocaleDateString()}. Estimated time to read:{" "}
          {timeToRead} {timeToRead === 1 ? "minute" : "minutes"}.
        </Author>
      </Card.Content>
      <Image as={Link} to={imgSrc} src={withPrefix(imgSrc)} alt={imgAlt} />
      <Card.Content>{children}</Card.Content>
    </Card>
    <Paper>
      {featured ? (
        <Header
          as="h2"
          content={blog.headers.featured.title}
          subheader={blog.headers.featured.text}
          icon={blog.headers.featured.icon}
        />
      ) : (
        <Header
          as="h2"
          content={blog.headers.latest.title}
          subheader={blog.headers.latest.text}
          icon={blog.headers.latest.icon}
        />
      )}
    </Paper>
    <PostsCoverflowSection featured={featured} />
  </Base>
);

export default Post;
