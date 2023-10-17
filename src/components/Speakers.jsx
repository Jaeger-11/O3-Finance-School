import Profile from "../assets/profile.jpg";
import Profile2 from "../assets/profile2.png";
import oswald from "../assets/speakers/oswald-speaker.jpg";
import ihenyen from "../assets/speakers/speaker-ihenyen.jpg";
import stanley from "../assets/speakers/speaker-stanley.jpg";
import eyitayo from "../assets/speakers/eyitayo.jpg";
import thelma from "../assets/speakers/thelma.jpg"
let speakers = [
    {
      name: "Oswald Osaretin",
      position: "MANAGING PARTNER, DigitA",
      profile: oswald
    },
    {
      name: "Senator Ihenyen",
      position: "LEAD PARTNER, INFUSION LAWYERS",
      profile: ihenyen
    },
    {
      name: "Golomo Stanley",
      position: "CO-FOUNDER/CEO OF FARMCHAIN FINANCE & ROTACASH",
      profile: stanley
    },
   {
      name: "Eyitayo Ogunmola",
      position: "FOUNDER/CEO, UTIVA",
      profile: eyitayo
    },
    {
      name: "Thelma Opurum",
      position: "CO-FOUNDER, CARNET & ECLIPSE HR",
      profile: thelma
    },
//     {
//       name: "Golomo Stanley",
//       position: "Co-founder/CEO of Farmchain Finance & Rotacash",
//       profile: stanley
//     },
]

const Speakers = () => {
    return (
        <section className="speakers mt-4">
          {speakers.map((speaker) => {
            const {profile, name, position} = speaker
            return (
            <div className="speaker">
              <img src={profile} alt="" />
              <div className="profile text-white font-jakarta text-center">
                <h4 className="capitalize text-base font-bold">{name}</h4>
                <p className=" text-[10px]">{position}</p>
              </div>
            </div>
            )
          })}
        </section>
    )
}

export default Speakers;