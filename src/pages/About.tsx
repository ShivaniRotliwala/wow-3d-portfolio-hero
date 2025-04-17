
import { Suspense, useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <main className="min-h-screen pt-16 px-4 md:px-6 md:pl-28">
      <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">About Me</h1>
        <div className="space-y-6 text-gray-300">
          <p className="text-lg">
            I'm a passionate designer dedicated to creating memorable digital experiences. 
            With a keen eye for detail and a love for creative problem-solving, 
            I transform ideas into visually stunning and functional designs.
          </p>
          <p className="text-lg">
            My journey in design began over 5 years ago, and since then, 
            I've collaborated with various clients and brands to bring their visions to life.
          </p>
          {/* Placeholder for more content */}
          <div className="h-64 bg-brand-dark-purple/30 rounded-lg flex items-center justify-center border border-brand-purple/20">
            <p className="text-gray-400">More about content coming soon</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
