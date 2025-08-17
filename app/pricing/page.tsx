import React from 'react';
import { motion } from 'framer-motion';

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    title: 'Basic Plan',
    price: '$19/month',
    features: [
      'Access to basic AI video generation',
      'Up to 10 videos per month',
      'Standard resolution',
      'Email support',
    ],
  },
  {
    title: 'Pro Plan',
    price: '$49/month',
    features: [
      'Access to advanced AI video generation',
      'Up to 50 videos per month',
      'HD resolution',
      'Priority email support',
      'Access to templates',
    ],
  },
  {
    title: 'Enterprise Plan',
    price: 'Contact us',
    features: [
      'Custom AI video solutions',
      'Unlimited videos per month',
      '4K resolution',
      '24/7 dedicated support',
      'Custom branding options',
    ],
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 py-10">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-red-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pricing Plans for AI
        </motion.h1>

        <motion.div
          className="text-lg text-gray-700 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Choose the perfect plan that fits your needs in creating stunning AI videos with VidNexus.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-red-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-2xl font-semibold text-red-600">{plan.title}</h2>
              <p className="text-xl font-bold text-orange-500">{plan.price}</p>
              <ul className="list-disc list-inside text-left mt-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-2xl font-bold text-red-600 mt-10 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Frequently Asked Questions
        </motion.h3>

        <div className="mt-6">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h4 className="font-semibold text-gray-800">What is AI?</h4>
            <p className="text-gray-600">
              AI is a cutting-edge technology that allows you to create high-quality videos automatically with just a few clicks.
            </p>
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h4 className="font-semibold text-gray-800">Can I upgrade my plan later?</h4>
            <p className="text-gray-600">
              Yes, you can upgrade your plan at any time through your account settings.
            </p>
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h4 className="font-semibold text-gray-800">Is there a free trial?</h4>
            <p className="text-gray-600">
              Yes, we offer a 14-day free trial for all new users to explore AI's capabilities.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;