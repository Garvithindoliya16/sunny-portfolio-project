import ProjectHeader from "./ml-projects/ProjectHeader";
import ProjectCard from "./ml-projects/ProjectCard";
import BackgroundElements from "./ml-projects/BackgroundElements";
import BottomSection from "./ml-projects/BottomSection";

const MachineLearningProjects = () => {
  const mlProjects = [
    {
      title: "Heart Stroke Prediction System",
      description: "An advanced machine learning web application that predicts the likelihood of stroke based on clinical data including age, gender, hypertension, heart disease, and lifestyle factors. Built with Streamlit for interactive healthcare predictions.",
      technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn", "NumPy", "Matplotlib","Seaborn"],
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
      <BackgroundElements />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ProjectHeader />

        <div className="space-y-8">
          {mlProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>

        <BottomSection />
      </div>
    </section>
  );
};

export default MachineLearningProjects;
