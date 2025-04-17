
import { Logo } from "./Logo";
import { Instagram, Linkedin, Mail, MapPin, Phone, Square } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-brand-purple/20 bg-background/80 backdrop-blur-sm py-16 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <Logo size="large" />
            <p className="text-gray-400">
              Creating distinctive designs and immersive digital experiences that captivate audiences and elevate brands.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://behance.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-brand-dark-purple hover:bg-brand-purple/30 
                          border border-brand-purple/30 transition-colors group"
                aria-label="Behance"
              >
                <Square className="w-5 h-5 text-brand-light-purple group-hover:text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-brand-dark-purple hover:bg-brand-purple/30 
                          border border-brand-purple/30 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-brand-light-purple group-hover:text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-brand-dark-purple hover:bg-brand-purple/30 
                          border border-brand-purple/30 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-brand-light-purple group-hover:text-white" />
              </a>
            </div>
          </div>
          
          {/* Navigation Column */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-brand-light-purple transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-brand-light-purple" />
                <span>San Francisco, CA</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-brand-light-purple" />
                <a href="mailto:hello@design.studio" className="hover:text-brand-light-purple transition-colors">
                  hello@design.studio
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-brand-light-purple" />
                <a href="tel:+1234567890" className="hover:text-brand-light-purple transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-purple/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Design Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-gray-500 hover:text-brand-light-purple transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-500 hover:text-brand-light-purple transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
