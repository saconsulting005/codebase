import React from "react";
import Image from "next/image";

const FeaturedInsights: React.FC = () => {
  const insights = [
    {
      date: "25.01.24",
      category: "Business Consulting",
      title: "Building business agility begins with culture",
      image: "/assets/insights/insight1.png", // Replace with your actual image paths
    },
    {
      date: "25.01.24",
      category: "Business Consulting",
      title: "Strategies to protect your profits",
      image: "/assets/insights/insight2.png",
    },
    {
      date: "25.01.24",
      category: "Business Consulting",
      title: "We Bring Flexibility & Cost Efficiency",
      image: "/assets/insights/insight3.png",
    },
  ];

  return (
    <div className="w-full max-w-[1540px] mx-auto px-[182px] py-[120px] bg-white">
      {/* Heading Section */}
      <div className="text-center mb-[40px]">
        <p className="text-[#FF5900] text-[16px] font-[600] uppercase mb-2">
          Business Consulting
        </p>
        <h2 className="text-[#009CDE] text-[40px] font-[600]">
          Featured Insights
        </h2>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#F8F8F8] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-[250px]">
              <Image
                src={insight.image}
                alt={insight.title}
                layout="fill"
                className="object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="p-[20px]">
              <p className="text-[14px] text-[#7D7D7D] font-[400] mb-2">
                {insight.date} / {insight.category}
              </p>
              <h3 className="text-[20px] text-[#009CDE] font-[600] mb-4">
                {insight.title}
              </h3>
              <button className="text-[#232525] font-[600] text-[16px] flex items-center gap-2 transition-transform hover:translate-x-1">
                Read more <span>&#8594;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedInsights;
