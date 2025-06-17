import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import ThreeBackgroundSkills from "./ThreeBackgroundSkills";

const Skills = () => {
  const frontendSkills = [
    "React", "TypeScript", "JavaScript", "Next.js", "Vue.js", 
    "HTML5", "CSS3", "Tailwind CSS", "SCSS", "Styled Components"
  ];

  return (
    <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* 3D Background */}
      <ThreeBackgroundSkills />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-purple-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <Sparkles className="h-6 w-6 text-cyan-400 animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="flex justify-center animate-fade-in delay-200">
          <Card className="hover-scale transition-all duration-500 hover:shadow-2xl w-full max-w-2xl border-0 bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-center bg-gradient-to-r from-foreground to-purple-600 bg-clip-text text-transparent">Frontend Skills</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex flex-wrap gap-2 justify-center">
                {frontendSkills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1 text-sm bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border-purple-500/20 hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-default hover-scale"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              
              {/* Floating sparkles */}
              <div className="absolute top-4 right-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="h-4 w-4 text-purple-400 animate-pulse" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center animate-fade-in delay-400">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-purple-600 bg-clip-text text-transparent mb-8">Always Learning</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The web development landscape is constantly evolving, and I love keeping up with the latest trends 
            and technologies. Currently exploring Web3, AI integration, and advanced React patterns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;