"use client"; // Mark this component as a Client Component

import React from 'react';
import { MessageCircle } from 'lucide-react';  // Import the 'MessageCircle' icon from lucide-react

const Whatsapp = () => {
  const whatsappNumber = '+250791569952'; 
  const message = 'Hello Mr. Sajid, I hope you will be fine!';

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center space-x-2 group">
      {/* Tooltip for hover */}
      <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-in-out bg-gray-800 text-white text-sm px-3 py-1 rounded-lg shadow-lg">
        Chat with us on WhatsApp
      </div>

      {/* WhatsApp button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 hover:shadow-xl hover:shadow-green-500/50"
        aria-label="Start WhatsApp Chat"
      >
        {/* MessageCircle icon from lucide-react */}
        <MessageCircle className="text-white text-3xl" />
        
        {/* Notification Dot */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></span>
        
        {/* Screen Reader Text */}
        <span className="sr-only">Chat with us on WhatsApp</span>
      </a>
    </div>
  );
};

export default Whatsapp;
