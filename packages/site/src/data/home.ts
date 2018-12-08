import { common } from "./common";

const home = {
  head: {
    title: "Home",
    description: "A modern and libre way to learn Chinese.",
    author: common.author,
    keywords: ["docs", "documentation", "help"],
    favicon: common.favicon,
    siteTitle: common.title,
    themeColor: common.color,
    lang: common.language
  },
  broadcast: {
    title: "Read more over at the blog",
    icon: "podcast",
    link: "/blog"
  },
  hero: {
    title: "A modern and libre way to learn Chinese.",
    text: `The ${common.title}`,
    primaryAction: {
      title: "Get started",
      icon: "rocket",
      link: "/docs",
      disabled: false
    },
    secondaryAction: {
      title: "Watch video",
      icon: "video",
      text: "Introduction to the Learn Chinese Platform",
      video: "http://lunduke.com/720classic/LinuxSucks-2016.mp4",
      disabled: true
    }
  },
  background: common.background
};

export { home };
