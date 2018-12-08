import logo from "../assets/logo.png";
import { about } from "./about";
import { dictionary } from "./dictionary";
import { decks } from "./decks";
import { apps } from "./apps";
import { notifications } from "./notifications";
import { settings } from "./settings";
import { common } from "./common";

const navbar = {
  brand: {
    title: common.title,
    img: logo,
    link: "/",
    help: {
      title: common.title,
      text: "A modern and libre way to learn Chinese.",
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
        docsLink: `${common.site}/docs/app`
      }
    }
  ],
  startItems: [
    {
      title: dictionary.head.title,
      link: "/dictionary",
      icon: "book",
      help: {
        title: dictionary.head.title,
        text: dictionary.head.description,
        docsLink: `${common.site}/docs/app/dictionary`
      }
    }
  ],
  endItems: [
    {
      title: decks.head.title,
      link: "/decks",
      icon: "list",
      help: {
        title: decks.head.title,
        text: decks.head.description,
        docsLink: `${common.site}/docs/app/decks`
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
    },
    {
      title: notifications.head.title,
      icon: "bell",
      link: "/notifications",
      help: {
        title: notifications.head.title,
        text: notifications.head.description,
        docsLink: `${common.site}/docs/app/notifications`
      }
    },
    {
      title: settings.head.title,
      icon: "settings",
      link: "/settings",
      help: {
        title: settings.head.title,
        text: settings.head.description,
        docsLink: `${common.site}/docs/app/settings`
      }
    }
  ]
};

export { navbar };
