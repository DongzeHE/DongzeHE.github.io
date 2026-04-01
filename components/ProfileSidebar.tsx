import { Mail, GraduationCap, ExternalLink } from "lucide-react";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socials = [
  {
    href: "https://github.com/DongzeHE",
    label: "GitHub",
    icon: GitHubIcon,
  },
  {
    href: "https://linkedin.com/in/dongzehe",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
  {
    href: "mailto:dongzehe.zaza@gmail.com",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://scholar.google.com/citations?user=PLACEHOLDER",
    label: "Google Scholar",
    icon: GraduationCap,
  },
  {
    href: "https://orcid.org/0000-0001-8259-7434",
    label: "ORCID",
    icon: ExternalLink,
  },
];

export function ProfileSidebar() {
  return (
    <aside className="md:sticky md:top-0 md:h-screen flex flex-col justify-center p-8 md:p-12">
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm">
        {/* Profile image placeholder */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 p-[2px] mx-auto">
          <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center">
            <span className="text-4xl font-bold text-zinc-400">DH</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-zinc-50 mt-6 text-center">
          Dongze He
        </h1>
        <p className="font-mono text-sm text-zinc-400 text-center mt-1">
          Computational Scientist
        </p>
        <p className="text-sm text-zinc-500 text-center">
          Altos Labs, San Diego
        </p>

        <p className="text-sm text-zinc-400 leading-relaxed mt-6">
          Computational biologist developing tools and methods for single-cell
          genomics and multi-omics data analysis. Building scalable
          bioinformatics infrastructure at Altos Labs.
        </p>

        <p className="text-sm text-zinc-500 leading-relaxed mt-3">
          Ph.D. in Computational Biology from the University of Maryland.
          Core contributor to nf-core. Creator of alevin-fry and simpleaf.
        </p>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 transition-all duration-200"
            >
              <Icon size={18} />
              <span className="sr-only">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
