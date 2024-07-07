import React from "react";
import s from "./content.module.css";
import { Card } from "../card/Card.tsx";
import { IPerson } from "../../api/persons.ts";

interface IProps {
  persons: IPerson[];
}

export class Content extends React.Component<IProps> {
  render() {
    return (
      <div className={s.content}>
        {this.props.persons.map((person: IPerson) => (
          <Card key={person.name} person={person} />
        ))}
      </div>
    );
  }
}
