"use client";

import { useState, useMemo, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import {
  timelineData,
  TimelineType,
  type FilterOption,
} from "@/data/timeline";
import { TimelineFilter } from "./TimelineFilter";
import { TimelineLine } from "./TimelineLine";
import { TimelineCommit } from "./TimelineCommit";

export function GitTimeline() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return timelineData;
    if (
      activeFilter === TimelineType.Education ||
      activeFilter === TimelineType.Milestone
    ) {
      return timelineData.filter(
        (e) =>
          e.type === TimelineType.Education ||
          e.type === TimelineType.Milestone
      );
    }
    return timelineData.filter((e) => e.type === activeFilter);
  }, [activeFilter]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: timelineData.length };
    for (const entry of timelineData) {
      c[entry.type] = (c[entry.type] ?? 0) + 1;
    }
    // Combine education + milestone counts under education key
    c[TimelineType.Education] =
      (c[TimelineType.Education] ?? 0) +
      (c[TimelineType.Milestone] ?? 0);
    return c;
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen">
      <TimelineFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        counts={counts}
      />

      <div className="relative">
        <TimelineLine containerRef={containerRef} />

        <AnimatePresence mode="popLayout">
          {filtered.map((entry) => (
            <TimelineCommit key={entry.id} entry={entry} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
