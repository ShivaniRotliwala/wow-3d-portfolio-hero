
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

// Animated geometric shape component
const FloatingShape = ({ position, rotation, color, scale, speed = 1 }: { 
  position: [number, number, number]; 
  rotation?: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01 * speed;
    
    // Subtle floating animation
    mesh.current.position.y += Math.sin(state.clock.getElapsedTime() * speed) * 0.002;
  });

  return (
    <mesh ref={mesh} position={position} rotation={rotation || [0, 0, 0]}>
      <dodecahedronGeometry args={[1 * (scale || 1), 0]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.5}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

// Particles background
const ParticleField = () => {
  const particles = useRef<THREE.Points>(null!);
  const { viewport } = useThree();
  
  // Create particle positions
  const count = 200;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    // Distribute particles in a sphere
    const radius = Math.random() * 15 + 5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    
    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);
  }
  
  useFrame((state) => {
    if (!particles.current) return;
    particles.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.1} 
        color="#ffffff" 
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Mouse follower
const MouseLight = () => {
  const light = useRef<THREE.PointLight>(null!);
  const { viewport, mouse } = useThree();
  
  useFrame(() => {
    if (!light.current) return;
    light.current.position.x = mouse.x * viewport.width / 2;
    light.current.position.y = mouse.y * viewport.height / 2;
  });

  return (
    <pointLight
      ref={light}
      distance={15}
      intensity={5}
      color="#9b87f5"
    />
  );
};

// Main scene component
const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 10, 5]} intensity={1} color="#ffffff" />
      
      <FloatingShape position={[-4, 0, -2]} color="#9b87f5" scale={1.3} speed={0.8} />
      <FloatingShape position={[5, -2, -3]} color="#F97316" scale={1.1} speed={1.2} />
      <FloatingShape position={[0, 3, -5]} color="#33C3F0" scale={1.5} speed={1} />
      <FloatingShape position={[3, 2, -4]} color="#D6BCFA" scale={0.7} speed={1.5} />
      <FloatingShape position={[-3, -3, -3]} color="#8B5CF6" scale={0.9} speed={0.7} />
      
      <ParticleField />
      <MouseLight />
      
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        rotateSpeed={0.3}
      />
    </>
  );
};

interface HeroSceneProps {
  className?: string;
}

export const HeroScene = ({ className = "" }: HeroSceneProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  
  // Handle resize 
  useEffect(() => {
    const handleResize = () => {
      // Force re-render on resize
      if (canvasRef.current) {
        canvasRef.current.style.height = `${window.innerHeight}px`;
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div ref={canvasRef} className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroScene;
