import { motion } from "framer-motion";

const bullets = [
  "2+ years building production-grade mobile & web apps",
  "React Native + Native iOS (SwiftUI) — App Store shipped",
  "Full Stack MERN — Node.js, Express, MongoDB, REST & WebSockets",
  "AI-assisted dev with Cursor, Claude, Copilot & OpenAI integrations",
  "Delivered projects for US, UK, UAE & Canada clients",
];

const industries = ["Fintech", "Healthcare", "Fitness", "Travel", "News Media", "PropTech"];

export function About() {
  return (
    <section id="about" className="relative py-32 sm:py-40">
      <div className="aurora opacity-30" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">About</div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold leading-tight">
              Building the future of <span className="text-gradient">apps.</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              I'm Harshit — a React Native, Native iOS & Full Stack Developer based in Mohali, India.
              I handle the full product lifecycle: design systems, scalable Node.js APIs, polished
              SwiftUI experiences, and deployment pipelines.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              Over the past 2+ years I've shipped projects across
              <span className="text-foreground"> fintech, healthcare, fitness, travel, news media and PropTech</span> —
              from architecting Node.js backends to launching SwiftUI apps on the App Store.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I leverage AI tools like <span className="text-foreground">Cursor AI, Claude AI, GitHub Copilot and OpenAI</span> to
              accelerate development cycles while keeping code quality, performance and UX standards high.
            </p>
            <ul className="mt-6 grid gap-3">
              {bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className="flex items-start gap-3 text-sm"
                >
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan to-accent" />
                  <span className="text-foreground/90">{b}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {industries.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
