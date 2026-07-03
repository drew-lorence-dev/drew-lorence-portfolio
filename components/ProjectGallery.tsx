"use client";

import { X } from "lucide-react";
import { useState } from "react";
import type { Screenshot } from "@/lib/projects";

export default function ProjectGallery({
  screenshots,
}: {
  screenshots: Screenshot[];
}) {
  const [lightbox, setLightbox] = useState<Screenshot | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {screenshots.map((shot) => (
          <button
            key={shot.src}
            onClick={() => setLightbox(shot)}
            className="group flex flex-col items-center gap-2 text-left"
          >
            <div className="relative w-full overflow-hidden rounded-xl border border-white/10 group-hover:border-white/30 transition-all duration-200 shadow-lg">
              <img
                src={shot.src}
                alt={shot.label}
                className="w-full object-cover object-top aspect-[9/16] group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <span className="text-white text-xs font-mono bg-black/60 px-2 py-1 rounded-md">
                  View
                </span>
              </div>
            </div>
            <span className="text-xs font-mono text-muted/70 group-hover:text-white transition-colors">
              {shot.label}
            </span>
          </button>
        ))}
      </div>

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
    </>
  );
}
