import { ServiceBroker } from "moleculer";
import { Character } from "./character";

it("Should get vector for hanzi", async () => {
  const stroke =
    "M 299 746 Q 359 655 388 651 Q 404 647 415 669 Q 419 685 409 711 Q 399 733 371 747 Q 328 774 308 779 Q 296 783 294 768 Q 291 758 299 746 Z";
  const broker = new ServiceBroker({
    logLevel: "warn"
  });
  await broker.createService(Character);
  await broker.start();
  const vector = await broker.call("v1.character.getVectorForHanzi", {
    hanzi: "门"
  });
  expect(vector.strokes.includes(stroke)).toBe(true);
});
