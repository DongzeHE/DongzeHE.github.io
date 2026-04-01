"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

function GitHubSmallIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
import { type TimelineEntry, getTypeClasses } from "@/data/timeline";

interface TimelineCommitProps {
  entry: TimelineEntry;
}

function highlightAuthor(authors: string): React.ReactNode {
  const parts = authors.split(/(Dongze He)/g);
  return parts.map((part, i) =>
    part === "Dongze He" ? (
      <strong key={i} className="text-zinc-200">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function LinkIcon({ icon }: { icon?: string }) {
  switch (icon) {
    case "paper":
      return <FileText size={14} />;
    case "github":
      return <GitHubSmallIcon />;
    default:
      return <ExternalLink size={14} />;
  }
}

export function TimelineCommit({ entry }: TimelineCommitProps) {
  const classes = getTypeClasses(entry.type);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative pl-16 pb-12"
    >
      {/* Node on the line */}
      <div
        className={`absolute left-[32px] top-2 w-3 h-3 rounded-full ${classes.dot} -translate-x-1/2 ring-4 ring-zinc-950`}
        style={
          { "--glow-color": classes.glow } as React.CSSProperties
        }
      />

      {/* Card */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors duration-200">
        {/* Header row */}
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="font-mono text-xs text-zinc-600">
            {entry.id}
          </span>
          <span className="font-mono text-xs text-zinc-500">
            {entry.date}
          </span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${classes.bg} ${classes.text} ${classes.border} border`}
          >
            {entry.type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-zinc-100 font-semibold leading-snug">
          {entry.title}
        </h3>

        {/* Authors */}
        {entry.authors && (
          <p className="text-zinc-500 text-sm mt-1">
            {highlightAuthor(entry.authors)}
          </p>
        )}

        {/* Venue */}
        {entry.venue && (
          <p className="text-zinc-500 text-sm italic mt-1">{entry.venue}</p>
        )}

        {/* Description */}
        <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
          {entry.description}
        </p>

        {/* Tech stack */}
        {entry.techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {entry.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action links */}
        {entry.links.length > 0 && (
          <div className="flex gap-2 mt-4">
            {entry.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-700 text-zinc-400 hover:text-zinc-100 hover:border-zinc-500 transition-all duration-200"
              >
                <LinkIcon icon={link.icon} />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
