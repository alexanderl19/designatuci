import clsx from "clsx";
import { getAbout } from "../getAbout";

import { Text, InView } from "@/lib/components";
import { Section, Space } from "@/lib/components/Symbols";
import Description from "./Description";

const Details = async () => {
  const about = await getAbout();

  return (
    <Section>
      <InView triggerOnce={true}>
        <Text size="XL" className="slim">
          {about.tagline}
        </Text>
      </InView>
      <Space block h="16" />
      <div className="split2" style={{ textAlign: "left" }}>
        {about.highlights.map(({ text, link: { label, url } }) => (
          <Description description={text} label={label} href={url} />
        ))}
      </div>
    </Section>
  );
};

export default Details;
