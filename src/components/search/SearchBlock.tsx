import React from "react";
import s from "./searchBlock.module.css";

export class SearchBlock extends React.Component {
  state = {};

  render() {
    return (
      <div className={s.wrapper}>
        <form className={s.form}>
          <input
            className={s.searchInput}
            type="text"
            name="search"
            id="search"
            placeholder="Enter something..."
          />
          <button className={s.button}>Search</button>
        </form>
      </div>
    );
  }
}
