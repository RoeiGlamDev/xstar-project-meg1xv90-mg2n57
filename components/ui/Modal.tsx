import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm" role="dialog" aria-modal="true">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-red-600 mb-4">{title}</h2>
        <div className="text-gray-800 mb-4">
          {children}
        </div>
        <button
          className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
          onClick={onClose}
          aria-label="Close modal"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;