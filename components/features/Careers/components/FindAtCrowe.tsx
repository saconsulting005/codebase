import React from "react";

const FindAtCrowe: React.FC = () => {
  return (
    <div className="bg-gray-50 px-6 sm:px-12 lg:px-16 py-12 flex flex-col items-start">
      {/* Heading Section */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#009CDE] font-['Albert Sans'] leading-tight max-w-4xl">
        Find what you’re looking for at Crowe
      </h2>

      {/* Divider */}
      <div className="mt-2 w-full max-w-4xl h-[3px] bg-[#FF5900]"></div>

      {/* Subheading Section */}
      <p className="mt-4 text-sm sm:text-base lg:text-lg font-normal text-[#333333] font-['Albert Sans'] leading-relaxed max-w-4xl opacity-70">
        Now hiring people who want to be themselves at work, desire a flexible
        and inclusive work culture with plenty of opportunities to grow, and
        are eager to create meaningful outcomes for their clients.
      </p>

      {/* Buttons Section */}
      <div className="mt-8 flex flex-wrap gap-4">
        <button className="px-6 py-2 text-sm sm:text-base font-medium text-[#009CDE] border-2 border-[#009CDE] rounded-full hover:bg-[#009CDE] hover:text-white transition duration-200">
          Internships
        </button>
        <button className="px-6 py-2 text-sm sm:text-base font-medium text-[#009CDE] border-2 border-[#009CDE] rounded-full hover:bg-[#009CDE] hover:text-white transition duration-200">
          Hiring Process
        </button>
        <button className="px-6 py-2 text-sm sm:text-base font-medium text-[#009CDE] border-2 border-[#009CDE] rounded-full hover:bg-[#009CDE] hover:text-white transition duration-200">
          Your Development
        </button>
        <button className="px-6 py-2 text-sm sm:text-base font-medium text-[#009CDE] border-2 border-[#009CDE] rounded-full hover:bg-[#009CDE] hover:text-white transition duration-200">
          Campus Events
        </button>
        <button className="px-6 py-2 text-sm sm:text-base font-medium text-[#009CDE] border-2 border-[#009CDE] rounded-full hover:bg-[#009CDE] hover:text-white transition duration-200">
          Benefits
        </button>
        <button className="px-6 py-2 text-sm sm:text-base font-medium text-[#009CDE] border-2 border-[#009CDE] rounded-full hover:bg-[#009CDE] hover:text-white transition duration-200">
          Case Competition
        </button>
      </div>
    </div>
  );
};

export default FindAtCrowe;
