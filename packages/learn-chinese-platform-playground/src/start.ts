import { ServiceBroker } from "moleculer";
import { Translator } from "./services/translator.service";
import { Voice } from "./services/voice.service";
import { Character } from "./services/character.service";
import * as WSGateway from "moleculer-io";
import * as HTTPGateway from "moleculer-web";
import { Context } from "./services/context.service";

const HTTP_GATEWAY_PORT = process.env.PORT || 8080;
const WS_GATEWAY_PORT = 8081;

const broker = new ServiceBroker({
  transporter: "TCP"
});

broker.createService(Translator);
broker.createService(Voice);
broker.createService(Character);
broker.createService(Context);

broker.createService({
  name: "httpgateway",
  mixins: [HTTPGateway],
  settings: {
    port: HTTP_GATEWAY_PORT
  }
});
broker.createService({
  name: "wsgateway",
  mixins: [WSGateway],
  settings: {
    port: WS_GATEWAY_PORT
  }
});

broker.start().then(() => {
  console.log("[INFO] Learn Chinese Platform has started successfully!");
  console.log(`[INFO] HTTP Gateway URL: http://localhost:${HTTP_GATEWAY_PORT}`);
  console.log(`[INFO] WS Gateway URL: ws://localhost:${WS_GATEWAY_PORT}`);
});
