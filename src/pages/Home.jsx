import heroImage from "../assets/heroimagenew.png";
import discord from "../assets/discord.svg";
import telegram from "../assets/telegram.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CoursesHome from "../components/CoursesHome";
import { stats } from "../data";
import community from "../assets/communities.png";
import { Link } from "react-router-dom";


function Home() {

  return (
    <div>
      {/* hero section */}
      <main className='hero '>
        <Navbar/>
        <div className='container mx-auto'>
        <section className='flex flex-col gap-6 px-4 py-8 md:px-0 md:pb-12 md:flex-row-reverse md:justify-center md:items-center'>
          <div className="md:flex-[40%]">
            <img src={heroImage} alt="finance photo" className="mx-auto" />
          </div>
          <article className="text-center text-black md:text-left md:flex-[60%]">
            <h3 className="text-xl mb-2 md:text-4xl benzin-bold">We teach <br /> you about <span className="text-darkblue">finance</span> </h3>
            <p className="md:text-2xl benzin-regular">Financial information to achieve wealth creation, wealth sustainability, and wealth management</p>
            <Link to='/about'><button className="text-darkblue my-4 font-medium text-base py-4 px-8 shadow-xl md:text-lg">Read More</button></Link>
          </article>
        </section>
        <section className="grad flex flex-col gap-4 justify-around py-6 mb-8 md:m-8 md:flex-row md:gap-0">
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
        </section>
        </div>
      </main>

      {/* Courses Section */}
      <section className="mt-24 grad py-8">
        <CoursesHome/>
      </section>

      {/* Join Community Section */}
      <section className="container mx-auto py-6 benzin-bold">
        <h3 className="text-center text-lg md:text-2xl">Join Our Communities</h3>
        <div className="flex flex-col gap-6 md:flex-row">
          <img src={community} alt="communities illustration" className="flex-1"/>
          <div className="flex flex-col justify-center md:flex-1 gap-8">
            <a href="https://t.me/O3FinanceSchool" className="bg-white flex gap-8 p-4 mx-auto rounded-md shadow-md w-3/4">
              <img src={telegram} alt="telegram" />
              <p >Telegram channel</p>
            </a>
            <a href="https://discord.gg/42smDNtS" className="bg-white flex gap-8 p-4 mx-auto rounded-md shadow-md w-3/4">
              <img src={discord} alt="discord" />
              <p >Discord channel</p>
            </a>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="bg-mobile-update-bg bg-no-repeat bg-cover text-white py-12 px-4 text-center font-alternate md:bg-desktop-update-bg">
        <article  className="container mx-auto flex flex-col gap-4 md:w-1/2 md:mx-auto md:py-6">
          <h2 className="text-xl benzin-bold md:text-3xl">DONT WANT TO MISS OUT ON UPDATES?</h2>
          <p className="md:text-xl md:my-6">Subscribe to our newsletter and get updated news on tokens, coins and other finance news</p>
          <div className="bordew-max mx-auto overflow-hidden">
            <input type="email" name="email" id="email" 
            placeholder="E-mail Address" 
            className="px-4 bg-[rgba(74, 13, 255, 0.2);] py-2 text-black shadow-md focus:outline-none ml-1 w-[55vw] sm:w-auto md:pl-8"/>
            <button className="text-white bg-darkblue px-2 py-2 font-semibold md:px-6">Subscribe</button>
          </div>
        </article>
      </section>
      <Footer/>
    </div>
  )
}

export default Home
