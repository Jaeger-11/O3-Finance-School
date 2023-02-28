import React from 'react';
import twitter from '../assets/twitter-black.svg';
import instagram from '../assets/instagram-black.svg';
import phone from '../assets/phone-black.svg';
import email from '../assets/mail-black.svg';
import logo from '../assets/footerLogo.png';
import { Link } from "react-router-dom";

const footerData = [
    {
        icon: phone,
        text: "08178624095"
    },
    {
        icon: email,
        text: "03financeschool@gmail.com"
    },
    {
        icon: twitter,
        text: "03financeschool"
    },
    {
        icon: instagram,
        text: "03financeschool"
    },
]

const Footer = () => {
  return (
    <footer className="grad text-black py-6">
        <section className='container mx-auto font-alternate px-8 py-8 md:flex md:flex-row-reverse md:justify-around md:items-start'>

            <div className='flex flex-col gap-6 md:flex-row md:flex-1 md:justify-around'>
                <section>
                    <h3 className='font-bold'>QUICK LINKS</h3>
                    <ul className='list-disc pl-4'>
                        <li className='my-2 font-normal'> <Link to="/about"> About us </Link></li>
                        <li className='my-2 font-normal'> <Link to="/courses"> Courses </Link></li>
                        <li className='my-2 font-normal'> <Link to="/events"> Events </Link></li>
                        <li className='my-2 font-normal'> <Link to="/communities"> Communities </Link></li>
                    </ul>
                </section>

                <section>
                    <h3 className='font-bold'>CONTACT INFO</h3>
                    {footerData.map(item => {
                        const { icon, text } = item
                        return (
                            <div key={icon} className="flex gap-4 my-2">
                                <img src={icon} alt={text} className="w-4 "/>
                                <p className='w-[10px] md:w-auto'>{text}</p>
                            </div>
                        )
                    })}
                </section>
            </div>

            <div className='my-6 md:my-0'>
                <Link to="/"><img src={logo} alt="logo"/></Link>
            </div>
        </section>
        
    </footer>
  )
}

export default Footer