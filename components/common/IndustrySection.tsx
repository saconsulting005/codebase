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
    <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[740px] xl:h-[750px] mx-auto">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 h-auto lg:h-full bg-[#009CDE] flex flex-col justify-center items-start px-4 sm:px-6 lg:px-[40px] xl:px-[50px] py-6 sm:py-[20px] lg:py-[40px] xl:py-[50px] gap-4 sm:gap-5 lg:gap-6 overflow-hidden">
        <h2 className="text-[#F7F6F6] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-semibold leading-snug">
          We provide a breadth of relevant industry offerings and deep insights
          into leading practices.
        </h2>

        <ul className="flex flex-col gap-3  lg:gap-5 ">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start gap-2 lg:gap-3">
              <div className="flex-shrink-0">
                <Image
                  src="/assets/icons/arrow.png"
                  alt={`${item.title} Arrow Icon`}
                  width={18}
                  height={18}
                />
              </div>
              <div>
                <h3 className="text-white text-[14px   md:text-[16px] lg:text-[18px] xl:text-[19px] font-semibold">
                  {item.title}
                </h3>
                <p className="text-white text-[12px]  md:text-[14px] lg:text-[15px] xl:text-[18px]">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 h-[300px]  lg:h-full xl:h-full relative">
        <Image
          src="/assets/industry-image.png" // Replace with your actual image path
          alt="Industry Insight"
          fill
          className="object-cover w-full h-full object-center lg:object-[80%_90%] xl:object-[70%_80%]"
          priority
        />
      </div>
    </div>
  );
};

export default IndustrySection;
