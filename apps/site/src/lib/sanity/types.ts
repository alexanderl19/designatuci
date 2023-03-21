import type { SanityDocument } from "@sanity/client";

export type SanityArrayItem<T extends Record<string, unknown>> = {
  [P in keyof T]: T[P];
} & {
  _key: string;
};
export type SanityReference = {
  _ref: string;
  _type: "reference";
};
export type SanityImageReference = {
  _type: "image";
  asset: SanityReference;
};
export type SanitySlug = {
  _type: "slug";
  current: string;
};

export type PersonLink = {
  type:
    | "discord"
    | "facebook"
    | "instagram"
    | "linkedin"
    | "tiktok"
    | "link"
    | "youtube";
  url: string;
};

export type Person = SanityDocument<{
  _type: "person";
  name: string;
  slug: SanitySlug;
  pronouns: string[];
  image: SanityImageReference;
  links: SanityArrayItem<PersonLink>[];
}>;

export type Board = SanityDocument<{
  _type: "board";
  year: number;
  members: SanityArrayItem<{
    title: string;
    person: SanityReference;
  }>[];
  interns: SanityArrayItem<{
    title: string;
    person: SanityReference;
  }>[];
}>;
