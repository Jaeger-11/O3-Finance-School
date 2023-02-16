import heroImage from "../assets/heroimagenew.png";
import discord from "../assets/discord.svg";
import telegram from "../assets/telegram.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import coursesicon from "../assets/coursesicon.png";
import studentsicon from "../assets/studentsicon.png";
import teachersicon from "../assets/teachersicon.png";

const stats = [
  {
    icon: coursesicon,
    text: "Courses",
    count: 10
  },
  {
    icon: studentsicon,
    text: "Students",
    count: 75  
  },
  {
    icon: teachersicon,
    text: "Teachers",
    count: 5  
  },
]

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
            <button className="text-darkblue my-4 font-medium text-base py-4 px-8 shadow-xl md:text-lg">Read More</button>
          </article>
        </section>
        <section className="grad flex flex-col gap-4 justify-around py-6 md:m-8 md:flex-row md:gap-0">
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
      <section>

      </section>

      {/* About section */}
      <section className="py-8 px-4 bg-lightblue about md:py-12">
        <article className="container mx-auto">
          <h3 className="text-darkblue text-xl benzin-bold md:text-2xl">About Us</h3>
          <h4 className="text-lg font-bold font-alternate my-2">#On a Mission to drive Financial Independence.</h4>

          <div className="flex flex-col gap-4 font-alternate md:text-xl">
            <p>03 Finance School was birthed as a result of the harm that lack of financial Information has caused many individuals and countries in Africa.</p>
            <p>The Initiative’s goal is to promote financial education in the areas of Wealth Creation, Wealth Sustainability, and Wealth Management.</p>
            <p>We intend to organize seminars, workshops, webinars, online training, conferences, and charity events to boost financial education across Nigeria and Africa. We will conduct digital skills training and provide financial education for survival in the 21st century.</p>
            <p>Our focus is to create impactful programs that will make a pathway for youths to take appropriate actions for the development of themselves, and global village.</p>
          </div>
        </article>
      </section>

      {/* Join Community Section */}
      <section className="py-8 px-4 bg-white">
        <article className="text-center bg-lightgreen p-4 md:w-1/2 md:mx-auto">
        <p className="text-[#DBFFCD] text-lg benzin-medium md:text-2xl">Want to become a student?</p>
        <h3 className="text-darkblue text-lg benzin-medium md:text-2xl">JOIN OUR COMMMUNITIES</h3>
        <p className="text-white font-alternate text-base md:text-xl md:my-6">Become a student and join other finance and blockchain enthusiast in our community. Share and gain ideas from different brains</p>
          <div className="w-[100%] my-4 md:flex md:justify-around md:items-center">
            <a href="https://t.me/O3FinanceSchool" className="bg-white text-sharpblue flex gap-2 justify-center items-center px-4 mx-auto rounded-md">
              <p className="font-alternate font-[600] text-[16px]">Join our Telegram channel</p>
              <img src={telegram} alt="telegram" />
            </a>
            <a href="https://discord.gg/42smDNtS" className="bg-white mt-2 text-sharpblue flex gap-2 justify-center items-center px-4 mx-auto rounded-md md:mt-0">
              <p className="font-alternate font-[600]">Join our Discord channel</p>
              <img src={discord} alt="discord" />
            </a>
          </div>
        </article>
      </section>


      {/* Updates Section */}
      <section className="bg-mobile-update-bg bg-no-repeat bg-cover text-white py-12 px-4 text-center font-alternate md:bg-desktop-update-bg">
        <article  className="container mx-auto flex flex-col gap-4 md:w-1/2 md:mx-auto md:py-6">
          <h2 className="text-xl benzin-bold md:text-3xl">DONT WANT TO MISS OUT ON UPDATES?</h2>
          <p className="md:text-xl md:my-6">Subscribe to our newsletter and get updated news on tokens, coins and other finance news</p>
          <div className="border border-sharpblue bg-sharpblue w-max mx-auto rounded-md overflow-hidden">
            <input type="email" name="email" id="email" 
            placeholder="E-mail Address" 
            className="px-4 bg-[rgba(74, 13, 255, 0.2);] text-sharpblue focus:outline-none ml-1 w-[55vw] sm:w-auto md:pl-12 md:py-1"/>
            <button className="text-white bg-sharpblue px-2 py-1 font-semibold md:px-6 md:py-2">Subscribe</button>
          </div>
        </article>
      </section>
      <Footer/>
    </div>
  )
}

export default Home
