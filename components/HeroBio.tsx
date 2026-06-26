const interests = [
  "Agentic Workflows",
  "Foundation Models",
  "Deep Learning",
  "Single-cell AI",
  "Proteomics Agents",
];

export function HeroBio() {
  return (
    <section className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 mb-6">
      <p className="font-mono text-xs text-zinc-600 mb-3">
        $ cat ~/about.md
      </p>

      <h2 className="text-lg font-bold text-zinc-50">About</h2>

      <p className="text-sm text-zinc-400 leading-relaxed mt-3">
        I&apos;m a Data Scientist II at{" "}
        <span className="text-zinc-200">Altos Labs</span>, where my current
        work focuses on agentic scientific workflows and deep learning systems
        for biological discovery. I develop byte-level single-cell foundation
        models from raw read sequences and build multi-agent LLM systems that
        autonomously reproduce mass-spec proteomics studies with structured
        extraction, self-correction, and MLflow-traced evaluation.
      </p>

      <p className="text-sm text-zinc-400 leading-relaxed mt-3">
        Previously at Altos, I created nf-core pipelines, architected
        event-driven AWS and Seqera analysis automation across spatial,
        proteomics, and single-cell datasets, and built multi-omics
        causal-network workflows for aging and cellular reprogramming
        research. I created the{" "}
        <span className="text-zinc-200">alevin-fry</span> ecosystem for
        single-cell RNA-seq preprocessing (published in{" "}
        <span className="text-zinc-300 italic">Nature Methods</span>) and have
        contributed to the{" "}
        <span className="text-zinc-200">nf-core</span> community by developing
        pipelines for spatial transcriptomics, proteomics, and single-cell
        analysis used by researchers worldwide.
      </p>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {interests.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/50"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
