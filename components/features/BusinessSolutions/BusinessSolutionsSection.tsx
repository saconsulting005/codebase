import React from "react";
import Image from "next/image";

const BusinessSolutionsSection: React.FC = () => {
  return (
    <div className="flex w-full h-[720px] bg-white">
      {/* Left Section - Image */}
      <div className="w-1/2 flex justify-center items-center relative">
        <div className="w-[90%] h-[90%] overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/assets/business-solutions.png" // Replace with your image path
            alt="Progressive solutions"
            layout="fill"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Right Section - Text */}
      <div className="w-1/2 bg-[#009CDE] flex flex-col justify-center items-start gap-6 px-[80px] py-[40px]">
        {/* Subheading */}
        <p className="text-[#FF5900] text-[16px] font-[600] uppercase">
          Business Consulting
        </p>
        {/* Heading */}
        <h2 className="text-white text-[40px] font-[600] leading-snug">
          Progressive solutions for progressive businesses.
        </h2>
        {/* Description */}
        <p className="text-[16px] text-[rgba(255,255,255,0.8)] leading-[24px]">
          Sed lorem ut nulla tortor sit eget felis. Integer malesuada curabitur
          vel interdum leo justo at ultricies. Sit aliquet tempus elementum ac
          nibh lorem nulla morbi nullam. Tincidunt massa amet sagittis aliquam
          turpis volutpat. Vitae aliquam malesuada varius felis.
        </p>
        {/* Button */}
        <button className="bg-white text-[#009CDE] px-6 py-3 text-[16px] font-[600] rounded-full transition-transform hover:scale-105 shadow-md">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default BusinessSolutionsSection;
