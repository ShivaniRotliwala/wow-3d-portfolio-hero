
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Briefcase, User, Mail, ExternalLink } from "lucide-react";

const HeroContent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Animate in content after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToWork = () => {
    // This would scroll to a portfolio section below
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      {/* Hero content wrapper */}
      <div className="container max-w-6xl z-10">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          {/* Name/Brand */}
          <div 
            className={`transform transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-gradient tracking-tight">
              Creative Designer
            </h1>
            <div className="mt-3 font-display tracking-wide">
              <span className="text-sm md:text-base bg-brand-vivid-purple/20 text-brand-light-purple px-4 py-1 rounded-full">
                Design • Brand • UI/UX
              </span>
            </div>
          </div>
          
          {/* Tagline */}
          <p 
            className={`max-w-2xl mx-auto text-lg md:text-xl text-gray-300 transform transition-all delay-300 duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            I create immersive digital experiences through thoughtful design,
            strategic branding, and intuitive user interfaces. Let's bring your vision to life.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className={`flex flex-wrap items-center justify-center gap-4 transform transition-all delay-500 duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button 
              size="lg" 
              className="bg-brand-vivid-purple hover:bg-brand-vivid-purple/90 text-white"
              onClick={scrollToWork}
            >
              <Briefcase className="mr-2 h-4 w-4" /> View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-brand-purple text-brand-light-purple hover:bg-brand-purple/20"
            >
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </div>
          
          {/* Social Links */}
          <div 
            className={`flex gap-6 transform transition-all delay-700 duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {["dribbble", "behance", "linkedin", "instagram"].map((platform) => (
              <a 
                key={platform}
                href={`#${platform}`} 
                className="p-2 rounded-full bg-brand-dark-purple/60 hover:bg-brand-purple/30 
                          border border-brand-purple/30 backdrop-blur-sm
                          transition-all duration-300 group"
                aria-label={platform}
              >
                <ExternalLink className="w-5 h-5 text-brand-light-purple group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all delay-1000 duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button 
          onClick={scrollToWork}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
