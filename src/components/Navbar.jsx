import React, { useState } from 'react';
import Logo from '../assets/logo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='bg-white w-full h-24'>
      <div className='flex justify-between items-center h-full max-w-[1240px] mx-auto px-4 text-black'>
        {/* Apply a class to move the logo more to the left */}
        <img className='custom-width mx-auto md:ml-0 pt-3' src={Logo} alt="/" />
        <ul className='hidden md:flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Pricing</li>
          <li className='p-4'>Resources</li>
          <li className='p-4'>Students</li>
          <li className='p-4'>Teachers</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-white m-4'>PRIME TUTORING</h1>
        <li className='p-4 border-b border-gray-600 text-white'>Home</li>
        <li className='p-4 border-b border-gray-600 text-white'>Pricing</li>
        <li className='p-4 border-b border-gray-600 text-white'>Resources</li>
        <li className='p-4 border-b border-gray-600 text-white'>Students</li>
        <li className='p-4 text-white'>Teachers</li>
      </ul>
    </div>
  );
};

export default Navbar;
