import logo from "../assets/logo.png";
import { about } from "./about";
import { clients } from "./clients";
import { apps } from "./apps";
import { common } from "./common";
import { services } from "./services";
import { docs } from "./docs";
import { blog } from "./blog";
import { imprint } from "./imprint";
import { search } from "./search";
import { home } from "./home";

const navbar = {
  brand: {
    title: common.title,
    img: logo,
    link: "/",
    help: {
      title: common.title,
      text: home.head.description,
      docsLink: `${common.site}/docs`
    }
  },
  firstItems: [
    {
      title: about.head.title,
      icon: "info",
      link: "/about",
      help: {
        title: about.head.title,
        text: about.head.description,
        docsLink: `${common.site}/docs/site`
      }
    }
  ],
  startItems: [
    {
      title: clients.head.title,
      link: "/clients",
      icon: "app store",
      help: {
        title: clients.head.title,
        text: clients.head.description,
        docsLink: `${common.site}/docs/site/clients`
      }
    },
    {
      title: services.head.title,
      link: "/services",
      icon: "server",
      help: {
        title: services.head.title,
        text: services.head.description,
        docsLink: `${common.site}/docs/site/servers`
      }
    },
    {
      title: home.head.title,
      link: "/",
      icon: "home",
      help: {
        title: home.head.title,
        text: home.head.description,
        docsLink: `${common.site}/docs/site/home`
      }
    }
  ],
  endItems: [
    {
      title: docs.head.title,
      link: "/docs",
      icon: "book",
      help: {
        title: docs.head.title,
        text: docs.head.description,
        docsLink: `${common.site}/docs`
      }
    },
    {
      title: blog.head.title,
      link: "/blog",
      icon: "rss",
      help: {
        title: blog.head.title,
        text: blog.head.description,
        docsLink: `${common.site}/docs/site/blog`
      }
    },
    {
      title: imprint.head.title,
      link: "/imprint",
      icon: "legal",
      help: {
        title: imprint.head.title,
        text: imprint.head.description,
        docsLink: `${common.site}/docs/site/imprint`
      }
    },
    {
      title: search.head.title,
      link: "/search",
      icon: "search",
      help: {
        title: search.head.title,
        text: search.head.description,
        docsLink: `${common.site}/docs/site/search`
      }
    }
  ],
  lastItems: [
    {
      title: apps.head.title,
      icon: "grid layout",
      link: "/apps",
      help: {
        title: apps.head.title,
        text: apps.head.description,
        docsLink: `${common.site}/docs/apps`
      }
    }
  ]
};

export { navbar };
