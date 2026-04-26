const skills = [
  "Product Strategy",
  "Roadmapping",
  "Team Leadership",
  "Cross-functional Collaboration",
  "Go-to-Market",
  "User Research",
  "Data-Informed Decisions",
  "AI-Native Development",
  "Agile / Scrum",
  "UX Thinking",
  "Engineering Fluency",
  "Stakeholder Management",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">
            01. About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Who I Am
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div className="space-y-5 text-slate-400 leading-relaxed text-base">
            <p>
              I&apos;m Drew — a product leader who leads product teams and
              owns the full arc from vision to execution. I work at the
              intersection of business problems, user needs, and the engineering
              teams who build the solutions. Having written production code
              earlier in my career, I can gut-check technical complexity, speak
              fluent engineering, and keep strategy grounded in what&apos;s
              actually buildable.
            </p>
            <p>
              That technical background has also made me unusually effective
              with AI. Rather than outsourcing ideas to a dev team for
              everything, I use AI as a force multiplier — prototyping,
              building, and shipping things I care about in an AI-native way.
              It&apos;s a different kind of builder&apos;s toolkit, and it
              closes the gap between product thinking and working software.
            </p>
            <p>
              Outside of work, I&apos;m a musician. I produce and record my own
              music, which keeps me connected to the creative side of making
              things. That identity — builder, leader, and artist — shapes how
              I think about products and the people who use them.
            </p>

            <div className="pt-4 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm font-mono">
                <span className="text-accent">▸</span>
                <span className="text-slate-300">
                  Based in the United States
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm font-mono">
                <span className="text-accent">▸</span>
                <span className="text-slate-300">
                  Product leader — leading cross-functional teams
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm font-mono">
                <span className="text-accent">▸</span>
                <span className="text-slate-300">
                  Musician &amp; creative on the side
                </span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <p className="text-sm font-mono text-muted uppercase tracking-widest mb-6">
              Skills &amp; Approach
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-md border border-white/10 bg-white/5 text-sm font-mono text-slate-300 hover:border-accent/40 hover:text-accent transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { value: "5+", label: "Years Building" },
                { value: "20+", label: "Projects Shipped" },
                { value: "∞", label: "Problems Solved" },
                { value: "1", label: "Good Dog" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="p-5 rounded-xl border border-white/8 bg-surface"
                >
                  <div className="text-3xl font-bold text-accent font-mono">
                    {value}
                  </div>
                  <div className="text-sm text-muted mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
