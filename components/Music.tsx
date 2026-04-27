"use client";

import { useEffect, useRef, useState } from "react";

const tracks = [
  {
    title: "See You Space Cowboy",
    year: "2025",
    audioSrc: "/see-you-space-cowboy.mp3",
  },
  {
    title: "The Next Episode",
    year: "2024",
    audioSrc: "/the-next-episode.mp3",
  },
  {
    title: "Month End, Quarter Close",
    year: "2023",
    audioSrc: "/month-end-quarter-close.mp3",
  },
  {
    title: "Life of a Hustla",
    year: "2022",
    audioSrc: "/life-of-a-hustla.mp3",
  },
];

export default function Music() {
  const [activeIndex, setActiveIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const active = tracks[activeIndex];

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  }, [activeIndex]);

  return (
    <section id="music" className="py-28 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-accent-2 text-sm tracking-widest uppercase mb-3">
            03. Music
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
            It&apos;s For The Kids
          </h2>

          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="text-muted space-y-4 flex-1">
              <p>
                Each year at a company event, I auction off a custom rap song to
                the highest bidder, with all proceeds going to Kids Chance of
                America. It started as a fun idea, but it&apos;s turned into
                something I&apos;m really proud of. So far, I&apos;ve created
                four custom songs, and together they&apos;ve helped generate
                meaningful donations to support a great cause.
              </p>
              <p>
                What I enjoy most is the combination of creativity and impact. I
                get to build something personal and fun for someone else, while
                also contributing to an organization that makes a real difference
                in people&apos;s lives. It&apos;s a reminder that creating
                doesn&apos;t have to be separate from giving back.
              </p>
              <p>
                To learn more about{" "}
                <a
                  href="https://kidschance.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-2 hover:text-accent-2/80 underline underline-offset-2 transition-colors"
                >
                  Kids Chance of America
                </a>{" "}
                or to support their mission, you can{" "}
                <a
                  href="https://kidschance.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-2 hover:text-accent-2/80 underline underline-offset-2 transition-colors"
                >
                  visit them here
                </a>
                . If you&apos;re able to, I&apos;d encourage you to consider
                making a donation.
              </p>
            </div>

            <a
              href="https://kidschance.org"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 p-8 rounded-2xl border border-white/8 bg-white flex items-center justify-center hover:border-accent-2/40 transition-all"
            >
              <img
                src="/kidschance-logo.svg"
                alt="Kids Chance of America"
                className="w-52"
              />
            </a>
          </div>
        </div>

        {/* Player card */}
        <div className="rounded-2xl border border-white/8 bg-surface overflow-hidden">
          <div className="flex flex-col md:flex-row">

            {/* Track list */}
            <div className="md:w-2/5 border-b md:border-b-0 md:border-r border-white/8">
              {tracks.map((track, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={track.title}
                    onClick={() => handleSelect(i)}
                    className={`w-full flex items-center gap-4 px-6 py-5 text-left transition-all border-b border-white/5 last:border-b-0 ${
                      isActive
                        ? "bg-accent-2/10 border-l-2 border-l-accent-2"
                        : "hover:bg-white/5 border-l-2 border-l-transparent"
                    }`}
                  >
                    <span className={`text-xs font-mono shrink-0 ${isActive ? "text-accent-2" : "text-muted/40"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <p className={`text-sm font-semibold truncate transition-colors ${isActive ? "text-accent-2" : "text-slate-300"}`}>
                        {track.title}
                      </p>
                      <p className="text-xs font-mono text-muted/50 mt-0.5">{track.year}</p>
                    </div>
                    {isActive && (
                      <span className="ml-auto shrink-0 w-2 h-2 rounded-full bg-accent-2 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Player */}
            <div className="flex-1 flex flex-col justify-center p-8 md:p-12 gap-6">
              <div>
                <p className="text-xs font-mono text-accent-2 uppercase tracking-widest mb-2">
                  Now Playing
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {active.title}
                </h3>
                <p className="text-sm font-mono text-muted/60 mt-1">{active.year}</p>
              </div>

              <audio
                ref={audioRef}
                controls
                className="w-full accent-accent-2"
                src={active.audioSrc}
                preload="auto"
              >
                Your browser does not support the audio element.
              </audio>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
