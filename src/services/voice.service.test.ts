import { ServiceBroker } from "moleculer";
import { Voice } from "./voice.service";

it("Should get voice url for simplified hanzi", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Voice);
  await broker.start();
  const voiceUrl = await broker.call("v1.voice.getVoiceForHanzi", {
    hanzi: "门"
  });
  expect(voiceUrl).toContain("%E9%97%A8");
});

it("Should get voice url for traditional hanzi", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Voice);
  await broker.start();
  const voiceUrl = await broker.call("v1.voice.getVoiceForHanzi", {
    hanzi: "門"
  });
  expect(voiceUrl).toContain("%E9%96%80");
});

it("Should get voice url for pinyin", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Voice);
  await broker.start();
  const voiceUrl = await broker.call("v1.voice.getVoiceForPinyin", {
    pinyin: "mén"
  });
  expect(voiceUrl).toContain("m%C3%A9n");
});
