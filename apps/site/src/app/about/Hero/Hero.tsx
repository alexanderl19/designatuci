import clsx from "clsx";
import { getAbout } from "../getAbout";
import { client } from "@/lib/sanity/public";
import imageUrlBuilder from "@sanity/image-url";

import { Text } from "@/lib/components";
import { Section, Space } from "@/lib/components/Symbols";

import cn from "./Hero.module.scss";

const builder = imageUrlBuilder(client);

const Hero = async () => {
  const about = await getAbout();

  return (
    <div className={clsx(cn.hero, "page", "hint")}>
      <Section className="short">
        <div className="narrow" style={{ color: "white" }}>
          <div></div>
          <Text className="wait show subtle d05">{about.greeting}</Text>
          <Space block h="16" />
          <Text
            size="S"
            className="block-paragraph wait show scale l3 bold color white"
          >
            {about.title.split(" ").map((word, i) => (
              <Text
                style={{ display: "inline-block" }}
                size="XXXL"
                key={i}
                className="wait show dx l2 bold"
              >
                {word}
                <pre> </pre>
              </Text>
            ))}
          </Text>
        </div>
      </Section>
      <img
        className={clsx(cn.background)}
        src={builder.image(about.background).format("webp").quality(100).url()}
        alt=""
      />
    </div>
  );
};

export default Hero;
