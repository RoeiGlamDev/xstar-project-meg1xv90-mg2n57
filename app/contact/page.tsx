import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div
        className="text-4xl font-bold text-red-600 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact AI
      </motion.h1>
      
      <form onSubmit={handleSubmit} className="bg-orange-500 p-8 rounded-lg shadow-lg w-full max-w-md">
        <motion.div
          className="mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            required
          />
        </motion.div>

        <motion.div
          className="mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
            required
          />
        </motion.div>

        <motion.div
          className="mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your Message"
            rows={4}
            required
          />
        </motion.div>

        <motion.div
          type="submit"
          className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Send Message
        </motion.button>
      </form>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">Our Location</h2>
        <p className="text-gray-700">123 Tech Lane, Silicon Valley, CA 94043</p>
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">Business Hours</h2>
        <p className="text-gray-700">Mon - Fri: 9 AM - 5 PM</p>
        <p className="text-gray-700">Sat - Sun: Closed</p>
      </div>
    </div>
  );
};

export default ContactPage;