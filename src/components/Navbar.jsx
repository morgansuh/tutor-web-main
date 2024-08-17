import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-white w-full h-24">
      <div className="flex justify-between items-center h-full max-w-[1240px] mx-auto px-4 text-black">
        <img className="custom-width mx-auto md:ml-0 pt-3" src={Logo} alt="/" />
        <ul className="hidden md:flex">
          <li className="p-4">
            <a href="#pricing-section">Pricing</a>
          </li>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <a href="#courses-section">Courses</a>
          </li>
          <li className="p-4">
            <Link to="/Students">Student</Link>
          </li>
          <li className="p-4">
            <Link to="/Instructors">Instructors</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <li className="p-4 border-b border-gray-600 text-white">
          <a href="#pricing-section" onClick={handleNav}>
            Pricing
          </a>
        </li>
        <li className="p-4 border-b border-gray-600 text-white">
          <Link to="/" onClick={handleNav}>
            Home
          </Link>
        </li>
        <li className="p-4 text-white">
          <Link to="/courses" onClick={handleNav}>
            Courses
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
