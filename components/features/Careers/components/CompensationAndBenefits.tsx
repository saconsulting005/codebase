import React from "react";
import Image from "next/image";

const CompensationAndBenefits: React.FC = () => {
  return (
    <div className="bg-gray-50 px-4 sm:px-6 lg:px-16 py-12 flex flex-col items-center">
      {/* Grid for Content and Images */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
        {/* First Section */}
        <div className="order-1 lg:order-1">
          <h3 className="text-xl sm:text-2xl font-bold text-[#009CDE] font-['Albert Sans'] leading-tight">
            Generous compensation and benefits
          </h3>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#333333] font-normal opacity-70 leading-relaxed">
            SA offers a competitive salary for your field and full benefits
            right away, including accreditation reimbursement for licensing and
            certifications, continuing professional education credits, and a
            variety of rewards and bonuses.
          </p>
        </div>
        <div className="order-2 lg:order-2">
          <Image
            src="/assets/career/career1.png"
            alt="Generous compensation and benefits"
            width={600}
            height={300}
            className="w-full h-60 object-cover rounded-lg"
            priority // Ensure faster loading
          />
        </div>

        {/* Second Section */}
        <div className="order-4 lg:order-3">
          <Image
            src="/assets/career/career2.png"
            alt="Flexible scheduling and paid time off"
            width={600}
            height={300}
            className="w-full h-60 object-cover rounded-lg"
            priority // Ensure faster loading
          />
        </div>
        <div className="order-3 lg:order-4">
          <h3 className="text-xl sm:text-2xl font-bold text-[#009CDE] font-['Albert Sans'] leading-tight">
            Flexible scheduling and paid time off
          </h3>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#333333] font-normal opacity-70 leading-relaxed">
            We think people do their best when they get to choose how and where
            they work. You and your assigned career coach will work together to
            determine a schedule that meets your goals and keeps your life in
            balance. We support taking time off when you deem necessary and
            provide generous paid holidays with a firmwide week off each summer
            and each winter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompensationAndBenefits;
