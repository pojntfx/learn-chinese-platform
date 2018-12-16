import { Container } from "unstated";
import { common } from "../data/common";

interface ISettingsContainerProps {
  gatewayUrl: string;
  searchIsPrecise: boolean;
  maxMediaPerDefinition: number;
  defaultStrokeSpeed: number;
}

class SettingsContainer extends Container<ISettingsContainerProps> {
  state = {
    gatewayUrl:
      window.localStorage.getItem("gatewayUrl") || common.httpGatewayUrl,
    searchIsPrecise:
      (window.localStorage.getItem("searchIsPrecise") === "true"
        ? true
        : false) || false,
    maxMediaPerDefinition:
      Number(window.localStorage.getItem("maxMediaPerDefinition")) || 5,
    defaultStrokeSpeed:
      Number(window.localStorage.getItem("defaultStrokeSpeed")) || 1
  };

  setGatewayEndpoint = (endpoint: string) =>
    this.setState({
      gatewayUrl: endpoint
    }).then(() => window.localStorage.setItem("gatewayUrl", endpoint));

  togglePreciseSearch = () =>
    this.setState({
      searchIsPrecise: !this.state.searchIsPrecise
    }).then(() =>
      window.localStorage.setItem(
        "searchIsPrecise",
        String(this.state.searchIsPrecise)
      )
    );

  setMaxMediaPerDefinition = (maxMedia: number) =>
    this.setState({
      maxMediaPerDefinition: maxMedia
    }).then(() =>
      window.localStorage.setItem("maxMediaPerDefinition", String(maxMedia))
    );

  setDefaultStrokeSpeed = (strokeSpeed: number) =>
    this.setState({
      defaultStrokeSpeed: strokeSpeed
    }).then(() =>
      window.localStorage.setItem("defaultStrokeSpeed", String(strokeSpeed))
    );
}

export { SettingsContainer };
