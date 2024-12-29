import React from 'react';
import { motion } from 'framer-motion';

const familyMembers = [
  {
    name: 'Ayabonga Qwabi',
    title: 'Cloud Architect & Software Engineer',
    description: 'Specializes in web development and AI',
    email: 'contact@qwabi.co.za',
  },
  {
    name: 'Simphiwe Qwabi',
    title: 'Psira Security Officer',
    description: 'Helps secure premises SMEs',
    email: 'contact@qwabi.co.za',
  },
  {
    name: 'Onwaba Qwabi',
    title: 'Environmental Officer',
    description:
      'Helps corporations magnage their environmental compliance policies.',
    email: 'contact@qwabi.co.za',
  },
  {
    name: 'Lukhanyo Qwabi',
    title: 'Psira Security Officer',
    description: 'Helps secure premises SMEs',
    email: 'contact@qwabi.co.za',
  },
  {
    name: 'Den Marere',
    title: 'Social Media Manager',
    description: 'Helps SMEs manage the social media presence',
    email: 'contact@qwabi.co.za',
  },
  {
    name: 'Gcobani Qwabi',
    title: 'Entrepreneur',
    description: 'Builds and manages businesses',
    email: 'contact@qwabi.co.za',
  },
  {
    name: 'Thembisa Qwabi',
    title: 'Proffessional Nurse',
    description: 'Helps manage hospitals and health care facilities',
    email: 'contact@qwabi.co.za',
  },
  {
    name: 'Wendy Qwabi',
    title: 'Proffessional',
    description:
      'Helps businesses reach their goals and objectives with strategic execution and innovation.',
    email: 'contact@qwabi.co.za',
  },
  {
    name: 'Siphelele Qwabi',
    title: 'Proffessional',
    description:
      'Helps businesses reach their goals and objectives with strategic execution and innovation.',
    email: 'contact@qwabi.co.za',
  },
  {
    name: 'Amos Qwabi',
    title: 'Private Security Specialist',
    description:
      'Fosters a safe and secure environment for individuals and organizations.',
    email: 'contact@qwabi.co.za',
  },
];

export default function PeopleYouMayKnow() {
  return (
    <section
      id='people'
      className='py-20 px-4 sm:px-6 lg:px-8 bg-yellow-600 relative overflow-hidden'
    >
      <div className='max-w-6xl mx-auto relative z-10'>
        <motion.h2
          className='text-3xl sm:text-4xl font-bold mb-12 text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          People You May Know
        </motion.h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {familyMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className='bg-black bg-opacity-50 p-6 rounded-lg relative overflow-hidden'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className='absolute top-0 right-0 w-16 h-16 bg-green-500 opacity-10 transform translate-x-8 -translate-y-8 rotate-45'></div>
              <h3 className='text-xl font-semibold mb-2'>{member.name}</h3>
              <p className='text-yellow-300 mb-2'>{member.title}</p>
              <p className='text-sm mb-4'>{member.description}</p>
              <p className='text-green-100'>{member.email}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
