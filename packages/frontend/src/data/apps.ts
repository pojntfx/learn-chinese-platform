import { common } from "./common";

const apps = {
  appMenu: {
    apps: [
      {
        title: "Site",
        icon: "globe",
        link: `${common.site}/`,
        help: {
          title: "Site",
          text: `The central access point for all information on the ${
            common.title
          }.`,
          docsLink: `${common.site}/docs/site`
        }
      },
      {
        title: "App",
        icon: "app store",
        link: "/",
        help: {
          title: "App",
          text: `Frontend for the ${common.title}`,
          docsLink: `${common.site}/docs/clients`
        }
      }
    ],
    search: {
      icon: "search",
      text: "Search",
      value: "",
      disabled: false,
      help: {
        title: "Search for an app",
        text: "Filter all apps by a query.",
        docsLink: `${common.site}/docs/apps`
      }
    }
  },
  head: {
    title: "Apps",
    description: `Switch between the ${common.title} apps`,
    author: common.author,
    keywords: ["apps", "switcher", "index"],
    favicon: common.favicon,
    siteTitle: common.title,
    themeColor: common.color,
    lang: common.language
  },
  background: common.background
};

export { apps };
