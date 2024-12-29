import React from 'react';
import { motion } from 'framer-motion';

const resources = [
  {
    name: 'NMTPlay',
    url: 'https://nmtplay.co.za',
    description:
      'A website where users can find free downloads targeted at Young people in the Ezibeleni community of Queenstown.',
  },
  {
    name: 'Past Exam Question Papers and Memos API',
    url: 'https://github.com/namootatech/south-african-past-exam-papers-api/tree/main',
    description: 'A free API for Past Exam Question Papers and Memos.',
  },
  {
    name: 'South African Fake ID Generator',
    url: 'https://github.com/AyabongaQwabi/south-african-fake-id-generator',
    description:
      'An npm package and Website for gnerating fake South African IDs',
  },
];

export default function Resources() {
  return (
    <section
      id='resources'
      className='py-20 px-4 sm:px-6 lg:px-8 bg-yellow-600 relative overflow-hidden'
    >
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          className='text-3xl sm:text-4xl font-bold mb-12 text-center text-white'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Qwabi Family Resources
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <table className='w-full border-collapse'>
            <thead>
              <tr className='bg-yellow-800'>
                <th className='p-3 text-left text-gray-300 font-semibold'>
                  Resource Name
                </th>
                <th className='p-3 text-left text-gray-300 font-semibold'>
                  Description
                </th>
                <th className='p-3 text-left text-gray-300 font-semibold'>
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {resources.map((resource, index) => (
                <tr
                  key={resource.name}
                  className={
                    index % 2 === 0
                      ? 'bg-yellow-800 bg-opacity-50'
                      : 'bg-yellow-700 bg-opacity-50'
                  }
                >
                  <td className='p-3 border-t border-yellow-600'>
                    {resource.name}
                  </td>
                  <td className='p-3 border-t border-yellow-600'>
                    {resource.description}
                  </td>
                  <td className='p-3 border-t border-yellow-600'>
                    <a
                      href={resource.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-300 hover:text-gray-100 transition-colors duration-300'
                    >
                      Visit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
