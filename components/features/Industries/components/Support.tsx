import React from "react";

const Support: React.FC = () => {
  return (
    <div className="bg-gray-50 px-6 sm:px-12 lg:px-16 py-12 flex flex-col items-start">
      {/* Header Section */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight text-[#009CDE] font-['Albert Sans'] tracking-tight max-w-5xl">
        Are you getting the support you need to keep up with the pace of change?
      </h1>

      {/* Divider */}
      <div className="mt-4 w-full max-w-5xl h-[3px] bg-[#FF5900]"></div>

      {/* First Paragraph */}
      <p className="mt-6 text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[#333333] font-['Albert Sans'] max-w-5xl opacity-70">
        The insurance industry is facing momentous shifts, from evolving
        regulatory requirements and the impacts of technology and big data to
        changing customer expectations. It’s a lot for your team to handle on
        their own.
      </p>

      {/* Second Paragraph */}
      <p className="mt-6 text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[#333333] font-['Albert Sans'] max-w-5xl opacity-70">
        Our insurance industry-specific services can help companies of all
        types meet reporting and regulatory needs, improve risk management and
        compliance activities, drive strategic differentiation, and adapt
        quickly to changing realities.
      </p>
    </div>
  );
};

export default Support;
