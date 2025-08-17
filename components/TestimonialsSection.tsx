import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  photo: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jessica Tran',
    photo: '/images/jessica.jpg',
    review: 'AI has revolutionized our video production process. The quality and speed are unmatched!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    photo: '/images/michael.jpg',
    review: 'The AI technology provided by AI allowed us to create engaging content effortlessly.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Sarah Patel',
    photo: '/images/sarah.jpg',
    review: 'With AI, our marketing videos have never looked better. Highly recommend their services!',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-6">What Our Clients Say About AI</h2>
        <p className="text-lg text-orange-500 mb-8">Transforming video production with cutting-edge technology.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-orange-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-red-600">{testimonial.name}</h3>
              <p className="text-gray-700 mb-4">{testimonial.review}</p>
              <div className="flex justify-center">
                {Array.from({ length: testimonial.rating }, (_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 15l-5.447 3.96 1.045-6.094L0 6.705l6.163-.89L10 0l2.837 5.815L20 6.705l-5.598 5.161 1.045 6.094L10 15z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;