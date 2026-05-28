import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  { name: "Decision Making", url: "https://www.icloud.com/iclouddrive/0daDaRs_xUgBV2xVaRYNfBdJQ#Harshit%5FSrivastav%5FHarvard%5FDecision%5FMaking%5FCertificate.pdf" },
  { name: "Business Plan Development", url: "https://www.icloud.com/iclouddrive/008rTNVAMXaKKIJ4SS9ggBz1g#Harshit%5FSrivastav%5FHarvard%5FBusiness%5FPlan%5FDevelopment%5FCertificate.pdf" },
  { name: "Digital Intelligence", url: "https://www.icloud.com/iclouddrive/0372zjb8mfLs8jxK6n5U2PM6A#Harshit%5FSrivastav%5FHarvard%5Fdigital%5Fintelligence%5FCertificate" },
  { name: "Diversity, Inclusion & Belonging", url: "https://www.icloud.com/iclouddrive/01b3IDop1zPeIDDN4nX3Ju6Ew#Harshit%5FSrivastav%5FHarvard%5Fdiversity%5FCertificate" },
  { name: "Ethics at Work", url: "https://www.icloud.com/iclouddrive/081Dyijn8rAibdwL9qNfDDS_g#Harshit%5FSrivastav%5FHarvard%5Fethics%5Fat%5Fwork%5FCertificate" },
  { name: "Innovation and Creativity", url: "https://www.icloud.com/iclouddrive/0c3wVXzYKFF1EauZqQSDZiE8A#Harshit%5FSrivastav%5FHarvard%5Finnovation%5Fand%5Fcreativity%5FCertificate" },
  { name: "Performance Measurement", url: "https://www.icloud.com/iclouddrive/033nX0H3v9MLmaTeyQzk5lA1w#Harshit%5FSrivastav%5FHarvard%5Fperformance%5Fmeasurement%5FCertificate" },
  { name: "Presentation Skills", url: "https://www.icloud.com/iclouddrive/0b64JlEp9k7h_I-IAJwiQNChA#Harshit%5FSrivastav%5FHarvard%5Fpresentation%5Fskills%5FCertificate" },
  { name: "Strategy Planning & Execution", url: "https://www.icloud.com/iclouddrive/09994L_lkzeFpR6M16R5CmH_A#Harshit%5FSrivastav%5FHarvard%5Fstrategy%5Fplanning%5Fand%5Fexecution%5FCertificate" },
  { name: "Team Management", url: "https://www.icloud.com/iclouddrive/041xPsIeUNb4481_T_BARi-dQ#Harshit%5FSrivastav%5FHarvard%5Fteam%5Fmanagement%5FCertificate" },
];

export function Certificates() {
  return (
    <section id="certificates" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Harvard certifications</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">Certificates & <span className="text-gradient">credentials.</span></h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">Professional development certifications from Harvard Business School Online programs.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 hover:glow-soft transition-shadow"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-violet/30 to-cyan/30 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start justify-between">
                <Award className="h-6 w-6 text-cyan" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Harvard</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{c.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground inline-flex items-center gap-1">
                View certificate <ExternalLink className="h-3 w-3" />
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
