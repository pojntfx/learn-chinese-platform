import {
  getVoiceForPinyinAlt,
  getVoiceForHanziAlt,
  getFemaleVoiceForHanzi,
  getMaleVoiceForHanzi,
  getFemaleVoicesForPinyin,
  getMaleVoicesForPinyin
} from "./voice";

it("Should get voice url for simplified hanzi with alt implementation", async () => {
  const voiceUrl = await getVoiceForHanziAlt("门");
  expect(voiceUrl).toContain("%E9%97%A8");
});

it("Should get voice url for traditional hanzi with alt implementation", async () => {
  const voiceUrl = await getVoiceForHanziAlt("門");
  expect(voiceUrl).toContain("%E9%96%80");
});

it("Should get voice url for pinyin with alt implementation", async () => {
  const voiceUrl = await getVoiceForPinyinAlt("mén");
  expect(voiceUrl).toContain("m%C3%A9n");
});

it("Should get female voice url for simplified hanzi", async () => {
  const voiceUrl = await getFemaleVoiceForHanzi("门");
  expect(voiceUrl).toContain("%E9%97%A8");
});

it("Should get male voice url for simplified hanzi", async () => {
  const voiceUrl = await getMaleVoiceForHanzi("门");
  expect(voiceUrl).toContain("%E9%97%A8");
});

it("Should get female voice url for traditional hanzi", async () => {
  const voiceUrl = await getFemaleVoiceForHanzi("門");
  expect(voiceUrl).toContain("%E9%96%80");
});

it("Should get male voice url for traditional hanzi", async () => {
  const voiceUrl = await getMaleVoiceForHanzi("門");
  expect(voiceUrl).toContain("%E9%96%80");
});

it("Should get female voice urls for pinyin", async () => {
  const voiceUrls = await Promise.all(await getFemaleVoicesForPinyin("mén"));
  expect(
    voiceUrls.find(voiceUrl => voiceUrl.includes("%E9%97%A8"))
  ).toBeTruthy();
});

it("Should get male voice urls for pinyin", async () => {
  const voiceUrls = await Promise.all(await getMaleVoicesForPinyin("mén"));
  expect(
    voiceUrls.find(voiceUrl => voiceUrl.includes("%E9%97%A8"))
  ).toBeTruthy();
});
