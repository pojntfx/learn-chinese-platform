import { ServiceBroker } from "moleculer";
import { Translator } from "./services/translator.service";
import { Voice } from "./services/voice.service";
import { Character } from "./services/character.service";
import * as WSGateway from "moleculer-io";
import * as HTTPGateway from "moleculer-web";

const HTTP_GATEWAY_PORT = 3000;
const WS_GATEWAY_PORT = 3001;

const broker = new ServiceBroker({
  transporter: "TCP"
});

broker.createService(Translator);
broker.createService(Voice);
broker.createService(Character);

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
  console.log(
    '[INFO] HTTP Gateway URL: http://localhost:3000/version/service/action?paramname=paramvalue'
  );
  console.log("[INFO] WS Gateway URL: ws://localhost:3001/socket.io");
});
