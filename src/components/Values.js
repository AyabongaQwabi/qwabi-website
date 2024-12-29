import React from 'react';
import { motion } from 'framer-motion';

export default function Values() {
  const values = [
    {
      title: 'Honour',
      description:
        'Living with pride in our heritage and respect for our elders',
    },
    {
      title: 'Integrity',
      description: 'Acting with honesty and fairness in all that we do',
    },
    {
      title: 'Respect',
      description:
        'Treating others, nature, and ourselves with dignity and kindness',
    },
    {
      title: 'Humility',
      description: 'Remaining grounded and connected to our roots',
    },
  ];

  return (
    <section
      id='values'
      className='py-20 px-4 sm:px-6 lg:px-8 bg-yellow-600 relative overflow-hidden'
    >
      <div className='max-w-6xl mx-auto relative z-10'>
        <motion.h2
          className='text-3xl sm:text-4xl font-bold mb-12 text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Core Values
        </motion.h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className='bg-green-800 bg-opacity-50 p-6 rounded-lg text-center relative overflow-hidden'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className='absolute top-0 right-0 w-16 h-16 bg-yellow-500 opacity-10 transform translate-x-8 -translate-y-8 rotate-45'></div>
              <h3 className='text-xl font-semibold mb-2'>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
