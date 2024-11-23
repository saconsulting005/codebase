import React from "react";
import Image from "next/image";

const BusinessSolutionsSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-white">
      {/* Left Section - Image (Hidden on Small Screens) */}
      <div className="w-full md:w-1/2 hidden md:flex justify-center items-center relative">
        <div className="w-[90%]  h-[90%] lg:h-[80%] xl:h-[100%] overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/assets/business-solutions.PNG" // Replace with your image path
            alt="Progressive solutions"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Right Section - Text */}
      <div className="w-full md:w-1/2 rounded-lg bg-[#009CDE] flex flex-col justify-center items-start gap-6 px-4 sm:px-6 lg:px-[60px] xl:px-[80px] py-6 sm:py-8 lg:py-[40px] text-left">
        {/* Subheading */}
        <p className="text-[#FF5900] text-[12px] sm:text-[14px] md:text-[16px] font-bold uppercase">
          Business Consulting
        </p>
        {/* Heading */}
        <h2 className="text-white text-[20px]  md:text-[32px] xl:text-[33px] font-extrabold leading-snug">
          Progressive solutions for progressive businesses.
        </h2>
        {/* Description */}
        <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[rgba(255,255,255,0.8)] leading-[22px] sm:leading-[24px]">
          We help businesses evolve with smart, scalable solutions. From
          strategy to execution, our tailored approach ensures your success.
          Join the next wave of innovation today.
        </p>
        {/* Button */}
        <button className="bg-white text-[#009CDE] px-5 sm:px-6 py-2 sm:py-3 text-[14px] sm:text-[16px] font-bold rounded-full shadow-md hover:bg-[#FF5900] hover:text-white transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default BusinessSolutionsSection;
