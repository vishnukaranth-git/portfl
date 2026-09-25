import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import BrandMoment from "@/components/BrandMoment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080c16] text-[#f1f5f9] selection:bg-electric-400/30 selection:text-white">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Global Fixed Navbar */}
      <Navbar />

      {/* 500vh Scrollytelling Hero Canvas Experience */}
      <ScrollyCanvas />

      {/* Content flow following the cinematic opening */}
      <div className="relative z-20 bg-[#080c16]">
        {/* About Section */}
        <About />

        {/* Education Section */}
        <Education />

        {/* Experience Section */}
        <Experience />

        {/* Selected Work (SkillSync AI, ORCA, HYDRA, DocuMind) */}
        <Projects />

        {/* Technical Arsenal (Skills) */}
        <Skills />

        {/* Achievements (Top 20 Google, Top 15 HackArena, HackBriven) */}
        <Achievements />

        {/* Certifications & Programs */}
        <Certifications />

        {/* Personal Brand Moment */}
        <BrandMoment />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
