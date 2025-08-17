import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <div className="bg-white flex flex-col items-center py-12 px-4">
      <motion.div 
        className="text-center mb-8" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-red-600">{title}</h2>
        <p className="text-lg text-orange-600 mt-2">{subtitle}</p>
      </motion.div>
      <motion.div 
        className="bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange-500 transition duration-300 ease-in-out" 
        onClick={onButtonClick}
        whileHover={{ scale: 1.05 }}
      >
        {buttonText}
      </motion.button>
    </div>
  );
};

export default CTASection;