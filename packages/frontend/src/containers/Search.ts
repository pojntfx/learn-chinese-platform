import { Container } from "unstated";

interface ISearchContainerProps {
  query: string;
}

class SearchContainer extends Container<ISearchContainerProps> {
  state = {
    query: ""
  };

  setQuery = (query: string) =>
    this.setState({
      query
    });
}

export { SearchContainer };
