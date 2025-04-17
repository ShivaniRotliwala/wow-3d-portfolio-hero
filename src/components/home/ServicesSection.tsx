
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Brush, Layout, Share2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

interface Service {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Brand Identity",
    icon: <Sparkles className="h-6 w-6" />,
    description: "Create a distinctive visual language that tells your brand's story.",
    features: [
      "Logo Design & Brand Guidelines",
      "Typography & Color Systems",
      "Visual Identity Development",
      "Brand Strategy & Positioning"
    ]
  },
  {
    id: 2,
    title: "UI/UX Design",
    icon: <Layout className="h-6 w-6" />,
    description: "Craft intuitive, engaging digital experiences that users love.",
    features: [
      "User Research & Persona Creation",
      "Wireframing & Prototyping",
      "Interactive UI Design",
      "Usability Testing & Iteration"
    ]
  },
  {
    id: 3,
    title: "Digital Design",
    icon: <Brush className="h-6 w-6" />,
    description: "Striking digital assets that capture attention and convey your message.",
    features: [
      "Web & Mobile Design",
      "Social Media Graphics",
      "Digital Advertising Materials",
      "Email & Newsletter Templates"
    ]
  },
  {
    id: 4,
    title: "Marketing Collateral",
    icon: <Share2 className="h-6 w-6" />,
    description: "Strategic visual content that drives engagement and conversions.",
    features: [
      "Campaign Concept Development",
      "Digital Marketing Materials",
      "Print Media & Publications",
      "Presentation & Pitch Decks"
    ]
  }
];

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const navigate = useNavigate();
  
  return (
    <div className="container max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-gradient">Services</span>
          <span className="block h-1 w-16 bg-gradient-to-r from-brand-orange to-brand-purple rounded-full mt-3 mx-auto"></span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl text-center">
          Expert design solutions tailored to elevate your brand and engage your audience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service) => (
          <Card 
            key={service.id}
            className={`border border-brand-purple/20 bg-background/50 backdrop-blur-sm transition-all duration-500 overflow-hidden ${
              hoveredService === service.id ? 'shadow-lg shadow-brand-purple/20 translate-y-[-5px]' : ''
            }`}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-brand-purple/10 text-brand-vivid-purple">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </div>
              <CardDescription className="pt-3 text-gray-400">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-purple mr-2"></div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <div 
                className={`w-full h-1 bg-gradient-to-r from-brand-purple to-brand-vivid-purple scale-x-0 origin-left transition-transform duration-500 ${
                  hoveredService === service.id ? 'scale-x-100' : ''
                }`}
              ></div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button 
          onClick={() => navigate('/services')}
          className="group bg-brand-vivid-purple hover:bg-brand-vivid-purple/90 text-white"
        >
          <span>Explore All Services</span>
          <Sparkles className="ml-2 h-4 w-4 transition-all group-hover:rotate-12" />
        </Button>
      </div>
    </div>
  );
};

export default ServicesSection;
