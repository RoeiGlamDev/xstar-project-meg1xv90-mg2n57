import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    role: 'Co-Founder & CTO',
    expertise: 'Artificial Intelligence and Machine Learning',
    image: '/images/alice.jpg',
  },
  {
    name: 'Brian Smith',
    role: 'Co-Founder & CMO',
    expertise: 'Digital Marketing and Growth Hacking',
    image: '/images/brian.jpg',
  },
  {
    name: 'Charlie Brown',
    role: 'Lead Developer',
    expertise: 'Full Stack Development',
    image: '/images/charlie.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-gray-800 py-20 px-6">
      <motion.div 
        className="container mx-auto"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-red-600 mb-6">About AI</h2>
        <p className="mb-8">
          At AI, we are at the forefront of transforming video creation through cutting-edge artificial intelligence technologies. Our journey began with a vision to empower creators and businesses to produce high-quality videos effortlessly.
        </p>
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Our Mission</h3>
        <p className="mb-8">
          Our mission at AI is to democratize video production by leveraging advanced AI algorithms that simplify the creative process. We believe that everyone should have access to powerful tools that enhance their storytelling capabilities, and we are committed to driving innovation in the technology space.
        </p>
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-red-100 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img src={member.image} alt={member.name} className="h-32 w-32 rounded-full mx-auto mb-4" />
              <h4 className="text-xl font-bold text-red-600">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-gray-500">{member.expertise}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-orange-600 mb-4">Our Values</h3>
          <p className="mb-2">Innovation: We thrive on creativity and advancement.</p>
          <p className="mb-2">Integrity: We uphold the highest standards in our work.</p>
          <p className="mb-2">Collaboration: We believe in teamwork to achieve great results.</p>
          <p className="mb-2">Excellence: We are committed to delivering top-notch solutions.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;