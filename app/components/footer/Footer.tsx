"use client";

import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-300 shadow-lg text-black py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Links */}
        <div>
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
        <div>
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
        <div>
          <h2 className="text-lg font-bold text-black mb-4">Follow Us</h2>
          <p className="text-gray-900 mb-4">
            Connect with us on social media for the latest updates and recipes!
          </p>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-950 transition duration-300 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-950  transition duration-300 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:example@tastytreasure.com"
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