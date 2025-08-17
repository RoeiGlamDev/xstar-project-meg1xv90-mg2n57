import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: 'General Inquiry',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSuccessMessage('Your message has been sent successfully!');
    // Handle form submission logic here
    setFormData({ name: '', email: '', message: '', reason: 'General Inquiry' });
    setErrors({});
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg">
      <motion.div
        className="text-3xl font-bold text-red-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact AI
      </motion.h2>
      <p className="text-gray-700 mb-6">
        Have questions about our AI video solutions? Reach out to us!
      </p>
      <motion.div onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={border ${errors.name ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full}
            required
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={border ${errors.email ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full}
            required
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="reason">Reason for Contact</label>
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded w-full"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Partnership Opportunities">Partnership Opportunities</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={border ${errors.message ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full}
            rows={4}
            required
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </div>
        <button
          type="submit"
          className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition duration-300"
        >
          Send Message
        </button>
        {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
      </motion.form>
      <div className="mt-8">
        <h3 className="text-xl font-bold text-orange-600">Business Information</h3>
        <p className="text-gray-700">AI Solutions Inc.</p>
        <p className="text-gray-700">123 AI Lane, Tech City, CA 90210</p>
        <p className="text-gray-700">Hours: Mon-Fri, 9 AM - 5 PM</p>
        <p className="text-gray-700">Email: contact@ai.com</p>
        <p className="text-gray-700">Phone: (123) 456-7890</p>
      </div>
    </section>
  );
};

export default ContactSection;