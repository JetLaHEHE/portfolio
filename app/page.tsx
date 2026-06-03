import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <BackToTop />
    </>
  );
}
