import React from "react";
import Image from "next/image";

const ConsultingHero: React.FC = () => {
  return (
    <div className="relative flex items-center h-[411px] lg:h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/services/servicehero.png" // Replace with the correct image path
          alt="Audit and Assurance Services Background"
          fill
          className="object-cover"
          priority // Ensures the image loads quickly
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,156,222,0.95)] to-[rgba(0,156,222,0)]"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl px-6 lg:px-12 text-left">
        {/* Title */}
        <h1 className="text-white font-albert-sans font-semibold text-[30px] sm:text-[40px] leading-tight">
          Consulting Services
        </h1>

        {/* Description */}
        <p className="mt-4 text-white text-base sm:text-lg leading-relaxed max-w-2xl">
        Find practical solutions to your business needs with our consulting services tailored to your industry
        </p>
      </div>
    </div>
  );
};

export default ConsultingHero;
