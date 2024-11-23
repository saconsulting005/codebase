import React from "react";

const GrowYourCareer: React.FC = () => {
  return (
    <div className="bg-gray-50 px-4 sm:px-6 lg:px-16 py-12 flex flex-col items-center">
      {/* Heading Section */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#009CDE] text-center max-w-4xl leading-tight">
        Be yourself to grow your career
      </h2>

      {/* Subheading Section */}
      <p className="mt-4 text-sm sm:text-base lg:text-lg font-normal text-[#333333] text-center max-w-3xl opacity-70 leading-relaxed">
        Large enough to support evolution and growth but small enough to stay
        personalized and supportive, Crowe is a great place for students and
        recent graduates to start a career. Check out some of the reasons why
        Crowe has been recognized as a great place to work since 2016.
      </p>
    </div>
  );
};

export default GrowYourCareer;
