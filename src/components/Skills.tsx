import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const frontendSkills = [
    "React", "JavaScript", 
    "HTML5", "CSS3", "Tailwind CSS", "Styled Components"
  ];


  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover-scale transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-center text-foreground">Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

         
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Always Learning</h3>
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