import favicon from "../assets/icon.png";
import background from "../assets/bg.jpg";
import {
  title,
  shortTitle,
  author,
  site,
  language,
  color
} from "./metadata.json";

const common = {
  title,
  shortTitle,
  author,
  site,
  language,
  color,
  favicon,
  background,
  httpGatewayUrl:
    "https://gateway.exoframe.services.learn-chinese.tk/v1/context/getContextForPinyin?pinyin="
};

export { common };
