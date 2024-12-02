import React from 'react'
import NavbarLi from './NavbarLi'

const Navbar = () => {
  return (
    <div className='p-2 rounded-lg shadow-lg shadow-[gray]'>
        <ul className='flex justify-center gap-12 px-2'>
            <NavbarLi href='/' name='Home' />
            <NavbarLi href='/about' name='About ' />
            <NavbarLi href='/blogs' name='Blogs' />
            <NavbarLi href='/contact' name='Contact' />
        </ul>
    </div>
  );
};

export default Navbar;