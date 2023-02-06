import React from 'react';
import notfound from "../assets/undraw_not-found.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-lightblue flex flex-col h-screen justify-center items-center font-alternate">
        <div className='w-1/2 h-[60%]'>
            <img src={notfound} alt="notfound" className='h-full mx-auto'/>
            <div className='text-center py-4'>
                <h3 className='text-2xl benzin-medium'>Oopps, Page under production</h3>
                <p className='text-xl benzin-regular'> Go Back <Link to="/" className='italic text-lightgreen hover:text-darkblue'> Home </Link> </p>
            </div>
        </div>
    </div>
  )
}

export default NotFound