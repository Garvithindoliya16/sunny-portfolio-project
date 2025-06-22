import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Rocket, Sparkles, Star, Code, Globe, Cpu, Database, Palette, Trophy, Target, Bolt } from "lucide-react";

const CrazySection = () => {
  const achievements = [
    { icon: Trophy, label: "Projects Completed", value: "50+", color: "text-yellow-500" },
    { icon: Code, label: "Lines of Code", value: "100K+", color: "text-blue-500" },
    { icon: Star, label: "GitHub Stars", value: "200+", color: "text-purple-500" },
    { icon: Globe, label: "Live Websites", value: "20+", color: "text-green-500" },
  ];

  const skills = [
    { name: "React", level: 95, color: "bg-blue-500" },
    { name: "Python", level: 90, color: "bg-green-500" },
    { name: "TypeScript", level: 85, color: "bg-purple-500" },
    { name: "Machine Learning", level: 80, color: "bg-pink-500" },
    { name: "UI/UX Design", level: 88, color: "bg-yellow-500" },
    { name: "Data Science", level: 82, color: "bg-cyan-500" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-purple-50/20 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-2xl animate-pulse delay-500" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 animate-float">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
          <Zap className="h-8 w-8 text-purple-500 animate-pulse" />
        </div>
      </div>
      <div className="absolute top-20 right-20 animate-float delay-300">
        <div className="w-14 h-14 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center transform rotate-12">
          <Rocket className="h-7 w-7 text-blue-500" />
        </div>
      </div>
      <div className="absolute bottom-20 left-1/4 animate-float delay-700">
        <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center">
          <Bolt className="h-6 w-6 text-green-500 animate-bounce" />
        </div>
      </div>
      <div className="absolute bottom-20 right-1/4 animate-float delay-1000">
        <div className="w-18 h-18 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg flex items-center justify-center transform -rotate-12">
          <Sparkles className="h-8 w-8 text-yellow-500 animate-spin-slow" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-8 w-8 text-purple-500 animate-bounce" />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Developer Stats & Skills
            </h2>
            <Rocket className="h-8 w-8 text-blue-500 animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating amazing digital experiences with cutting-edge technologies
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group hover-scale transition-all duration-500 hover:shadow-2xl bg-gradient-to-br from-background to-muted/30 border-0 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {achievement.value}
                </h3>
                <p className="text-muted-foreground font-medium">{achievement.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div className="bg-gradient-to-br from-background to-muted/20 rounded-3xl p-8 mb-16 animate-fade-in delay-500">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Cpu className="h-6 w-6 text-blue-500 animate-pulse" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technical Expertise
              </h3>
              <Database className="h-6 w-6 text-purple-500 animate-bounce" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3 animate-slide-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">{skill.name}</span>
                  <Badge variant="outline" className="border-purple-500/30">
                    {skill.level}%
                  </Badge>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 delay-500 shadow-lg`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in delay-1000">
          <div className="bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate and turn your ideas into reality with modern web technologies and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                <Target className="mr-2 h-5 w-5" />
                Start a Project
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover-scale">
                <Palette className="mr-2 h-5 w-5" />
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrazySection;
