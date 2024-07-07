import React from "react";
import s from "./content.module.css";
import { Card } from "../card/Card.tsx";
import { IPerson } from "../../api/persons.ts";
import { Loader } from "../loader/Loader.tsx";

interface IProps {
  persons: IPerson[] | null;
  isLoading: boolean;
}

export class Content extends React.Component<IProps> {
  render() {
    if (this.props.isLoading) {
      return <Loader />;
    }

    if (this.props.persons?.length === 0) {
      return <p className={s.noData}>No data. Please try a different query</p>;
    }

    return (
      <div className={s.content}>
        {this.props.persons?.map((person: IPerson) => <Card key={person.name} person={person} />)}
      </div>
    );
  }
}
