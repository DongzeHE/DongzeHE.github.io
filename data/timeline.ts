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
  links: TimelineLink[];
  techStack: string[];
}

export type FilterOption = "all" | TimelineType;

export const timelineData: TimelineEntry[] = [
  {
    id: "e7a1b3c",
    date: "Jun 2024",
    sortDate: "2024-06-01",
    type: TimelineType.Milestone,
    title: "Joined Altos Labs as Computational Scientist",
    description:
      "Architecting fully automated multi-omics platforms (Flyte + Nextflow + AWS) and deploying ReAct-based AI dashboards to accelerate scientific hypothesis generation.",
    links: [],
    techStack: ["Nextflow", "Flyte", "AWS", "RShiny", "LangChain"],
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
    id: "d4f2e8a",
    date: "May 2024",
    sortDate: "2024-05-15",
    type: TimelineType.Education,
    title: "Ph.D. in Biological Sciences — University of Maryland",
    description:
      "Methods for efficient processing and comprehensive analysis of single-cell sequencing data. Advisor: Dr. Rob Patro. Concentration: Computational Biology and Bioinformatics.",
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
    id: "c2d5a9e",
    date: "2024",
    sortDate: "2024-03-01",
    type: TimelineType.Research,
    title: "spatialxe — nf-core spatial transcriptomics pipeline",
    description:
      "Lead developer of the official nf-core pipeline for spatial transcriptomics analysis, supporting multiple technologies and data formats. Standardized workflows for cell segmentation, transcript assignment, and spatial feature extraction.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/nf-core/spatialxe",
        icon: "github",
      },
    ],
    techStack: ["Nextflow", "Python", "nf-core"],
  },
  {
    id: "f1e4b7d",
    date: "2024",
    sortDate: "2024-02-01",
    type: TimelineType.Research,
    title: "msproteomics — nf-core proteomics pipeline",
    description:
      "Creator of the official nf-core end-to-end pipeline for quantitative mass spectrometry-based proteomics. Automated protein identification, quantification, differential abundance analysis, and pathway enrichment.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/nf-core/msproteomics",
        icon: "github",
      },
    ],
    techStack: ["Nextflow", "R", "nf-core"],
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
    id: "a1c8e2f",
    date: "Summer 2023",
    sortDate: "2023-06-15",
    type: TimelineType.Research,
    title: "Deep Learning Motif Discovery for scATAC-seq — Genentech",
    description:
      "Improved a deep-learning-based Motif Discovery Analysis framework for scATAC-seq, enabling the first cell-type-specific MDA at Genentech. Discovered regulatory targets through integrated MDA and gene-regulatory-network analysis.",
    links: [],
    techStack: ["PyTorch", "Nextflow", "Python"],
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
