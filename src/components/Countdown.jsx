import React from "react";
import { useEffect, useState } from "react";

const Countdown = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2023-10-30T19:00:00+0100") - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference/ (86400000)),
              hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / ((1000 * 60 * 60))),
              minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
              seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
          }
      
          return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
      return(
        <section className="bg-[#002478] text-white p-6 text-center font-jakarta md:grid md:grid-cols-3 md:justify-center gap-[5vw]">
          <div>
            <div className="my-6">
              <p className="text-xs font-[300]">Date</p>
              <h4>30th October - 10th November, <br /> 2023</h4>
            </div>
            <div className="my-6">
              <p className="text-xs font-[300]">Time</p>
              <h4>07:00 pm daily</h4>
            </div>
          </div>
          <section className="my-6 border border-white-100 p-4 flex justify-evenly items-center font-bold text-sm rounded-3xl">
            <div><span className="text-xl md:text-2xl">{timeLeft.days}</span><br /> DAYS</div>
            <div><span className="text-xl md:text-2xl">{timeLeft.hours}</span><br /> HOURS</div>
            <div><span className="text-xl md:text-2xl">{timeLeft.minutes}</span><br /> MINS</div>
            <div><span className="text-xl md:text-2xl">{timeLeft.seconds}</span><br /> SECS</div>
          </section>
          <div className="justify-center hidden md:flex items-center ">
            <a href="https://bit.ly/FOWO3FS"> <p className="px-[5vw] py-4 w-max border rounded-full">Register</p> </a>
          </div>
        </section>
      )
}

export default Countdown;