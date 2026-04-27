import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const experience = [
  {
    company: "Berkley Technology Services",
    location: "Manassas, Virginia · Hybrid",
    roles: [
      {
        title: "Director, Product Vertical",
        period: "Jan 2026 – Present",
        duration: "4 mos",
      },
    ],
  },
  {
    company: "Berkley Alternative Markets Tech",
    location: "Manassas, Virginia",
    totalTenure: "6 yrs 6 mos",
    roles: [
      {
        title: "Director, Strategy & Business Engagement",
        period: "Aug 2023 – Jan 2026",
        duration: "2 yrs 6 mos",
        mode: "Hybrid",
      },
      {
        title: "Business Engagement Manager",
        period: "Nov 2022 – Aug 2023",
        duration: "10 mos",
        mode: "Hybrid",
      },
      {
        title: "Group Product Manager",
        period: "Mar 2021 – Nov 2022",
        duration: "1 yr 9 mos",
        mode: "Hybrid",
      },
      {
        title: "Product Delivery Lead",
        period: "Aug 2019 – Mar 2021",
        duration: "1 yr 8 mos",
        mode: "On-site",
      },
    ],
  },
  {
    company: "BerkleyNet (a Berkley Company)",
    location: "Virginia",
    totalTenure: "5 yrs 5 mos",
    roles: [
      {
        title: "Software Delivery Lead",
        period: "Sep 2018 – Aug 2019",
        duration: "1 yr",
        location: "Manassas, Virginia",
      },
      {
        title: "Software Developer",
        period: "Sep 2017 – Aug 2018",
        duration: "1 yr",
        location: "Manassas, Virginia",
      },
      {
        title: "Junior Software Developer",
        period: "Sep 2016 – Aug 2017",
        duration: "1 yr",
        location: "Woodbridge, Virginia",
      },
      {
        title: "Senior Systems Specialist",
        period: "Mar 2016 – Sep 2016",
        duration: "7 mos",
        location: "Woodbridge, Virginia",
      },
      {
        title: "Systems Specialist",
        period: "Apr 2014 – Mar 2016",
        duration: "2 yrs",
        location: "Woodbridge, Virginia",
      },
    ],
  },
  {
    company: "Insight Global",
    location: "Arlington, VA",
    roles: [
      {
        title: "Tier II Desktop Support",
        period: "Dec 2012 – Apr 2014",
        duration: "1 yr 5 mos",
      },
    ],
  },
  {
    company: "Lorence Construction Company",
    location: "Virginia, Maryland and Washington, DC",
    roles: [
      {
        title: "Carpenter",
        period: "Jan 2005 – Dec 2011",
        duration: "7 yrs",
      },
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-page text-slate-200 flex flex-col">
      <Nav />

      <main className="flex-1 pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Header */}
          <div className="mb-16">
            <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">
              Experience
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My Experience
            </h1>
            <p className="text-slate-400 leading-relaxed text-base max-w-xl">
              Over a decade building software and leading product teams in the
              commercial insurance space — from writing code to setting direction.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {experience.map((entry) => (
              <div
                key={entry.company}
                className="rounded-2xl border border-white/8 bg-surface overflow-hidden"
              >
                {/* Company header */}
                <div className="px-6 py-5 border-b border-white/5 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold text-white">{entry.company}</h2>
                    <p className="text-xs font-mono text-muted mt-0.5">{entry.location}</p>
                  </div>
                  {entry.totalTenure && (
                    <span className="text-xs font-mono text-accent shrink-0 mt-1">
                      {entry.totalTenure}
                    </span>
                  )}
                </div>

                {/* Roles */}
                <div className="divide-y divide-white/5">
                  {entry.roles.map((role) => (
                    <div
                      key={role.title + role.period}
                      className="px-6 py-4 flex items-start justify-between gap-4"
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-200">
                          {role.title}
                        </p>
                        <p className="text-xs font-mono text-muted mt-1">
                          {role.period}
                          {"mode" in role && role.mode ? ` · ${role.mode}` : ""}
                          {"location" in role && role.location ? ` · ${role.location}` : ""}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-muted/50 shrink-0 mt-0.5">
                        {role.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
