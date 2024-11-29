"use client";

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

// Define the type for the sections state
type SectionState = {
  statutoryAuditsOpen: boolean;
  financialStatementAuditsOpen: boolean;
  grantAuditsOpen: boolean;
  projectAuditsOpen: boolean;
  stockAuditsOpen: boolean;
};

type SectionKeys = keyof SectionState;

const AuditSolutions = () => {
  const [sections, setSections] = useState<SectionState>({
    statutoryAuditsOpen: false,
    financialStatementAuditsOpen: false,
    grantAuditsOpen: false,
    projectAuditsOpen: false,
    stockAuditsOpen: false,
  });

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
          At SA Consulting, we believe in providing quality assurance services. Our audit professionals take the time to understand your needs and listen to your concerns, applying their deep expertise and significant industry specialization.
        </p>
        <p className="text-gray-600 mb-4">
          Whether you re obtaining financing, planning for acquisitions and divestitures, or funding portfolio companies, our professionals aim to deliver audit and assurance services with efficiency and next-level responsiveness.
        </p>
        <p className="text-gray-600">
          Our goal is to help you navigate complex financial landscapes while ensuring transparency, compliance, and operational efficiency.
        </p>
      </div>

      {/* Statutory Audits */}
      <div className={`border-b mb-4 transition duration-200 ${sections.statutoryAuditsOpen ? 'bg-gray-100' : ''}`}>
        <button
          onClick={() => toggleSection('statutoryAuditsOpen')}
          className="flex items-center justify-start w-full p-4 hover:bg-gray-200"
        >
          <div className="flex items-center space-x-4">
            {sections.statutoryAuditsOpen ? (
              <Minus size={32} className="text-red-600" />
            ) : (
              <Plus size={32} className="text-green-600" />
            )}
            <span className="text-lg font-semibold text-gray-800">Statutory Audits</span>
          </div>
        </button>
        {sections.statutoryAuditsOpen && (
          <div className="pl-8 pb-2 text-gray-600">
            <p>
              Leveraging our risk-based approach, we provide top-notch, objective financial statement audits that are rooted in a deep understanding of your organization. By partnering with experienced auditors who genuinely value your business, your organization can benefit in multiple ways:
            </p>
            <ul className="list-disc pl-6">
              <li>Bolstering your reputation</li>
              <li>Gaining valuable insights</li>
              <li>Enhancing service delivery</li>
              <li>Optimizing costs</li>
            </ul>
          </div>
        )}
      </div>

      {/* Financial Statement Audits */}
      <div className={`border-b mb-4 transition duration-200 ${sections.financialStatementAuditsOpen ? 'bg-gray-100' : ''}`}>
        <button
          onClick={() => toggleSection('financialStatementAuditsOpen')}
          className="flex items-center justify-start w-full p-4 hover:bg-gray-200"
        >
          <div className="flex items-center space-x-4">
            {sections.financialStatementAuditsOpen ? (
              <Minus size={32} className="text-red-600" />
            ) : (
              <Plus size={32} className="text-green-600" />
            )}
            <span className="text-lg font-semibold text-gray-800">Financial Statement Audits</span>
          </div>
        </button>
        {sections.financialStatementAuditsOpen && (
          <div className="pl-8 pb-2 text-gray-600">
            <p>
              Our expert team ensures your financial statements are accurate, reliable, and compliant, empowering you to build trust with stakeholders.
            </p>
          </div>
        )}
      </div>

      {/* Grant Audits */}
      <div className={`border-b mb-4 transition duration-200 ${sections.grantAuditsOpen ? 'bg-gray-100' : ''}`}>
        <button
          onClick={() => toggleSection('grantAuditsOpen')}
          className="flex items-center justify-start w-full p-4 hover:bg-gray-200"
        >
          <div className="flex items-center space-x-4">
            {sections.grantAuditsOpen ? (
              <Minus size={32} className="text-red-600" />
            ) : (
              <Plus size={32} className="text-green-600" />
            )}
            <span className="text-lg font-semibold text-gray-800">Grant Audits</span>
          </div>
        </button>
        {sections.grantAuditsOpen && (
          <div className="pl-8 pb-2 text-gray-600">
            <p>
              Grant Audit Services involve the examination and review of financial and programmatic activities associated with grant funding to ensure compliance with applicable regulations, agreements, and guidelines. These services are crucial for organizations that receive grants to demonstrate accountability and transparency.
            </p>
          </div>
        )}
      </div>

      {/* Project Audits */}
      <div className={`border-b mb-4 transition duration-200 ${sections.projectAuditsOpen ? 'bg-gray-100' : ''}`}>
        <button
          onClick={() => toggleSection('projectAuditsOpen')}
          className="flex items-center justify-start w-full p-4 hover:bg-gray-200"
        >
          <div className="flex items-center space-x-4">
            {sections.projectAuditsOpen ? (
              <Minus size={32} className="text-red-600" />
            ) : (
              <Plus size={32} className="text-green-600" />
            )}
            <span className="text-lg font-semibold text-gray-800">Project Audits</span>
          </div>
        </button>
        {sections.projectAuditsOpen && (
          <div className="pl-8 pb-2 text-gray-600">
            <p>
              In today&apos;s dynamic business landscape, project audits play a crucial role in establishing credibility and building a strong reputation. These audits provide vital assurance to lending agencies and stakeholders that funds are being utilized for their intended purposes. We audit projects funded by major international financial institutions and donors.
            </p>
          </div>
        )}
      </div>

      {/* Stock Audits */}
      <div className={`border-b mb-4 transition duration-200 ${sections.stockAuditsOpen ? 'bg-gray-100' : ''}`}>
        <button
          onClick={() => toggleSection('stockAuditsOpen')}
          className="flex items-center justify-start w-full p-4 hover:bg-gray-200"
        >
          <div className="flex items-center space-x-4">
            {sections.stockAuditsOpen ? (
              <Minus size={32} className="text-red-600" />
            ) : (
              <Plus size={32} className="text-green-600" />
            )}
            <span className="text-lg font-semibold text-gray-800">Stock Audits</span>
          </div>
        </button>
        {sections.stockAuditsOpen && (
          <div className="pl-8 pb-2 text-gray-600">
            <p>
              Stock Audit Services involve professional verification and analysis of a company’s inventory to ensure accurate records and effective inventory management. These services help businesses reconcile their physical stock with their financial records, uncover discrepancies, and identify inefficiencies. Stock audits also enhance operational transparency, optimize inventory levels, and support better financial and regulatory compliance.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuditSolutions;
