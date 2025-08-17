import { useEffect } from 'react';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
}

const Scene: React.FC<SceneProps> = ({ title }) => {
  useEffect(() => {
    // Additional setup for three.js can go here
  }, []);

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-red-600 mb-4 text-center">
          Welcome to {title} - The Future of AI Video Creation
        </h1>
        <p className="text-lg text-orange-500 text-center">
          Unlock the power of artificial intelligence to create stunning videos effortlessly.
        </p>
      </motion.div>
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/ Add 3D objects here /}
        <OrbitControls />
      </Canvas>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition duration-300">
          Start Creating with {title}
        </button>
      </div>
    </div>
  );
};

export default Scene;