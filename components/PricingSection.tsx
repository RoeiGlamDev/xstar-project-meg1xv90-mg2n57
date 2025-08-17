import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
    title: string;
    price: string;
    features: string[];
}

const pricingTiers: PricingTier[] = [
    {
        title: 'Basic AI Video Plan',
        price: '$29/month',
        features: [
            'Up to 5 AI-generated videos',
            'Standard video quality',
            'Basic editing tools',
            'Email support'
        ]
    },
    {
        title: 'Pro AI Video Plan',
        price: '$79/month',
        features: [
            'Up to 20 AI-generated videos',
            'HD video quality',
            'Advanced editing tools',
            'Priority email support',
            'Access to premium templates'
        ]
    },
    {
        title: 'Enterprise AI Video Plan',
        price: '$199/month',
        features: [
            'Unlimited AI-generated videos',
            '4K video quality',
            'Custom editing tools',
            '24/7 customer support',
            'Dedicated account manager'
        ]
    }
];

const PricingSection: React.FC = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto text-center">
                <motion.div
                    className="text-4xl font-bold text-red-600 mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Pricing Plans for AI Services
                </motion.h2>
                <p className="text-gray-600 mb-12">
                    Choose the perfect plan to leverage the power of AI in video creation with AI.
                </p>
                <div className="flex justify-center space-x-8">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            className="bg-orange-500 text-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4">{tier.title}</h3>
                            <p className="text-3xl font-bold mb-4">{tier.price}</p>
                            <ul className="mb-6">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className="mb-2">
                                        - {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors">
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;