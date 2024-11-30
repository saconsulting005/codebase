import React from "react";
import Image from "next/image";

const ClientExperienceSection: React.FC = () => {
  return (
    <section className="bg-[#F8F8F8] py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:max-w-[80%]">
          <h2 className="text-[#009CDE] lg:text-2xl xl:text-3xl text-lg font-semibold mb-6 leading-snug">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  lg:gap-5 md:gap-4 gap-2 xl:gap-8">
          {[ 
            {
              icon: "/assets/services/risk-based-approach.png",
              title: "Tailored, risk-based approach",
              description:
                "We won't adopt a one-size-fits-all method to your unique entity. We look at the underlying transaction data and use deep industry expertise to analyze risks, document controls, and help you understand the risk we have assessed.",
            },
            {
              icon: "/assets/services/proprietary-technology.png",
              title: "Proprietary technology",
              description:
                "SA consulting uses contemporary technology to bring efficiency and effectiveness in the services we deliver to our clients. Our technology integrates complex methodologies and best practices with our firm's industry and functional expertise to centralize, standardize.",
            },
            {
              icon: "/assets/services/quality-control.png",
              title: "Quality control",
              description:
                "Our focus is on delivering an efficient audit that meets the benchmarks of quality at every level. Plus, we undergo annual inspections from the Institute of Certified Public Accountants Rwanda (ICPAR), who evaluates our audit processes.",
            },
            {
              icon: "/assets/services/one-crowe-approach.png",
              title: "A One SA approach",
              description:
                "Your SA audit and assurance team is assembled for your industry and services, bringing you the right specialists, with the right expertise. Youll access top professionals across SA and experience seamless collaboration among these professionals and teams.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="relative bg-white xl:p-6 lg:p-6 md:p-6 p-6  rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-[#FF5900]"
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
              <h3 className="text-lg lg:text-sm font-semibold text-[#001D51] mb-2 group-hover:text-[#FF5900]">
                {card.title}
              </h3>
              {/* Description */}
              <p className="text-sm  text-[rgba(0,13,81,0.6)] leading-relaxed">
                {card.description}
              </p>
              {/* Accent Line */}
              <div className="h-[4px] w-20 bg-[#FF5900] mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientExperienceSection;
