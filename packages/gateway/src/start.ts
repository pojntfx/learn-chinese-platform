import { ServiceBroker } from "moleculer";
import {
  Translator,
  Voice,
  Character,
  Context
} from "@learn-chinese-platform/services";
import * as WSGateway from "moleculer-io";
import * as HTTPGateway from "moleculer-web";

/**
 * Start the gateway
 * @param httpGatewayPort Port that the HTTP Gateway should listen on
 * @param wsGatewayPort Port that the WebSocket Gateway should listen on
 */
const start = async (
  httpGatewayPort: number | string,
  wsGatewayPort: number | string
) => {
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
      port: httpGatewayPort
    }
  });
  broker.createService({
    name: "wsgateway",
    mixins: [WSGateway],
    settings: {
      port: wsGatewayPort
    }
  });

  broker.start().then(() => {
    console.log("[INFO] Learn Chinese Platform has started successfully!");
    console.log(`[INFO] HTTP Gateway URL: http://localhost:${httpGatewayPort}`);
    console.log(`[INFO] WS Gateway URL: ws://localhost:${wsGatewayPort}`);
  });
};

start(
  process.env.HTTP_GATEWAY_PORT || 8080,
  process.env.WS_GATEWAY_PORT || 8081
);

export { start };
