import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { useRef, useEffect } from "react";
import ThreeBackgroundSkills from "./ThreeBackgroundSkills";

const Skills = () => {
  const frontendSkills = [
    "React", "TypeScript", "JavaScript", "Next.js", "Vue.js", 
    "HTML5", "CSS3", "Tailwind CSS", "SCSS", "Styled Components"
  ];

  const pythonSkills = [
    "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"
  ];

  const interactiveElementRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactiveElementRef.current || !sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      const element = interactiveElementRef.current;
      const rotateX = (y - 0.5) * 30;
      const rotateY = (x - 0.5) * 30;
      const translateX = (x - 0.5) * 20;
      const translateY = (y - 0.5) * 20;
      
      element.style.transform = `
        rotateX(${-rotateX}deg) 
        rotateY(${rotateY}deg) 
        translateX(${translateX}px) 
        translateY(${translateY}px)
        translateZ(50px)
      `;
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-muted/30 relative overflow-hidden" style={{ perspective: '1000px' }}>
      {/* 3D Background */}
      <ThreeBackgroundSkills />
      
      {/* Corner skill icons */}
      <div className="absolute top-8 left-8 animate-float">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
          <span className="text-xs font-bold text-purple-600">&lt;/&gt;</span>
        </div>
      </div>
      <div className="absolute top-8 right-8 animate-float delay-300">
        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold text-cyan-600">JS</span>
        </div>
      </div>
      <div className="absolute bottom-8 left-8 animate-float delay-500">
        <div className="w-10 h-10 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg rotate-45 flex items-center justify-center">
          <span className="text-xs font-bold text-emerald-600 -rotate-45">⚛</span>
        </div>
      </div>
      <div className="absolute bottom-8 right-8 animate-float delay-700">
        <div className="w-10 h-10 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold text-yellow-600">TS</span>
        </div>
      </div>
      
      {/* Corner decorative lines */}
      <div className="absolute top-16 left-4 w-8 h-0.5 bg-gradient-to-r from-purple-500/40 to-transparent animate-pulse"></div>
      <div className="absolute top-4 left-16 w-0.5 h-8 bg-gradient-to-b from-purple-500/40 to-transparent animate-pulse delay-200"></div>
      <div className="absolute top-16 right-4 w-8 h-0.5 bg-gradient-to-l from-cyan-500/40 to-transparent animate-pulse delay-400"></div>
      <div className="absolute top-4 right-16 w-0.5 h-8 bg-gradient-to-b from-cyan-500/40 to-transparent animate-pulse delay-600"></div>
      <div className="absolute bottom-16 left-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500/40 to-transparent animate-pulse delay-800"></div>
      <div className="absolute bottom-4 left-16 w-0.5 h-8 bg-gradient-to-t from-emerald-500/40 to-transparent animate-pulse delay-1000"></div>
      
      {/* Large Interactive 3D Element */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none">
        <div 
          ref={interactiveElementRef}
          className="w-80 h-80 transition-transform duration-150 ease-out"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Main geometric shape */}
          <div className="relative w-full h-full">
            {/* Central hexagon */}
            <div className="absolute inset-0 border-4 border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm"
                 style={{ clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)' }}>
              <div className="absolute inset-4 border-2 border-cyan-500/40 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5"
                   style={{ clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)' }}></div>
            </div>
            
            {/* Floating tech symbols */}
            <div className="absolute top-12 left-12 w-8 h-8 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-lg flex items-center justify-center animate-float">
              <span className="text-white font-bold text-sm">⚛</span>
            </div>
            <div className="absolute top-16 right-16 w-8 h-8 bg-gradient-to-r from-cyan-500/40 to-blue-500/40 rounded-full flex items-center justify-center animate-float delay-200">
              <span className="text-white font-bold text-xs">TS</span>
            </div>
            <div className="absolute bottom-20 left-20 w-8 h-8 bg-gradient-to-r from-emerald-500/40 to-teal-500/40 rounded-lg flex items-center justify-center animate-float delay-400">
              <span className="text-white font-bold text-xs">JS</span>
            </div>
            <div className="absolute bottom-12 right-12 w-8 h-8 bg-gradient-to-r from-yellow-500/40 to-orange-500/40 rounded-full flex items-center justify-center animate-float delay-600">
              <span className="text-white font-bold text-xs">&lt;/&gt;</span>
            </div>
            
            {/* Central glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-radial from-purple-500/20 via-cyan-500/10 to-transparent rounded-full blur-xl"></div>
            
            {/* Orbiting particles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-spin-slow">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full opacity-60"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full opacity-60"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
      
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

        <div className="grid lg:grid-cols-2 gap-8 animate-fade-in delay-200">
          <Card className="hover-scale transition-all duration-500 hover:shadow-2xl border-0 bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-center bg-gradient-to-r from-foreground to-purple-600 bg-clip-text text-transparent">Frontend Development</CardTitle>
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

          <Card className="hover-scale transition-all duration-500 hover:shadow-2xl border-0 bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-center bg-gradient-to-r from-foreground to-emerald-600 bg-clip-text text-transparent">Python & Data Science</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex flex-wrap gap-2 justify-center">
                {pythonSkills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1 text-sm bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/20 hover:from-emerald-500/20 hover:to-blue-500/20 hover:border-emerald-500/40 transition-all duration-300 cursor-default hover-scale"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              
              {/* Floating sparkles */}
              <div className="absolute top-4 right-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="h-4 w-4 text-emerald-400 animate-pulse" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="h-4 w-4 text-blue-400 animate-pulse" />
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