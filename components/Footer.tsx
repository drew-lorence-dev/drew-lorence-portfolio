import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-mono text-accent font-semibold">
            drew<span className="text-accent-2">.</span>build
          </span>
          <p className="text-xs text-muted font-mono">
            &copy; {year} Drew Lorence. Built with Next.js.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <
            href="https://www.linkedin.com/in/drew-lorence-8aa99184/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="mailto:drew.lorence.dev@gmail.com"
            className="text-muted hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
