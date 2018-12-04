#!/usr/bin/node
const express = require("express");

const app = express();

process.env.NODE_ENV === "production"
  ? app.use(express.static(__dirname))
  : app.use(express.static(__dirname + "/../public"));

const {
  name,
  description: pkgDescription,
  version,
  author,
  license,
  homepage
} = require("../package.json");

const description = `Learn Chinese Platform Site
${pkgDescription}

    Started successfully on port ${process.env.PORT || 5000}!

Version: ${name}#${version} by ${author}
License: ${license}
More info: ${homepage}`;

const server = app.listen(process.env.PORT || 5000, () =>
  console.log(description)
);

module.exports = {
  server
};
