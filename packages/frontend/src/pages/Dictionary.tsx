import * as React from "react";
import { Component } from "react";
import { Shell, IShellProps, Header } from "@libresat/frontend-components";
import { dictionary } from "../data/dictionary";
import { navbar } from "../data/navbar";
import { footer } from "../data/footer";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { Link } from "../downstream/Link";
import { ContextList } from "../downstream/ContextList";
import { SearchInput } from "../downstream/SearchInput";
import { common } from "../data/common";

class Dictionary extends Component {
  state = {
    pinyin: ""
  };

  handleInput = (e: any) =>
    this.setState({
      pinyin: e.target.value
    });

  render() {
    return (
      <Shell
        head={dictionary.head}
        navbar={navbar as IShellProps["navbar"]}
        footer={footer as IShellProps["footer"]}
        noScript={noscript}
        shortcuts={shortcuts}
        background={dictionary.background}
        linkComponent={Link as any}
        {...this.props}
      >
        <>
          {!this.state.pinyin && (
            <Header
              as="h1"
              content="The Learn Chinese Platform Dictionary"
              subheader="Search for Hanzi, Pinyin or English."
            />
          )}
          <SearchInput
            value={this.state.pinyin}
            onChange={this.handleInput}
            autoFocus
            placeholder="Search for Pinyin, Hanzi or English"
            icon="search"
            theme={{ pristine: !this.state.pinyin }}
            fluid
          />
          <ContextList
            endpoint={common.httpGatewayUrl}
            pinyin={this.state.pinyin}
          />
        </>
      </Shell>
    );
  }
}

export { Dictionary };
