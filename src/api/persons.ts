export interface IResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPerson[];
}

export interface IPerson {
  name: string;
  height: string | number;
  mass: string | number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export const getPersons = async (): Promise<IResponse> => {
  return await fetch("https://swapi.dev/api/people/")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
