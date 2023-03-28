import "server-only";

import type { SanityImageReference } from "@/lib/sanity/types";
import { cache } from "react";
import groq from "groq";
import { client } from "@/lib/sanity/public";

const query = groq`
  *[_id == "61a1b648-5052-494e-aaa2-cc11e949e465"][0] {
    resources[] {
      _key,
      title,
      link,
      description,
      icon,
      "color": coalesce(colorOverride.hex, icon.asset->metadata.palette.dominant.background)
    }
  }
`;
export type QueryResult = {
  resources: {
    _key: string;
    title: string;
    link: {
      url: string;
      newTab: boolean;
    };
    description: string;
    icon: SanityImageReference;
    color: string;
  }[];
};

export const getResources = cache(
  async () => await client.fetch<QueryResult>(query)
);
