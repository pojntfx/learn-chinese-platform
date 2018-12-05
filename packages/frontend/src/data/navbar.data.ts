import logo from "../assets/logo.png";

const navbarData = {
  brand: {
    title: "Learn Chinese Platform",
    img: logo,
    link: "/",
    disabled: false,
    help: {
      title: "Learn Chinese Platform",
      text: "A modern and libre way to learn Chinese.",
      command: "$ lcpctl",
      docsLink: "https://learn-chinese.tk"
    }
  },
  firstItems: [
    {
      title: "App",
      icon: "app store",
      link: "/about",
      disabled: false,
      help: {
        title: "Learn Chinese Platform App",
        text: "Frontend for the Learn Chinese Platform.",
        command: "$ lcpctl",
        docsLink: "https://learn-chinese.tk"
      }
    }
  ],
  startItems: [
    {
      title: "Dictionary",
      link: "/",
      icon: "book",
      disabled: false,
      help: {
        title: "Search for Hanzi, Pinyin or English",
        text:
          "Filter the database and get the context for a hanzi, pinyin or english.",
        command: "$ lcptctl get context -h <hanzi> -p <pinyin> -e <english>",
        docsLink: "https://learn-chinese.tk/docs"
      }
    }
  ],
  endItems: [
    {
      title: "Decks",
      link: "/decks",
      icon: "list",
      disabled: true,
      help: {
        title: "Edit or create decks",
        text: "Manage decks and export them as an Anki packages or PDFs.",
        command: "$ lcpctl create deck -ti <title> -te <text>",
        docsLink: "https://learn-chinese.tk/docs"
      }
    }
  ],
  lastItems: [
    {
      title: "Apps",
      icon: "grid layout",
      link: "/apps",
      disabled: false,
      help: {
        title: "All Apps",
        text: "Change the app you are currently using.",
        command: "$ lcpctl get apps",
        docsLink: "https://learn-chinese.tk/docs"
      }
    },
    {
      title: "Notifications",
      icon: "bell",
      link: "/notifications",
      disabled: true,
      help: {
        title: "Get Notifications",
        text: "Take a look at your notifications.",
        command: "$ lcpctl get notifications",
        docsLink: "https://learn-chinese.tk/docs"
      }
    },
    {
      title: "Settings",
      icon: "settings",
      link: "/settings",
      disabled: true,
      help: {
        title: "Edit Settings",
        text: "Change the settings of this app.",
        command: "$ lcpctl get config",
        docsLink: "https://learn-chinese.tk/docs"
      }
    }
  ]
};

export { navbarData };
