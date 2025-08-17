import { useRef } from 'react';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { animated } from 'react-spring';
import { a } from 'react-spring/three';

interface FloatingElementProps {
  position: [number, number, number];
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position }) => {
  const meshRef = React.useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y += 0.01  Math.sin(Date.now()  0.001);
    }
  });

  return (
    <a.mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#FF4500" />
    </a.mesh>
  );
};

const FloatingElements: React.FC = () => {
  return (
    <>
      <FloatingElement position={[0, 1, 0]} />
      <FloatingElement position={[1, 1, -1]} />
      <FloatingElement position={[-1, 1, 1]} />
    </>
  );
};

const FloatingElementsContainer: React.FC = () => {
  return (
    <Canvas className="w-full h-full">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingElements />
    </Canvas>
  );
};

const FloatingElementsSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-5xl font-bold text-red-600">Welcome to AI</h1>
      <p className="mt-4 text-lg text-orange-500">
        Experience the future of video creation with VidNexus, powered by AI.
      </p>
      <div className="mt-8">
        <FloatingElementsContainer />
      </div>
    </section>
  );
};

export default FloatingElementsSection;