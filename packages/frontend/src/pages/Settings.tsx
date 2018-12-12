import * as React from "react";
import { Paper, Help, Button, Divider } from "@libresat/frontend-components";
import { Shell, IShellProps } from "@libresat/frontend-components";
import { settings } from "../data/settings";
import { navbar } from "../data/navbar";
import { footer } from "../data/footer";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { Link } from "../downstream/Link";
import { Subscribe } from "unstated";
import { SettingsContainer } from "../containers/Settings";
import { Form, Input, Checkbox, DividerProps, Header } from "semantic-ui-react";
import { common } from "../data/common";
import { HeaderWrapper } from "../downstream/HeaderWrapper";

const Settings = (props: any) => (
  <Shell
    head={settings.head}
    navbar={navbar as IShellProps["navbar"]}
    footer={footer as IShellProps["footer"]}
    noScript={noscript}
    shortcuts={shortcuts}
    background={settings.background}
    linkComponent={Link}
    {...props}
  >
    <Paper>
      <HeaderWrapper>
        <Header content="Settings" subheader="Tweak the LCP app" icon="cogs" />
        <Link to="/">
          <Button content="Save and close" icon="save" primary />
        </Link>
      </HeaderWrapper>
      {
        <Subscribe to={[SettingsContainer]}>
          {(settings: SettingsContainer) => (
            <Form>
              <Divider
                title="Search"
                icon="search"
                offset={"top" as DividerProps["offset"]}
              />
              <Help
                title="Precise search"
                text={`Show only closely related context (no reverse lookup, i.e. it won't show "hào" if you type "hǎo").`}
                docsLink={`${common.site}/docs/app/settings`}
              >
                <Form.Checkbox
                  label="Precise"
                  checked={settings.state.searchIsPrecise}
                  onChange={settings.togglePreciseSearch}
                  toggle
                />
              </Help>
              <Divider
                title="Advanced"
                icon="code"
                offset={"top" as DividerProps["offset"]}
              />
              <Help
                title="Gateway URL"
                text={`The URL of the Learn Chinese Platform gateway ("server") you'd like to use.`}
                docsLink={`${common.site}/docs/app/settings`}
              >
                <Form.Field
                  label="Gateway URL"
                  value={settings.state.gatewayUrl}
                  control={Input}
                  onChange={(e: any) =>
                    settings.setGatewayEndpoint(e.target.value)
                  }
                />
              </Help>
            </Form>
          )}
        </Subscribe>
      }
    </Paper>
  </Shell>
);

export { Settings };
