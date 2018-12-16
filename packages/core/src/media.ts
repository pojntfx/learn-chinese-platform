import { Bing } from "images-scraper";

/**
 * Get media for english
 * @param english English to get media for
 */
const getMediaForEnglish = async (english: string) =>
  new Bing()
    .list({ keyword: english, num: 10, detail: false })
    .then((data: any) => data.map((result: any) => result.url))
    .then((imgs: any) => imgs.filter((img: any) => img.includes("https://")));

export { getMediaForEnglish };
