"use client";

import { ExternalLink, X } from "lucide-react";
import { useState } from "react";

interface Screenshot {
  src: string;
  label: string;
}

interface Project {
  name: string;
  description: string;
  tags: string[];
  live?: string;
  accent?: string;
  screenshots?: Screenshot[];
}

const projects: Project[] = [
  {
    name: "NINJAxLIFESTYLE",
    description:
      "An activity tracking app built to keep you moving across all the ways you train. Connects with Fitbit and lets you log weights, cardio, stretching, and meditation — all in one place.",
    tags: ["Activity Tracking", "Fitbit API", "Lovable"],
    accent: "accent",
    screenshots: [
      { src: "/ninja-home.jpg", label: "Home Screen" },
      { src: "/ninja-plan.jpg", label: "Plan an Activity" },
      { src: "/ninja-activity.jpg", label: "View an Activity" },
    ],
  },
];

const accentColors: Record<string, { border: string; text: string; bg: string }> = {
  accent: {
    border: "hover:border-accent/40",
    text: "text-accent",
    bg: "bg-accent/10",
  },
  "accent-2": {
    border: "hover:border-accent-2/40",
    text: "text-accent-2",
    bg: "bg-accent-2/10",
  },
  "accent-3": {
    border: "hover:border-accent-3/40",
    text: "text-accent-3",
    bg: "bg-accent-3/10",
  },
};

export default function Projects() {
  const [lightbox, setLightbox] = useState<Screenshot | null>(null);

  return (
    <section
      id="projects"
      className="py-28 px-6 scroll-mt-20"
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
            Apps I&apos;ve Built
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed text-base max-w-lg">
            A selection of projects — products, experiments, and tools.
            Everything here started with a problem worth solving.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 max-w-2xl">
          {projects.map((project) => {
            const colors = accentColors[project.accent ?? "accent"];
            return (
              <div
                key={project.name}
                className={`group relative p-7 rounded-2xl border border-white/8 bg-surface transition-all duration-300 ${colors.border} hover:bg-surface-2`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-xl font-bold font-mono ${colors.text}`}>
                    {project.name}
                  </h3>
                  <div className="flex gap-3 ml-4">

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-white transition-colors"
                        aria-label="Live site"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono ${colors.bg} ${colors.text} border border-white/5`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Screenshots */}
                {project.screenshots && (
                  <div>
                    <p className="text-xs font-mono text-muted/50 uppercase tracking-widest mb-4">
                      App Preview
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {project.screenshots.map((shot) => (
                        <button
                          key={shot.label}
                          onClick={() => setLightbox(shot)}
                          className="group/shot flex flex-col items-center gap-2 text-left"
                        >
                          <div className="relative w-full overflow-hidden rounded-xl border border-white/10 group-hover/shot:border-accent/40 transition-all duration-200 shadow-lg">
                            <img
                              src={shot.src}
                              alt={shot.label}
                              className="w-full object-cover object-top aspect-[9/19] group-hover/shot:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/shot:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                              <span className="text-white text-xs font-mono bg-black/60 px-2 py-1 rounded-md">
                                View
                              </span>
                            </div>
                          </div>
                          <span className="text-xs font-mono text-muted/70 group-hover/shot:text-accent transition-colors">
                            {shot.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-h-[90vh] flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-surface border border-white/20 flex items-center justify-center text-muted hover:text-white transition-colors"
            >
              <X size={14} />
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.label}
              className="max-h-[80vh] w-auto rounded-2xl shadow-2xl border border-white/10"
            />
            <p className="text-sm font-mono text-muted">{lightbox.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}
