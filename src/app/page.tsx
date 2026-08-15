import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero/hero";
import { About } from "@/components/sections/about/about";
import { Education } from "@/components/sections/education/education";
import { Experience } from "@/components/sections/experience/experience";
import Projects from "@/components/projects/projects";
import { Skills } from "@/components/sections/skills/skills";
import { Certifications } from "@/components/sections/certifications/certifications";
import { Activities } from "@/components/sections/activities/activities";
import { Contact } from "@/components/sections/contact/contact";
import { Footer } from "@/components/layout/footer";
import { Chatbot } from "@/components/chat/chatbot";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Activities />
        <Contact />
      </main>

      <Footer />

      <Chatbot />
    </>
  );
}