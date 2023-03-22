import clsx from "clsx";

import Link from "next/link";
import Image from "next/image";
import { Text } from "@/lib/components";
import { Section, Icon, Space } from "@/lib/components/Symbols";

import hero from "./hero.png";

import cn from "./Hero.module.scss";

const Hero = () => (
  <Section className="center short page" wrapperClass="flex">
    <div className="wait show scale" style={{ marginBottom: "64px" }}>
      <Icon className="wait subtle dx" w="32" h="32" src="logo.svg" />
      <Space w="16" />
      <Text size="L" className="bold">
        Design at UCI
      </Text>
    </div>
    <Text
      size="XXXL"
      color="blue"
      className="block-paragraph wait show scale l3 bold"
      style={{ maxWidth: "900px" }}
    >
      {"A community for all digital designers to connect, learn, and innovate"
        .split(" ")
        .map((word, i) => (
          <Text
            style={{ display: "inline-block" }}
            size="XXXL"
            className="wait show dx l2 bold"
            key={i}
          >
            {word}
            <pre> </pre>
          </Text>
        ))}
    </Text>
    <Text color="gray" className="wait show d10 subtle">
      The club for UI, UX, and graphic design at the University of California
      Irvine.
    </Text>
    <div className="wait show drop d10 l2">
      <Link href="/join/" className="button L fill blue">
        <Text size="L" color="white" icon="right">
          Get involved
        </Text>
      </Link>
    </div>
    <div className={cn.backgroundParent}>
      <div className={clsx(cn.background, "wait show drop d05 l3")}>
        <Image src={hero} fill priority alt="" />
      </div>
    </div>
  </Section>
);

export default Hero;
