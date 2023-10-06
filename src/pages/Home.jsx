import heroImage from "../assets/heroimagenew.png";
import discord from "../assets/discord.svg";
import telegram from "../assets/telegram.svg";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CoursesHome from "../components/CoursesHome";
import { stats } from "../data";
import community from "../assets/communities.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Teacher from "../assets/Teacher.svg";
import Student from "../assets/Student.svg";
import Ellipse1 from "../assets/round-hero-mobile.svg";
import Profile from "../assets/profile.jpg";
import Profile2 from "../assets/profile2.png";
import Gallery1 from "../assets/gallery1.png";
import Gallery2 from "../assets/gallery2.png";
import Gallery3 from "../assets/gallery3.png";
import Gallery4 from "../assets/gallery4.png";
import Gallerybig from "../assets/gallerybig.png";

function Home() {
  let speakers = [
    {
      name: "micheal jerry",
      position: "CEO, Africall",
      profile: Profile
    },
    {
      name: "micheal jerry",
      position: "CEO, Africall",
      profile: Profile2
    },
    {
      name: "micheal jerry",
      position: "CEO, Africall",
      profile: Profile2
    },
    {
      name: "micheal jerry",
      position: "CEO, Africall",
      profile: Profile
    },
    {
      name: "micheal jerry",
      position: "CEO, Africall",
      profile: Profile2
    },
    {
      name: "micheal jerry",
      position: "CEO, Africall",
      profile: Profile
    },
  ]

  return (
    <div className='home '>
      {/* hero section */}
      <main >
        <Navbar/>
        <div className='container mx-auto'>
        <section className='flex flex-col gap-6 px-4 py-8 hero-content-box md:px-0 md:pb-12 md:flex-row-reverse md:justify-center md:items-center'>
          <motion.article 
          initial={{opacity:0, y:100}} 
          whileInView={{ opacity: 1, y:0}} 
          transition={{duration: 1, delay: 0.1, type: 'tween'}}
          className=" text-black md:text-left md:flex-[60%] ">
            <h3 className="text-[32px] transition-all mb-2 md:text-4xl clash-semibold text-dark2">
              The Future of Work in Technology: <br /> <span className="text-lightblue">Exhibition of Work</span> 
            </h3>
            <p className="text-sm md:text-2xl font-jakarta w-2/3 mt-4 text-dark1">Calling all undergraduates, aspirants, and fresh graduates of Nigerian Tertiary Institutions!</p>
            <Link to='/about'>
              <motion.button 
              whileTap={{scale:0.9}}
              whileHover={{scale: 1.1}}
              className="text-white bg-lightblue rounded clash-semibold my-8 font-medium text-base py-2 px-4 md:text-lg">Register Now
              </motion.button>
            </Link>
          </motion.article>
        </section>
        <motion.div
          initial={{opacity:0, y:100}} 
          whileInView={{ opacity: 1, y:0}} 
          transition={{duration: 1, delay: 0.1, type: 'tween'}}
          className="hero-images-cont">
            <img src={Teacher} alt="" className="teacher-img"/>
            <img src={Student} alt="" className="student-img"/>
            <img src={Ellipse1} alt="" className="mobile-spiral"/>
            <div className="green-abs">Become an innovator in the Tech Ecosystem</div>
            <div className="blue-abs">Gain practical insights on how to leverage <br /> technology to build sustainable solutions</div>
          </motion.div>
        </div>
        <section className="text-white font-[500] bg-[#001B6B] h-[54px] partners font-jakarta text-xs">
          <div className="meet-partners">Meet our &nbsp; <span className="font-semibold">PARTNERS</span></div>
        </section>
      </main>
      {/* Dear Friend / Texts */}
      <article>
        <div>
          <h2 className="text-center text-3xl font-bold text-dark2 font-jakarta my-4">DEAR FRIEND</h2>
          <p className="text-center px-6 font-jakarta text-base">
          I want to let you in a little secret. On how to tap into the massive possibilities of Tech for Profits and Impact. <br /> Over the last few decades, technology has greatly increased its abilities and blown our minds
          </p>
        </div>
        <section>
          {/* VIDEO AND SUBTEXT */}
        </section>
        <div className="font-jakarta text-sm px-4">
          <p className="my-4 py-4">And now, we are fully transitioning into a tech economy. You see, there are two categories of people in the tech ecosystem. </p>
          <ul className="list-disc mx-4 mb-4">
            <li>The few elites who “own” the tech ecosystem - the tech gurus, bros, and sis’</li>
            <li>The masses who mind their “business” leaving the tech ecosystem to the gurus.</li>
          </ul>
          <p>I was once in the second category, probably like you are right now, Unfortunately, that doesn’t work in this tech economy. Whether or not you decide to be involved, Tech affects everything you do.</p>
          <p className="my-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="112" height="2" viewBox="0 0 112 2" fill="none">
              <path d="M1 1H111" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </p>
          <p className="my-4">But, Good news! Tech is not just about the digital skills you can think of. There’s more!</p>
          <p className="my-4">Where Tech meets any career - Law, Accounting, Chemistry, Agriculture. There are endless possibilities for innovation.</p>
          <p className="my-4">Tech is already changing the narrative in every career. And YOU must be at the edge of this change to maximize these possibilities.</p>
        </div>
      </article>
      {/* ABOUT EVENT */}
      <div className="m-4 text-black font-jakarta">
          <span  className="text-xs">Learn</span>
          <h2 className="font-semibold text-base">ABOUT EVENT</h2>
          <p className="my-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="112" height="2" viewBox="0 0 112 2" fill="none">
              <path d="M1 1H111" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </p>
          <div className="text-sm">
            <p className="my-4">In the wave of rapid tech advancements such as AI and Machine Learning, you must have wondered…</p>
            <p className="my-4">What do I do with my career in this advanced digital economy? <br /> What does the future of work hold?</p>
            <p className="my-4">Is AI coming for our jobs? <br />
                Will Tech Replace more traditional jobs? <br />
                There’s no cause for panic. <br />
                And you don’t need to take these words just for it.
            </p>
            <p className="my-4">
            Because we’ll be taking you by the hands to show you everything you need to know about the tech ecosystem including how you can leverage the rapid advancements to be positioned like the Elites in your field of work. <br /> Don’t wait till the last minute, Get in now!
            </p>
          </div>
          <h3 className="my-6 text-base text-[#0B0B0B] flex items-center gap-4 font-[500]">Book Space  
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
            <path d="M20.7071 8.20711C21.0976 7.81658 21.0976 7.18342 20.7071 6.79289L14.3431 0.428932C13.9526 0.0384078 13.3195 0.0384078 12.9289 0.428932C12.5384 0.819457 12.5384 1.45262 12.9289 1.84315L18.5858 7.5L12.9289 13.1569C12.5384 13.5474 12.5384 14.1805 12.9289 14.5711C13.3195 14.9616 13.9526 14.9616 14.3431 14.5711L20.7071 8.20711ZM0 8.5H20V6.5H0V8.5Z" fill="black"/>
          </svg>
          </h3>
        </div>
        {/* EVENT DATE AND COUNTDOWN */}
        <section className="bg-[#002478] text-white p-6 text-center font-jakarta">
          <div className="my-6">
            <p className="text-xs font-[300]">Date</p>
            <h4>28th September 2023</h4>
          </div>
          <div className="my-6">
            <p className="text-xs font-[300]">Time</p>
            <h4>08:00 pm daily</h4>
          </div>
          <section className="my-6 border border-white-100 p-4 flex justify-evenly font-bold text-base rounded-3xl">
            <div><span>29</span><br /> DAYS</div>
            <div><span>20</span><br /> HOURS</div>
            <div><span>20</span><br /> MINUTES</div>
          </section>
        </section>
      {/* SPEAKERS */}
      <section className="mx-4 my-6 text-black font-jakarta relative">
        <svg width="326" className="blob" height="546" viewBox="0 0 326 546" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M273 546C423.774 546 546 423.774 546 273C546 122.226 423.774 0 273 0C122.226 0 0 122.226 0 273C0 423.774 122.226 546 273 546Z" fill="url(#paint0_linear_234_1035)" fill-opacity="0.7"/>
          <defs>
          <linearGradient id="paint0_linear_234_1035" x1="68.0015" y1="-19.7466" x2="313.257" y2="457.488" gradientUnits="userSpaceOnUse">
          <stop offset="0.236345" stop-color="#B0C4FF"/>
          <stop offset="0.577601" stop-color="#F99898"/>
          <stop offset="0.776042" stop-color="#B0BBD5"/>
          <stop offset="1" stop-color="#003AE8"/>
          </linearGradient>
          </defs>
        </svg>
        <span  className="text-xs">Meet</span>
        <h2 className="font-semibold text-base">OUR SPEAKERS</h2>
        <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="112" height="2" viewBox="0 0 112 2" fill="none">
              <path d="M1 1H111" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </p>
        <section className="speakers mt-4">
          {speakers.map((speaker) => {
            const {profile, name, position} = speaker
            return (
            <div className="speaker">
              <img src={profile} alt="" />
              <div className="profile text-white font-jakarta text-center">
                <h4 className="capitalize text-base font-bold">{name}</h4>
                <p className="uppercase text-[10px]">{position}</p>
              </div>
            </div>
            )
          })}
        </section>
      </section>
      {/* PARTICIPATING SCHOOLS */}
      <section className="mx-4 my-8 text-black font-jakarta">
        <h2 className="font-semibold text-base">PARTICIPATING SCHOOLS</h2>
        <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="112" height="2" viewBox="0 0 112 2" fill="none">
              <path d="M1 1H111" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </p>
      </section>
      {/* EVENTS */}
      <section className="mx-4 my-8 text-black font-jakarta">
        <span  className="text-xs">Event Gallery</span>
        <h2 className="font-semibold text-base">O3 EVENTS IN GALLERY</h2>
        <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="112" height="2" viewBox="0 0 112 2" fill="none">
              <path d="M1 1H111" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </p>
        <section className="gallery mt-4">
          <div>
            <img src={Gallerybig} alt="" />
          </div>
          <div className="small-gallery">
            <img src={Gallery4} alt="" />
            <img src={Gallery3} alt="" />
            <img src={Gallery1} alt="" />
            <img src={Gallery2} alt="" />
          </div>
        </section>
      </section>

      {/* Join Community Section */}
      <section className="px-4 py-8 text-black font-jakarta bg-[#F99898]">
        <span  className="text-xs">Stay Updated</span>
        <h2 className="font-semibold text-base">JOIN OUR COMMUNITIES</h2>
        <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="112" height="2" viewBox="0 0 112 2" fill="none">
              <path d="M1 1H111" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </p>
        <section className="mt-4 community-section">
          <p className="text-xs">Join the Community to be a part of the TIPS Conversation - The FOW Weekly Series on Web1, Web2, and Web3 Concepts, Versus Technology.</p>
          <div className="links">
            <a href="http://" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
            <a href="http://a" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" /></a>
          </div>
        </section>
      </section>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
