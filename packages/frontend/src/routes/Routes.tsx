import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Dictionary } from "../pages/Dictionary";
import { Apps } from "../pages/Apps";
import { About } from "../pages/About";
import { Decks } from "../pages/Decks";
import { Notifications } from "../pages/Notifications";
import { Settings } from "../pages/Settings";

const RoutesRoute = (props: any) => (
  <BrowserRouter {...props}>
    <Switch>
      <Route path="/" render={() => <Redirect to="/dictionary" />} exact />
      <Route path="/about" render={() => <About />} />
      <Route path="/dictionary" render={() => <Dictionary />} />
      <Route path="/decks" render={() => <Decks />} />
      <Route path="/apps" render={() => <Apps />} />
      <Route path="/notifications" render={() => <Notifications />} />
      <Route path="/settings" render={() => <Settings />} />
    </Switch>
  </BrowserRouter>
);

export { RoutesRoute };
