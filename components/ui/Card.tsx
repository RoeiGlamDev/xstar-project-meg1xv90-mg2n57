import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    return (
        <motion.div
            className="bg-white bg-opacity-20 backdrop-blur-lg border border-red-500 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-2xl font-bold text-orange-500">{title}</h2>
                <p className="text-gray-200 mt-2">{description}</p>
            </div>
        </motion.div>
    );
};

export default Card;