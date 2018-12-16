import { ServiceBroker } from "moleculer";
import { Media } from "./media";

it("Should get media for english", async () => {
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Media);
  await broker.start();
  const media = await broker.call("v1.media.getMediaForEnglish", {
    english: "test"
  });
  expect(media.length).toBeGreaterThan(0);
});
