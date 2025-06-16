import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mt-12 mb-8">
          <img 
            src="/lovable-uploads/b819af2b-b77b-43af-897d-d69f33ee80c8.png" 
            alt="Garvit Hindoliya" 
            className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-primary mx-auto object-cover shadow-lg"
          />
        </div>
        <h1 className="text-5xl font-bold text-foreground mb-6 md:text-5xl">Garvit Hindoliya</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Frontend Developer
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          I craft beautiful, responsive web experiences with modern technologies. 
          Passionate about clean code, user experience, and bringing ideas to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="px-8 py-3 text-lg hover-scale">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover-scale">
            View My Work
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover-scale">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover-scale">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover-scale">
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>;
};
export default Hero;