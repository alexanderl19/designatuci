import "server-only";

import type { SanityImageReference, Person } from "@/lib/sanity/types";
import { cache } from "react";
import groq from "groq";
import { client } from "@/lib/sanity/public";

const query = groq`
  *[_id == "bc49ea92-7976-41c2-9678-b8e4c4659faf"][0] {
    greeting,
    title,
    background,
    tagline,
    highlights,
    testimonials[] {
      text,
      person->
    },
    partners
  }
`;
export type QueryResult = {
  greeting: string;
  title: string;
  background: SanityImageReference;
  tagline: string;
  highlights: {
    text: string;
    link: {
      label: string;
      url: string;
    };
  }[];
  testimonials: {
    text: string;
    person: Person;
  }[];
  partners: {
    name: string;
    logo: SanityImageReference;
    link: string;
  }[];
};

export const getAbout = cache(
  async () => await client.fetch<QueryResult>(query)
);
