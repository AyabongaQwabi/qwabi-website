import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Our Legacy', href: '#legacy' },
    { name: 'Values', href: '#values' },
    { name: 'Mission', href: '#mission' },
    { name: 'People', href: '#people' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resources', href: '#resources' },
    { name: 'Connect', href: '#connect' },
  ];

  return (
    <nav className='fixed w-full z-50 bg-green-950 bg-opacity-20 backdrop-blur-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <a href='/' className='text-white text-2xl font-bold'>
              Qwabi
            </a>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-800 focus:outline-none'
            >
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}