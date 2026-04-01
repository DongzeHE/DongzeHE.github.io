export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "simpleaf-piscem-tutorial",
    title: "Generating a scRNA-seq count matrix with simpleaf",
    date: "Jan 24, 2023",
    summary:
      "A step-by-step tutorial on generating gene count matrices from raw FASTQ files using simpleaf and the alevin-fry pipeline, covering index building, quantification, and loading results in R and Python.",
    tags: ["Rust", "scRNA-seq", "Tutorial", "alevin-fry"],
    url: "https://combine-lab.github.io/alevin-fry-tutorials/2023/simpleaf-piscem/",
  },
  {
    slug: "nf-core-proteomics-pipeline",
    title: "Building an end-to-end nf-core pipeline for proteomics",
    date: "Coming soon",
    summary:
      "Design decisions and lessons learned from creating msproteomics, an nf-core pipeline for quantitative mass spectrometry-based proteomics data analysis.",
    tags: ["Nextflow", "nf-core", "Proteomics"],
    url: "#",
  },
  {
    slug: "multi-omics-graph-networks",
    title: "Multi-omics integration with graph convolutional networks",
    date: "Coming soon",
    summary:
      "Exploring causal-inference frameworks that leverage graph neural networks and linear programming to integrate multi-omics modalities for biomarker discovery.",
    tags: ["PyTorch", "Multi-omics", "Deep Learning"],
    url: "#",
  },
];
