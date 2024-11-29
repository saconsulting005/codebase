// components/TaxSolutions.tsx 
"use client"; 
// components/TaxSolutions.tsx  
import React, { useState } from 'react';  
import { Plus, Minus } from 'lucide-react';  

const TaxSolutions: React.FC = () => {  
  const [advisoryOpen, setAdvisoryOpen] = useState(false);  
  const [complianceOpen, setComplianceOpen] = useState(false);  
  const [auditsOpen, setAuditsOpen] = useState(false);  

  return (  
    <div className="max-w-4xl mx-auto p-6 my-8 bg-white rounded-lg shadow-lg">  
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Discover Your Tax Solutions with Us</h1>  
      <p className="mb-4 text-gray-600">  
        The tax laws and regulations are subject to frequent updates to adopt global and international tax trends and reforms.  
      </p>  
      <p className="mb-8 text-gray-600">  
        Our tax professionals at SA Consulting will assist you and your business in minimizing tax liabilities and making sense of continually evolving issues related to local and international tax laws to optimize your tax position.  
      </p>  

      {/* Tax Advisory Services */}  
      <div className={`border-b mb-4 transition duration-200 ${advisoryOpen ? 'bg-gray-100' : ''}`}>  
        <button   
          onClick={() => setAdvisoryOpen(!advisoryOpen)}   
          className="flex items-center justify-start w-full p-4 hover:bg-gray-200">  
          <div className="flex items-center space-x-4">  
            {advisoryOpen ? (  
              <Minus size={32} className="text-red-600 transition-transform duration-200 transform scale-125" />  
            ) : (  
              <Plus size={32} className="text-green-600 transition-transform duration-200 transform scale-125" />  
            )}  
            <span className="text-lg font-semibold text-gray-800">Tax Advisory Services</span>  
          </div>  
        </button>  
        {advisoryOpen && (  
          <div className="pl-8 pb-2 text-gray-600">  
            <p className="mb-2">  
              Our tax advisory team will guide you through your tax requirements in Rwanda and assist you in building optimized tax-saving strategies for your business and transactions.  
            </p>  
            <ul className="list-disc pl-5">  
              <li>Investment Tax Advisory</li>  
              <li>Personal and Corporate Tax Advisory</li>  
              <li>Transfer Pricing</li>  
            </ul>  
          </div>  
        )}  
      </div>  

      {/* Tax Compliance Services */}  
      <div className={`border-b mb-4 transition duration-200 ${complianceOpen ? 'bg-gray-100' : ''}`}>  
        <button   
          onClick={() => setComplianceOpen(!complianceOpen)}   
          className="flex items-center justify-start w-full p-4 hover:bg-gray-200">  
          <div className="flex items-center space-x-4">  
            {complianceOpen ? (  
              <Minus size={32} className="text-red-600 transition-transform duration-200 transform scale-125" />  
            ) : (  
              <Plus size={32} className="text-green-600 transition-transform duration-200 transform scale-125" />  
            )}  
            <span className="text-lg font-semibold text-gray-800">Tax Compliance Services</span>  
          </div>  
        </button>  
        {complianceOpen && (  
          <div className="pl-8 pb-2 text-gray-600">  
            <p className="mb-2">  
              We offer comprehensive compliance services to meet your regulatory obligations:  
            </p>  
            <ul className="list-disc pl-5">  
              <li>Income Tax Compliance</li>  
              <li>Corporate Tax Compliance</li>  
              <li>Personal Tax Compliance</li>  
              <li>Indirect Tax Compliance</li>  
              <li>Value Added Tax (VAT)</li>  
              <li>Compliance Trainings</li>  
            </ul>  
          </div>  
        )}  
      </div>  

      {/* Tax Audits and Investigations */}  
      <div className={`border-b mb-4 transition duration-200 ${auditsOpen ? 'bg-gray-100' : ''}`}>  
        <button   
          onClick={() => setAuditsOpen(!auditsOpen)}   
          className="flex items-center justify-start w-full p-4 hover:bg-gray-200">  
          <div className="flex items-center space-x-4">  
            {auditsOpen ? (  
              <Minus size={32} className="text-red-600 transition-transform duration-200 transform scale-125" />  
            ) : (  
              <Plus size={32} className="text-green-600 transition-transform duration-200 transform scale-125" />  
            )}  
            <span className="text-lg font-semibold text-gray-800">Tax Audits and Investigations</span>  
          </div>  
        </button>  
        {auditsOpen && (  
          <div className="pl-8 pb-2 text-gray-600">  
            <p className="mb-2">  
              Rwanda practices a self-assessment tax system, and the Rwanda Revenue Authority (RRA) assesses your level of compliance through tax audits. We will navigate you through the complexities of the tax audit and help you mitigate risks beforehand.  
            </p>  
            <ul className="list-disc pl-5">  
              <li>Advice on tax assessments</li>  
              <li>Assist in tax audits and investigations</li>  
            </ul>  
          </div>  
        )}  
      </div>  
    </div>  
  );  
};  

export default TaxSolutions;