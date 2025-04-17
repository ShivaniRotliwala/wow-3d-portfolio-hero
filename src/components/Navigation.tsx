
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300",
        isScrolled 
          ? "bg-background/90 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="container max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          portfolio<span className="text-brand-purple">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Work", "About", "Services", "Contact"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm font-medium text-gray-200 hover:text-white transition-colors
                        after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px]
                        after:bg-brand-purple after:scale-x-0 after:origin-right
                        after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
            >
              {item}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-200 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <div className="flex flex-col w-6 gap-[5px]">
            <span 
              className={cn(
                "w-full h-[2px] bg-current transition-all duration-300",
                isMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              )}
            />
            <span 
              className={cn(
                "w-full h-[2px] bg-current transition-all duration-300",
                isMenuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span 
              className={cn(
                "w-full h-[2px] bg-current transition-all duration-300",
                isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              )}
            />
          </div>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 top-[72px] bg-background/95 backdrop-blur-lg transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full">
          {["Home", "Work", "About", "Services", "Contact"].map((item, index) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "py-4 text-2xl font-medium transition-all",
                "transform transition-all duration-300",
                isMenuOpen 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 -translate-y-4",
                "transition-delay-[" + (index * 100) + "ms]"
              )}
              style={{ 
                transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
