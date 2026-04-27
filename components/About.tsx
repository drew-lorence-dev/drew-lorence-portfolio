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
              I&apos;m Drew, a product leader with over a decade of experience
              building software in the commercial insurance space. I&apos;ve
              grown from hands-on technical roles into leading product teams
              responsible for delivering real business outcomes. Today, I lead
              teams building digital experiences at scale, shaping strategy,
              setting direction, and making sure we&apos;re solving the right
              problems before we invest too deeply.
            </p>
            <p>
              At my core, I&apos;ve always been a builder. Earlier in my
              career, that meant writing code and getting close to the details.
              Over time, that evolved into building teams, developing people,
              and creating the clarity needed for teams to move with confidence.
              I care deeply about helping people reach their potential and
              creating environments where teams can take ownership, do real
              discovery, and deliver meaningful outcomes.
            </p>
            <p>
              In practice, that means I spend a lot of time asking questions.
              Have we really validated this? What happens if this assumption is
              wrong? Where could this break once it&apos;s in the wild?
              I&apos;m not there to dictate decisions or override direction.
              I&apos;m there to help teams think more clearly, see around
              corners, and make stronger calls on their own. When teams own
              their thinking, the outcomes are better and they grow faster.
            </p>
            <p>
              Outside of work, I&apos;ve always been drawn to creating through
              music. I&apos;ve been writing and recording for most of my life,
              and in recent years I&apos;ve created custom rap songs in support
              of Kids Chance of America. Those projects are included here
              because they&apos;re a real part of who I am. Different medium,
              same drive to create something that connects with people.
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

          </div>
        </div>
      </div>
    </section>
  );
}
