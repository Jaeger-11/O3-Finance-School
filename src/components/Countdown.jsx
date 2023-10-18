import React from "react";
import { useEffect, useState } from "react";

const Countdown = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2023-10-30T19:00:00+0100") - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference/ (86400000)),
              hours: Math.floor(difference / (1000 * 60 * 60 * 24) % ((1000 * 60 * 60)) ),
              minutes: Math.floor((difference / 1000 / 60) % 60),
              seconds: Math.floor((difference / 1000) % 60),
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
        <section className="bg-[#002478] text-white p-6 text-center font-jakarta">
          <div className="my-6">
            <p className="text-xs font-[300]">Date</p>
            <h4>30th October - 10th November, <br /> 2023</h4>
          </div>
          <div className="my-6">
            <p className="text-xs font-[300]">Time</p>
            <h4>07:00 pm daily</h4>
          </div>
          <section className="my-6 border border-white-100 p-4 flex justify-evenly font-bold text-base rounded-3xl">
            <div><span>{timeLeft.days}</span><br /> DAYS</div>
            <div><span>{timeLeft.hours}</span><br /> HOURS</div>
            <div><span>{timeLeft.minutes}</span><br /> MINUTES</div>
            {/* <div><span>{timeLeft.seconds}</span><br /> SECONDS</div> */}
          </section>
        </section>
      )
}

export default Countdown;