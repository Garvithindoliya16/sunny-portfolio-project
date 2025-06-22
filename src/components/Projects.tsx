import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Sparkles, Star, Rocket } from "lucide-react";
import ThreeBackgroundProjects from "./ThreeBackgroundProjects";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order processing.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "REST API"],
      liveUrl: "https://github.com/Garvithindoliya16/GreatCart-Django",
      githubUrl: "https://github.com/Garvithindoliya16",
      featured: true
    },
    {
      title: "Finance Service App",
      description: "A collaborative project management tool with drag-and-drop functionality, team collaboration features, and progress tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
      liveUrl: "https://garvithindoliya16.github.io/Finance/",
      githubUrl: "https://github.com/Garvithindoliya16"
    },
    {
      title: "NGO Web App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather data visualization.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "JavaScript", "CSS3", "Weather API", "PWA"],
      liveUrl: "https://github.com/Garvithindoliya16/NGO-WEB",
      githubUrl: "https://github.com/Garvithindoliya16"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative work with smooth animations, optimized performance, and modern design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["Next.js", "SCSS", "Framer Motion", "Vercel", "CMS"],
      liveUrl: "https://garvithindoliya16.github.io/My-portfolio/",
      githubUrl: "https://github.com/Garvithindoliya16",
      featured: true
    },
    {
      title: "Usability Hub",
      description: "Analytics dashboard for social media management with data visualization, scheduling tools, and performance metrics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["React", "D3.js", "Express", "PostgreSQL", "JWT"],
      liveUrl: "https://garvithindoliya16.github.io/Usabilityhub-clone/",
      githubUrl: "https://github.com/Garvithindoliya16"
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile-first fitness application with workout tracking, progress visualization, and social features for motivation.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      technologies: ["React Native", "Firebase", "Chart.js", "Push Notifications"],
      liveUrl: "https://garvithindoliya16.github.io/Jai-Parshuram-Gym/",
      githubUrl: "https://github.com/Garvithindoliya16"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
      {/* 3D Background */}
      <ThreeBackgroundProjects />
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-2xl animate-pulse delay-500" />
      
      {/* Corner project indicators */}
      <div className="absolute top-6 left-6 animate-float">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center transform rotate-12">
          <Rocket className="h-6 w-6 text-blue-500/60" />
        </div>
      </div>
      <div className="absolute top-6 right-6 animate-float delay-200">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
          <Star className="h-6 w-6 text-purple-500/60 animate-pulse" />
        </div>
      </div>
      <div className="absolute bottom-6 left-6 animate-float delay-400">
        <div className="w-10 h-10 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg flex items-center justify-center">
          <span className="text-sm font-bold text-emerald-600">6+</span>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 animate-float delay-600">
        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center transform -rotate-12">
          <ExternalLink className="h-5 w-5 text-yellow-600/60" />
        </div>
      </div>
      
      {/* Corner connection dots */}
      <div className="absolute top-20 left-12">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-blue-500/40 rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-purple-500/40 rounded-full animate-ping delay-200"></div>
          <div className="w-2 h-2 bg-pink-500/40 rounded-full animate-ping delay-400"></div>
        </div>
      </div>
      <div className="absolute top-20 right-12">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-cyan-500/40 rounded-full animate-ping delay-100"></div>
          <div className="w-2 h-2 bg-blue-500/40 rounded-full animate-ping delay-300"></div>
          <div className="w-2 h-2 bg-purple-500/40 rounded-full animate-ping delay-500"></div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Rocket className="h-6 w-6 text-blue-400 animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Star className="h-6 w-6 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects that showcase my skills and passion for creating 
            exceptional web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group hover-scale transition-all duration-500 hover:shadow-2xl overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 backdrop-blur-sm relative animate-fade-in ${
                project.featured ? 'ring-2 ring-purple-500/20' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Featured
                  </div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating sparkles on hover */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-foreground group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4 relative z-10">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-purple-500/20 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                      style={{ animationDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 hover-scale"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover-scale"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in delay-1000">
          <Button 
            size="lg" 
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
            onClick={() => window.open('https://github.com/Garvithindoliya16', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
