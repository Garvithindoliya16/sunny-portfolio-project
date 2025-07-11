
import { BarChart3 } from "lucide-react";

interface ProjectImageProps {
  images: string[];
  title: string;
  category: string;
}

const ProjectImage = ({ images, title, category }: ProjectImageProps) => {
  return (
    <div className="space-y-4 relative">
      <h4 className="font-semibold text-foreground flex items-center gap-2">
        <BarChart3 className={`h-4 w-4 ${
          category === "Healthcare AI" ? "text-red-500" : "text-green-500"
        }`} />
        Project Showcase
      </h4>
      <div className="grid gap-4 relative">
        {images.map((image, imgIndex) => (
          <div key={imgIndex} className="relative overflow-hidden rounded-lg group/img">
            <img 
              src={image} 
              alt={`${title} - Analysis ${imgIndex + 1}`}
              className={`w-full h-auto object-cover transition-all duration-500 group-hover/img:scale-105 group-hover/img:brightness-110 rounded-lg border ${
                category === "Healthcare AI" ? "border-red-500/20" : "border-green-500/20"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 rounded-lg" />
          </div>
        ))}
        
        {/* Mobile 3D Elements */}
        <div className="absolute -bottom-8 -left-8 lg:hidden animate-float">
          <div className={`w-16 h-16 ${
            category === "Healthcare AI" 
              ? "bg-gradient-to-br from-red-400/30 to-pink-400/30 border-red-500/20" 
              : "bg-gradient-to-br from-green-400/30 to-blue-400/30 border-green-500/20"
            } rounded-xl transform rotate-12 backdrop-blur-sm border flex items-center justify-center`}>
            <div className={`w-8 h-8 ${
              category === "Healthcare AI" 
                ? "bg-gradient-to-r from-red-500 to-pink-500" 
                : "bg-gradient-to-r from-green-500 to-blue-500"
              } rounded-md shadow-lg`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectImage;
