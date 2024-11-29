// ExpertiseSection.tsx  
"use client";  

import React from 'react';  
import { Hotel, HardHat, ShoppingCart, TrendingUp } from 'lucide-react'; // Ensure correct icon imports  

const ExpertiseSection = () => {  
  const areasOfExpertise = [  
    { title: 'Hotel, Tourism & Guest House', icon: <Hotel size={48} className="text-blue-600" /> },  
    { title: 'Construction', icon: <HardHat size={48} className="text-blue-600" /> },  
    { title: 'Retail', icon: <ShoppingCart size={48} className="text-blue-600" /> }, // Use ShoppingCart for Retail  
    { title: 'Trading', icon: <TrendingUp size={48} className="text-blue-600" /> },  
  ];  

  return (  
    <div className="max-w-6xl mx-auto p-6">  
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">SA Consulting has deep expertise in:</h2>  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">  
        {areasOfExpertise.map((area, index) => (  
          <div  
            key={index}  
            className="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-white"  
          >  
            <div className="mb-4 flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">  
              {area.icon}  
            </div>  
            <h3 className="text-lg font-semibold text-blue-700 text-center">{area.title}</h3>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default ExpertiseSection;