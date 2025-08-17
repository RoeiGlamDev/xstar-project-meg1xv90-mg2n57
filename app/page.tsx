import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <section className="flex items-center justify-center h-screen bg-gradient-to-r from-red-500 to-orange-500 text-white">
            <div className="text-center">
                <motion.div 
                    className="text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }}>
                    Welcome to AI
                </motion.h1>
                <motion.div 
                    className="text-xl mb-8"
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: 0.2 }}>
                    Create stunning AI-generated videos with VidNexus.
                </motion.p>
                <motion.div 
                    className="px-6 py-3 bg-white text-red-500 font-semibold rounded-lg shadow-lg hover:bg-red-500 hover:text-white transition duration-300"
                    initial={{ scale: 1 }} 
                    whileHover={{ scale: 1.05 }} 
                    transition={{ type: 'spring', stiffness: 300 }}>
                    Get Started
                </motion.button>
            </div>
        </section>
    );
};

const FeaturesSection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-red-500 mb-10">Features of AI</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <motion.div 
                        className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.5 }}>
                        <h3 className="text-2xl font-semibold text-red-500 mb-4">AI Video Generation</h3>
                        <p>Leverage our cutting-edge AI algorithms to create high-quality videos in minutes.</p>
                    </motion.div>
                    <motion.div 
                        className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.5, delay: 0.2 }}>
                        <h3 className="text-2xl font-semibold text-red-500 mb-4">Customizable Templates</h3>
                        <p>Choose from a variety of templates tailored to your needs for a unique video experience.</p>
                    </motion.div>
                    <motion.div 
                        className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ duration: 0.5, delay: 0.4 }}>
                        <h3 className="text-2xl font-semibold text-red-500 mb-4">User-Friendly Interface</h3>
                        <p>Our platform is designed for ease of use, making video creation accessible to everyone.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
        </div>
    );
};

export default HomePage;