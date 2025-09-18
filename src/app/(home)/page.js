import Home from "@/app/home/Home";
import About from "@/app/about/About";
import Projects from "@/app/projects/Projects";

export default function Init() {
  return (
    <>
      <section id="top" className="scroll-mt-16">
        <Home />
      </section>
      <section id="about" className="scroll-mt-16">
        <About />
      </section>
      <section id="projects" className="scroll-mt-16">
        <Projects />
      </section>
    </>
  );
}
