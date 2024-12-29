import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Legacy from '../components/Legacy';
import Values from '../components/Values';
import Mission from '../components/Mission';
import PeopleYouMayKnow from '../components/PeopleYouMayKnow';
import Projects from '../components/Projects';
import Resources from '../components/Resources';
import Connect from '../components/Connect';
import Footer from '../components/Footer';
import BackgroundPattern from '../components/BackgroundPattern';

export default function Main() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-yellow-900 text-white relative overflow-hidden'>
      <BackgroundPattern />
      <div className='absolute inset-0 bg-black opacity-30'></div>
      <div className='relative z-10'>
        <Navbar />
        <Hero />
        <Legacy />
        <Values />
        <Mission />
        <PeopleYouMayKnow />
        <Projects />
        <Resources />
        <Connect />
        <Footer />
      </div>
    </div>
  );
}
