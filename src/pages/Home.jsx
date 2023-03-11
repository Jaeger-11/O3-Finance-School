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
          <div 
          className="md:flex-[40%] hero-image-box ">
            <motion.img 
            initial={{opacity: 0, x: 100}}
            whileInView={{opacity:1, x:0}}
            transition = {{duration: 1}}
            src={heroImage} alt="finance photo" className="mx-auto" />
          </div>
          <motion.article 
          initial={{opacity:0}} 
          whileInView={{ opacity: 1}} 
          transition={{duration: 2}}
          className="text-center text-black md:text-left md:flex-[60%] ">
            <h3 className="text-xl transition-all mb-2 md:text-4xl benzin-bold">
              We teach <br /> you about <span className="text-darkblue">finance</span> 
            </h3>
            <p className="md:text-2xl benzin-regular">Financial information to achieve wealth creation, wealth sustainability, and wealth management</p>
            <Link to='/about'><button className="text-darkblue my-4 font-medium text-base py-4 px-8 shadow-xl md:text-lg">Read More</button></Link>
          </motion.article>
        </section>
        <motion.section
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}} 
        duration={0.5}
        className="grad flex flex-col gap-4 justify-around py-6 mb-8 md:m-8 md:flex-row md:gap-0">
          {stats.map((info) => {
            const { count, text, icon } = info
            return (
              <div key={text} className="flex flex-wrap justify-center">
                <img src={icon} alt={text}/>
                <p className="text-center md:text-left"> 
                  <span className="text-xl text-darkblue benzin-medium md:text-3xl">{count}+</span> <br /> 
                  <span className="text-base text-black benzin-regular md:text-lg">{text}</span>  
                </p>
              </div>
            )
          })}
        </motion.section>
        </div>
      </main>

      {/* Courses Section */}
      <section className="mt-24 grad py-8">
        <CoursesHome/>
      </section>

      {/* Join Community Section */}
      <section className=" comm-section">
        <div className="container mx-auto py-6 benzin-bold">
        <h3 className="text-center text-lg md:text-2xl">Join Our Communities</h3>
        <div className="flex flex-col gap-6 md:flex-row">
          <motion.img
          initial={{x: -200}}
          whileInView={{x:0}} 
          duration={0.5}
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

      {/* Updates Section */}
      <section className=" text-black py-12 px-4 text-center font-alternate update-section">
        <article  className="container mx-auto flex flex-col gap-4 md:w-1/2 md:mx-auto md:py-6">
          <h2 className="text-xl benzin-bold md:text-3xl">DONT WANT TO MISS OUT ON UPDATES?</h2>
          <p className="md:text-xl md:my-6">Subscribe to our newsletter and get updated news on tokens, coins and other finance news</p>
          <div className="bordew-max mx-auto overflow-hidden shadow-update">
            <input type="email" name="email" id="email" 
            placeholder="E-mail Address" 
            className="px-4 bg-[rgba(74, 13, 255, 0.2);] py-2 text-black focus:outline-none ml-1 w-[55vw] sm:w-auto md:pl-8"/>
            <button className="text-white bg-darkblue px-2 py-2 font-semibold md:px-6">Subscribe</button>
          </div>
        </article>
      </section>
      <Footer/>
    </div>
  )
}

export default Home
