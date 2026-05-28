import { motion } from "framer-motion";
import { Smartphone, Cpu, LayoutDashboard, Palette, Globe, Plug, Rocket, Database } from "lucide-react";

const services = [
  { icon: Smartphone, title: "Mobile App Development", text: "Cross-platform React Native apps with native polish, offline-first by default." },
  { icon: Cpu, title: "AI Automation", text: "Custom agents, RAG pipelines, and workflow systems wired into your stack." },
  { icon: LayoutDashboard, title: "SaaS Development", text: "From MVP to multi-tenant. Auth, billing, RBAC, and a UI that converts." },
  { icon: Palette, title: "UI/UX Engineering", text: "Pixel-true design implementation with motion that feels native to the brand." },
  { icon: Globe, title: "Web Applications", text: "Next.js apps tuned for speed, SEO, and accessibility from day one." },
  { icon: Plug, title: "API Integrations", text: "Stripe, Twilio, OpenAI, internal systems — clean, observable, and tested." },
  { icon: Rocket, title: "Startup MVP", text: "From napkin to launch in 4–6 weeks. Design, build, ship, iterate." },
  { icon: Database, title: "Admin Dashboards", text: "Internal tools your ops team will actually enjoy using." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Services</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">What I <span className="text-gradient">build for you.</span></h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">Senior-only engagements. I take on a small number of projects each quarter to keep quality uncompromising.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.06 }}
                className="group relative overflow-hidden rounded-2xl glass p-6 hover:bg-white/[0.06] transition-colors"
              >
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-cyan/25 to-accent/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Icon className="h-6 w-6 text-cyan" />
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
