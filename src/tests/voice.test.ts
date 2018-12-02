import { getVoiceForHanzi, getVoiceForPinyin } from "../utils/voice.util";

it("Should get voice url for simplified hanzi", async () => {
  const voiceUrl = await getVoiceForHanzi("门");
  expect(voiceUrl).toContain("%E9%97%A8");
});

it("Should get voice url for traditional hanzi", async () => {
  const voiceUrl = await getVoiceForHanzi("門");
  expect(voiceUrl).toContain("%E9%96%80");
});

it("Should get voice url for pinyin", async () => {
  const voiceUrl = await getVoiceForPinyin("mén");
  expect(voiceUrl).toContain("m%C3%A9n");
});
