import { ServiceBroker } from "moleculer";
import { Voice } from "./voice.service";

it("Should get voice url for simplified hanzi with alt implementation", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Voice);
  await broker.start();
  const voiceUrl = await broker.call("v1.voice.getVoiceForHanziAlt", {
    hanzi: "门"
  });
  expect(voiceUrl).toContain("%E9%97%A8");
});

it("Should get voice url for traditional hanzi with alt implementation", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Voice);
  await broker.start();
  const voiceUrl = await broker.call("v1.voice.getVoiceForHanziAlt", {
    hanzi: "門"
  });
  expect(voiceUrl).toContain("%E9%96%80");
});

it("Should get voice url for pinyin with alt implementation", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Voice);
  await broker.start();
  const voiceUrl = await broker.call("v1.voice.getVoiceForPinyinAlt", {
    pinyin: "mén"
  });
  expect(voiceUrl).toContain("m%C3%A9n");
});

it("Should get female voice url for simplified hanzi", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Voice);
  await broker.start();
  const voiceUrl = await broker.call("v1.voice.getFemaleVoiceForHanzi", {
    hanzi: "门"
  });
  expect(voiceUrl).toContain("%E9%97%A8");
});

it("Should get male voice url for simplified hanzi", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Voice);
  await broker.start();
  const voiceUrl = await broker.call("v1.voice.getMaleVoiceForHanzi", {
    hanzi: "门"
  });
  expect(voiceUrl).toContain("%E9%97%A8");
});

it("Should get female voice url for traditional hanzi", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Voice);
  await broker.start();
  const voiceUrl = await broker.call("v1.voice.getFemaleVoiceForHanzi", {
    hanzi: "門"
  });
  expect(voiceUrl).toContain("%E9%96%80");
});

it("Should get male voice url for traditional hanzi", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Voice);
  await broker.start();
  const voiceUrl = await broker.call("v1.voice.getMaleVoiceForHanzi", {
    hanzi: "門"
  });
  expect(voiceUrl).toContain("%E9%96%80");
});

// TODO: Implement missing test for male and female voices for pinyin below
// it("Should get female voice urls for pinyin", async () => {
//   const broker = new ServiceBroker({
//     logLevel: "warn"
//   });
//   await broker.createService(Voice);
//   await broker.start();
//   const voiceUrls = await broker.call("v1.voice.getFemaleVoicesForPinyin", {
//     pinyin: "mén"
//   });
//   expect(
//     voiceUrls.find(voiceUrl => voiceUrl.includes("%E9%97%A8"))
//   ).toBeTruthy();
// });
