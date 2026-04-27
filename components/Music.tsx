"use client";

import { Download } from "lucide-react";
import { useRef } from "react";

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
    title: "Life as a Hustla",
    year: "2022",
    audioSrc: "/life-of-a-hustla.mp3",
  },
];

export default function Music() {
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
            {/* Text */}
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

            {/* Logo */}
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

        {/* Track list */}
        <div className="space-y-2 max-w-md">
          {tracks.map((track, i) => (
            <div
              key={track.title}
              className="px-4 py-3 rounded-lg border border-white/8 bg-surface hover:border-accent-2/30 hover:bg-surface-2 transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-muted/40 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold text-white group-hover:text-accent-2 transition-colors truncate">
                  {track.title}
                </p>
                <span className="text-xs font-mono text-muted/40 ml-auto shrink-0">
                  {track.year}
                </span>
              </div>
              <audio
                controls
                className="w-full h-7 accent-accent-2"
                src={track.audioSrc}
                preload="none"
              >
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
