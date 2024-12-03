"use client";
import React, { useState } from 'react';
import NavbarLi from './NavbarLi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" p-2 rounded-lg md:shadow-lg shadow-[gray] text-center">
      {/* Hamburger Menu Icon for Small Screens */}
      <div className="flex flex-col bg-transparent justify-center items-center md:hidden ">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md focus:outline-none"
        >
          <span className="block w-6 h-[2px] bg-gray-800 mb-1 "></span>
          <span className="block w-6 h-[2px] bg-gray-800 mb-1"></span>
          <span className="block w-6 h-[2px] bg-gray-800"></span>
        </button>
      </div>

      {/* Navbar Links */}
      <ul
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex justify-start gap-12 px-2 mt-4 md:mt-0 `}
      >
        <NavbarLi href="/" name="Home" />
        <NavbarLi href="/about" name="About" />
        <NavbarLi href="/blogs" name="Blogs" />
        <NavbarLi href="/contact" name="Contact" />
      </ul>
    </div>
  );
};

export default Navbar;