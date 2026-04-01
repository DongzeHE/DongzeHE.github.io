const interests = [
  "Single-cell Genomics",
  "Spatial Transcriptomics",
  "Multi-omics Integration",
  "Deep Learning",
  "Bioinformatics Pipelines",
];

export function HeroBio() {
  return (
    <section className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 mb-6">
      <p className="font-mono text-xs text-zinc-600 mb-3">
        $ cat ~/about.md
      </p>

      <h2 className="text-lg font-bold text-zinc-50">About</h2>

      <p className="text-sm text-zinc-400 leading-relaxed mt-3">
        I&apos;m a Computational Scientist at{" "}
        <span className="text-zinc-200">Altos Labs</span>, where I architect
        fully automated multi-omics platforms and develop causal-inference
        frameworks for aging research. My work spans single-cell genomics,
        spatial transcriptomics, and large-scale data integration — building
        the computational tools that turn raw sequencing data into biological
        insight.
      </p>

      <p className="text-sm text-zinc-400 leading-relaxed mt-3">
        I created the{" "}
        <span className="text-zinc-200">alevin-fry</span> ecosystem for
        single-cell RNA-seq preprocessing (published in{" "}
        <span className="text-zinc-300 italic">Nature Methods</span>) and am
        a core contributor to the{" "}
        <span className="text-zinc-200">nf-core</span> community, leading
        development of pipelines for spatial transcriptomics, proteomics, and
        single-cell analysis used by researchers worldwide.
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
