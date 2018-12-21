import * as React from "react";
import { Component, RefObject } from "react";
import { List } from "../downstream/Context/List";
import { dictionary } from "../data/dictionary";
import { navbar } from "../data/navbar";
import { footer } from "../data/footer";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { Link } from "../downstream/Link";
import { IShellProps, Shell, Header } from "@libresat/frontend-components";
import { SettingsContainer } from "../containers/Settings";
import { Subscribe } from "unstated";
import { SearchContainer } from "../containers/Search";
import { Wrapper as Search } from "../downstream/Context/Input/Wrapper";
import { Sticky } from "semantic-ui-react";

class Dictionary extends Component {
  state = {
    contextRef: {}
  };

  handleContextRef = (contextRef: any) => this.setState({ contextRef });

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
        <Subscribe to={[SearchContainer]}>
          {(search: SearchContainer) => (
            <>
              {!search.state.query && (
                <Header
                  as="h1"
                  content="The Learn Chinese Platform Dictionary"
                  subheader="Search for Hanzi, Pinyin or English."
                />
              )}
              <Subscribe to={[SettingsContainer]}>
                {(settings: SettingsContainer) => (
                  <div ref={this.handleContextRef}>
                    <Sticky context={this.state.contextRef} offset={50}>
                      <Search
                        input={{
                          onChange: (e: any) => search.setQuery(e.target.value),
                          value: search.state.query,
                          autoFocus: true,
                          placeholder: "Search for Pinyin, Hanzi or English",
                          fluid: true,
                          icon: "search"
                        }}
                        options={{
                          onClick: settings.togglePreciseSearch,
                          precise: settings.state.searchIsPrecise
                        }}
                      />
                    </Sticky>
                    {search.state.query && (
                      <List
                        endpoint={settings.state.gatewayUrl}
                        query={search.state.query}
                      />
                    )}
                  </div>
                )}
              </Subscribe>
            </>
          )}
        </Subscribe>
      </Shell>
    );
  }
}

export { Dictionary };
