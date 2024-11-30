import React from "react";
import Image from "next/image";

const SectorsSection: React.FC = () => {
  const sectors = [
    { image: "/assets/sectors/ai.png" },
    { image: "/assets/sectors/digital-disruption.png" },
    { image: "/assets/sectors/election-2024.png" },
    { image: "/assets/sectors/regulatory-changes.png" },
    { image: "/assets/sectors/financial-services.png" },
    { image: "/assets/sectors/construction.png" },
    { image: "/assets/sectors/retail.png" },
    { image: "/assets/sectors/logistic.png" },
  ];

  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-12 md:py-16 lg:py-20 gap-10">
      {/* Heading Section */}
      <div className="flex flex-col gap-4 text-center md:text-left">
        <p className="text-[#FF5900] text-[14px]  font-[600] uppercase">
          Business Consulting
        </p>
        <h2 className="text-[#009CDE] text-[20px] md:text-[32px] lg:text-[38px] xl:text-[42px] font-[600] leading-tight">
          What sectors of the economy do we serve
        </h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-2 lg:gap-2 xl:gap-4  justify-items-center">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="relative group w-[300px] h-[300px]  lg:h-[260px] rounded-lg overflow-hidden shadow-md cursor-pointer mx-auto"
          >
            <Image
              src={sector.image}
              alt={`Sector ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorsSection;
