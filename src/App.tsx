import "./App.css";
import { SearchBlock } from "./components/search/SearchBlock.tsx";
import { Content } from "./components/content/Content.tsx";
import React from "react";
import { filterPersons } from "./helpers.ts";
import { getPersons, IPerson } from "./api/persons.ts";
import { ErrorBoundary } from "./components/error/ErrorBoundary.tsx";
import { ErrorFallback } from "./components/error/ErrorFallback.tsx";

interface IState {
  persons: IPerson[];
  searchTerm: string;
}

class App extends React.Component {
  state = {
    persons: [],
    searchTerm: "",
  };

  componentDidMount() {
    getPersons().then((res) => {
      const storedValue = localStorage.getItem("searchTerm");
      if (storedValue) {
        const filtered = filterPersons(res.results, storedValue);
        this.setState({ persons: filtered, searchTerm: storedValue });
      } else {
        this.setState((prevState) => ({ ...prevState, persons: res.results }));
      }
    });
  }

  componentDidUpdate(_prevProps: Readonly<object>, prevState: IState) {
    if (this.state.searchTerm !== prevState.searchTerm) {
      getPersons().then((res) => {
        const filtered = filterPersons(res.results, this.state.searchTerm);
        this.setState((prevState) => ({ ...prevState, persons: filtered }));
      });
    }
  }

  onSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    const searchTerm = target.search.value;
    localStorage.setItem("searchTerm", searchTerm);
    this.setState((prevState) => ({ ...prevState, searchTerm }));
  };

  componentWillUnmount() {
    this.setState({ persons: [], searchTerm: "" });
  }

  render() {
    return (
      <>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <SearchBlock handleSubmit={this.onSubmitHandler} />
          <Content persons={this.state.persons} />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
