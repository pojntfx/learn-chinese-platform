import { common } from "./common";

const blog = {
  head: {
    title: "Blog",
    description:
      "Posts on all things that are relevant to the Learn Chinese Platform.",
    author: common.author,
    keywords: ["blog", "news", "updates"],
    favicon: common.favicon,
    siteTitle: common.title,
    themeColor: common.color,
    lang: common.language
  },
  background: common.background,
  headers: {
    blog: {
      title: `The ${common.title} Blog`,
      text:
        "Posts on all things that are relevant to the Learn Chinese Platform."
    },
    featured: {
      title: "Featured Posts",
      icon: "star",
      text: `Check out the featured, editorial posts below and get an
      insight into recent news, updates and changes.`
    },
    latest: {
      title: "Latest Posts",
      icon: "newspaper",
      text: `Non-editorial, federated posts by the community and/or core devs.
      Consider contributing your own post by submitting a merge request!`
    }
  }
};

export { blog };
