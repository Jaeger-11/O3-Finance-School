import React from 'react';
import O3logo from "../assets/logo.png";
import {useState} from "react";
// import { a } from "react-router-dom";
import { motion } from 'framer-motion';

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const toggleClicked = () => {
    setClicked(!clicked);
  }

  return (
    <motion.nav className="jakarta border-b border-lightblue text-darkblue mx-auto px-4 py-2 md:p-0 "
    initial={{opacity:0,y:-50}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5}}
    >
      <div className="flex items-center justify-between md:mx-[5vw]">
        <div>
          <a href="#home"><img src={O3logo} className="h-12 md:h-auto" alt="O3 finance school"/></a>
        </div>

        {/* <!-- menu items --> */}
        <div className="hidden md:flex gap-8 items-center text-base text-dark1 font-jakarta">
          <a href="#home" className="hover:font-bold font-medium transition-all">Home</a>
          <a href="#partners" className="hover:font-bold font-medium transition-all">Partners</a>
          <a href="#community" className="hover:font-bold font-medium transition-all">Community</a>
        </div>

        <div className='hidden font-jakarta md:block'>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_yZdEWX3-JQrzHuF48FWU3V2Bdd9PSQ-RdRM2WBIuABJDcQ/viewform"><button className='bg-lightblue text-white py-2 px-8 text-base font-medium rounded-full'>Register</button></a>
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
        <div id="menu" className="absolute z-10 flex flex-col items-center text-center rounded-md left-6 right-6 self-end py-4 mt-2 gap-4 bg-black">
          <p><a href="#home" className="hover:font-bold text-white font-medium transition-all">Home</a></p>
          <p><a href="#partners" className="hover:font-bold text-white font-medium transition-all">Partners</a></p>
          <p><a href="#community" className="hover:font-bold text-white font-medium">Community</a></p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_yZdEWX3-JQrzHuF48FWU3V2Bdd9PSQ-RdRM2WBIuABJDcQ/viewform"><button className='py-2 px-3 transition-all border border-darkblue bg-white text-darkblue hover:bg-darkblue md:mx-4'>Register</button></a>
        </div>
      </div> : null
      }
    </motion.nav>
  )
}

export default Navbar