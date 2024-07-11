import s from "./content.module.css";
import { Card } from "../card/Card.tsx";
import { IPerson } from "../../api/persons.ts";
import { Loader } from "../loader/Loader.tsx";

interface IProps {
  persons: IPerson[] | null;
  isLoading: boolean;
}

export const Content = ({ persons, isLoading }: IProps) => {
  if (!persons) return null;

  return isLoading ? (
    <Loader />
  ) : (
    <div className={s.content}>
      {persons?.map((person: IPerson) => <Card {...person} key={person.name} />)}
    </div>
  );
};
