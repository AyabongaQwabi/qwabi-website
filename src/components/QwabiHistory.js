import React from 'react';
import { motion } from 'framer-motion';

export default function QwabiHistory() {
  return (
    <section
      id='history'
      className='py-20 px-4 sm:px-6 lg:px-8 bg-yellow-900 bg-opacity-80 relative overflow-hidden'
    >
      <div className='max-w-6xl mx-auto relative z-10'>
        <motion.h2
          className='text-3xl sm:text-4xl font-bold mb-12 text-center text-green-300'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Qwabi Family History
        </motion.h2>
        <motion.div
          className='bg-green-800 bg-opacity-70 p-8 rounded-lg shadow-lg'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className='text-2xl font-semibold mb-4 text-yellow-300'>
            Our Ancestral Lineage
          </h3>
          <ul className='list-disc list-inside space-y-2 mb-6'>
            <li>
              Our earliest known ancestor is <strong>Sonyethe</strong>.
            </li>
            <li>
              <strong>Sonyethe</strong> fathered <strong>Nqumama</strong>.
            </li>
            <li>
              <strong>Nqumama</strong> had two sons: <strong>Qwabi</strong> and{' '}
              <strong>Gudu</strong>, who are brothers.
            </li>
            <li>The Gudu family are our cousins.</li>
          </ul>

          <h3 className='text-2xl font-semibold mb-4 text-yellow-300'>
            The Qwabi Line
          </h3>
          <ul className='list-disc list-inside space-y-2 mb-6'>
            <li>
              <strong>Qwabi</strong> had a son named <strong>Olifant</strong>,
              our oldest ancestor whose grave is in eSikhwqanqeni village in the
              Eastern Cape.
            </li>
            <li>
              <strong>Olifant</strong> fathered five sons: Yanki, Dumile,
              Rhorho, Khululekile, and Bhangile.
            </li>
            <li>
              The current Qwabi descendants from this line live in the
              Queenstown, Ndlovukazi, and Lady Frere regions.
            </li>
          </ul>

          <h3 className='text-2xl font-semibold mb-4 text-yellow-300'>
            The Gudu Line
          </h3>
          <ul className='list-disc list-inside space-y-2 mb-6'>
            <li>
              <strong>Gudu</strong> had a son named <strong>Bhanisi</strong>.
            </li>
            <li>The current Gudu descendants live in Lady Frere.</li>
          </ul>

          <h3 className='text-2xl font-semibold mb-4 text-yellow-300'>
            Other Qwabi Branches
          </h3>
          <ul className='list-disc list-inside space-y-2 mb-6'>
            <li>
              There are Qwabi family members in Cape Town, but their exact
              lineage is currently unknown.
            </li>
            <li>
              It's important to note that Qwabi is distinct from Qwabe, which is
              a separate family.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
