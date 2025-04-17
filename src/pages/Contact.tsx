
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Contact = () => {
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
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">Get in Touch</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-8">
            <p className="text-lg text-gray-300">
              Interested in working together? Feel free to reach out using the contact form or through any of the channels below.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center">
                  <Mail size={18} className="text-brand-light-purple" />
                </div>
                <span>hello@yourdomain.com</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center">
                  <Phone size={18} className="text-brand-light-purple" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center">
                  <MapPin size={18} className="text-brand-light-purple" />
                </div>
                <span>New York, NY</span>
              </div>
            </div>
          </div>
          
          <form className="space-y-4 bg-brand-dark-purple/30 p-6 rounded-xl border border-brand-purple/20">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 bg-brand-dark-purple/50 border border-brand-purple/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/50"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 bg-brand-dark-purple/50 border border-brand-purple/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/50"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full px-4 py-2 bg-brand-dark-purple/50 border border-brand-purple/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/50"
              ></textarea>
            </div>
            
            <Button className="w-full bg-brand-vivid-purple hover:bg-brand-vivid-purple/90">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
