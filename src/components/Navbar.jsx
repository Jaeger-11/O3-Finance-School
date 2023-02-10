import React from 'react';
import logo from "../assets/logo.svg";
import {useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const toggleClicked = () => {
    setClicked(!clicked);
  }

  return (
    <nav className="font-alternate mx-auto p-4 md:p-0 md:pt-8 md:pb-4 md:border-b md:border-white">
      <div className="flex items-center justify-between container mx-auto">
        <div>
          <a href="/"><img src={logo} alt="logo" className='md:w-[200px]'/></a>
        </div>

        {/* <!-- menu items --> */}
        <div class="hidden md:flex gap-8 items-center">
          <Link to="/" className="hover:font-bold text-white font-medium">Home</Link>
          <Link to="/about" className="hover:font-bold text-white font-medium">About Us</Link>
          <Link to="/courses" className="hover:font-bold text-white font-medium">Courses</Link>
          <Link to="/contact" className="hover:font-bold text-white font-medium">Contact</Link>
          <Link to="/events" className="hover:font-bold text-white font-medium">Events</Link>
        </div>

        {/* <!-- Hamburger Icon --> */}
        <button className={clicked ? "open hamburger md:hidden" : "hamburger md:hidden"} id="menu-btn" onClick={toggleClicked}>
          <span className="hamburger-top "></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* <!-- Mobile Menu --> */}
      { clicked ?  
      <div class="md:hidden">
        <div id="menu" className="absolute flex flex-col items-center text-center rounded-md left-6 right-6 self-end py-4 mt-2 gap-4 bg-black">
          <p><Link to="/" className="hover:font-bold text-white font-medium">Home</Link></p>
          <p><Link to="/about" className="hover:font-bold text-white font-medium">About Us</Link></p>
          <p><Link to="/courses" className="hover:font-bold text-white font-medium">Courses</Link></p>
          <p><Link to="/contact" className="hover:font-bold text-white font-medium">Contact</Link></p>
          <p><Link to="/events" className="hover:font-bold text-white font-medium">Events</Link></p>
        </div>
      </div> : null
      }
    </nav>
  )
}

export default Navbar