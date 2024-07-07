import React from "react";
import s from "./card.module.css";
import { IPerson } from "../../api/persons.ts";

export class Card extends React.Component<{ person: IPerson }> {
  render() {
    return (
      <div className={s.card}>
        <div className={s.row}>
          <span className={s.heading}>Name:</span>
          <span>{this.props.person.name}</span>
        </div>
        <div className={s.row}>
          <span className={s.heading}>Gender:</span>
          <span>{this.props.person.gender}</span>
        </div>
        <div className={s.row}>
          <span className={s.heading}>Hair Color:</span>
          <span>{this.props.person.hair_color}</span>
        </div>
        <div className={s.row}>
          <span className={s.heading}>Height:</span>
          <span>{this.props.person.height}</span>
        </div>
        <div className={s.row}>
          <span className={s.heading}>Mass:</span>
          <span>{this.props.person.mass}</span>
        </div>
      </div>
    );
  }
}
