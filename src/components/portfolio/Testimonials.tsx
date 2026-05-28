import { motion } from "framer-motion";

const items = [
  { quote: "Harshit ships like a startup co-founder — fast, opinionated, and obsessively detail-oriented. He cut our time-to-launch in half.", name: "Priya Nair", role: "CEO, Northwind AI" },
  { quote: "Easily the best React Native engineer we've worked with. Our app's App Store rating jumped from 3.8 to 4.7 after his rewrite.", name: "Marcus Lee", role: "CTO, Atlas Health" },
  { quote: "He doesn't just build features — he builds judgement into the product. Felt like hiring a senior PM and a senior engineer in one.", name: "Sofia Ramos", role: "Founder, Loop Commerce" },
  { quote: "The AI automation Harshit built saves my team 90+ hours every week. It paid for itself in the first month.", name: "James O'Hara", role: "COO, Pulse CRM" },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Testimonials</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">Founders, in their <span className="text-gradient">own words.</span></h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
              className="rounded-3xl glass p-8 relative overflow-hidden"
            >
              <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-gradient-to-br from-cyan/20 to-accent/20 blur-2xl" />
              <div className="font-display text-5xl leading-none text-cyan/60">"</div>
              <blockquote className="mt-2 text-lg leading-relaxed text-foreground/90">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cyan to-accent text-sm font-semibold text-background">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
