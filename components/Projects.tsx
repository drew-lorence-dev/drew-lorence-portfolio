import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, accentColors } from "@/lib/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-14 px-6 scroll-mt-20"
      style={{
        background:
          "linear-gradient(to bottom, #07070f 0%, #0a0a18 50%, #07070f 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">
            02. Build
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            The Build Zone
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed text-base max-w-4xl">
            I build stuff I think should exist, mainly for me. If something feels like it&apos;d be useful, I go build it. I use it until I think it&apos;s genuinely sweet, and then I start thinking about how other people could get something out of it too. That&apos;s the whole loop. Stay close to the craft, build rad things, and figure out how to make them matter to others.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const colors = accentColors[project.accent] ?? accentColors.accent;
            return (
              <Link
                key={project.slug}
                href={`/build/${project.slug}`}
                className={`group relative rounded-2xl border border-white/8 bg-surface transition-all duration-300 ${colors.border} hover:bg-surface-2 flex flex-col overflow-hidden`}
              >
                <div className="p-7 pb-0 flex flex-col flex-1">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-xl font-bold font-mono ${colors.text}`}>
                      {project.name}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="text-muted group-hover:text-white transition-colors ml-4 mt-1 shrink-0"
                    />
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-7 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-md text-xs font-mono ${colors.bg} ${colors.text} border border-white/5`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hero screenshot */}
                <div className="relative mx-7 mb-0 rounded-t-xl border border-b-0 border-white/10 overflow-hidden shadow-lg">
                  <img
                    src={project.hero.src}
                    alt={`${project.name} — ${project.hero.label}`}
                    className="w-full object-cover object-top aspect-[9/10] group-hover:scale-[1.03] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-xs font-mono bg-black/60 px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    View project
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
