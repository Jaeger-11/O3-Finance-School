import React from 'react';
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar/>
      <section className='container px-4 mx-auto mt-4 about-section md:p-0 md:mt-10'>
        <h2 className="text-xl mb-2 benzin-bold"> We teach you about <span className="text-darkblue">finance</span> </h2>
        <h4 className='benzin-regular text-base md:text-lg'>Financial information to achieve wealth creation, <br /> wealth sustainability and wealth management</h4>

        <article className="container mx-auto">
          <h4 className="font-bold font-alternate my-2">#On a Mission to drive Financial Independence.</h4>

          <div className="flex flex-col gap-4 font-alternate">
            <p>03 Finance School was birthed as a result of the harm that lack of financial Information has caused many individuals and countries in Africa.</p>
            <p>The Initiative’s goal is to promote financial education in the areas of Wealth Creation, Wealth Sustainability, and Wealth Management.</p>
            <p>We intend to organize seminars, workshops, webinars, online training, conferences, and charity events to boost financial education across Nigeria and Africa. We will conduct digital skills training and provide financial education for survival in the 21st century.</p>
            <p>Our focus is to create impactful programs that will make a pathway for youths to take appropriate actions for the development of themselves, and global village.</p>
          </div>
        </article>
      </section>
    </div>

  )
}

export default About