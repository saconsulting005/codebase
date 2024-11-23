import React from "react";
import Image from "next/image";

const FeaturedInsights: React.FC = () => {
  const insights = [
    {
      date: "25.01.24",
      category: "Business Consulting",
      title: "Building business agility begins with culture",
      image: "/assets/insights/insight1.png", // Replace with actual image paths
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
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 bg-white">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <p className="text-[#FF5900] text-sm font-semibold uppercase mb-2">
          Business Consulting
        </p>
        <h2 className="text-[#009CDE] text-3xl md:text-4xl font-extrabold">
          Featured Insights
        </h2>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="flex flex-col bg-[#F8F8F8] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="relative w-full h-56">
              <Image
                src={insight.image}
                alt={insight.title}
                layout="fill"
                className="object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="p-6">
              <p className="text-sm text-[#7D7D7D] font-medium mb-2">
                {insight.date} / {insight.category}
              </p>
              <h3 className="text-lg text-[#009CDE] font-semibold mb-4">
                {insight.title}
              </h3>
              <button className="text-[#232525] font-semibold text-base flex items-center gap-2 hover:text-[#009CDE] transition-transform hover:translate-x-1">
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
