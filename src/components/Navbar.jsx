import React from 'react';
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="font-alternate mx-auto p-4 md:p-0 md:pt-8 md:pb-4 md:border-b md:border-white">
      <div className="flex items-center justify-between container mx-auto">
        <div>
          <img src={logo} alt="logo" className='md:w-[200px]'/>
        </div>

        {/* <!-- menu items --> */}
        <div class="hidden md:flex gap-8 items-center">
          <a href="/" class="hover:font-bold text-white font-medium">Home</a>
          <a href="#" class="hover:font-bold text-white font-medium">About Us</a>
          <a href="#" class="hover:font-bold text-white font-medium">Courses</a>
          <a href="#" class="hover:font-bold text-white font-medium">Contact</a>
          <a href="#" class="hover:font-bold text-white font-medium">Events</a>
        </div>

        {/* <!-- Hamburger Icon --> */}
        <button class="hamburger md:hidden" id="menu-btn">
          <span class="hamburger-top "></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar