import { common } from "./common";

const shortcuts = {
  triggerKey: "?",
  title: "Keyboard Shortcuts",
  shortcuts: [
    {
      title: "Global",
      shortcuts: [
        {
          title: "Toggle shortcut dialog",
          keys: ["SHIFT", "?"]
        }
      ]
    }
  ],
  help: {
    title: "Keyboard Shortcuts",
    text: "Shortcuts which you can use to quickly navigate the app.",
    docsLink: `${common.site}/docs/site/shortcuts`
  }
};

export { shortcuts };
