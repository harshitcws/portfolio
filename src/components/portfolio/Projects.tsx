
import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Youtube,Apple } from "lucide-react";

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  status: string;
  youtube?: string;
   youtubelink: string;
  link?: { label: string; url: string };
};

const getYoutubeId = (url: string) => {
  const regExp =
    /(?:youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtu\.be\/)([^?&]+)/;

  return url.match(regExp)?.[1];
};

const getYoutubeThumbnail = (url: string) => {
  const id = getYoutubeId(url);
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
};

const projects: Project[] = [
    {
    title: "CryptiView",
    category: "Fintech · Crypto Platform",
    description:
      "Real-time cryptocurrency tracking and portfolio management app with AI-powered insights and live market analytics.",
    tags: ["React Native", "Node.js", "MongoDB"],
    gradient: "from-cyan-400 to-blue-600",
    status: "Crypto Analytics",
    youtube:
      "https://www.youtube.com/embed/OHKvfL-_Vqs?si=DMiaOyBE2K2bXYbs",
    youtubelink: "https://www.youtube.com/watch?v=OHKvfL-_Vqs",

    link: {
  label: "Live ",
  url: "https://cryptiview.com/",
},
  },
  {
    title: "Big Boy Toyz",
    category: "Luxury Cars · Mobile App",
    description:
      "Premium luxury automobile showcase platform featuring high-end supercars, smooth browsing experience and immersive UI animations.",
    tags: ["React Native", "Node.js", "MongoDB"],
    gradient: "from-zinc-700 to-black",
    status: "Luxury UI",
    youtube:
      "https://www.youtube.com/embed/lxMUG5MXOhs?si=VF1DkU964YJTZnnq",
    youtubelink: "https://www.youtube.com/watch?v=lxMUG5MXOhs",
  },

  {
    title: "Voyage Uncovered",
    category: "Travel · Lifestyle",
    description:
      "All-in-one travel and lifestyle application featuring destination guides, luxury travel experiences, trending travel news and personalized content delivery.",
    tags: ["React Native", "Node.js", "MongoDB"],
    gradient: "from-amber-400 to-orange-600",
    status: "Travel Platform",
    youtube:
      "https://www.youtube.com/embed/Y3SQ1BLSmJQ?si=20pGBR001p1yB_3V",
    youtubelink: "https://www.youtube.com/watch?v=Y3SQ1BLSmJQ",
  },

  {
    title: "DeeDash Calling",
    category: "Healthcare · Mobile",
    description:
      "Doctor appointment booking application with one-tap calling, availability scheduling and seamless patient–doctor communication workflows.",
    tags: ["React Native", "REST APIs", "Node.js"],
    gradient: "from-rose-400 to-pink-600",
    status: "Android & iOS",
    youtube:
      "https://www.youtube.com/embed/tCoUMHF9Tkk?si=jsExrgeA68WQyj_Y",
    youtubelink: "https://www.youtube.com/watch?v=tCoUMHF9Tkk",
  },

  {
    title: "Nutrly",
    category: "Health · Cross-Platform",
    description:
      "Nutrition tracking application with barcode scanning, BMI calculator, calorie tracking, admin dashboard and personalized health insights.",
    tags: ["React Native", "MongoDB", "Node.js"],
    gradient: "from-lime-400 to-emerald-500",
    status: "Health Tracking",
    youtube:
      "https://www.youtube.com/embed/tlLIbyCBiyE?si=xDgt9Cwii9b6MD9p",
    youtubelink: "https://www.youtube.com/watch?v=tlLIbyCBiyE",
    link: {
         label: "Live ",
  url: "https://morraapps.com/nutrly/",
  },
},
  

  {
    title: "Smart Landlord",
    category: "PropTech · Property Management",
    description:
      "Property and rent management app with tenant tracking, rent workflows, smart analytics and modern glassmorphism-inspired UI.",
    tags: ["SwiftUI", "Node.js", "iOS"],
    gradient: "from-violet-500 to-fuchsia-500",
    status: "Property Tech",
    youtube:
      "https://www.youtube.com/embed/OEluUF0Ny1Y?si=iQYneFjT0wvFs-uZ",
    youtubelink: "https://www.youtube.com/watch?v=OEluUF0Ny1Y",
  },

  {
    title: "BlastFit",
    category: "Fitness · Full Stack",
    description:
      "Smart workout and fitness platform with calorie management, BMI tracking, diet planning and real-time admin dashboard.",
    tags: ["React Native", "Node.js", "MongoDB"],
    gradient: "from-orange-400 to-pink-500",
    status: "Fitness Platform",
    youtube:
      "https://www.youtube.com/embed/hVIBpYLYGxU?si=2vc2MY8EWToUdj4c",
    youtubelink: "https://www.youtube.com/watch?v=hVIBpYLYGxU",
    link: {
         label:  "Live ",
  url: "https://morraapps.com/blastfit/",
  }
  },

  {
    title: "Modern Landlord",
    category: "Real Estate · iOS",
    description:
      "Modern property management solution with elegant UI, tenant workflows, analytics dashboard and optimized iOS experience.",
    tags: ["SwiftUI", "iOS", "Node.js"],
    gradient: "from-indigo-500 to-purple-600",
    status: "Modern UI",
    youtube:
      "https://www.youtube.com/embed/tb9Wko5dIhc?si=aL_rSZRkZ0b5r0me",
    youtubelink: "https://www.youtube.com/watch?v=tb9Wko5dIhc",
  },

  {
    title: "SinceWeMet",
    category: "Relationship · Mobile",
    description:
      "Couples relationship tracker app with anniversary reminders, smart widgets, memory timelines and personalized notifications.",
    tags: ["React Native", "Local Storage"],
    gradient: "from-fuchsia-500 to-rose-400",
    status: "Relationship App",
    youtube:
      "https://www.youtube.com/embed/FRB_eG7LYmY?si=V39nhDbKH5Tsotc4",
    youtubelink: "https://www.youtube.com/watch?v=FRB_eG7LYmY",
  },

  {
    title: "Evenflow Tracker",
    category: "Finance · iOS",
    description:
      "Expense and finance tracker application with categorized spending, visual dashboards and elegant dark-mode UI.",
    tags: ["SwiftUI", "iOS", "Xcode"],
    gradient: "from-blue-500 to-indigo-600",
    status: "Finance Tracker",
    youtube:
      "https://www.youtube.com/embed/cxM9vK49VPs?si=IqpNs7CCjUjrBOqC",
    youtubelink: "https://www.youtube.com/watch?v=cxM9vK49VPs",
  },

  {
    title: "Cretos",
    category: "Fitness · iOS",
    description:
      "Modern gym and workout app featuring real-time backend integration, smart exercise tracking and premium iOS UI.",
    tags: ["SwiftUI", "Supabase", "OpenAI"],
    gradient: "from-emerald-400 to-cyan-500",
    status: "Gym Platform",
    youtube:
      "https://www.youtube.com/embed/g-CZCNiEJCg?si=0Jqf4q2KXwS6z2NQ",
    youtubelink: "https://www.youtube.com/watch?v=g-CZCNiEJCg",
  },

  {
    title: "Anime Coloring App",
    category: "Kids · Creativity",
    description:
      "Interactive coloring app for kids with anime illustrations, real-time admin control and engaging creative tools.",
    tags: ["React Native", "Admin Panel", "Realtime DB"],
    gradient: "from-pink-500 to-violet-500",
    status: "Kids App",
    youtube:
      "https://www.youtube.com/embed/THNsAgPlUGo?si=af2SVfMcJg10dsNf",
    youtubelink: "https://www.youtube.com/watch?v=THNsAgPlUGo",
  },
];

function Card({ p, i }: { p: Project; i: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;

    if (!el) return;

    const r = el.getBoundingClientRect();

    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;

    el.style.transform = `
      perspective(900px)
      rotateX(${-y * 6}deg)
      rotateY(${x * 8}deg)
      translateZ(0)
    `;
  };

  const onLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "";
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: (i % 3) * 0.08,
      }}
      className="group"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative overflow-hidden rounded-3xl glass shine transition-transform duration-300 will-change-transform"
      >
        <div className="relative aspect-[16/10] overflow-hidden">

          {/* Thumbnail / Video */}
          {p.youtube ? (
            <>
              {/* Thumbnail */}
              <img
                src={getYoutubeThumbnail(p.youtube)}
                alt={p.title}
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover
                  transition-all duration-500
                  group-hover:scale-110
                  group-hover:opacity-0
                "
              />

              {/* Video */}
              <iframe
                className="
                  absolute inset-0
                  h-full w-full
                  scale-[1.02]
                  opacity-0
                  transition-opacity duration-500
                  group-hover:opacity-100
                  pointer-events-none
                "
                src={`https://www.youtube.com/embed/${getYoutubeId(
                  p.youtube
                )}?autoplay=1&mute=1&controls=0&loop=1&playlist=${getYoutubeId(
                  p.youtube
                )}&playsinline=1&rel=0&modestbranding=1`}
                title={p.title}
                allow="autoplay"
              />
            </>
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`}
            />
          )}

          {/* Glow Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_55%)]" />

          {/* Dark Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

          {/* Category */}
          <div className="absolute left-5 top-5 rounded-full glass-strong px-3 py-1 text-[11px] uppercase tracking-widest">
            {p.category}
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
            <h3 className="font-display text-2xl font-semibold drop-shadow-lg">
              {p.title}
            </h3>

            <span className="rounded-full bg-background/60 px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
              {p.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-sm text-muted-foreground">
            {p.description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="
                  rounded-full
                  border border-white/10
                  px-2 py-0.5
                  text-[10px]
                  text-muted-foreground
                "
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-5 flex items-center gap-2">
            {p.youtubelink && (
              <a
                href={p.youtubelink}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-1.5
                  rounded-full
                  bg-red-500/10
                  px-3 py-1.5
                  text-xs text-red-400
                  hover:bg-red-500/20
                  transition-colors
                "
              >
                <Youtube className="h-3.5 w-3.5" />
                YouTube
              </a>
            )}
{p.appStore && (
    <a
      href={p.appStore}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex items-center gap-1.5
        rounded-full
        bg-white/10
        px-3 py-1.5
        text-xs text-white
        hover:bg-white/20
        transition-colors
      "
    >
      <Apple className="h-3.5 w-3.5" />
      App Store
    </a>
  )}
            {p.link && (
              <a
                href={p.link.url}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-1.5
                  rounded-full
                  glass
                  px-3 py-1.5
                  text-xs
                  hover:bg-white/[0.08]
                  transition-colors
                "
              >
                {p.link.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Featured work
            </div>

            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold">
              Production{" "}
              <span className="text-gradient">
                projects.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm text-muted-foreground">
            Real apps shipped to the App Store,
            Play Store and live web — used by real users.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Card
              key={p.title}
              p={p}
              i={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}