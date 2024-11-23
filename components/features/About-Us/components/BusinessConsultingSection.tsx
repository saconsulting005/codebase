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
              Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci
              non rhoncus lobortis. Sed lorem et nulla tortor sit eget felis.
              Integer malesuada curabitur vel interdum leo justo at ultricies.
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
              Sed lorem et nulla tortor sit eget felis. Integer malesuada
              curabitur vel interdum leo justo at ultricies. Sit aliquet tempus
              elementum ac nibh lorem nulla morbi nullam.
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
              Sit aliquet tempus elementum ac nibh lorem nulla morbi nullam.
              Tincidunt massa amet sagittis aliquam turpis volutpat. Vitae
              aliquam malesuada varius felis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessConsultingSection;
