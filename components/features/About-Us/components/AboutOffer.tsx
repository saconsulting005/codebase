import React from "react";
import Image from "next/image";

const AboutOffer: React.FC = () => {
  return (
    <div className="bg-[#F8F8F8] py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-[151px] px-6">
        {/* Left Content */}
        <div className="max-w-[600px]">
          <div className="text-[#FF5900] text-[16px] font-[600] uppercase mb-4">
            About Us
          </div>
          <h2 className="text-[#009CDE] text-[40px] font-[600] mb-6 leading-snug">
          Purpose drives us
          </h2>
          <p className="text-[16px] text-[rgba(0,13,81,0.6)] font-[400] leading-normal">
          Our Purpose is Shaping Your Better Tomorrow and we are driven by passion to become the Certified Public Accounting firm of choice in Rwanda, striving for continual growth based upon a reputation of excellence derived from proven results. This could only be reached through hard work and cultivating relationships built on trust and reliability, hence earn respect of Rwanda’s business and financial communities.
          </p>
        </div>

        {/* Right Content (Image) */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/service-image.png"
            alt="Team discussion"
            width={400}
            height={400}
            className="rounded-lg shadow-md"
            priority
          />
        </div>
      </div>

      {/* Cards Section */}
     
   
    </div>
  );
};

export default AboutOffer;
