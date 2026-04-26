import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

interface Project {
  name: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  accent?: string;
}

const projects: Project[] = [
  {
    name: "NINJAxLIFESTYLE",
    description:
      "An activity tracking app built to keep you moving across all the ways you train. Connects with Fitbit and lets you log weights, cardio, stretching, and meditation — all in one place.",
    tags: ["Activity Tracking", "Fitbit API", "Lovable"],
    live: "https://ninjaxlifestyle.lovable.app/",
    featured: true,
    accent: "accent",
  },
  {
    name: "FlowBoard",
    description:
      "A real-time kanban and project management tool built for small teams. Features drag-and-drop boards, live collaboration, and smart deadline tracking.",
    tags: ["React", "Node.js", "WebSockets", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: true,
    accent: "accent-2",
  },
  {
    name: "Pulse",
    description:
      "A real-time analytics dashboard for indie app developers. Tracks key metrics, cohort retention, and funnel conversions with a minimal, focused UI.",
    tags: ["React", "Python", "FastAPI", "D3.js"],
    github: "#",
    accent: "accent-3",
  },
  {
    name: "Dropzone",
    description:
      "A desktop-native file organizer with smart auto-categorization. Drag files in, let the AI sort them. Built as an Electron app with local ML inference.",
    tags: ["TypeScript", "Electron", "Python", "ONNX"],
    github: "#",
    live: "#",
    accent: "accent",
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
            02. Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Things I&apos;ve Built
          </h2>
          <p className="mt-4 text-muted max-w-lg">
            A selection of projects — products, experiments, and tools.
            Everything here started with a problem worth solving.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const colors = accentColors[project.accent ?? "accent"];
            return (
              <div
                key={project.name}
                className={`group relative p-7 rounded-2xl border border-white/8 bg-surface transition-all duration-300 ${colors.border} hover:bg-surface-2`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-xl font-bold text-white font-mono ${colors.text} group-hover:${colors.text}`}>
                    {project.name}
                  </h3>
                  <div className="flex gap-3 ml-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <GitHubIcon size={18} />
                      </a>
                    )}
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
                <div className="flex flex-wrap gap-2">
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
            );
          })}
        </div>

      </div>
    </section>
  );
}
