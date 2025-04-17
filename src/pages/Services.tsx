
import { useState, useEffect } from 'react';
import { Palette, Monitor, Layout, Globe } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const services = [
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces that provide exceptional user experiences.',
      icon: Monitor
    },
    {
      title: 'Brand Identity',
      description: 'Developing unique brand identities that resonate with your target audience and leave lasting impressions.',
      icon: Palette
    },
    {
      title: 'Web Design',
      description: 'Designing modern, responsive websites that look great on any device and drive conversions.',
      icon: Layout
    },
    {
      title: 'Digital Strategy',
      description: 'Crafting comprehensive digital strategies to enhance your online presence and reach your goals.',
      icon: Globe
    }
  ];
  
  return (
    <main className="min-h-screen pt-16 px-4 md:px-6 md:pl-28">
      <div className={`max-w-5xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">Services</h1>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl">
          I offer a range of creative services to help elevate your brand and digital presence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-brand-dark-purple/30 rounded-xl p-8 border border-brand-purple/20 hover:border-brand-purple/50 transition-all duration-300"
            >
              <div className="w-14 h-14 mb-6 rounded-full bg-brand-purple/20 flex items-center justify-center">
                <service.icon size={28} className="text-brand-light-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
