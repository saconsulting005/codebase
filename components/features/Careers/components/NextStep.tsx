import React from "react";

const NextStep: React.FC = () => {
  return (
    <div className="bg-[#009CDE] px-4 sm:px-6 lg:px-16 py-12 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center max-w-3xl leading-tight">
        Ready for the next step?
      </h2>

      {/* Subheading */}
      <p className="mt-4 text-sm sm:text-base lg:text-lg font-normal text-white text-center max-w-3xl leading-relaxed">
        See our full-time positions or internships in audit, tax, advisory,
        consulting, and more.
      </p>

      {/* Button */}
      <button className="mt-8 px-6 py-3 bg-white text-[#009CDE] text-sm sm:text-base font-medium rounded-full shadow-md hover:bg-gray-200 transition duration-200">
        Join Our Network
      </button>
    </div>
  );
};

export default NextStep;
