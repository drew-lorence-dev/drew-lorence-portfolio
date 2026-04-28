import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPosts, formatDate } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-page text-slate-200 flex flex-col">
      <Nav />

      <main className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="mb-16">
            <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Thinking Out Loud
            </h1>
            <p className="text-slate-400 leading-relaxed text-base max-w-xl">
              Notes on product, AI, building, and whatever else is on my mind.
              No editorial calendar — just things worth writing down.
            </p>
          </div>

          {/* Post list */}
          {posts.length === 0 ? (
            <p className="text-muted font-mono text-sm">No posts yet — check back soon.</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block p-6 rounded-2xl border border-white/8 bg-surface hover:border-accent/40 hover:bg-surface-2 transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h2 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <span className="text-xs font-mono text-muted/60 shrink-0 mt-1">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-accent/10 text-accent border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
