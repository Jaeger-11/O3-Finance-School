import React from 'react';
import O3logo from "../assets/o3logo.png";
import {useState} from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const toggleClicked = () => {
    setClicked(!clicked);
  }

  return (
    <motion.nav className="jakarta border-b border-lightblue text-darkblue mx-auto p-4 md:p-0 md:pt-8 md:pb-4"
    initial={{opacity:0,y:-50}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5}}
    >
      <div className="flex items-center justify-between md:mx-[5vw]">
        <div>
          <a href="/"><img src={O3logo} className="h-8 md:h-auto" alt="O3 finance school"/></a>
        </div>

        {/* <!-- menu items --> */}
        <div className="hidden md:flex gap-8 items-center text-base text-dark1 font-jakarta">
          <Link to="/" className="hover:font-bold font-medium transition-all">Home</Link>
          <Link to="/" className="hover:font-bold font-medium transition-all">Partners</Link>
          <Link to="/" className="hover:font-bold font-medium transition-all">Community</Link>
          {/* <Link to="/about" className="hover:font-bold font-medium transition-all">About</Link>
          <Link to="/courses" className="hover:font-bold font-medium transition-all">Courses</Link>
          <Link to="/contact" className="hover:font-bold font-medium transition-all">Contact</Link>
          <Link to="/events" className="hover:font-bold font-medium transition-all">Events</Link> */}
        </div>

        <div className='hidden font-jakarta md:block border-l border-opacity-50 border-darkblue'>
          <button className='bg-lightblue text-white py-2 px-8 text-base font-medium rounded-full'>Register</button>
          {/* <button className='py-2 px-3 transition-all border border-darkblue text-darkblue hover:text-white hover:bg-darkblue md:mx-4'>Sign up</button>
          <button className='py-2 px-4 transition-all bg-darkblue text-white hover:bg-white hover:text-darkblue hover:border hover:border-darkblue'>Login</button> */}
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
          <p><Link to="/about" className="hover:font-bold text-white font-medium transition-all">About</Link></p>
          <p><Link to="/courses" className="hover:font-bold text-white font-medium">Courses</Link></p>
          <p><Link to="/contact" className="hover:font-bold text-white font-medium transition-all">Contact</Link></p>
          <p><Link to="/events" className="hover:font-bold text-white font-medium transition-all">Events</Link></p>
          <button className='py-2 px-3 transition-all border border-darkblue bg-white text-darkblue hover:text-white hover:bg-darkblue md:mx-4'>Sign up</button>
          <button className='py-2 px-4 transition-all bg-darkblue text-white hover:bg-white hover:text-darkblue hover:border hover:border-darkblue'>Login</button>

        </div>
      </div> : null
      }
    </motion.nav>
  )
}

export default Navbar