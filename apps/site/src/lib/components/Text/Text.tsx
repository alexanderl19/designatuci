import type { ReactNode } from "react";
import type { ClassValue } from "clsx";
import clsx from "clsx";

import cn from "./Text.module.scss";

interface TextProps {
  size?: "S" | "L" | "XL" | "XXL" | "XXXL";
  color?:
    | "white"
    | "black"
    | "gray"
    | "grey"
    | "silver"
    | "blue"
    | "sky"
    | "orange"
    | "yellow"
    | "pink"
    | "red"
    | "violet"
    | "green";
  hoverable?: boolean;
  icon?: boolean | "right";
  className?: ClassValue | ClassValue[];
  children?: ReactNode;
  [props: string]: any;
}
const Text = ({
  size,
  color,
  icon = false,
  className,
  children,
  ...props
}: TextProps) => (
  <div
    className={clsx(
      cn.container,
      cn[size],
      cn[color],
      { [cn.pagelink]: icon === true || icon === "right" },
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export default Text;
