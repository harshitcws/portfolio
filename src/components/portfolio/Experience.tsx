import { motion } from "framer-motion";

const items = [
  {
    year: "Sep 2024 — Present",
    role: "Full Stack Developer",
    org: "Cloud Web Solutions · Mohali, India",
    bullets: [
      "Developing scalable mobile & web apps using React Native, SwiftUI, React.js, Next.js, Node.js, Express.js and MongoDB.",
      "Built admin dashboards, onboarding systems, authentication workflows and backend APIs.",
      "Integrated Firebase services, REST APIs and responsive frontend architectures.",
      "Optimized application performance across Android, iOS and web platforms.",
      "Leveraged AI tools (Cursor, Copilot, Claude AI) for code optimization, debugging and UI generation.",
    ],
    projects: ["CryptiView", "Nutrly", "DeeDash", "Smart Landlord", "BlastFit", "Big Boy Toyz", "Dubai Gazette", "Traveler Stalk Digest", "NurseNotes News"],
  },
  {
    year: "Sep 2023 — Sep 2024",
    role: "MERN Stack Developer",
    org: "Cloud Web Solutions · Mohali, India",
    bullets: [
      "Developed MERN stack applications and responsive frontend systems.",
      "Worked with Webflow, WordPress and Elementor implementations.",
      "Built scalable client platforms and media/news applications.",
      "Created reusable UI components and optimized frontend performance.",
    ],
    projects: ["Imperium Group PR", "Nyartisinal", "London Herald Tribune", "AI Frontier Dispatch", "The Insightful Globe", "LA Influence", "Wellness World Weekly", "Vancouver Weekly"],
  },
  {
    year: "Jan 2022 — Sep 2023",
    role: "Software Development Intern",
    org: "Meander Software · Mohali, India",
    bullets: [
      "Assisted in frontend web development and responsive UI implementation.",
      "Worked with HTML, CSS, JavaScript and frontend technologies.",
      "Learned software development workflows and collaborative development practices.",
    ],
    projects: [],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Experience</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">Professional <span className="text-gradient">history.</span></h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">Building real-world, production-level applications for clients across the US, UK, UAE and Canada.</p>
        </div>

        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          <div className="space-y-10">
            {items.map((it, i) => (
              <motion.div
                key={it.year}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="relative pl-12"
              >
                <div className="absolute left-1.5 top-2 grid h-3 w-3 place-items-center rounded-full bg-gradient-to-br from-cyan to-accent shadow-[0_0_20px] shadow-cyan/60" />
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{it.year}</div>
                <div className="mt-1 font-display text-xl font-semibold">{it.role}</div>
                <div className="text-sm text-cyan">{it.org}</div>
                <ul className="mt-4 space-y-2">
                  {it.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-cyan/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {it.projects.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {it.projects.map((p) => (
                      <span key={p} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-muted-foreground">{p}</span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
