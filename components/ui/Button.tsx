import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  const baseClasses = "px-6 py-3 rounded focus:outline-none transition duration-300 ease-in-out";
  const primaryClasses = "bg-red-600 text-white hover:bg-red-700 shadow-lg transform hover:scale-105";
  const secondaryClasses = "bg-orange-500 text-white hover:bg-orange-600 shadow-lg transform hover:scale-105";

  const classes = variant === 'primary' ? ${baseClasses} ${primaryClasses} : ${baseClasses} ${secondaryClasses};

  return (
    <motion.div 
      className="classes" 
      onClick={onClick}
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
      aria-label={Button for ${variant} action}
    >
      {children}
    </motion.button>
  );
};

export default Button;