import React from "react";

const FindAtCrowe: React.FC = () => {
  return (
    <div className="bg-gray-50 px-6 sm:px-12 lg:px-16 py-12 flex flex-col items-start">
      {/* Heading Section */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#009CDE] font-['Albert Sans'] leading-tight max-w-4xl">
        Find what you’re looking for at SA
      </h2>

      {/* Divider */}
      <div className="mt-2 w-full max-w-4xl h-[3px] bg-[#FF5900]"></div>

      {/* Subheading Section */}
      <p className="mt-4 text-sm sm:text-base lg:text-lg font-normal text-[#333333] font-['Albert Sans'] leading-relaxed max-w-4xl opacity-70">
        Now hiring people who want to be themselves at work, desire a flexible
        and inclusive work culture with plenty of opportunities to grow, and
        are eager to create meaningful outcomes for their clients.
      </p>

     
    </div>
  );
};

export default FindAtCrowe;
