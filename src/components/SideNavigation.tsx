
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, User, Briefcase, Settings, Mail, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Projects', path: '/projects', icon: Briefcase },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-6 left-6 z-50 p-2 rounded-full bg-brand-dark-purple/30 border border-brand-purple/20 backdrop-blur-sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation"
      >
        <div className="flex flex-col w-5 gap-[3px]">
          <span 
            className={cn(
              "w-full h-[2px] bg-white transition-all duration-300",
              isOpen ? "rotate-45 translate-y-[5px]" : ""
            )}
          />
          <span 
            className={cn(
              "w-full h-[2px] bg-white transition-all duration-300",
              isOpen ? "opacity-0" : "opacity-100"
            )}
          />
          <span 
            className={cn(
              "w-full h-[2px] bg-white transition-all duration-300",
              isOpen ? "-rotate-45 -translate-y-[5px]" : ""
            )}
          />
        </div>
      </button>

      {/* Side Navigation */}
      <div 
        className={cn(
          "fixed h-screen py-6 px-4 bg-brand-dark-purple/90 backdrop-blur-md z-40 transition-all duration-500 ease-in-out",
          isOpen ? "left-0" : "-left-20",
          isMobile ? "w-20 left-0 -translate-x-full" : "w-20",
          isOpen && isMobile ? "translate-x-0" : ""
        )}
      >
        <div className="h-full flex flex-col items-center">
          {/* Logo placeholder at the top */}
          <div className="mb-12 mt-4">
            <Link to="/" className="block" onClick={() => isMobile && setIsOpen(false)}>
              <img 
                src="/lovable-uploads/5a2cca67-d55f-4c34-9e41-dc492c581b47.png" 
                alt="Logo" 
                className="w-12 h-12 object-contain"
              />
            </Link>
          </div>

          {/* Navigation links */}
          <div className="flex-1 flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300",
                  isActive(item.path) 
                    ? "bg-brand-purple text-white" 
                    : "text-gray-400 hover:text-white"
                )}
                onClick={() => isMobile && setIsOpen(false)}
              >
                <item.icon size={22} />
                
                {/* Tooltip */}
                <span 
                  className={cn(
                    "absolute left-16 rounded-md px-3 py-2 bg-brand-purple text-white text-sm whitespace-nowrap opacity-0 -translate-x-2 pointer-events-none transition-all duration-300",
                    "before:content-[''] before:absolute before:top-1/2 before:-left-1 before:-translate-y-1/2 before:border-4 before:border-transparent before:border-r-0 before:border-l-brand-purple",
                    "group-hover:opacity-100 group-hover:translate-x-0"
                  )}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Expand button at the bottom for desktop */}
          <button 
            className={cn(
              "hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-brand-dark-purple border border-brand-purple/30",
              "transition-all duration-300 hover:bg-brand-purple/20"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <ChevronRight 
              className={cn(
                "h-5 w-5 text-gray-300 transition-transform duration-300",
                isOpen ? "rotate-180" : ""
              )} 
            />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && isMobile && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default SideNavigation;
