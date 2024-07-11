import s from "./card.module.css";
import { IPerson } from "../../api/persons.ts";

export const Card = (person: IPerson | null) => {
  if (!person) return null;

  return (
    <div className={s.card}>
      <div className={s.row}>
        <span className={s.heading}>Name:</span>
        <span>{person.name}</span>
      </div>
      <div className={s.row}>
        <span className={s.heading}>Gender:</span>
        <span>{person.gender}</span>
      </div>
      <div className={s.row}>
        <span className={s.heading}>Hair Color:</span>
        <span>{person.hair_color}</span>
      </div>
      <div className={s.row}>
        <span className={s.heading}>Height:</span>
        <span>{person.height}</span>
      </div>
      <div className={s.row}>
        <span className={s.heading}>Mass:</span>
        <span>{person.mass}</span>
      </div>
    </div>
  );
};
