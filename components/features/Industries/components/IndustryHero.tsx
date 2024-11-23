import React from "react";
import Image from "next/image";

const IndustryHero: React.FC = () => {
  return (
    <div className="relative flex items-center h-[411px]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/industry/industryhero.png" // Replace with the correct image path
          alt="Industry Background"
          fill
          className="object-cover"
          priority // Ensures the image loads quickly
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,156,222,0.95)] to-[rgba(0,156,222,0)]"></div>
      </div>

      {/* Content */}
      <div className="relative w-full px-6 sm:px-10 lg:px-20 text-left">
        {/* Title */}
        <h1 className="text-white font-albert-sans font-semibold text-lg sm:text-xl md:text-2xl mb-2">
          Industries
        </h1>

        {/* Description */}
        <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed">
          Insurance
        </p>
      </div>
    </div>
  );
};

export default IndustryHero;
