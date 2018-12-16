import { img } from "google-parser";

/**
 * Get media for english
 * @param english English to get media for
 */
const getMediaForEnglish = async (english: string) =>
  img(english)
    .then(data => data.map(result => result.img))
    .then(imgs => imgs.filter(img => img.includes("https://")));

export { getMediaForEnglish };
