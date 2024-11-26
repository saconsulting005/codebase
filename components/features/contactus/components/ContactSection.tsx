"use client";

import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
} from "lucide-react"; // Importing lucide icons

const ContactSection: React.FC = () => {
  const contactDetails = [
    {
      icon: <MapPin size={32} className="text-[#FF5900]" />,
      title: "Address",
      info: "House # 106, street KG684, Kaciyru, Kigali, Rwanda",
    },
    {
      icon: <Mail size={32} className="text-[#FF5900]" />,
      title: "Email",
      info: "sa.consultingg@gmail.com",
    },
    {
      icon: <Phone size={32} className="text-[#FF5900]" />,
      title: "Phone",
      info: "+250791569952",
    },
    {
      icon: <Clock size={32} className="text-[#FF5900]" />,
      title: "Opening hours",
      info: "Mon-Sat: 8 AM - 06 PM\nSun: day off",
    },
  ];

  return (
    <section className="py-16 bg-[#F8F8F8]">
      <div className="container mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {contactDetails.map((detail, index) => (
          <div key={index} className="space-y-4">
            {/* Icon */}
            <div className="flex justify-center items-center">{detail.icon}</div>

            {/* Title */}
            <h3 className="text-[#009CDE] text-[18px] font-semibold">
              {detail.title}
            </h3>

            {/* Info */}
            <p className="text-[16px] text-[rgba(0,0,0,0.6)] whitespace-pre-line leading-[24px]">
              {detail.info}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
