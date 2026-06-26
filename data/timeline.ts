export enum TimelineType {
  Publication = "publication",
  Research = "research",
  Education = "education",
  Milestone = "milestone",
}

export interface TimelineLink {
  label: string;
  url: string;
  icon?: "paper" | "github" | "external";
}

export interface TimelineEntry {
  id: string;
  date: string;
  sortDate: string;
  type: TimelineType;
  title: string;
  description: string;
  venue?: string;
  authors?: string;
  highlights?: string[];
  links: TimelineLink[];
  techStack: string[];
}

export type FilterOption = "all" | TimelineType;

export const timelineData: TimelineEntry[] = [
  {
    id: "a1c8e2f",
    date: "Jun 2026",
    sortDate: "2026-06-11",
    type: TimelineType.Publication,
    title:
      "Dynamic transitioning between MAPK-driven and WNT-driven cell states drives intestinal cancer and shapes therapy response",
    description:
      "Nature Genetics publication from my Genentech internship project, connecting WNT- and MAPK-driven colorectal cancer cell states with tumor growth and therapy response.",
    venue: "Nature Genetics 58, 1331-1340 (2026)",
    authors: "Amanda R. Moore et al. (including Dongze He)",
    links: [
      {
        label: "Nature Genetics",
        url: "https://www.nature.com/articles/s41588-026-02611-0",
        icon: "paper",
      },
    ],
    techStack: ["Cancer Genomics", "Single-cell Analysis", "Genentech"],
  },
  {
    id: "p9d4f6b",
    date: "May 2026",
    sortDate: "2026-05-01",
    type: TimelineType.Milestone,
    title: "Promoted to Data Scientist II at Altos Labs",
    description:
      "Advanced to Data Scientist II, focusing on foundation models and agentic scientific workflows for biological discovery.",
    highlights: [
      "Developed a reference-free, tokenization-free, byte-level single-cell foundation model trained directly on raw read sequences.",
      "Used self-supervised pretraining with next-base language modeling, same-cell contrastive margin loss, and multi-GPU distributed training.",
      "Built a LangGraph multi-agent LLM system that reproduces mass-spec proteomics studies with schema-constrained extraction, self-correction, MLflow tracing, and LLM-as-judge evaluation.",
    ],
    links: [],
    techStack: ["LangGraph", "MLflow", "Deep Learning", "Single-cell AI"],
  },
  {
    id: "b7a4d2c",
    date: "Apr 2026",
    sortDate: "2026-04-15",
    type: TimelineType.Publication,
    title:
      "QCatch: a framework for quality control assessment and analysis of single-cell sequencing data",
    description:
      "A Python-based command-line tool that generates comprehensive, interactive quality control reports for single-cell quantification results from alevin-fry and simpleaf.",
    venue: "Bioinformatics, Volume 42, Issue 5, May 2026, btag184",
    authors: "Yuan Gao*, Dongze He*, and Rob Patro",
    links: [
      {
        label: "OUP Bioinformatics",
        url: "https://academic.oup.com/bioinformatics/article/42/5/btag184/8654715",
        icon: "paper",
      },
      {
        label: "GitHub",
        url: "https://github.com/COMBINE-lab/QCatch",
        icon: "github",
      },
    ],
    techStack: ["Python", "CLI", "Single-cell QC"],
  },
  {
    id: "f1e4b7d",
    date: "Mar 2026",
    sortDate: "2026-03-30",
    type: TimelineType.Research,
    title: "msproteomics — nf-core proteomics pipeline",
    description:
      "Creator of the official nf-core end-to-end pipeline for quantitative mass spectrometry-based proteomics. Automated protein identification, quantification, differential abundance analysis, and pathway enrichment.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/nf-core/msproteomics/tree/dev",
        icon: "github",
      },
    ],
    techStack: ["Nextflow", "R", "nf-core"],
  },
  {
    id: "c2d5a9e",
    date: "Mar 2026",
    sortDate: "2026-03-01",
    type: TimelineType.Research,
    title: "spatialaxe — nf-core spatial transcriptomics pipeline",
    description:
      "Lead developer of the official nf-core pipeline for spatial transcriptomics analysis, supporting multiple technologies and data formats. Standardized workflows for cell segmentation, transcript assignment, and spatial feature extraction.",
    links: [
      {
        label: "nf-core",
        url: "https://nf-co.re/spatialaxe/dev/",
        icon: "external",
      },
      {
        label: "GitHub",
        url: "https://github.com/nf-core/spatialaxe",
        icon: "github",
      },
    ],
    techStack: ["Nextflow", "Python", "nf-core"],
  },
  {
    id: "a3f7c2d",
    date: "Jul 2024",
    sortDate: "2024-07-01",
    type: TimelineType.Publication,
    title:
      "Forseti: A mechanistic and predictive model of the splicing status of scRNA-seq reads",
    description:
      "Designed the first statistical model to predict scRNA-seq read splicing status, achieving AUROC 0.9.",
    venue: "ISMB 2024",
    authors:
      "Dongze He*, Yuan Gao, Spencer Skylar Chan, Natalia Quintana-Parrilla, and Rob Patro*",
    links: [
      {
        label: "Paper",
        url: "https://doi.org/10.1093/bioinformatics/btae412",
        icon: "paper",
      },
    ],
    techStack: ["Rust", "Python", "Statistical Modeling"],
  },
  {
    id: "e7a1b3c",
    date: "Jun 2024",
    sortDate: "2024-06-01",
    type: TimelineType.Milestone,
    title: "Joined Altos Labs as Computational Scientist I",
    description:
      "Built scalable bioinformatics infrastructure and multi-omics analysis systems across spatial, proteomics, and single-cell programs.",
    highlights: [
      "Created and maintained open-source nf-core pipelines with 30+ merged contributions across 4 pipelines and 7 reusable tool modules.",
      "Architected AWS S3-triggered Seqera Tower pipelines that processed 300+ Xenium slices, 250+ mass-spec experiments, and 100+ single-cell samples without manual intervention.",
      "Built multi-omics causal-network workflows using footprint-based activity inference and constraint-based optimization for aging and cellular reprogramming research.",
    ],
    links: [],
    techStack: ["Nextflow", "Seqera", "AWS", "Multi-omics", "nf-core"],
  },
  {
    id: "d4f2e8a",
    date: "May 2024",
    sortDate: "2024-05-15",
    type: TimelineType.Education,
    title: "Ph.D. in Biological Sciences — University of Maryland",
    description:
      "Methods for efficient processing and comprehensive analysis of single-cell sequencing data. Advisor: Dr. Rob Patro. Concentration: Computational Biology and Bioinformatics.",
    highlights: [
      "Led development of the Rust-based alevin-fry/simpleaf ecosystem for faster, memory-frugal single-cell preprocessing.",
      "Co-authored the Single-Cell Best Practices open-source textbook, a community standard for single-cell analysis and benchmarking.",
      "Designed Forseti, the first statistical model to predict scRNA-seq read splicing status, reaching AUROC 0.9.",
    ],
    links: [],
    techStack: ["Rust", "Python", "R", "C/C++"],
  },
  {
    id: "b8c3d1f",
    date: "Jan 2024",
    sortDate: "2024-01-01",
    type: TimelineType.Publication,
    title:
      "DifferentialRegulation: a Bayesian hierarchical approach to identify differentially regulated genes",
    description:
      "A novel statistical framework for identifying genes with differential regulation across conditions in single-cell RNA-seq data.",
    venue: "Biostatistics 25(4), 1079-1093",
    authors:
      "Simone Tiberi, Joël Meili, Peiying Cai, Charlotte Soneson, Dongze He, Hirak Sarkar, Alejandra Avalos-Pacheco, Rob Patro, and Mark D Robinson*",
    links: [
      {
        label: "Paper",
        url: "https://doi.org/10.1093/biostatistics/kxae016",
        icon: "paper",
      },
    ],
    techStack: ["R", "Bayesian Statistics"],
  },
  {
    id: "g3a8f1b",
    date: "Mar 2025",
    sortDate: "2025-03-11",
    type: TimelineType.Research,
    title: "scrnaseq — nf-core single-cell RNA-seq pipeline",
    description:
      "Core contributor to the official nf-core pipeline for single-cell RNA-seq preprocessing. Integrated the alevin-fry/simpleaf workflow as a primary analysis path alongside STARSolo, Kallisto/BUStools, and Cell Ranger.",
    links: [
      {
        label: "nf-core",
        url: "https://nf-co.re/scrnaseq/4.1.0/",
        icon: "external",
      },
      {
        label: "GitHub",
        url: "https://github.com/nf-core/scrnaseq",
        icon: "github",
      },
    ],
    techStack: ["Nextflow", "Rust", "nf-core"],
  },
  {
    id: "e9a2c4b",
    date: "Jun 2023",
    sortDate: "2023-06-01",
    type: TimelineType.Publication,
    title: "Best practices for single-cell analysis across modalities",
    description:
      "A comprehensive review establishing community standards for single-cell data analysis across RNA, ATAC, protein, and spatial modalities.",
    venue: "Nature Reviews Genetics 24, 550–572",
    authors: "L Heumos et al. (44 authors including Dongze He)",
    links: [
      {
        label: "Paper",
        url: "https://doi.org/10.1038/s41576-023-00586-w",
        icon: "paper",
      },
      {
        label: "GitHub",
        url: "https://github.com/theislab/single-cell-best-practices",
        icon: "github",
      },
    ],
    techStack: ["Python", "R", "Jupyter"],
  },
  {
    id: "h6d3b9a",
    date: "Summer 2023",
    sortDate: "2023-06-15",
    type: TimelineType.Research,
    title: "Deep Learning Motif Discovery for scATAC-seq — Genentech",
    description:
      "Summer internship project that later connected to the Nature Genetics colorectal cancer publication.",
    highlights: [
      "Improved a deep-learning Motif Discovery Analysis framework for scATAC-seq, enabling the first cell-type-specific MDA at Genentech.",
      "Discovered regulatory targets of a key transcription factor through integrated MDA and gene-regulatory-network analysis.",
      "Implemented the analysis workflow in Nextflow for reproducible execution.",
    ],
    links: [
      {
        label: "Publication outcome",
        url: "https://www.nature.com/articles/s41588-026-02611-0",
        icon: "paper",
      },
    ],
    techStack: ["PyTorch", "Nextflow", "Python"],
  },
  {
    id: "d7b1f3e",
    date: "Jan 2023",
    sortDate: "2023-01-01",
    type: TimelineType.Publication,
    title:
      "simpleaf: A simple, flexible, and scalable framework for single-cell transcriptomics data processing",
    description:
      "A simplified interface for the alevin-fry ecosystem that can process complex single-cell data types with one command, including CITE-seq and 10X feature barcoding.",
    venue: "Bioinformatics 39",
    authors: "Dongze He*, and Rob Patro*",
    links: [
      {
        label: "Paper",
        url: "https://doi.org/10.1093/bioinformatics/btad614",
        icon: "paper",
      },
      {
        label: "GitHub",
        url: "https://github.com/COMBINE-lab/simpleaf",
        icon: "github",
      },
    ],
    techStack: ["Rust", "CLI"],
  },
  {
    id: "f4d6a2c",
    date: "Mar 2022",
    sortDate: "2022-03-01",
    type: TimelineType.Publication,
    title:
      "Alevin-fry unlocks rapid, accurate and memory-frugal quantification of single-cell RNA-seq data",
    description:
      "A suite of tools achieving 2x faster performance and dramatically lower memory usage for single-cell RNA-seq preprocessing while maintaining state-of-the-art accuracy.",
    venue: "Nature Methods 19, 316–322",
    authors:
      "Dongze He, Mohsen Zakeri, Hirak Sarkar, Charlotte Soneson, Avi Srivastava, and Rob Patro*",
    links: [
      {
        label: "Paper",
        url: "https://doi.org/10.1038/s41592-022-01408-3",
        icon: "paper",
      },
      {
        label: "GitHub",
        url: "https://github.com/COMBINE-lab/alevin-fry",
        icon: "github",
      },
    ],
    techStack: ["Rust", "Python"],
  },
  {
    id: "b3e7d1a",
    date: "May 2019",
    sortDate: "2019-05-01",
    type: TimelineType.Education,
    title: "M.S. in Systems Biology and Bioinformatics — Case Western Reserve",
    description:
      "Discovery of Causal Regulatory Network of System Level Measurements by Integrative Network Analysis.",
    links: [],
    techStack: ["R", "Python", "Network Analysis"],
  },
  {
    id: "c9f2a4d",
    date: "May 2017",
    sortDate: "2017-05-01",
    type: TimelineType.Education,
    title: "B.S. in Biotechnology — Huaqiao University",
    description:
      "Foundation in molecular biology, genetics, and biochemistry in Xiamen, China.",
    links: [],
    techStack: [],
  },
];

export function getNodeColor(type: TimelineType): string {
  switch (type) {
    case TimelineType.Publication:
      return "var(--color-node-publication)";
    case TimelineType.Research:
      return "var(--color-node-research)";
    case TimelineType.Education:
    case TimelineType.Milestone:
      return "var(--color-node-education)";
  }
}

export function getTypeClasses(type: TimelineType) {
  switch (type) {
    case TimelineType.Publication:
      return {
        bg: "bg-blue-500/10",
        text: "text-blue-400",
        border: "border-blue-500/30",
        glow: "var(--color-glow-publication)",
        dot: "bg-blue-500",
      };
    case TimelineType.Research:
      return {
        bg: "bg-purple-500/10",
        text: "text-purple-400",
        border: "border-purple-500/30",
        glow: "var(--color-glow-research)",
        dot: "bg-purple-500",
      };
    case TimelineType.Education:
    case TimelineType.Milestone:
      return {
        bg: "bg-green-500/10",
        text: "text-green-400",
        border: "border-green-500/30",
        glow: "var(--color-glow-education)",
        dot: "bg-green-500",
      };
  }
}
