
import { useState, useEffect } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <main className="min-h-screen pt-16 px-4 md:px-6 md:pl-28">
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((project) => (
            <div 
              key={project}
              className="bg-brand-dark-purple/30 rounded-xl overflow-hidden border border-brand-purple/20 hover:border-brand-purple/50 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-brand-purple/20 to-brand-orange/20"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                <p className="text-gray-400">A brief description of this amazing project and the challenges that were overcome.</p>
                <button className="mt-4 px-4 py-2 bg-brand-purple/20 hover:bg-brand-purple/30 rounded-md text-brand-light-purple transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
