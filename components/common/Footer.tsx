import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#009CDE] text-white py-[60px] px-[182px]">
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
        {/* Left Section */}
        <div className="flex flex-col gap-6 max-w-[300px]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              {/* Using Next.js Image component for the logo */}
              <Image
                src="/assets/footerlogo.png"
                alt="Audit Consulting Logo"
                width={24} // Set appropriate width
                height={24} // Set appropriate height
                className="w-6 h-6"
              />
            </div>
            <h2 className="text-[20px] font-[600]">AUDIT CONSULTING</h2>
          </div>
          <p className="text-[14px] leading-[20px] text-[rgba(255,255,255,0.8)]">
            Velit facilisi senectus velit elementum. Consequat vel arcu feugiat
            dui eu tempor pretium ut porta. Dui pellentesque sagittis...
          </p>
          <div className="mt-4">
            <p className="text-[16px] font-[600] mb-3">Subscribe Us</p>
            <div className="flex gap-3">
              <div className="p-3 bg-white rounded-full hover:bg-[#FF5900] transition">
                <Facebook size={20} className="text-[#009CDE] hover:text-white" />
              </div>
              <div className="p-3 bg-white rounded-full hover:bg-[#FF5900] transition">
                <Twitter size={20} className="text-[#009CDE] hover:text-white" />
              </div>
              <div className="p-3 bg-white rounded-full hover:bg-[#FF5900] transition">
                <Linkedin size={20} className="text-[#009CDE] hover:text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-wrap gap-[40px] lg:gap-[80px]">
          {/* Services Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-[16px] font-[600] mb-4">Services</h3>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-[#FF5900] transition">Audit</li>
              <li className="hover:text-[#FF5900] transition">Tax</li>
              <li className="hover:text-[#FF5900] transition">Advisory</li>
              <li className="hover:text-[#FF5900] transition">Consulting</li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-[16px] font-[600] mb-4">Useful Links</h3>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-[#FF5900] transition">Home</li>
              <li className="hover:text-[#FF5900] transition">About</li>
              <li className="hover:text-[#FF5900] transition">Blog</li>
              <li className="hover:text-[#FF5900] transition">Contact</li>
              <li className="hover:text-[#FF5900] transition">F.A.Q</li>
            </ul>
          </div>

          {/* Additional Column (Example: Resources) */}
          <div className="flex flex-col gap-2">
            <h3 className="text-[16px] font-[600] mb-4">Resources</h3>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-[#FF5900] transition">Case Studies</li>
              <li className="hover:text-[#FF5900] transition">Whitepapers</li>
              <li className="hover:text-[#FF5900] transition">Guides</li>
              <li className="hover:text-[#FF5900] transition">E-books</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-[600]">Subscribe for our newsletter</h3>
          <p className="text-[14px] leading-[20px] text-[rgba(255,255,255,0.8)]">
            Consequat vel arcu feugiat dui eu tempor pretium
          </p>
          <div className="flex gap-2 items-center">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-3 rounded-full text-black w-full max-w-[300px] focus:outline-none"
            />
            <button className="bg-white text-[#009CDE] px-6 py-3 text-[16px] font-[600] rounded-full transition-transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t-[1px] border-[rgba(255,255,255,0.3)] my-6" />

      {/* Footer Bottom */}
      <div className="text-center mt-4 text-[14px] text-[rgba(255,255,255,0.8)]">
        ©Copyright Audit Consulting 2024.
      </div>
    </footer>
  );
};

export default Footer;
