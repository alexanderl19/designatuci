import clsx from "clsx";
import { Text } from "@/lib/components";
import { Section } from "@/lib/components/Symbols";
import Items from "./Items";
import { client } from "@/lib/sanity/public";
import imageUrlBuilder from "@sanity/image-url";
import { getFeaturedResources } from "./getFeaturedResources";

import cn from "./page.module.scss";

const builder = imageUrlBuilder(client);

export const revalidate = 60;
export const metadata = {
  title: "Featured Resources – Design at UCI",
};

const ResourcesFeatured = async () => {
  const featuredResources = await getFeaturedResources();

  return (
    <>
      <Section className="short">
        <div className="flex center spaceChildrenSmall">
          <img
            className={clsx(cn.icon, "wait show dx scale")}
            src={builder.image(featuredResources.icon).url()}
          />
          <Text className="wait show dx scale" size="XL">
            Featured Resources
          </Text>
          <Text className="wait show dx subtle color gray">
            A curated list of helpful tools, guides, and more—to help you
            practice your skills.
          </Text>
        </div>
      </Section>
      <Items resources={featuredResources.resources} />
    </>
  );
};

export default ResourcesFeatured;
