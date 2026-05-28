import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Redux", "Bootstrap", "Materialize CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "MongoDB", "REST APIs", "Socket.IO", "WebSocket APIs"],
  },
  {
    title: "Mobile",
    items: ["React Native", "SwiftUI", "iOS Native (Swift)", "Android", "Xcode", "Android Studio"],
  },
  {
    title: "Tools & Platforms",
    items: ["Firebase", "Supabase", "Git / GitHub", "VS Code", "Webflow", "WordPress", "Elementor"],
  },
  {
    title: "AI Tools",
    items: ["Cursor AI", "Claude AI", "ChatGPT", "GitHub Copilot", "DeepSeek", "Bolt AI", "Gemini AI", "Lovable AI"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Tech stack</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">Skills & <span className="text-gradient">technologies.</span></h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            A modern arsenal of tools for building world-class mobile and web products.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 hover:glow-soft transition-shadow"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan/20 to-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-sm font-medium text-foreground">{g.title}</div>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <span key={it} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-muted-foreground">{it}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
