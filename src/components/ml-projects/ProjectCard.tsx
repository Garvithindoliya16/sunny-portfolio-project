
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, TrendingUp, BarChart3, Database, Activity, Heart } from "lucide-react";
import ProjectImage from "./ProjectImage";

interface MLProject {
  title: string;
  description: string;
  technologies: string[];
  accuracy: string;
  features: string[];
  images: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  category: string;
}

interface ProjectCardProps {
  project: MLProject;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Card 
      className={`group hover-scale transition-all duration-500 hover:shadow-2xl overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 backdrop-blur-sm relative animate-fade-in ${
        project.featured ? 'ring-2 ring-green-500/20' : 'ring-2 ring-blue-500/20'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {project.featured && (
        <div className="absolute top-2 right-2 md:top-4 md:right-4 z-20">
          <div className={`${
            project.category === "Healthcare AI" 
              ? "bg-gradient-to-r from-red-500 to-pink-500" 
              : "bg-gradient-to-r from-green-500 to-blue-500"
            } text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium flex items-center gap-1`}>
            {project.category === "Healthcare AI" ? (
              <Heart className="h-3 w-3 md:h-4 md:w-4" />
            ) : (
              <Brain className="h-3 w-3 md:h-4 md:w-4" />
            )}
            <span className="hidden sm:inline">Featured {project.category}</span>
            <span className="sm:hidden">Featured</span>
          </div>
        </div>
      )}
      
      <div className={`absolute inset-0 ${
        project.category === "Healthcare AI" 
          ? "bg-gradient-to-br from-red-500/5 to-transparent" 
          : "bg-gradient-to-br from-green-500/5 to-transparent"
        } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="grid lg:grid-cols-2 gap-8 p-8">
        {/* Project Details */}
        <div className="space-y-6">
          <CardHeader className="p-0">
            <CardTitle className={`text-2xl md:text-3xl text-foreground group-hover:bg-gradient-to-r ${
              project.category === "Healthcare AI" 
                ? "group-hover:from-red-600 group-hover:to-pink-600" 
                : "group-hover:from-green-600 group-hover:to-blue-600"
              } group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
              {project.title}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-0 space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            
            {/* Accuracy Badge */}
            <div className="flex items-center gap-2">
              {project.category === "Healthcare AI" ? (
                <Activity className="h-5 w-5 text-red-500" />
              ) : (
                <TrendingUp className="h-5 w-5 text-green-500" />
              )}
              <span className="text-sm text-muted-foreground">
                {project.category === "Healthcare AI" ? "Model Performance:" : "Model Accuracy:"}
              </span>
              <Badge className={`${
                project.category === "Healthcare AI" 
                  ? "bg-gradient-to-r from-red-500 to-pink-500" 
                  : "bg-gradient-to-r from-green-500 to-emerald-500"
                } text-white border-0 text-lg px-3 py-1`}>
                {project.accuracy}
              </Badge>
            </div>
            
            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <BarChart3 className={`h-4 w-4 ${
                  project.category === "Healthcare AI" ? "text-red-500" : "text-blue-500"
                }`} />
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className={`w-1.5 h-1.5 ${
                      project.category === "Healthcare AI" 
                        ? "bg-gradient-to-r from-red-500 to-pink-500" 
                        : "bg-gradient-to-r from-green-500 to-blue-500"
                      } rounded-full`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <Database className="h-4 w-4 text-purple-500" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className={`${
                      project.category === "Healthcare AI" 
                        ? "border-red-500/20 hover:border-red-500/50 hover:bg-red-500/10" 
                        : "border-green-500/20 hover:border-green-500/50 hover:bg-green-500/10"
                      } transition-all duration-300`}
                    style={{ animationDelay: `${techIndex * 50}ms` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button 
                size="sm" 
                className={`${
                  project.category === "Healthcare AI" 
                    ? "bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700" 
                    : "bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                  } border-0 hover-scale`}
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                {project.category === "Healthcare AI" ? "Try Live App" : "View on Kaggle"}
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                className={`${
                  project.category === "Healthcare AI" 
                    ? "border-red-500/30 hover:border-red-500/50 hover:bg-red-500/10" 
                    : "border-green-500/30 hover:border-green-500/50 hover:bg-green-500/10"
                  } transition-all duration-300 hover-scale`}
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                Source Code
              </Button>
            </div>
          </CardContent>
        </div>
        
        {/* Project Images */}
        <ProjectImage 
          images={project.images}
          title={project.title}
          category={project.category}
        />
      </div>
    </Card>
  );
};

export default ProjectCard;
