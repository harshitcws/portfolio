import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Services } from "@/components/portfolio/Services";
import { Certificates } from "@/components/portfolio/Certificates";
import { Education } from "@/components/portfolio/Education";
import { TechStack } from "@/components/portfolio/TechStack";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CursorGlow } from "@/components/CursorGlow";
import { ClientOnly } from "@/components/ClientOnly";

const TITLE = "Harshit Srivastav — Full Stack & React Native Developer | SwiftUI & AI Engineer";
const DESC =
  "Hire Harshit Srivastav — React Native, Native iOS (SwiftUI) and Full Stack MERN developer from Mohali, India. Production apps shipped across fintech, healthcare, fitness, travel, news and PropTech.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <ClientOnly>
        <SmoothScroll />
        <CursorGlow />
      </ClientOnly>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Certificates />
      <Education />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
