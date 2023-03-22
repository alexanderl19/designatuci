"use client";

import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Text } from "@/lib/components";
import { Section, Icon, Space } from "@/lib/components/Symbols";

import clsx from "clsx";

const CTA = () => {
  const { ref, inView, entry } = useInView({
    rootMargin: "0px 0px -16% 0px",
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <Section className="center">
        <Icon
          className={clsx("wait", inView && "show", "dx", "rainbow")}
          src="loveDesign.svg"
          w="192"
          h="192"
        />
        <div className="flex spaceChildrenSmall">
          <Text
            size="XXXL"
            className={clsx(
              "wait",
              inView && "show",
              "block-paragraph",
              "scale",
              "l3",
              "bold"
            )}
            style={{ maxWidth: "650px" }}
          >
            {"Do you love design? Let's keep in touch."
              .split(" ")
              .map((word, i) => (
                <Text
                  style={{ display: "inline-block" }}
                  size="XXL"
                  className={clsx("wait", inView && "show", "l2", "dx")}
                  key={i}
                >
                  {word}
                  <pre> </pre>
                </Text>
              ))}
          </Text>
          <Space h="16" />
          <Link
            href="join"
            className={clsx(
              "wait",
              inView && "show",
              "dx",
              "drop",
              "button",
              "L"
            )}
          >
            <Text size="L" icon="right" color="blue">
              Join Design at UCI
            </Text>
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default CTA;
