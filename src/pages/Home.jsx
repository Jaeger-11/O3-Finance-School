import heroImage from "../assets/heroimagenew.png";
import discord from "../assets/discord.svg";
import telegram from "../assets/telegram.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CoursesHome from "../components/CoursesHome";
import { speakers, stats } from "../data";
import community from "../assets/communities.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PartnersCarousel from "../components/PartnersCarousel";

function Home() {
  return (
    <div className='home '>
      {/* hero section */}
      <main>
        <Navbar />
        <div className='container mx-auto'>
          <section className='flex flex-col gap-6 px-6 py-4 hero-content-box md:px-0 md:pb-12 md:flex-row md:justify-center md:items-center'>
            <motion.article
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, type: "tween" }}
              className='text-center text-black md:text-left md:flex-[60%] '
            >
              <h3 className='text-xl text-blue-700 transition-all mb-2 md:mb-10 md:text-4xl benzin-bold'>
                The Future of Work in Technology: <br /> Exhibition of Work
              </h3>
              <p className='mb-8 md:text-1xl benzin-regular'>
                Calling all undergraduates, aspirants, and fresh <br />{" "}
                graduates of Nigerian Tertiary Institutions!
              </p>
              <div className='bg-darkblue mt-5 p-4 w-[330px] text-white rounded-lg'>
                <p>
                  Gain practical insights on how to leverage technology to build
                  sustainable solutions
                </p>
              </div>

              <div className='w-[335px] px-3 py-5 bg-opacity-30 bg-green-100 rounded-lg border border-green-700 transform translate-x-[175px] translate-y-[-10px]'>
                <p>Become an Innovator in the Tech Ecosystem</p>
              </div>

              <Link to='/about'>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  className='bg-blue-700 text-white my-4 font-medium text-base py-4 px-8 shadow-xl rounded-md md:text-lg md:mt-12'
                >
                  Register Now
                </motion.button>
              </Link>
            </motion.article>
            <div className='md:flex-[40%] hero-image-box '>
              <motion.img
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.1, type: "tween" }}
                src={heroImage}
                alt='finance photo'
                className='mx-auto'
              />
            </div>
          </section>
        </div>
      </main>
      {/*Partners coureser */}
      <section>
        <div className='bg-darkblue text-white flex flex-row'>
          <div className='border-r-2  py-6 px-2'>
            <p className='font-[30px]'>
              Meet our <b>PARTNERS</b>
            </p>
          </div>
          <PartnersCarousel />
        </div>
      </section>
      <section>
        <article className='container mx-auto py-10 flex flex-col items-center'>
          <div className='text-center'>
            <h2>DEAR FRIEND</h2>
            <p>I want to let you in on a little secret</p>
            <p>
              On how to tap into the massive possibilities of Tech for Profits
              and Impact. Over the last few decades, technology has greatly
              increased its abilities and blown our minds
            </p>
          </div>
          <div className='border border-solid-5 w-3/4 rounded-lg p-3 flex flex-col md:flex-row'>
            <div>the video thumnail goes here</div>
            <div>
              <h4>Title</h4>
              <p>subtext here</p>
            </div>
          </div>
          <div className='px-40'>
            <p>And now, we are fully transitioning into a tech economy.</p>
            <p>
              You see, there are two categories of people in the tech ecosystem.
            </p>
            <ul>
              <li>
                <p>
                  The few elites who “own” the tech ecosystem - the tech gurus,
                  bros, and sis'
                </p>
              </li>
              <li>
                <p>
                  The masses who mind their “business” leaving the tech
                  ecosystem to the gurus
                </p>
              </li>
            </ul>
            <p className='w-1/2'>
              I was once in the second category, probably like you are right
              now, Unfortunately, that doesn’t work in this tech economy.
              Whether or not you decide to be involved, Tech affects everything
              you do.
            </p>
            <hr className='border border-[#000000] w-1/4 my-5' />
            <p>
              But, Good news! Tech is not just about the digital skills you can
              think of. There’s more!
            </p>
            <p>
              Where Tech Meets any career - Law, Accounting, Chemistry,
              Agriculture. There are endless possibilities for innovation.
            </p>
            <p>Tech is already changing the narrative in every career.</p>
            <p>
              And YOU must be at the edge of this change to maximize these
              possibilities.
            </p>
          </div>
        </article>
      </section>
      {/* Speakers Section */}
      <section>
        <div>
          <p className='text-center'>Meet</p>
          <p className='font-bold text-center'>OUR SPEAKERS</p>
          <hr className='border-[#000000] w-20 ml-[725px]' />
          <div className='grid grid-cols-4 gap-3 mt-5 px-4'>
            {speakers.map((speaker) => {
              const { name, desc, pic } = speaker;
              return (
                <div key={name}>
                  <div className='text-black rounded w-30 h-60 '>
                    <h4>{name}</h4>
                    <p>{desc}</p>
                    <img src={pic} alt='' />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className='py-6'>
          <h3 className='text-center'>PARTICIPATING SCHOOLS</h3>
          <hr className='border-[#000000] w-20 ml-[725px]' />
          <div>courasel</div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
