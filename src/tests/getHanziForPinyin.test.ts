import {
  getSimplifiedHanziForPinyin,
  getTraditionalHanziForPinyin,
  getPinyinForHanzi
} from "../utils/mdbg";

it("Should get simplified hanzi for pinyin", async () => {
  const hanzi = await getSimplifiedHanziForPinyin("me2n");
  // me3n is 门 (door)
  expect(hanzi.includes("门")).toBe(true);
});

it("Should get traditional hanzi for pinyin", async () => {
  const hanzi = await getTraditionalHanziForPinyin("me2n");
  // me3n is 門 (door)
  expect(hanzi.includes("門")).toBe(true);
});

it("Should get pinyin for simplified hanzi", async () => {
  const hanzi = await getPinyinForHanzi("门");
  console.log(hanzi);
  // 门 is mén (door)
  expect(hanzi.includes("mén")).toBe(true);
});

it("Should get pinyin for traditional hanzi", async () => {
  const hanzi = await getPinyinForHanzi("門");
  // 門 is mén (door)
  expect(hanzi.includes("mén")).toBe(true);
});
