import React from 'react';
import O3logo from "../assets/o3logo.png";
import {useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const toggleClicked = () => {
    setClicked(!clicked);
  }

  return (
    <nav className="font-alternate text-darkblue mx-auto p-4 md:p-0 md:pt-8 md:pb-4">
      <div className="flex items-center justify-between container mx-auto">
        <div>
          <a href="/"><img src={O3logo} alt="O3 finance school"/></a>
        </div>

        {/* <!-- menu items --> */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="hover:font-bold font-medium transition-all">Home</Link>
          <Link to="/about" className="hover:font-bold font-medium transition-all">About Us</Link>
          <Link to="/courses" className="hover:font-bold font-medium transition-all">Courses</Link>
          <Link to="/contact" className="hover:font-bold font-medium transition-all">Contact</Link>
          <Link to="/events" className="hover:font-bold font-medium transition-all">Events</Link>
        </div>

        <div className='hidden md:block border-l border-opacity-50 border-darkblue'>
          <button className='py-2 px-3 transition-all border border-darkblue text-darkblue hover:text-white hover:bg-darkblue md:mx-4'>Sign up</button>
          <button className='py-2 px-4 transition-all bg-darkblue text-white hover:bg-white hover:text-darkblue hover:border hover:border-darkblue'>Login</button>
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
      <div className="md:hidden">
        <div id="menu" className="absolute flex flex-col items-center text-center rounded-md left-6 right-6 self-end py-4 mt-2 gap-4 bg-black">
          <p><Link to="/" className="hover:font-bold text-white font-medium transition-all">Home</Link></p>
          <p><Link to="/about" className="hover:font-bold text-white font-medium transition-all">About Us</Link></p>
          <p><Link to="/courses" className="hover:font-bold text-white font-medium">Courses</Link></p>
          <p><Link to="/contact" className="hover:font-bold text-white font-medium transition-all">Contact</Link></p>
          <p><Link to="/events" className="hover:font-bold text-white font-medium transition-all">Events</Link></p>
          <button className='py-2 px-3 transition-all border border-darkblue bg-white text-darkblue hover:text-white hover:bg-darkblue md:mx-4'>Sign up</button>
          <button className='py-2 px-4 transition-all bg-darkblue text-white hover:bg-white hover:text-darkblue hover:border hover:border-darkblue'>Login</button>

        </div>
      </div> : null
      }
    </nav>
  )
}

export default Navbar