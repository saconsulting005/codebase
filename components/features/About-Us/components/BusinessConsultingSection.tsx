"use client";

import React from "react";
import Image from "next/image";

const BusinessConsultingSection: React.FC = () => {
  return (
    <section className="bg-[#F8F8F8] py-16">
      <div className="container mx-auto text-center">
        {/* Header */}
        <h3 className="text-[#009CDE] text-[16px] font-semibold uppercase mb-4">
          Business Consulting
        </h3>
        <h2 className="text-[#001D51] text-[32px] font-semibold mb-12">
          Helping your business build and grow
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 mb-4">
              <Image
                src="/assets/aboutus/grow3.png"
                alt="What we do"
                width={48}
                height={48}
              />
            </div>
            <h4 className="text-[#009CDE] text-[20px] font-semibold mb-2">
              What we do 
            </h4>
            <p className="text-[16px] text-[rgba(0,13,81,0.6)] leading-relaxed">
            SA Consulting Ltd is an accounting and consulting firm that provides audit, tax, and consulting services to public and private entities.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 mb-4">
              <Image
                src="/assets/aboutus/grow2.png"
                alt="How we work"
                width={48}
                height={48}
              />
            </div>
            <h4 className="text-[#009CDE] text-[20px] font-semibold mb-2">
              How we work
            </h4>
            <p className="text-[16px] text-[rgba(0,13,81,0.6)] leading-relaxed">
            Our team of experts, at SA Consulting, provides comprehensive accounting and financial services tailored to meet the needs of business and individuals
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 mb-4">
              <Image
                src="/assets/aboutus/grow1.png"
                alt="Where we work"
                width={48}
                height={48}
              />
            </div>
            <h4 className="text-[#009CDE] text-[20px] font-semibold mb-2">
              Where we work
            </h4>
            <p className="text-[16px] text-[rgba(0,13,81,0.6)] leading-relaxed">
            We are located in Kigali, Rwanda and are ambitious to have regional and international presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessConsultingSection;
