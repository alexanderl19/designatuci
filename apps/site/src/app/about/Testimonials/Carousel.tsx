"use client";

// This component is pretty messy, but should work reliability for now.

import type { getAbout } from "../getAbout";
import { InView } from "react-intersection-observer";
import clsx from "clsx";
import { useRef } from "react";
import Arrow from "./Arrow";

import cn from "./Carousel.module.scss";

interface CarouselProps {
  testimonials: Awaited<ReturnType<typeof getAbout>>["testimonials"];
}
const Carousel = ({ testimonials }: CarouselProps) => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const quoteParentRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const width = quoteRef.current?.clientWidth;
    if (!width) return;

    quoteParentRef.current?.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <div className={cn.carousel}>
      <div ref={quoteParentRef} className={cn.quoteParent}>
        <div className={clsx(cn.arrow, cn.left)} onClick={() => scroll("left")}>
          <Arrow />
        </div>
        <div
          className={clsx(cn.arrow, cn.right)}
          onClick={() => scroll("right")}
        >
          <Arrow />
        </div>
        {testimonials.map(({ text, person: { name } }, i) => (
          // Should only use one IntersectionObserver instance.
          // https://github.com/thebuilder/react-intersection-observer/issues/267
          <InView threshold={1}>
            {({ inView, ref, entry }) => (
              <div
                ref={quoteRef}
                className={clsx(cn.quote, inView && cn.active)}
              >
                <p ref={ref}>"{text}"</p>
                <span>{name}</span>
              </div>
            )}
          </InView>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
