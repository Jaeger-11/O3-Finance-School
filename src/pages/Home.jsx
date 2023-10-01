import heroImage from "../assets/heroimagenew.png";
import discord from "../assets/discord.svg";
import telegram from "../assets/telegram.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CoursesHome from "../components/CoursesHome";
import { stats } from "../data";
import community from "../assets/communities.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Home() {

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
            <h3 className="text-xl transition-all mb-2 md:text-4xl benzin-bold">
              The Future of Work in Technology: <br /> Exhibition of Work
            </h3>
            <p className="md:text-2xl benzin-regular">Calling all undergraduates, aspirants, and fresh graduates of Nigerian Tertiary Institutions!</p>
            <Link to='/about'>
              <motion.button 
              whileTap={{scale:0.9}}
              whileHover={{scale: 1.1}}
              className="text-white bg-darkblue my-4 font-medium text-base py-2 px-4 md:text-lg">Register Now
              </motion.button>
            </Link>
          </motion.article>
        </section>
        </div>
      </main>
      {/* Dear Friend / Texts */}
      <article>
        <div>
          <h2 className="text-center text-2xl font-bold">DEAR FRIEND</h2>
          <p className="text-center px-4">
          I want to let you in a little secret. On how to tap into the massive possibilities of Tech for Profits and Impact. <br /> Over the last few decades, technology has greatly increased its abilities and blown our minds
          </p>
        </div>
        <section>
          {/* VIDEO AND SUBTEXT */}
        </section>
        <div>
          <p className="my-4 p-4">And now, we are fully transitioning into a tech economy. You see, there are two categories of people in the tech ecosystem. </p>
          <ul>
            <li>The few elites who “own” the tech ecosystem - the tech gurus, bros, and sis’</li>
            <li>The masses who mind their “business” leaving the tech ecosystem to the gurus.</li>
          </ul>
          <p>I was once in the second category, probably like you are right now, Unfortunately, that doesn’t work in this tech economy. Whether or not you decide to be involved, Tech affects everything you do.</p>
        </div>
        {/* DASH */}
        <div>
          <p>But, Good news! Tech is not just about the digital skills you can think of. There’s more!</p>
          <p>Where Tech Meets any career - Law, Accounting, Chemistry, Agriculture. There are endless possibilities for innovation.</p>
          <p>Tech is already changing the narrative in every career. And YOU must be at the edge of this change to maximize these possibilities.</p>
        </div>
      </article>
      {/* SPEAKERS */}
      <section></section>
      {/* PARTICIPATING SCHOOLS */}
      <section></section>
      {/* EVENTS */}
      <section></section>
      {/* Join Community Section */}
      <section className=" comm-section">
        <div className="container mx-auto py-6 benzin-bold">
        <h3 className="text-center text-lg md:text-2xl">Join Our Communities</h3>
        <div className="flex flex-col gap-6 md:flex-row">
          <motion.img
          initial={{x: -200}}
          whileInView={{x:0}} 
          transition={{duration: 0.5, type: 'tween'}}
          src={community} alt="communities illustration" className="flex-1"/>
          <motion.div
          
          className="flex flex-col justify-center md:flex-1 gap-8">
            <a href="https://t.me/O3FinanceSchool" className="bg-white flex gap-8 p-4 mx-auto rounded-md shadow-md w-3/4">
              <img src={telegram} alt="telegram" />
              <p >Telegram channel</p>
            </a>
            <a href="https://discord.gg/42smDNtS" className="bg-white flex gap-8 p-4 mx-auto rounded-md shadow-md w-3/4">
              <img src={discord} alt="discord" />
              <p >Discord channel</p>
            </a>
          </motion.div>
        </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Home
