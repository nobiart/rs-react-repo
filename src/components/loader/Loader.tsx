import React from "react";
import s from "./loader.module.css";

export class Loader extends React.Component {
  render() {
    return (
      <div className={s.loader}>
        <div className={s.loaderSpinner}></div>
      </div>
    );
  }
}
