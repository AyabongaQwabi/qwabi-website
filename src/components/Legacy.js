import React from 'react';
import { motion } from 'framer-motion';

export default function Legacy() {
  return (
    <section
      id='legacy'
      className='py-20 px-4 sm:px-6 lg:px-8 bg-green-950 relative overflow-hidden'
    >
      <div className='max-w-4xl mx-auto relative z-10'>
        <motion.h2
          className='text-3xl sm:text-4xl font-bold mb-8 text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Legacy
        </motion.h2>
        <motion.div
          className='space-y-6 text-lg'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            We are the proud descendants of Sonyethe, Nqumama, Gudu & Qwabi,
            tracing our roots back to eSikhwanqeni Village in Lady Frere. Our
            heritage is deeply rooted in the rich soil of the Eastern Cape, a
            land that nurtures both our history and our spirit.
          </p>
          <p>
            Our lineage connects us to our ancestors and the values they have
            instilled in us: Honour, Integrity, and Respect. These principles
            guide us in our relationships with each other, our community, and
            the world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
