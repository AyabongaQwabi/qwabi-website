import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Legacy from '@/components/Legacy';
import Values from '@/components/Values';
import Mission from '@/components/Mission';
import QwabiHistory from '@/components/QwabiHistory';
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
        title='Qwabi Family | A People Steadfast in Faith and Action'
        description='The Qwabi family is an old family situated in the heart of Lady Frere. They are descendants of Sonyethe of the AmaQithi clan in the Thembu nation. We value Humility, Integrity, Honour, and Respect. Our faith and actions aim to make a positive difference, whether small or great. Find us in eSikhwanqeni Village, Lady Frere, Eastern Cape, South Africa. This website was built by Ayabonga Qwabi Contact us on contact@qwabi.co.za.'
        canonical='https://qwabi.co.za'
        openGraph={{
          url: 'https://qwabi.co.za',
          title: 'Qwabi Family | A People Steadfast in Faith and Action',
          description:
            'The Qwabi family is an old family situated in the heart of Lady Frere. Descendants of Sonyethe of the AmaQithi clan in the Thembu nation, we strive for positive impacts with Humility, Integrity, Honour, and Respect.',
          images: [
            {
              url: 'https://qwabi.co.za/og.jpg',
              width: 1200,
              height: 630,
              alt: 'Qwabi Family | A People Steadfast in Faith and Action',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Qwabi Family',
        }}
        additionalMetaTags={[
          {
            name: 'application-name',
            content: 'Qwabi Family',
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Qwabi Family',
          },
          {
            name: 'theme-color',
            content: '#1e293b', // Adjust this to match the branding color
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png', // Include your specific Apple icon file
            sizes: '180x180',
          },
          {
            rel: 'manifest',
            href: '/manifest.json',
          },
        ]}
      />
      <BackgroundPattern />
      <div className='absolute inset-0 bg-black opacity-30'></div>
      <div className='relative z-10'>
        <Navbar />
        <Hero />
        <Legacy />
        <QwabiHistory />
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
