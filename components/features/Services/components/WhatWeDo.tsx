import React from "react";
import Image from "next/image";

const WhatWeDo: React.FC = () => {
  return (
    <div className="bg-[#F8F8F8] py-16">
      {/* Section Header */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-12 px-6">
        {/* Left Content */}
        <div className="max-w-[600px]">
          <p className="text-[#FF5900] text-sm font-semibold uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-[#009CDE] text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Audit and assurance services that aim for excellence
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            At Crowe, we’re big on the right experience. That’s why our more
            than 1,400 Crowe audit professionals make time to understand your
            needs and listen to your concerns before applying their deep
            expertise and significant industry specialization.
          </p>
          <p className="mt-4 text-gray-700 text-base leading-relaxed">
            Whether you’re obtaining financing, planning for acquisitions and
            divestitures, or funding portfolio companies, our professionals aim
            to deliver audit and assurance services with efficiency and
            next-level responsiveness.
          </p>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full lg:w-auto">
          <Image
            src="/assets/services/audit.png" // Replace with actual image path
            alt="Audit Services"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
        {[
          {
            title: "Statutory audits",
            description:
              "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis.",
          },
          {
            title: "Financial statement audit",
            description:
              "Sed lorem et nulla tortor sit eget felis. Sit aliquet elementum ac nibh lorem nulla.",
          },
          {
            title: "Grant audits",
            description:
              "Vitae aliquam malesuada varius felis. Risus aliquam aliquam consequat habitant.",
          },
          {
            title: "Project audits",
            description:
              "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque.",
          },
          {
            title: "Stock audits",
            description:
              "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="group bg-white hover:bg-[#009CDE] hover:text-white transition-all duration-300 flex flex-col justify-start items-start gap-4 p-6 rounded-lg shadow-md"
          >
            <div className="w-10 h-10">
              <Image
                src="/assets/icons/advisory-icon.png"
                alt={card.title}
                width={40}
                height={40}
                className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h3 className="text-lg font-semibold group-hover:text-white">
              {card.title}
            </h3>
            <p className="text-sm font-light group-hover:text-white leading-relaxed">
              {card.description}
            </p>
            <button className="flex items-center gap-2 text-sm font-medium group-hover:text-white transition-transform duration-300 hover:translate-x-1">
              Details <span>&#8594;</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
