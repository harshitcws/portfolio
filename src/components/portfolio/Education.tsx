import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  { year: "2026 — Present", degree: "Master of Computer Applications (MCA)", school: "Chandigarh University", field: "MCA" },
  { year: "2018 — 2021", degree: "B.Sc. Mathematics, Physics & Chemistry", school: "Dr. Ram Manohar Lohia Avadh University", field: "B.Sc." },
  { year: "2017", degree: "Intermediate — Mathematics (12th)", school: "Mahatma Gandhi Smarak Inter College", field: "12th Grade" },
  { year: "2015", degree: "High School — Mathematics (10th)", school: "Raj Montessori Inter College", field: "10th Grade" },
];

export function Education() {
  return (
    <section id="education" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Academic background</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">Education & <span className="text-gradient">learning.</span></h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="relative overflow-hidden rounded-2xl glass p-6"
            >
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-cyan/20 to-accent/20 blur-2xl" />
              <GraduationCap className="h-6 w-6 text-cyan" />
              <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-cyan">{e.year}</div>
              <h3 className="mt-2 font-display text-base font-semibold leading-snug">{e.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
              <span className="mt-3 inline-block rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-muted-foreground">{e.field}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
