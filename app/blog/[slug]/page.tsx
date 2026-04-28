import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPosts, getPost, formatDate } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

  return (
    <div className="min-h-screen bg-page text-slate-200 flex flex-col">
      <Nav />

      <main className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-2xl mx-auto">

          {/* Back */}
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-accent transition-colors mb-12"
          >
            ← Back to Blog
          </a>

          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-accent/10 text-accent border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              {post.title}
            </h1>
            <p className="text-sm font-mono text-muted/60">{formatDate(post.date)}</p>
          </div>

          {/* Content */}
          <div
            className="prose prose-invert prose-slate max-w-none
              prose-p:text-slate-400 prose-p:leading-relaxed prose-p:text-base
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-200
              prose-ul:text-slate-400 prose-ol:text-slate-400
              prose-li:my-1
              prose-blockquote:border-accent/40 prose-blockquote:text-slate-400
              prose-code:text-accent prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
              prose-hr:border-white/10"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
