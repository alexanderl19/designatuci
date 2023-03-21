import Link from "next/link";
import { Text } from "@/lib/components";
import { Section, Icon, Space, Photo } from "@/lib/components/Symbols";

const CTA = () => (
  <Section className="center">
    <Icon className="wait dx rainbow" src="loveDesign.svg" w="192" h="192" />
    <div className="flex spaceChildrenSmall">
      <Text
        size="XXXL"
        className="block-paragraph wait scale l3 bold"
        style={{ maxWidth: "650px" }}
      >
        {"Do you love design? Let's keep in touch."
          .split(" ")
          .map((word, i) => (
            <Text
              style={{ display: "inline-block" }}
              size="XXL"
              className="wait l2 dx"
              key={i}
            >
              {word}
              <pre> </pre>
            </Text>
          ))}
      </Text>
      <Space h="16" />
      <Link href="join" className="wait dx drop button L">
        <Text size="L" icon="right" color="blue">
          Join Design at UCI
        </Text>
      </Link>
    </div>
  </Section>
);

export default CTA;
