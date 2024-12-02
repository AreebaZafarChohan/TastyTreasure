import { LiProps } from '@/types/componentTypes';
import Link from 'next/link';
import React from 'react'

const NavbarLi: React.FC<LiProps> = ({href, name}) => {
  return (
    <Link href={href} className='text-black font-semibold border-b-2 border-transparent hover:border-black transition-all duration-500 ease px-2'><li>{name}</li></Link>
  );
};

export default NavbarLi;