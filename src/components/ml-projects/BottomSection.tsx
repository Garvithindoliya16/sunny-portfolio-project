
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const BottomSection = () => {
  return (
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
  );
};

export default BottomSection;
