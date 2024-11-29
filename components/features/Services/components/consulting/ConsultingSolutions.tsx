"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

// Define the type for the section state
type SectionState = {
  accountingOpen: boolean;
  corporateServicesOpen: boolean;
  outsourcingBenefitsOpen: boolean;
};

// Define the type for the valid keys of sections
type SectionKeys = keyof SectionState;

const ConsultingSolutions = () => {
  // Define the state with explicit type
  const [sections, setSections] = useState<SectionState>({
    accountingOpen: false,
    corporateServicesOpen: false,
    outsourcingBenefitsOpen: false,
  });

  // Type-safe toggle function
  const toggleSection = (section: SectionKeys) => {
    setSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  return (
    <div className="max-w-4xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg">
      {/* Introduction */}
      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          Regardless of the scale of your requirements, we offer comprehensive, one-stop services tailored to meet your needs.
          With our deep industry knowledge, SA Consulting can provide specialized industry consulting services to help tackle the specific challenges you face.
        </p>
        <p className="text-gray-600">
          Outsourcing extends beyond basic data entry or routine tasks. In an increasingly intricate business landscape where sourcing the right talent poses challenges, it is essential to entrust vital functions such as payroll, tax compliance, accounts preparation, secretarial, and administrative services to specialists with expertise in these areas.
        </p>
      </div>

      {/* Accounting Services */}
      <div className={`border-b mb-4 transition duration-200 ${sections.accountingOpen ? 'bg-gray-100' : ''}`}>
        <button
          onClick={() => toggleSection('accountingOpen')}
          className="flex items-center justify-start w-full p-4 hover:bg-gray-200"
        >
          <div className="flex items-center space-x-4">
            {sections.accountingOpen ? (
              <Minus size={32} className="text-red-600" />
            ) : (
              <Plus size={32} className="text-green-600" />
            )}
            <span className="text-lg font-semibold text-gray-800">Accounting Services</span>
          </div>
        </button>
        {sections.accountingOpen && (
          <div className="pl-8 pb-2 text-gray-600">
            <ul className="list-disc">
              <li>Bookkeeping</li>
              <li>Financial statements preparation</li>
              <li>Staff outsourcing</li>
            </ul>
          </div>
        )}
      </div>

      {/* Corporate Services */}
      <div className={`border-b mb-4 transition duration-200 ${sections.corporateServicesOpen ? 'bg-gray-100' : ''}`}>
        <button
          onClick={() => toggleSection('corporateServicesOpen')}
          className="flex items-center justify-start w-full p-4 hover:bg-gray-200"
        >
          <div className="flex items-center space-x-4">
            {sections.corporateServicesOpen ? (
              <Minus size={32} className="text-red-600" />
            ) : (
              <Plus size={32} className="text-green-600" />
            )}
            <span className="text-lg font-semibold text-gray-800">Corporate Services</span>
          </div>
        </button>
        {sections.corporateServicesOpen && (
          <div className="pl-8 pb-2 text-gray-600">
            <ul className="list-disc">
              <li>Business Registration</li>
              <li>Company Liquidation Services</li>
              <li>Investment Registration</li>
            </ul>
          </div>
        )}
      </div>

      {/* Why Outsource Section */}
      <div className={`border-b mb-4 transition duration-200 ${sections.outsourcingBenefitsOpen ? 'bg-gray-100' : ''}`}>
        <button
          onClick={() => toggleSection('outsourcingBenefitsOpen')}
          className="flex items-center justify-start w-full p-4 hover:bg-gray-200"
        >
          <div className="flex items-center space-x-4">
            {sections.outsourcingBenefitsOpen ? (
              <Minus size={32} className="text-red-600" />
            ) : (
              <Plus size={32} className="text-green-600" />
            )}
            <span className="text-lg font-semibold text-gray-800">Why Outsource Your Non-Core Processes?</span>
          </div>
        </button>
        {sections.outsourcingBenefitsOpen && (
          <div className="pl-8 pb-2 text-gray-600">
            <ul className="list-disc">
              <li>Cost Effective</li>
              <li>Faster & Quality Services</li>
              <li>Focus on Core Business</li>
              <li>Access to a Pool of Expertise</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsultingSolutions;
