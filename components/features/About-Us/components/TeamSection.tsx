import React from "react";
import Image from "next/image";

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Abdul Malik",
    position: "Software Engineer & IT Consultant",
      image: "/assets/aboutus/malik.JPG",
    },
    {
      name: "Allyson Blair",
      position: "Investor Response Assistant",
      image: "/assets/aboutus/Allyson.png",
    },
    {
      name: "Jackson Mahoney",
      position: "Chief Factors Coordinator",
      image: "/assets/aboutus/Jackson.png",
    },
    {
      name: "Kara Hawkins",
      position: "Product Quality Strategist",
      image: "/assets/aboutus/Kara.png",
    },
    {
      name: "Valeria Bolton",
      position: "Global Interactions Agent",
      image: "/assets/aboutus/Valeria.png",
    },
    {
      name: "Johnathon Crosby",
      position: "Investor Response Assistant",
      image: "/assets/aboutus/Johnathon.png",
    },
    {
      name: "Derick Fry",
      position: "Product Quality Strategist",
      image: "/assets/aboutus/Derick.png",
    },
    {
      name: "Erick Taylor",
      position: "Chief Factors Coordinator",
      image: "/assets/aboutus/Erick.png",
    },
  ];

  return (
    <section className="bg-[#F8F8F8] py-16">
      <div className="container mx-auto max-w-[1240px] px-6 text-center">
        {/* Header */}
        <h3 className="text-[#FF5900] text-[16px] font-semibold uppercase mb-4">
          Business Consulting
        </h3>
        <h2 className="text-[#009CDE] text-[28px] font-semibold mb-10 leading-tight">
          Our team of experts
        </h2>

        {/* Team Members */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={200}
                  className="w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="text-[#001D51] text-[16px] font-semibold mb-1">
                  {member.name}
                </h4>
                <p className="text-[14px] text-[rgba(0,13,81,0.6)]">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
