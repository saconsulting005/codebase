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
    <div className="flex flex-col w-full max-w-[1540px] mx-auto px-[175px] py-[120px] gap-10">
      {/* Heading Section */}
      <div className="flex flex-col gap-4">
        <p className="text-[#FF5900] text-[16px] font-[600] uppercase">
          Business Consulting
        </p>
        <h2 className="text-[#009CDE] text-[40px] font-[600]">
          What sectors of the economy do we serve
        </h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="relative group w-full h-[250px] rounded-lg overflow-hidden shadow-md cursor-pointer"
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
