import React from "react";
import Image from "next/image";

const IndustrySection: React.FC = () => {
  const listItems = [
    {
      title: "Health Care",
      description: "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque.",
    },
    {
      title: "Financial Services",
      description: "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque.",
    },
    {
      title: "Life Sciences",
      description: "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque.",
    },
    {
      title: "Private Equality",
      description: "Suscipit feugiat purus ac nunc amet. Id pulvinar arcu nibh orci non rhoncus lobortis id neque.",
    },
  ];

  return (
    <div className="flex w-full h-[680px] mx-auto">
      {/* Left Section */}
      <div className="w-1/2 h-full bg-[#009CDE] flex flex-col justify-center items-start px-[100px] py-[60px] gap-8">
        <h2 className="text-[#F7F6F6] text-[30px] font-semibold leading-snug">
          Crowe provides a breadth of relevant industry offerings and deep insights into leading practices.
        </h2>

        <ul className="flex flex-col gap-8">
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
                <h3 className="text-white text-[20px] font-semibold">{item.title}</h3>
                <p className="text-white text-[16px]">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="w-1/2 h-full relative">
        <Image
          src="/assets/industry-image.png" // Replace with your actual image path
          alt="Industry Insight"
          fill
          className="object-cover w-full h-full object-[80%_90%]" // Adjusted object position for better face focus
          priority
        />
      </div>
    </div>
  );
};

export default IndustrySection;
