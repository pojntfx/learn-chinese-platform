import { Container } from "unstated";
import { common } from "../data/common";

interface ISettingsContainerProps {
  gatewayUrl: string;
  searchIsPrecise: boolean;
}

class SettingsContainer extends Container<ISettingsContainerProps> {
  state = {
    gatewayUrl:
      window.localStorage.getItem("gatewayUrl") || common.httpGatewayUrl,
    searchIsPrecise:
      (window.localStorage.getItem("searchIsPrecise") === "true"
        ? true
        : false) || false
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
}

export { SettingsContainer };
