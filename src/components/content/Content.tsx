import React from "react";
import s from "./content.module.css";
import { Card } from "../card/Card.tsx";
import { getPersons, IPerson } from "../../api/persons.ts";

export class Content extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    getPersons().then((res) => this.setState({ persons: res.results }));
  }

  render() {
    return (
      <div className={s.content}>
        {this.state.persons.map((person: IPerson) => (
          <Card key={person.name} person={person} />
        ))}
      </div>
    );
  }
}
