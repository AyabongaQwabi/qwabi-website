import React from 'react';
import { motion } from 'framer-motion';

export default function Connect() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-yellow-900 bg-opacity-50 backdrop-blur-sm'>
      <div className='max-w-4xl mx-auto text-center'>
        <motion.h2
          className='text-3xl sm:text-4xl font-bold mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join the Qwabi Family
        </motion.h2>
        <motion.p
          className='text-xl mb-10'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Whether you're a family member, friend, or someone interested in our
          story, we invite you to connect with us and be part of our journey.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href='#'
            className='inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-green-500 hover:shadow-lg'
          >
            Connect With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
