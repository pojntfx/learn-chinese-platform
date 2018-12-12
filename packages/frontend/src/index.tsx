import * as React from "react";
import { render } from "react-dom";
import { RoutesRoute } from "./routes/Routes";
import { Provider } from "unstated";

render(
  <Provider>
    <RoutesRoute />
  </Provider>,
  document.getElementById("root")
);
