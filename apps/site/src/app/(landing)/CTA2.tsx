import Link from "next/link";
import Image from "next/image";
import { Text } from "@/lib/components";
import { Section, Icon, Space, Photo } from "@/lib/components/Symbols";

import cta2 from "./cta2.png";

import cn from "./CTA2.module.scss";

const CTA2 = () => (
  <div className="relative">
    <div className={cn.background}>
      <Image src={cta2} fill alt="" />
    </div>
    <Space h="192" />
    <div
      style={{
        background: "linear-gradient(0deg,var(--blue),#089AFF00)",
        padding: "64px 0",
        paddingTop: "256px",
      }}
    >
      <Section className="center bare relative">
        <div className="flex spaceChildren">
          <Text className="wait scale bold narrow color white" size="XL">
            We're focused on buliding a friendly community that helps striving
            designers.
          </Text>
          <Link href="/about/">
            <Text icon="right" color="white">
              Learn more about us
            </Text>
          </Link>
        </div>
      </Section>
    </div>
  </div>
);

export default CTA2;
