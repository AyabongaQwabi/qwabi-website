import Head from 'next/head';
import Footer from '@/components/Footer';
import { NextSeo } from 'next-seo';
import { Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  const phoneNumber = '+27602023083';
  const whatsappUrl = `https://wa.me/27602023083?text=Hello%20Qwabi%20Family,%20I%20would%20like%20to%20get%20in%20touch.`;

  return (
    <div className='bg-black text-white'>
      <NextSeo
        title='Contact: Qwabi'
        description='Contact Us!'
        canonical='https://qwabi.co.za/contact'
        openGraph={{
          url: 'https://qwabi.co.za/contact',
        }}
      />
      <Head>
        <title>Contact - Qwabi Family</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='text-gray-600 body-font relative'>
        <div className='container px-5 pt-24 pb-16 mx-auto'>
          <div className='flex flex-col text-center w-full mb-12'>
            <h1 className='sm:text-5xl text-2xl font-semibold title-font mb-4 text-white'>
              Contact Us
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base font-semibold'>
              Contact us if you have any issues with the website or just want to
              ask a question!
            </p>
          </div>

          <div className='lg:w-1/2 md:w-2/3 mx-auto'>
            {/* Contact Buttons Section */}
            <div className='text-center'>
              <h3 className='text-xl font-semibold text-white mb-4'>
                Contact the Eastern Cape Qwabi Family
              </h3>
              <p className='text-gray-300 mb-8'>
                Reach out to us directly through call or WhatsApp
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
                {/* Call Button */}
                <a
                  href={`tel:${phoneNumber}`}
                  className='flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 min-w-[200px] justify-center'
                >
                  <Phone size={20} />
                  Call Us
                </a>

                {/* WhatsApp Button */}
                <a
                  href={whatsappUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 min-w-[200px] justify-center'
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>

              <div className='text-gray-300 mb-8'>
                <p className='font-semibold text-lg'>{phoneNumber}</p>
              </div>

              <div className='pt-8 border-t border-gray-200 text-center'>
                <a className='text-indigo-500 text-lg'>bqwabi@gmail.com</a>
                <p className='leading-normal my-5 text-gray-300'>
                  eSikhwanqeni Village, Lady Frere, Eastern Cape, South Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
