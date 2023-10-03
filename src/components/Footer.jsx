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
        <section className=' text-white px-4 font-alternate'>
          <article className='flex flex-col gap-2'>
            <h2 className='font-bold'>Email Notification</h2>
            <p className='font-normal md:my-2'>
              stay updated with our educated and seasoned <br /> news letter
            </p>
            <div className='bordew-max overflow-hidden shadow-update flex md:flex-row'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='E-mail Address'
                className='px-4 bg-[rgba(74, 13, 255, 0.2);] py-2 text-black rounded-md focus:outline-none w-[55vw] sm:w-auto'
              />
              <button className='text-white bg-darkblue px-2 py-2 font-semibold rounded-md md:ml-2 md:px-6'>
                Register Now
              </button>
            </div>
          </article>
        </section>
        <div className='flex flex-col gap-6 md:flex-row md:flex-1 md:justify-around'>
          <section>
            <h3 className='font-bold'>Resource</h3>
            <ul className='list-none'>
              <li className='my-2 font-normal'>
                {" "}
                <Link to='/communities'> community</Link>
              </li>
              <li className='my-2 font-normal'>
                {" "}
                <Link to='/events'> Event</Link>
              </li>
              <li className='my-2 font-normal'>
                {" "}
                <Link to='/'> Help Center</Link>
              </li>
              <li className='my-2 font-normal'>
                {" "}
                <Link to='/'> Partners</Link>
              </li>
            </ul>
          </section>
          <section>
            <h3 className='font-bold'>Company</h3>
            <ul className='list-none'>
              <li className='my-2 font-normal'>
                {" "}
                <Link to='/about'> About us </Link>
              </li>
              <li className='my-2 font-normal'>
                {" "}
                <Link to='/courses'> Meet the Team </Link>
              </li>
              <li className='my-2 font-normal'>
                {" "}
                <Link to='/events'> Media </Link>
              </li>
            </ul>
          </section>
          <section>
            <h3 className='font-bold'>Product</h3>
            <ul className='list-none'>
              <li className='my-2 font-normal'>
                {" "}
                <Link to='/about'> Integration </Link>
              </li>
              <li className='my-2 font-normal'>
                {" "}
                <Link to='/courses'> Features </Link>
              </li>
              <li className='my-2 font-normal'>
                {" "}
                <Link to='/events'> Solution </Link>
              </li>
              <li className='my-2 font-normal'>
                {" "}
                <Link to='/communities'> Developers </Link>
              </li>
            </ul>
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
