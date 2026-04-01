"use client";

import { TimelineType, type FilterOption } from "@/data/timeline";

interface TimelineFilterProps {
  activeFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
  counts: Record<string, number>;
}

const filters: { key: FilterOption; label: string; dotClass?: string }[] = [
  { key: "all", label: "All" },
  {
    key: TimelineType.Publication,
    label: "Publications",
    dotClass: "bg-blue-500",
  },
  {
    key: TimelineType.Research,
    label: "Research",
    dotClass: "bg-purple-500",
  },
  {
    key: TimelineType.Education,
    label: "Milestones",
    dotClass: "bg-green-500",
  },
];

export function TimelineFilter({
  activeFilter,
  onFilterChange,
  counts,
}: TimelineFilterProps) {
  return (
    <div className="sticky top-0 z-10 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800 pb-4 mb-8 flex items-center gap-2 overflow-x-auto scrollbar-none">
      {filters.map(({ key, label, dotClass }) => {
        const isActive = activeFilter === key;
        return (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            aria-pressed={isActive}
            className={`
              flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
              transition-all duration-200 whitespace-nowrap
              ${
                isActive
                  ? "bg-zinc-800 text-zinc-100 shadow-sm"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"
              }
            `}
          >
            {dotClass && (
              <span className={`w-2 h-2 rounded-full ${dotClass}`} />
            )}
            {label}
            <span className="text-xs text-zinc-600 ml-0.5">
              {counts[key] ?? 0}
            </span>
          </button>
        );
      })}
    </div>
  );
}
