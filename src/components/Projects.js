import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Namoota Technology',
    link: 'https://namoota.co.za',
    description:
      'Helps SMEs and non profits organisations build digital products and services',
  },
  {
    name: 'Nomava',
    description:
      'An initiative to promote and spread knowledge and protect Xhosa culture and traditions',
  },
  {
    name: 'AyasTracker',
    description:
      'A cellphone tracking utility aimed at securely tracking mobile devices with no sim cards',
  },
  {
    name: 'Helpem',
    description:
      'A donation collection platform aimed at affiliate networks and charities built by Namoota Technology (Fomerly Midas Touch Technologies) in partnership with the Food On Every Table Foundation',
  },
  {
    name: 'ClinicPlus',
    description:
      'ClinicPlus is a web application that allows clinics to manage their patients and appointments built by Namoota Technology (Fomerly Midas Touch Technologies) in partnership with Tecla Digital',
  },
  {
    name: 'Fundibot',
    description:
      'A career guidance website for young people in South Africa built by Namoota Technology (Fomerly Midas Touch Technologies)',
  },
  {
    name: 'Warner Music Culture Shifters',
    description:
      'A Platform for music lovers to learn and share their passion for music built by Namoota Technology (Fomerly Midas Touch Technologies) in partnership with Warner Music South Africa',
  },
];

export default function Projects() {
  return (
    <section
      id='projects'
      className='py-20 px-4 sm:px-6 lg:px-8 bg-green-900 relative overflow-hidden'
    >
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          className='text-3xl sm:text-4xl font-bold mb-12 text-center text-yellow-300'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <table className='w-full border-collapse'>
            <thead>
              <tr className='bg-green-800'>
                <th className='p-3 text-left text-yellow-300 font-semibold'>
                  Project Name
                </th>
                <th className='p-3 text-left text-yellow-300 font-semibold'>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr
                  key={project.name}
                  className={
                    index % 2 === 0
                      ? 'bg-green-800 bg-opacity-50'
                      : 'bg-green-700 bg-opacity-50'
                  }
                >
                  <td className='p-3 border-t border-green-600'>
                    {project.name}
                  </td>
                  <td className='p-3 border-t border-green-600'>
                    {project.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        <motion.div
          className='text-center mt-12'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href='#contact'
            className='inline-block bg-yellow-500 text-green-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-yellow-400 hover:shadow-lg'
          >
            Partner with the Qwabi Family
          </a>
        </motion.div>
      </div>
    </section>
  );
}
