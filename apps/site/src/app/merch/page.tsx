import clsx from "clsx";

import { Text } from "@/lib/components";
import { Section } from "@/lib/components/Symbols";
import MERCH_LIST from "./merchList.json";

import MerchDropListing from "./MerchDropListing";

import cn from "./page.module.scss";

export const metadata = {
  title: "Merch – Design at UCI",
};

const Merch = () => (
  <>
    <Section className={clsx(cn.header, "center short")}>
      <Text size="XXL" className={clsx(cn.text, "wait dx bold color white")}>
        Merchandise
      </Text>
      <Text className="wait dx subtle color white">
        Help support Design at UCI — so we can continue to host our free
        programs and events.
      </Text>
    </Section>
    {MERCH_LIST.map((release) => (
      <MerchDropListing key={release.path} {...release} />
    ))}
  </>
);

export default Merch;
