import type { Person } from "@/lib/sanity/types";

import groq from "groq";
import { client } from "@/lib/sanity/public";

const query = groq`
  *[_type == "board"] | order(year desc) [0] {
    year,
    members[] {
      _key,
      title,
      person-> 
    },
    interns[] {
      _key,
      title,
      person->
    }
  }
`;
export type QueryResult = {
  year: number;
  members: {
    _key: string;
    title: string;
    person: Person;
  }[];
  interns: {
    _key: string;
    title: string;
    person: Person;
  }[];
};

export const getBoard = async () => await client.fetch<QueryResult>(query);
