import * as React from "react";
import { Paper } from "@libresat/frontend-components";
import { Shell, IShellProps } from "@libresat/frontend-components";
import { notifications } from "../data/notifications";
import { navbar } from "../data/navbar";
import { footer } from "../data/footer";
import { noscript } from "../data/noscript";
import { shortcuts } from "../data/shortcuts";
import { Link } from "../downstream/Link";
import Fetch from "react-fetch-component";
import { Card, Button } from "semantic-ui-react";

const Notifications = (props: any) => (
  <Shell
    head={notifications.head}
    navbar={navbar as IShellProps["navbar"]}
    footer={footer as IShellProps["footer"]}
    noScript={noscript}
    shortcuts={shortcuts}
    background={notifications.background}
    linkComponent={Link}
    {...props}
  >
    <Paper>
      <h1>Notifications</h1>
      <Fetch url="https://gitlab.com/api/v4/projects/9601917/repository/commits?all">
        {({ data }) =>
          Array.isArray(data) &&
          data.map((notification: any, index) => (
            <Card
              header={notification.title}
              meta={new Date(notification.created_at).toLocaleString()}
              description={notification.message}
              key={index}
              fluid
            />
          ))
        }
      </Fetch>
      <Link to="https://gitlab.com/pojntfx/learn-chinese-platform/commits/master">
        <Button
          primary
          icon="newspaper"
          content="See all notifications"
          fluid
        />
      </Link>
    </Paper>
  </Shell>
);

export { Notifications };
