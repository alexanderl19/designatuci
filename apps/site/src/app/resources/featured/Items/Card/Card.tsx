import clsx from "clsx";
import { Text } from "@/lib/components";
import { Space, PageIcon } from "@/lib/components/Symbols";
import OGImage from "../OGImage";

const typeColorMap = new Map([
  ["Tool", "orange"],
  ["Inspiration", "blue"],
  ["Guide", "green"],
]);

interface CardProps {
  title: string;
  type: string;
  url: string;
  description: string;
}
const Card = ({ title, type, url, description }: CardProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex wait dx show card S left top fill white spaceChildrenSmall"
  >
    <div className="flex row spaceBetween" style={{ margin: "-8px 0" }}>
      <Text size="S" className={clsx("color", typeColorMap.get(type))}>
        {type}
      </Text>
      <PageIcon
        color="var(--silver)"
        style={{
          width: "32px",
          height: "32px",
        }}
      />
    </div>
    <Space h="0" />
    <OGImage url={url} />
    <Text size="L" className="color black">
      {title}
    </Text>
    <Text className="color gray">{description}</Text>
  </a>
);

export default Card;
