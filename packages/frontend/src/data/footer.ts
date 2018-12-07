import { common } from "./common";

const footer = {
  socialLinks: [
    {
      title: "GitLab",
      img:
        "https://img.shields.io/badge/GitLab-%40pojntfx%2Flearn--chinese--platform-fc6d26.svg?logo=gitlab",
      link: "https://gitlab.com/pojntfx/learn-chinese-platform",
      help: {
        title: "GitLab",
        text: `The central place for ${common.title}'s development.`,
        docsLink: `${common.site}/docs/gitlab`
      }
    },
    {
      title: "GitHub",
      img:
        "https://img.shields.io/badge/GitHub-%40pojntfx%2Flearn--chinese--platform-181717.svg?logo=github&logoColor=ffffff",
      link: "https://github.com/pojntfx/learn-chinese-platform",
      help: {
        title: "GitHub",
        text: `A mirror of the ${common.title}.`,
        docsLink: `${common.site}/docs/github`
      }
    },
    {
      title: "NPM",
      img:
        "https://img.shields.io/badge/npm-%7elearn--chinese--platform-CB3837.svg?logo=npm",
      link: "https://www.npmjs.com/~learn-chinese-platform",
      help: {
        title: "NPM",
        text: `The ${common.title} as NodeJS packages.`,
        docsLink: `${common.site}/docs/npm`
      }
    }
  ],
  legal: {
    global: {
      product: `${common.title} App`,
      timeSpan: "2018",
      holder: common.author,
      help: {
        title: "Copyright Holder",
        text:
          "This is the individual or organization that holds the copyright of this product.",
        docsLink: `${common.site}/docs/copyright`
      }
    },
    licenses: [
      {
        product: `${common.title} App`,
        type: "Media",
        icon: "images",
        timeSpan: "2018",
        holder: common.author,
        spdxLicenseIdentifier: "CC-BY-SA-4.0",
        text:
          "This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.",
        badge: {
          img: "https://licensebuttons.net/l/by-sa/4.0/88x31.png",
          title: "CC-BY-SA-4.0 license badge"
        },
        more: {
          link: "https://creativecommons.org/licenses/by-sa/4.0/",
          title: "the Creative Commons"
        },
        help: {
          title: "Media License",
          text: "This is the license that applies to this product's media.",
          docsLink: `${common.site}/docs/copyright/media`
        }
      },
      {
        product: `${common.title} App`,
        type: "Code",
        icon: "code",
        timeSpan: "2018",
        holder: common.author,
        spdxLicenseIdentifier: "AGPL-3.0",
        text:
          "This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.\nThis program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.\nYou should have received a copy of the GNU Affero General Public License along with this program. If not, see https://www.gnu.org/licenses/.",
        badge: {
          img: "https://www.gnu.org/graphics/agplv3-155x51.png",
          title: "AGPL-3.0 license badge"
        },
        more: {
          link: "https://www.gnu.org/licenses/agpl.html",
          title: "the Free Software Foundation"
        },
        help: {
          title: "Code License",
          text:
            "This is the license that applies to this product's source code.",
          docsLink: `${common.site}/docs/copyright/code`
        }
      }
    ]
  },
  shortcutTrigger: {
    title: "Shortcuts",
    icon: "keyboard",
    disabled: false,
    help: {
      title: "Keyboard Shortcuts",
      text: "Get information on the available keyboard shortcuts in this app.",
      docsLink: `${common.site}/docs/app/shortcuts`
    }
  }
};

export { footer };
