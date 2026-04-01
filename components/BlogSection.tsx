import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export function BlogSection() {
  return (
    <section>
      <p className="font-mono text-xs text-zinc-600 mb-4">
        $ ls ~/blog/
      </p>
      <div className="border-b border-zinc-800 pb-4 mb-8 flex items-center">
        <h2 className="text-sm font-medium text-zinc-50 px-3 py-1.5">Blog Posts</h2>
      </div>

      <div className="flex flex-col gap-4">
        {blogPosts.map((post) => (
          <a
            key={post.slug}
            href={post.url}
            target={post.url === "#" ? undefined : "_blank"}
            rel={post.url === "#" ? undefined : "noopener noreferrer"}
            className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 hover:border-zinc-700 transition-colors duration-200 flex flex-col"
          >
            <p className="font-mono text-xs text-zinc-500">{post.date}</p>

            <h3 className="text-zinc-100 font-medium text-sm mt-1 leading-snug">
              {post.title}
            </h3>

            <p className="text-zinc-400 text-xs mt-1.5 leading-relaxed line-clamp-3 flex-1">
              {post.summary}
            </p>

            <div className="flex flex-wrap gap-1 mt-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            {post.url !== "#" && (
              <span className="inline-flex items-center gap-1 text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors mt-2">
                Read more <ArrowRight size={10} />
              </span>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
