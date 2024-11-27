import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] flex items-center bg-[#009CDE]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-background.png"
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
      <div className="relative z-10 max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] px-[20px] md:px-[40px] lg:px-[60px] xl:pl-[100px] text-white">
       
        {/* Heading */}
        <h1 className="text-[20px] md:text-[26px] lg:text-[32px] xl:text-[34px] font-bold leading-tight mb-4 md:mb-6">
          Be a catalyst for creating value through volatility.
        </h1>

        {/* Subtext */}
        <p className="text-[13px]  md:text-[14px] lg:text-[16px] xl:text-[18px] font-light leading-relaxed mb-6 md:mb-8 xl:mb-10 opacity-90">
          The rate of change is accelerating for most businesses. Our industry
          specialists help organizations like yours navigate that change – and
          solve seemingly unsolvable problems.
        </p>

        {/* Icons Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 mb-6 md:mb-8">
          <div className="flex items-center space-x-3">
            <div
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-white"
              aria-label="Innovation Icon"
            >
              <span className="text-white text-sm md:text-lg">&#8594;</span>
            </div>
            <span className="text-[12px] md:text-[14px] lg:text-[16px] font-light">
              Innovation
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div
              className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-white"
              aria-label="Strategic Excellence Icon"
            >
              <span className="text-white text-sm md:text-lg">&#8594;</span>
            </div>
            <span className="text-[12px] md:text-[14px] lg:text-[16px] font-light">
              Strategic Excellence
            </span>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-row gap-4 md:gap-6">
  <Link href="/services">
    <button
      className="px-6 py-2 md:px-8 md:py-2 lg:px-10 lg:py-3 bg-white text-[#009CDE] text-[12px] md:text-[14px] lg:text-[16px] font-medium rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      aria-label="Discover How"
    >
      Discover How
    </button>
  </Link>

  <Link href="/learn-more">
    <button
      className="px-6 py-2 md:px-8 md:py-2 lg:px-10 lg:py-3 border-2 border-white text-white text-[12px] md:text-[14px] lg:text-[16px] font-medium rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      aria-label="Learn More"
    >
      Learn More
    </button>
  </Link>
</div>

      </div>
    </div>
  );
};

export default HeroSection;
