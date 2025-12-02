"use client";  

import React, { useState } from 'react';  
import Link from 'next/link';  
import Image from 'next/image';  
import { ChevronDown } from 'lucide-react';  

const Navbar: React.FC = () => {  
  const [isOpen, setIsOpen] = useState(false);  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);  

  const links = [  
    { name: 'Home', href: '/' },  
    { name: 'Services', href: '/services' },  
    { name: 'Industries', href: '/industries' },  
    { name: 'Career', href: '/career' },  
    { name: 'About Us', href: '/about-us' },  
    { name: 'Contact Us', href: '/contact-us' },  
  ];  

  const handleMenuItemClick = () => {  
    setIsOpen(false);  
    setIsDropdownOpen(false);  
  };  

  return (  
    <div className="bg-[#F3F3F3] dark:bg-gray-900">  
      <nav className="flex justify-between items-center w-[90%] max-w-[1440px] mx-auto py-4">
        <Link href="/" aria-label="Go to homepage" className="flex items-center">
          <Image src="/assets/logo1.png" alt="Logo"  width={70} height={70} priority />
          <div className="flex flex-col justify-center">
            <div className="font-semibold leading-none" style={{ fontSize: '1.3rem', color: 'rgb(181, 22, 27)' }}>
              SA
            </div>
            <div className="font-semibold leading-none" style={{ fontSize: '1.3rem', color: 'rgb(181, 22, 27)' }}>
              CONSULTING
            </div>
            <div className="font-semibold leading-none" style={{ fontSize: '0.875rem', color: 'rgb(181, 22, 27)' }}>
              CERTIFIED PUBLIC ACCOUNTANTS
            </div>
          </div>
        </Link>

        <ul className="hidden md:flex space-x-8 text-[16px] font-semibold text-[#009CDE] dark:text-white">  
          {links.map((link, index) => (  
            <li key={index} className="relative cursor-pointer">  
              {link.name === 'Services' ? (  
                <div className="group relative flex items-center cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>  
                  <Link href={link.href} className="mr-1">{link.name}</Link>  
                  <ChevronDown className={`transition-transform duration-300 transform ${isDropdownOpen ? 'rotate-180' : ''}`} />  
                </div>  
              ) : (  
                <Link href={link.href}>{link.name}</Link>  
              )}  

              {isDropdownOpen && link.name === 'Services' && (  
                <div className="absolute left-0 mt-4 flex flex-col space-y-4 bg-white text-black p-4 rounded-md shadow-lg w-full md:w-auto z-10">  
                  {['Audit', 'Tax', 'Advisory', 'Consulting'].map(service => (  
                    <Link   
                      key={service}   
                      href={`/services/${service.toLowerCase()}`}   
                      className="block py-2 px-4 hover:bg-[#f0f0f0] hover:border-b-2 border-[#009CDE]"   
                      onClick={handleMenuItemClick}  
                    >  
                      {service}  
                    </Link>  
                  ))}  
                </div>  
              )}  
            </li>  
          ))}  
        </ul>  

        <div className="hidden md:block">  
          <Link href="contact-us" className="px-6 py-3 rounded-md font-semibold border-2 border-[#009CDE] text-[#009CDE] hover:bg-[#009CDE] hover:text-white transition-all duration-300">  
            Get in touch  
          </Link>  
        </div>  

        <div className="md:hidden">  
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md bg-[#009CDE] text-white focus:outline-none">  
            <div className={`w-6 h-1 bg-white mb-1 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>  
            <div className={`w-6 h-1 bg-white mb-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>  
            <div className={`w-6 h-1 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>  
          </button>  
        </div>  
      </nav>  

      {isOpen && (
             <div className="md:hidden bg-[#F3F3F3] dark:bg-gray-900">
             <ul className="flex flex-col space-y-4 text-center py-4 text-[16px] font-semibold text-[#009CDE] dark:text-white">
               {links.map((link, index) => (
                 <li key={index} className="relative">
                   {link.name === 'Services' ? (
                     <div>
                       <button 
                         onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
                         className="flex items-center justify-center gap-2 w-full py-4 text-center hover:bg-[#f0f0f0] transition-colors duration-200"
                       >
                         Services
                         <ChevronDown className={`transition-transform duration-300 transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                       </button>
                       {isDropdownOpen && (
                         <div className="flex flex-col space-y-4 px-4 py-2 w-full bg-white text-black rounded-md shadow-lg transition-transform duration-300">
                           {['Audit', 'Tax', 'Advisory', 'Consulting'].map(service => (
                             <Link 
                               key={service} 
                               href={`/services/${service.toLowerCase()}`} 
                               className="block py-2 text-center hover:bg-[#f0f0f0] transition-colors duration-200"
                               onClick={handleMenuItemClick}
                             >
                               {service}
                             </Link>
                           ))}
                         </div>
                       )}
                     </div>
                   ) : (
                     <Link href={link.href} onClick={handleMenuItemClick} className="block py-4 text-center hover:bg-[#f0f0f0] transition-colors duration-200">{link.name}</Link>
                   )}
                 </li>
               ))}
             </ul>
           </div>
      )}
    </div>  
  );  
};  

export default Navbar;