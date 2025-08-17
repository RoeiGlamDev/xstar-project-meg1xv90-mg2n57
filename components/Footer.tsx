import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  links: { name: string; url: string }[];
  socialMedia: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ companyName, links, socialMedia }) => {
  return (
    <footer className="bg-white text-gray-800 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-red-600">AI</h2>
          <p className="text-sm text-gray-600">Leading the way in AI video technology.</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-orange-500">Links</h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                className="transition-transform duration-200"
              >
                <a href={link.url} className="text-gray-800 hover:text-orange-500">
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-orange-500">Follow Us</h3>
          <div className="flex space-x-4">
            {socialMedia.map((social) => (
              <motion.div
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="text-gray-800 hover:text-orange-500 transition-transform duration-200"
              >
                {social.platform}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;