import { getMediaForEnglish } from "./media";

it("Should get media for english", async () => {
  const media = await getMediaForEnglish("test");
  expect(media.length).toBeGreaterThan(0);
});
