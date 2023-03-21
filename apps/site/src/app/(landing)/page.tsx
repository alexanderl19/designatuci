/* eslint-disable react/no-unescaped-entities */
"use client";

import { useScroll } from "@/lib/controllers";

import Hero from "./Hero";
import Details from "./Details";
import CTA from "./CTA";
import CTA2 from "./CTA2";

// export const metadata = {
//   title: "Welcome – Design at UCI",
// };

export default function Home() {
  useScroll();

  return (
    <>
      <Hero />
      <Details />
      <CTA />
      <CTA2 />
    </>
  );
}
