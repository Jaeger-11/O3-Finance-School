import Profile from "../assets/profile.jpg";
import Profile2 from "../assets/profile2.png";
import oswald from "../assets/speakers/oswald-speaker.jpg";
import ihenyen from "../assets/speakers/speaker-ihenyen.jpg";
import stanley from "../assets/speakers/speaker-stanley.jpg"
let speakers = [
    {
      name: "Oswald Osaretin",
      position: "CEO, Africall",
      profile: oswald
    },
    {
      name: "Senator Ihenyen",
      position: "Lead Partner, Infusion Lawyers",
      profile: ihenyen
    },
    {
      name: "Golomo Stanley",
      position: "Co-founder/CEO of Farmchain Finance & Rotacash",
      profile: stanley
    },
   {
      name: "Oswald Osaretin",
      position: "CEO, Africall",
      profile: oswald
    },
    {
      name: "Senator Ihenyen",
      position: "Lead Partner, Infusion Lawyers",
      profile: ihenyen
    },
    {
      name: "Golomo Stanley",
      position: "Co-founder/CEO of Farmchain Finance & Rotacash",
      profile: stanley
    },
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
                <p className="uppercase text-[10px]">{position}</p>
              </div>
            </div>
            )
          })}
        </section>
    )
}

export default Speakers;