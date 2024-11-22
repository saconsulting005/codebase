

import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center items-start pt-4 bg-[#F3F3F3]">
      <nav className="flex justify-between items-center w-[80%] max-w-[1440px] mx-auto px-4 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="p-3 rounded bg-[#009CDE]">
            {/* Replace with your actual logo */}
            <Image src="/assets/Icon.png" alt="Logo" width={40} height={40} priority />
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-[16px] font-semibold text-[#009CDE]">
          {['Home', 'Services', 'Industries', 'Insights', 'About', 'Contact'].map((link, index) => (
            <li
              key={index}
              className="relative cursor-pointer hover:after:content-[''] hover:after:block hover:after:h-0.5 hover:after:w-full hover:after:absolute hover:after:bg-[#009CDE] hover:after:bottom-[-2px] after:transition-all after:duration-300"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Button Section */}
        <div>
          <button className="px-6 py-2 rounded-md font-semibold border-2 border-[#009CDE] text-[#009CDE] hover:bg-[#009CDE] hover:text-white transition-all duration-300">
            Get in touch
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
