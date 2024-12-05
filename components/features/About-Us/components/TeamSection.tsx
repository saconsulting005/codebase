import React from "react";
import Image from "next/image";

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Abdul Malik",
      position: "Software Engineer & IT Consultant",
      destination: "Senior Consultant",
      image: "/assets/aboutus/malik.JPG",
    },
    {
      name: "Faisal Umar",
      position: "(ACCA, BSc Applied Accounting)",
      destination: "Audit Supervisor",
      image: "/assets/aboutus/faisal.jpg",
    },
    {
      name: "Jackson Mahoney",
      position: "Chief Factors Coordinator",
      destination: "Lead Analyst",
      image: "/assets/aboutus/Jackson.png",
    },
    {
      name: "Kara Hawkins",
      position: "Product Quality Strategist",
      destination: "Quality Lead",
      image: "/assets/aboutus/Kara.png",
    },
    {
      name: "Valeria Bolton",
      position: "Global Interactions Agent",
      destination: "Client Relations Manager",
      image: "/assets/aboutus/Valeria.png",
    },
    {
      name: "Johnathon Crosby",
      position: "Investor Response Assistant",
      destination: "Investor Relations Officer",
      image: "/assets/aboutus/Johnathon.png",
    },
    {
      name: "Derick Fry",
      position: "Product Quality Strategist",
      destination: "Quality Control Specialist",
      image: "/assets/aboutus/Derick.png",
    },
    {
      name: "Erick Taylor",
      position: "Chief Factors Coordinator",
      destination: "Strategy Head",
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
          Meet Our Team of Experts
        </h2>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-300"
            >
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={200}
                  className="w-full object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6 space-y-4">
                {/* Name and Position */}
                <h4 className="text-[#001D51] text-[18px] font-semibold mb-1 border-b-2 border-[#009CDE] pb-1">
                  {member.name}
                </h4>
                <p className="text-[#555] text-[14px] mb-2">
                   {member.position}
                </p>
                {/* Destination */}
                <p className="text-[#009CDE] text-[14px] font-medium border-t-2 border-[#E5E5E5] pt-2">
                  {member.destination}
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
