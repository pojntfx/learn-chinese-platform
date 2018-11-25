# Learn Chinese Platform

![Learn Chinese Platform Logo](./packages/site/static/img/logo.png)

A modern and libre way to learn Chinese.

## Usage

[![Demo Site](https://img.shields.io/badge/Demo-learn--chinese.tk-black.svg)](https://learn-chinese.tk)
[![Developed on GNU/Linux](https://img.shields.io/badge/developed%20on-GNU/Linux%20and%20BSD-D2AA30.svg?logo=linux)](https://getfedora.org/)

```bash
# Install dependencies
$ npm install
```

```bash
# Start development versions of all packages
$ npm run dev
# Start development versions of and debugger for all packages (connect by pressing F5 in VSCode)
$ npm run dev--debug
```

```bash
# Start development version of inidividual package
$ npm run dev -- --scope @learn-chinese-platform/deck-backend
# Start development version of and debugger for individual package (connect by pressing F5 in VSCode)
$ npm run dev--debug -- --scope @learn-chinese-platform/deck-core
```

## Deployment

[![Built for GNU/Linux](https://img.shields.io/badge/built%20for-GNU/Linux%20and%20BSD-D2AA30.svg?logo=linux)](https://getfedora.org/)
[![Built for Docker](https://img.shields.io/badge/built%20for-Docker-34A0EF.svg?logo=docker)](https://www.docker.com/)
[![Built for Kubernetes](https://img.shields.io/badge/built%20for-Kubernetes-326DE6.svg?logo=cloud)](https://kubernetes.io/)

```bash
# Build production versions of all packages
$ npm run build
# Start production versions of all packages
$ npm run start
```

```bash
# Build production version of inidividual package
$ npm run build -- --scope @learn-chinese-platform/deck-backend
# Start production version of inidividual package
$ npm run start -- --scope @learn-chinese-platform/deck-backend
```

```bash
# Publish all packages to npm
$ npm run publish
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Licenses

[![Code License AGPL-3.0](https://img.shields.io/badge/Code%20License-AGPL--3.0-brightgreen.svg)](https://www.gnu.org/licenses/agpl-3.0.en.html)
[![Media License CC-BY-SA-4.0](https://img.shields.io/badge/Media%20License-CC--BY--SA--4.0-brightgreen.svg)](https://creativecommons.org/licenses/by-sa/4.0/)

These licenses do, if not otherwise specified, apply to all packages in this repository.

### Code

[![AGPL-3.0 License](https://www.gnu.org/graphics/agplv3-155x51.png)](https://www.gnu.org/licenses/agpl.html)

Learn Chinese Platform
Copyright (C) 2018 Felix Pojtinger

SPDX-License-Identifier: AGPL-3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU/Linux Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU/Linux Affero General Public License for more details.

You should have received a copy of the GNU/Linux Affero General Public License along with this program. If not, see [https://www.gnu.org/licenses/](https://www.gnu.org/licenses/).

### Media

[![CC-BY-SA-4.0 License](https://licensebuttons.net/l/by-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-sa/4.0/)

Learn Chinese Platform
Copyright (C) 2018 Felix Pojtinger

SPDX-License-Identifier: CC-BY-SA-4.0

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).
