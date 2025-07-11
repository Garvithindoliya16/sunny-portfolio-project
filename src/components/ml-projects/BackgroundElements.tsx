
import { Brain, TrendingUp, BarChart3 } from "lucide-react";

const BackgroundElements = () => {
  return (
    <>
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
    </>
  );
};

export default BackgroundElements;
