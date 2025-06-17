import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Sparkles, Trophy, Target } from "lucide-react";
import ThreeBackgroundAbout from "./ThreeBackgroundAbout";

const About = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* 3D Background */}
      <ThreeBackgroundAbout />
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl animate-pulse delay-500" />
      
      {/* Corner tech elements */}
      <div className="absolute top-6 left-6 animate-float">
        <div className="w-8 h-8 border-2 border-purple-500/30 transform rotate-45">
          <div className="w-2 h-2 bg-purple-500/50 rounded-full absolute top-1 left-1"></div>
          <div className="w-2 h-2 bg-cyan-500/50 rounded-full absolute bottom-1 right-1"></div>
        </div>
      </div>
      <div className="absolute top-6 right-6 animate-float delay-200">
        <Code className="h-8 w-8 text-cyan-500/40 animate-pulse" />
      </div>
      <div className="absolute bottom-6 left-6 animate-float delay-400">
        <div className="w-6 h-6 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full animate-spin-slow"></div>
      </div>
      <div className="absolute bottom-6 right-6 animate-float delay-600">
        <Target className="h-7 w-7 text-purple-500/40 animate-pulse" />
      </div>
      
      {/* Corner grid pattern */}
      <div className="absolute top-16 left-16 w-12 h-12 opacity-20">
        <div className="grid grid-cols-3 gap-1 h-full">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-purple-500/30 rounded-sm animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
          ))}
        </div>
      </div>
      <div className="absolute top-16 right-16 w-12 h-12 opacity-20">
        <div className="grid grid-cols-3 gap-1 h-full">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-cyan-500/30 rounded-sm animate-pulse" style={{ animationDelay: `${i * 150}ms` }}></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-purple-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <Sparkles className="h-6 w-6 text-cyan-400 animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate frontend developer with 5+ years of experience creating 
            digital experiences that users love. I believe in writing clean, maintainable 
            code and staying up-to-date with the latest web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="group hover-scale transition-all duration-500 hover:shadow-2xl border-0 bg-gradient-to-br from-background to-muted/50 relative overflow-hidden animate-fade-in delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-8 text-center relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-purple-600 transition-colors">Clean Code</h3>
              <p className="text-muted-foreground">
                I write maintainable, scalable code following best practices and modern standards.
              </p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="h-4 w-4 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="group hover-scale transition-all duration-500 hover:shadow-2xl border-0 bg-gradient-to-br from-background to-muted/50 relative overflow-hidden animate-fade-in delay-400">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-8 text-center relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-cyan-600 transition-colors">Design Focus</h3>
              <p className="text-muted-foreground">
                Strong eye for design and user experience, creating interfaces that look great and work intuitively.
              </p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="h-4 w-4 text-cyan-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="group hover-scale transition-all duration-500 hover:shadow-2xl border-0 bg-gradient-to-br from-background to-muted/50 relative overflow-hidden animate-fade-in delay-600">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-8 text-center relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-emerald-600 transition-colors">Performance</h3>
              <p className="text-muted-foreground">
                Optimized, fast-loading applications that provide excellent user experiences across all devices.
              </p>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="h-4 w-4 text-emerald-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-muted/50 to-muted/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-muted/50 shadow-2xl animate-fade-in delay-800 relative overflow-hidden">
          {/* Floating elements inside the card */}
          <div className="absolute top-4 right-4 animate-bounce delay-100">
            <Trophy className="h-6 w-6 text-yellow-400 opacity-60" />
          </div>
          <div className="absolute bottom-4 left-4 animate-bounce delay-300">
            <Target className="h-5 w-5 text-purple-400 opacity-60" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-purple-600 bg-clip-text text-transparent mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Started my journey in web development 5 years ago with a curiosity about how 
                websites work. Since then, I've worked with startups and established companies, 
                helping them bring their digital visions to life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="space-y-6">
              <div className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground font-medium group-hover:text-purple-600 transition-colors">Frontend Development</span>
                  <span className="text-muted-foreground">95%</span>
                </div>
                <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full shadow-lg transition-all duration-1000 hover:shadow-purple-500/50" style={{ width: '95%' }}></div>
                </div>
              </div>

              <div className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground font-medium group-hover:text-cyan-600 transition-colors">React/TypeScript</span>
                  <span className="text-muted-foreground">90%</span>
                </div>
                <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full shadow-lg transition-all duration-1000 hover:shadow-cyan-500/50" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground font-medium group-hover:text-emerald-600 transition-colors">UI/UX Design</span>
                  <span className="text-muted-foreground">85%</span>
                </div>
                <div className="w-full bg-muted/50 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full shadow-lg transition-all duration-1000 hover:shadow-emerald-500/50" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;