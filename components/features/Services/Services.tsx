import React from "react";
import Image from "next/image";

const ServicesSection: React.FC = () => {
  return (
    <div className="bg-[#F8F8F8] py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-[151px] px-6">
        {/* Left Content */}
        <div className="max-w-[600px]">
          <div className="text-[#FF5900] text-[16px] font-[600] uppercase mb-4">
            Services
          </div>
          <h2 className="text-[#009CDE] text-[40px] font-[600] mb-6 leading-snug">
            What services do we offer for you!
          </h2>
          <p className="text-[16px] text-[rgba(0,13,81,0.6)] font-[400] leading-normal">
            Sit aliquet tempus elementum ac nibh lorem nulla morbi nullam.
            Tincidunt massa amet sagittis aliquam turpis volutpat. Vitae aliquam
            malesuada varius felis. Risus aliquam aliquam consequat habitant. Id
            elit turpis amet vel at sapien. Massa tempus augue lobortis enim
            quam consectetur dictum. Elementum id tortor venenatis lectus sed.
            Adipiscing nisi felis aliquam nunc. Quis et sed ac urna augue
            feugiat mi eget. Eget viverra egestas porta consectetur commodo
            ante.
          </p>
        </div>

        {/* Right Content (Image) */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/service-image.png"
            alt="Team discussion"
            width={400}
            height={400}
            className="rounded-lg shadow-md"
            priority
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {/* Card 1 */}
        <div className="group bg-white hover:bg-[#009CDE] hover:text-white transition-all duration-300 flex flex-col justify-center items-start gap-6 p-8 rounded-lg shadow-md">
          <div className="w-10 h-10">
            <Image
              src="/assets/icons/advisory-icon.png"
              alt="Audit Icon"
              width={40}
              height={40}
              className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <h3 className="text-[20px] font-semibold group-hover:text-white">Audit</h3>
          <p className="text-[16px] font-light group-hover:text-white">
            Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non
            rhoncus lobortis.
          </p>
          <button className="flex items-center gap-2 text-[16px] font-medium group-hover:text-white">
            Details <span>&#8594;</span>
          </button>
        </div>

        {/* Card 2 */}
        <div className="group bg-white hover:bg-[#009CDE] hover:text-white transition-all duration-300 flex flex-col justify-center items-start gap-6 p-8 rounded-lg shadow-md">
          <div className="w-10 h-10">
            <Image
              src="/assets/icons/tax-icon.png"
              alt="Tax Icon"
              width={40}
              height={40}
              className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <h3 className="text-[20px] font-semibold group-hover:text-white">Tax</h3>
          <p className="text-[16px] font-light group-hover:text-white">
            Sed lorem et nulla tortor sit eget felis. Sit aliquet elementum ac
            nibh lorem nulla.
          </p>
          <button className="flex items-center gap-2 text-[16px] font-medium group-hover:text-white">
            Details <span>&#8594;</span>
          </button>
        </div>

        {/* Card 3 */}
        <div className="group bg-white hover:bg-[#009CDE] hover:text-white transition-all duration-300 flex flex-col justify-center items-start gap-6 p-8 rounded-lg shadow-md">
          <div className="w-10 h-10">
            <Image
              src="/assets/icons/advisory-icon.png"
              alt="Advisory Icon"
              width={40}
              height={40}
              className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <h3 className="text-[20px] font-semibold group-hover:text-white">Advisory</h3>
          <p className="text-[16px] font-light group-hover:text-white">
            Vitae aliquam malesuada varius felis. Risus aliquam aliquam
            consequat habitant.
          </p>
          <button className="flex items-center gap-2 text-[16px] font-medium group-hover:text-white">
            Details <span>&#8594;</span>
          </button>
        </div>

        {/* Card 4 */}
        <div className="group bg-white hover:bg-[#009CDE] hover:text-white transition-all duration-300 flex flex-col justify-center items-start gap-6 p-8 rounded-lg shadow-md">
          <div className="w-10 h-10">
            <Image
              src="/assets/icons/consulting-icon.png"
              alt="Consulting Icon"
              width={40}
              height={40}
              className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </div>
          <h3 className="text-[20px] font-semibold group-hover:text-white">Consulting</h3>
          <p className="text-[16px] font-light group-hover:text-white">
            Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non
            rhoncus lobortis id neque.
          </p>
          <button className="flex items-center gap-2 text-[16px] font-medium group-hover:text-white">
            Details <span>&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
