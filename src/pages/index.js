import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Legacy from '@/components/Legacy';
import Values from '@/components/Values';
import Mission from '@/components/Mission';
import PeopleYouMayKnow from '@/components/PeopleYouMayKnow';
import Projects from '@/components/Projects';
import Resources from '@/components/Resources';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';
import BackgroundPattern from '@/components/BackgroundPattern';
import { NextSeo } from 'next-seo';

export default function Main() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-yellow-900 text-white relative overflow-hidden'>
      <NextSeo
        title='Qwabi Family | A people steadfast in faith and action.'
        description='The Qwabi family is an old family situated in the heart of Lady Frere. They are originally Descendants of Sonyethe of the AmaQithi clan in the Thembu nation.We value Humility, Integrity, Honour, and Respect. We are a family that is steadfast in faith and action, and we believe that our actions will make a difference in the world wether little or great. We strive for positive impacts. You can find our home in EsKhwanqeni Village, Lady Frere, Eastern Cape, South Africa. Contact us at contact@qwabi.co.za'
        canonical='https://qwabi.co.za'
        openGraph={{
          url: 'https://qwabi.co.za',
        }}
      />
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
