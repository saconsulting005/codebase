import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link

const ServicesSection: React.FC = () => {
  return (
    <div className="bg-[#F8F8F8] py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-[151px] px-4 md:px-6 lg:px-8">
        {/* Left Content */}
        <div className="max-w-full lg:max-w-[600px] text-left">
          <div className="text-[#FF5900] text-[12px] sm:text-[14px] md:text-[16px] font-[600] uppercase mb-2 md:mb-4">
            Services
          </div>
          <h2 className="text-[#009CDE] text-[20px] md:text-[23px] lg:text-[26px] font-[600] mb-4 md:mb-6 leading-snug">
            We are committed to providing unparalleled client experiences
          </h2>
          <p className="text-[16px] text-start items-start md:text-[16px] lg:text-[16px] text-[rgba(0,13,81,0.6)] font-[400] leading-relaxed">
            SA Consulting Ltd is an accounting and consulting firm that provides audit, tax, and consulting services to public and private entities.
          </p>
        </div>

        {/* Right Content (Image) */}
        <div className="flex-shrink-0 w-full sm:w-[300px] md:w-[350px] lg:w-[400px]">
          <Image
            src="/assets/service-image.png"
            alt="Team discussion"
            width={400}
            height={400}
            className="rounded-lg shadow-md w-full"
            priority
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto mt-10  md:mt-16 lg:mt-16 xl:mt-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-6 xl:px-8 lg:px-8">
        {/* Card 1 (Audit) */}
        <Link href="/services/audit">
          <div className="group bg-white hover:bg-[#009CDE] hover:text-white transition-all duration-300 flex flex-col justify-start items-start gap-4 p-6 sm:p-8 rounded-lg shadow-md cursor-pointer">
            <div className="w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/assets/icons/advisory-icon.png"
                alt="Audit Icon"
                width={40}
                height={40}
                className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h3 className="text-[18px] sm:text-[20px] font-semibold group-hover:text-white">
              Audit
            </h3>
            <p className="text-[14px] sm:text-[16px] font-light group-hover:text-white">
              Get a risk-based financial statement audit with our high-quality, skilled and technology-powered approach.
            </p>
            <button className="flex items-center gap-2 text-[14px] sm:text-[16px] font-medium group-hover:text-white">
              Details <span>&#8594;</span>
            </button>
          </div>
        </Link>

        {/* Card 2 (Tax) */}
        <Link href="/services/tax">
          <div className="group bg-white hover:bg-[#009CDE] hover:text-white transition-all duration-300 flex flex-col justify-start items-start gap-4 p-6 sm:p-8 rounded-lg shadow-md cursor-pointer">
            <div className="w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/assets/icons/tax-icon.png"
                alt="Tax Icon"
                width={40}
                height={40}
                className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h3 className="text-[18px] sm:text-[20px] font-semibold group-hover:text-white">
              Tax
            </h3>
            <p className="text-[14px] sm:text-[16px] font-light group-hover:text-white">
              Boost efficiency and optimize tax payments with a skilled team that understands tax at all levels.
            </p>
            <button className="flex items-center gap-2 text-[14px] sm:text-[16px] font-medium group-hover:text-white">
              Details <span>&#8594;</span>
            </button>
          </div>
        </Link>

        {/* Card 3 (Advisory) */}
        <Link href="/services/advisory">
          <div className="group bg-white hover:bg-[#009CDE] hover:text-white transition-all duration-300 flex flex-col justify-start items-start gap-4 p-6 sm:p-8 rounded-lg shadow-md cursor-pointer">
            <div className="w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/assets/icons/advisory-icon.png"
                alt="Advisory Icon"
                width={40}
                height={40}
                className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h3 className="text-[18px] sm:text-[20px] font-semibold group-hover:text-white">
              Advisory
            </h3>
            <p className="text-[14px] sm:text-[16px] font-light group-hover:text-white">
              Navigate uncertainty and complexity in strategic planning, enterprise risk management, and regulatory compliance.
            </p>
            <button className="flex items-center gap-2 text-[14px] sm:text-[16px] font-medium group-hover:text-white">
              Details <span>&#8594;</span>
            </button>
          </div>
        </Link>

        {/* Card 4 (Consulting) */}
        <Link href="/services/consulting">
          <div className="group bg-white hover:bg-[#009CDE] hover:text-white transition-all duration-300 flex flex-col justify-start items-start gap-4 p-6 sm:p-8 rounded-lg shadow-md cursor-pointer">
            <div className="w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/assets/icons/consulting-icon.png"
                alt="Consulting Icon"
                width={40}
                height={40}
                className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <h3 className="text-[18px] sm:text-[20px] font-semibold group-hover:text-white">
              Consulting
            </h3>
            <p className="text-[14px] sm:text-[16px] font-light group-hover:text-white">
              Find practical solutions to your business needs with our consulting services tailored to your industry.
            </p>
            <button className="flex items-center gap-2 text-[14px] sm:text-[16px] font-medium group-hover:text-white">
              Details <span>&#8594;</span>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServicesSection;
