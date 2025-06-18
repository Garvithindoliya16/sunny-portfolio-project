import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import ThreeBackground from "./ThreeBackground";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* 3D Background */}
      <ThreeBackground />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-500" />
      
      {/* Corner decorative elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-2 border-purple-500/20 rounded-lg rotate-45 animate-spin-slow"></div>
      <div className="absolute top-8 right-8 w-20 h-20 border-2 border-cyan-500/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-bounce delay-200"></div>
      <div className="absolute bottom-8 right-8 w-14 h-14 border-2 border-emerald-500/30 rounded-lg rotate-12 animate-pulse delay-700"></div>
      
      {/* Corner sparkle effects */}
      <div className="absolute top-16 left-20 animate-ping">
        <Sparkles className="h-4 w-4 text-purple-400 opacity-60" />
      </div>
      <div className="absolute top-20 right-16 animate-ping delay-300">
        <Sparkles className="h-5 w-5 text-cyan-400 opacity-50" />
      </div>
      <div className="absolute bottom-16 left-16 animate-ping delay-500">
        <Sparkles className="h-3 w-3 text-pink-400 opacity-70" />
      </div>
      <div className="absolute bottom-20 right-20 animate-ping delay-1000">
        <Sparkles className="h-4 w-4 text-emerald-400 opacity-60" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <div className="mt-12 mb-8 relative">
          {/* Glowing effect behind image */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full blur-lg opacity-30 animate-pulse scale-110" />
          
          <img 
            src="/lovable-uploads/b819af2b-b77b-43af-897d-d69f33ee80c8.png" 
            alt="Garvit Hindoliya" 
            className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-primary mx-auto object-cover shadow-2xl relative z-10 hover-scale transition-all duration-500 hover:border-purple-400"
          />
          
          {/* Floating sparkles */}
          <div className="absolute -top-4 -right-4 animate-bounce delay-100">
            <Sparkles className="h-6 w-6 text-yellow-400" />
          </div>
          <div className="absolute -bottom-4 -left-4 animate-bounce delay-300">
            <Sparkles className="h-4 w-4 text-purple-400" />
          </div>
        </div>
        
        <div className="space-y-2 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-2 animate-fade-in">
            Garvit Hindoliya
          </h1>
          <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-muted-foreground animate-fade-in delay-200">
            <Sparkles className="h-5 w-5 text-purple-400 animate-pulse" />
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent font-semibold">
              Frontend Developer
            </span>
            <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in delay-300">
          I craft beautiful, responsive web experiences with modern technologies. 
          Passionate about clean code, user experience, and bringing ideas to life through innovation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-500">
          <Button size="lg" className="px-8 py-3 text-lg hover-scale bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-lg hover-scale border-2 border-purple-600/50 hover:border-purple-600 hover:bg-purple-600/10 transition-all duration-300">
            View My Work
          </Button>
        </div>

        <div className="flex justify-center space-x-8 mb-12 animate-fade-in delay-700">
          <a href="https://github.com/Garvithindoliya16" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full bg-muted/30 backdrop-blur-sm hover:bg-purple-600/20 transition-all duration-300 hover-scale">
            <Github className="h-6 w-6 text-muted-foreground group-hover:text-purple-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/garvithindoliya/" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-full bg-muted/30 backdrop-blur-sm hover:bg-cyan-600/20 transition-all duration-300 hover-scale">
            <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
          </a>
          <a href="mailto:garvithindoliyaprojects@gmail.com" className="group p-3 rounded-full bg-muted/30 backdrop-blur-sm hover:bg-pink-600/20 transition-all duration-300 hover-scale">
            <Mail className="h-6 w-6 text-muted-foreground group-hover:text-pink-400 transition-colors" />
          </a>
        </div>

        <div className="animate-bounce delay-1000">
          <div className="p-2 rounded-full bg-muted/30 backdrop-blur-sm inline-block">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;