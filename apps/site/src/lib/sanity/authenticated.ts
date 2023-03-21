import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-03-13",
  token: process.env.SANITY_TOKEN,
  useCdn: !(process.env.NODE_ENV === "development"),
});

export { client };
