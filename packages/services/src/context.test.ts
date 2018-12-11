import { ServiceBroker } from "moleculer";
import { Context } from "./context";
import { IContextForPinyin } from "@learn-chinese-platform/core";

it("Should get the context for pinyin", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Context);
  await broker.start();
  const context = await broker.call("v1.context.getContextForPinyin", {
    pinyin: "ma"
  });
  expect(
    context.find(
      (context: IContextForPinyin) =>
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
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Context);
  await broker.start();
  const context = await broker.call("v1.context.getContextForHanzi", {
    hanzi: "吗",
    precise: true
  });
  // 号 is hào, which would be similar to 吗 (hǎo)
  expect(
    context.find(
      (context: IContextForPinyin) => context.hanzi.simplified.text === "号"
    )
  ).toBe(false);
});

it("Should get inprecise context for hanzi", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Context);
  await broker.start();
  const context = await broker.call("v1.context.getContextForHanzi", {
    hanzi: "吗",
    precise: false
  });
  // 号 is hào, which would be similar to 吗 (hǎo)
  expect(
    context.find(
      (context: IContextForPinyin) => context.hanzi.simplified.text === "号"
    )
  ).toBe(true);
});

it("Should get precise context for english", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Context);
  await broker.start();
  const context = await broker.call("v1.context.getContextForEnglish", {
    english: "eat",
    precise: true
  });
  // 摛 is chī (same pinyin as 吃, but different meaning)
  expect(
    context.find(
      (context: IContextForPinyin) => context.hanzi.simplified.text === "摛"
    )
  ).toBe(false);
});

it("Should get inprecise context for english", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Context);
  await broker.start();
  const context = await broker.call("v1.context.getContextForEnglish", {
    english: "eat",
    precise: false
  });
  // 摛 is chī (same pinyin as 吃, but different meaning)
  expect(
    context.find(
      (context: IContextForPinyin) => context.hanzi.simplified.text === "摛"
    )
  ).toBe(true);
});
