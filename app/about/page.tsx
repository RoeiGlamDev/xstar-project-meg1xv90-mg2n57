import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Jane Doe',
    role: 'CEO & Co-Founder',
    image: '/images/team/jane.jpg',
  },
  {
    name: 'John Smith',
    role: 'CTO & Co-Founder',
    image: '/images/team/john.jpg',
  },
  {
    name: 'Alice Johnson',
    role: 'Lead Developer',
    image: '/images/team/alice.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <header className="bg-red-600 p-6 text-center">
        <h1 className="text-4xl font-bold text-white">About AI</h1>
      </header>

      <main className="p-8">
        <section className="mb-12">
          <motion.div 
            className="text-3xl font-semibold text-red-600 mb-4"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            Our History
          </motion.h2>
          <p className="text-lg">
            Founded in 2023, AI has emerged as a pioneering force in the technology sector, specializing in the creation of advanced AI-generated videos. Our mission is to revolutionize the way content is created and consumed, leveraging cutting-edge technology to provide unparalleled experiences.
          </p>
        </section>

        <section>
          <motion.div 
            className="text-3xl font-semibold text-red-600 mb-4"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            Our Values
          </motion.h2>
          <ul className="list-disc list-inside mb-8">
            <li>Innovation: We strive to push the boundaries of technology.</li>
            <li>Integrity: We operate with transparency and honesty.</li>
            <li>Collaboration: We believe in the power of teamwork to achieve extraordinary results.</li>
          </ul>
        </section>

        <section>
          <motion.div 
            className="text-3xl font-semibold text-red-600 mb-4"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            Meet the Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-orange-400 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-white">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;