import React from "react";

const DigitalTransformation: React.FC = () => {
  return (
    <div className="bg-gray-50 px-4 sm:px-6 lg:px-16 py-12 flex flex-col items-center">
      {/* Heading Section */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#009CDE] text-center max-w-4xl leading-tight">
        Do you need digital transformation instead?
      </h2>

      {/* Subheading Section */}
      <p className="mt-4 text-sm sm:text-base lg:text-lg font-normal text-[#333333] text-center max-w-3xl opacity-70">
        We can set you up with technology to make your projects more efficient.
      </p>
      <p className="mt-2 text-sm sm:text-base lg:text-lg font-normal text-[#333333] text-center max-w-3xl opacity-70">
        Whether it’s widely used platforms or our proprietary solutions, these
        intelligent business applications can help insurance leaders achieve
        digital transformation and innovation while reducing cost of operations.
      </p>

      {/* Transformation Solutions Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#009CDE] leading-tight">
            NetSuite
          </h3>
          <p className="mt-2 text-sm sm:text-base lg:text-lg font-normal text-[#333333] opacity-70 leading-relaxed">
            Crowe has tailored the NetSuite cloud ERP platform to support
            insurance brokers and agencies with end-to-end reporting and
            real-time financials.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#009CDE] leading-tight">
            Microsoft Dynamics 365™
          </h3>
          <p className="mt-2 text-sm sm:text-base lg:text-lg font-normal text-[#333333] opacity-70 leading-relaxed">
            Our team designed an easy-to-use agency management system that
            drives producer productivity, increases internal efficiencies, and
            provides the tools to deliver exceptional client service.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#009CDE] leading-tight">
            GRC and Integrated Risk Management Platforms
          </h3>
          <p className="mt-2 text-sm sm:text-base lg:text-lg font-normal text-[#333333] opacity-70 leading-relaxed">
            Our GRC technology specialists can help guide you through the
            platform selection process and can help implement, tailor, support,
            and train your team on your preferred technology.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#009CDE] leading-tight">
            Crowe Financial Data Automation™ Solution
          </h3>
          <p className="mt-2 text-sm sm:text-base lg:text-lg font-normal text-[#333333] opacity-70 leading-relaxed">
            This patented technology helps you convert PDF and spreadsheet
            financial statements into electronic files that are delivered to
            your financial analysis or underwriting system.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#009CDE] leading-tight">
            Surety Transformation Solutions for Agents
          </h3>
          <p className="mt-2 text-sm sm:text-base lg:text-lg font-normal text-[#333333] opacity-70 leading-relaxed">
            Jump-start communication and collaboration through efficient,
            industry-specific automated solutions that provide faster insights,
            stronger reporting, and customized scaling.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#009CDE] leading-tight">
            Surety Transformation Solutions for Carriers
          </h3>
          <p className="mt-2 text-sm sm:text-base lg:text-lg font-normal text-[#333333] opacity-70 leading-relaxed">
            Our automated solutions provide faster, deeper, and customized
            insights into underwriting risks, freeing underwriters from manual
            data collection and entry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformation;
