import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-cyan via-primary to-accent"
      />
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${
          scrolled ? "w-[94%] max-w-5xl" : "w-[96%] max-w-6xl"
        }`}
      >
        <div className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 ${scrolled ? "glass-strong" : "glass"}`}>
          <a href="#top" className="flex items-center gap-2 font-display font-semibold">
            <span className="grid place-items-center h-8 w-8 rounded-full bg-gradient-to-br from-cyan to-accent text-[13px] text-background font-bold">HS</span>
            <span className="hidden sm:inline text-sm tracking-tight">Harshit<span className="text-muted-foreground">.dev</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground transition-colors hover:bg-white/5">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex btn-magnetic items-center rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium hover:bg-white/10"
            >
              Hire me →
            </a>
            <button onClick={() => setOpen(true)} className="md:hidden p-2 rounded-full hover:bg-white/5" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-background/90 backdrop-blur-xl md:hidden"
        >
          <div className="flex items-center justify-between p-6">
            <span className="font-display font-semibold">Menu</span>
            <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-white/5" aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center gap-4 pt-10 text-2xl font-display">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-gradient">{l.label}</a>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
}
