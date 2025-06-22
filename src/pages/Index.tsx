
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import MachineLearningProjects from "@/components/MachineLearningProjects";
import Contact from "@/components/Contact";
import CrazySection from "@/components/CrazySection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CrazySection />
      <MachineLearningProjects />
      <Contact />
    </div>
  );
};

export default Index;
