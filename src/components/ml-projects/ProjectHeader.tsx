
import { Brain, Database } from "lucide-react";

const ProjectHeader = () => {
  return (
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
  );
};

export default ProjectHeader;
