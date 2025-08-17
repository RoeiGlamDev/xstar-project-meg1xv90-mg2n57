import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'AI-Powered Video Creation',
    description: 'Harness the power of AI to create stunning videos in minutes, tailored to your needs.',
    icon: <i className="fas fa-video text-orange-500"></i>,
  },
  {
    title: 'Automated Editing Tools',
    description: 'Leverage advanced AI algorithms for seamless video editing and enhancements.',
    icon: <i className="fas fa-cog text-orange-500"></i>,
  },
  {
    title: 'Customizable Templates',
    description: 'Choose from a variety of modern templates designed for every occasion and industry.',
    icon: <i className="fas fa-th-large text-orange-500"></i>,
  },
  {
    title: 'Data-Driven Insights',
    description: 'Utilize analytics to optimize your video performance and audience engagement.',
    icon: <i className="fas fa-chart-line text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-8">
          Explore Our AI Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl text-red-600 mr-3">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-red-600">{feature.title}</h3>
              </div>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;