"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const AdvisorySolutions: React.FC = () => {
  const [sections, setSections] = useState<{
    riskManagementOpen: boolean;
    esgOpen: boolean;
    dueDiligenceOpen: boolean;
    feasibilityOpen: boolean;
  }>({
    riskManagementOpen: false,
    esgOpen: false,
    dueDiligenceOpen: false,
    feasibilityOpen: false,
  });

  // Explicit type for the 'section' parameter
  const toggleSection = (section: keyof typeof sections) => {
    setSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  return (
    <div className="max-w-4xl my-6 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="lg:text-2xl text-lg md:text-xl xl:text-3xl font-bold mb-6 text-gray-800">Are you making the best decision for your company&apos;s future?</h1>

      {/* Unique Value Proposition */}
      
      <p className="mb-4 text-gray-600">
        What sets SA Consulting apart is our ability to tailor our advisory services to your precise needs. We don&apos;t believe in one-size-fits-all solutions. Instead, we craft strategies, insights, and recommendations that are as unique as your organization.
      </p>
      <p className="mb-8 text-gray-600">
        Our experts leverage their in-depth industry knowledge, coupled with innovative thinking, to design custom-tailored solutions that address your specific goals and challenges. With SA Consulting, your success is our customized solution, as we help to shape a resilient, sustainable future for businesses and society.
      </p>

      {/* Risk Management Services */}
      <div className={`border-b mb-4 transition duration-200 ${sections.riskManagementOpen ? 'bg-gray-100' : ''}`}>
        <button onClick={() => toggleSection('riskManagementOpen')} className="flex items-center justify-start w-full p-4 hover:bg-gray-200">
          <div className="flex items-center space-x-4">
            {sections.riskManagementOpen ? (
              <Minus size={32} className="text-red-600" />
            ) : (
              <Plus size={32} className="text-green-600" />
            )}
            <span className="text-lg font-semibold text-gray-800">Risk Management Services</span>
          </div>
        </button>
        {sections.riskManagementOpen && (
          <div className="pl-8 pb-2 text-gray-600">
            <h3 className="font-semibold">Internal Audit</h3>
            <p>
              At SA Consulting, we aim to assist businesses in enhancing their overall governance, risk management, and internal processes through our internal audit services. Our tailored approach is designed to meet the specific needs of each client, providing valuable insight and recommendations to drive continuous improvement and strengthen the organization&apos;s resilience.
            </p>
            <h3 className="font-semibold mt-2">Special Audit</h3>
            <p>
              We provide specialized audits pertaining to various fields of entities and business lines. Our engagement teams are trained to be adaptive to different contexts, delivering the requisite level of assurance through their wealth of professional expertise and discerning insights.
            </p>
            <h3 className="font-semibold mt-2">IT Audits</h3>
            <p>
              Our experts work closely with specialized professionals in the field, ensuring that your organization benefits from up-to-date and effective information systems audit practices, providing you with comprehensive insights and solutions for your IT security and compliance needs.
            </p>
            <h3 className="font-semibold mt-2">Enterprise Risk Management</h3>
            <p>
              Our team at SA Consulting goes above and beyond traditional risk management. We offer our clients a proactive stance in navigating the risk landscape and enhancing business resilience in an ever-changing economic environment.
            </p>
          </div>
        )}
      </div>

      {/* ESG Services */}
      <div className={`border-b mb-4 transition duration-200 ${sections.esgOpen ? 'bg-gray-100' : ''}`}>
        <button onClick={() => toggleSection('esgOpen')} className="flex items-center justify-start w-full p-4 hover:bg-gray-200">
          <div className="flex items-center space-x-4">
            {sections.esgOpen ? (
              <Minus size={32} className="text-red-600" />
            ) : (
              <Plus size={32} className="text-green-600" />
            )}
            <span className="text-lg font-semibold text-gray-800">ESG Services</span>
          </div>
        </button>
        {sections.esgOpen && (
          <div className="pl-8 pb-2 text-gray-600">
            <h3 className="font-semibold">ESG Reporting</h3>
            <p>
              We provide and facilitate the delivery of industry-specific ESG information to stakeholders with excellence, ensuring transparency and trust. Our collective vision and mission, which focuses on sustainability for all, fuels our ambition to provide quality content disclosures. We adhere to leading standards such as IFRS Sustainability Disclosure Standards, SASB, and ICPAR guidelines to ensure comprehensive and credible reporting.
            </p>
            <h3 className="font-semibold mt-2">ESG Training</h3>
            <p>
              We offer tailored ESG training sessions for both board members and staff, preparing them for ESG reporting. Aligned with industry standards such as IFRS Sustainability, SASB, and ICPAR, our training aims to impart the necessary knowledge and skills, cultivating a culture of transparency and sustainability within the organization.
            </p>
          </div>
        )}
      </div>

      {/* Due Diligence Services */}
      <div className={`border-b mb-4 transition duration-200 ${sections.dueDiligenceOpen ? 'bg-gray-100' : ''}`}>
        <button onClick={() => toggleSection('dueDiligenceOpen')} className="flex items-center justify-start w-full p-4 hover:bg-gray-200">
          <div className="flex items-center space-x-4">
            {sections.dueDiligenceOpen ? (
              <Minus size={32} className="text-red-600" />
            ) : (
              <Plus size={32} className="text-green-600" />
            )}
            <span className="text-lg font-semibold text-gray-800">Due Diligence Services</span>
          </div>
        </button>
        {sections.dueDiligenceOpen && (
          <div className="pl-8 pb-2 text-gray-600">
            <h4 className="font-semibold">1. Financial Due Diligence</h4>
            <p>
              Our financial due diligence service goes beyond mere scrutiny, diving deep into your financial statements to provide expert analysis. We ensure accuracy, uncover risks, and pinpoint opportunities for growth, giving you the insights you need to make informed decisions.
            </p>
            <h4 className="font-semibold mt-2">2. Tax Due Diligence</h4>
            <p>
              When it comes to tax due diligence, our team navigates complexities seamlessly. Through a thorough assessment, we ensure compliance and uncover potential savings, providing you with peace of mind during complex business combinations.
            </p>
            <h4 className="font-semibold mt-2">3. Operational Due Diligence</h4>
            <p>
              Operational due diligence is where we excel in enhancing efficiencies and anticipating integration challenges. Our comprehensive review of processes identifies operational efficiency strategies, paving the way for seamless integration of acquisitions into your existing operations.
            </p>
          </div>
        )}
      </div>

      {/* Feasibility Studies */}
      <div className={`border-b mb-4 transition duration-200 ${sections.feasibilityOpen ? 'bg-gray-100' : ''}`}>
        <button onClick={() => toggleSection('feasibilityOpen')} className="flex items-center justify-start w-full p-4 hover:bg-gray-200">
          <div className="flex items-center space-x-4">
            {sections.feasibilityOpen ? (
              <Minus size={32} className="text-red-600" />
            ) : (
              <Plus size={32} className="text-green-600" />
            )}
            <span className="text-lg font-semibold text-gray-800">Feasibility and Business Planning</span>
          </div>
        </button>
        {sections.feasibilityOpen && (
          <div className="pl-8 pb-2 text-gray-600">
            <p>
              Feasibility studies are indispensable for organizations looking to assess the viability of new projects, investments, or ventures. Our dedicated team conducts rigorous evaluations, testing financial projections and scrutinizing all variables that impact project success.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvisorySolutions;
