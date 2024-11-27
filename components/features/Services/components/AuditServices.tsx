import React from "react";
import Image from "next/image";

const AuditServices: React.FC = () => {
  return (
    <div className="bg-[#F8F8F8] py-16">
      {/* Section Header */}
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-12 px-6">
        {/* Left Content */}
        <div className="max-w-[600px]">
          <p className="text-[#FF5900] text-sm font-semibold uppercase mb-4">
            Audit Services
          </p>
          <h2 className="text-[#009CDE] text-3xl md:text-4xl font-bold mb-6 leading-snug">
          Audit and assurance services that aim for excellence
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
          At SA Consulting, we believe in quality assurance services. Our audit professionals make time to understand your needs and listen to your concerns before applying their deep expertise and significant industry specialization.
          </p>
          <p className="mt-4 text-gray-700 text-base leading-relaxed">
          Whether you’re obtaining financing, planning for acquisitions and divestitures, or funding portfolio companies, our professionals aim to deliver audit and assurance services with efficiency and next-level responsiveness.
          </p>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full lg:w-auto">
          <Image
            src="/assets/services/audit.png" // Replace with actual image path
            alt="Audit Services"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
        {[
          {
            title: "Statutory audits",
            description:
              "Leveraging our risk based approach, we provide top-notch, objective financial statement audits that are rooted in a deep understanding of your organization. By partnering with experienced auditors who genuinely value your business, your organization can reap multiple benefits, including bolstering its reputation, gaining valuable insights, enhancing service delivery, and optimizing costs.",
          },
          {
            title: "Financial statement audit",
            description:
              "Our expert team assures your financial statements are accurate, reliable, and compliant, empowering you to build trust with stakeholders.",
          },
          {
            title: "Grant audits",
            description:
              "Grant Audit Services involve the examination and review of financial and programmatic activities associated with grant funding to ensure compliance with applicable regulations, agreements, and guidelines. These services are critical for organizations that receive grants to demonstrate accountability and transparency.",
          },
          {
            title: "Project audits",
            description:
              "In today's dynamic business landscape, project audits play a crucial role in establishing credibility and building a strong reputation. These audits provide vital assurance to lending agencies and stakeholders that funds are being utilized for their intended purposes. We audit projects funded by major international financial institutions, and donors",
          },
          {
            title: "Stock audits",
            description:
              "Stock Audit Services involve professional verification and analysis of a company s inventory to ensure accurate records and effective inventory management. These services help businesses reconcile their physical stock with their financial records, uncover discrepancies, and identify inefficiencies Stock audit services enhance operational transparency, optimize inventory levels, and support better financial and regulatory compliance. They are crucial for businesses in sectors like retail, manufacturing, and logistics"

          },
        ].map((card, index) => (
          <div
            key={index}
            className="group bg-white hover:bg-[#009CDE] hover:text-white transition-all duration-300 flex flex-col justify-start items-start gap-4 p-6 rounded-lg shadow-md"
          >
            <div className="w-10 h-10">
              <Image
                src="/assets/icons/advisory-icon.png"
                alt={card.title}
                width={40}
                height={40}
                className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h3 className="text-lg font-semibold group-hover:text-white">
              {card.title}
            </h3>
            <p className="text-sm font-light group-hover:text-white leading-relaxed">
              {card.description}
            </p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuditServices;
