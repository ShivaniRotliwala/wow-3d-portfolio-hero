
import { Suspense, lazy } from 'react';
import SideNavigation from '@/components/SideNavigation';
import HeroContent from '@/components/HeroContent';

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
  return (
    <main className="min-h-screen relative overflow-hidden">
      <SideNavigation />
      
      <Suspense fallback={<SceneLoader />}>
        <HeroScene />
      </Suspense>
      
      {/* Hero overlay gradient */}
      <div className="fixed inset-0 hero-gradient -z-10"></div>
      
      {/* Main content */}
      <HeroContent />
    </main>
  );
};

export default Index;
