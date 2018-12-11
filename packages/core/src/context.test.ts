import { getContextForPinyin, getContextForHanzi } from "./context";

it("Should get the context for pinyin", async () => {
  const context = await getContextForPinyin("ma");
  expect(
    context.find(
      context =>
        context.definitions.map(definition =>
          definition.text.includes('(question particle for "yes-no" questions)')
        ).length >= 1
    )
  ).toMatchObject({
    definitions: [
      { text: ["see 嗎啡|吗啡, morphine"] },
      { text: ['(question particle for "yes-no" questions)'] }
    ],
    hanzi: {
      simplified: { text: "吗" },
      traditional: { text: "嗎" }
    },
    pinyin: {
      female: {
        voice:
          "https://cache-a.oddcast.com/c_fs/3a44cc2f99c440cc2045d6d565f08378.mp3?engine=4&language=10&voice=4&text=%E5%90%97&useUTF8=1"
      },
      male: {
        voice:
          "https://cache-a.oddcast.com/c_fs/2ba3300037dddbbf6881a3011ff0b946.mp3?engine=3&language=10&voice=4&text=%E5%90%97&useUTF8=1"
      },
      text: "ma"
    }
  });
});

it("Should get precise context for hanzi", async () => {
  const context = await getContextForHanzi("吗", true);
  // 号 is hào, which would be similar to 吗 (hǎo)
  expect(context.find(context => context.hanzi.simplified.text === "号")).toBe(
    false
  );
});

it("Should get inprecise context for hanzi", async () => {
  const context = await getContextForHanzi("吗", true);
  // 号 is hào, which would be similar to 吗 (hǎo)
  expect(context.find(context => context.hanzi.simplified.text === "号")).toBe(
    true
  );
});
