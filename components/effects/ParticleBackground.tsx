import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const particles: THREE.Points[] = [];
    const particleCount = 500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i  3] = (Math.random() - 0.5)  10;
      positions[i  3 + 1] = (Math.random() - 0.5)  10;
      positions[i  3 + 2] = (Math.random() - 0.5)  10;

      const color = new THREE.Color();
      color.setRGB(Math.random() < 0.5 ? 1 : 1, Math.random() < 0.5 ? 0.5 : 0, Math.random() < 0.5 ? 0 : 1);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({ size: 0.05, vertexColors: true });
    const particlesSystem = new THREE.Points(geometry, material);
    scene.add(particlesSystem);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      particlesSystem.rotation.x += 0.001;
      particlesSystem.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef} className="absolute inset-0 z-0">
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-orange-500 to-red-500">
        <motion.div 
          className="text-5xl text-white font-bold mb-4"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}>
          Welcome to AI
        </motion.h1>
        <motion.div 
          className="text-lg text-white text-center"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}>
          Experience the future of content creation with VidNexus, your AI-driven video production platform.
        </motion.p>
      </div>
    </div>
  );
};

export default ParticleBackground;