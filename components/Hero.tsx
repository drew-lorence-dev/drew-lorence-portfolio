import { ArrowDown, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 opacity-100" />

      {/* Radial glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(0,212,255,0.07) 0%, rgba(139,92,246,0.05) 45%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <img
            src="/profile_picture_drawing.png"
            alt="Drew Lorence"
            className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-2 border-white/20 shadow-lg"
          />
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 text-white cursor-blink-after leading-none">
          Drew Lorence
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-xl text-muted font-mono mb-6 tracking-wide">
          <span className="whitespace-nowrap">Product Leader</span>{" "}
          <span className="text-accent font-semibold">·</span>{" "}
          <span className="whitespace-nowrap">Builder</span>{" "}
          <span className="text-accent-2 font-semibold">·</span>{" "}
          <span className="whitespace-nowrap">AI Native</span>{" "}
          <span className="text-accent font-semibold">·</span>{" "}
          <span className="whitespace-nowrap">Unusual Creative</span>
        </p>

        {/* Tagline */}
        <p className="text-base md:text-lg text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed">
          Check out more about me below.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-7 py-3 bg-accent text-page font-semibold rounded-lg font-mono text-sm hover:opacity-90 transition-all"
            style={{ boxShadow: "0 0 24px rgba(0,212,255,0.25)" }}
          >
            View My Work
          </a>
          <a
            href="#about"
            className="px-7 py-3 border border-white/15 text-slate-200 font-semibold rounded-lg font-mono text-sm hover:border-accent hover:text-accent transition-all"
          >
            About Me
          </a>
        </div>

        {/* Social icons */}
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/drewlorence"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/drew-lorence-8aa99184/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={22} />
          </a>
          <a
            href="mailto:drew.lorence.dev@gmail.com"
            className="text-muted hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-bounce">
        <span className="text-xs font-mono tracking-widest uppercase opacity-60">
          Scroll
        </span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
}
