"use client";

import { Music2, Disc3, Mic2, Download } from "lucide-react";
import { useRef } from "react";

const tracks = [
  {
    title: "See You Space Cowboy",
    description: "Made for Wyatt after a generous contribution to Kids Chance of America",
    year: "2025",
    audioSrc: "/see-you-space-cowboy.mp3",
  },
];

export default function Music() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleDownload = (filename: string, src: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="music" className="py-28 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-accent-2 text-sm tracking-widest uppercase mb-3">
            03. Music
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Side B
          </h2>
          <p className="mt-4 text-muted max-w-lg">
            When I&apos;m not writing code, I&apos;m writing music. I produce,
            record, and mix my own tracks — it&apos;s how I stay creative
            outside the terminal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="group p-6 rounded-2xl border border-white/8 bg-surface hover:border-accent-2/40 hover:bg-surface-2 transition-all"
            >
              {/* Album art placeholder */}
              <div className="w-full aspect-square rounded-xl mb-5 flex items-center justify-center bg-white/5 border border-white/5 group-hover:border-accent-2/20 transition-all">
                <Disc3
                  size={48}
                  className="text-accent-2/40 group-hover:text-accent-2/70 transition-colors animate-float"
                />
              </div>

              <p className="text-white font-semibold mb-2">{track.title}</p>
              <p className="text-sm text-muted mb-4">{track.description}</p>
              <p className="text-xs font-mono text-muted/60 mb-4">
                {track.year}
              </p>

              {/* Audio Player */}
              <div className="mb-4 space-y-3">
                <audio
                  ref={audioRef}
                  controls
                  className="w-full h-8 accent-accent-2"
                  src={track.audioSrc}
                >
                  Your browser does not support the audio element.
                </audio>

                {/* Download Button */}
                <button
                  onClick={() =>
                    handleDownload(
                      "see-you-space-cowboy.mp3",
                      track.audioSrc
                    )
                  }
                  className="w-full px-4 py-2 rounded-lg bg-accent-2/10 border border-accent-2/30 text-accent-2 hover:bg-accent-2/20 hover:border-accent-2/50 transition-all flex items-center justify-center gap-2 text-sm font-mono"
                >
                  <Download size={16} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats / vibe row */}
        <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl border border-white/8 bg-surface">
          {[
            { icon: Mic2, label: "Vocalist", detail: "Producer & vocalist" },
            { icon: Music2, label: "Genre", detail: "Electronic, Ambient, Lo-fi" },
            { icon: Disc3, label: "Status", detail: "Recording new material" },
          ].map(({ icon: Icon, label, detail }) => (
            <div key={label} className="flex items-center gap-4 p-2">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-accent-2/10 border border-accent-2/20 shrink-0">
                <Icon size={18} className="text-accent-2" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted uppercase tracking-wide">
                  {label}
                </p>
                <p className="text-sm text-slate-300">{detail}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-mono text-muted opacity-60">
          // music coming soon — check back
        </p>
      </div>
    </section>
  );
}
