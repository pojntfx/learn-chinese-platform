import { ServiceBroker } from "moleculer";
import { Translator } from "./translator.service";

it("Should get simplified hanzi for pinyin", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Translator);
  await broker.start();
  const hanzi = await broker.call("v1.translator.getSimplifiedHanziForPinyin", {
    pinyin: "me2n"
  });
  // me3n is 门 (door)
  expect(hanzi.includes("门")).toBe(true);
});

it("Should get traditional hanzi for pinyin", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Translator);
  await broker.start();
  const hanzi = await broker.call(
    "v1.translator.getTraditionalHanziForPinyin",
    {
      pinyin: "me2n"
    }
  );
  // me3n is 門 (door)
  expect(hanzi.includes("門")).toBe(true);
});

it("Should get pinyin for simplified hanzi", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Translator);
  await broker.start();
  const pinyin = await broker.call("v1.translator.getPinyinForHanzi", {
    hanzi: "门"
  });
  // 门 is mén (door)
  expect(pinyin.includes("mén")).toBe(true);
});

it("Should get pinyin for traditional hanzi", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Translator);
  await broker.start();
  const pinyin = await broker.call("v1.translator.getPinyinForHanzi", {
    hanzi: "門"
  });
  // 門 is mén (door)
  expect(pinyin.includes("mén")).toBe(true);
});

it("Should get english for simplified hanzi", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Translator);
  await broker.start();
  const english = await broker.call("v1.translator.getEnglishForHanzi", {
    hanzi: "门"
  });
  let isDoor = false;
  // 门 is door
  await english.map(translation => {
    if (translation.includes("door")) isDoor = true;
  });
  expect(isDoor).toBe(true);
});

it("Should get english for traditional hanzi", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Translator);
  await broker.start();
  const english = await broker.call("v1.translator.getEnglishForHanzi", {
    hanzi: "門"
  });
  let isDoor = false;
  // 門 is door
  await english.map(translation => {
    if (translation.includes("door")) isDoor = true;
  });
  expect(isDoor).toBe(true);
});

it("Should get english for pinyin", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Translator);
  await broker.start();
  const english = await broker.call("v1.translator.getEnglishForPinyin", {
    pinyin: "me2n"
  });
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
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Translator);
  await broker.start();
  const hanzi = await broker.call("v1.translator.getHanziForEnglish", {
    english: "door"
  });
  // 门 is door
  expect(hanzi.includes("门")).toBe(true);
});

it("Should get pinyin for english", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Translator);
  await broker.start();
  const hanzi = await broker.call("v1.translator.getPinyinForEnglish", {
    english: "door"
  });
  // mén is door
  expect(hanzi.includes("mén")).toBe(true);
});
