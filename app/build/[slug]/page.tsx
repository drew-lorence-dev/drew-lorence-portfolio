import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import { projects, getProject, accentColors } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Drew Lorence`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const colors = accentColors[project.accent] ?? accentColors.accent;

  return (
    <div className="min-h-screen bg-page text-slate-200 flex flex-col">
      <Nav />

      <main className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back */}
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-accent transition-colors mb-12"
          >
            ← Back to the Build Zone
          </a>

          {/* Header */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 py-1 rounded-md text-xs font-mono ${colors.bg} ${colors.text} border border-white/5`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1
              className={`text-3xl md:text-5xl font-bold font-mono leading-tight mb-3 ${colors.text}`}
            >
              {project.name}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              {project.tagline}
            </p>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono ${colors.bg} ${colors.text} border border-white/10 hover:border-white/30 transition-colors`}
              >
                Visit the live site
                <ExternalLink size={14} />
              </a>
            )}
          </div>

          {/* Hero + story */}
          <div className="flex flex-col md:flex-row gap-10 mb-16">
            <div className="md:w-2/5 shrink-0">
              <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <img
                  src={project.hero.src}
                  alt={`${project.name} — ${project.hero.label}`}
                  className="w-full"
                />
              </div>
            </div>
            <div className="space-y-5">
              {project.story.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-slate-400 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <p className="text-xs font-mono text-muted/50 uppercase tracking-widest mb-6">
              Features
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-5 rounded-xl border border-white/8 bg-surface"
                >
                  <h3 className={`text-sm font-bold font-mono mb-2 ${colors.text}`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div className="mb-16">
            <p className="text-xs font-mono text-muted/50 uppercase tracking-widest mb-6">
              Built With
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-lg text-sm font-mono bg-surface border border-white/8 text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div>
            <p className="text-xs font-mono text-muted/50 uppercase tracking-widest mb-6">
              Screenshots
            </p>
            <ProjectGallery screenshots={project.gallery} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
