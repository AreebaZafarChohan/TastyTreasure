"use client";

import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-200 shadow-lg text-black py-8">
      <div className=" px-8 grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-12 ">
        {/* Navigation Links */}
        <div className="text-center">
          <h2 className="text-lg font-bold text-black mb-4">Navigation</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="hover:underline transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:underline  transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:underline  transition duration-300"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="text-center">
          <h2 className="text-lg font-bold text-black mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#privacy"
                className="hover:underline  transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#terms"
                className="hover:underline  transition duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:underline  transition duration-300"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#support"
                className="hover:underline  transition duration-300"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h2 className="text-lg font-bold text-black mb-4">Follow Us</h2>
          <p className="text-gray-900 mb-4">
            Connect with us on social media for the latest updates and recipes!
          </p>
          <div className="flex space-x-4 justify-center">
            <a
              href="https://www.linkedin.com/in/areeba-zafar-973917303/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BlUNLSWBlTimkXDqOhl2BRw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-950 transition duration-300 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-950  transition duration-300 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:areebazafar715@gmail.com"
              className="hover:text-orange-950  transition duration-300 text-2xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-black mt-8 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tasty Treasure. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;