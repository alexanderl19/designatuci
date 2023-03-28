import type { UrlObject } from "url";

import clsx from "clsx";
import Link from "next/link";
import { Text, InView } from "@/lib/components";
import { Space } from "@/lib/components/Symbols";

interface DescriptionProps {
  description: string;
  href: string | UrlObject;
  label: string;
}
const Description = ({ description, href, label }: DescriptionProps) => {
  return (
    <InView triggerOnce={true}>
      <div className="narrow dx">
        <Text className="paragraph middle">{description}</Text>
        <Space block h="32" />
        <Link href={href} className="color blue">
          <Text icon="right">{label}</Text>
        </Link>
      </div>
    </InView>
  );
};

export default Description;
