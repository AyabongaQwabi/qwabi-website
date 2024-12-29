import React from 'react';

export default function Footer() {
  return (
    <footer id='connect' className='bg-green-900 text-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-xl font-semibold mb-4'>About Qwabi Family</h3>
            <p className='text-gray-300'>
              Preserving our heritage while building a brighter future for
              generations to come.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#legacy' className='text-gray-300 hover:text-white'>
                  Our Legacy
                </a>
              </li>
              <li>
                <a href='#values' className='text-gray-300 hover:text-white'>
                  Our Values
                </a>
              </li>
              <li>
                <a href='#mission' className='text-gray-300 hover:text-white'>
                  Our Mission
                </a>
              </li>
              <li>
                <a href='#connect' className='text-gray-300 hover:text-white'>
                  Connect With Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Contact</h3>
            <p className='text-gray-300'>
              eSikhwanqeni Village
              <br />
              Lady Frere
              <br />
              Eastern Cape, South Africa
            </p>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-700'>
          <p className='text-center text-gray-300'>
            © {new Date().getFullYear()} Qwabi Family. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
