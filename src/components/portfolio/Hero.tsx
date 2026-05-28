import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Linkedin } from "lucide-react";
import { ClientOnly } from "@/components/ClientOnly";
import HeroScene from "@/components/three/HeroScene";

const stats = [
  { v: "2+", k: "Years experience" },
  { v: "20+", k: "Live projects" },
  { v: "6+", k: "Industries shipped" },
  { v: "10", k: "Harvard certs" },
];

const stackTags = ["React Native", "SwiftUI", "Next.js", "Node.js", "MongoDB", "Firebase", "Supabase", "OpenAI"];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden pt-24 sm:pt-28">
      <div className="aurora" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="noise" />

      <div className="absolute inset-0 -z-0 opacity-90">
        <ClientOnly>
          {/* <HeroScene /> */}
        </ClientOnly>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pt-16">
        <motion.div
          initial={{ y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
          className="mx-auto mb-6 flex w-max items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-cyan" />
          Available for opportunities · Mohali, India
        </motion.div>

        <motion.h1
          initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.05 }}
          className="text-balance text-center font-display text-[44px] sm:text-7xl md:text-8xl font-semibold leading-[1.02] tracking-tight"
        >
          <span className="block text-gradient-soft">Harshit Srivastav</span>
          <span className="mt-3 block text-gradient">Full Stack & Mobile App Developer.</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-center text-base sm:text-lg text-muted-foreground"
        >
          React Native, Native iOS (SwiftUI) & MERN engineer crafting production-grade apps across
          fintech, healthcare, fitness, travel, news and PropTech — shipped to the App Store, Play Store, and live web.
        </motion.p>

        <motion.div
          initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#work" className="btn-magnetic group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">
            View projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#contact" className="btn-magnetic inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium">
            Hire me
          </a>
          <a href="https://linkedin.com/in/harshit-s-srivastav" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium hover:bg-white/5">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {stackTags.map((t, i) => (
            <motion.span
              key={t}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3 + (i % 5) * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
              className="rounded-full glass px-3 py-1 text-xs text-muted-foreground"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl glass-strong sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.k} className="bg-background/40 p-6 text-center">
              <div className="font-display text-3xl sm:text-4xl font-semibold text-gradient">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.k}</div>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        Scroll
      </motion.div>
    </section>
  );
}
