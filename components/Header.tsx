import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.div
              src={logo}
              alt="AI Logo"
              className="h-8 w-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h1 className="ml-2 text-2xl font-bold text-red-600">AI</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <motion.div
              href="#services"
              className="text-red-600 hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Services
            </motion.a>
            <motion.div
              href="#about"
              className="text-red-600 hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              About
            </motion.a>
            <motion.div
              href="#contact"
              className="text-red-600 hover:text-orange-500 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </nav>
          <div className="md:hidden">
            <button className="text-red-600 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;