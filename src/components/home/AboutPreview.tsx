
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div 
          className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl shadow-brand-purple/10 border border-brand-purple/20"
        >
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80"
            alt="Designer at work"
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          
          {/* Floating element with design skills */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full floating-element animate-float bg-brand-dark-purple/80 backdrop-blur-md border border-brand-purple/30 shadow-lg flex flex-col items-center justify-center p-5">
            <span className="text-brand-light-purple font-semibold mb-2">Design Skills</span>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-xs bg-brand-purple/30 px-2 py-1 rounded-full text-white">Figma</span>
              <span className="text-xs bg-brand-purple/30 px-2 py-1 rounded-full text-white">Adobe CC</span>
              <span className="text-xs bg-brand-purple/30 px-2 py-1 rounded-full text-white">Webflow</span>
              <span className="text-xs bg-brand-purple/30 px-2 py-1 rounded-full text-white">Framer</span>
            </div>
          </div>
          
          {/* Experience tag */}
          <div className="absolute top-5 left-5 bg-brand-vivid-purple/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            7+ Years Experience
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            <span className="text-gradient">About Me</span>
            <span className="block h-1 w-16 bg-gradient-to-r from-brand-purple to-brand-orange rounded-full mt-3"></span>
          </h2>
          
          <p className="text-lg text-gray-300">
            I'm a passionate designer focused on creating memorable brands and digital experiences that resonate with audiences and drive results.
          </p>
          
          <div className="space-y-4 mt-6">
            <div className="flex items-start">
              <div className="h-2 w-2 rounded-full bg-brand-purple mt-2 mr-3"></div>
              <p className="text-gray-400">
                Specializing in creating cohesive brand identities that tell compelling stories and build lasting connections.
              </p>
            </div>
            <div className="flex items-start">
              <div className="h-2 w-2 rounded-full bg-brand-purple mt-2 mr-3"></div>
              <p className="text-gray-400">
                Designing intuitive user experiences that blend aesthetics with functionality for maximum engagement.
              </p>
            </div>
            <div className="flex items-start">
              <div className="h-2 w-2 rounded-full bg-brand-purple mt-2 mr-3"></div>
              <p className="text-gray-400">
                Creating visually striking designs that capture attention in today's fast-paced digital landscape.
              </p>
            </div>
          </div>
          
          <Button 
            onClick={() => navigate('/about')}
            variant="outline"
            className="mt-8 border-brand-purple text-brand-light-purple hover:bg-brand-purple/20 group"
          >
            <User className="mr-2 h-4 w-4" />
            <span>Learn More About Me</span>
            <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;
