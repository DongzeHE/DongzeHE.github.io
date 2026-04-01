"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import type { RefObject } from "react";

interface TimelineLineProps {
  containerRef: RefObject<HTMLElement | null>;
}

export function TimelineLine({ containerRef }: TimelineLineProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <svg
      className="absolute left-[31px] top-0 bottom-0 w-[2px] overflow-visible pointer-events-none"
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id="timeline-gradient"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>
      {/* Background track */}
      <path
        d="M 0.5 0 V 1"
        stroke="rgb(39 39 42)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      {/* Animated foreground */}
      <motion.path
        d="M 0.5 0 V 1"
        stroke="url(#timeline-gradient)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        fill="none"
        style={{ pathLength }}
        strokeLinecap="round"
      />
    </svg>
  );
}
