import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "Experience the Future with AI", 
  subtitle = "Transforming your ideas into stunning AI-generated videos with cutting-edge technology.", 
  ctaText = "Get Started", 
  ctaLink = "#"
}) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-red-600 to-orange-500 text-white p-6">
      <motion.div 
        className="text-5xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.div 
        className="text-lg mb-8 text-center max-w-lg"
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        {subtitle}
      </motion.p>
      <motion.div 
        href={ctaLink} 
        className="bg-white text-red-600 font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        {ctaText}
      </motion.a>
      <div className="mt-10 text-sm">
        <p className="text-white">Join thousands of satisfied users leveraging AI technology for creativity.</p>
      </div>
    </section>
  );
};

export default HeroSection;