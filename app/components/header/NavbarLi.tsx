import { LiProps } from "@/types/componentTypes";
import Link from "next/link";
import React from "react";

const NavbarLi: React.FC<LiProps> = ({ href, name }) => {
  return (
    <li className="list-none p-2 md:p-0">
      <Link
        href={href}
        className="text-black text-sm sm:text-base md:text-lg border-b-2 border-transparent hover:border-black transition-all duration-500 ease px-2 "
      >
        {name}
      </Link>
    </li>
  );
};

export default NavbarLi;