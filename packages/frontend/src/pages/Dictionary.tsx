import * as React from "react";
import { Shell, IShellProps } from "@libresat/frontend-components";
import { dictionary } from "../data/dictionary";
import { navbar } from "../data/navbar";
import { footer } from "../data/footer";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { Link } from "../downstream/Link";
import { ContextList } from "../downstream/ContextList";

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
    <ContextList
      contexts={[
        {
          hanzi: {
            simplified: {
              text: "新词"
            },
            traditional: {
              text: "新詞"
            },
            stroke: { medians: [""], strokes: [""] }
          },
          pinyin: {
            text: "xīncí",
            female: {
              voice:
                "https://cache-a.oddcast.com/c_fs/2d278fee0ec0603b250584ba27a158d5.mp3?engine=4&language=10&voice=4&text=%E6%96%B0%E8%AF%8D&useUTF8=1"
            },
            male: {
              voice:
                "https://cache-a.oddcast.com/c_fs/9e03907a7aff29a5459ed840bd0a77b6.mp3?engine=3&language=10&voice=4&text=%E6%96%B0%E8%AF%8D&useUTF8=1"
            }
          },
          definitions: [
            {
              text: ["new expression", "neologism"]
            }
          ]
        }
      ]}
    />
  </Shell>
);

export { Dictionary };
