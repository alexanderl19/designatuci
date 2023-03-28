import { getAbout } from "../getAbout";
import clsx from "clsx";
import cn from "./Partners.module.scss";
import { client } from "@/lib/sanity/public";
import imageUrlBuilder from "@sanity/image-url";

import Link from "next/link";
import Text from "@/lib/components/Text";
import { Section } from "@/lib/components/Symbols";

const builder = imageUrlBuilder(client);

const Partners = async () => {
  const about = await getAbout();

  return (
    <Section className="short center fill color gray">
      <Text>Partners</Text>
      <div className="split3" style={{ columnGap: "128px" }}>
        {about.partners.map(({ name, logo, link }) => (
          // TODO: Should we be using noreferer here?
          // TODO: Replace key with _key from Sanity
          <Link key={name} target="noreferer" href={link}>
            <img className={cn.logo} src={builder.image(logo).url()} />
          </Link>
        ))}
        <div className="center">
          <Link href="/contact">
            <Text>Want to work with us?</Text>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Partners;
