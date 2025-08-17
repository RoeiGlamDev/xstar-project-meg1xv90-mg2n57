import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSectionProps {
  title: string;
  subtitle: string;
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ title, subtitle }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add subscription logic here, e.g., API call to save email
    setIsSubscribed(true);
  };

  return (
    <section className="bg-white py-10 px-6 lg:px-20">
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-red-500">{title}</h2>
        <p className="text-lg text-gray-700">{subtitle}</p>
      </motion.div>

      <div className="flex flex-col items-center">
        {isSubscribed ? (
          <motion.div
            className="text-green-500 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing to AI! Stay tuned for the latest updates on AI video technology.
          </motion.p>
        ) : (
          <form onSubmit={handleSubscribe} className="w-full max-w-md">
            <div className="flex flex-col md:flex-row items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-gray-300 rounded-md p-2 md:flex-1 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
              />
              <button
                type="submit"
                className="mt-4 md:mt-0 md:ml-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md p-2 transition duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSection;