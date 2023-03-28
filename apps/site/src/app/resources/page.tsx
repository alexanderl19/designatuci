import clsx from "clsx";
import Color from "colorjs.io";
import Link from "next/link";
import { Text } from "@/lib/components";
import { Section, Space } from "@/lib/components/Symbols";
import { getResources } from "./getResources";
import { client } from "@/lib/sanity/public";
import imageUrlBuilder from "@sanity/image-url";

import cn from "./page.module.scss";

const builder = imageUrlBuilder(client);

export const metadata = {
  title: "Resources – Design at UCI",
};

const Resources = async () => {
  const resources = await getResources();

  return (
    <Section className="page short bareTop">
      <Space h="0" />
      <div className="split2" style={{ gap: "32px" }}>
        {resources.resources.map(
          ({
            _key,
            title,
            link: { url, newTab },
            description,
            icon,
            color,
          }) => {
            const colorTitle = new Color(color);
            colorTitle.lch.l = 45 - Math.max(-0.5 * colorTitle.lch.c + 25, 0);

            const colorBackground = new Color(color);
            colorBackground.lch.l = 96;
            colorBackground.lch.c = Math.min(15, colorTitle.lch.c);

            return (
              <Link
                key={_key}
                href={url}
                target={newTab ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  background: colorBackground.toString({ format: "rgb" }),
                }}
                className={clsx(cn.card, "wait show dx")}
              >
                <img className={cn.icon} src={builder.image(icon).url()} />
                <Text
                  size="L"
                  style={{
                    color: colorTitle.toString({ format: "rgb" }),
                  }}
                  className="bold"
                >
                  {title}
                </Text>
                <Text className="color gray">{description}</Text>
              </Link>
            );
          }
        )}
      </div>
    </Section>
  );
};

export default Resources;
