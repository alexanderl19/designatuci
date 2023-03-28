"use client";

import type { ElementRef, ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import { InView } from "react-intersection-observer";
import clsx from "clsx";

const InViewUseClient = forwardRef<
  ElementRef<typeof InView>,
  ComponentPropsWithoutRef<typeof InView>
>(({ children, ...props }, ref) => (
  <InView ref={ref} rootMargin="0px 0px -16% 0px" {...props}>
    {({ inView, ref, entry }) => (
      <div ref={ref} className={clsx("wait", inView && "show")}>
        {children}
      </div>
    )}
  </InView>
));

export default InViewUseClient;
