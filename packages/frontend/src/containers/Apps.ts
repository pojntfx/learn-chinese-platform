import { Container } from "unstated";
import { apps } from "../data/apps";

interface IAppsContainerProps {
  filteredApps: any[];
  apps: any[];
  searchQuery: string;
}

class AppsContainer extends Container<IAppsContainerProps> {
  state = {
    apps: apps.appMenu.apps,
    filteredApps: [],
    searchQuery: ""
  };

  handleSearchQuery = (e: any) =>
    this.setState(
      {
        searchQuery: e.target.value
      },
      () => this.filterApps()
    );

  filterApps = () => {
    this.setState({
      filteredApps: this.state.apps.filter((app: any) =>
        app.title
          .toLocaleLowerCase()
          .includes(this.state.searchQuery.toLocaleLowerCase())
      )
    });
  };
}

export { AppsContainer };
