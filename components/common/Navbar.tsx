"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Career', href: '/career' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <div className="bg-[#F3F3F3] dark:bg-gray-900">
      <nav className="flex justify-between items-center w-[90%] max-w-[1440px] mx-auto py-4">
        {/* Logo Section */}
        <Link href="/" aria-label="Go to homepage">
          <div className="flex items-center p-3 rounded ">
            <Image
              src="/assets/Logo.png"
              alt="Logo"
              width={50}
              height={50}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-[16px] font-semibold text-[#009CDE] dark:text-white">
          {links.map((link, index) => (
            <li
              key={index}
              className="relative cursor-pointer hover:after:content-[''] hover:after:block hover:after:h-0.5 hover:after:w-full hover:after:absolute hover:after:bg-[#009CDE] hover:after:bottom-[-2px] after:transition-all after:duration-300"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Button Section */}
        <div className="hidden md:block">
          <button className="px-6 py-2 rounded-md font-semibold border-2 border-[#009CDE] text-[#009CDE] hover:bg-[#009CDE] hover:text-white transition-all duration-300">
            Get in touch
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md bg-[#009CDE] text-white focus:outline-none"
          >
            <div
              className={`w-6 h-1 bg-white mb-1 transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-white mb-1 transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-white transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F3F3F3] dark:bg-gray-900">
          <ul className="flex flex-col space-y-4 text-center py-4 text-[16px] font-semibold text-[#009CDE] dark:text-white">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
