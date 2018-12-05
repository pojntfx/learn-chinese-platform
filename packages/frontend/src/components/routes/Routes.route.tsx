import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { HomeRoute } from "./Home.route";
import { AppsRoute } from "./Apps.route";
import { AboutRoute } from "./About.route";
import { IRoutesRouteProps } from "../../types";

const RoutesRoute = (props: IRoutesRouteProps) => (
  <BrowserRouter {...props}>
    <Switch>
      <Route path="/" exact render={() => <HomeRoute />} />
      <Route path="/identity" render={() => <Redirect to="/" />} />
      <Route path="/apps" render={() => <AppsRoute />} />
      <Route path="/about" render={() => <AboutRoute />} />
      {/* <Route path="/context" render={() => <HomeRoute />} />
      <Route path="/settings" render={() => <HomeRoute />} />
      <Route path="/search" render={() => <HomeRoute />} />
      <Route path="/notifications" render={() => <HomeRoute />} />
      <Route path="/users" render={() => <HomeRoute />} /> */}
    </Switch>
  </BrowserRouter>
);

export { RoutesRoute };
