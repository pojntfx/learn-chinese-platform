import {
  getSimplifiedHanziForPinyin,
  getTraditionalHanziForPinyin,
  getPinyinForHanzi,
  getEnglishForHanzi,
  getEnglishForPinyin,
  getHanziForEnglish,
  getPinyinForEnglish,
  getSimplifiedHanziForTraditionalHanzi,
  getTraditionalHanziForSimplifiedHanzi
} from "./translator";

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

it("Should get simplified hanzi for traditional hanzi", async () => {
  const hanzi = await getSimplifiedHanziForTraditionalHanzi("門");
  // 門 is 门 (door)
  expect(hanzi).toBe("门");
});

it("Should get traditional hanzi for simplified hanzi", async () => {
  const hanzi = await getTraditionalHanziForSimplifiedHanzi("门");
  // 门 is 門 (door)
  expect(hanzi).toBe("門");
});

it("Should get pinyin for simplified hanzi", async () => {
  const pinyin = await getPinyinForHanzi("门");
  // 门 is mén (door)
  expect(pinyin.includes("mén")).toBe(true);
});

it("Should get pinyin for traditional hanzi", async () => {
  const pinyin = await getPinyinForHanzi("門");
  // 門 is mén (door)
  expect(pinyin.includes("mén")).toBe(true);
});

it("Should get english for simplified hanzi", async () => {
  const english = await getEnglishForHanzi("门");
  let isDoor = false;
  // 门 is door
  await english.map(translation => {
    if (translation.includes("door")) isDoor = true;
  });
  expect(isDoor).toBe(true);
});

it("Should get english for traditional hanzi", async () => {
  const english = await getEnglishForHanzi("門");
  let isDoor = false;
  // 門 is door
  await english.map(translation => {
    if (translation.includes("door")) isDoor = true;
  });
  expect(isDoor).toBe(true);
});

it("Should get english for pinyin", async () => {
  const english = await getEnglishForPinyin("me2n");
  let isDoor = false;
  // me2n is door
  await english.map(definition =>
    definition.map(translation => {
      if (translation.includes("door")) isDoor = true;
    })
  );
  expect(isDoor).toBe(true);
});

it("Should get hanzi for english", async () => {
  const hanzi = await getHanziForEnglish("door");
  // 门 is door
  expect(hanzi.includes("门")).toBe(true);
});

it("Should get pinyin for english", async () => {
  const hanzi = await getPinyinForEnglish("door");
  // mén is door
  expect(hanzi.includes("mén")).toBe(true);
});
