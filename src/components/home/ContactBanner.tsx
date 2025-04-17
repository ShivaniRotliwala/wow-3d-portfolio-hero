
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Mail, Send } from 'lucide-react';

const ContactBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact-banner');
      if (!element) return;
      
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div 
      className={`container max-w-5xl mx-auto p-10 md:p-16 rounded-3xl border border-brand-purple/30 
                  bg-gradient-to-br from-brand-dark-purple/80 to-background/80 backdrop-blur-md 
                  shadow-xl shadow-brand-purple/5 transform transition-all duration-1000 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-lg text-gray-300 max-w-lg">
            Let's collaborate on your next project and turn your vision into a stunning reality.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            className="bg-brand-vivid-purple hover:bg-brand-vivid-purple/90 text-white py-6 px-8"
            onClick={() => navigate('/contact')}
          >
            <Mail className="mr-2 h-5 w-5" />
            <span>Get in Touch</span>
          </Button>
          
          <Button 
            variant="outline"
            className="border-brand-purple text-brand-light-purple hover:bg-brand-purple/20 py-6 px-8 group"
            onClick={() => window.open('https://calendly.com', '_blank')}
          >
            <span>Schedule a Call</span>
            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
