#!/usr/bin/node
import * as express from "express";
import * as path from "path";

/**
 * Start the frontend
 * @param httpGatewayPort Port that the frontend should listen on
 */
const start = async (httpGatewayPort: number | string) => {
  if (process.env.NODE_ENV === "production") {
    const app = express();
    app.use(express.static(path.join(__dirname)));
    app.get("/*", function(_, res) {
      res.sendFile(path.join(__dirname, "index.html"));
    });
    return app.listen(process.env.PORT || 8080);
  } else {
    const app = express();
    app.use(express.static(path.join(__dirname, "/../dist")));
    app.get("/*", function(_, res) {
      res.sendFile(path.join(__dirname, "/../dist/index.html"));
    });
    return app.listen(process.env.PORT || 8080);
  }
};

const {
  name,
  description: pkgDescription,
  version,
  author,
  license,
  homepage
} = require("../package.json");

const description = `Learn Chinese Platform Frontend
${pkgDescription}

    Started successfully on port ${process.env.PORT || 8080}!

Version: ${name}#${version} by ${author}
License: ${license}
More info: ${homepage}`;

start(process.env.PORT || 8080).then(() => console.log(description));

export { start };
