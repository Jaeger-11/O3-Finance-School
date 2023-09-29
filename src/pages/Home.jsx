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
      <main>
        <Navbar />
        <div className='container mx-auto'>
          <section className='flex flex-col gap-6 px-4 py-8 hero-content-box md:px-0 md:pb-12 md:flex-row md:justify-center md:items-center'>
            <motion.article
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, type: "tween" }}
              className='text-center text-black md:text-left md:flex-[60%] '
            >
              <h3 className='text-xl transition-all mb-2 md:text-4xl benzin-bold'>
                The Future of Work in Technology: <br /> Exhibition of Work
              </h3>
              <p className='md:text-2xl benzin-regular'>
                Calling all undergraduates, aspirants, and fresh graduates of
                Nigerian Tertiary Institutions!
              </p>
              <div className='bg-darkblue p-4 text-white rounded'>
                <p>
                  Gain practical insights on how to leverage technology to build
                  sustainable solutions
                </p>
              </div>

              <div className='border-opacity-50 border-green-400'>
                <p>Become an Innovator in the Tech Ecosystem</p>
              </div>

              <Link to='/about'>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  className='bg-darkblue text-white my-4 font-medium text-base py-4 px-8 shadow-xl md:text-lg'
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
          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            duration={0.5}
            className='grad flex flex-col gap-4 justify-around py-6 mb-8 md:m-8 md:flex-row md:gap-0'
          >
            {stats.map((info) => {
              const { count, text, icon } = info;
              return (
                <div key={text} className='flex flex-wrap justify-center'>
                  <img src={icon} alt={text} />
                  <p className='text-center md:text-left'>
                    <span className='text-xl text-darkblue benzin-medium md:text-3xl'>
                      {count}+
                    </span>{" "}
                    <br />
                    <span className='text-base text-black benzin-regular md:text-lg'>
                      {text}
                    </span>
                  </p>
                </div>
              );
            })}
          </motion.section>
        </div>
      </main>

      {/* Courses Section */}
      <section className='mt-24 grad py-8'>
        <CoursesHome />
      </section>

      {/* Join Community Section */}
      <section className=' comm-section'>
        <div className='container mx-auto py-6 benzin-bold'>
          <h3 className='text-center text-lg md:text-2xl'>
            Join Our Communities
          </h3>
          <div className='flex flex-col gap-6 md:flex-row'>
            <motion.img
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5, type: "tween" }}
              src={community}
              alt='communities illustration'
              className='flex-1'
            />
            <motion.div className='flex flex-col justify-center md:flex-1 gap-8'>
              <a
                href='https://t.me/O3FinanceSchool'
                className='bg-white flex gap-8 p-4 mx-auto rounded-md shadow-md w-3/4'
              >
                <img src={telegram} alt='telegram' />
                <p>Telegram channel</p>
              </a>
              <a
                href='https://discord.gg/42smDNtS'
                className='bg-white flex gap-8 p-4 mx-auto rounded-md shadow-md w-3/4'
              >
                <img src={discord} alt='discord' />
                <p>Discord channel</p>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Updates Section */}

      <Footer />
    </div>
  );
}

export default Home;
