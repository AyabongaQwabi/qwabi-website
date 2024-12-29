import React from 'react';
import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-green-950 bg-opacity-30 backdrop-blur-md'>
      <div className='max-w-4xl mx-auto'>
        <motion.h2
          className='text-3xl sm:text-4xl font-bold mb-8 text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Mission
        </motion.h2>
        <motion.div
          className='space-y-6 text-lg'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            We aim to preserve our heritage while embracing opportunities to
            make a positive impact in our world. As children of the soil, we are
            deeply connected to the land and its people, carrying forward a
            legacy of humility and community-mindedness.
          </p>
          <p>
            Through our private cloud and this website, we seek to strengthen
            family ties, share our story, and create opportunities for growth
            and collaboration. We are a family that looks forward while staying
            rooted in our past, seeking business opportunities that align with
            our values and allow us to make a lasting, positive impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
