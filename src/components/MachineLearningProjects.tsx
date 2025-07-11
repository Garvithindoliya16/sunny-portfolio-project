
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, TrendingUp, BarChart3, Database, Activity, Heart } from "lucide-react";

const MachineLearningProjects = () => {
  const mlProjects = [
    {
      title: "Heart Stroke Prediction System",
      description: "An advanced machine learning web application that predicts the likelihood of stroke based on clinical data including age, gender, hypertension, heart disease, and lifestyle factors. Built with Streamlit for interactive healthcare predictions.",
      technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn", "NumPy", "Matplotlib"],
      accuracy: "High Accuracy",
      features: [
        "Interactive web interface with Streamlit",
        "Real-time stroke risk assessment",
        "Multiple clinical parameter inputs",
        "Visual risk probability display",
        "Healthcare-focused ML model"
      ],
      images: [
        "/lovable-uploads/d155956a-38f1-4c2c-a34c-f41dc875f8d5.png"
      ],
      liveUrl: "https://heartstroke-prediction.streamlit.app/",
      githubUrl: "https://github.com/Garvithindoliya16/Heart-Stroke-Prediction",
      featured: true,
      category: "Healthcare AI"
    },
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
      featured: false,
      category: "Price Prediction"
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
        <div className="text-center mb-16 animate-fade-in animate-slide-in">
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
                <div className="space-y-4 relative">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <BarChart3 className={`h-4 w-4 ${
                      project.category === "Healthcare AI" ? "text-red-500" : "text-green-500"
                    }`} />
                    Project Showcase
                  </h4>
                  <div className="grid gap-4 relative">
                    {project.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="relative overflow-hidden rounded-lg group/img">
                        <img 
                          src={image} 
                          alt={`${project.title} - Analysis ${imgIndex + 1}`}
                          className={`w-full h-auto object-cover transition-all duration-500 group-hover/img:scale-105 group-hover/img:brightness-110 rounded-lg border ${
                            project.category === "Healthcare AI" ? "border-red-500/20" : "border-green-500/20"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 rounded-lg" />
                      </div>
                    ))}
                    
                    {/* Mobile 3D Elements */}
                    <div className="absolute -bottom-8 -left-8 lg:hidden animate-float">
                      <div className={`w-16 h-16 ${
                        project.category === "Healthcare AI" 
                          ? "bg-gradient-to-br from-red-400/30 to-pink-400/30 border-red-500/20" 
                          : "bg-gradient-to-br from-green-400/30 to-blue-400/30 border-green-500/20"
                        } rounded-xl transform rotate-12 backdrop-blur-sm border flex items-center justify-center`}>
                        <div className={`w-8 h-8 ${
                          project.category === "Healthcare AI" 
                            ? "bg-gradient-to-r from-red-500 to-pink-500" 
                            : "bg-gradient-to-r from-green-500 to-blue-500"
                          } rounded-md shadow-lg`}></div>
                      </div>
                    </div>
                    
                    <div className="absolute -top-4 -right-4 lg:hidden animate-float delay-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-lg transform -rotate-12 backdrop-blur-sm border border-purple-500/20 flex items-center justify-center">
                        <Database className="h-5 w-5 text-purple-500" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-1/2 -right-6 lg:hidden animate-float delay-500">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/30 to-emerald-400/30 rounded-full backdrop-blur-sm border border-cyan-500/20 flex items-center justify-center">
                        <Brain className="h-4 w-4 text-cyan-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in delay-1000 relative">
          <Button 
            size="lg" 
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
            onClick={() => window.open('https://github.com/Garvithindoliya16', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            Explore More ML Projects
          </Button>
          
          {/* 3D Moon Element */}
          <div 
            className="absolute top-20 left-1/2 transform -translate-x-1/2 pointer-events-none"
            style={{
              transform: 'translateX(-50%)',
              transition: 'all 0.3s ease-out'
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              e.currentTarget.style.transform = `translateX(-50%) translate(${x * 0.1}px, ${y * 0.1}px) rotateX(${y * 0.1}deg) rotateY(${x * 0.1}deg)`;
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-slate-200 to-slate-400 rounded-full shadow-2xl relative overflow-hidden">
              {/* Moon craters */}
              <div className="absolute top-2 left-3 w-2 h-2 bg-slate-300 rounded-full opacity-60"></div>
              <div className="absolute bottom-3 right-2 w-1.5 h-1.5 bg-slate-300 rounded-full opacity-50"></div>
              <div className="absolute top-1/2 left-1 w-1 h-1 bg-slate-300 rounded-full opacity-40"></div>
              {/* Moon glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachineLearningProjects;
