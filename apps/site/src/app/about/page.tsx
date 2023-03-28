import Hero from "./Hero";
import Details from "./Details";
import Testimonials from "./Testimonials";
import Board from "./Board";
import Partners from "./Partners";

import "./page.scss";

export const metadata = {
  title: "About – Design at UCI",
};

const Home = async () => {
  return (
    <>
      {/* https://beta.nextjs.org/docs/data-fetching/fetching */}
      {/* @ts-expect-error Async Server Component */}
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <Details />
      {/* @ts-expect-error Async Server Component */}
      <Testimonials />
      {/* @ts-expect-error Async Server Component */}
      <Board />
      {/* @ts-expect-error Async Server Component */}
      <Partners />
    </>
  );
};

export default Home;
