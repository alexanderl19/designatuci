import Hero from "./Hero";
import Details from "./Details";
import CTA from "./CTA";
import CTA2 from "./CTA2";

export const metadata = {
  title: "Welcome – Design at UCI",
};

const Home = () => (
  <>
    <Hero />
    <Details />
    <CTA />
    <CTA2 />
  </>
);

export default Home;
