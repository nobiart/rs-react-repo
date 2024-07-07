import React from "react";
import s from "./errorFallback.module.css";

export class ErrorFallback extends React.Component {
  handleReload = () => history.go(0);

  render() {
    return (
      <div className={s.wrapper}>
        <h2 className={s.heading}>Something went wrong.</h2>
        <button className={s.button} onClick={this.handleReload}>
          Try Again
        </button>
      </div>
    );
  }
}
