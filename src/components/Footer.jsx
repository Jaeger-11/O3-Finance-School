import React from "react";
import twitter from "../assets/twitter-black.svg";
import instagram from "../assets/instagram-black.svg";
import phone from "../assets/phone-black.svg";
import email from "../assets/mail-black.svg";
import logo from "../assets/footerLogo.png";
import { Link } from "react-router-dom";

const footerData = [
  {
    icon: phone,
    text: "08178624095",
  },
  {
    icon: email,
    text: "03financeschool@gmail.com",
  },
  {
    icon: twitter,
    text: "03financeschool",
  },
  {
    icon: instagram,
    text: "03financeschool",
  },
];

const Footer = () => {
  return (
    <footer className='text-white bg-[#000] py-6'>
      <section className='container mx-auto font-alternate px-8 py-8 md:flex md:flex-row-reverse md:justify-around md:items-start'>
        <section className=' text-black py-12 px-4 text-center font-alternate update-section'>
          <article className='container mx-auto flex flex-col gap-4 md:w-1/2 md:mx-auto md:py-6'>
            <h2 className='text-xl benzin-bold md:text-3xl'>
              DONT WANT TO MISS OUT ON UPDATES?
            </h2>
            <p className='md:text-xl md:my-6'>
              Subscribe to our newsletter and get updated news on tokens, coins
              and other finance news
            </p>
            <div className='bordew-max mx-auto overflow-hidden shadow-update'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='E-mail Address'
                className='px-4 bg-[rgba(74, 13, 255, 0.2);] py-2 text-black focus:outline-none ml-1 w-[55vw] sm:w-auto md:pl-8'
              />
              <button className='text-white bg-darkblue px-2 py-2 font-semibold md:px-6'>
                Subscribe
              </button>
            </div>
          </article>
        </section>
        <div className='flex flex-col gap-6 md:flex-row md:flex-1 md:justify-around'>
          <section>
            <h3 className='font-bold'>QUICK LINKS</h3>
            <ul className='list-disc pl-4'>
              <li className='my-2 font-normal'>
                {" "}
                <Link to='/about'> About us </Link>
              </li>
              <li className='my-2 font-normal'>
                {" "}
                <Link to='/courses'> Courses </Link>
              </li>
              <li className='my-2 font-normal'>
                {" "}
                <Link to='/events'> Events </Link>
              </li>
              <li className='my-2 font-normal'>
                {" "}
                <Link to='/communities'> Communities </Link>
              </li>
            </ul>
          </section>

          <section>
            <h3 className='font-bold'>CONTACT INFO</h3>
            {footerData.map((item) => {
              const { icon, text } = item;
              return (
                <div key={icon} className='flex gap-4 my-2'>
                  <img src={icon} alt={text} className='w-4 ' />
                  <p className='w-[10px] md:w-auto'>{text}</p>
                </div>
              );
            })}
          </section>
        </div>

        <div className='my-6 md:my-0'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
