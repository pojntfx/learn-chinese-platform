import * as React from "react";
import { Paper } from "@libresat/frontend-components";
import { Shell, IShellProps } from "@libresat/frontend-components";
import { dictionary } from "../data/dictionary";
import { navbar } from "../data/navbar";
import { footer } from "../data/footer";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { Link } from "../downstream/Link";
import { Context } from "../downstream/Context";

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
      <Context
        hanzi={{
          simplified: {
            text: "中文"
          },
          traditional: {
            text: "中文"
          },
          stroke: {
            medians: [""],
            strokes: [""]
          }
        }}
        pinyin={{
          text: "Zhōngwén",
          female: {
            voice:
              "https://cache-a.oddcast.com/c_fs/a8475dd12827bffa0b483fe6b772426c.mp3?engine=4&language=10&voice=4&text=%E4%BD%A0&useUTF8=1"
          },
          male: {
            voice:
              "https://cache-a.oddcast.com/c_fs/b0352754a528a257da89bbaa392e33c5.mp3?engine=3&language=10&voice=4&text=%E6%AF%8F%E9%9A%94&useUTF8=1"
          }
        }}
        definitions={[{ text: ["Chinese language"] }]}
      />
    </Paper>
  </Shell>
);

export { Dictionary };
