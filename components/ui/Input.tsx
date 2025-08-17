import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  validationFn?: (value: string) => boolean;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', placeholder, validationFn, errorMessage }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (validationFn) {
      setIsValid(validationFn(newValue));
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="text-white mb-2 font-semibold">{label}</label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={p-3 rounded border-2 ${isValid ? 'border-white' : 'border-red-500'} focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 ease-in-out}
        whileHover={{ scale: 1.05 }}
        whileFocus={{ scale: 1.05 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      {!isValid && errorMessage && <span className="text-red-500 text-sm mt-1">{errorMessage}</span>}
    </div>
  );
};

export default Input;