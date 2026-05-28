import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const EMAIL = "harshitcws@gmail.com";
const PHONE_INTL = "917379810772";
const PHONE_DISPLAY = "+91 7379810772";
const LINKEDIN = "https://linkedin.com/in/harshit-s-srivastav";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32">
      <div className="aurora opacity-40" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Let's connect</div>
          <h2 className="mt-3 font-display text-4xl sm:text-6xl font-semibold leading-tight">
            Ready to build something <span className="text-gradient">amazing?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Whether you're building a mobile app, web platform or AI-powered product —
            I'd love to hear about it. I reply within 24 hours.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <motion.form
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget as HTMLFormElement);
              const body = `Hi Harshit,%0D%0A%0D%0A${encodeURIComponent(String(f.get("message") || ""))}%0D%0A%0D%0A— ${encodeURIComponent(String(f.get("name") || ""))} (${encodeURIComponent(String(f.get("email") || ""))})`;
              window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("New project inquiry")}&body=${body}`;
              setSent(true);
            }}
            className="relative overflow-hidden rounded-3xl p-px"
          >
            <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(from_0deg,oklch(0.86_0.17_200/0.6),oklch(0.65_0.25_300/0.6),oklch(0.7_0.22_245/0.6),oklch(0.86_0.17_200/0.6))] animate-[spin_8s_linear_infinite] opacity-60" />
            <div className="relative rounded-3xl bg-background/80 p-8 backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Name</span>
                  <input name="name" required className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan/50" placeholder="Your full name" />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                  <input name="email" type="email" required className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan/50" placeholder="you@company.com" />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Project</span>
                <textarea name="message" rows={5} required className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-cyan/50" placeholder="Tell me about your project, timeline, and platforms (iOS / Android / Web)." />
              </label>
              <button type="submit" className="btn-magnetic mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background">
                <Send className="h-4 w-4" /> {sent ? "Opening email…" : "Send inquiry"}
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-3"
          >
            <a href={`mailto:${EMAIL}`} className="group rounded-2xl glass p-5 flex items-center gap-4 hover:bg-white/[0.06] transition-colors">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan to-primary text-background"><Mail className="h-5 w-5" /></div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="truncate text-sm">{EMAIL}</div>
              </div>
            </a>
            <a href={`tel:+${PHONE_INTL}`} className="group rounded-2xl glass p-5 flex items-center gap-4 hover:bg-white/[0.06] transition-colors">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan text-background"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Call</div>
                <div className="text-sm">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a href={`https://wa.me/${PHONE_INTL}`} target="_blank" rel="noreferrer" className="group rounded-2xl glass p-5 flex items-center gap-4 hover:bg-white/[0.06] transition-colors">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-background"><MessageCircle className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                <div className="text-sm">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="group rounded-2xl glass p-5 flex items-center gap-4 hover:bg-white/[0.06] transition-colors">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-background"><Linkedin className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</div>
                <div className="text-sm">harshit-s-srivastav</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
