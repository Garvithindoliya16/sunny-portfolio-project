import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, TrendingUp, BarChart3, Database } from "lucide-react";

const MachineLearningProjects = () => {
  const mlProjects = [
    {
      title: "Car Price Prediction Model",
      description: "A comprehensive machine learning project that predicts car prices based on various features like year, mileage, engine size, and fuel type. Achieved 83.87% accuracy using advanced regression techniques.",
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
      accuracy: "83.87%",
      features: [
        "Data preprocessing and cleaning",
        "Correlation analysis with heatmaps", 
        "Feature engineering and selection",
        "Model training and validation",
        "Data visualization and insights"
      ],
      images: [
        "/lovable-uploads/c7443cbf-1126-4770-abdd-0a2e196fece3.png",
        "/lovable-uploads/22f8bb9c-4862-444e-b12e-f238ba0023ce.png",
        "/lovable-uploads/d2350597-ae1b-4544-8ba3-f62c2e93efc2.png"
      ],
      liveUrl: "https://kaggle.com/code/garvithindoliya/notebook9777ad931b",
      githubUrl: "https://github.com/Garvithindoliya16",
      featured: true
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Corner ML indicators */}
      <div className="absolute top-6 left-6 animate-float">
        <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center transform rotate-12">
          <Brain className="h-6 w-6 text-green-500/60" />
        </div>
      </div>
      <div className="absolute top-6 right-6 animate-float delay-200">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
          <TrendingUp className="h-6 w-6 text-blue-500/60 animate-pulse" />
        </div>
      </div>
      <div className="absolute bottom-6 left-6 animate-float delay-400">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
          <span className="text-sm font-bold text-purple-600">ML</span>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 animate-float delay-600">
        <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center transform -rotate-12">
          <BarChart3 className="h-5 w-5 text-green-600/60" />
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="h-6 w-6 text-green-400 animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-green-600 to-blue-600 bg-clip-text text-transparent">
              Machine Learning Projects
            </h2>
            <Database className="h-6 w-6 text-blue-400 animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring data science and machine learning with Python, creating predictive models 
            and extracting insights from complex datasets.
          </p>
        </div>

        <div className="space-y-8">
          {mlProjects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover-scale transition-all duration-500 hover:shadow-2xl overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 backdrop-blur-sm relative animate-fade-in ring-2 ring-green-500/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Brain className="h-4 w-4" />
                    Featured ML Project
                  </div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Project Details */}
                <div className="space-y-6">
                  <CardHeader className="p-0">
                    <CardTitle className="text-2xl md:text-3xl text-foreground group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Accuracy Badge */}
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-500" />
                      <span className="text-sm text-muted-foreground">Model Accuracy:</span>
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-lg px-3 py-1">
                        {project.accuracy}
                      </Badge>
                    </div>
                    
                    {/* Key Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-blue-500" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" />
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
                            className="border-green-500/20 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300"
                            style={{ animationDelay: `${techIndex * 50}ms` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button size="sm" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 border-0 hover-scale">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on Kaggle
                      </Button>
                      <Button size="sm" variant="outline" className="border-green-500/30 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300 hover-scale">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </div>
                
                {/* Project Images */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-green-500" />
                    Project Showcase
                  </h4>
                  <div className="grid gap-4">
                    {project.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="relative overflow-hidden rounded-lg group/img">
                        <img 
                          src={image} 
                          alt={`${project.title} - Analysis ${imgIndex + 1}`}
                          className="w-full h-auto object-cover transition-all duration-500 group-hover/img:scale-105 group-hover/img:brightness-110 rounded-lg border border-green-500/20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 rounded-lg" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in delay-1000">
          <Button size="lg" className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
            <Github className="mr-2 h-5 w-5" />
            Explore More ML Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MachineLearningProjects;