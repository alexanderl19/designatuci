import "server-only";

import type { SanityImageReference } from "@/lib/sanity/types";
import { cache } from "react";
import groq from "groq";
import { client } from "@/lib/sanity/public";

const query = groq`
  *[_id == "94c0a72d-8fb0-49c4-929b-ecc8e57edfd4"][0] {
    icon,
    resources,
    "resourceTypes": array::unique(resources[].type)
  } 
`;
export type QueryResult = {
  icon: SanityImageReference;
  resources: {
    _key: string;
    title: string;
    type: "Tool" | "Guide" | "Inspiration";
    url: string;
    description: string;
    preview: SanityImageReference;
  }[];
  resourceTypes: string[];
};

export const getFeaturedResources = cache(
  async () => await client.fetch<QueryResult>(query)
);
