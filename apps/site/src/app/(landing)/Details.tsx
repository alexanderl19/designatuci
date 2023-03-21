import Link from "next/link";
import { Text } from "@/lib/components";
import { Section, Icon, Space, Photo } from "@/lib/components/Symbols";

const Details = () => (
  <Section className="fill black">
    <div className="split2">
      <div>
        <Photo
          lazy
          className="wait flopL"
          src="img3.png"
          style={{ minHeight: "384px" }}
        />
      </div>
      <div className="wait flex left">
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
          <Text size="XL" className="bold">
            and much more in our live and interactive workshops.
          </Text>
        </Text>
        <Space block h="32" />
        <Text color="gray">
          Hosted nearly every week during the academic quarter, you'll get the
          chance to level up your design game and make new friends with fellow
          designers.
        </Text>
        <Space block h="32" />
        <Link href="/events/">
          <Text icon="right" color="blue">
            Found in our events
          </Text>
        </Link>
      </div>
    </div>
    <Space h="64" />
    <div className="split2 wideFlip">
      <div>
        <Photo
          lazy
          className="wait flopR"
          src="img2.png"
          style={{ minHeight: "384px" }}
        />
      </div>
      <div className="wait flex left">
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
        <Space block h="32" />
        <Text className="color gray ">
          We feature speakers across all fields. Get a chance to ask your
          questions and recieve a professional's advice.
        </Text>
        <Space block h="32" />
        <Link href="/events">
          <Text icon="right" color="blue">
            Found in our events
          </Text>
        </Link>
      </div>
    </div>
    <Space h="64" />
    <div className="split2">
      <div>
        <Photo
          lazy
          className="wait flopL"
          src="img0.png"
          style={{ minHeight: "384px" }}
        />
      </div>
      <div className="wait flex left">
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
        <Space block h="32" />
        <Text className="color gray ">
          Meet other designers, get exclusive perks, and expand your portfolio
          with fresh new work.
        </Text>
        <Space block h="32" />
        <Link href="/resources/">
          <Text icon="right" color="blue">
            See our resources
          </Text>
        </Link>
      </div>
    </div>
  </Section>
);

export default Details;
