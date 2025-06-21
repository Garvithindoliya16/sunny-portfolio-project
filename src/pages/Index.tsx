import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ThreeScene from "@/components/ThreeScene";
import MachineLearningProjects from "@/components/MachineLearningProjects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ThreeScene />
      <MachineLearningProjects />
      <Contact />
    </div>
  );
};

export default Index;
