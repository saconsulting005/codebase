"use client";

import React from "react";
import Image from "next/image";

const BusinessStatsSection: React.FC = () => {
  return (
    <section className="bg-[#F8F8F8] py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="relative">
          <Image
            src="/assets/aboutus/statistics.png" // Replace with your image path
            alt="Business Stats"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <h3 className="text-[#FF5900] text-[16px] font-semibold uppercase mb-4">
            Business Consulting
          </h3>
          <h2 className="text-[#009CDE] text-[28px] font-semibold leading-tight mb-6">
            Take your small business since the NEXT level.
          </h2>
          <p className="text-[16px] text-[rgba(0,13,81,0.6)] mb-8">
            Trincidunt massa amet sagittis aliquam turpis volutpat. Vitae
            aliquam malesuada varius felis.
          </p>

          {/* Progress Bars */}
          <div className="space-y-4">
            {/* Overall Satisfaction */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-[14px] font-medium text-[#001D51]">
                  overall satisfaction
                </span>
                <span className="text-[14px] font-medium text-[#001D51]">90%</span>
              </div>
              <div className="w-full bg-[#E5E5E5] rounded-full h-2.5">
                <div
                  className="bg-[#009CDE] h-2.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            {/* Massa Amet */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-[14px] font-medium text-[#001D51]">
                  massa amet
                </span>
                <span className="text-[14px] font-medium text-[#001D51]">84%</span>
              </div>
              <div className="w-full bg-[#E5E5E5] rounded-full h-2.5">
                <div
                  className="bg-[#009CDE] h-2.5 rounded-full"
                  style={{ width: "84%" }}
                ></div>
              </div>
            </div>

            {/* Varius Felis */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-[14px] font-medium text-[#001D51]">
                  varius felis
                </span>
                <span className="text-[14px] font-medium text-[#001D51]">68%</span>
              </div>
              <div className="w-full bg-[#E5E5E5] rounded-full h-2.5">
                <div
                  className="bg-[#009CDE] h-2.5 rounded-full"
                  style={{ width: "68%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStatsSection;
