declare function googleTTS(
  hanzi: string,
  language: string,
  speed: number
): string;

declare module "google-tts-api" {
  export = googleTTS;
}
