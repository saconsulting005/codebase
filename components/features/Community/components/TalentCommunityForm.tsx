import React from "react";

const TalentCommunityForm: React.FC = () => {
  return (
    <div className="bg-gray-50 px-6 py-16 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-[32px] font-bold leading-[44px] text-[#009CDE] font-['Albert Sans'] text-center mb-8">
        Join our talent community
      </h2>

      {/* Upload Resume Section */}
      <div className="border-2 border-dashed border-gray-300 bg-white w-full max-w-[900px] p-6 text-center rounded-lg mb-8">
        <p className="text-[16px] font-normal leading-[28px] text-[#333333] mb-4">
          Upload your resume and get noticed by recruiters
        </p>
        <button className="px-6 py-2 bg-[#009CDE] text-white text-[16px] font-medium leading-[24px] rounded-full hover:bg-[#007BBE] transition duration-200">
          Upload Resume
        </button>
      </div>

      {/* Form Section */}
      <div className="bg-white w-full max-w-[900px] p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="block text-[14px] font-medium text-gray-700">
              First Name*
            </label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-lg px-4 py-2 text-[16px] text-gray-700 focus:outline-none focus:ring-[#009CDE] focus:border-[#009CDE]"
            />
          </div>
          {/* Last Name */}
          <div>
            <label className="block text-[14px] font-medium text-gray-700">
              Last Name*
            </label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-lg px-4 py-2 text-[16px] text-gray-700 focus:outline-none focus:ring-[#009CDE] focus:border-[#009CDE]"
            />
          </div>
          {/* Email Address */}
          <div>
            <label className="block text-[14px] font-medium text-gray-700">
              Email Address*
            </label>
            <input
              type="email"
              className="mt-2 block w-full border border-gray-300 rounded-lg px-4 py-2 text-[16px] text-gray-700 focus:outline-none focus:ring-[#009CDE] focus:border-[#009CDE]"
            />
          </div>
          {/* Phone Number */}
          <div>
            <label className="block text-[14px] font-medium text-gray-700">
              Phone Number*
            </label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-lg px-4 py-2 text-[16px] text-gray-700 focus:outline-none focus:ring-[#009CDE] focus:border-[#009CDE]"
            />
          </div>
          {/* City */}
          <div>
            <label className="block text-[14px] font-medium text-gray-700">
              City*
            </label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-lg px-4 py-2 text-[16px] text-gray-700 focus:outline-none focus:ring-[#009CDE] focus:border-[#009CDE]"
            />
          </div>
          {/* State/Province */}
          <div>
            <label className="block text-[14px] font-medium text-gray-700">
              State/Province*
            </label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-lg px-4 py-2 text-[16px] text-gray-700 focus:outline-none focus:ring-[#009CDE] focus:border-[#009CDE]"
            />
          </div>
          {/* Country */}
          <div>
            <label className="block text-[14px] font-medium text-gray-700">
              Country*
            </label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-lg px-4 py-2 text-[16px] text-gray-700 focus:outline-none focus:ring-[#009CDE] focus:border-[#009CDE]"
            />
          </div>
          {/* Area of Interest */}
          <div>
            <label className="block text-[14px] font-medium text-gray-700">
              Area of Interest*
            </label>
            <input
              type="text"
              className="mt-2 block w-full border border-gray-300 rounded-lg px-4 py-2 text-[16px] text-gray-700 focus:outline-none focus:ring-[#009CDE] focus:border-[#009CDE]"
            />
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="mt-6">
          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              className="h-5 w-5 border-gray-300 rounded focus:ring-[#009CDE] focus:border-[#009CDE]"
            />
            <span className="text-[14px] font-normal leading-[20px] text-gray-600">
              *I hereby expressly consent to having Crowe LLP and its
              subsidiaries collect and process the personal data that I submit
              on this form for the purpose of administering and responding to my
              inquiry or request and managing my subscription to the Crowe
              talent community and employment opportunities. I acknowledge and
              agree that I have read the Privacy Policy and expressly consent to
              Crowe LLP and its subsidiaries use of my personal data in
              accordance with the Privacy Policy.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button className="px-6 py-2 bg-[#009CDE] text-white text-[16px] font-medium leading-[24px] rounded-full hover:bg-[#007BBE] transition duration-200">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TalentCommunityForm;
