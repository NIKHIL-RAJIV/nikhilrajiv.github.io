import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Publications />
      <Skills />
      <Contact />
    </div>
  );
}
