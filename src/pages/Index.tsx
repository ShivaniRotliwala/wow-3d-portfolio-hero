
import { Suspense, lazy, useRef } from 'react';
import SideNavigation from '@/components/SideNavigation';
import HeroContent from '@/components/HeroContent';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import ThemeSwitcher from '@/components/theme/ThemeSwitcher';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ServicesSection from '@/components/home/ServicesSection';
import AboutPreview from '@/components/home/AboutPreview';
import ContactBanner from '@/components/home/ContactBanner';
import Footer from '@/components/Footer';

// Lazy load the 3D scene component to improve initial load time
const HeroScene = lazy(() => import('@/components/HeroScene'));

// Loader component for the 3D scene
const SceneLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-background">
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 border-t-4 border-brand-purple rounded-full animate-spin"></div>
      <div className="absolute inset-5 border-t-4 border-brand-orange rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
    </div>
  </div>
);

const Index = () => {
  const featuredRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="min-h-screen relative overflow-x-hidden">
        <SideNavigation />
        
        {/* Theme Switcher - Fixed position */}
        <div className="fixed top-6 right-6 z-50">
          <ThemeSwitcher />
        </div>
        
        {/* Hero Section with 3D background */}
        <section id="hero" className="relative">
          <Suspense fallback={<SceneLoader />}>
            <HeroScene />
          </Suspense>
          
          {/* Hero overlay gradient */}
          <div className="fixed inset-0 hero-gradient -z-10"></div>
          
          {/* Main content */}
          <HeroContent />
        </section>
        
        {/* Featured Projects Section */}
        <section ref={featuredRef} id="featured" className="py-24 px-6">
          <FeaturedProjects />
        </section>
        
        {/* About Preview Section */}
        <section ref={aboutRef} id="about-preview" className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
          <AboutPreview />
        </section>
        
        {/* Services Section */}
        <section ref={servicesRef} id="services" className="py-24 px-6">
          <ServicesSection />
        </section>
        
        {/* Contact Banner */}
        <section ref={contactRef} id="contact-banner" className="py-24 px-6">
          <ContactBanner />
        </section>
        
        {/* Footer */}
        <Footer />
      </main>
    </ThemeProvider>
  );
};

export default Index;
