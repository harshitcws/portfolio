import { motion } from "framer-motion";

const stack = [
  "React Native", "SwiftUI", "Swift", "React.js", "Next.js", "JavaScript", "TypeScript",
  "Node.js", "Express.js", "NestJS", "MongoDB", "REST APIs", "Socket.IO", "WebSocket",
  "Firebase", "Supabase", "Redux", "Bootstrap", "Materialize CSS", "Webflow", "WordPress",
  "Elementor", "Xcode", "Android Studio", "Git", "GitHub", "Cursor AI", "Claude AI",
  "GitHub Copilot", "OpenAI", "ChatGPT", "Gemini AI",
];

export function TechStack() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 mb-10">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground text-center">Tech stack</div>
        <h2 className="mt-3 text-center font-display text-3xl sm:text-4xl font-semibold">The full toolkit.</h2>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          className="flex gap-3 whitespace-nowrap w-max"
        >
          {[...stack, ...stack].map((s, i) => (
            <span key={i} className="rounded-full glass px-5 py-2.5 text-sm font-mono text-muted-foreground">
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
