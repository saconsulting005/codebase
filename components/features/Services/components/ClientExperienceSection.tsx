import React from "react";
import Image from "next/image";

const ClientExperienceSection: React.FC = () => {
  return (
    <section className="bg-[#F8F8F8] py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-[#009CDE] text-3xl lg:text-4xl font-semibold mb-6 leading-snug">
            Leading with integrity, our client experience is the difference
          </h2>
          <p className="text-base text-[rgba(0,13,81,0.6)] leading-relaxed">
            With significant audit and industry expertise, our auditors deliver
            audits with independence and objectivity, which can create
            confidence with your stakeholders. We stress communication and
            responsiveness throughout the process, whether working remotely or
            visiting you in person. Discover what makes our audit approach
            unique.
          </p>
        </div>

        {/* Right Content - Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              icon: "/assets/services/risk-based-approach.png",
              title: "Tailored, risk-based approach",
              description:
                "We won’t adopt a one-size-fits-all method to your unique entity. We look at the underlying transaction data and use deep industry expertise to analyze risks, document controls, and help you understand the risk we have assessed.",
            },
            {
              icon: "/assets/services/proprietary-technology.png",
              title: "Proprietary technology",
              description:
                "Crowe has developed proprietary technologies such as Crowe Services Information Exchange and Crowe Insight platform. Our technology integrates complex methodologies and best practices with our firm’s industry and functional expertise to centralize, standardize.",
            },
            {
              icon: "/assets/services/quality-control.png",
              title: "Quality control",
              description:
                "Our focus is on delivering an efficient audit that meets the benchmarks of quality at every level. Plus, we undergo annual inspections from the Public Company Accounting Oversight Board (PCAOB), who evaluates our audit processes.",
            },
            {
              icon: "/assets/services/one-crowe-approach.png",
              title: "A One Crowe approach",
              description:
                "Your Crowe audit and assurance team is assembled for your industry and services, bringing you the right specialists, with the right expertise. You’ll access top professionals across Crowe and experience seamless collaboration among Crowe offices and teams.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-[#FF5900]"
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4 transform transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={48}
                  height={48}
                  className=""
                />
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold text-[#001D51] mb-2 group-hover:text-[#FF5900]">
                {card.title}
              </h3>
              {/* Description */}
              <p className="text-sm text-[rgba(0,13,81,0.6)] leading-relaxed">
                {card.description}
              </p>
              {/* Accent Line */}
              <div className="h-[2px] w-10 bg-[#FF5900] mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientExperienceSection;
