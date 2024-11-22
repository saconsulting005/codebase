import React from "react";
import Image from "next/image";

const CompanyLogos: React.FC = () => {
  const logos = [
    { src: "/assets/logos/logo1.png", alt: "Audit Logo 1" },
    { src: "/assets/logos/logo2.png", alt: "Audit Logo 2" },
    { src: "/assets/logos/logo3.png", alt: "Audit Logo 3" },
    { src: "/assets/logos/logo4.png", alt: "Audit Logo 4" },
    { src: "/assets/logos/logo5.png", alt: "Audit Logo 5" },
  ];

  return (
    <div className="w-full py-12  ">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-8 px-4">
       

        {/* Logos Section */}
        <div className="flex justify-between items-center mt-7 w-full max-w-[1200px] gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[200px] h-[100px]  rounded-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150} // Adjust for logo proportions
                height={70}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
