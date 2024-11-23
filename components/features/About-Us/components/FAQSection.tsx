"use client";

import React, { useState } from "react";

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can Business Consulting help me?",
      answer:
        "We provide tailored strategies to optimize your operations, increase profitability, and help your business scale efficiently.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "Our expertise spans across various industries including technology, finance, healthcare, retail, and manufacturing.",
    },
    {
      question: "How does the consultation process work?",
      answer:
        "The process begins with a discovery call to understand your needs, followed by in-depth research, strategy development, and implementation support.",
    },
    {
      question: "Do you offer ongoing support after consultation?",
      answer:
        "Yes, we offer ongoing support and performance tracking to ensure the strategies implemented yield measurable results.",
    },
    {
      question: "What makes your services unique?",
      answer:
        "Our data-driven approach, personalized strategies, and commitment to long-term success set us apart from others in the market.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section
      className="py-16"
      style={{
        background: "linear-gradient(0deg, #E7F3FF 0%, #DDE9F7 100%)",
      }}
    >
      <div className="container mx-auto max-w-5xl px-8 bg-white rounded-xl shadow-2xl py-12">
        {/* Header */}
        <h3 className="text-[#FF5900] text-[14px] font-semibold uppercase mb-4 tracking-wide">
          Business Consulting
        </h3>
        <h2 className="text-[#001D51] text-[32px] font-extrabold mb-10 leading-snug">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <div
                className="flex justify-between items-center cursor-pointer hover:bg-gray-50 transition duration-300 rounded-md px-4 py-3"
                onClick={() => toggleFAQ(index)}
              >
                <h3
                  className={`text-[20px] font-medium ${
                    openIndex === index ? "text-[#009CDE]" : "text-[#001D51]"
                  }`}
                >
                  {faq.question}
                </h3>
                <span
                  className={`text-[28px] font-bold ${
                    openIndex === index ? "text-[#FF5900]" : "text-[#001D51]"
                  }`}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-[18px] text-[rgba(0,0,0,0.7)] leading-[26px] pt-4 pl-6 pr-4 border-l-4 border-[#009CDE]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
