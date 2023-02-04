import heroImage from "../assets/hero.png";
import desktopHeroImage from "../assets/desktop-hero.png";
import discord from "../assets/discord.svg";
import telegram from "../assets/telegram.svg";
import Footer from "../components/Footer";

function Home() {

  return (
    <div>
      {/* hero section */}
      <main className='hero '>
        <div className='container mx-auto'>
        <section className='flex flex-col gap-6 px-4 py-8 md:flex-row-reverse'>
          <div>
            <img src={heroImage} alt="finance photo" className="mx-auto w-1/2 md:hidden" />
            <img src={desktopHeroImage} alt="finance photo" className="hidden md:block"/>
          </div>
          <article className="text-center text-white">
            <h3 className="text-lg font-bold">We teach you about finance</h3>
            <p>Financial information to achieve wealth creation, wealth sustainability, and wealth management</p>
          </article>
        </section>
        </div>
      </main>

      {/* About section */}
      <section className="py-8 px-4 bg-lightblue">
        <article className="container mx-auto">
          <h3 className="text-darkblue text-2xl">About Us</h3>
          <h4 className="text-lg font-bold font-alternate">#On a Mission to drive Financial Independence.</h4>

          <div className="flex flex-col gap-4 font-alternate">
            <p>03 Finance School was birthed as a result of the harm that lack of financial Information has caused many individuals and countries in Africa.</p>
            <p>The Initiative’s goal is to promote financial education in the areas of Wealth Creation, Wealth Sustainability, and Wealth Management.</p>
            <p>We intend to organize seminars, workshops, webinars, online training, conferences, and charity events to boost financial education across Nigeria and Africa. We will conduct digital skills training and provide financial education for survival in the 21st century.</p>
            <p>Our focus is to create impactful programs that will make a pathway for youths to take appropriate actions for the development of themselves, and global village.</p>
          </div>
        </article>
      </section>

      {/* Join Community Section */}
      <section className="py-8 px-4 bg-white">
        <article className="text-center bg-lightgreen p-4">
          <p className="text-[#DBFFCD] text-lg">Want to become a student?</p>
          <h3 className="text-darkblue text-lg font-bold">JOIN OUR COMMMUNITIES</h3>
          <p className="text-white font-alternate text-base">Become a student and join other finance and blockchain enthusiast in our community. Share and gain ideas from different brains</p>
          <div className="w-[100%] my-4">
            <button className="bg-white text-sharpblue flex gap-4 justify-center items-center px-4 mx-auto rounded-md">
              <p className="font-alternate font-[600]">Join our Telegram channel</p>
              <img src={telegram} alt="telegram" />
            </button>
            <button className="bg-white mt-2 text-sharpblue flex gap-4 justify-center items-center px-4 mx-auto rounded-md">
              <p className="font-alternate font-[600]">Join our Discord channel</p>
              <img src={discord} alt="discord" />
            </button>
          </div>
        </article>
      </section>


      {/* Updates Section */}
      <section className="bg-mobile-update-bg bg-no-repeat bg-cover text-white py-8 px-4 text-center font-alternate">
        <article  className="container mx-auto flex flex-col gap-4">
          <h2 className="text-xl font-bold">DONT WANT TO MISS OUT ON UPDATES?</h2>
          <p>Subscribe to our newsletter and get updated news on tokens, coins and other finance news</p>
          <div className="border border-sharpblue rounded-md overflow-hidden">
            <input type="email" name="email" id="email" 
            placeholder="E-mail Address" 
            className="px-4 bg-[rgba(74, 13, 255, 0.2);] focus:border-none"/>
            <button className="text-white bg-sharpblue px-2 py-1 font-semibold">Subscribe</button>
          </div>
        </article>
      </section>
      <Footer/>
    </div>
  )
}

export default Home
