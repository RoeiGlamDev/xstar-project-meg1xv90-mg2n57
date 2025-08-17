import { motion } from 'framer-motion';
import React from 'react';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;