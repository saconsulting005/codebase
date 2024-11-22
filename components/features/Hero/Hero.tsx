import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[700px] flex items-center bg-[#009CDE]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-background.png" // Replace with your image path
          alt="Hero Background"
          fill
          objectFit="cover"
          objectPosition="right"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#009CDE] to-[rgba(0,156,222,0)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[700px] pl-[100px] text-white">
        {/* Subheading */}
        <div className="text-[14px] font-medium uppercase tracking-wide mb-4">
          Consulting
        </div>

        {/* Heading */}
        <h1 className="text-[46px] font-bold leading-tight mb-6">
          Be a catalyst for creating value through volatility.
        </h1>

        {/* Subtext */}
        <p className="text-[18px] font-light leading-relaxed mb-10 opacity-90">
          The rate of change is accelerating for most businesses. Our industry
          specialists help organizations like yours navigate that change – and
          solve seemingly unsolvable problems.
        </p>

        {/* Icons Section */}
        <div className="flex space-x-12 mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white">
              <span className="text-white text-lg">&#8594;</span>
            </div>
            <span className="text-[16px] font-light">Innovation</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white">
              <span className="text-white text-lg">&#8594;</span>
            </div>
            <span className="text-[16px] font-light">Strategic Excellence</span>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex space-x-8">
          <button className="px-10 py-2 bg-white text-[#009CDE] font-medium rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            Discover How
          </button>
          <button className="px-10 py-2 border-2 border-white text-white font-medium rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
