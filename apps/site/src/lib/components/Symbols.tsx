"use client";

import type { ReactNode, CSSProperties } from "react";
import type { ClassValue } from "clsx";
import { useState, useEffect } from "react";
import clsx from "clsx";

interface IconProps {
  id?: string;
  w: number | string;
  h: number | string;
  hoverable?: boolean;
  src: string;
  style?: CSSProperties;
  className?: ClassValue | ClassValue[];
  children?: ReactNode;
}
const Icon = ({
  id,
  w,
  h,
  hoverable = false,
  src,
  style,
  className,
  children,
}: IconProps) => {
  return (
    <div
      id={id}
      className={clsx("icon", { hoverable: hoverable }, className)}
      style={{
        width: w + "px",
        height: h + "px",
        backgroundImage: `url(/static/icon/${src})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

interface PhotoProps {
  id: string;
  lazy?: boolean;
  src: string;
  style?: CSSProperties;
  className?: ClassValue | ClassValue[];
  children?: ReactNode;
}
const Photo = ({
  id,
  lazy = false,
  src,
  style,
  className,
  children,
}: PhotoProps) => {
  const [photoData, setPhotoData] = useState<string>();

  useEffect(() => {
    setTimeout(
      () => {
        setPhotoData(`url(/static/photo/${src})`);
      },
      lazy ? 500 : 0
    );
  }, [lazy, src]);

  return (
    <div
      id={id}
      className={clsx("photo", className)}
      style={{
        backgroundImage: photoData,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

interface SectionProps {
  className?: ClassValue | ClassValue[];
  wrapperClass?: ClassValue | ClassValue[];
  children: ReactNode;
  [props: string]: any;
}
const Section = ({
  className,
  wrapperClass,
  children,
  ...props
}: SectionProps) => (
  <div className={clsx("section", className)} {...props}>
    <div className={clsx("wrapper", wrapperClass)}>{children}</div>
  </div>
);

export { Icon, Photo, Section };

interface SpaceProps {
  w?: number | string;
  h?: number | string;
  block?: boolean;
  style?: CSSProperties;
  className?: ClassValue | ClassValue[];
  [props: string]: any;
}
export function Space({ w, h, block, style, className, ...props }: SpaceProps) {
  return (
    <div
      className={clsx("space", className)}
      style={{
        ...(w && { width: w + "px" }),
        ...(h && { height: h + "px" }),
        ...(block && { display: "block" }),
        ...style,
      }}
      {...props}
    />
  );
}

interface LoadingDProps {
  [props: string]: any;
}
export function LoadingD(props: LoadingDProps) {
  return (
    <div>
      <svg
        id="anim-load"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={1.5}
        {...props}
      >
        <path
          d="M50 19c17.109 0 31 13.891 31 31S67.109 81 50 81H19V19h31z"
          fill="none"
          strokeWidth="4"
          stroke="var(--yellow)"
        />
        <path
          d="M50 19c17.109 0 31 13.891 31 31S67.109 81 50 81H19V19h31z"
          fill="none"
          strokeWidth="4.1"
          stroke="var(--orange)"
        />
        <path
          d="M50 19c17.109 0 31 13.891 31 31S67.109 81 50 81H19V19h31z"
          fill="none"
          strokeWidth="4.2"
          stroke="var(--blue)"
        />
      </svg>
      <style>{`
            #anim-load {
                will-change: contents;
                opacity: 0;
                animation: anim-load-fadein 0.2s 0.2s linear forwards;
            }
            #anim-load path {
                stroke-dasharray: 30px 191px;
                transform-origin: center;
                animation: anim-load 3.0s cubic-bezier(.2,.76,.83,.45) infinite;
            }
            #anim-load path:nth-child(2) { animation-delay: -0.3s; }
            #anim-load path:nth-child(3) { animation-delay: -0.6s; }
            @keyframes anim-load {
                0% { stroke-dashoffset: 662px; }
                60% { stroke-dasharray: 60px 161px; }
                100% { stroke-dashoffset: 0px; }
            }
            @keyframes anim-load-fadein {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }
        `}</style>
    </div>
  );
}

interface PageIconProps {
  color?: string;
  className?: ClassValue | ClassValue[];
  [props: string]: any;
}
export function PageIcon({ color, className, ...props }: PageIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      className={clsx("icon", className)}
      {...props}
    >
      <path
        d="M10.617 5H9a4 4 0 00-4 4v6a4 4 0 004 4h6a4 4 0 004-4v-1.617a1 1 0 00-2 0V15a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h1.617a1 1 0 000-2zm6.969 0l-7.137 7.136a1.002 1.002 0 000 1.415c.391.39 1.024.39 1.415 0L19 6.414v3.642a1 1 0 002 0V4a1 1 0 00-1-1h-6.056a1 1 0 000 2h3.642z"
        fill={color}
      />
    </svg>
  );
}

interface CheckIconProps {
  check?: ReactNode;
  color?: string;
  r: number;
  [props: string]: any;
}
export const CheckIcon = ({ check, color, r, ...props }: CheckIconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    fill={color}
    width={r}
    height={r}
    {...props}
  >
    {check ? (
      <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zM6.99 13.768l2.828 2.828a1.5 1.5 0 002.121 0l7.071-7.071a1.5 1.5 0 10-2.121-2.121l-6.01 6.01-1.768-1.768a1.501 1.501 0 00-2.121 2.122z" />
    ) : (
      <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm0 3c4.967 0 9 4.033 9 9s-4.033 9-9 9-9-4.033-9-9 4.033-9 9-9z" />
    )}
  </svg>
);
