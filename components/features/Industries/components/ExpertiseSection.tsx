import React from "react";

const ExpertiseSection: React.FC = () => {
  return (
    <div className="bg-white px-4 sm:px-6 lg:px-16 py-12 flex flex-col items-center">
      {/* Heading Section */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#009CDE] text-center max-w-4xl leading-tight">
        At Crowe, deep insurance industry knowledge meets targeted expertise.
      </h2>

      {/* Subheading Section */}
      <p className="mt-4 text-sm sm:text-base lg:text-lg font-normal text-[#333333] text-center max-w-3xl opacity-70">
        By aligning our specialists to the insurance industry, we bring deeper
        and broader knowledge to our services. This industry specialization
        gives us a better view to understand your business and the unique
        challenges you face.
      </p>

      {/* Expertise Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {/* Column 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-full">
            {/* Replace with actual icon */}
            <span className="text-[#009CDE] text-2xl font-bold">🏦</span>
          </div>
          <h3 className="mt-4 text-lg sm:text-xl font-bold text-[#009CDE] leading-tight">
            Audit and Assurance
          </h3>
          <p className="mt-2 text-sm sm:text-base lg:text-lg font-normal text-[#333333] opacity-70 leading-relaxed">
            We offer an array of services to help insurance businesses meet
            their financial reporting needs and regulatory needs.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-full">
            {/* Replace with actual icon */}
            <span className="text-[#009CDE] text-2xl font-bold">📊</span>
          </div>
          <h3 className="mt-4 text-lg sm:text-xl font-bold text-[#009CDE] leading-tight">
            Tax Consulting and Compliance
          </h3>
          <p className="mt-2 text-sm sm:text-base lg:text-lg font-normal text-[#333333] opacity-70 leading-relaxed">
            We provide assistance with M&A, reorganizations, and
            demutualizations, as well as with captive insurance company
            formation and structuring.
          </p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-full">
            {/* Replace with actual icon */}
            <span className="text-[#009CDE] text-2xl font-bold">💼</span>
          </div>
          <h3 className="mt-4 text-lg sm:text-xl font-bold text-[#009CDE] leading-tight">
            Consulting
          </h3>
          <p className="mt-2 text-sm sm:text-base lg:text-lg font-normal text-[#333333] opacity-70 leading-relaxed">
            Crowe can help implement or update risk management and compliance
            requirements (MAR, ORSA, and internal audit, as examples) to
            leverage technology investments and gain operational efficiencies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
