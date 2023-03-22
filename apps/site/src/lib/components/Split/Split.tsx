"use client";

import Link from "next/link";

import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Text } from "@/lib/components";
import { Space } from "@/lib/components/Symbols";

import clsx from "clsx";
import cn from "./Split.module.scss";

interface SplitProps {
  imageSrc: string | StaticImageData;
  subtitle: string;
  linkText: string;
  alignRight?: true;
  children: ReactNode;
}
const Split = ({
  imageSrc,
  subtitle,
  linkText,
  alignRight,
  children,
}: SplitProps) => {
  const { ref, inView, entry } = useInView({
    rootMargin: "0px 0px -16% 0px",
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={clsx(cn.split, alignRight && [cn.right])}>
      <div className={cn.image}>
        <Image
          className={clsx(
            "wait",
            inView && "show",
            alignRight ? "flopR" : "flopL"
          )}
          src={imageSrc}
          fill
          alt=""
        />
      </div>
      <div className={clsx("wait", inView && "show", "flex", "left")}>
        {children}
        <Space block h={32} />
        <Text color="gray">{subtitle}</Text>
        <Space block h={32} />
        <Link href="/events">
          <Text icon={true} color="blue">
            {linkText}
          </Text>
        </Link>
      </div>
    </div>
  );
};

export default Split;
