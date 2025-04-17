
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useNavigate } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Resonance Branding",
    description: "Complete brand identity for a music streaming platform",
    tags: ["Branding", "UI/UX", "Web Design"],
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/projects/resonance"
  },
  {
    id: 2,
    title: "Pulse App Interface",
    description: "Modern fitness application with gamification elements",
    tags: ["App Design", "UI/UX", "Motion"],
    image: "https://images.unsplash.com/photo-1510016577860-8afac1756de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/projects/pulse"
  },
  {
    id: 3,
    title: "Verde E-commerce",
    description: "Sustainable fashion store with immersive shopping experience",
    tags: ["Web Design", "E-commerce", "Branding"],
    image: "https://images.unsplash.com/photo-1553856622-d1b352e9a211?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    link: "/projects/verde"
  }
];

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleViewAllProjects = () => {
    navigate('/projects');
  };

  return (
    <div className="container max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center relative">
          <span className="text-gradient">Featured Projects</span>
          <span className="block h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-orange rounded-full mt-3 mx-auto"></span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl text-center">
          Selected works showcasing my approach to design challenges and creative solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card 
            key={project.id}
            className="overflow-hidden border border-brand-purple/20 bg-background/50 backdrop-blur-sm hover:shadow-lg hover:shadow-brand-purple/10 transition-all duration-500 h-full"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className={`object-cover w-full h-full transition-transform duration-700 ${
                  hoveredProject === project.id ? 'scale-110' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>

            <CardContent className="p-6 flex flex-col h-[calc(100%-56%)]">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-brand-purple/10 text-brand-light-purple"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <Button 
                variant="ghost" 
                className="justify-start p-0 hover:bg-transparent group"
                onClick={() => navigate(project.link)}
              >
                <span className="text-brand-purple group-hover:text-brand-light-purple transition-colors">
                  View Project
                </span>
                <ArrowRight className={`ml-2 h-4 w-4 text-brand-purple group-hover:text-brand-light-purple transition-all ${
                  hoveredProject === project.id ? 'translate-x-1' : ''
                }`} />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button 
          onClick={handleViewAllProjects}
          className="group border border-brand-purple bg-transparent hover:bg-brand-purple/10"
        >
          <span>View All Projects</span>
          <ExternalLink className="ml-2 h-4 w-4 group-hover:rotate-45 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProjects;
