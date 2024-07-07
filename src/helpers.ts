import { IPerson } from "./api/persons.ts";

export const filterPersons = (data: IPerson[], searchTerm: string): IPerson[] => {
  return data.filter((p) => p.name.toLowerCase().includes(searchTerm.trim().toLowerCase()));
};
