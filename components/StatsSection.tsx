import React from 'react';
import { motion } from 'framer-motion';

interface Stats {
  title: string;
  value: number;
}

const statsData: Stats[] = [
  { title: 'Videos Created', value: 3500 },
  { title: 'Users Engaged', value: 12000 },
  { title: 'AI Models Trained', value: 150 },
  { title: 'Partnerships Established', value: 45 },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">AI Achievements</h2>
        <p className="text-lg text-gray-700 mb-12">
          At AI, we are revolutionizing the way videos are created with cutting-edge technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-white text-3xl font-bold">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="counter"
                >
                  {stat.value}
                </motion.span>
              </h3>
              <p className="text-white text-lg">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;