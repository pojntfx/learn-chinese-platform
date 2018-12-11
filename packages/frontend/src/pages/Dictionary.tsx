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
import { Button, Popup } from "semantic-ui-react";
import { SearchInputWrapper } from "../downstream/SearchInputWrapper";
import { SearchCheckbox } from "../downstream/SearchCheckbox";

class Dictionary extends Component {
  state = {
    query: "",
    precise: false
  };

  handleInput = (e: any) =>
    this.setState({
      query: e.target.value
    });

  togglePrecise = () =>
    this.setState({
      precise: !this.state.precise
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
          {!this.state.query && (
            <Header
              as="h1"
              content="The Learn Chinese Platform Dictionary"
              subheader="Search for Hanzi, Pinyin or English."
            />
          )}
          <SearchInputWrapper theme={{ pristine: !this.state.query }}>
            <SearchInput
              value={this.state.query}
              onChange={this.handleInput}
              autoFocus
              placeholder="Search for Pinyin, Hanzi or English"
              fluid
              icon="search"
            />
            <Popup
              header="Search options"
              position="top right"
              on="click"
              hideOnScroll
              trigger={<Button icon="options" />}
              content={
                <SearchCheckbox
                  label={"Precise"}
                  checked={this.state.precise}
                  onClick={this.togglePrecise}
                  toggle
                />
              }
            />
          </SearchInputWrapper>

          <ContextList
            endpoint={common.httpGatewayUrl}
            precise={this.state.precise}
            query={this.state.query}
          />
        </>
      </Shell>
    );
  }
}

export { Dictionary };
