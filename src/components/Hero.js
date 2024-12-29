import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      <motion.div
        className='absolute inset-0 bg-black bg-opacity-50'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <div className='text-center px-4 sm:px-6 lg:px-8 max-w-6xl'>
        <motion.h1
          className='text-gray-200 z-10 relative dark:text-white mx-auto max-w-5xl font-bold text-4xl/tight sm:text-5xl/tight lg:text-5xl/tight xl:text-7xl/tight'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tradition forged in{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-br from-yellow-800 to-green-400'>
            progress
          </span>
        </motion.h1>
        <motion.p
          className='text-xl sm:text-2xl lg:text-3xl font-semibold mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Rooted emaQithini, driven ngaba Thembu, a people of steadfast faith
          and action.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href='#legacy'
            className='inline-block bg-yellow-400 text-green-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-yellow-300 hover:shadow-lg'
          >
            Discover Our Legacy
          </a>
        </motion.div>
      </div>
    </section>
  );
}
