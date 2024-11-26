import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#009CDE] text-white py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
        {/* Column 1: About Section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <Image
                src="/assets/logo.png"
                alt="Audit Consulting Logo"
                width={40}
                height={40}
                priority
              />
            </div>
            <h2 className="text-[20px] font-semibold">AUDIT CONSULTING</h2>
          </div>
          <p className="text-[14px] leading-[20px] text-[rgba(255,255,255,0.8)]">
            Velit facilisi senectus velit elementum. Consequat vel arcu feugiat
            dui eu tempor pretium ut porta. Dui pellentesque sagittis...
          </p>
          <div>
            <p className="text-[16px] font-semibold mb-3">Follow Us</p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-3 bg-white rounded-full hover:bg-[#FF5900] transition"
              >
                <Facebook size={20} className="text-[#009CDE] hover:text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-3 bg-white rounded-full hover:bg-[#FF5900] transition"
              >
                <Twitter size={20} className="text-[#009CDE] hover:text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-white rounded-full hover:bg-[#FF5900] transition"
              >
                <Linkedin size={20} className="text-[#009CDE] hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Resources */}
        <div className="flex lg:ml-16 xl:ml-24 flex-col gap-2">
          <h3 className="text-[16px] font-semibold mb-3">Resources</h3>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-[#FF5900] transition">
              <Link href="/community">Community</Link>
            </li>
            <li className="hover:text-[#FF5900] transition">
              <Link href="/whitepapers">Whitepapers</Link>
            </li>
            <li className="hover:text-[#FF5900] transition">
              <Link href="/guides">Guides</Link>
            </li>
            <li className="hover:text-[#FF5900] transition">
              <Link href="/ebooks">E-books</Link>
            </li>
          </ul>
        </div>
        

        {/* Column 3: Services */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[16px] font-semibold mb-3">Services</h3>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-[#FF5900] transition">
              <Link href="/audit">Audit</Link>
            </li>
            <li className="hover:text-[#FF5900] transition">
              <Link href="/tax">Tax</Link>
            </li>
            <li className="hover:text-[#FF5900] transition">
              <Link href="/advisory">Advisory</Link>
            </li>
            <li className="hover:text-[#FF5900] transition">
              <Link href="/consulting">Consulting</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Subscribe */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-semibold mb-3">Subscribe for our newsletter</h3>
          <p className="text-[14px] leading-[20px] text-[rgba(255,255,255,0.8)]">
            Consequat vel arcu feugiat dui eu tempor pretium.
          </p>
          <div className="flex gap-2 items-center">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-full text-black w-full focus:outline-none"
            />
            <button className="bg-white text-[#009CDE] px-4 py-2 text-[16px] font-semibold rounded-full transition-transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t-[1px] border-[rgba(255,255,255,0.3)] my-4" />

      {/* Footer Bottom */}
      <div className="text-center text-[14px] text-[rgba(255,255,255,0.8)]">
        © {new Date().getFullYear()} Audit Consulting. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
