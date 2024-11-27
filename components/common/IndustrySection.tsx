import React from "react";
import Image from "next/image";

const IndustrySection: React.FC = () => {
  const listItems = [
    {
      title: "Health Care",
      description:
        "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque.",
    },
    {
      title: "Financial Services",
      description:
        "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque.",
    },
    {
      title: "Manufacturing",
      description:
        "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque.",
    },
    {
      title: "Retail",
      description:
        "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque.",
    },
    {
      title: "Logistic",
      description:
        "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque.",
    },
    {
      title: "Trading and FMCG",
      description:
        "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque.",
    },
    {
      title: "Dealerships",
      description:
        "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque.",
    },
   
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[740px] mx-auto">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 h-auto lg:h-full bg-[#009CDE] flex flex-col justify-center items-start px-6 sm:px-10 lg:px-[100px] py-10 sm:py-[40px] lg:py-[60px] gap-8">
        <h2 className="text-[#F7F6F6] text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-semibold leading-snug">
        We provide a breadth of relevant industry offerings and deep insights into leading practices.
        </h2>
        

        <ul className="flex flex-col gap-6 sm:gap-8">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/assets/icons/arrow.png"
                  alt={`${item.title} Arrow Icon`}
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <h3 className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
                  {item.title}
                </h3>
                <p className="text-white text-[14px] sm:text-[15px] md:text-[16px]">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-full relative">
        <Image
          src="/assets/industry-image.png" // Replace with your actual image path
          alt="Industry Insight"
          fill
          className="object-cover w-full h-full object-center lg:object-[80%_90%]" // Adjusted object position for better focus
          priority
        />
      </div>
    </div>
  );
};

export default IndustrySection;
