import { Text } from "@/lib/components";
import { Section, Space } from "@/lib/components/Symbols";

import Split from "@/lib/components/Split";
import details1 from "./details1.png";
import details2 from "./details2.png";
import details3 from "./details3.png";

const Details = () => (
  <Section className="fill black">
    <Split
      imageSrc={details1}
      subtitle="Hosted nearly every week during the academic quarter, you'll get the chance to level up your design game and make new friends with fellow designers."
      linkText="Found in our events"
    >
      <Text size="XL" className="bold">
        Learn more about{" "}
        <Text size="XL" color="blue" className="bold">
          Graphic Design,
        </Text>{" "}
        <Text size="XL" color="orange" className="bold">
          UX Design,
        </Text>{" "}
        <Text size="XL" color="yellow" className="bold">
          Creative Software,
        </Text>{" "}
        and much more in our live and interactive workshops.
      </Text>
    </Split>
    <Space h="64" />
    <Split
      imageSrc={details2}
      subtitle="We feature speakers across all fields. Get a chance to ask your questions and recieve a professional's advice."
      linkText="Found in our events"
      alignRight={true}
    >
      <Text size="XL" className="bold">
        Listen to{" "}
        <Text size="XL" className="bold color green">
          professional designers
        </Text>{" "}
        <Text size="XL" className="bold">
          working at the top companies, and get exclusive insight to
        </Text>{" "}
        <Text size="XL" className="bold color pink">
          industry practices.
        </Text>
      </Text>
    </Split>
    <Space h="64" />
    <Split
      imageSrc={details3}
      subtitle="Meet other designers, get exclusive perks, and expand your portfolio with fresh new work."
      linkText="See our resources"
    >
      <Text size="XL" className="bold">
        Get involved in our special programs, like{" "}
        <Text size="XL" className="bold color blue">
          Design-a-thon
        </Text>{" "}
        <Text className="bold" size="XL">
          or
        </Text>{" "}
        <Text size="XL" className="bold color yellow">
          Project Teams,
        </Text>{" "}
        <Text size="XL" className="bold">
          for a fun and valuable experience.
        </Text>
      </Text>
    </Split>
  </Section>
);

export default Details;
