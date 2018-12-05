import favicon from "../assets/icon.png";
import background from "../assets/bg.jpg";

const appsData = {
  appMenu: {
    apps: [
      {
        title: "Site",
        icon: "globe",
        link: "https://learn-chinese.tk/",
        disabled: false,
        help: {
          command: "$ lcpctl site",
          docsLink: "https://learn-chinese.tk/docs",
          text:
            "The central access point for all information on the Learn Chinese Platform.",
          title: "Site"
        }
      },
      {
        title: "App",
        icon: "app store",
        link: "/",
        disabled: false,
        help: {
          command: "$ lcpctl app",
          docsLink: "https://learn-chinese.tk/clients",
          text: "Frontend for the Learn Chinese Platform",
          title: "App"
        }
      }
    ],
    search: {
      icon: "search",
      text: "Search",
      value: "",
      disabled: true,
      help: {
        title: "Search for an App",
        text: "Filter all apps by a query.",
        command: "$ lcpctl get apps | grep <query>",
        docsLink: "https://learn-chinese.tk/clients"
      }
    }
  },
  head: {
    title: "Apps",
    description: "Switch between the Learn Chinese Platform Apps",
    author: "Felix Pojtinger",
    keywords: ["apps", "switcher", "index"],
    favicon,
    siteTitle: "Learn Chinese Platform",
    themeColor: "#E31818",
    lang: "en"
  },
  background
};

export { appsData };
