import React from "react";
import Image from "next/image";

const AboutOffer: React.FC = () => {
  return (
    <div className="bg-[#F8F8F8] py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-[151px] px-6">
        {/* Left Content */}
        <div className="max-w-[600px]">
          <div className="text-[#FF5900] text-[16px] font-[600] uppercase mb-4">
            About 
          </div>
          <h2 className="text-[#009CDE] text-[40px] font-[600] mb-6 leading-snug">
          Purpose drives us
          </h2>
          <p className="text-[16px] text-[rgba(0,13,81,0.6)] font-[400] leading-normal">
            Sit aliquet tempus elementum ac nibh lorem nulla morbi nullam.
            Tincidunt massa amet sagittis aliquam turpis volutpat. Vitae aliquam
            malesuada varius felis. Risus aliquam aliquam consequat habitant. Id
            elit turpis amet vel at sapien. Massa tempus augue lobortis enim
            quam consectetur dictum. Elementum id tortor venenatis lectus sed.
            Adipiscing nisi felis aliquam nunc. Quis et sed ac urna augue
            feugiat mi eget. Eget viverra egestas porta consectetur commodo
            ante.
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
