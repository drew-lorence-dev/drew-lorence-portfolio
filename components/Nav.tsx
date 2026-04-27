"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Mail, Menu, X } from "lucide-react";
import { LinkedInIcon } from "@/components/Icons";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Build", href: "#projects" },
  { label: "Music", href: "#music" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const resolveHref = (href: string) =>
    href.startsWith("#") && !isHome ? `/${href}` : href;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-page/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href={isHome ? "#home" : "/"}
          className="font-mono text-accent font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          drew<span className="text-accent-2">.</span>build
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={resolveHref(link.href)}
                className="text-sm font-mono text-muted hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-4">
          <a
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

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-muted hover:text-white transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-page/95 backdrop-blur-md border-b border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={resolveHref(link.href)}
              className="font-mono text-muted hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-5 pt-2 border-t border-white/5">
            <a
              href="https://www.linkedin.com/in/drew-lorence-8aa99184/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href="mailto:drew.lorence.dev@gmail.com"
              className="text-muted hover:text-accent transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
