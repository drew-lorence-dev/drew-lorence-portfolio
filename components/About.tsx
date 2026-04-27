const skills = [
  "Product Strategy",
  "Outcome-Driven Thinking",
  "Problem Framing",
  "Decision Clarity",
  "Team Leadership",
  "Coaching & Mentorship",
  "Empowered Teams",
  "Discovery Mindset",
  "Assumption Testing",
  "Cross-Functional Leadership",
  "Builder Mentality",
  "AI-Native Development",
  "Creative Thinking",
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
              responsible for real business outcomes. Today, I lead teams
              building digital experiences at scale, shaping strategy and
              making sure we&apos;re solving the right problems before we
              invest too deeply.
            </p>
            <p>
              At my core, I&apos;ve always been a builder. I started by writing
              code and staying close to the details, and over time that evolved
              into building teams, developing people, and creating clarity so
              teams can move with confidence. I care about helping people reach
              their potential and creating environments where teams take
              ownership and deliver meaningful outcomes.
            </p>
            <p>
              In practice, I spend a lot of time asking questions. Have we
              really validated this? What happens if this assumption is wrong?
              Where could this break once it&apos;s in the wild? I&apos;m not
              there to dictate decisions. I help teams think more clearly, see
              around corners, and make stronger calls on their own.
            </p>
            <p>
              I still love to build, and in my personal time I create apps,
              some just for me and others that I&apos;ve put out into the world
              for anyone to use. You&apos;ll find those below. That same drive
              to create shows up in my music as well. I&apos;ve been writing
              and recording most of my life, and in recent years I&apos;ve
              created custom rap songs in support of Kids Chance of America.
              Different medium, same goal. Create something that connects with
              people.
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
