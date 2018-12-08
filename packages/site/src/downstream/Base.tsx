import * as React from "react";
import {
  Shell,
  IShellProps,
  ImageWithCaption,
  Paper
} from "@libresat/frontend-components";
import { navbar } from "../data/navbar";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { footer } from "../data/footer";
import { Link } from "../downstream/Link";
import { MDXProvider } from "@mdx-js/tag";

interface IBaseProps {
  children: JSX.Element | JSX.Element[];
  head: IShellProps["head"];
  background: IShellProps["background"];
}

const Base = ({ children, head, background, ...otherProps }: IBaseProps) => (
  <MDXProvider
    components={{
      a: ({ href, ...otherProps }: any) => <Link to={href} {...otherProps} />,
      img: ({ src, ...otherProps }: any) => (
        <ImageWithCaption as={Link} to={src} src={src} {...otherProps} />
      ),
      blockquote: ({ children, ...otherProps }: any) => (
        <Paper {...otherProps}>
          <i>{children}</i>
        </Paper>
      )
    }}
  >
    <Shell
      head={head}
      navbar={navbar as IShellProps["navbar"]}
      footer={footer as IShellProps["footer"]}
      noScript={noscript}
      shortcuts={shortcuts}
      background={background}
      linkComponent={Link as any}
      {...otherProps}
    >
      {children}
    </Shell>
  </MDXProvider>
);

export { Base };
