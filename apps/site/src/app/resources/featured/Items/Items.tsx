"use client";

// It might be ideal to allow types (Tool, Inspiration, etc.) to be defined in Sanity.

import type { getFeaturedResources } from "../getFeaturedResources";
import { useState } from "react";
import { Text } from "@/lib/components";
import { Section, Space, LoadingD, CheckIcon } from "@/lib/components/Symbols";
import Card from "./Card";

import cn from "./Items.module.scss";

interface ItemsProps {
  resources: Awaited<ReturnType<typeof getFeaturedResources>>["resources"];
}
const Items = ({ resources }: ItemsProps) => {
  type Filter = {
    Tool: boolean;
    Inspiration: boolean;
    Guide: boolean;
    Other: boolean;
    [key: string]: boolean;
  };
  const [typeFilter, setTypeFilter] = useState<Filter>({
    Tool: true,
    Inspiration: true,
    Guide: true,
    Other: true,
  });
  const toggleFilter = (filter: string) => {
    // TODO: Wrap component in error boundary.
    if (!Object.keys(typeFilter).includes(filter))
      throw Error("Filter type unknown.");

    console.log({ ...typeFilter, [filter]: !typeFilter[filter] });

    setTypeFilter({ ...typeFilter, [filter]: !typeFilter[filter] });
  };

  return (
    <>
      <Section className="bare center" style={{ padding: "16px" }}>
        <div className="flex wait show subtle row wrap">
          {[
            {
              id: "Tool",
              title: "Tools",
              color: "orange",
              fill: "var(--orange)",
            },
            {
              id: "Guide",
              title: "Guides",
              color: "green",
              fill: "var(--green)",
            },
            {
              id: "Inspiration",
              title: "Inspiration",
              color: "blue",
              fill: "var(--blue)",
            },
            { id: "Other", title: "Other", color: "gray", fill: "var(--gray)" },
          ].map(({ id, title, color, fill }) => (
            <button
              key={title}
              className={cn.toggle}
              onClick={() => toggleFilter(id)}
            >
              <div className="flex row pointer" style={{ padding: "0 24px" }}>
                <CheckIcon check={typeFilter[id]} r={18} color={fill} />
                <Space block w="8" />
                <Text className={`color ${color}`}>{title}</Text>
              </div>
            </button>
          ))}
        </div>
      </Section>
      <Section className="short fill gray">
        <div className="split4" style={{ gap: "16px" }}>
          {resources
            .filter(({ type }) => typeFilter[type])
            .map(({ _key, title, type, url, description }) => (
              <Card
                key={_key}
                title={title}
                type={type}
                url={url}
                description={description}
              />
            ))}
        </div>
      </Section>
    </>
  );
};

export default Items;
