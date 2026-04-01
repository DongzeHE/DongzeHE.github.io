import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export function BlogSection() {
  return (
    <section className="mt-16">
      <div className="mb-6">
        <p className="font-mono text-xs text-zinc-600 mb-2">
          $ ls ~/blog/
        </p>
        <h2 className="text-xl font-bold text-zinc-50">Blog Posts</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogPosts.map((post) => (
          <a
            key={post.slug}
            href={post.url}
            target={post.url === "#" ? undefined : "_blank"}
            rel={post.url === "#" ? undefined : "noopener noreferrer"}
            className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-colors duration-200 flex flex-col"
          >
            <p className="font-mono text-xs text-zinc-500">{post.date}</p>

            <h3 className="text-zinc-100 font-medium mt-1.5 leading-snug">
              {post.title}
            </h3>

            <p className="text-zinc-400 text-sm mt-2 leading-relaxed line-clamp-3 flex-1">
              {post.summary}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {post.url !== "#" && (
              <span className="inline-flex items-center gap-1 text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors mt-3">
                Read more <ArrowRight size={12} />
              </span>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
