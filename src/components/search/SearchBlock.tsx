import React from "react";
import s from "./searchBlock.module.css";

interface IProps {
  handleSubmit: (e: React.SyntheticEvent) => void;
}

export class SearchBlock extends React.Component<IProps> {
  state = {
    searchTerm: "",
    hasError: false,
  };

  componentDidMount() {
    const storedValue = localStorage.getItem("searchTerm");
    if (storedValue) {
      this.setState({ searchTerm: storedValue });
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleError = () => {
    this.setState((prevState) => ({ ...prevState, hasError: true }));
  };

  componentWillUnmount() {
    this.setState({ searchTerm: "" });
  }

  render() {
    if (this.state.hasError) {
      throw new Error("I crashed!");
    }

    return (
      <div className={s.wrapper}>
        <form className={s.form} onSubmit={this.props.handleSubmit}>
          <input
            className={s.searchInput}
            type="text"
            name="search"
            id="search"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button type="submit" className={s.button}>
            Search
          </button>
        </form>
        <button className={s.button} onClick={this.handleError}>
          Throw New Error
        </button>
      </div>
    );
  }
}
